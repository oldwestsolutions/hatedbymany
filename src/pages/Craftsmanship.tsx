import React from 'react'
import { motion } from 'framer-motion'
import { Clock, Shield, Star, Award, Users, Settings } from 'lucide-react'

const Craftsmanship: React.FC = () => {
  const processes = [
    {
      step: '01',
      title: 'Design & Planning',
      description: 'Each piece begins with meticulous design, drawing inspiration from luxury heritage and contemporary aesthetics.',
      icon: Star
    },
    {
      step: '02',
      title: 'Material Selection',
      description: 'We source only the finest materials from trusted suppliers worldwide, ensuring exceptional quality.',
      icon: Shield
    },
    {
      step: '03',
      title: 'Handcrafting',
      description: 'Master artisans bring designs to life using traditional techniques passed down through generations.',
      icon: Settings
    },
    {
      step: '04',
      title: 'Quality Control',
      description: 'Every piece undergoes rigorous inspection to meet our exacting standards of perfection.',
      icon: Award
    }
  ]

  const techniques = [
    {
      title: 'Traditional Engraving',
      description: 'Hand-engraved details inspired by traditional art patterns',
      image: 'Engraving Process'
    },
    {
      title: 'Leather Crafting',
      description: 'Premium leather goods crafted using time-honored techniques',
      image: 'Leather Work'
    },
    {
      title: 'Movement Assembly',
      description: 'Precision timepiece assembly by master watchmakers',
      image: 'Watch Assembly'
    }
  ]

  const artisans = [
    {
      name: 'Master Engraver',
      experience: '25+ Years',
      specialty: 'Traditional Luxury Patterns'
    },
    {
      name: 'Leather Craftsman',
      experience: '20+ Years',
      specialty: 'Premium Leather Goods'
    },
    {
      name: 'Watchmaker',
      experience: '30+ Years',
      specialty: 'Precision Timepieces'
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
              Craftsmanship
            </h1>
            <div className="w-16 h-px bg-white mx-auto mb-8"></div>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Discover the meticulous processes and traditional techniques that define 
              the exceptional quality of every HBM creation.
            </p>
          </motion.div>

          {/* Process Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <h2 className="text-3xl font-luxury font-light text-white text-center mb-12">
              Our Process
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {processes.map((process, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="w-16 h-16 border border-white/30 flex items-center justify-center mx-auto mb-6">
                    <process.icon className="h-8 w-8 text-white" />
                  </div>
                  <div className="text-2xl font-gothic font-light text-white mb-4">
                    {process.step}
                  </div>
                  <h3 className="text-lg font-luxury font-light text-white mb-4">
                    {process.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {process.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Techniques Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <h2 className="text-3xl font-luxury font-light text-white text-center mb-12">
              Traditional Techniques
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {techniques.map((technique, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="h-64 bg-gray-900 border border-gray-800 flex items-center justify-center mb-6">
                    <div className="text-center space-y-2">
                      <div className="w-12 h-12 border border-white/30 flex items-center justify-center mx-auto">
                        <Clock className="h-6 w-6 text-white" />
                      </div>
                      <p className="text-white/60 text-sm">{technique.image}</p>
                    </div>
                  </div>
                  <h3 className="text-xl font-luxury font-light text-white mb-4">
                    {technique.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed">
                    {technique.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Artisans Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <h2 className="text-3xl font-luxury font-light text-white text-center mb-12">
              Master Artisans
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {artisans.map((artisan, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="h-48 bg-gray-900 border border-gray-800 flex items-center justify-center mb-6">
                    <div className="text-center space-y-2">
                      <div className="w-12 h-12 border border-white/30 flex items-center justify-center mx-auto">
                        <Users className="h-6 w-6 text-white" />
                      </div>
                      <p className="text-white/60 text-sm">Artisan Photo</p>
                    </div>
                  </div>
                  <h3 className="text-lg font-luxury font-light text-white mb-2">
                    {artisan.name}
                  </h3>
                  <p className="text-white text-sm mb-2">{artisan.experience}</p>
                  <p className="text-gray-400 text-sm">{artisan.specialty}</p>
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
              <p className="text-lg text-gray-400 leading-relaxed">
                Our craftsmanship is deeply rooted in luxury tradition, with techniques 
                passed down through generations. Each piece honors the rich cultural heritage 
                of master artisans while embracing contemporary design principles.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Craftsmanship
