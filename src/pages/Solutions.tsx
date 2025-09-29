import React from 'react'
import { motion } from 'framer-motion'
import { Shield, Lock, Smartphone, Globe, Zap, Users } from 'lucide-react'

const Solutions: React.FC = () => {
  const solutions = [
    {
      icon: Shield,
      title: 'Non-Custodial Security',
      description: 'Your keys, your crypto, your control. We never hold your private keys, ensuring maximum security and privacy.',
      features: ['Private key ownership', 'Zero-knowledge architecture', 'Hardware wallet integration']
    },
    {
      icon: Lock,
      title: 'Advanced Encryption',
      description: 'Military-grade encryption protects your digital assets with industry-leading security protocols.',
      features: ['AES-256 encryption', 'End-to-end security', 'Multi-signature support']
    },
    {
      icon: Smartphone,
      title: 'Cross-Platform Access',
      description: 'Seamlessly manage your digital assets across all your devices with our unified platform.',
      features: ['Mobile & desktop apps', 'Browser extension', 'API integration']
    },
    {
      icon: Globe,
      title: 'Global Connectivity',
      description: 'Connect to blockchain networks worldwide with lightning-fast transaction processing.',
      features: ['Multi-chain support', 'Global node network', 'Low latency transactions']
    },
    {
      icon: Zap,
      title: 'Lightning Fast',
      description: 'Experience instant transactions with our optimized network infrastructure and smart routing.',
      features: ['Sub-second transactions', 'Smart routing', 'Optimized gas fees']
    },
    {
      icon: Users,
      title: 'Enterprise Ready',
      description: 'Scalable solutions for businesses and institutions with advanced compliance features.',
      features: ['Institutional custody', 'Compliance tools', 'White-label solutions']
    }
  ]

  const stats = [
    { number: '99.9%', label: 'Uptime Guarantee' },
    { number: '256-bit', label: 'Encryption' },
    { number: '50+', label: 'Blockchain Networks' },
    { number: '1M+', label: 'Active Users' }
  ]

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative py-20 sm:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-gothic font-light tracking-wider text-white mb-6">
              Solutions
            </h1>
            <div className="w-24 h-px bg-luxury-gold mx-auto mb-8"></div>
            <p className="text-lg sm:text-xl text-gray-400 leading-relaxed max-w-3xl mx-auto">
              Comprehensive digital wallet solutions designed for security, privacy, and performance. 
              Built for individuals, businesses, and institutions worldwide.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 sm:py-24 bg-luxury-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-3xl sm:text-4xl md:text-5xl font-gothic font-light text-luxury-gold mb-2">
                  {stat.number}
                </div>
                <div className="text-sm sm:text-base text-gray-400 uppercase tracking-wider">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-20 sm:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16 sm:mb-20"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-gothic font-light text-white mb-6">
              Our Solutions
            </h2>
            <div className="w-16 h-px bg-luxury-gold mx-auto mb-8"></div>
            <p className="text-lg text-gray-400 max-w-3xl mx-auto">
              Discover our comprehensive suite of digital wallet solutions designed for every need
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12">
            {solutions.map((solution, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-luxury-dark border border-luxury-gray/20 p-8 sm:p-10 hover:border-luxury-gold/30 transition-all duration-300"
              >
                <div className="mb-6">
                  <solution.icon className="h-12 w-12 text-luxury-gold mb-4" />
                  <h3 className="text-xl sm:text-2xl font-luxury font-light text-white mb-4">
                    {solution.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed mb-6">
                    {solution.description}
                  </p>
                </div>
                
                <ul className="space-y-2">
                  {solution.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                      <div className="w-1.5 h-1.5 bg-luxury-gold rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 sm:py-32 bg-luxury-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center max-w-4xl mx-auto"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-gothic font-light text-white mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-lg text-gray-400 mb-12 leading-relaxed">
              Join thousands of users who trust HBM for their digital asset management needs.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <motion.a
                href="/collections"
                whileHover={{ opacity: 0.8 }}
                className="px-8 sm:px-12 py-4 sm:py-5 bg-luxury-gold text-luxury-black font-medium text-sm tracking-wider uppercase hover:bg-luxury-gold/90 transition-all duration-300 inline-block text-center"
              >
                View Collections
              </motion.a>
              <motion.a
                href="/learn-more"
                whileHover={{ opacity: 0.8 }}
                className="px-8 sm:px-12 py-4 sm:py-5 border border-luxury-gold text-luxury-gold font-medium text-sm tracking-wider uppercase hover:bg-luxury-gold hover:text-luxury-black transition-all duration-300 inline-block text-center"
              >
                Learn More
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Solutions
