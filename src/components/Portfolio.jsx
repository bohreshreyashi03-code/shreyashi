import { useState } from 'react'
import { motion } from 'framer-motion'
import { ExternalLink, Github, Eye, BarChart3, Users, TrendingUp } from 'lucide-react'
import { Button } from '@/components/ui/button.jsx'

const Portfolio = () => {
  const projects = [
    {
      id: 1,
      title: 'Realme Festive Campaign',
      category: 'Digital Marketing',
      description: 'Led a comprehensive festive marketing campaign for Realme that achieved 710M+ views and 5.3% engagement rate through strategic influencer partnerships and branded hashtag challenges.',
      image: '/api/placeholder/600/400',
      tags: ['Campaign Management', 'Influencer Marketing', 'Brand Strategy'],
      metrics: {
        views: '710M+',
        engagement: '5.3%',
        reach: '37 Influencers'
      },
      links: {
        live: '#',
        github: '#',
        case_study: '/case-studies'
      }
    },
    {
      id: 2,
      title: 'Festive Shopping Behavior Analysis',
      category: 'Data Analysis',
      description: 'Conducted comprehensive user research across 5000+ respondents to understand festive shopping patterns, resulting in actionable insights for advertiser strategies.',
      image: '/api/placeholder/600/400',
      tags: ['Market Research', 'Data Analysis', 'Consumer Insights'],
      metrics: {
        respondents: '5000+',
        insights: '20+ Key',
        accuracy: '95%'
      },
      links: {
        live: '#',
        github: '#',
        case_study: '/case-studies'
      }
    },
    {
      id: 3,
      title: 'Interactive Marketing Dashboard',
      category: 'Data Visualization',
      description: 'Designed and developed an interactive dashboard for real-time campaign performance monitoring, featuring custom visualizations and automated reporting.',
      image: '/api/placeholder/600/400',
      tags: ['Dashboard Design', 'Data Visualization', 'Analytics'],
      metrics: {
        metrics: '15+ KPIs',
        automation: '80%',
        efficiency: '+150%'
      },
      links: {
        live: '#',
        github: '#',
        case_study: '#'
      }
    },
    {
      id: 4,
      title: 'Social Media Growth Strategy',
      category: 'Social Media',
      description: 'Developed and executed a multi-platform social media strategy that increased follower growth by 300% and engagement rates by 250% over 6 months.',
      image: '/api/placeholder/600/400',
      tags: ['Social Media', 'Content Strategy', 'Growth Hacking'],
      metrics: {
        growth: '+300%',
        engagement: '+250%',
        platforms: '5'
      },
      links: {
        live: '#',
        github: '#',
        case_study: '#'
      }
    },
    {
      id: 5,
      title: 'E-commerce Conversion Optimization',
      category: 'Performance Marketing',
      description: 'Implemented A/B testing and conversion rate optimization strategies that improved e-commerce conversion rates by 180% and reduced customer acquisition costs.',
      image: '/api/placeholder/600/400',
      tags: ['CRO', 'A/B Testing', 'Performance Marketing'],
      metrics: {
        conversion: '+180%',
        cac_reduction: '-45%',
        tests: '25+'
      },
      links: {
        live: '#',
        github: '#',
        case_study: '#'
      }
    },
    {
      id: 6,
      title: 'Brand Awareness Campaign Analytics',
      category: 'Brand Strategy',
      description: 'Created comprehensive analytics framework for measuring brand awareness campaigns across multiple touchpoints, providing clear ROI attribution.',
      image: '/api/placeholder/600/400',
      tags: ['Brand Analytics', 'Attribution Modeling', 'ROI Analysis'],
      metrics: {
        touchpoints: '12+',
        attribution: '95%',
        roi_clarity: '+200%'
      },
      links: {
        live: '#',
        github: '#',
        case_study: '#'
      }
    }
  ]

  const categories = ['All', 'Digital Marketing', 'Data Analysis', 'Data Visualization', 'Social Media', 'Performance Marketing', 'Brand Strategy']
  const [selectedCategory, setSelectedCategory] = useState('All')

  const filteredProjects = selectedCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory)

  return (
    <section className="min-h-screen py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">My Portfolio</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A showcase of successful campaigns, data-driven insights, and creative solutions 
            that have delivered measurable business impact.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          className="flex flex-wrap justify-center gap-4 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'text-gray-600 hover:text-blue-600 hover:border-blue-600'
              }`}
            >
              {category}
            </Button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          layout
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden card-hover"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              layout
              whileHover={{ y: -8 }}
            >
              {/* Project Image */}
              <div className="relative h-48 bg-gradient-to-br from-blue-100 to-purple-100 overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-blue-200 rounded-full mx-auto mb-2 flex items-center justify-center">
                      {project.category === 'Digital Marketing' && <TrendingUp className="h-8 w-8 text-blue-600" />}
                      {project.category === 'Data Analysis' && <BarChart3 className="h-8 w-8 text-blue-600" />}
                      {project.category === 'Data Visualization' && <Eye className="h-8 w-8 text-blue-600" />}
                      {project.category === 'Social Media' && <Users className="h-8 w-8 text-blue-600" />}
                      {project.category === 'Performance Marketing' && <TrendingUp className="h-8 w-8 text-blue-600" />}
                      {project.category === 'Brand Strategy' && <BarChart3 className="h-8 w-8 text-blue-600" />}
                    </div>
                    <span className="text-sm text-gray-600">{project.category}</span>
                  </div>
                </div>
                
                {/* Overlay on Hover */}
                <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                  <Button size="sm" variant="secondary" className="bg-white text-gray-900">
                    <Eye className="h-4 w-4 mr-2" />
                    View
                  </Button>
                  <Button size="sm" variant="secondary" className="bg-white text-gray-900">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Live
                  </Button>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm font-medium text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
                    {project.category}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-3">{project.title}</h3>
                <p className="text-gray-600 mb-4 line-clamp-3">{project.description}</p>

                {/* Metrics */}
                <div className="grid grid-cols-3 gap-2 mb-4">
                  {Object.entries(project.metrics).map(([key, value]) => (
                    <div key={key} className="text-center">
                      <div className="text-lg font-bold text-blue-600">{value}</div>
                      <div className="text-xs text-gray-500 capitalize">{key.replace('_', ' ')}</div>
                    </div>
                  ))}
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>


              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Interested in working together?
          </h3>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            I'm always excited to take on new challenges and create impactful marketing campaigns. 
            Let's discuss how we can achieve your business goals together.
          </p>

        </motion.div>
      </div>
    </section>
  )
}

export default Portfolio
