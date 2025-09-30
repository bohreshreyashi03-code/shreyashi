import { motion } from 'framer-motion'
import { Instagram, Youtube, ExternalLink } from 'lucide-react'
import { Button } from '@/components/ui/button.jsx'

const Socials = () => {
  const socialPosts = [
    {
      id: 1,
      type: 'instagram',
      imageUrl: '/social_images/wsZgleYcDDnY.webp',
      altText: 'Instagram Reel 1',
      postLink: 'https://www.instagram.com/reel/DOdJkgfiIQP/?igsh=Yzd2cmY4cnh4cXlh',
      description: 'A captivating reel showcasing creative content.'
    },
    {
      id: 2,
      type: 'instagram',
      imageUrl: '/social_images/F1ybpsM2rxqa.png',
      altText: 'Instagram Reel 2',
      postLink: 'https://www.instagram.com/reel/DMPvP28IGZW/?igsh=NzIzdmNuYnVsazYx',
      description: 'Another engaging reel with insights and tips.'
    },
    {
      id: 3,
      type: 'instagram',
      imageUrl: '/social_images/P09Q9zEXeS5g.jpg',
      altText: 'Instagram Post 3',
      postLink: 'https://www.instagram.com/p/DLSFZWbNBIC/?img_index=5&igsh=ZmthNnFvdWdiMmxw',
      description: 'A carousel post with visual storytelling.'
    },
    {
      id: 4,
      type: 'instagram',
      imageUrl: '/social_images/mnzJ0LUQ6Ln3.png',
      altText: 'Instagram Reel 4',
      postLink: 'https://www.instagram.com/reel/DKwRiolIyHL/?igsh=YXI3bHNpeHZyc2Zz',
      description: 'A short video reel on a trending topic.'
    },
    {
      id: 5,
      type: 'youtube',
      imageUrl: '/social_images/JxAF4twnj0kA.jpeg',
      altText: 'YouTube Short',
      postLink: 'https://www.youtube.com/shorts/KHA64VzMnso',
      description: 'YouTube Short: Quick insights and tips.'
    }
  ]

  return (
    <section className="min-h-screen py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Check out my Socials</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore my latest content, creative projects, and insights across various social media platforms.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {socialPosts.map((post) => (
            <motion.div
              key={post.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden group"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: post.id * 0.1 }}
              whileHover={{ scale: 1.03, boxShadow: '0 10px 20px rgba(0,0,0,0.1)' }}
            >
              <a href={post.postLink} target="_blank" rel="noopener noreferrer" className="block relative">
                <img
                  src={post.imageUrl}
                  alt={post.altText}
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black bg-opacity-25 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {post.type === 'instagram' ? (
                    <Instagram className="h-12 w-12 text-white" />
                  ) : (
                    <Youtube className="h-12 w-12 text-white" />
                  )}
                </div>
              </a>
              <div className="p-4">
                <p className="text-gray-700 mb-3">{post.description}</p>
                <a
                  id={post.id === 1 ? 'first-social-post' : undefined}
                  href={post.postLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium transition-colors"
                >
                  View Post
                  <ExternalLink className="ml-1 h-4 w-4" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <h3 className="text-3xl font-bold text-gray-900 mb-4">
            Connect with me on Socials!
          </h3>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Follow my journey, get updates, and engage with my latest content.
          </p>
          <Button 
            size="lg"
            className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-8 py-3 rounded-full shadow-lg"
              onClick={() => window.open("https://www.instagram.com/lethal.romanticism/", "_blank")}
          >
            <Instagram className="mr-2 h-5 w-5" />
            Follow on Instagram
          </Button>
        </motion.div>
      </div>
    </section>
  )
}

export default Socials

