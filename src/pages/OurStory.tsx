import React from 'react'
import { motion } from 'framer-motion'
import { Clock, MapPin, Star, Award } from 'lucide-react'

const OurStory: React.FC = () => {
  const timeline = [
    {
      year: '1998',
      title: 'The Beginning',
      description: 'Alexander Volkov establishes HBM in a small workshop, focusing on traditional craftsmanship.'
    },
    {
      year: '2005',
      title: 'First Recognition',
      description: 'Our timepieces gain international attention at the Baselworld Watch Fair, marking our entry into the global luxury market.'
    },
    {
      year: '2012',
      title: 'Expansion',
      description: 'We expand our leather goods division, combining traditional techniques with contemporary design principles.'
    },
    {
      year: '2018',
      title: 'Global Presence',
      description: 'HBM opens flagship stores in major cities worldwide, bringing luxury to international markets.'
    },
    {
      year: '2024',
      title: 'Innovation',
      description: 'Launch of our sustainable luxury initiative, combining traditional craftsmanship with eco-friendly materials.'
    }
  ]

  const milestones = [
    {
      icon: Clock,
      title: '25+ Years',
      description: 'Of continuous innovation in luxury craftsmanship'
    },
    {
      icon: Award,
      title: '50+ Awards',
      description: 'International recognition for design excellence'
    },
    {
      icon: Star,
      title: 'Global Reach',
      description: 'Presence in over 30 countries worldwide'
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
              Our Story
            </h1>
            <div className="w-16 h-px bg-white mx-auto mb-8"></div>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              From a small workshop to a global luxury brand, discover the journey 
              that shaped HBM into the prestigious name it is today.
            </p>
          </motion.div>

          {/* Timeline Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <h2 className="text-3xl font-luxury font-light text-white text-center mb-12">
              Our Journey
            </h2>
            <div className="space-y-12">
              {timeline.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-8`}
                >
                  <div className="flex-1">
                    <div className="text-center lg:text-left">
                      <div className="text-4xl font-gothic font-light text-white mb-4">
                        {item.year}
                      </div>
                      <h3 className="text-2xl font-luxury font-light text-white mb-4">
                        {item.title}
                      </h3>
                      <p className="text-gray-400 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="h-64 bg-gray-900 border border-gray-800 flex items-center justify-center">
                      <div className="text-center space-y-2">
                        <div className="w-12 h-12 border border-white/30 flex items-center justify-center mx-auto">
                          <Clock className="h-6 w-6 text-white" />
                        </div>
                        <p className="text-white/60 text-sm">Timeline Image</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Milestones Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <h2 className="text-3xl font-luxury font-light text-white text-center mb-12">
              Key Milestones
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="w-20 h-20 border border-white/30 flex items-center justify-center mx-auto mb-6">
                    <milestone.icon className="h-10 w-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-gothic font-light text-white mb-4">
                    {milestone.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed">
                    {milestone.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Heritage Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-3xl font-luxury font-light text-white mb-8">
              Luxury Heritage
            </h2>
            <div className="max-w-4xl mx-auto">
              <p className="text-lg text-gray-400 leading-relaxed mb-8">
                Our story is deeply rooted in luxury culture and tradition. From the intricate 
                patterns inspired by traditional art to the meticulous attention to detail passed down 
                through generations, every HBM piece carries the soul of master craftsmanship.
              </p>
              <div className="flex items-center justify-center space-x-2 text-gray-400">
                <MapPin className="h-5 w-5" />
                <span className="text-sm">Proudly crafted worldwide</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default OurStory
