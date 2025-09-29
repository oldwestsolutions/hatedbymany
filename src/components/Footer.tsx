import React from 'react'
import { motion } from 'framer-motion'
import { MapPin, Instagram, Youtube } from 'lucide-react'

// Custom SVG Icons
const TikTokIcon = ({ className }: { className?: string }) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className={className}>
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" fill="currentColor"/>
  </svg>
)


const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear()

  const footerSections = [
    {
      title: 'Products',
      links: [
        { name: 'Watches', href: '#watches' },
        { name: 'Leather Goods', href: '#leather' },
        { name: 'Limited Editions', href: '#limited' }
      ]
    },
    {
      title: 'Company',
      links: [
        { name: 'About Us', href: '/about-us' },
        { name: 'Partners', href: '/partners' },
        { name: 'Careers', href: '/careers' }
      ]
    },
    {
      title: 'Support',
      links: [
        { name: 'Customer Service', href: '#service' },
        { name: 'Solutions', href: '#solutions' }
      ]
    }
  ]

  const socialLinks = [
    { icon: TikTokIcon, href: '#', label: 'TikTok' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Youtube, href: '#', label: 'YouTube' }
  ]

  return (
    <footer className="bg-luxury-black border-t border-luxury-gray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-12 sm:py-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12">
            {/* Brand Section - Minimalist */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="lg:col-span-1"
            >
              <div className="mb-6 sm:mb-8">
                <span className="text-xl sm:text-2xl font-gothic font-light text-white">
                  HBM
                </span>
              </div>
              <p className="text-gray-400 mb-6 sm:mb-8 leading-relaxed text-xs sm:text-sm">
                Where luxury heritage meets contemporary design in the world of luxury 
                timepieces and premium leather goods.
              </p>
              
              {/* Contact Info - Clean */}
              <div className="space-y-3 sm:space-y-4">
                <div className="flex items-center space-x-2 sm:space-x-3 text-gray-400">
                  <MapPin className="h-3 w-3 sm:h-4 sm:w-4 text-luxury-gold" />
                  <span className="text-xs sm:text-sm">Wyoming, USA</span>
                </div>
              </div>
            </motion.div>

            {/* Footer Links - Minimalist */}
            {footerSections.map((section, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="space-y-4 sm:space-y-6"
              >
                <h3 className="text-xs sm:text-sm font-light tracking-wider uppercase text-luxury-gold">
                  {section.title}
                </h3>
                <ul className="space-y-2 sm:space-y-3">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <motion.a
                        href={link.href}
                        whileHover={{ opacity: 0.7 }}
                        className="text-gray-400 hover:text-luxury-gold transition-all duration-300 text-xs sm:text-sm"
                      >
                        {link.name}
                      </motion.a>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Newsletter Section - Minimalist */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="py-8 sm:py-12 border-t border-luxury-gray/20"
        >
          <div className="flex flex-col lg:flex-row items-center justify-between space-y-6 lg:space-y-0">
            <div className="text-center lg:text-left">
              <h3 className="text-base sm:text-lg font-luxury font-light text-luxury-gold mb-2">
                Stay Updated
              </h3>
              <p className="text-gray-400 text-xs sm:text-sm">
                Subscribe to our newsletter for exclusive releases and updates.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row w-full lg:w-auto gap-3 sm:gap-0">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 lg:w-80 px-3 sm:px-4 py-2 sm:py-3 bg-luxury-dark text-white placeholder-gray-500 border border-luxury-gray/20 focus:outline-none focus:border-luxury-gold transition-colors text-xs sm:text-sm"
              />
              <motion.button
                whileHover={{ opacity: 0.8 }}
                className="px-4 sm:px-6 py-2 sm:py-3 bg-luxury-gold text-luxury-black font-light text-xs sm:text-sm tracking-wider uppercase hover:bg-luxury-gold/90 transition-all duration-300"
              >
                Subscribe
              </motion.button>
            </div>
          </div>
        </motion.div>

        {/* Bottom Footer - Clean */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="py-6 sm:py-8 border-t border-luxury-gray/20"
        >
          <div className="flex flex-col lg:flex-row items-center justify-between space-y-4 lg:space-y-0">
            {/* Copyright */}
            <div className="text-gray-500 text-center lg:text-left">
              <p className="text-xs sm:text-sm">&copy; {currentYear} Hated By Many Inc. All rights reserved.</p>
              <p className="text-xs mt-1 text-gray-600">
                Crafted with passion worldwide
              </p>
            </div>

            {/* Social Links - Minimalist */}
            <div className="flex space-x-4 sm:space-x-6">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  whileHover={{ opacity: 0.7 }}
                  className="w-6 h-6 sm:w-8 sm:h-8 flex items-center justify-center text-gray-400 hover:text-luxury-gold transition-all duration-300"
                  aria-label={social.label}
                >
                  <social.icon className="h-3 w-3 sm:h-4 sm:w-4" />
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer
