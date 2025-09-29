import React from 'react'
import { motion } from 'framer-motion'
import { Building2, Globe, Shield, Zap, Heart, Target, Award, Users, Clock, Star } from 'lucide-react'

const Partners: React.FC = () => {
  const partners = [
    {
      name: 'HBM Luxury Group',
      industry: 'Luxury Goods',
      description: 'Our flagship luxury timepieces and leather goods division, crafting the world\'s most exclusive accessories.',
      founded: '2025',
      employees: '50+',
      revenue: '$50M+',
      icon: Award,
      color: 'text-luxury-gold',
      borderColor: 'border-luxury-gold'
    },
    {
      name: 'Dallas Tech Solutions',
      industry: 'Technology',
      description: 'Cutting-edge software development and digital innovation, powering the future of luxury retail.',
      founded: '2023',
      employees: '120+',
      revenue: '$25M+',
      icon: Zap,
      color: 'text-blue-400',
      borderColor: 'border-blue-400'
    },
    {
      name: 'Heritage Manufacturing',
      industry: 'Manufacturing',
      description: 'Precision manufacturing and quality control for luxury goods, maintaining the highest standards.',
      founded: '2022',
      employees: '200+',
      revenue: '$40M+',
      icon: Building2,
      color: 'text-green-400',
      borderColor: 'border-green-400'
    },
    {
      name: 'Global Distribution Network',
      industry: 'Logistics',
      description: 'Worldwide distribution and logistics network ensuring luxury goods reach customers globally.',
      founded: '2024',
      employees: '80+',
      revenue: '$15M+',
      icon: Globe,
      color: 'text-purple-400',
      borderColor: 'border-purple-400'
    },
    {
      name: 'Luxury Security Services',
      industry: 'Security',
      description: 'Premium security and protection services for high-value luxury goods and VIP clients.',
      founded: '2023',
      employees: '60+',
      revenue: '$12M+',
      icon: Shield,
      color: 'text-red-400',
      borderColor: 'border-red-400'
    },
    {
      name: 'Artisan Academy',
      industry: 'Education',
      description: 'Training the next generation of master craftsmen in traditional luxury manufacturing techniques.',
      founded: '2024',
      employees: '30+',
      revenue: '$8M+',
      icon: Users,
      color: 'text-yellow-400',
      borderColor: 'border-yellow-400'
    }
  ]

  const stats = [
    {
      title: 'Total Companies',
      value: '6',
      description: 'Diverse portfolio of luxury and technology businesses'
    },
    {
      title: 'Combined Revenue',
      value: '$150M+',
      description: 'Annual revenue across all partner companies'
    },
    {
      title: 'Global Employees',
      value: '540+',
      description: 'Talented professionals across all divisions'
    },
    {
      title: 'Years Combined',
      value: '15+',
      description: 'Total years of industry experience'
    }
  ]

  const values = [
    {
      title: 'Excellence',
      description: 'Uncompromising commitment to quality and innovation across all businesses',
      icon: Star
    },
    {
      title: 'Innovation',
      description: 'Pioneering new technologies and techniques in luxury manufacturing',
      icon: Zap
    },
    {
      title: 'Heritage',
      description: 'Preserving traditional craftsmanship while embracing modern innovation',
      icon: Award
    },
    {
      title: 'Growth',
      description: 'Strategic expansion and development of new market opportunities',
      icon: Target
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
              Our Partners
            </h1>
            <div className="w-16 h-px bg-white mx-auto mb-8"></div>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              A diverse portfolio of companies united under the Hated By Many vision, 
              each contributing to our mission of excellence and innovation.
            </p>
          </motion.div>

          {/* Stats Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-4xl font-gothic font-light text-white mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-400 text-sm mb-1">{stat.title}</div>
                <div className="text-gray-500 text-xs">{stat.description}</div>
              </motion.div>
            ))}
          </motion.div>

          {/* Partners Grid */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <h2 className="text-3xl font-luxury font-light text-white text-center mb-12">
              Portfolio Companies
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {partners.map((partner, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gray-900 p-8 border border-gray-800 hover:border-white/30 transition-all duration-300"
                >
                  <div className="flex items-start gap-4 mb-6">
                    <div className={`w-12 h-12 border ${partner.borderColor} flex items-center justify-center`}>
                      <partner.icon className={`h-6 w-6 ${partner.color}`} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-luxury font-light text-white mb-2">
                        {partner.name}
                      </h3>
                      <div className="text-sm text-gray-400 mb-2">{partner.industry}</div>
                      <div className="text-xs text-gray-500">Founded {partner.founded}</div>
                    </div>
                  </div>
                  
                  <p className="text-gray-400 text-sm leading-relaxed mb-6">
                    {partner.description}
                  </p>
                  
                  <div className="grid grid-cols-2 gap-4 text-xs">
                    <div>
                      <div className="text-gray-500">Employees</div>
                      <div className="text-white">{partner.employees}</div>
                    </div>
                    <div>
                      <div className="text-gray-500">Revenue</div>
                      <div className="text-white">{partner.revenue}</div>
                    </div>
                  </div>
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
            className="mb-20"
          >
            <h2 className="text-3xl font-luxury font-light text-white text-center mb-12">
              Shared Values
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
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

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-3xl font-luxury font-light text-white mb-8">
              Strategic Partnerships
            </h2>
            <div className="max-w-4xl mx-auto">
              <p className="text-lg text-gray-400 leading-relaxed mb-8">
                Our diverse portfolio of companies works together to create synergies 
                and drive innovation across luxury goods, technology, and manufacturing sectors.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-3 border border-white text-white hover:bg-white hover:text-black transition-all duration-300 font-medium">
                  View Portfolio
                </button>
                <button className="px-8 py-3 bg-white text-black hover:bg-gray-100 transition-all duration-300 font-medium">
                  Partnership Opportunities
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Partners
