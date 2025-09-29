import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Clock, Briefcase } from 'lucide-react'
import { ImageService } from '../services/imageService'

interface Product {
  id: number
  name: string
  category: 'watch' | 'leather'
  price: string
  image: string
  description: string
  features: string[]
  isNew?: boolean
  isLimited?: boolean
}

const Products: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<'all' | 'watches' | 'leather'>('all')
  const [availableImages, setAvailableImages] = useState<string[]>([])

  // Fetch available images on component mount
  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await ImageService.getImages()
        setAvailableImages(response.images.map(img => img.url))
      } catch (error) {
        console.error('Failed to fetch images:', error)
      }
    }
    fetchImages()
  }, [])

  const products: Product[] = [
    {
      id: 1,
      name: 'Gothic Sovereign',
      category: 'watch',
      price: '$12,500',
      image: availableImages[0] || 'https://images.unsplash.com/photo-1594534475808-b18fc33b045e?w=400&h=500&fit=crop&crop=center',
      description: 'A masterpiece of horological art, featuring a skeletonized movement visible through the transparent case back.',
      features: ['Swiss Movement', 'Sapphire Crystal', 'Limited Edition'],
      isNew: true,
      isLimited: true
    },
    {
      id: 2,
      name: 'Heritage Collection',
      category: 'watch',
      price: '$8,900',
      image: availableImages[1] || 'https://images.unsplash.com/photo-1594534475808-b18fc33b045e?w=400&h=500&fit=crop&crop=center',
      description: 'Inspired by classical architectural motifs, this timepiece combines traditional craftsmanship with modern precision.',
      features: ['Hand-Engraved Case', 'Leather Strap', 'Water Resistant'],
      isLimited: true
    },
    {
      id: 3,
      name: 'Midnight Executive',
      category: 'leather',
      price: '$2,800',
      image: availableImages[2] || 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=500&fit=crop&crop=center',
      description: 'Premium Italian leather briefcase with Gothic-inspired hardware and luxury red accent stitching.',
      features: ['Italian Leather', 'Hand-Stitched', 'Lifetime Warranty'],
      isNew: true
    },
    {
      id: 4,
      name: 'Crimson Crown',
      category: 'leather',
      price: '$1,950',
      image: availableImages[3] || 'https://images.unsplash.com/photo-1627123424574-724758594e93?w=400&h=500&fit=crop&crop=center',
      description: 'Elegant leather wallet featuring Gothic cross embossing and luxury gold hardware.',
      features: ['Premium Leather', 'RFID Protection', 'Handcrafted'],
    },
    {
      id: 5,
      name: 'Dark Sovereign',
      category: 'watch',
      price: '$15,200',
      image: availableImages[4] || 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=500&fit=crop&crop=center',
      description: 'The pinnacle of luxury timekeeping, featuring a tourbillon movement and diamond-set bezel.',
      features: ['Tourbillon Movement', 'Diamond Bezel', 'Platinum Case'],
      isLimited: true
    },
    {
      id: 6,
      name: 'Luxury Traveler',
      category: 'leather',
      price: '$3,200',
      image: availableImages[5] || 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=500&fit=crop&crop=center',
      description: 'Spacious leather travel bag with traditional luxury patterns and modern functionality.',
      features: ['Expandable Design', 'Multiple Compartments', 'Premium Hardware'],
    }
  ]

  const filteredProducts = products.filter(product => 
    activeCategory === 'all' || 
    (activeCategory === 'watches' && product.category === 'watch') ||
    (activeCategory === 'leather' && product.category === 'leather')
  )

  return (
    <section className="py-20 bg-luxury-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16 lg:mb-20"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-gothic font-light text-white text-center mb-4 sm:mb-6">
            Collection
          </h2>
          <div className="w-12 sm:w-16 h-px bg-white mx-auto mb-6 sm:mb-8"></div>
          <p className="text-base sm:text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed px-4 sm:px-0">
            Meticulously crafted timepieces and leather goods that embody the perfect fusion 
            of luxury heritage and contemporary design.
          </p>
        </motion.div>

        {/* Category Filter - Minimalist */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex justify-center mb-12 sm:mb-16"
        >
          <div className="flex flex-wrap justify-center gap-4 sm:gap-8">
            {[
              { key: 'all', label: 'All' },
              { key: 'watches', label: 'Watches' },
              { key: 'leather', label: 'Leather' }
            ].map(({ key, label }) => (
              <button
                key={key}
                onClick={() => setActiveCategory(key as any)}
                className={`text-xs sm:text-sm font-light tracking-wider uppercase transition-all duration-300 relative px-2 py-1 ${
                  activeCategory === key
                    ? 'text-white'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                {label}
                {activeCategory === key && (
                  <div className="absolute -bottom-1 left-0 w-full h-px bg-white"></div>
                )}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredProducts.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.15,
                ease: "easeOut"
              }}
              whileHover={{ 
                y: -8, 
                scale: 1.02,
                transition: { duration: 0.3 }
              }}
              whileTap={{ scale: 0.98 }}
              className="group bg-black overflow-hidden border border-gray-800/20 hover:border-white/30 transition-all duration-500 hover:shadow-2xl hover:shadow-white/10"
            >
              {/* Product Image - Enhanced */}
              <div className="relative h-64 sm:h-80 bg-gray-900 flex items-center justify-center overflow-hidden">
                {product.image && product.image !== '/api/placeholder/400/500' ? (
                  <motion.img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                  />
                ) : (
                  <motion.div 
                    className="w-24 h-24 border border-white/30 flex items-center justify-center"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    {product.category === 'watch' ? (
                      <Clock className="h-12 w-12 text-white" />
                    ) : (
                      <Briefcase className="h-12 w-12 text-white" />
                    )}
                  </motion.div>
                )}
                
                {/* Badges - Minimalist */}
                <div className="absolute top-6 left-6 flex flex-col space-y-2">
                  {product.isNew && (
                    <span className="text-xs font-light tracking-wider uppercase text-luxury-gold border border-luxury-gold px-3 py-1">
                      New
                    </span>
                  )}
                  {product.isLimited && (
                    <span className="text-xs font-light tracking-wider uppercase text-white border border-white px-3 py-1">
                      Limited
                    </span>
                  )}
                </div>
              </div>

              {/* Product Info - Refined */}
              <div className="p-6 sm:p-8">
                <h3 className="text-lg sm:text-xl font-luxury font-light text-white mb-2 sm:mb-3">
                  {product.name}
                </h3>
                <p className="text-gray-400 text-xs sm:text-sm leading-relaxed mb-4 sm:mb-6">
                  {product.description}
                </p>
                
                {/* Features - Minimalist */}
                <div className="space-y-1 sm:space-y-2 mb-6 sm:mb-8">
                  {product.features.map((feature, idx) => (
                    <div key={idx} className="text-xs text-gray-500">
                      {feature}
                    </div>
                  ))}
                </div>

                {/* Price and CTA - Clean */}
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-0">
                  <span className="text-xl sm:text-2xl font-light text-luxury-gold">
                    {product.price}
                  </span>
                  <motion.button
                    whileHover={{ opacity: 0.8 }}
                    className="text-xs sm:text-sm font-light tracking-wider uppercase text-luxury-gold border border-luxury-gold px-4 sm:px-6 py-2 hover:bg-luxury-gold hover:text-luxury-black transition-all duration-300 w-full sm:w-auto"
                  >
                    View
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Button - Minimalist */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12 sm:mt-16"
        >
          <motion.button
            whileHover={{ opacity: 0.8 }}
            className="text-xs sm:text-sm font-light tracking-wider uppercase text-luxury-gold border border-luxury-gold px-6 sm:px-8 py-2 sm:py-3 hover:bg-luxury-gold hover:text-luxury-black transition-all duration-300"
          >
            View Complete Collection
          </motion.button>
        </motion.div>
      </div>

    </section>
  )
}

export default Products
