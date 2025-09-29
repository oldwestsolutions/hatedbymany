import React, { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import { Upload, Check, AlertCircle } from 'lucide-react'
import { ImageService } from '../services/imageService'

interface ImageUploadProps {
  onImageUploaded?: (imageUrl: string) => void
  className?: string
}

const ImageUpload: React.FC<ImageUploadProps> = ({ onImageUploaded, className = '' }) => {
  const [isUploading, setIsUploading] = useState(false)
  const [uploadStatus, setUploadStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState('')
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleFileSelect = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (!file) return

    // Validate file type
    if (!file.type.startsWith('image/')) {
      setUploadStatus('error')
      setErrorMessage('Please select an image file')
      return
    }

    // Validate file size (max 10MB)
    if (file.size > 10 * 1024 * 1024) {
      setUploadStatus('error')
      setErrorMessage('File size must be less than 10MB')
      return
    }

    setIsUploading(true)
    setUploadStatus('idle')
    setErrorMessage('')

    try {
      const response = await ImageService.uploadImage(file)
      setUploadStatus('success')
      onImageUploaded?.(response.url)
    } catch (error) {
      setUploadStatus('error')
      setErrorMessage(error instanceof Error ? error.message : 'Upload failed')
    } finally {
      setIsUploading(false)
    }
  }

  const handleDrop = (event: React.DragEvent) => {
    event.preventDefault()
    const file = event.dataTransfer.files[0]
    if (file && fileInputRef.current) {
      const dataTransfer = new DataTransfer()
      dataTransfer.items.add(file)
      fileInputRef.current.files = dataTransfer.files
      handleFileSelect({ target: fileInputRef.current } as any)
    }
  }

  const handleDragOver = (event: React.DragEvent) => {
    event.preventDefault()
  }

  const resetStatus = () => {
    setUploadStatus('idle')
    setErrorMessage('')
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className={`relative ${className}`}
    >
      <div
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        className={`
          border-2 border-dashed border-gray-600 rounded-lg p-8 text-center cursor-pointer
          hover:border-white transition-colors duration-300
          ${uploadStatus === 'success' ? 'border-green-500 bg-green-500/10' : ''}
          ${uploadStatus === 'error' ? 'border-red-500 bg-red-500/10' : ''}
        `}
        onClick={() => fileInputRef.current?.click()}
      >
        <input
          ref={fileInputRef}
          type="file"
          accept="image/*"
          onChange={handleFileSelect}
          className="hidden"
        />

        {isUploading ? (
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
            className="w-12 h-12 mx-auto mb-4"
          >
            <Upload className="w-full h-full text-white" />
          </motion.div>
        ) : uploadStatus === 'success' ? (
          <Check className="w-12 h-12 mx-auto mb-4 text-green-500" />
        ) : uploadStatus === 'error' ? (
          <AlertCircle className="w-12 h-12 mx-auto mb-4 text-red-500" />
        ) : (
          <Upload className="w-12 h-12 mx-auto mb-4 text-gray-400" />
        )}

        <h3 className="text-lg font-medium text-white mb-2">
          {isUploading ? 'Uploading...' : 
           uploadStatus === 'success' ? 'Upload Successful!' :
           uploadStatus === 'error' ? 'Upload Failed' :
           'Upload Image'}
        </h3>

        <p className="text-sm text-gray-400 mb-4">
          {isUploading ? 'Please wait while your image is being uploaded...' :
           uploadStatus === 'success' ? 'Your image has been uploaded successfully' :
           uploadStatus === 'error' ? errorMessage :
           'Drag and drop an image here, or click to select'}
        </p>

        {uploadStatus !== 'idle' && (
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            onClick={(e) => {
              e.stopPropagation()
              resetStatus()
            }}
            className="text-sm text-gray-400 hover:text-white transition-colors"
          >
            Upload Another
          </motion.button>
        )}
      </div>
    </motion.div>
  )
}

export default ImageUpload
