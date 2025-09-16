import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card"
import { Badge } from "./ui/badge"
import { Button } from "./ui/button"
import { ImageWithFallback } from "./figma/ImageWithFallback"
import { ThemeToggle } from "./ThemeToggle"
import { 
  MapPin, 
  Mail, 
  Phone, 
  Globe, 
  Linkedin, 
  Github,
  Download,
  ExternalLink,
  Palette,
  Figma,
  Code,
  Users,
  Lightbulb,
  Target,
  Calendar,
  Building,
  GraduationCap,
  Award,
  ArrowUp,
  CheckCircle,
  Star
} from "lucide-react"

export function PortfolioOriginal() {
  const [showScrollTop, setShowScrollTop] = useState(false)

  // Handle scroll to top button visibility
  useEffect(() => {
    const handleScroll = () => {
      const scrolled = document.documentElement.scrollTop
      const maxHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight
      const scrollPercentage = (scrolled / maxHeight) * 100
      
      // Show button when scrolled past 30% of the page
      setShowScrollTop(scrollPercentage > 30)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  const skills = [
    { name: "UI Design", icon: <Palette className="h-4 w-4" />, category: "Design" },
    { name: "UX Research", icon: <Users className="h-4 w-4" />, category: "Research" },
    { name: "Prototyping", icon: <Target className="h-4 w-4" />, category: "Development" },
    { name: "Figma", icon: <Figma className="h-4 w-4" />, category: "Tools" },
    { name: "Adobe Creative Suite", icon: <Palette className="h-4 w-4" />, category: "Design" },
    { name: "HTML/CSS", icon: <Code className="h-4 w-4" />, category: "Development" },
    { name: "User Testing", icon: <CheckCircle className="h-4 w-4" />, category: "Research" },
    { name: "Design Systems", icon: <Building className="h-4 w-4" />, category: "Systems" }
  ]

  const projects = [
    {
      title: "E-commerce Mobile App",
      description: "Complete UX/UI redesign of a fashion e-commerce platform focusing on user journey optimization and conversion rate improvement.",
      image: "https://images.unsplash.com/photo-1678667720699-5c0fc04ac166?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBkZXNpZ24lMjBtb2NrdXB8ZW58MXx8fHwxNzU3NDk1ODA1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      tags: ["Mobile", "E-commerce", "UX Research", "Prototyping"],
      year: "2024",
      behanceUrl: "https://www.behance.net/gallery/ecommerce-mobile-app"
    },
    {
      title: "SaaS Dashboard Design",
      description: "Modern dashboard interface for a project management tool with complex data visualization and real-time collaboration features.",
      image: "https://images.unsplash.com/photo-1583932692875-a42450d50acf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXNpZ24lMjBkYXNoYm9hcmR8ZW58MXx8fHwxNzU3NTQxODU5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      tags: ["Web", "SaaS", "Data Viz", "Design System"],
      year: "2024",
      behanceUrl: "https://www.behance.net/gallery/saas-dashboard-design"
    },
    {
      title: "Brand Identity System",
      description: "Complete brand redesign including logo, visual identity, and brand guidelines for a sustainable technology startup.",
      image: "https://images.unsplash.com/photo-1633533451638-32f1e337d254?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicmFuZGluZyUyMGRlc2lnbiUyMGlkZW50aXR5fGVufDF8fHx8MTc1NzQxODg0N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      tags: ["Branding", "Logo Design", "Visual Identity"],
      year: "2023",
      behanceUrl: "https://www.behance.net/gallery/brand-identity-system"
    }
  ]

  const experience = [
    {
      title: "Senior UI/UX Designer",
      company: "TechCorp Inc.",
      period: "2022 - Present",
      description: "Leading design for multiple product lines, managing design system, and mentoring junior designers.",
      achievements: [
        "Increased user engagement by 45% through UX improvements",
        "Established design system used across 5 product teams",
        "Led user research initiatives with 200+ participants"
      ]
    },
    {
      title: "UI/UX Designer",
      company: "StartupXYZ",
      period: "2020 - 2022",
      description: "Full-stack design responsibilities from user research to final implementation for B2B SaaS platform.",
      achievements: [
        "Designed complete user onboarding flow",
        "Reduced support tickets by 30% through improved UX",
        "Created prototypes that secured $2M Series A funding"
      ]
    },
    {
      title: "Junior Designer",
      company: "Design Agency Pro",
      period: "2019 - 2020",
      description: "Supporting senior designers on client projects ranging from web design to mobile applications.",
      achievements: [
        "Contributed to 15+ successful client projects",
        "Developed expertise in design tools and methodologies",
        "Received 'Rising Star' award for exceptional growth"
      ]
    }
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <h1 className="font-semibold">Alex Rivera</h1>
            <div className="flex items-center space-x-4">
              <a href="#about" className="text-sm hover:text-primary transition-colors">About</a>
              <a href="#experience" className="text-sm hover:text-primary transition-colors">Experience</a>
              <a href="#projects" className="text-sm hover:text-primary transition-colors">Projects</a>
              <a href="#contact" className="text-sm hover:text-primary transition-colors">Contact</a>
              <ThemeToggle />
            </div>
          </div>
        </div>
      </nav>

      <main className="container mx-auto px-4 py-8 space-y-16">
        {/* Hero Section */}
        <section className="relative py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="space-y-4">
                <Badge variant="outline" className="w-fit">
                  Available for new opportunities
                </Badge>
                <h1 className="text-4xl lg:text-5xl font-bold leading-tight">
                  UI/UX Designer
                  <span className="block text-primary">Creating Digital</span>
                  <span className="block">Experiences</span>
                </h1>
                <p className="text-lg text-muted-foreground max-w-lg">
                  I'm passionate about creating intuitive, user-centered designs that solve real problems. 
                  With 5+ years of experience, I specialize in transforming complex ideas into beautiful, 
                  functional digital products.
                </p>
              </div>
              
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="gap-2">
                  <Download className="h-4 w-4" />
                  Download CV
                </Button>
                <Button variant="outline" size="lg" className="gap-2">
                  <Mail className="h-4 w-4" />
                  Get in Touch
                </Button>
              </div>

              <div className="flex items-center space-x-6 pt-4">
                <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                  <MapPin className="h-4 w-4" />
                  <span>San Francisco, CA</span>
                </div>
                <div className="flex items-center space-x-4">
                  <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                    <Linkedin className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                    <Github className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                    <Globe className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-square max-w-md mx-auto relative">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/5 rounded-3xl rotate-6"></div>
                <div className="relative bg-card rounded-3xl overflow-hidden border">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1475118258341-d2a655a5b11a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBkZXNpZ25lciUyMHBvcnRyYWl0fGVufDF8fHx8MTc1NzUyOTkzNHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                    alt="Alex Rivera - UI/UX Designer"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-8">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold">About Me</h2>
                <p className="text-muted-foreground leading-relaxed">
                  I'm a passionate UI/UX designer with over 5 years of experience creating digital products 
                  that users love. My approach combines user research, strategic thinking, and beautiful 
                  design to deliver solutions that not only look great but also drive business results.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  When I'm not designing, you can find me exploring new design trends, contributing to 
                  open-source projects, or sharing knowledge through design communities and workshops.
                </p>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <div className="text-center space-y-2">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto">
                    <Target className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold">50+</p>
                    <p className="text-sm text-muted-foreground">Projects</p>
                  </div>
                </div>
                <div className="text-center space-y-2">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto">
                    <Users className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold">25+</p>
                    <p className="text-sm text-muted-foreground">Clients</p>
                  </div>
                </div>
                <div className="text-center space-y-2">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto">
                    <Award className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold">8</p>
                    <p className="text-sm text-muted-foreground">Awards</p>
                  </div>
                </div>
                <div className="text-center space-y-2">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto">
                    <Calendar className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold">5+</p>
                    <p className="text-sm text-muted-foreground">Years</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Lightbulb className="h-5 w-5" />
                    Skills & Expertise
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {/* Skill Categories */}
                  <div className="grid grid-cols-2 gap-4">
                    {["Design", "Research", "Development", "Tools", "Systems"].map((category) => (
                      <div key={category} className="space-y-3">
                        <h4 className="text-sm font-medium text-muted-foreground uppercase tracking-wide">
                          {category}
                        </h4>
                        <div className="space-y-2">
                          {skills
                            .filter((skill) => skill.category === category)
                            .map((skill, index) => (
                              <div key={index} className="flex items-center gap-3 p-2 rounded-lg bg-muted/50 hover:bg-muted transition-colors">
                                <div className="text-primary">
                                  {skill.icon}
                                </div>
                                <span className="text-sm font-medium">{skill.name}</span>
                                <div className="ml-auto">
                                  <Star className="h-3 w-3 fill-primary text-primary" />
                                </div>
                              </div>
                            ))}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Skill Badges */}
                  <div className="space-y-3">
                    <h4 className="text-sm font-medium">Top Skills</h4>
                    <div className="flex flex-wrap gap-2">
                      {skills.slice(0, 6).map((skill, index) => (
                        <Badge key={index} variant="secondary" className="gap-1">
                          {skill.icon}
                          {skill.name}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="py-16">
          <div className="space-y-8">
            <div className="text-center space-y-4">
              <h2 className="text-3xl font-bold">Professional Experience</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                My journey in design has taken me through various roles and challenges, 
                each contributing to my growth as a designer and problem solver.
              </p>
            </div>

            <div className="space-y-8">
              {experience.map((job, index) => (
                <Card key={index} className="p-6">
                  <div className="flex flex-col md:flex-row md:items-start gap-6">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                        <Building className="h-6 w-6 text-primary" />
                      </div>
                    </div>
                    
                    <div className="flex-1 space-y-4">
                      <div className="space-y-2">
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                          <h3 className="text-xl font-semibold">{job.title}</h3>
                          <Badge variant="outline">{job.period}</Badge>
                        </div>
                        <p className="text-primary font-medium">{job.company}</p>
                        <p className="text-muted-foreground">{job.description}</p>
                      </div>
                      
                      <div className="space-y-2">
                        <h4 className="font-medium">Key Achievements:</h4>
                        <ul className="space-y-1">
                          {job.achievements.map((achievement, i) => (
                            <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                              <span className="w-1 h-1 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                              {achievement}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-16">
          <div className="space-y-8">
            <div className="text-center space-y-4">
              <h2 className="text-3xl font-bold">Featured Projects</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                A selection of my recent work showcasing different aspects of UI/UX design, 
                from mobile applications to web platforms and brand identity.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <Card key={index} className="group overflow-hidden">
                  <div className="aspect-video overflow-hidden">
                    <ImageWithFallback
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <CardContent className="p-6 space-y-4">
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <h3 className="font-semibold">{project.title}</h3>
                        <Badge variant="outline" className="text-xs">{project.year}</Badge>
                      </div>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {project.description}
                      </p>
                    </div>
                    
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, i) => (
                        <Badge key={i} variant="secondary" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="w-full group"
                      onClick={() => window.open(project.behanceUrl, '_blank')}
                    >
                      View on Behance
                      <ExternalLink className="h-3 w-3 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-16">
          <div className="max-w-4xl mx-auto">
            <Card className="p-8">
              <div className="text-center space-y-6">
                <div className="space-y-4">
                  <h2 className="text-3xl font-bold">Let's Work Together</h2>
                  <p className="text-muted-foreground max-w-2xl mx-auto">
                    I'm always excited to take on new challenges and collaborate on innovative projects. 
                    Whether you have a project in mind or just want to connect, I'd love to hear from you.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="flex flex-col items-center space-y-2">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                      <Mail className="h-6 w-6 text-primary" />
                    </div>
                    <div className="text-center">
                      <p className="font-medium">Email</p>
                      <p className="text-sm text-muted-foreground">alex.rivera@email.com</p>
                    </div>
                  </div>
                  
                  <div className="flex flex-col items-center space-y-2">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                      <Phone className="h-6 w-6 text-primary" />
                    </div>
                    <div className="text-center">
                      <p className="font-medium">Phone</p>
                      <p className="text-sm text-muted-foreground">+1 (555) 123-4567</p>
                    </div>
                  </div>
                  
                  <div className="flex flex-col items-center space-y-2">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                      <MapPin className="h-6 w-6 text-primary" />
                    </div>
                    <div className="text-center">
                      <p className="font-medium">Location</p>
                      <p className="text-sm text-muted-foreground">San Francisco, CA</p>
                    </div>
                  </div>
                </div>

                <div className="flex justify-center gap-4">
                  <Button size="lg">
                    <Mail className="h-4 w-4 mr-2" />
                    Send Message
                  </Button>
                  <Button variant="outline" size="lg">
                    <Download className="h-4 w-4 mr-2" />
                    Download CV
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-border py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              © 2024 Alex Rivera. All rights reserved.
            </p>
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                <Linkedin className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                <Github className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                <Globe className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </footer>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <Button
          onClick={scrollToTop}
          size="sm"
          className="fixed bottom-6 right-6 h-12 w-12 rounded-full shadow-lg z-50 p-0"
        >
          <ArrowUp className="h-4 w-4" />
        </Button>
      )}
    </div>
  )
}