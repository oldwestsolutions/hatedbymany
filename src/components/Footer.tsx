import React from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Instagram, Facebook, Twitter, Youtube } from 'lucide-react'

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear()

  const footerSections = [
    {
      title: 'Products',
      links: [
        { name: 'Luxury Watches', href: '#watches' },
        { name: 'Leather Goods', href: '#leather' },
        { name: 'Limited Editions', href: '#limited' },
        { name: 'Custom Orders', href: '#custom' }
      ]
    },
    {
      title: 'Company',
      links: [
        { name: 'About Us', href: '/about-us' },
        { name: 'Our Story', href: '/our-story' },
        { name: 'Craftsmanship', href: '/craftsmanship' },
        { name: 'Awards', href: '/awards' }
      ]
    },
    {
      title: 'Support',
      links: [
        { name: 'Customer Service', href: '#service' },
        { name: 'Warranty', href: '#warranty' },
        { name: 'Shipping', href: '#shipping' },
        { name: 'Returns', href: '#returns' }
      ]
    }
  ]

  const socialLinks = [
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Youtube, href: '#', label: 'YouTube' }
  ]

  return (
    <footer className="bg-luxury-black border-t border-luxury-gray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Brand Section - Minimalist */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="lg:col-span-1"
            >
              <div className="mb-8">
                <span className="text-2xl font-gothic font-light text-white">
                  HBM
                </span>
              </div>
              <p className="text-gray-400 mb-8 leading-relaxed text-sm">
                Where luxury heritage meets contemporary design in the world of luxury 
                timepieces and premium leather goods.
              </p>
              
              {/* Contact Info - Clean */}
              <div className="space-y-4">
                <div className="flex items-center space-x-3 text-gray-400">
                  <MapPin className="h-4 w-4 text-luxury-gold" />
                  <span className="text-sm">Global Headquarters</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-400">
                  <Phone className="h-4 w-4 text-luxury-gold" />
                  <span className="text-sm">+375 29 123-45-67</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-400">
                  <Mail className="h-4 w-4 text-luxury-gold" />
                  <span className="text-sm">info@hbm-luxury.com</span>
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
                className="space-y-6"
              >
                <h3 className="text-sm font-light tracking-wider uppercase text-luxury-gold">
                  {section.title}
                </h3>
                <ul className="space-y-3">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <motion.a
                        href={link.href}
                        whileHover={{ opacity: 0.7 }}
                        className="text-gray-400 hover:text-luxury-gold transition-all duration-300 text-sm"
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
          className="py-12 border-t border-luxury-gray/20"
        >
          <div className="flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0">
            <div>
              <h3 className="text-lg font-luxury font-light text-luxury-gold mb-2">
                Stay Updated
              </h3>
              <p className="text-gray-400 text-sm">
                Subscribe to our newsletter for exclusive releases and updates.
              </p>
            </div>
            <div className="flex w-full md:w-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 md:w-80 px-4 py-3 bg-luxury-dark text-white placeholder-gray-500 border border-luxury-gray/20 focus:outline-none focus:border-luxury-gold transition-colors text-sm"
              />
              <motion.button
                whileHover={{ opacity: 0.8 }}
                className="px-6 py-3 bg-luxury-gold text-luxury-black font-light text-sm tracking-wider uppercase hover:bg-luxury-gold/90 transition-all duration-300"
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
          className="py-8 border-t border-luxury-gray/20"
        >
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            {/* Copyright */}
            <div className="text-gray-500 text-center md:text-left">
              <p className="text-sm">&copy; {currentYear} HBM Luxury. All rights reserved.</p>
              <p className="text-xs mt-1 text-gray-600">
                Crafted with passion worldwide
              </p>
            </div>

            {/* Social Links - Minimalist */}
            <div className="flex space-x-6">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  whileHover={{ opacity: 0.7 }}
                  className="w-8 h-8 flex items-center justify-center text-gray-400 hover:text-luxury-gold transition-all duration-300"
                  aria-label={social.label}
                >
                  <social.icon className="h-4 w-4" />
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
