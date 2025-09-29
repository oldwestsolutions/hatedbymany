import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Clock, Briefcase, Star, Eye, ShoppingCart } from 'lucide-react'

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

  const products: Product[] = [
    {
      id: 1,
      name: 'Gothic Sovereign',
      category: 'watch',
      price: '$12,500',
      image: '/api/placeholder/400/500',
      description: 'A masterpiece of horological art, featuring a skeletonized movement visible through the transparent case back.',
      features: ['Swiss Movement', 'Sapphire Crystal', 'Limited Edition'],
      isNew: true,
      isLimited: true
    },
    {
      id: 2,
      name: 'Belarusian Heritage',
      category: 'watch',
      price: '$8,900',
      image: '/api/placeholder/400/500',
      description: 'Inspired by Belarusian architectural motifs, this timepiece combines traditional craftsmanship with modern precision.',
      features: ['Hand-Engraved Case', 'Leather Strap', 'Water Resistant'],
      isLimited: true
    },
    {
      id: 3,
      name: 'Midnight Executive',
      category: 'leather',
      price: '$2,800',
      image: '/api/placeholder/400/500',
      description: 'Premium Italian leather briefcase with Gothic-inspired hardware and Belarusian red accent stitching.',
      features: ['Italian Leather', 'Hand-Stitched', 'Lifetime Warranty'],
      isNew: true
    },
    {
      id: 4,
      name: 'Crimson Crown',
      category: 'leather',
      price: '$1,950',
      image: '/api/placeholder/400/500',
      description: 'Elegant leather wallet featuring Gothic cross embossing and luxury gold hardware.',
      features: ['Premium Leather', 'RFID Protection', 'Handcrafted'],
    },
    {
      id: 5,
      name: 'Dark Sovereign',
      category: 'watch',
      price: '$15,200',
      image: '/api/placeholder/400/500',
      description: 'The pinnacle of luxury timekeeping, featuring a tourbillon movement and diamond-set bezel.',
      features: ['Tourbillon Movement', 'Diamond Bezel', 'Platinum Case'],
      isLimited: true
    },
    {
      id: 6,
      name: 'Belarusian Traveler',
      category: 'leather',
      price: '$3,200',
      image: '/api/placeholder/400/500',
      description: 'Spacious leather travel bag with traditional Belarusian patterns and modern functionality.',
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
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-gothic font-light text-white mb-6">
            Collection
          </h2>
          <div className="w-16 h-px bg-white mx-auto mb-8"></div>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Meticulously crafted timepieces and leather goods that embody the perfect fusion 
            of Belarusian heritage and contemporary design.
          </p>
        </motion.div>

        {/* Category Filter - Minimalist */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex justify-center mb-16"
        >
          <div className="flex space-x-8">
            {[
              { key: 'all', label: 'All' },
              { key: 'watches', label: 'Watches' },
              { key: 'leather', label: 'Leather' }
            ].map(({ key, label }) => (
              <button
                key={key}
                onClick={() => setActiveCategory(key as any)}
                className={`text-sm font-light tracking-wider uppercase transition-all duration-300 relative ${
                  activeCategory === key
                    ? 'text-white'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                {label}
                {activeCategory === key && (
                  <div className="absolute -bottom-2 left-0 w-full h-px bg-white"></div>
                )}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Products Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredProducts.map((product, index) => (
            <motion.div
              key={product.id}
              layout
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="group bg-black overflow-hidden border border-gray-800/20 hover:border-white/30 transition-all duration-500"
            >
              {/* Product Image - Clean */}
              <div className="relative h-80 bg-gray-900 flex items-center justify-center">
                <div className="w-24 h-24 border border-white/30 flex items-center justify-center">
                  {product.category === 'watch' ? (
                    <Clock className="h-12 w-12 text-white" />
                  ) : (
                    <Briefcase className="h-12 w-12 text-white" />
                  )}
                </div>
                
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
              <div className="p-8">
                <h3 className="text-xl font-luxury font-light text-white mb-3">
                  {product.name}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-6">
                  {product.description}
                </p>
                
                {/* Features - Minimalist */}
                <div className="space-y-2 mb-8">
                  {product.features.map((feature, idx) => (
                    <div key={idx} className="text-xs text-gray-500">
                      {feature}
                    </div>
                  ))}
                </div>

                {/* Price and CTA - Clean */}
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-light text-luxury-gold">
                    {product.price}
                  </span>
                  <motion.button
                    whileHover={{ opacity: 0.8 }}
                    className="text-sm font-light tracking-wider uppercase text-luxury-gold border border-luxury-gold px-6 py-2 hover:bg-luxury-gold hover:text-luxury-black transition-all duration-300"
                  >
                    View
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* View All Button - Minimalist */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <motion.button
            whileHover={{ opacity: 0.8 }}
            className="text-sm font-light tracking-wider uppercase text-luxury-gold border border-luxury-gold px-8 py-3 hover:bg-luxury-gold hover:text-luxury-black transition-all duration-300"
          >
            View Complete Collection
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}

export default Products
