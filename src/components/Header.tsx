import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Download } from 'lucide-react'

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isVisible, setIsVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      
      // Show header when at top
      if (currentScrollY < 10) {
        setIsVisible(true)
        setIsScrolled(false)
      } else {
        setIsScrolled(true)
        // Hide header when scrolling down, show when scrolling up
        if (currentScrollY > lastScrollY && currentScrollY > 100) {
          setIsVisible(false)
        } else {
          setIsVisible(true)
        }
      }
      
      setLastScrollY(currentScrollY)
    }
    
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [lastScrollY])


  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: isVisible ? 0 : -100 }}
      transition={{ duration: 0.3, ease: 'easeInOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-black/95 backdrop-blur-md border-b border-white/10' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo - Minimalist */}
          <motion.a
            href="/"
            whileHover={{ opacity: 0.8 }}
            className="flex items-center cursor-pointer"
            onClick={(e) => {
              e.preventDefault()
              window.history.pushState({}, '', '/')
              window.dispatchEvent(new PopStateEvent('popstate'))
            }}
          >
            <span className="text-2xl font-gothic font-light tracking-wider text-white">
              HBM
            </span>
          </motion.a>

          {/* Download App Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center space-x-2 px-4 py-2 bg-white text-black font-medium text-sm tracking-wider uppercase hover:bg-gray-100 transition-all duration-300"
          >
            <Download className="h-4 w-4" />
            <span>Download App</span>
          </motion.button>

        </div>

      </div>
    </motion.header>
  )
}

export default Header
