import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Star, Award, Crown, Shield, Zap, Heart, Filter, Search } from 'lucide-react'

const Collections: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('all')
  const [searchTerm, setSearchTerm] = useState('')

  const categories = [
    { id: 'all', name: 'All Collections', icon: Star },
    { id: 'watches', name: 'Watches', icon: Crown },
    { id: 'leather', name: 'Leather Goods', icon: Shield },
    { id: 'limited', name: 'Limited Edition', icon: Award }
  ]

  const collections = [
    {
      id: 1,
      name: 'Sovereign Collection',
      category: 'watches',
      description: 'The pinnacle of luxury timekeeping, featuring tourbillon movements and precious metals.',
      image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=500&fit=crop&crop=center',
      price: 'From $12,500',
      isLimited: true,
      items: 8,
      featured: true
    },
    {
      id: 2,
      name: 'Gothic Heritage',
      category: 'watches',
      description: 'Dark elegance meets horological mastery in this exclusive collection.',
      image: 'https://images.unsplash.com/photo-1594534475808-b18fc33b045e?w=400&h=500&fit=crop&crop=center',
      price: 'From $8,900',
      isLimited: false,
      items: 12,
      featured: false
    },
    {
      id: 3,
      name: 'Artisan Leather',
      category: 'leather',
      description: 'Handcrafted leather goods using traditional techniques and premium materials.',
      image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=500&fit=crop&crop=center',
      price: 'From $2,800',
      isLimited: false,
      items: 15,
      featured: false
    },
    {
      id: 4,
      name: 'Diamond Collection',
      category: 'limited',
      description: 'Exclusive timepieces featuring rare diamonds and precious stones.',
      image: 'https://images.unsplash.com/photo-1617038220319-276d4b7b5b8a?w=400&h=500&fit=crop&crop=center',
      price: 'From $45,000',
      isLimited: true,
      items: 3,
      featured: true
    },
    {
      id: 5,
      name: 'Vintage Revival',
      category: 'watches',
      description: 'Classic designs reimagined with modern precision and craftsmanship.',
      image: 'https://images.unsplash.com/photo-1542496658-e33a6d0d50c6?w=400&h=500&fit=crop&crop=center',
      price: 'From $6,500',
      isLimited: false,
      items: 10,
      featured: false
    },
    {
      id: 6,
      name: 'Carbon Fiber Elite',
      category: 'limited',
      description: 'Ultra-lightweight timepieces crafted from aerospace-grade carbon fiber.',
      image: 'https://images.unsplash.com/photo-1551816230-ef5deaed4a26?w=400&h=500&fit=crop&crop=center',
      price: 'From $18,900',
      isLimited: true,
      items: 5,
      featured: true
    }
  ]

  const filteredCollections = collections.filter(collection => {
    const matchesCategory = activeCategory === 'all' || collection.category === activeCategory
    const matchesSearch = collection.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         collection.description.toLowerCase().includes(searchTerm.toLowerCase())
    return matchesCategory && matchesSearch
  })

  return (
    <div className="min-h-screen bg-luxury-black">
      {/* Hero Section */}
      <section className="relative pt-24 sm:pt-32 pb-16 sm:pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center space-y-6 sm:space-y-8"
          >
            <h1 className="text-3xl sm:text-5xl md:text-7xl font-gothic font-light tracking-wider text-white">
              Collections
            </h1>
            <div className="w-20 sm:w-32 h-px bg-luxury-gold mx-auto"></div>
            <p className="text-base sm:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed px-4 sm:px-0">
              Discover our curated collections of luxury timepieces and artisanal leather goods.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py-6 sm:py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-4 sm:gap-6 items-center justify-between">
            {/* Search Bar */}
            <div className="relative w-full lg:w-96">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 sm:h-5 sm:w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search collections..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-8 sm:pl-10 pr-3 sm:pr-4 py-2 sm:py-3 bg-gray-900/50 border border-gray-800 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-luxury-gold transition-all duration-300 text-sm"
              />
            </div>

            {/* Category Filters */}
            <div className="flex flex-wrap gap-2 sm:gap-3">
              {categories.map((category) => (
                <motion.button
                  key={category.id}
                  whileHover={{ opacity: 0.8 }}
                  onClick={() => setActiveCategory(category.id)}
                  className={`flex items-center space-x-1 sm:space-x-2 px-3 sm:px-4 py-2 rounded-lg border transition-all duration-300 ${
                    activeCategory === category.id
                      ? 'bg-luxury-gold text-black border-luxury-gold'
                      : 'bg-gray-900/50 text-white border-gray-800 hover:border-luxury-gold'
                  }`}
                >
                  <category.icon className="h-3 w-3 sm:h-4 sm:w-4" />
                  <span className="text-xs sm:text-sm font-medium">{category.name}</span>
                </motion.button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Collections Grid */}
      <section className="py-8 sm:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredCollections.length === 0 ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-16 sm:py-20"
            >
              <Search className="h-12 w-12 sm:h-16 sm:w-16 text-gray-600 mx-auto mb-4" />
              <h3 className="text-lg sm:text-xl text-gray-400 mb-2">No collections found</h3>
              <p className="text-gray-500 text-sm sm:text-base">Try adjusting your search or filter criteria.</p>
            </motion.div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {filteredCollections.map((collection, index) => (
                <motion.div
                  key={collection.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="bg-gray-900/50 rounded-lg overflow-hidden border border-gray-800 hover:border-luxury-gold/50 transition-all duration-300 group"
                >
                  {/* Collection Image */}
                  <div className="relative h-48 sm:h-64 overflow-hidden">
                    <img
                      src={collection.image}
                      alt={collection.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    {collection.isLimited && (
                      <div className="absolute top-3 sm:top-4 left-3 sm:left-4">
                        <span className="bg-luxury-gold text-black px-2 sm:px-3 py-1 text-xs font-medium tracking-wider uppercase rounded">
                          Limited Edition
                        </span>
                      </div>
                    )}
                    {collection.featured && (
                      <div className="absolute top-3 sm:top-4 right-3 sm:right-4">
                        <Star className="h-4 w-4 sm:h-6 sm:w-6 text-luxury-gold fill-current" />
                      </div>
                    )}
                  </div>

                  {/* Collection Info */}
                  <div className="p-4 sm:p-6">
                    <div className="flex items-center justify-between mb-2 sm:mb-3">
                      <h3 className="text-lg sm:text-xl font-medium text-white group-hover:text-luxury-gold transition-colors duration-300">
                        {collection.name}
                      </h3>
                      <span className="text-xs sm:text-sm text-gray-400">
                        {collection.items} items
                      </span>
                    </div>
                    
                    <p className="text-gray-400 text-xs sm:text-sm mb-3 sm:mb-4 line-clamp-2">
                      {collection.description}
                    </p>
                    
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-0">
                      <span className="text-luxury-gold font-medium text-base sm:text-lg">
                        {collection.price}
                      </span>
                      <motion.button
                        whileHover={{ opacity: 0.8 }}
                        className="px-3 sm:px-4 py-2 bg-luxury-gold text-black text-xs sm:text-sm font-medium tracking-wider uppercase rounded hover:bg-yellow-400 transition-all duration-300 w-full sm:w-auto"
                      >
                        View Collection
                      </motion.button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-12 sm:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6 sm:space-y-8"
          >
            <h2 className="text-2xl sm:text-4xl font-gothic font-light text-white">
              Can't Find What You're Looking For?
            </h2>
            <p className="text-base sm:text-lg text-gray-400 max-w-2xl mx-auto px-4 sm:px-0">
              Our artisans can create custom pieces tailored to your exact specifications.
            </p>
            <motion.button
              whileHover={{ opacity: 0.8 }}
              className="px-6 sm:px-8 py-3 sm:py-4 bg-luxury-gold text-black font-medium text-xs sm:text-sm tracking-wider uppercase hover:bg-yellow-400 transition-all duration-300"
            >
              Request Custom Piece
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Collections
