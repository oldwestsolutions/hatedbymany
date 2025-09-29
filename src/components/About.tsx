import React from 'react'
import { motion } from 'framer-motion'
import { Crown, Shield, Star, MapPin } from 'lucide-react'

const About: React.FC = () => {

  const values = [
    {
      icon: Crown,
      title: 'Luxury Heritage',
      description: 'Drawing inspiration from Belarusian royal traditions and Gothic architectural mastery.'
    },
    {
      icon: Shield,
      title: 'Craftsmanship',
      description: 'Each piece is handcrafted by master artisans using time-honored techniques.'
    },
    {
      icon: Star,
      title: 'Exclusivity',
      description: 'Limited edition collections that define the pinnacle of luxury and sophistication.'
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
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-gothic font-light text-white mb-6">
            About
          </h2>
          <div className="w-16 h-px bg-luxury-gold mx-auto mb-8"></div>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Where Belarusian heritage meets contemporary design in the world of luxury timepieces and leather goods.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Story Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="space-y-8">
              <h3 className="text-2xl font-luxury font-light text-white">
                A Legacy of Excellence
              </h3>
              <p className="text-gray-400 leading-relaxed">
                Founded in the heart of Minsk, HBM represents the perfect fusion of Belarusian 
                craftsmanship and contemporary design. Our master artisans have dedicated their lives 
                to creating timepieces and leather goods that transcend mere luxury.
              </p>
              <p className="text-gray-400 leading-relaxed">
                Each piece tells a story of heritage, precision, and uncompromising quality. 
                From the intricate engravings inspired by Belarusian folk art to the refined 
                design elements, every detail is meticulously crafted.
              </p>
            </div>

            {/* Values - Minimalist */}
            <div className="space-y-8">
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start space-x-6"
                >
                  <div className="flex-shrink-0 w-8 h-8 border border-luxury-gold/30 flex items-center justify-center">
                    <value.icon className="h-4 w-4 text-luxury-gold" />
                  </div>
                  <div>
                    <h4 className="text-lg font-luxury font-light text-white mb-2">
                      {value.title}
                    </h4>
                    <p className="text-gray-400 text-sm leading-relaxed">
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
            className="relative"
          >
            {/* Main Visual - Minimalist */}
            <div className="relative h-96 bg-luxury-dark border border-luxury-gray/20 flex items-center justify-center">
              <div className="text-center space-y-6">
                <div className="w-16 h-16 border border-luxury-gold/30 flex items-center justify-center">
                  <Crown className="h-8 w-8 text-luxury-gold" />
                </div>
                <h4 className="text-2xl font-gothic font-light text-white">
                  HBM
                </h4>
                <p className="text-sm text-gray-400 tracking-wider uppercase">
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
              className="mt-8 flex items-center justify-center space-x-2 text-gray-400"
            >
              <MapPin className="h-4 w-4" />
              <span className="text-sm font-light">Minsk, Belarus</span>
            </motion.div>
          </motion.div>
        </div>

      </div>
    </section>
  )
}

export default About
