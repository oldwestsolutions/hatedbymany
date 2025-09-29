import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Menu, X, Download } from 'lucide-react'

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
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

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'Collection', href: '#collection' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' }
  ]

  const companyItems = [
    { name: 'About Us', href: '/about-us' },
    { name: 'Our Story', href: '/our-story' },
    { name: 'Craftsmanship', href: '/craftsmanship' },
    { name: 'Awards', href: '/awards' }
  ]

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
          <motion.div
            whileHover={{ opacity: 0.8 }}
            className="flex items-center"
          >
            <span className="text-2xl font-gothic font-light tracking-wider text-white">
              HBM
            </span>
          </motion.div>

          {/* Desktop Navigation - Clean */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <motion.a
                key={item.name}
                href={item.href}
                whileHover={{ opacity: 0.7 }}
                className="text-white hover:text-gray-300 transition-all duration-300 font-light text-sm tracking-wider uppercase"
              >
                {item.name}
              </motion.a>
            ))}
            
            {/* Company Dropdown */}
            <div className="relative group">
              <button className="text-white hover:text-gray-300 transition-all duration-300 font-light text-sm tracking-wider uppercase">
                Company
              </button>
              <div className="absolute top-full left-0 mt-2 w-48 bg-black border border-gray-800 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                <div className="py-2">
                  {companyItems.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="block px-4 py-2 text-white hover:bg-gray-900 transition-colors duration-300 text-sm"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Download App Button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center space-x-2 px-4 py-2 bg-white text-black font-medium text-sm tracking-wider uppercase hover:bg-gray-100 transition-all duration-300"
            >
              <Download className="h-4 w-4" />
              <span>Download App</span>
            </motion.button>
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-white hover:text-gray-300 transition-colors duration-300"
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <motion.nav
          initial={false}
          animate={{ height: isMenuOpen ? 'auto' : 0 }}
          className="md:hidden overflow-hidden"
        >
          <div className="py-6 space-y-6">
            {navItems.map((item) => (
              <motion.a
                key={item.name}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                whileHover={{ opacity: 0.7 }}
                className="block text-white hover:text-gray-300 transition-colors duration-300 font-light text-sm tracking-wider uppercase"
              >
                {item.name}
              </motion.a>
            ))}
            
            {/* Mobile Company Links */}
            <div className="pl-4 space-y-3">
              <div className="text-gray-400 text-sm font-light tracking-wider uppercase mb-2">
                Company
              </div>
              {companyItems.map((item) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  whileHover={{ opacity: 0.7 }}
                  className="block text-white hover:text-gray-300 transition-colors duration-300 font-light text-sm"
                >
                  {item.name}
                </motion.a>
              ))}
            </div>
            
            {/* Mobile Download App Button */}
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setIsMenuOpen(false)}
              className="flex items-center space-x-2 px-4 py-3 bg-white text-black font-medium text-sm tracking-wider uppercase hover:bg-gray-100 transition-all duration-300 w-full justify-center"
            >
              <Download className="h-4 w-4" />
              <span>Download App</span>
            </motion.button>
          </div>
        </motion.nav>
      </div>
    </motion.header>
  )
}

export default Header
