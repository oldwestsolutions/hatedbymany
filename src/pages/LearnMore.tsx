import React from 'react'
import { motion } from 'framer-motion'
import { Shield, Lock, Globe, Zap, CheckCircle } from 'lucide-react'

const LearnMore: React.FC = () => {
  const features = [
    {
      icon: Shield,
      title: 'Non-Custodial Security',
      description: 'Your keys, your crypto, your control. We never have access to your funds.',
      benefits: [
        'Complete ownership of private keys',
        'No third-party custody risks',
        'Direct blockchain interaction'
      ]
    },
    {
      icon: Lock,
      title: 'Privacy First',
      description: 'Built with privacy as the foundation, not an afterthought.',
      benefits: [
        'Anonymous transactions',
        'No data collection',
        'Decentralized architecture'
      ]
    },
    {
      icon: Globe,
      title: 'Global Access',
      description: 'Access your crypto from anywhere in the world, anytime.',
      benefits: [
        '24/7 availability',
        'No geographical restrictions',
        'Cross-border transactions'
      ]
    },
    {
      icon: Zap,
      title: 'Lightning Fast',
      description: 'Optimized for speed without compromising security.',
      benefits: [
        'Instant transactions',
        'Low network fees',
        'Efficient gas usage'
      ]
    }
  ]

  const securityFeatures = [
    'End-to-end encryption',
    'Hardware wallet integration',
    'Multi-signature support',
    'Biometric authentication',
    'Secure key generation',
    'Transaction verification'
  ]

  const supportedAssets = [
    'Bitcoin (BTC)',
    'Ethereum (ETH)',
    'Litecoin (LTC)',
    'Bitcoin Cash (BCH)',
    'Dogecoin (DOGE)',
    'And 100+ more cryptocurrencies'
  ]

  return (
    <div className="min-h-screen bg-luxury-black">
      {/* Hero Section */}
      <section className="relative pt-24 sm:pt-32 pb-16 sm:pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center space-y-6 sm:space-y-8"
          >
            <h1 className="text-3xl sm:text-5xl md:text-7xl font-gothic font-light tracking-wider text-white">
              Learn More
            </h1>
            <div className="w-20 sm:w-32 h-px bg-luxury-gold mx-auto"></div>
            <p className="text-base sm:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed px-4 sm:px-0">
              Discover the power of true financial sovereignty with HBM's non-custodial digital wallet.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Core Features */}
      <section className="py-12 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-2xl sm:text-4xl font-gothic font-light text-white mb-4 sm:mb-6">
              Why Choose Non-Custodial?
            </h2>
            <p className="text-base sm:text-lg text-gray-400 max-w-2xl mx-auto px-4 sm:px-0">
              Experience true financial freedom with complete control over your digital assets.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-gray-900/50 p-6 sm:p-8 rounded-lg border border-gray-800"
              >
                <div className="flex items-start space-x-3 sm:space-x-4">
                  <div className="flex-shrink-0">
                    <feature.icon className="h-6 w-6 sm:h-8 sm:w-8 text-luxury-gold" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg sm:text-xl font-medium text-white mb-2 sm:mb-3">
                      {feature.title}
                    </h3>
                    <p className="text-gray-400 mb-3 sm:mb-4 text-sm sm:text-base">
                      {feature.description}
                    </p>
                    <ul className="space-y-1 sm:space-y-2">
                      {feature.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="flex items-center text-xs sm:text-sm text-gray-300">
                          <CheckCircle className="h-3 w-3 sm:h-4 sm:w-4 text-luxury-gold mr-2 flex-shrink-0" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Security Features */}
      <section className="py-20 bg-gray-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-gothic font-light text-white mb-6">
              Advanced Security
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Bank-grade security features to protect your digital assets.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {securityFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-luxury-black/50 p-6 rounded-lg border border-gray-800 text-center"
              >
                <Shield className="h-8 w-8 text-luxury-gold mx-auto mb-4" />
                <h3 className="text-lg font-medium text-white">
                  {feature}
                </h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Supported Assets */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-gothic font-light text-white mb-6">
              Supported Assets
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Manage all your cryptocurrencies in one secure wallet.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {supportedAssets.map((asset, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-gray-900/50 p-4 rounded-lg border border-gray-800 flex items-center justify-between"
              >
                <span className="text-white font-medium">{asset}</span>
                <CheckCircle className="h-5 w-5 text-luxury-gold" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <h2 className="text-4xl font-gothic font-light text-white">
              Ready to Take Control?
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Join thousands of users who have already embraced true financial sovereignty.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <motion.button
                whileHover={{ opacity: 0.8 }}
                className="px-8 py-4 bg-luxury-gold text-black font-medium text-sm tracking-wider uppercase hover:bg-yellow-400 transition-all duration-300"
              >
                Get Started
              </motion.button>
              <motion.button
                whileHover={{ opacity: 0.8 }}
                className="px-8 py-4 border border-luxury-gold text-luxury-gold font-medium text-sm tracking-wider uppercase hover:bg-luxury-gold hover:text-black transition-all duration-300"
              >
                View Collection
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default LearnMore
