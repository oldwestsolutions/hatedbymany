import React, { useState, useMemo } from 'react'
import { motion } from 'framer-motion'
import { Briefcase, Users, Target, Award, Heart, Globe, Clock, MapPin, DollarSign, Shield, Zap, BookOpen, Star, CheckCircle, ArrowRight, Search, Filter, Code, Palette, Database, Monitor } from 'lucide-react'

const Careers: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedDepartment, setSelectedDepartment] = useState('All')
  const [selectedLocation, setSelectedLocation] = useState('All')
  const [selectedExperience, setSelectedExperience] = useState('All')

  const openPositions = [
    // Tech Positions
    {
      title: 'Senior Frontend Developer',
      department: 'Technology',
      location: 'Remote',
      type: 'Full-time',
      experience: 'Senior Level',
      salary: '$90,000 - $130,000',
      description: 'Build exceptional user experiences for our luxury e-commerce platform and customer-facing applications.',
      requirements: [
        '5+ years React/TypeScript experience',
        'Expert knowledge of modern CSS frameworks',
        'Experience with e-commerce platforms',
        'Understanding of luxury brand aesthetics',
        'Portfolio of high-quality web applications'
      ],
      responsibilities: [
        'Develop responsive web applications',
        'Implement pixel-perfect designs',
        'Optimize for performance and accessibility',
        'Collaborate with design and backend teams',
        'Maintain and improve existing codebase'
      ],
      icon: Code
    },
    {
      title: 'Backend Developer',
      department: 'Technology',
      location: 'Remote',
      type: 'Full-time',
      experience: 'Mid-Senior Level',
      salary: '$80,000 - $120,000',
      description: 'Build robust backend systems and APIs to support our luxury e-commerce platform and internal tools.',
      requirements: [
        '4+ years backend development experience',
        'Expertise in Python/Node.js',
        'Database design and optimization',
        'API development and integration',
        'Experience with cloud platforms (AWS/Azure)'
      ],
      responsibilities: [
        'Design and implement RESTful APIs',
        'Optimize database performance',
        'Integrate with third-party services',
        'Implement security best practices',
        'Collaborate with frontend and DevOps teams'
      ],
      icon: Database
    },
    {
      title: 'UI/UX Designer',
      department: 'Design',
      location: 'Remote/Hybrid',
      type: 'Full-time',
      experience: 'Mid-Senior Level',
      salary: '$70,000 - $100,000',
      description: 'Create stunning user interfaces and experiences that reflect our luxury brand values and heritage.',
      requirements: [
        '4+ years UI/UX design experience',
        'Proficiency in Figma, Sketch, Adobe Creative Suite',
        'Understanding of luxury brand aesthetics',
        'Experience with e-commerce design',
        'Strong portfolio of digital products'
      ],
      responsibilities: [
        'Design user interfaces and experiences',
        'Create wireframes and prototypes',
        'Conduct user research and testing',
        'Collaborate with development teams',
        'Maintain design system and guidelines'
      ],
      icon: Palette
    },
    {
      title: 'Full Stack Developer',
      department: 'Technology',
      location: 'Remote',
      type: 'Full-time',
      experience: 'Mid-Senior Level',
      salary: '$85,000 - $125,000',
      description: 'Work across the entire technology stack to build and maintain our luxury e-commerce platform.',
      requirements: [
        '4+ years full-stack development experience',
        'Frontend: React, TypeScript, CSS',
        'Backend: Python/Node.js, databases',
        'Experience with e-commerce platforms',
        'Understanding of luxury market needs'
      ],
      responsibilities: [
        'Develop full-stack applications',
        'Implement responsive designs',
        'Build and maintain APIs',
        'Optimize application performance',
        'Collaborate with cross-functional teams'
      ],
      icon: Monitor
    },
    {
      title: 'DevOps Engineer',
      department: 'Technology',
      location: 'Remote',
      type: 'Full-time',
      experience: 'Mid-Senior Level',
      salary: '$90,000 - $130,000',
      description: 'Manage and optimize our cloud infrastructure to ensure reliable, scalable systems for our luxury platform.',
      requirements: [
        '4+ years DevOps experience',
        'Cloud platforms (AWS/Azure/GCP)',
        'Containerization (Docker, Kubernetes)',
        'CI/CD pipeline development',
        'Infrastructure as Code (Terraform)'
      ],
      responsibilities: [
        'Manage cloud infrastructure',
        'Implement CI/CD pipelines',
        'Monitor system performance',
        'Ensure security and compliance',
        'Automate deployment processes'
      ],
      icon: Shield
    },
    // Traditional Craftsmanship Positions
    {
      title: 'Master Watchmaker',
      department: 'Craftsmanship',
      location: 'Wyoming, USA',
      type: 'Full-time',
      experience: 'Senior Level',
      salary: '$85,000 - $120,000',
      description: 'Lead traditional watchmaking techniques and mentor junior craftsmen in the art of luxury timepiece creation.',
      requirements: [
        '8+ years luxury watchmaking experience',
        'Expertise in traditional Swiss techniques',
        'Proven leadership and mentoring skills',
        'Portfolio of high-end timepieces',
        'Certification from recognized horology institute'
      ],
      responsibilities: [
        'Create and assemble luxury timepieces',
        'Mentor junior watchmakers',
        'Quality control and final inspection',
        'Research and develop new techniques',
        'Maintain workshop equipment and tools'
      ],
      icon: Award
    },
    {
      title: 'Senior Leather Artisan',
      department: 'Craftsmanship',
      location: 'Wyoming, USA',
      type: 'Full-time',
      experience: 'Senior Level',
      salary: '$65,000 - $90,000',
      description: 'Create premium leather goods using traditional methods while maintaining the highest standards of luxury craftsmanship.',
      requirements: [
        '5+ years luxury leatherworking experience',
        'Expert knowledge of premium leathers',
        'Traditional hand-stitching techniques',
        'Attention to detail and precision',
        'Artistic vision and creativity'
      ],
      responsibilities: [
        'Design and create luxury leather goods',
        'Select and prepare premium materials',
        'Hand-stitch and finish products',
        'Quality assurance and inspection',
        'Collaborate with design team'
      ],
      icon: Heart
    },
    {
      title: 'Design Director',
      department: 'Design',
      location: 'Remote/Hybrid',
      type: 'Full-time',
      experience: 'Executive Level',
      salary: '$120,000 - $160,000',
      description: 'Lead design vision for luxury timepieces and leather goods, driving innovation while respecting traditional heritage.',
      requirements: [
        '10+ years luxury design experience',
        'Portfolio of award-winning luxury products',
        'Creative leadership and vision',
        'Understanding of traditional craftsmanship',
        'Experience with luxury brands'
      ],
      responsibilities: [
        'Develop design strategy and vision',
        'Lead creative team and projects',
        'Collaborate with craftsmen and engineers',
        'Present concepts to executive team',
        'Stay current with luxury market trends'
      ],
      icon: Target
    },
    {
      title: 'Quality Assurance Manager',
      department: 'Operations',
      location: 'Wyoming, USA',
      type: 'Full-time',
      experience: 'Senior Level',
      salary: '$75,000 - $100,000',
      description: 'Ensure exceptional quality standards across all products through systematic inspection and process improvement.',
      requirements: [
        '7+ years QA experience in luxury goods',
        'Knowledge of luxury quality standards',
        'Process improvement expertise',
        'Leadership and team management',
        'Certification in quality management'
      ],
      responsibilities: [
        'Develop and implement QA processes',
        'Train team on quality standards',
        'Conduct product inspections',
        'Analyze quality metrics and trends',
        'Collaborate with production teams'
      ],
      icon: Shield
    },
    {
      title: 'Marketing Manager',
      department: 'Marketing',
      location: 'Remote/Hybrid',
      type: 'Full-time',
      experience: 'Mid-Senior Level',
      salary: '$70,000 - $95,000',
      description: 'Develop and execute marketing strategies for luxury timepieces and leather goods in the high-end market.',
      requirements: [
        '5+ years luxury marketing experience',
        'Digital marketing expertise',
        'Luxury brand experience',
        'Analytical and creative skills',
        'Bachelor\'s degree in Marketing or related field'
      ],
      responsibilities: [
        'Develop marketing campaigns',
        'Manage digital marketing channels',
        'Collaborate with creative teams',
        'Analyze market trends and competition',
        'Build brand awareness and recognition'
      ],
      icon: Globe
    },
    {
      title: 'Production Coordinator',
      department: 'Operations',
      location: 'Wyoming, USA',
      type: 'Full-time',
      experience: 'Mid Level',
      salary: '$50,000 - $70,000',
      description: 'Coordinate production schedules and ensure smooth workflow between different craft departments.',
      requirements: [
        '3+ years production coordination experience',
        'Project management skills',
        'Understanding of manufacturing processes',
        'Strong organizational abilities',
        'Experience with luxury goods production'
      ],
      responsibilities: [
        'Schedule and coordinate production',
        'Monitor workflow and deadlines',
        'Communicate between departments',
        'Track production metrics',
        'Ensure quality standards are met'
      ],
      icon: Clock
    }
  ]

  // Filter and search logic
  const filteredPositions = useMemo(() => {
    return openPositions.filter(position => {
      const matchesSearch = position.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           position.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           position.department.toLowerCase().includes(searchTerm.toLowerCase())
      const matchesDepartment = selectedDepartment === 'All' || position.department === selectedDepartment
      const matchesLocation = selectedLocation === 'All' || position.location === selectedLocation
      const matchesExperience = selectedExperience === 'All' || position.experience === selectedExperience

      return matchesSearch && matchesDepartment && matchesLocation && matchesExperience
    })
  }, [searchTerm, selectedDepartment, selectedLocation, selectedExperience])

  const departments = ['All', ...Array.from(new Set(openPositions.map(pos => pos.department)))]
  const locations = ['All', ...Array.from(new Set(openPositions.map(pos => pos.location)))]
  const experiences = ['All', ...Array.from(new Set(openPositions.map(pos => pos.experience)))]

  const benefits = [
    {
      title: 'Competitive Compensation',
      description: 'Industry-leading salary packages with performance bonuses and profit sharing',
      icon: DollarSign,
      details: ['Competitive base salary', 'Performance bonuses', 'Profit sharing', 'Annual reviews']
    },
    {
      title: 'Health & Wellness',
      description: 'Comprehensive health coverage and wellness programs for you and your family',
      icon: Heart,
      details: ['Medical, dental, vision insurance', 'Mental health support', 'Wellness programs', 'Gym membership']
    },
    {
      title: 'Professional Development',
      description: 'Continuous learning opportunities and skill advancement programs',
      icon: BookOpen,
      details: ['Training budgets', 'Conference attendance', 'Skill development courses', 'Mentorship programs']
    },
    {
      title: 'Work-Life Balance',
      description: 'Flexible schedules and generous time off to maintain work-life harmony',
      icon: Clock,
      details: ['Flexible hours', 'Remote work options', 'Generous PTO', 'Sabbatical opportunities']
    },
    {
      title: 'Career Growth',
      description: 'Clear advancement paths and opportunities for professional growth',
      icon: Target,
      details: ['Promotion opportunities', 'Cross-department experience', 'Leadership development', 'Career planning']
    },
    {
      title: 'Company Culture',
      description: 'Collaborative environment with passionate craftsmen and creative professionals',
      icon: Users,
      details: ['Team building events', 'Company retreats', 'Creative workshops', 'Community involvement']
    }
  ]

  const values = [
    {
      title: 'Excellence',
      description: 'We strive for perfection in every detail of our craft, never compromising on quality',
      icon: Star,
      examples: ['Attention to detail', 'Quality standards', 'Continuous improvement', 'Pride in work']
    },
    {
      title: 'Heritage',
      description: 'Preserving traditional techniques while embracing innovation and modern design',
      icon: Award,
      examples: ['Traditional methods', 'Cultural preservation', 'Innovation balance', 'Historical respect']
    },
    {
      title: 'Collaboration',
      description: 'Working together as a team to achieve extraordinary results and shared success',
      icon: Users,
      examples: ['Teamwork', 'Open communication', 'Shared goals', 'Mutual support']
    },
    {
      title: 'Growth',
      description: 'Continuous learning, personal development, and pushing boundaries of what\'s possible',
      icon: Zap,
      examples: ['Learning mindset', 'Skill development', 'Innovation', 'Personal growth']
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
              Careers at HBM
            </h1>
            <div className="w-16 h-px bg-white mx-auto mb-8"></div>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Join our team of master craftsmen and creative visionaries in creating 
              the world's most exceptional luxury timepieces and leather goods.
            </p>
          </motion.div>


          {/* Search and Filter Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-3xl font-luxury font-light text-white text-center mb-8">
              Open Positions
            </h2>
            
            {/* Search and Filter Controls */}
            <div className="bg-gray-900 p-6 rounded-lg mb-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {/* Search Bar */}
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search positions..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-white/50"
                  />
                </div>

                {/* Department Filter */}
                <div className="relative">
                  <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                  <select
                    value={selectedDepartment}
                    onChange={(e) => setSelectedDepartment(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-white/50 appearance-none"
                  >
                    {departments.map(dept => (
                      <option key={dept} value={dept}>{dept}</option>
                    ))}
                  </select>
                </div>

                {/* Location Filter */}
                <div className="relative">
                  <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                  <select
                    value={selectedLocation}
                    onChange={(e) => setSelectedLocation(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-white/50 appearance-none"
                  >
                    {locations.map(loc => (
                      <option key={loc} value={loc}>{loc}</option>
                    ))}
                  </select>
                </div>

                {/* Experience Filter */}
                <div className="relative">
                  <Award className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                  <select
                    value={selectedExperience}
                    onChange={(e) => setSelectedExperience(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-white/50 appearance-none"
                  >
                    {experiences.map(exp => (
                      <option key={exp} value={exp}>{exp}</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Results Count */}
              <div className="mt-4 text-sm text-gray-400">
                Showing {filteredPositions.length} of {openPositions.length} positions
              </div>
            </div>

            {/* Job Listings Table */}
            <div className="space-y-4">
              {filteredPositions.map((position, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gray-900 p-6 rounded-lg border border-gray-800 hover:border-white/30 transition-all duration-300"
                >
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 border border-white/30 flex items-center justify-center flex-shrink-0">
                        <position.icon className="h-6 w-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-luxury font-light text-white mb-2">
                          {position.title}
                        </h3>
                        <div className="flex flex-wrap gap-2 mb-3">
                          <span className="px-3 py-1 bg-gray-800 text-gray-300 text-sm rounded">
                            {position.department}
                          </span>
                          <span className="px-3 py-1 bg-gray-800 text-gray-300 text-sm rounded">
                            {position.location}
                          </span>
                          <span className="px-3 py-1 bg-gray-800 text-gray-300 text-sm rounded">
                            {position.type}
                          </span>
                          <span className="px-3 py-1 bg-gray-800 text-gray-300 text-sm rounded">
                            {position.experience}
                          </span>
                        </div>
                        <p className="text-gray-400 text-sm mb-3 line-clamp-2">
                          {position.description}
                        </p>
                        <div className="text-luxury-gold font-medium text-sm">
                          {position.salary}
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-2">
                      <button className="px-4 py-2 border border-white text-white hover:bg-white hover:text-black transition-all duration-300 font-medium text-sm">
                        View Details
                      </button>
                      <button className="px-4 py-2 bg-white text-black hover:bg-gray-100 transition-all duration-300 font-medium text-sm">
                        Apply Now
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* No Results Message */}
            {filteredPositions.length === 0 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-12"
              >
                <div className="text-gray-400 text-lg mb-4">No positions found matching your criteria</div>
                <button
                  onClick={() => {
                    setSearchTerm('')
                    setSelectedDepartment('All')
                    setSelectedLocation('All')
                    setSelectedExperience('All')
                  }}
                  className="px-6 py-2 border border-white text-white hover:bg-white hover:text-black transition-all duration-300 font-medium"
                >
                  Clear Filters
                </button>
              </motion.div>
            )}
          </motion.div>

          {/* Benefits Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <h2 className="text-3xl font-luxury font-light text-white text-center mb-12">
              Benefits & Perks
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="p-6 border border-gray-800 hover:border-white/30 transition-all duration-300"
                >
                  <div className="w-12 h-12 border border-white/30 flex items-center justify-center mb-4">
                    <benefit.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-lg font-luxury font-light text-white mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed mb-4">
                    {benefit.description}
                  </p>
                  <ul className="space-y-1">
                    {benefit.details.map((detail, detailIndex) => (
                      <li key={detailIndex} className="text-gray-400 text-xs flex items-center">
                        <CheckCircle className="h-3 w-3 mr-2 text-luxury-gold" />
                        {detail}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Company Values */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <h2 className="text-3xl font-luxury font-light text-white text-center mb-12">
              Our Values
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
                  <p className="text-gray-400 leading-relaxed mb-4">
                    {value.description}
                  </p>
                  <ul className="space-y-1">
                    {value.examples.map((example, exampleIndex) => (
                      <li key={exampleIndex} className="text-gray-400 text-sm">
                        • {example}
                      </li>
                    ))}
                  </ul>
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
              Ready to Join Our Team?
            </h2>
            <div className="max-w-4xl mx-auto">
              <p className="text-lg text-gray-400 leading-relaxed">
                We're always looking for passionate individuals who share our commitment 
                to excellence and craftsmanship. If you don't see a position that matches 
                your skills, we'd love to hear from you.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Careers