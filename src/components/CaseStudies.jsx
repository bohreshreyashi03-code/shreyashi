import { motion } from 'framer-motion'
import { Download, ExternalLink, BarChart3, Users, TrendingUp, Target, Eye, Calendar } from 'lucide-react'
import { Button } from '@/components/ui/button.jsx'

// Import PDF files
import RealmeCaseStudy from '../assets/case-studies/SC[CaseStudy]Realme(2)(1).pdf'
import FestiveSurvey from '../assets/case-studies/SC[FestiveSurvey]Questions(2)(1).pdf'
import FestiveInfographic from '../assets/case-studies/SC[Infographic]FestiveSeason(2)(1).pdf'

const CaseStudies = () => {
  const caseStudies = [
    {
      id: 1,
      title: 'Realme Festive Campaign Success',
      subtitle: '#realmeFestiveDays Campaign Analysis',
      category: 'Digital Marketing Campaign',
      date: 'July 2022',
      duration: '30 Days',
      client: 'Realme India',
      overview: 'A comprehensive festive marketing campaign that leveraged Moj\'s robust creator network to achieve unprecedented visibility and engagement for Realme\'s festive offers.',
      challenge: 'Realme needed to create widespread awareness about their extensive festive offers worth ₹700 crores and drive top-of-mind recall among young consumers during the competitive festive season.',
      solution: 'Developed an exclusive Branded Hashtag Challenge #realmeFestiveDays with custom 2D lens, partnered with 37 popular influencers, and utilized high-impact ad solutions including Header Banner and Explore Ranking.',
      results: [
        { metric: 'Total Views', value: '710M+', icon: Eye },
        { metric: 'Engagement Rate', value: '5.3%', icon: TrendingUp },
        { metric: 'Influencers Activated', value: '37', icon: Users },
        { metric: 'Campaign Duration', value: '30 Days', icon: Calendar }
      ],
      keyInsights: [
        'User-generated content amplified brand message organically',
        'Custom 2D lens created immersive brand experience',
        'Strategic influencer partnerships drove initial momentum',
        'Premium ad placements maximized campaign discoverability'
      ],
      impact: 'The campaign successfully positioned Realme as the go-to brand for festive smartphone purchases, significantly increasing brand awareness and consideration among the target demographic.',
      pdfFile: RealmeCaseStudy,
      color: 'blue',
      icon: TrendingUp
    },
    {
      id: 2,
      title: 'Festive Shopping Behavior Research',
      subtitle: 'Consumer Insights & Market Analysis',
      category: 'Market Research',
      date: 'August-September 2022',
      duration: '60 Days',
      client: 'ShareChat & Moj',
      overview: 'Comprehensive market research study analyzing festive shopping behavior patterns across ShareChat and Moj user base to inform advertiser strategies.',
      challenge: 'Understanding the potential buying behavior of platform users ahead of the festive season to help advertisers optimize their media planning and budget allocation.',
      solution: 'Conducted structured survey across 5000+ users with demographic and geographic segmentation, analyzing 20+ key parameters including spending patterns, product preferences, and purchase drivers.',
      results: [
        { metric: 'Survey Respondents', value: '5000+', icon: Users },
        { metric: 'Key Insights Generated', value: '20+', icon: Target },
        { metric: 'Data Accuracy', value: '95%', icon: BarChart3 },
        { metric: 'Advertiser Impact', value: '25% Increase', icon: TrendingUp }
      ],
      keyInsights: [
        'Mobile phones emerged as top festive purchase category',
        '70% users prefer e-commerce for festive shopping',
        'Influencer recommendations significantly impact purchase decisions',
        'Average festive spending ranges between ₹20,000-₹40,000'
      ],
      impact: 'Research findings enabled advertisers to optimize their festive campaigns, resulting in a 25% increase in ad spends and improved campaign performance across the platform.',
      pdfFile: FestiveSurvey,
      color: 'green',
      icon: BarChart3
    },
    {
      id: 3,
      title: 'Festive Season Platform Performance',
      subtitle: 'ShareChat & Moj Analytics Dashboard',
      category: 'Data Visualization',
      date: 'July 2023',
      duration: 'Ongoing',
      client: 'ShareChat & Moj',
      overview: 'Interactive infographic showcasing platform performance during festive seasons, highlighting growth metrics and advertiser success stories.',
      challenge: 'Presenting complex platform performance data in an accessible, visually appealing format for stakeholders and potential advertisers.',
      solution: 'Created comprehensive infographic featuring key performance metrics, popular ad formats, engagement rates, and growth statistics with clear visual hierarchy and data storytelling.',
      results: [
        { metric: 'Brand Growth', value: '29%', icon: TrendingUp },
        { metric: 'Ad Spend Increase', value: '25%', icon: Target },
        { metric: 'SMB Growth', value: '4.5X', icon: Users },
        { metric: 'Engagement Rate', value: '4-6%', icon: Eye }
      ],
      keyInsights: [
        'Branded Hashtag Challenges show highest engagement (4-6%)',
        'SMB brands experienced 4.5X growth in festive ad spends',
        'Studio Ads deliver 2-3% average engagement',
        'Top View ads achieve 0.7% click-through rate'
      ],
      impact: 'The infographic became a key sales tool, helping the business development team communicate platform value proposition effectively to potential advertisers.',
      pdfFile: FestiveInfographic,
      color: 'purple',
      icon: BarChart3
    }
  ]

  const downloadPDF = (pdfFile, fileName) => {
    const link = document.createElement('a')
    link.href = pdfFile
    link.download = fileName
    link.click()
  }

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
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Case Studies</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Deep dives into successful campaigns and research projects, showcasing strategic thinking, 
            execution excellence, and measurable business impact.
          </p>
        </motion.div>

        {/* Case Studies Grid */}
        <div className="space-y-16">
          {caseStudies.map((study, index) => (
            <motion.div
              key={study.id}
              className="bg-white rounded-2xl shadow-xl overflow-hidden"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 * index }}
            >
              {/* Header */}
              <div className={`bg-gradient-to-r ${
                study.color === 'blue' ? 'from-blue-500 to-blue-600' :
                study.color === 'green' ? 'from-green-500 to-green-600' :
                'from-purple-500 to-purple-600'
              } text-white p-8`}>
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center mb-4">
                      <study.icon className="h-8 w-8 mr-3" />
                      <span className="text-sm font-medium bg-white/20 px-3 py-1 rounded-full">
                        {study.category}
                      </span>
                    </div>
                    <h3 className="text-3xl font-bold mb-2">{study.title}</h3>
                    <p className="text-xl opacity-90 mb-4">{study.subtitle}</p>
                    <div className="flex flex-wrap gap-4 text-sm">
                      <span>📅 {study.date}</span>
                      <span>⏱️ {study.duration}</span>
                      <span>🏢 {study.client}</span>
                    </div>
                  </div>
                  <Button
                    variant="secondary"
                    size="lg"
                    className="bg-white text-gray-900 hover:bg-gray-100"
                    onClick={() => downloadPDF(study.pdfFile, `${study.title.replace(/\s+/g, '_')}_Case_Study.pdf`)}
                  >
                    <Download className="mr-2 h-5 w-5" />
                    Download PDF
                  </Button>
                </div>
              </div>

              <div className="p-8">
                <div className="grid lg:grid-cols-3 gap-8">
                  {/* Main Content */}
                  <div className="lg:col-span-2 space-y-8">
                    {/* Overview */}
                    <div>
                      <h4 className="text-xl font-bold text-gray-900 mb-3">Project Overview</h4>
                      <p className="text-gray-700 leading-relaxed">{study.overview}</p>
                    </div>

                    {/* Challenge & Solution */}
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="text-lg font-bold text-gray-900 mb-3">Challenge</h4>
                        <p className="text-gray-700 leading-relaxed">{study.challenge}</p>
                      </div>
                      <div>
                        <h4 className="text-lg font-bold text-gray-900 mb-3">Solution</h4>
                        <p className="text-gray-700 leading-relaxed">{study.solution}</p>
                      </div>
                    </div>

                    {/* Key Insights */}
                    <div>
                      <h4 className="text-lg font-bold text-gray-900 mb-4">Key Insights</h4>
                      <div className="grid md:grid-cols-2 gap-3">
                        {study.keyInsights.map((insight, i) => (
                          <div key={i} className="flex items-start">
                            <span className="text-blue-600 mr-2 mt-1">💡</span>
                            <span className="text-gray-700">{insight}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Impact */}
                    <div>
                      <h4 className="text-lg font-bold text-gray-900 mb-3">Business Impact</h4>
                      <p className="text-gray-700 leading-relaxed">{study.impact}</p>
                    </div>
                  </div>

                  {/* Results Sidebar */}
                  <div className="space-y-6">
                    <div>
                      <h4 className="text-lg font-bold text-gray-900 mb-4">Key Results</h4>
                      <div className="space-y-4">
                        {study.results.map((result, i) => (
                          <motion.div
                            key={i}
                            className="bg-gray-50 rounded-lg p-4 text-center"
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: 0.1 * i }}
                          >
                            <result.icon className={`h-8 w-8 mx-auto mb-2 ${
                              study.color === 'blue' ? 'text-blue-600' :
                              study.color === 'green' ? 'text-green-600' :
                              'text-purple-600'
                            }`} />
                            <div className={`text-2xl font-bold mb-1 ${
                              study.color === 'blue' ? 'text-blue-600' :
                              study.color === 'green' ? 'text-green-600' :
                              'text-purple-600'
                            }`}>
                              {result.value}
                            </div>
                            <div className="text-sm text-gray-600">{result.metric}</div>
                          </motion.div>
                        ))}
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="space-y-3">
                      <Button
                        className={`w-full ${
                          study.color === 'blue' ? 'bg-blue-600 hover:bg-blue-700' :
                          study.color === 'green' ? 'bg-green-600 hover:bg-green-700' :
                          'bg-purple-600 hover:bg-purple-700'
                        } text-white`}
                        onClick={() => downloadPDF(study.pdfFile, `${study.title.replace(/\s+/g, '_')}_Case_Study.pdf`)}
                      >
                        <Download className="mr-2 h-4 w-4" />
                        Download Full Case Study
                      </Button>
                      <Button variant="outline" className="w-full">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        View Live Results
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>


      </div>
    </section>
  )
}

export default CaseStudies
