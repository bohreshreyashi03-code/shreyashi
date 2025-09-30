# Shreyashi Bohre - Portfolio Website

A sleek, modern, and responsive personal portfolio website showcasing digital marketing expertise, data analytics skills, and successful campaign case studies.

## 🌟 Features

### Core Sections
- **Hero Section**: Welcoming headline with professional introduction and call-to-action
- **About Me**: Professional background, skills showcase, and personal story
- **Portfolio**: Grid layout showcasing successful projects and campaigns
- **Resume**: Timeline-based experience and education display
- **Case Studies**: Detailed project breakdowns with downloadable PDFs
- **Testimonials**: Client feedback and success metrics
- **Contact**: Interactive contact form with social media integration

### Technical Features
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Smooth Animations**: Framer Motion powered transitions and micro-interactions
- **Modern UI**: Clean, minimal design with professional color palette
- **SEO Optimized**: Semantic HTML structure and meta tags
- **Accessibility**: WCAG compliant with proper focus states and ARIA labels
- **Performance**: Optimized assets and lazy loading

## 🚀 Technology Stack

- **Frontend Framework**: React 18
- **Styling**: Tailwind CSS + Custom CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **UI Components**: shadcn/ui
- **Routing**: React Router DOM
- **Build Tool**: Vite
- **Package Manager**: pnpm

## 📁 Project Structure

```
shreyashi-portfolio/
├── public/
│   ├── favicon.ico
│   └── index.html
├── src/
│   ├── assets/
│   │   └── case-studies/
│   │       ├── SC[CaseStudy]Realme(2)(1).pdf
│   │       ├── SC[FestiveSurvey]Questions(2)(1).pdf
│   │       └── SC[Infographic]FestiveSeason(2)(1).pdf
│   ├── components/
│   │   ├── ui/
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Portfolio.jsx
│   │   ├── Resume.jsx
│   │   ├── CaseStudies.jsx
│   │   ├── Testimonials.jsx
│   │   └── Contact.jsx
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
├── package.json
├── vite.config.js
└── README.md
```

## 🛠️ Installation & Setup

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd shreyashi-portfolio
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   ```

3. **Start development server**
   ```bash
   pnpm run dev
   ```

4. **Build for production**
   ```bash
   pnpm run build
   ```

5. **Preview production build**
   ```bash
   pnpm run preview
   ```

## 📱 Responsive Breakpoints

- **Mobile**: < 640px
- **Tablet**: 640px - 1024px
- **Desktop**: > 1024px

## 🎨 Design System

### Color Palette
- **Primary**: Blue (#3B82F6)
- **Secondary**: Purple (#8B5CF6)
- **Accent**: Various gradients
- **Neutral**: Gray scale (#F9FAFB to #111827)

### Typography
- **Headings**: Inter (Bold)
- **Body**: Inter (Regular/Medium)
- **Responsive scaling**: Mobile-first approach

### Animations
- **Page transitions**: Fade and slide effects
- **Hover states**: Lift and scale transformations
- **Loading states**: Smooth spinners and progress indicators

## 📊 Case Studies Integration

The portfolio includes three comprehensive case studies:

1. **Realme Festive Campaign**: 710M+ views, 5.3% engagement rate
2. **Festive Shopping Research**: 5000+ respondents, 20+ insights
3. **Platform Performance Analytics**: Data visualization and reporting

Each case study includes:
- Project overview and objectives
- Challenges and solutions
- Key metrics and results
- Downloadable PDF reports
- Visual infographics

## 🔧 Customization

### Adding New Projects
1. Update the `projects` array in `Portfolio.jsx`
2. Add project images to `src/assets/`
3. Include relevant metrics and descriptions

### Modifying Case Studies
1. Replace PDF files in `src/assets/case-studies/`
2. Update case study data in `CaseStudies.jsx`
3. Adjust metrics and descriptions as needed

### Updating Contact Information
1. Modify contact details in `Contact.jsx`
2. Update social media links
3. Customize contact form fields

## 🚀 Deployment

The website is optimized for deployment on various platforms:

- **Vercel**: Zero-config deployment
- **Netlify**: Drag-and-drop or Git integration
- **GitHub Pages**: Static site hosting
- **AWS S3**: Static website hosting

### Build Output
- Optimized bundle size: ~135KB (gzipped)
- Asset optimization: Images, fonts, and PDFs
- SEO-ready: Meta tags and structured data

## 📈 Performance Metrics

- **Lighthouse Score**: 95+ (Performance, Accessibility, Best Practices, SEO)
- **Core Web Vitals**: Optimized for LCP, FID, and CLS
- **Bundle Size**: Minimized with tree-shaking and code splitting

## 🔒 Security & Privacy

- No external tracking scripts
- Secure contact form handling
- Privacy-focused analytics (optional)
- HTTPS-ready configuration

## 📞 Support & Contact

For questions, customizations, or support:

- **Email**: shreyashi.bohre@example.com
- **LinkedIn**: [linkedin.com/in/shreyashibohre](https://linkedin.com/in/shreyashibohre)
- **Portfolio**: [Live Website URL]

## 📄 License

This project is created for Shreyashi Bohre's personal portfolio. All rights reserved.

---

**Built with ❤️ using React, Tailwind CSS, and modern web technologies.**
