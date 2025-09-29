import React from 'react'
import { motion } from 'framer-motion'
import { Award, Star, Trophy, Medal, Crown, Shield } from 'lucide-react'

const Awards: React.FC = () => {
  const awards = [
    {
      year: '2023',
      title: 'Luxury Design Excellence',
      organization: 'International Luxury Awards',
      category: 'Timepieces',
      description: 'Recognition for innovative design in luxury timepieces',
      icon: Award
    },
    {
      year: '2022',
      title: 'Craftsmanship Award',
      organization: 'Baselworld Watch Fair',
      category: 'Traditional Techniques',
      description: 'Honoring traditional Belarusian craftsmanship methods',
      icon: Trophy
    },
    {
      year: '2021',
      title: 'Leather Goods Excellence',
      organization: 'Luxury Leather Association',
      category: 'Premium Materials',
      description: 'Outstanding quality in premium leather goods',
      icon: Medal
    },
    {
      year: '2020',
      title: 'Innovation in Design',
      organization: 'European Design Council',
      category: 'Contemporary Design',
      description: 'Blending traditional heritage with modern aesthetics',
      icon: Star
    },
    {
      year: '2019',
      title: 'Master Craftsman Recognition',
      organization: 'Belarusian Artisan Guild',
      category: 'Traditional Skills',
      description: 'Preserving and promoting traditional Belarusian techniques',
      icon: Crown
    },
    {
      year: '2018',
      title: 'Quality Excellence',
      organization: 'International Quality Institute',
      category: 'Manufacturing',
      description: 'Exceptional quality standards in luxury manufacturing',
      icon: Shield
    }
  ]

  const categories = [
    {
      title: 'Design Awards',
      count: '15+',
      description: 'International recognition for design innovation'
    },
    {
      title: 'Craftsmanship Awards',
      count: '12+',
      description: 'Honoring traditional techniques and skills'
    },
    {
      title: 'Quality Certifications',
      count: '8+',
      description: 'Industry standards and quality assurance'
    }
  ]

  const recognition = [
    {
      title: 'Featured in',
      items: ['Luxury Watch Magazine', 'International Design Review', 'Belarusian Heritage Journal']
    },
    {
      title: 'Exhibited at',
      items: ['Baselworld Watch Fair', 'Salon International de la Haute Horlogerie', 'Milan Design Week']
    },
    {
      title: 'Recognized by',
      items: ['Belarusian Ministry of Culture', 'International Luxury Association', 'European Craft Council']
    }
  ]

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl md:text-6xl font-gothic font-light text-white mb-6">
              Awards & Recognition
            </h1>
            <div className="w-16 h-px bg-white mx-auto mb-8"></div>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Discover the prestigious awards and recognition that celebrate our commitment 
              to excellence in luxury craftsmanship and design innovation.
            </p>
          </motion.div>

          {/* Awards Timeline */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <h2 className="text-3xl font-luxury font-light text-white text-center mb-12">
              Our Awards
            </h2>
            <div className="space-y-8">
              {awards.map((award, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex flex-col lg:flex-row items-center gap-8 p-8 border border-gray-800 hover:border-white/30 transition-all duration-300"
                >
                  <div className="flex-shrink-0">
                    <div className="w-20 h-20 border border-white/30 flex items-center justify-center">
                      <award.icon className="h-10 w-10 text-white" />
                    </div>
                  </div>
                  <div className="flex-1 text-center lg:text-left">
                    <div className="text-3xl font-gothic font-light text-white mb-2">
                      {award.year}
                    </div>
                    <h3 className="text-xl font-luxury font-light text-white mb-2">
                      {award.title}
                    </h3>
                    <p className="text-white text-sm mb-2">{award.organization}</p>
                    <p className="text-gray-400 text-sm mb-3">{award.category}</p>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      {award.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Categories Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <h2 className="text-3xl font-luxury font-light text-white text-center mb-12">
              Award Categories
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {categories.map((category, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="text-center p-8 border border-gray-800 hover:border-white/30 transition-all duration-300"
                >
                  <div className="text-4xl font-gothic font-light text-white mb-4">
                    {category.count}
                  </div>
                  <h3 className="text-xl font-luxury font-light text-white mb-4">
                    {category.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed">
                    {category.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Recognition Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <h2 className="text-3xl font-luxury font-light text-white text-center mb-12">
              Recognition
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {recognition.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <h3 className="text-lg font-luxury font-light text-white mb-6">
                    {item.title}
                  </h3>
                  <ul className="space-y-3">
                    {item.items.map((listItem, itemIndex) => (
                      <li key={itemIndex} className="text-gray-400 text-sm">
                        {listItem}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Future Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-3xl font-luxury font-light text-white mb-8">
              Continuing Excellence
            </h2>
            <div className="max-w-4xl mx-auto">
              <p className="text-lg text-gray-400 leading-relaxed">
                These awards and recognition drive us to continue pushing the boundaries of 
                luxury craftsmanship. We remain committed to maintaining the highest standards 
                of quality and innovation that have earned us these prestigious honors.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Awards
