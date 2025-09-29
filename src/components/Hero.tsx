import React from 'react'
import { motion } from 'framer-motion'

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center">
      {/* Clean Background */}
      <div className="absolute inset-0 bg-black"></div>
      
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black to-gray-900 opacity-80"></div>

      <div className="relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-screen">
          
          {/* Left Column - Image Placeholder */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex items-center justify-center lg:justify-end"
          >
            <div className="w-full max-w-sm h-96 bg-gray-900 border border-gray-800 flex items-center justify-center">
              <div className="text-center space-y-4">
                <div className="w-16 h-16 border border-white/30 flex items-center justify-center mx-auto">
                  <div className="w-8 h-8 bg-white/20"></div>
                </div>
                <p className="text-white/60 text-sm">Image Placeholder</p>
                <p className="text-white/40 text-xs">Add your luxury product image here</p>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col justify-center space-y-12 text-center lg:text-left lg:pl-4"
          >
            {/* Main Title - Minimalist */}
            <div className="space-y-6">
              <h1 className="text-6xl md:text-8xl font-gothic font-light tracking-wider text-white">
                HBM
              </h1>
              
              <div className="w-24 h-px bg-white lg:mx-0 mx-auto"></div>
            </div>

            {/* Subtitle - Professional */}
            <div className="space-y-6">
              <h2 className="text-2xl md:text-3xl font-luxury font-light text-white leading-tight">
                Luxury Timepieces & Leather Goods
              </h2>
              <p className="text-lg text-gray-400 leading-relaxed max-w-lg">
                Where luxury craftsmanship meets contemporary design. 
                Each piece represents the pinnacle of luxury and precision.
              </p>
            </div>

            {/* CTA Buttons - Refined */}
            <div className="flex flex-col sm:flex-row gap-6 lg:justify-start justify-center">
              <motion.button
                whileHover={{ opacity: 0.8 }}
                className="px-12 py-4 bg-white text-black font-medium text-sm tracking-wider uppercase hover:bg-gray-100 transition-all duration-300"
              >
                View Collection
              </motion.button>
              <motion.button
                whileHover={{ opacity: 0.8 }}
                className="px-12 py-4 border border-white text-white font-medium text-sm tracking-wider uppercase hover:bg-white hover:text-black transition-all duration-300"
              >
                Learn More
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Hero
