import { motion } from 'framer-motion'
import { Star, Quote, Linkedin, Twitter } from 'lucide-react'
import { Button } from '@/components/ui/button.jsx'

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Sonam Malik',
      position: 'Senior Solution Advisor',
      company: 'Deloitte USI',
      image: '/api/placeholder/80/80',
      rating: 5,
      quote: 'The infographics and dashboards Shreyashi created for us were not just visually appealing but also incredibly insightful. Her data visualization skills helped our team make better strategic decisions.',
      project: 'Data Visualization & Insights',
      linkedin: 'https://linkedin.com/in/sonammalik',
      twitter: 'https://twitter.com/sonammalik'
    },
    {
      id: 2,
      name: 'Rebecca Vowels',
      position: 'Student Services',
      company: 'University of Birmingham',
      image: '/api/placeholder/80/80',
      rating: 5,
      quote: 'Shreyashi\'s creative approach to social media marketing increased our engagement by 300%. Her ability to blend creativity with data-driven strategies is remarkable. She\'s a true marketing professional.',
      project: 'Social Media Strategy',
      linkedin: 'https://linkedin.com/in/rebeccavowels',
      twitter: 'https://twitter.com/rebeccavowels'
    },
    {
      id: 3,
      name: 'Honey',
      position: 'Senior Manager',
      company: 'Flix',
      image: '/api/placeholder/80/80',
      rating: 5,
      quote: 'Shreyashi\'s expertise in digital marketing and data analytics is truly exceptional. She has consistently delivered outstanding results that have significantly impacted our business growth. Her strategic thinking and execution excellence make her an invaluable partner.',
      project: 'Digital Marketing & Analytics',
      linkedin: 'https://linkedin.com/in/honey',
      twitter: 'https://twitter.com/honey'
    }
  ]

  const stats = [
    { number: '50+', label: 'Happy Clients' },
    { number: '710M+', label: 'Total Reach' },
    { number: '5.3%', label: 'Avg. Engagement' },
    { number: '150%', label: 'ROI Improvement' }
  ]

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={`h-4 w-4 ${
          index < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
        }`}
      />
    ))
  }

  return (
    <section className="min-h-screen py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Client Testimonials</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don't just take my word for it. Here's what clients and colleagues have to say 
            about working with me and the results we've achieved together.
          </p>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              className="text-center"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
            >
              <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">
                {stat.number}
              </div>
              <div className="text-gray-600 font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              className="bg-gray-50 rounded-2xl p-6 hover:shadow-lg transition-all duration-300 relative"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              whileHover={{ y: -5 }}
            >
              {/* Quote Icon */}
              <div className="absolute top-4 right-4">
                <Quote className="h-6 w-6 text-blue-200" />
              </div>

              {/* Rating */}
              <div className="flex items-center mb-4">
                {renderStars(testimonial.rating)}
              </div>

              {/* Quote */}
              <blockquote className="text-gray-700 mb-6 leading-relaxed">
                "{testimonial.quote}"
              </blockquote>

              {/* Project Tag */}
              <div className="mb-4">
                <span className="text-xs bg-blue-100 text-blue-700 px-3 py-1 rounded-full">
                  {testimonial.project}
                </span>
              </div>

              {/* Author Info */}
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full flex items-center justify-center mr-3">
                    <span className="text-sm font-bold text-blue-600">
                      {testimonial.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.name}</div>
                    <div className="text-sm text-gray-600">{testimonial.position}</div>
                    <div className="text-sm text-blue-600 font-medium">{testimonial.company}</div>
                  </div>
                </div>

                {/* Social Links */}
                <div className="flex space-x-2">
                  <a
                    href={testimonial.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-blue-600 transition-colors"
                  >
                    <Linkedin className="h-4 w-4" />
                  </a>
                  <a
                    href={testimonial.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-blue-600 transition-colors"
                  >
                    <Twitter className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>




      </div>
    </section>
  )
}

export default Testimonials
