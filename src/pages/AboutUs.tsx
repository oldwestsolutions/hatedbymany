import React from 'react'
import { motion } from 'framer-motion'
import { Crown, Shield, Star, MapPin, Users, Award } from 'lucide-react'

const AboutUs: React.FC = () => {
  const teamMembers = [
    {
      name: 'Alexander Volkov',
      role: 'Founder & Master Craftsman',
      description: '30+ years of experience in luxury timepiece creation'
    },
    {
      name: 'Elena Petrov',
      role: 'Head of Leather Goods',
      description: 'Specialist in premium leather craftsmanship'
    },
    {
      name: 'Dmitri Kozlov',
      role: 'Design Director',
      description: 'Contemporary design meets traditional Belarusian heritage'
    }
  ]

  const values = [
    {
      icon: Crown,
      title: 'Excellence',
      description: 'Every piece is crafted to the highest standards of luxury and precision.'
    },
    {
      icon: Shield,
      title: 'Integrity',
      description: 'We maintain the highest ethical standards in all our business practices.'
    },
    {
      icon: Star,
      title: 'Innovation',
      description: 'Blending traditional craftsmanship with modern design principles.'
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
              About Us
            </h1>
            <div className="w-16 h-px bg-white mx-auto mb-8"></div>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Discover the story behind HBM and the passionate individuals who create 
              our exceptional luxury timepieces and leather goods.
            </p>
          </motion.div>

          {/* Company Story */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <h2 className="text-3xl font-luxury font-light text-white">
                Our Foundation
              </h2>
              <p className="text-gray-400 leading-relaxed">
                Founded in the heart of Minsk, HBM represents the perfect fusion of Belarusian 
                craftsmanship and contemporary luxury. Our journey began with a simple vision: 
                to create timepieces and leather goods that honor traditional techniques while 
                embracing modern design.
              </p>
              <p className="text-gray-400 leading-relaxed">
                Each piece in our collection tells a story of heritage, precision, and 
                uncompromising quality. From the intricate engravings inspired by Belarusian 
                folk art to the refined design elements, every detail is meticulously crafted 
                by our master artisans.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="h-96 bg-gray-900 border border-gray-800 flex items-center justify-center">
                <div className="text-center space-y-4">
                  <div className="w-16 h-16 border border-white/30 flex items-center justify-center mx-auto">
                    <Crown className="h-8 w-8 text-white" />
                  </div>
                  <p className="text-white/60 text-sm">Company Image</p>
                  <p className="text-white/40 text-xs">Add your company photo here</p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Team Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <h2 className="text-3xl font-luxury font-light text-white text-center mb-12">
              Our Team
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {teamMembers.map((member, index) => (
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
                        <Users className="h-6 w-6 text-white" />
                      </div>
                      <p className="text-white/60 text-sm">Team Photo</p>
                    </div>
                  </div>
                  <h3 className="text-xl font-luxury font-light text-white mb-2">
                    {member.name}
                  </h3>
                  <p className="text-luxury-gold text-sm mb-3">{member.role}</p>
                  <p className="text-gray-400 text-sm">{member.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Values Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-3xl font-luxury font-light text-white mb-12">
              Our Values
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="w-16 h-16 border border-white/30 flex items-center justify-center mx-auto mb-6">
                    <value.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-luxury font-light text-white mb-4">
                    {value.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed">
                    {value.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default AboutUs
