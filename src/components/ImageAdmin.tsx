import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Trash2, Eye, Upload, X } from 'lucide-react'
import { ImageService, ImageListResponse } from '../services/imageService'
import ImageUpload from './ImageUpload'

const ImageAdmin: React.FC = () => {
  const [images, setImages] = useState<ImageListResponse['images']>([])
  const [loading, setLoading] = useState(true)
  const [selectedImage, setSelectedImage] = useState<string | null>(null)
  const [showUpload, setShowUpload] = useState(false)

  const fetchImages = async () => {
    try {
      setLoading(true)
      const response = await ImageService.getImages()
      setImages(response.images)
    } catch (error) {
      console.error('Failed to fetch images:', error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchImages()
  }, [])

  const handleDeleteImage = async (filename: string) => {
    if (!confirm('Are you sure you want to delete this image?')) return

    try {
      await ImageService.deleteImage(filename)
      setImages(images.filter(img => img.filename !== filename))
    } catch (error) {
      console.error('Failed to delete image:', error)
      alert('Failed to delete image')
    }
  }

  const handleImageUploaded = (imageUrl: string) => {
    fetchImages() // Refresh the list
    setShowUpload(false)
  }

  const copyImageUrl = (url: string) => {
    navigator.clipboard.writeText(url)
    alert('Image URL copied to clipboard!')
  }

  return (
    <div className="min-h-screen bg-black text-white p-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-gothic font-light">Image Management</h1>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setShowUpload(true)}
            className="flex items-center space-x-2 px-6 py-3 bg-white text-black font-medium hover:bg-gray-100 transition-colors"
          >
            <Upload className="h-5 w-5" />
            <span>Upload Images</span>
          </motion.button>
        </div>

        {showUpload && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8 p-6 bg-gray-900 rounded-lg"
          >
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-medium">Upload New Image</h2>
              <button
                onClick={() => setShowUpload(false)}
                className="text-gray-400 hover:text-white"
              >
                <X className="h-6 w-6" />
              </button>
            </div>
            <ImageUpload onImageUploaded={handleImageUploaded} />
          </motion.div>
        )}

        {loading ? (
          <div className="text-center py-12">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white mx-auto"></div>
            <p className="mt-4 text-gray-400">Loading images...</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {images.map((image, index) => (
              <motion.div
                key={image.filename}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-900 rounded-lg overflow-hidden border border-gray-800"
              >
                <div className="relative h-48 bg-gray-800">
                  <img
                    src={image.url}
                    alt={image.filename}
                    className="w-full h-full object-cover cursor-pointer"
                    onClick={() => setSelectedImage(image.url)}
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-50 transition-all duration-300 flex items-center justify-center">
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      onClick={() => setSelectedImage(image.url)}
                      className="opacity-0 hover:opacity-100 transition-opacity"
                    >
                      <Eye className="h-8 w-8 text-white" />
                    </motion.button>
                  </div>
                </div>
                
                <div className="p-4">
                  <h3 className="font-medium text-sm mb-2 truncate">{image.filename}</h3>
                  <p className="text-xs text-gray-400 mb-3">
                    {(image.size / 1024).toFixed(1)} KB
                  </p>
                  
                  <div className="flex space-x-2">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => copyImageUrl(image.url)}
                      className="flex-1 px-3 py-2 bg-white text-black text-xs font-medium hover:bg-gray-100 transition-colors"
                    >
                      Copy URL
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => handleDeleteImage(image.filename)}
                      className="px-3 py-2 bg-red-600 text-white text-xs font-medium hover:bg-red-700 transition-colors"
                    >
                      <Trash2 className="h-4 w-4" />
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}

        {images.length === 0 && !loading && (
          <div className="text-center py-12">
            <Upload className="h-16 w-16 text-gray-600 mx-auto mb-4" />
            <h3 className="text-xl font-medium mb-2">No Images Uploaded</h3>
            <p className="text-gray-400 mb-6">Upload your first image to get started</p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setShowUpload(true)}
              className="px-6 py-3 bg-white text-black font-medium hover:bg-gray-100 transition-colors"
            >
              Upload Images
            </motion.button>
          </div>
        )}
      </div>

      {/* Image Preview Modal */}
      {selectedImage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedImage(null)}
        >
          <motion.div
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            className="relative max-w-4xl max-h-full"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 text-white hover:text-gray-300 z-10"
            >
              <X className="h-8 w-8" />
            </button>
            <img
              src={selectedImage}
              alt="Preview"
              className="max-w-full max-h-full object-contain"
            />
          </motion.div>
        </motion.div>
      )}
    </div>
  )
}

export default ImageAdmin
