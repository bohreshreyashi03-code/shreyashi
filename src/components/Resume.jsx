import { motion } from 'framer-motion'
import { Calendar, MapPin, Award, GraduationCap, Briefcase, Download, ExternalLink } from 'lucide-react'
import { Button } from '@/components/ui/button.jsx'
// import ShreyashiBohreResume from '../assets/Shreyashi_Bohre_Resume.pdf' // PDF will be served from public folder

const Resume = () => {
  const experience = [
    {
      id: 1,
      title: 'Student Content Shaper',
      company: 'University of Birmingham, UK',
      location: 'Birmingham, UK',
      period: 'June 2025 – September 2025',
      type: 'Freelance',
      description: 'Freelance content creator for student communications, enhancing student experience through blogs, vlogs, and social media.',
      achievements: [
        'Shot, edited, and wrote copy for Unified In Pride vlog in collaboration with Birmingham Pride, promoting inclusivity and student voices.',
        'Developing student-focused blogs for the university website, covering academic life, wellbeing, and campus culture.',
        'Collaborated with the comms team to align content with university branding and diversity goals.',
        'Used tools like Adobe Premiere Pro, Canva, and CMS platforms to produce engaging multimedia content. Researched, conducted interviews and analyzed data for content ideas and briefs'
      ],
      skills: ['Content Creation', 'Video Editing', 'Copywriting', 'Social Media']
    },
    {
      id: 2,
      title: 'Content Intern',
      company: 'ShareChat & Moj, India',
      location: 'Mumbai, India',
      period: 'Aug 2023 – Oct 2023',
      type: 'Internship',
      description: 'Created case studies on brand campaigns for major clients, including Pepsi, Honda, Flipkart, and Amazon in regional languages.',
      achievements: [
        'Wrote marketing copy for infographics, blog posts, and post-event reviews',
        'Collaborated with designers to develop digital mailers and visual',
        'Supported data entry, lead generation, and basic video editing'
      ],
      skills: ['Case Study Writing', 'Marketing Copy', 'Infographics', 'Digital Mailers']
    },
    {
      id: 3,
      title: 'Scriptwriter',
      company: 'High on Tales Media Labs, India',
      location: 'Mumbai, India',
      period: 'Jan 2022 – Jun 2022',
      type: 'Full-time',
      description: 'Spearheaded a team of interns to script four digital ad campaigns for Opul Services.',
      achievements: [
        'Developed innovative interactive ad concepts and pitches for a web series based on cybercrime',
        'Helped contribute to a 30% client growth through impactful storytelling and campaign content',
        'Researched and aligned content with ongoing market and audience trends'
      ],
      skills: ['Scriptwriting', 'Digital Ad Campaigns', 'Content Strategy', 'Market Research']
    }
  ]

  const education = [
    {
      id: 1,
      degree: 'Master of Arts in Creative Writing',
      field: 'Creative Writing',
      institution: 'University of Birmingham, UK',
      location: 'Birmingham, UK',
      period: '2024 – 2025',
      grade: 'N/A',
      description: 'Curated and marketed the DIY Art Fest, focused on showcasing student-created art. Served on the editorial board of the accompanying anthology launched during the event. Working as a part of the student communication team.',
      coursework: ['Creative Writing', 'Digital Media', 'Content Creation', 'Event Coordination']
    },
    {
      id: 2,
      degree: 'Bachelor of Arts in Mass Media',
      field: 'Mass Media',
      institution: 'K.C. College, Mumbai, India',
      location: 'Mumbai, India',
      period: '2020 – 2023',
      grade: 'GPA: 9.22/10.00',
      description: 'Head of Events for Blitzkrieg 2023, the college’s annual intercultural fest. Cultural leader representing the college at citywide festivals. Graduated with Merit GPA of 9.22/10.00.',
      coursework: ['Media Studies', 'Journalism', 'Advertising', 'Public Relations']
    }
  ]

  const certifications = [
    {
      name: 'Meta Social Media Marketing Certification',
      issuer: 'Meta (Facebook) for Career Programs',
      date: 'N/A',
      credentialId: 'N/A',
      link: '#'
    }
  ]

  const skills = {
    'Creative & Content': ['Creative Writing', 'Copywriting', 'Scriptwriting', 'Editorial Production', 'Content Creation', 'Cultural Journalism'],
    'Digital Marketing': ['Digital Marketing', 'Campaign Management', 'Social Media Strategy'],
    'Event Management': ['Public Speaking', 'Hosting', 'Event Planning', 'Team Coordination'],
    'Tools & Software': ['Adobe Creative Suite (beginner)', 'MS Office', 'Canva'],
    'Languages': ['English (fluent)', 'Hindi (fluent)']
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
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Resume</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            A comprehensive overview of my professional journey, education, and achievements 
            in digital marketing and data analytics.
          </p>
          
          <Button 
            size="lg"
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full shadow-lg"
            onClick={() => { window.open("/Shreyashi_Bohre_Resume.pdf", "_blank"); }}
          >
            <Download className="mr-2 h-5 w-5" />
            Download Resume
          </Button>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-16">
            {/* Experience Section */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="flex items-center mb-8">
                <Briefcase className="h-8 w-8 text-blue-600 mr-3" />
                <h3 className="text-3xl font-bold text-gray-900">Professional Experience</h3>
              </div>

              <div className="space-y-8">
                {experience.map((job, index) => (
                  <motion.div
                    key={job.id}
                    className="relative pl-8 pb-8 border-l-2 border-blue-200 last:border-l-0"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 * index }}
                  >
                    {/* Timeline Dot */}
                    <div className="absolute -left-2 top-0 w-4 h-4 bg-blue-600 rounded-full"></div>
                    
                    <div className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow duration-300">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                        <div>
                          <h4 className="text-xl font-bold text-gray-900 mb-1">{job.title}</h4>
                          <div className="flex items-center text-blue-600 font-medium mb-2">
                            <span>{job.company}</span>
                            <span className="mx-2">•</span>
                            <span className="text-gray-600">{job.type}</span>
                          </div>
                        </div>
                        <div className="text-sm text-gray-600">
                          <div className="flex items-center mb-1">
                            <Calendar className="h-4 w-4 mr-1" />
                            {job.period}
                          </div>
                          <div className="flex items-center">
                            <MapPin className="h-4 w-4 mr-1" />
                            {job.location}
                          </div>
                        </div>
                      </div>

                      <p className="text-gray-700 mb-4">{job.description}</p>

                      <div className="mb-4">
                        <h5 className="font-semibold text-gray-900 mb-2">Key Achievements:</h5>
                        <ul className="space-y-1">
                          {job.achievements.map((achievement, i) => (
                            <li key={i} className="text-gray-700 flex items-start">
                              <span className="text-blue-600 mr-2 mt-1">•</span>
                              {achievement}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="flex flex-wrap gap-2">
                        {job.skills.map((skill) => (
                          <span
                            key={skill}
                            className="text-xs bg-blue-100 text-blue-700 px-3 py-1 rounded-full"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Education Section */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="flex items-center mb-8">
                <GraduationCap className="h-8 w-8 text-blue-600 mr-3" />
                <h3 className="text-3xl font-bold text-gray-900">Education</h3>
              </div>

              <div className="space-y-6">
                {education.map((edu, index) => (
                  <motion.div
                    key={edu.id}
                    className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow duration-300"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 * index }}
                  >
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                      <div className="flex-1">
                        <h4 className="text-xl font-bold text-gray-900 mb-1">{edu.degree}</h4>
                        <p className="text-blue-600 font-medium mb-2">{edu.field}</p>
                        <p className="text-gray-700 font-medium">{edu.institution}</p>
                      </div>
                      <div className="text-sm text-gray-600 mt-2 md:mt-0">
                        <div className="flex items-center mb-1">
                          <Calendar className="h-4 w-4 mr-1" />
                          {edu.period}
                        </div>
                        <div className="flex items-center mb-1">
                          <MapPin className="h-4 w-4 mr-1" />
                          {edu.location}
                        </div>
                        <div className="font-medium text-blue-600">{edu.grade}</div>
                      </div>
                    </div>

                    <p className="text-gray-700 mb-4">{edu.description}</p>

                    <div>
                      <h5 className="font-semibold text-gray-900 mb-2">Relevant Coursework:</h5>
                      <div className="flex flex-wrap gap-2">
                        {edu.coursework.map((course) => (
                          <span
                            key={course}
                            className="text-xs bg-green-100 text-green-700 px-3 py-1 rounded-full"
                          >
                            {course}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Certifications */}
            <motion.div
              className="bg-gray-50 rounded-xl p-6"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <div className="flex items-center mb-6">
                <Award className="h-6 w-6 text-blue-600 mr-2" />
                <h3 className="text-xl font-bold text-gray-900">Certifications</h3>
              </div>

              <div className="space-y-4">
                {certifications.map((cert, index) => (
                  <motion.div
                    key={cert.name}
                    className="border-b border-gray-200 pb-4 last:border-b-0"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.1 * index }}
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <h4 className="font-semibold text-gray-900 text-sm mb-1">{cert.name}</h4>
                        <p className="text-blue-600 text-sm font-medium">{cert.issuer}</p>
                        <p className="text-gray-600 text-xs">{cert.date}</p>
                      </div>
                      <Button size="sm" variant="ghost" className="p-1">
                        <ExternalLink className="h-4 w-4" />
                      </Button>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Skills */}
            <motion.div
              className="bg-gray-50 rounded-xl p-6"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <h3 className="text-xl font-bold text-gray-900 mb-6">Skills & Expertise</h3>

              <div className="space-y-6">
                {Object.entries(skills).map(([category, skillList], index) => (
                  <motion.div
                    key={category}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.1 * index }}
                  >
                    <h4 className="font-semibold text-gray-900 mb-3">{category}</h4>
                    <div className="flex flex-wrap gap-2">
                      {skillList.map((skill) => (
                        <span
                          key={skill}
                          className="text-xs bg-white text-gray-700 px-3 py-1 rounded-full border border-gray-200"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Resume
