import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, MessageCircle, X, Send } from 'lucide-react'

const CustomerService: React.FC = () => {
  const [isChatOpen, setIsChatOpen] = useState(false)
  const [chatMessage, setChatMessage] = useState('')
  const [chatMessages, setChatMessages] = useState([
    {
      id: 1,
      text: "Hello! Welcome to HBM Support. How can I help you today?",
      sender: 'support',
      timestamp: new Date()
    }
  ])

  const handleStartChat = () => {
    setIsChatOpen(true)
  }

  const handleCloseChat = () => {
    setIsChatOpen(false)
  }

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault()
    if (chatMessage.trim()) {
      const newMessage = {
        id: chatMessages.length + 1,
        text: chatMessage,
        sender: 'user',
        timestamp: new Date()
      }
      setChatMessages([...chatMessages, newMessage])
      setChatMessage('')
      
      // Simulate support response
      setTimeout(() => {
        const supportResponse = {
          id: chatMessages.length + 2,
          text: "Thank you for your message. Our support team will respond shortly. Is there anything specific about your digital wallet that you'd like help with?",
          sender: 'support',
          timestamp: new Date()
        }
        setChatMessages(prev => [...prev, supportResponse])
      }, 1000)
    }
  }
  const contactMethods = [
    {
      icon: Mail,
      title: 'Email Support',
      description: 'Get detailed assistance via email',
      contact: 'support@hatedbymany.com',
      responseTime: 'Within 24 hours',
      color: 'text-blue-400',
      borderColor: 'border-blue-400'
    },
    {
      icon: Phone,
      title: 'Phone Support',
      description: 'Speak directly with our experts',
      contact: '888 745 9274',
      responseTime: 'Mon-Fri 9AM-6PM EST',
      color: 'text-green-400',
      borderColor: 'border-green-400'
    },
    {
      icon: MessageCircle,
      title: 'Live Chat',
      description: 'Instant support via chat. By using our chat service, you agree to our Terms and Conditions and Privacy Policy.',
      contact: 'Available 24/7',
      responseTime: 'Immediate response',
      color: 'text-purple-400',
      borderColor: 'border-purple-400'
    }
  ]

  const faqs = [
    {
      question: 'How do I create a new digital wallet?',
      answer: 'Creating a new wallet is simple. Download our app, follow the secure setup process, and you\'ll have your wallet ready in minutes. Your private keys are generated locally and never leave your device.'
    },
    {
      question: 'Is my digital wallet secure?',
      answer: 'Absolutely. We use military-grade encryption and non-custodial architecture, meaning we never have access to your private keys. Your assets are protected by industry-leading security protocols.'
    },
    {
      question: 'What cryptocurrencies are supported?',
      answer: 'We support over 50 blockchain networks including Bitcoin, Ethereum, and all major cryptocurrencies. Our platform is constantly expanding to include new tokens and networks.'
    },
    {
      question: 'How do I recover my wallet if I lose my device?',
      answer: 'During wallet creation, you\'ll receive a recovery phrase. Store this securely offline. With this phrase, you can recover your wallet on any new device. Never share your recovery phrase with anyone.'
    },
    {
      question: 'Are there any fees for using the wallet?',
      answer: 'Our wallet is free to use. You only pay standard blockchain network fees for transactions, which are determined by the network, not by us. We never charge hidden fees.'
    },
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
              Customer Service
            </h1>
            <div className="w-24 h-px bg-luxury-gold mx-auto mb-8"></div>
            <p className="text-lg sm:text-xl text-gray-400 leading-relaxed max-w-3xl mx-auto">
              Dedicated support for all your digital wallet needs. Our expert team is here to help you 
              navigate the world of cryptocurrency with confidence and security.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-16 sm:py-24 bg-luxury-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16 sm:mb-20"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-gothic font-light text-white mb-6">
              Get In Touch
            </h2>
            <div className="w-16 h-px bg-luxury-gold mx-auto mb-8"></div>
            <p className="text-lg text-gray-400 max-w-3xl mx-auto">
              Choose your preferred method of contact. We're here to help whenever you need us.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-12">
            {contactMethods.map((method, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-luxury-black border border-luxury-gray/20 p-8 sm:p-10 hover:border-luxury-gold/30 transition-all duration-300 text-center"
              >
                <div className="mb-6">
                  <method.icon className={`h-12 w-12 ${method.color} mx-auto mb-4`} />
                  <h3 className="text-xl sm:text-2xl font-luxury font-light text-white mb-4">
                    {method.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed mb-6">
                    {method.description}
                  </p>
                </div>
                
                <div className="space-y-3">
                  <div className="text-luxury-gold font-medium">
                    {method.contact}
                  </div>
                  <div className="text-sm text-gray-400">
                    {method.responseTime}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Live Chat Section */}
      <section className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16 sm:mb-20"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-gothic font-light text-white mb-6">
              Live Chat Support
            </h2>
            <div className="w-16 h-px bg-luxury-gold mx-auto mb-8"></div>
            <p className="text-lg text-gray-400 max-w-3xl mx-auto">
              Get instant help with our live chat support. Available 24/7 for immediate assistance.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <div className="bg-luxury-dark border border-luxury-gray/20 p-8 sm:p-12 text-center">
              <div className="mb-8">
                <MessageCircle className="h-16 w-16 text-luxury-gold mx-auto mb-6" />
                <h3 className="text-2xl font-luxury font-light text-white mb-4">
                  Start a Live Chat
                </h3>
                <p className="text-gray-400 mb-8">
                  Click the button below to start a live chat session with our support team. 
                  By using our chat service, you agree to our Terms and Conditions and Privacy Policy.
                </p>
              </div>
              
              <motion.button
                onClick={handleStartChat}
                whileHover={{ opacity: 0.8 }}
                className="px-12 py-4 bg-luxury-gold text-luxury-black font-medium text-sm tracking-wider uppercase hover:bg-luxury-gold/90 transition-all duration-300"
              >
                Start Live Chat
              </motion.button>
              
              <p className="text-sm text-gray-500 mt-6">
                Available 24/7 • Immediate response • Secure and private
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 sm:py-24 bg-luxury-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16 sm:mb-20"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-gothic font-light text-white mb-6">
              Frequently Asked Questions
            </h2>
            <div className="w-16 h-px bg-luxury-gold mx-auto mb-8"></div>
            <p className="text-lg text-gray-400 max-w-3xl mx-auto">
              Find answers to common questions about our digital wallet services
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto space-y-6">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-luxury-black border border-luxury-gray/20 p-6 sm:p-8"
              >
                <h3 className="text-lg sm:text-xl font-luxury font-light text-white mb-4">
                  {faq.question}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {faq.answer}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Live Chat Window */}
      {isChatOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="bg-luxury-dark border border-luxury-gray/20 rounded-lg w-full max-w-md h-96 flex flex-col"
          >
            {/* Chat Header */}
            <div className="flex items-center justify-between p-4 border-b border-luxury-gray/20">
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                <span className="text-white font-medium">HBM Support</span>
              </div>
              <button
                onClick={handleCloseChat}
                className="text-gray-400 hover:text-white transition-colors"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Chat Messages */}
            <div className="flex-1 p-4 overflow-y-auto space-y-4">
              {chatMessages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-xs px-4 py-2 rounded-lg ${
                      message.sender === 'user'
                        ? 'bg-luxury-gold text-luxury-black'
                        : 'bg-luxury-gray/20 text-white'
                    }`}
                  >
                    <p className="text-sm">{message.text}</p>
                    <p className="text-xs opacity-70 mt-1">
                      {message.timestamp.toLocaleTimeString()}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Chat Input */}
            <form onSubmit={handleSendMessage} className="p-4 border-t border-luxury-gray/20">
              <div className="flex space-x-2">
                <input
                  type="text"
                  value={chatMessage}
                  onChange={(e) => setChatMessage(e.target.value)}
                  placeholder="Type your message..."
                  className="flex-1 px-3 py-2 bg-luxury-black border border-luxury-gray/20 text-white placeholder-gray-500 focus:outline-none focus:border-luxury-gold transition-colors rounded"
                />
                <button
                  type="submit"
                  className="px-4 py-2 bg-luxury-gold text-luxury-black hover:bg-luxury-gold/90 transition-colors rounded"
                >
                  <Send className="h-4 w-4" />
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      )}
    </div>
  )
}

export default CustomerService
