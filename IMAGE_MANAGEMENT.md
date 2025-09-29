# HBM Luxury Image Management System

## Overview
This system allows you to upload, manage, and use custom images for your luxury products in the HBM website.

## Features
- ✅ **Motion Effects**: Enhanced animations for collection cards
- ✅ **Image Upload**: Drag & drop or click to upload images
- ✅ **Image Management**: View, delete, and organize uploaded images
- ✅ **Product Integration**: Use uploaded images in product cards
- ✅ **FastAPI Backend**: RESTful API for image operations
- ✅ **Proxy Integration**: Seamless frontend-backend communication

## Setup Instructions

### 1. Install Backend Dependencies
```bash
cd backend
pip install -r requirements.txt
```

### 2. Start the Backend Server
```bash
# Option 1: Use the startup script
./start-backend.sh

# Option 2: Manual start
cd backend
python -m uvicorn main:app --host 0.0.0.0 --port 8000 --reload
```

### 3. Start the Frontend
```bash
npm run dev
```

## How to Use

### Uploading Images
1. **Via Admin Panel**: Navigate to `/admin` (if implemented) or use the image manager
2. **Via Collection**: Click the settings icon next to "Collection" title
3. **Drag & Drop**: Simply drag images onto the upload area
4. **Click to Upload**: Click the upload area to select files

### Managing Images
- **View Images**: All uploaded images are displayed in the management interface
- **Copy URLs**: Click "Copy URL" to get the image URL for use in products
- **Delete Images**: Click the trash icon to remove unwanted images
- **Preview**: Click on any image to see a full-size preview

### Using Images in Products
1. Upload your images first
2. Click the settings icon in the Collection section
3. Select an image to use for a product
4. The image will automatically appear in the product card

## API Endpoints

### Upload Image
```
POST /api/upload-image/
Content-Type: multipart/form-data
Body: file (image file)
```

### Upload Multiple Images
```
POST /api/upload-multiple/
Content-Type: multipart/form-data
Body: files (array of image files)
```

### List Images
```
GET /api/images/
```

### Delete Image
```
DELETE /api/images/{filename}
```

### Get Image
```
GET /api/images/{filename}
```

## File Structure
```
backend/
├── main.py              # FastAPI application
├── requirements.txt     # Python dependencies
└── uploads/            # Uploaded images storage

src/
├── services/
│   └── imageService.ts  # Image API service
├── components/
│   ├── ImageUpload.tsx  # Upload component
│   ├── ImageAdmin.tsx   # Admin panel
│   └── Products.tsx     # Updated with image support
└── vite.config.ts      # Proxy configuration
```

## Technical Details

### Supported Formats
- JPEG (.jpg, .jpeg)
- PNG (.png)
- WebP (.webp)
- GIF (.gif)

### File Size Limits
- Maximum file size: 10MB per image
- No limit on number of images

### Storage
- Images are stored in `backend/uploads/` directory
- Each image gets a unique UUID filename
- Original filenames are preserved in metadata

### Security
- CORS enabled for localhost development
- File type validation
- Size limits enforced
- Unique filenames prevent conflicts

## Troubleshooting

### Backend Not Starting
- Check if port 8000 is available
- Ensure Python dependencies are installed
- Verify FastAPI and uvicorn are installed

### Images Not Loading
- Check if backend is running on port 8000
- Verify proxy configuration in vite.config.ts
- Check browser console for errors

### Upload Failures
- Ensure file is under 10MB
- Check file format is supported
- Verify backend is running

## Development Notes
- Images are served statically from `/uploads/` endpoint
- Frontend uses proxy to communicate with backend
- All image operations are handled asynchronously
- Motion effects are applied to all image interactions
