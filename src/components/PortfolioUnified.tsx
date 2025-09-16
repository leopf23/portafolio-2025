import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card"
import { Badge } from "./ui/badge"
import { Button } from "./ui/button"
import { ImageWithFallback } from "./img/ImageWithFallback"
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

export function PortfolioUnified() {
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
    { name: "UI Design", icon: <Palette className="w-4 h-4" />, category: "Design" },
    { name: "UX Research", icon: <Users className="w-4 h-4" />, category: "Research" },
    { name: "Prototyping", icon: <Target className="w-4 h-4" />, category: "Development" },
    { name: "Figma", icon: <Figma className="w-4 h-4" />, category: "Tools" },
    { name: "Adobe XD", icon: <CheckCircle className="w-4 h-4" />, category: "Tools" },
    { name: "Adobe Creative Suite", icon: <Palette className="w-4 h-4" />, category: "Design" },
    { name: "HTML/CSS/JS", icon: <Code className="w-4 h-4" />, category: "Development" },
    { name: "User Testing", icon: <CheckCircle className="w-4 h-4" />, category: "Research" },
    { name: "Design Systems", icon: <Building className="w-4 h-4" />, category: "Systems" }
  ]

  const projects = [
    {
      title: "Farma Extra Mobile App",
      description: "Complete UX/UI redesign of a pharmaceutical app, focusing on simplifying prescription management, improving patient user journeys, and enhancing overall accessibility.",
      image: "https://i.ibb.co/HD7MhH6N/2mockup.png",
      tags: ["Mobile", "E-commerce", "React Native", "Figma"],
      year: "2024",
      behanceUrl: "https://www.behance.net/gallery/218593341/Design-Pharmacy-UXUI"
    },
    {
      title: "AION - Dashboard Design",
      description: "Modern dashboard interface for a project management tool with complex data visualization and real-time collaboration features.",
      image: "3mockup.png",
      tags: ["Web", "React", "Adibe XD", "Design System"],
      year: "2024",
      behanceUrl: "https://www.behance.net/gallery/212517375/Dashboard-UXUI-(AION)"
    },
    {
      title: "e-commerce",
      description: "Complete UX/UI redesign of an electronics e-commerce platform, focusing on enhancing product discovery, optimizing checkout flow, and boosting conversion rates.",
      image: "4mockup.png",
      tags: ["Next JS", "Adobe XD", "Visual Identity"],
      year: "2023",
      behanceUrl: "https://www.behance.net/gallery/218592993/UIUX-E-commerce"
    }
  ]

  const experience = [
    {
      title: "Senior UI/UX Designer",
      company: "UNPHU",
      period: "2019 - Present",
      description: "Led the design and development of institutional web systems, ensuring alignment with the university’s brand identity and user needs. Collaborated with academic and administrative departments to deliver intuitive digital experiences for students, faculty, and staff.",
      achievements: [
        "Designed and implemented the university’s design system, adopted across multiple platforms.",
        "Improved usability and accessibility of web portals, enhancing engagement from students and faculty.",
        "Partnered with cross-functional teams to modernize internal platforms, reducing support requests by streamlining workflows."
      ]
    },
    {
      title: "Front-End Developer & UI/UX Designer",
      company: "Prixet Technology",
      period: "2018 - 2019",
      description: "Responsible for designing and developing web interfaces for hotspot platforms and WiFi-based advertising systems. Contributed across the full process, from prototyping in Adobe XD to front-end implementation with HTML, CSS, and JavaScript.",
      achievements: [
        "Designed and implemented login portals for free internet access integrated with advertising campaigns.",
        "Improved the user experience of connection portals, reducing friction and increasing usage rates.",
        "Developed responsive and customized interfaces for B2B clients, tailored to different brands and requirements."
      ]
    },
    {
      title: "Junior Designer",
      company: "Dream Team Social media",
      period: "2014 - 2016",
      description: "Held a versatile role within the multimedia team, combining graphic design with web development to support corporate and advertising projects. Created visual assets for digital and print media, and developed responsive websites optimized for multiple devices.",
      achievements: [
        "Designed brand identities, marketing materials, and digital content for promotional campaigns.",
        "Developed and maintained corporate websites using HTML, CSS, and JavaScript.",
        "Implemented responsive and optimized designs, improving the company’s online visibility and accessibility."
      ]
    }
  ]

  return (
    <div className="relative min-h-screen">
      {/* Unified background */}
      <div className="fixed inset-0 bg-background">
        {/* Main mesh gradient */}
        {/* <div className="absolute inset-0 bg-mesh-gradient"></div> */}

        {/* Subtle grid pattern overlay */}
        <div className="absolute inset-0 bg-grid-pattern opacity-30"></div>

        {/* Floating gradient orbs */}
        <div className="top-0 left-1/4 absolute bg-gradient-to-br from-blue-500/10 to-transparent blur-3xl rounded-full w-96 h-96 animate-float"></div>
        <div className="top-1/3 right-1/4 absolute bg-gradient-to-br from-purple-500/10 to-transparent blur-3xl rounded-full w-80 h-80 animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="bottom-1/4 left-1/3 absolute bg-gradient-to-br from-pink-500/10 to-transparent blur-3xl rounded-full w-72 h-72 animate-float" style={{ animationDelay: '4s' }}></div>
      </div>

      {/* Content overlay */}
      <div className="z-10 relative">
        {/* Navigation */}
        <nav className="top-0 z-50 sticky border-b border-border glass-effect">
          <div className="mx-auto px-4 py-4 container">
            <div className="flex justify-between items-center">
              <h1 className="font-semibold">Leonardo Pérez</h1>
              <div className="flex items-center space-x-4">
                <a href="#about" className="hover:text-primary text-sm transition-colors">About</a>
                <a href="#experience" className="hover:text-primary text-sm transition-colors">Experience</a>
                <a href="#projects" className="hover:text-primary text-sm transition-colors">Projects</a>
                <a href="#contact" className="hover:text-primary text-sm transition-colors">Contact</a>
                <ThemeToggle />
              </div>
            </div>
          </div>
        </nav>

        <main className="space-y-16 mx-auto px-4 py-8 container">
          {/* Hero Section */}
          <section className="relative py-16">
            <div className="items-center gap-12 grid grid-cols-1 lg:grid-cols-2">
              <div className="space-y-6">
                <div className="space-y-4">
                  <Badge variant="outline" className="w-fit glass-effect">
                    Available for new opportunities
                  </Badge>
                  <h1 className="font-bold text-4xl lg:text-5xl leading-tight">
                    UI/UX Designer
                    <span className="block text-primary">Creating Digital</span>
                    <span className="block">Experiences</span>
                  </h1>
                  <p className="max-w-lg text-muted-foreground text-lg">
                    I'm passionate about creating intuitive, user-centered designs that solve real problems.
                    With 5+ years of experience, I specialize in transforming complex ideas into beautiful,
                    functional digital products.
                  </p>
                </div>

                <div className="flex flex-wrap gap-4">
                  <Button
                    variant="outline"
                    size="lg"
                    className="gap-2 cursor-pointer glass-effect"
                    onClick={() => window.open("https://drive.google.com/file/d/1tTPkdrinNecvOKsu7410AZiY4HjUI2jy/view", "_blank")}
                  >
                    <Download className="w-4 h-4" />
                    Download CV
                  </Button>

                  <Button
                    variant="outline"
                    size="lg"
                    className="gap-2 cursor-pointer glass-effect"
                    onClick={() => window.open("https://mail.google.com/mail/?view=cm&fs=1&to=leonardoperezf23@gmail.com", "_blank")}
                  >
                    <Mail className="w-4 h-4" />
                    Contact
                  </Button>

                </div>

                <div className="flex items-center space-x-6 pt-4">
                  <div className="flex items-center space-x-2 text-muted-foreground text-sm">
                    <MapPin className="w-4 h-4" />
                    <span>República Dominicana</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <a href="https://www.linkedin.com/in/leonardo-perez-figueroa-030760162/" target="_blank" rel="noopener noreferrer">
                      <Button variant="ghost" size="sm" className="p-0 w-8 h-8 cursor-pointer">
                        <Linkedin className="w-4 h-4" />
                      </Button>
                    </a>

                    <a href="https://github.com/leopf23" target="_blank" rel="noopener noreferrer">
                      <Button variant="ghost" size="sm" className="p-0 w-8 h-8 cursor-pointer">
                        <Github className="w-4 h-4" />
                      </Button>
                    </a>
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="relative mx-auto max-w-md aspect-square">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-purple-500/20 rounded-3xl rotate-6 animate-float"></div>
                  <div className="relative bg-card shadow-soft-lg border rounded-3xl overflow-hidden glass-effect">
                    <ImageWithFallback
                      src="https://i.ibb.co/d4F4CVrG/me.jpg"
                      alt="Leonardo pF - UI/UX Designer"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* About Section */}
          <section id="about" className="py-16">
            <div className="gap-12 grid grid-cols-1 lg:grid-cols-3">
              <div className="space-y-8 lg:col-span-2">
                <div className="space-y-4">
                  <h2 className="font-bold text-3xl">About Me</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    I'm leonardo a passionate UI/UX designer with over 5 years of experience creating digital products
                    that users love. My approach combines user research, strategic thinking, and beautiful design to deliver
                    solutions that not only look great but also drive business results.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    When I'm not designing, you can find me exploring new design trends, contributing to
                    open-source projects, or sharing knowledge through design communities and workshops.
                  </p>
                </div>

                <div className="gap-6 grid grid-cols-2 md:grid-cols-4">
                  <div className="space-y-2 text-center">
                    <div className="flex justify-center items-center bg-primary/10 mx-auto rounded-xl w-12 h-12">
                      <Target className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <p className="font-bold text-2xl">10+</p>
                      <p className="text-muted-foreground text-sm">Projects</p>
                    </div>
                  </div>
                  <div className="space-y-2 text-center">
                    <div className="flex justify-center items-center bg-primary/10 mx-auto rounded-xl w-12 h-12">
                      <Users className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <p className="font-bold text-2xl">10+</p>
                      <p className="text-muted-foreground text-sm">Clients</p>
                    </div>
                  </div>
                  <div className="space-y-2 text-center">
                    <div className="flex justify-center items-center bg-primary/10 mx-auto rounded-xl w-12 h-12">
                      <Calendar className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <p className="font-bold text-2xl">5+</p>
                      <p className="text-muted-foreground text-sm">Years</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <Card className="gradient-border glass-effect">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Lightbulb className="w-5 h-5" />
                      Skills & Expertise
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    {/* Skill Categories */}
                    <div className="gap-4 grid grid-cols-2">
                      {["Design", "Research", "Development", "Tools", "Systems"].map((category) => (
                        <div key={category} className="space-y-3">
                          <h4 className="font-medium text-muted-foreground text-sm uppercase tracking-wide">
                            {category}
                          </h4>
                          <div className="space-y-2">
                            {skills
                              .filter((skill) => skill.category === category)
                              .map((skill, index) => (
                                <div key={index} className="flex items-center gap-3 bg-muted/50 hover:bg-muted p-2 rounded-lg transition-colors">
                                  <div className="text-primary">
                                    {skill.icon}
                                  </div>
                                  <span className="font-medium text-sm">{skill.name}</span>
                                  <div className="ml-auto">
                                    <Star className="fill-primary w-3 h-3 text-primary" />
                                  </div>
                                </div>
                              ))}
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Skill Badges */}
                    <div className="space-y-3">
                      <h4 className="font-medium text-sm">Top Skills</h4>
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
              <div className="space-y-4 text-center">
                <h2 className="font-bold text-3xl">Professional Experience</h2>
                <p className="mx-auto max-w-2xl text-muted-foreground">
                  My journey in design has taken me through various roles and challenges,
                  each contributing to my growth as a designer and problem solver.
                </p>
              </div>

              <div className="space-y-8">
                {experience.map((job, index) => (
                  <Card key={index} className="hover:shadow-soft-lg p-6 transition-all animate-fade-in duration-300 glass-effect">
                    <div className="flex md:flex-row flex-col md:items-start gap-6">
                      <div className="flex-shrink-0">
                        <div className="flex justify-center items-center bg-primary/10 rounded-xl w-12 h-12">
                          <Building className="w-6 h-6 text-primary" />
                        </div>
                      </div>

                      <div className="flex-1 space-y-4">
                        <div className="space-y-2">
                          <div className="flex md:flex-row flex-col md:justify-between md:items-center gap-2">
                            <h3 className="font-semibold text-xl">{job.title}</h3>
                            <Badge variant="outline">{job.period}</Badge>
                          </div>
                          <p className="font-medium text-primary">{job.company}</p>
                          <p className="text-muted-foreground">{job.description}</p>
                        </div>

                        <div className="space-y-2">
                          <h4 className="font-medium">Key Achievements:</h4>
                          <ul className="space-y-1">
                            {job.achievements.map((achievement, i) => (
                              <li key={i} className="flex items-start gap-2 text-muted-foreground text-sm">
                                <span className="flex-shrink-0 bg-primary mt-2 rounded-full w-1 h-1"></span>
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
              <div className="space-y-4 text-center">
                <h2 className="font-bold text-3xl">Featured Projects</h2>
                <p className="mx-auto max-w-2xl text-muted-foreground">
                  A selection of my recent work showcasing different aspects of UI/UX design,
                  from mobile applications to web platforms and brand identity.
                </p>
              </div>

              <div className="gap-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {projects.map((project, index) => (
                  <Card key={index} className="group hover:shadow-glow overflow-hidden transition-all animate-slide-up duration-500 glass-effect">
                    <div className="aspect-video overflow-hidden">
                      <ImageWithFallback
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <CardContent className="space-y-4 p-6">
                      <div className="space-y-2">
                        <div className="flex justify-between items-center">
                          <h3 className="font-semibold">{project.title}</h3>
                          <Badge variant="outline" className="text-xs">{project.year}</Badge>
                        </div>
                        <p className="text-muted-foreground text-sm leading-relaxed">
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
                        className="group w-full glass-effect"
                        onClick={() => window.open(project.behanceUrl, '_blank')}
                      >
                        View on Behance
                        <ExternalLink className="ml-2 w-3 h-3 transition-transform group-hover:translate-x-1" />
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>

          {/* Contact Section */}
          <section id="contact" className="py-16">
            <div className="mx-auto max-w-4xl">
              <Card className="p-8 gradient-border glass-effect">
                <div className="space-y-6 text-center">
                  <div className="space-y-4">
                    <h2 className="font-bold text-3xl">Let's Work Together</h2>
                    <p className="mx-auto max-w-2xl text-muted-foreground">
                      I'm always excited to take on new challenges and collaborate on innovative projects.
                      Whether you have a project in mind or just want to connect, I'd love to hear from you.
                    </p>
                  </div>

                  <div className="gap-6 grid grid-cols-1 md:grid-cols-3">
                    <div className="flex flex-col items-center space-y-2">
                      <div className="flex justify-center items-center bg-primary/10 rounded-xl w-12 h-12">
                        <Mail className="w-6 h-6 text-primary" />
                      </div>
                      <div className="text-center">
                        <p className="font-medium">Email</p>
                        <p className="text-muted-foreground text-sm">leonardo.perez@email.com</p>
                      </div>
                    </div>

                    <div className="flex flex-col items-center space-y-2">
                      <div className="flex justify-center items-center bg-primary/10 rounded-xl w-12 h-12">
                        <Phone className="w-6 h-6 text-primary" />
                      </div>
                      <div className="text-center">
                        <p className="font-medium">Phone</p>
                        <p className="text-muted-foreground text-sm">+1 (809) 370-0424</p>
                      </div>
                    </div>

                    <div className="flex flex-col items-center space-y-2">
                      <div className="flex justify-center items-center bg-primary/10 rounded-xl w-12 h-12">
                        <MapPin className="w-6 h-6 text-primary" />
                      </div>
                      <div className="text-center">
                        <p className="font-medium">Location</p>
                        <p className="text-muted-foreground text-sm">República Dominicana, SD</p>
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-center gap-4">
                    <Button
                      variant="outline"
                      size="lg"
                      className="gap-2 cursor-pointer glass-effect"
                      onClick={() => window.open("https://mail.google.com/mail/?view=cm&fs=1&to=leonardoperezf23@gmail.com", "_blank")}
                    >
                      <Mail className="w-4 h-4" />
                      Contact
                    </Button>
                    <Button
                      variant="outline"
                      size="lg"
                      className="gap-2 cursor-pointer glass-effect"
                      onClick={() => window.open("/https://drive.google.com/file/d/1tTPkdrinNecvOKsu7410AZiY4HjUI2jy/view", "_blank")}
                    >
                      <Download className="w-4 h-4" />
                      Download CV
                    </Button>
                  </div>
                </div>
              </Card>
            </div>
          </section>
        </main>

        {/* Footer */}
        <footer className="py-8 border-t border-border glass-effect">
          <div className="mx-auto px-4 container">
            <div className="flex md:flex-row flex-col justify-between items-center gap-4">
              <p className="text-muted-foreground text-sm">
                © 2024 Leonardo Pérez. All rights reserved.
              </p>
              <div className="flex items-center space-x-4">
                <Button variant="ghost" size="sm" className="p-0 w-8 h-8">
                  <a href="/resumen.pdf" target="_blank" rel="noopener noreferrer">
                    <Button variant="ghost" size="sm" className="p-0 w-8 h-8 cursor-pointer">
                      <Linkedin className="w-4 h-4" />
                    </Button>
                  </a>
                </Button>

                <a href="https://github.com/leopf23" target="_blank" rel="noopener noreferrer">
                  <Button variant="ghost" size="sm" className="p-0 w-8 h-8 cursor-pointer">
                    <Github className="w-4 h-4" />
                  </Button>
                </a>

              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}