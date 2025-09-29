// Image management service for HBM Luxury
export interface ImageUploadResponse {
  message: string;
  filename: string;
  url: string;
  size: number;
}

export interface ImageListResponse {
  images: Array<{
    filename: string;
    url: string;
    size: number;
  }>;
}

export class ImageService {
  private static baseUrl = '/api';

  // Upload a single image
  static async uploadImage(file: File): Promise<ImageUploadResponse> {
    const formData = new FormData();
    formData.append('file', file);

    const response = await fetch(`${this.baseUrl}/upload-image/`, {
      method: 'POST',
      body: formData,
    });

    if (!response.ok) {
      throw new Error(`Upload failed: ${response.statusText}`);
    }

    return await response.json();
  }

  // Upload multiple images
  static async uploadMultipleImages(files: File[]): Promise<{ message: string; files: ImageUploadResponse[] }> {
    const formData = new FormData();
    files.forEach(file => {
      formData.append('files', file);
    });

    const response = await fetch(`${this.baseUrl}/upload-multiple/`, {
      method: 'POST',
      body: formData,
    });

    if (!response.ok) {
      throw new Error(`Upload failed: ${response.statusText}`);
    }

    return await response.json();
  }

  // Get list of all images
  static async getImages(): Promise<ImageListResponse> {
    const response = await fetch(`${this.baseUrl}/images/`);
    
    if (!response.ok) {
      throw new Error(`Failed to fetch images: ${response.statusText}`);
    }

    return await response.json();
  }

  // Delete an image
  static async deleteImage(filename: string): Promise<{ message: string }> {
    const response = await fetch(`${this.baseUrl}/images/${filename}`, {
      method: 'DELETE',
    });

    if (!response.ok) {
      throw new Error(`Delete failed: ${response.statusText}`);
    }

    return await response.json();
  }

  // Get image URL
  static getImageUrl(filename: string): string {
    return `${this.baseUrl}/images/${filename}`;
  }
}
