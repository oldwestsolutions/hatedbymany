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
            className="flex items-center justify-center lg:justify-end order-2 lg:order-1"
          >
            <div className="w-full max-w-sm sm:max-w-md lg:max-w-xl h-64 sm:h-80 lg:h-96 overflow-hidden">
              <img 
                src="/walletcartoon.png" 
                alt="Digital Wallet and Cryptocurrency" 
                className="w-full h-full object-contain"
              />
            </div>
          </motion.div>

          {/* Right Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col justify-center space-y-8 sm:space-y-12 text-center lg:text-left lg:pl-4 order-1 lg:order-2"
          >
            {/* Main Title - Minimalist */}
            <div className="space-y-4 sm:space-y-6">
              <h1 className="text-4xl sm:text-6xl md:text-8xl font-gothic font-light tracking-wider text-white">
                HBM
              </h1>
              
              <div className="w-16 sm:w-24 h-px bg-white lg:mx-0 mx-auto"></div>
            </div>

            {/* Subtitle - Professional */}
            <div className="space-y-4 sm:space-y-6">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-luxury font-light text-white leading-tight">
                Non-Custodial Digital Wallet
              </h2>
              <p className="text-base sm:text-lg text-gray-400 leading-relaxed max-w-lg mx-auto lg:mx-0">
                Secure, private, and fully decentralized. 
                Your keys, your crypto, your control.
              </p>
            </div>

            {/* CTA Buttons - Refined */}
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 lg:justify-start justify-center">
              <motion.a
                href="/collections"
                whileHover={{ opacity: 0.8 }}
                className="px-8 sm:px-12 py-3 sm:py-4 bg-white text-black font-medium text-sm tracking-wider uppercase hover:bg-gray-100 transition-all duration-300 inline-block text-center"
              >
                View Collection
              </motion.a>
              <motion.a
                href="/learn-more"
                whileHover={{ opacity: 0.8 }}
                className="px-8 sm:px-12 py-3 sm:py-4 border border-white text-white font-medium text-sm tracking-wider uppercase hover:bg-white hover:text-black transition-all duration-300 inline-block text-center"
              >
                Learn More
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Hero
