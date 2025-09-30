import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter, Instagram, Calendar, MessageCircle } from 'lucide-react'
import { Button } from '@/components/ui/button.jsx'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    subject: '',
    message: '',
    projectType: ''
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setSubmitStatus('success')
      setFormData({
        name: '',
        email: '',
        company: '',
        subject: '',
        message: '',
        projectType: ''
      })
      
      // Reset status after 3 seconds
      setTimeout(() => setSubmitStatus(null), 3000)
    }, 2000)
  }

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'bohreshreyashi03@gmail.com',
      href: 'mailto:bohreshreyashi03@gmail.com'
    },
    {
      icon: Phone,
      label: 'Phone',      value: '+44 7554 739837',
      href: 'tel:+447554739837'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Birmingham, United Kingdom',
      href: 'https://maps.google.com/?q=Birmingham,UnitedKingdom'
    }
  ]

  const socialLinks = [
    {
      icon: Linkedin,
      name: 'LinkedIn',
      href: 'https://linkedin.com/in/shreyashibohre',
      color: 'hover:text-blue-600',
      description: 'Connect professionally'
    },

    {
      icon: Instagram,
      name: 'Instagram',
      href: 'https://instagram.com/shreyashibohre',
      color: 'hover:text-pink-600',
      description: 'Behind the scenes'
    }
  ]

  const projectTypes = [
    'Digital Marketing Campaign',
    'Data Analysis & Insights',
    'Social Media Strategy',
    'Performance Marketing',
    'Brand Strategy',
    'Market Research',
    'Other'
  ]

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
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Let's Connect</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to create something amazing together? I'd love to hear about your project 
            and discuss how we can achieve your marketing goals.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">


          {/* Contact Information */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {/* Contact Details */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Get in touch</h3>
              
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <motion.a
                    key={info.label}
                    href={info.href}
                    className="flex items-center p-4 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors group"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.1 * index }}
                  >
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4 group-hover:bg-blue-200 transition-colors">
                      <info.icon className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <div className="font-medium text-gray-900">{info.label}</div>
                      <div className="text-gray-600">{info.value}</div>
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Follow me</h3>
              
              <div className="grid grid-cols-2 gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors group ${social.color}`}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: 0.1 * index }}
                  >
                    <social.icon className="h-6 w-6 mr-3 text-gray-600 group-hover:scale-110 transition-transform" />
                    <div>
                      <div className="font-medium text-gray-900">{social.name}</div>
                      <div className="text-sm text-gray-600">{social.description}</div>
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>


          </motion.div>
        </div>

        {/* FAQ Section */}
        <motion.div
          className="mt-16 bg-white rounded-2xl shadow-lg p-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">Frequently Asked Questions</h3>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">What's your typical project timeline?</h4>
              <p className="text-gray-600 mb-4">
                Project timelines vary based on scope, but most campaigns take 2-6 weeks from strategy to execution. 
                I'll provide a detailed timeline during our initial consultation.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">Do you work with international clients?</h4>
              <p className="text-gray-600 mb-4">
                Absolutely! I work with clients globally and am comfortable with different time zones. 
                Most of my communication happens via email and video calls.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">What's included in your marketing services?</h4>
              <p className="text-gray-600 mb-4">
                I offer end-to-end marketing solutions including strategy development, campaign execution, 
                analytics setup, performance monitoring, and detailed reporting.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">How do you measure campaign success?</h4>
              <p className="text-gray-600 mb-4">
                Success metrics are defined upfront based on your goals. I track KPIs like engagement rates, 
                conversion rates, ROI, and provide regular performance reports with actionable insights.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact
