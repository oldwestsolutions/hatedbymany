import React from 'react'
import { motion } from 'framer-motion'
import { Crown, Shield, Star, MapPin, Hammer, Clock } from 'lucide-react'

const About: React.FC = () => {

  const values = [
    {
      icon: Crown,
      title: 'Heritage',
      description: 'Built on decades of expertise and established traditions.'
    },
    {
      icon: Hammer,
      title: 'Craftsmanship',
      description: 'Handcrafted by the most skilled craftsmen in the world.'
    },
    {
      icon: Clock,
      title: 'Time Value',
      description: 'World renowned quality - engineered to last and perform.'
    }
  ]

  return (
    <section id="about" className="py-20 bg-luxury-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16 lg:mb-20"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-gothic font-light text-white mb-4 sm:mb-6">
            About
          </h2>
          <div className="w-12 sm:w-16 h-px bg-luxury-gold mx-auto mb-6 sm:mb-8"></div>
          <p className="text-base sm:text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed px-4 sm:px-0">
            Where luxury heritage meets contemporary design in the world of luxury timepieces and leather goods.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-16 items-center">
          {/* Story Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6 sm:space-y-8"
          >
            <div className="space-y-6 sm:space-y-8">
              <h3 className="text-xl sm:text-2xl font-luxury font-light text-white">
                Founded in 2025
              </h3>
              <p className="text-sm sm:text-base text-gray-400 leading-relaxed">
                Founded with a vision of excellence, HBM represents the perfect fusion of craftsmanship and contemporary design. Our master artisans have dedicated their lives to creating timepieces and leather goods that transcend mere luxury.
              </p>
              <p className="text-sm sm:text-base text-gray-400 leading-relaxed">
                Each piece tells a story of heritage, precision, and uncompromising quality. From the intricate engravings inspired by traditional art to the refined design elements, every detail is meticulously crafted.
              </p>
            </div>

            {/* Values - Minimalist */}
            <div className="space-y-6 sm:space-y-8">
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start space-x-4 sm:space-x-6"
                >
                  <div className="flex-shrink-0 w-6 h-6 sm:w-8 sm:h-8 border border-luxury-gold/30 flex items-center justify-center">
                    <value.icon className="h-3 w-3 sm:h-4 sm:w-4 text-luxury-gold" />
                  </div>
                  <div>
                    <h4 className="text-base sm:text-lg font-luxury font-light text-white mb-1 sm:mb-2">
                      {value.title}
                    </h4>
                    <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Visual Elements - Clean */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative order-first lg:order-last"
          >
            {/* Main Visual - Minimalist */}
            <div className="relative h-64 sm:h-80 lg:h-96 bg-luxury-dark border border-luxury-gray/20 flex items-center justify-center">
              <div className="text-center space-y-4 sm:space-y-6">
                <h4 className="text-xl sm:text-2xl font-gothic font-light text-white">
                  HBM
                </h4>
                <p className="text-xs sm:text-sm text-gray-400 tracking-wider uppercase">
                  Hated By Many
                </p>
              </div>
            </div>

            {/* Location Info - Subtle */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="mt-6 sm:mt-8 flex items-center justify-center space-x-2 text-gray-400"
            >
              <MapPin className="h-3 w-3 sm:h-4 sm:w-4" />
                <span className="text-xs sm:text-sm font-light">Global Headquarters</span>
            </motion.div>
          </motion.div>
        </div>

      </div>
    </section>
  )
}

export default About
