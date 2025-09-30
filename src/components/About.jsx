import { motion } from 'framer-motion'
import { Award, Target, Users, TrendingUp, BarChart3, Lightbulb } from 'lucide-react'

const About = () => {
  const skills = [
    { name: 'Digital Marketing Strategy', level: 95, color: 'bg-blue-500' },
    { name: 'Data Analysis & Visualization', level: 90, color: 'bg-green-500' },
    { name: 'Campaign Management', level: 92, color: 'bg-purple-500' },
    { name: 'Social Media Marketing', level: 88, color: 'bg-pink-500' },
    { name: 'Content Strategy', level: 85, color: 'bg-yellow-500' },
    { name: 'Performance Analytics', level: 93, color: 'bg-indigo-500' }
  ]

  const achievements = [
    {
      icon: TrendingUp,
      title: 'Campaign Performance',
      description: 'Achieved 710M+ views and 5.3% engagement rate for major brand campaigns'
    },
    {
      icon: Target,
      title: 'Strategic Planning',
      description: 'Developed data-driven marketing strategies that increased ROI by 150%'
    },
    {
      icon: Users,
      title: 'Audience Insights',
      description: 'Conducted comprehensive user research across 5000+ respondents'
    },
    {
      icon: BarChart3,
      title: 'Analytics Expertise',
      description: 'Created interactive dashboards and infographics for executive reporting'
    }
  ]

  return (
    <section id="about-section" className="min-h-screen py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">About Me</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Passionate digital marketing professional with a keen eye for data-driven insights 
            and creative storytelling.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Profile Image */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative">
              <img 
                src="/professional-photo.jpg" 
                alt="Shreyashi Bohre Professional Photo"
                className="w-full max-w-md mx-auto aspect-square object-cover rounded-2xl shadow-2xl"
              />
              
              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-blue-200 rounded-full opacity-60"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-purple-200 rounded-full opacity-40"></div>
            </div>
          </motion.div>

          {/* About Content */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="text-3xl font-bold text-gray-900 mb-6">My Story</h3>
            
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                I’m a media professional with a background in Media and Communication and an MA in Creative Writing from the University of Birmingham. My work sits at the crossroads of storytelling and strategy, where I combine writing, design, and digital media to create campaigns that connect with audiences on a deeper level.
              </p>
              
              <p>
                I’ve collaborated with brands like Pepsi, Honda, Flipkart, Amazon, and more producing infographics, case studies, and digital-first campaigns that merge data with design. Skilled in visual suites and editing softwares, I craft content that maximizes engagement across platforms like Instagram, TikTok, YouTube, and X, ensuring every piece feels fresh, relevant, and memorable.
              </p>
              
              <p>
                What drives me is the challenge of turning trends into strategies and insights into creative executions that build real communities. Whether it’s developing campaign narratives, designing visual content, or managing brand voices, I bring curiosity, adaptability, and a results-driven mindset to every project.
              </p>
            </div>

            {/* Key Strengths */}
            <div className="grid grid-cols-2 gap-4 mt-8">
              <div className="flex items-center space-x-3">
                <Lightbulb className="h-6 w-6 text-blue-600" />
                <span className="font-medium">Strategic Thinking</span>
              </div>
              <div className="flex items-center space-x-3">
                <BarChart3 className="h-6 w-6 text-green-600" />
                <span className="font-medium">Data Visualization</span>
              </div>
              <div className="flex items-center space-x-3">
                <Target className="h-6 w-6 text-purple-600" />
                <span className="font-medium">Campaign Optimization</span>
              </div>
              <div className="flex items-center space-x-3">
                <Award className="h-6 w-6 text-pink-600" />
                <span className="font-medium">Results-Driven</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Skills Section */}
        <motion.div
          className="mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">Core Skills</h3>
          
          <div className="grid md:grid-cols-2 gap-8">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                className="space-y-2"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
              >
                <div className="flex justify-between items-center">
                  <span className="font-medium text-gray-900">{skill.name}</span>
                  <span className="text-sm text-gray-600">{skill.level}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <motion.div
                    className={`h-3 rounded-full ${skill.color}`}
                    initial={{ width: 0 }}
                    animate={{ width: `${skill.level}%` }}
                    transition={{ duration: 1, delay: 0.2 * index }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Achievements */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">Key Achievements</h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.title}
                className="text-center p-6 bg-gray-50 rounded-xl hover:shadow-lg transition-shadow duration-300"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                whileHover={{ y: -5 }}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
                  <achievement.icon className="h-8 w-8 text-blue-600" />
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">{achievement.title}</h4>
                <p className="text-gray-600 text-sm">{achievement.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About
