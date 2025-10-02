import { motion } from 'framer-motion'
import { ArrowRight, Download } from 'lucide-react'
import { Button } from '@/components/ui/button.jsx'
import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-1/4 left-1/3 w-72 h-72 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Greeting */}
          <motion.p
            className="text-lg text-gray-600 mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Hello, I'm
          </motion.p>

          {/* Main Headline */}
          <motion.h1
            className="text-5xl md:text-7xl font-bold text-gray-900 mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Shreyashi Bohre
          </motion.h1>

          {/* Subtitle with Typing Effect */}
          <motion.div
            className="text-xl md:text-2xl text-gray-700 mb-8 h-16 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            <span className="font-medium">
              Digital Marketing Strategist & Content Manager
            </span>
          </motion.div>

          {/* Bio */}
          <motion.p
            className="text-lg text-gray-600 max-w-3xl mx-auto mb-12 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
          >
            Passionate about creating data-driven marketing campaigns that deliver measurable results. 
            I specialize in transforming complex data into actionable insights and compelling visual stories 
            that drive business growth and user engagement.
          </motion.p>

          {/* Call-to-Action Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.6 }}
          >
            <Link to="/portfolio">
              <Button 
                size="lg" 
                className="group bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg font-medium rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
              >
                View My Work
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Button 
              variant="outline" 
              size="lg"
              className="group border-2 border-gray-300 hover:border-blue-600 text-gray-700 hover:text-blue-600 px-8 py-3 text-lg font-medium rounded-full transition-all duration-300"
              onClick={() => { window.open("/Shreyashi_Bohre_Resume.pdf", "_blank"); }}
            >
              <Download className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
              Download Resume
            </Button>
          </motion.div>

          {/* Stats */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.6 }}
          >
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">50+</div>
              <div className="text-gray-600">Campaigns Delivered</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">710M+</div>
              <div className="text-gray-600">Total Impressions</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">5.3%</div>
              <div className="text-gray-600">Avg. Engagement Rate</div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero