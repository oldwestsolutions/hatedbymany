from fastapi import FastAPI, File, UploadFile, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from fastapi.staticfiles import StaticFiles
from fastapi.responses import FileResponse
import os
import shutil
from pathlib import Path
import uuid
from typing import List

app = FastAPI(title="HBM Luxury Images API", version="1.0.0")

# CORS middleware for frontend communication
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000", "http://localhost:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Create directories for image storage
UPLOAD_DIR = Path("uploads")
UPLOAD_DIR.mkdir(exist_ok=True)

# Mount static files for serving images
app.mount("/uploads", StaticFiles(directory="uploads"), name="uploads")

@app.get("/")
async def root():
    return {"message": "HBM Luxury Images API", "status": "running"}

@app.post("/upload-image/")
async def upload_image(file: UploadFile = File(...)):
    """Upload a single image file"""
    try:
        # Generate unique filename
        file_extension = file.filename.split(".")[-1] if "." in file.filename else "jpg"
        unique_filename = f"{uuid.uuid4()}.{file_extension}"
        
        # Save file
        file_path = UPLOAD_DIR / unique_filename
        with open(file_path, "wb") as buffer:
            shutil.copyfileobj(file.file, buffer)
        
        return {
            "message": "Image uploaded successfully",
            "filename": unique_filename,
            "url": f"/uploads/{unique_filename}",
            "size": file.size
        }
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Upload failed: {str(e)}")

@app.post("/upload-multiple/")
async def upload_multiple_images(files: List[UploadFile] = File(...)):
    """Upload multiple image files"""
    try:
        uploaded_files = []
        
        for file in files:
            # Generate unique filename
            file_extension = file.filename.split(".")[-1] if "." in file.filename else "jpg"
            unique_filename = f"{uuid.uuid4()}.{file_extension}"
            
            # Save file
            file_path = UPLOAD_DIR / unique_filename
            with open(file_path, "wb") as buffer:
                shutil.copyfileobj(file.file, buffer)
            
            uploaded_files.append({
                "filename": unique_filename,
                "url": f"/uploads/{unique_filename}",
                "size": file.size
            })
        
        return {
            "message": f"Successfully uploaded {len(files)} images",
            "files": uploaded_files
        }
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Upload failed: {str(e)}")

@app.get("/images/")
async def list_images():
    """List all uploaded images"""
    try:
        images = []
        for file_path in UPLOAD_DIR.glob("*"):
            if file_path.is_file():
                images.append({
                    "filename": file_path.name,
                    "url": f"/uploads/{file_path.name}",
                    "size": file_path.stat().st_size
                })
        return {"images": images}
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Failed to list images: {str(e)}")

@app.delete("/images/{filename}")
async def delete_image(filename: str):
    """Delete a specific image"""
    try:
        file_path = UPLOAD_DIR / filename
        if file_path.exists():
            file_path.unlink()
            return {"message": f"Image {filename} deleted successfully"}
        else:
            raise HTTPException(status_code=404, detail="Image not found")
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Delete failed: {str(e)}")

@app.get("/images/{filename}")
async def get_image(filename: str):
    """Get a specific image file"""
    try:
        file_path = UPLOAD_DIR / filename
        if file_path.exists():
            return FileResponse(file_path)
        else:
            raise HTTPException(status_code=404, detail="Image not found")
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Failed to get image: {str(e)}")

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)
