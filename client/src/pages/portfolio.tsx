import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { 
  Code, 
  User, 
  Mail, 
  Phone, 
  MapPin, 
  Github, 
  Linkedin, 
  ExternalLink,
  Download,
  Rocket,
  GraduationCap,
  Lightbulb,
  TrendingUp,
  Server,
  Database,
  ArrowUp,
  Menu,
  X,
  Send
} from "lucide-react";
import todoImage from "@assets/Screenshot 2025-06-27 010802_1751194442654.png";
import guessGameImage from "@assets/Screenshot 2025-06-27 222933_1751194447739.png";
import mernStackImage from "@assets/Screenshot 2025-06-28 141953_1751194454215.png";
import calculatorImage from "@assets/Screenshot 2025-06-28 203541_1751194465543.png";

export default function Portfolio() {
  const [isLoading, setIsLoading] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [skillsVisible, setSkillsVisible] = useState(false);

  // Handle loading screen
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  // Handle scroll effects
  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 300);
      
      // Check if skills section is visible
      const skillsSection = document.getElementById('skills');
      if (skillsSection) {
        const rect = skillsSection.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
          setSkillsVisible(true);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Smooth scroll to section
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  // Back to top function
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement form submission logic
    alert('Thank you for your message! I will get back to you soon.');
  };

  if (isLoading) {
    return (
      <div className="fixed inset-0 hero-gradient flex items-center justify-center z-50">
        <div className="text-center text-white">
          <div className="loader-circle mx-auto mb-4"></div>
          <div className="text-lg font-medium">Loading...</div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-lg border-b">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 flex items-center justify-center">
                <Code className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-purple-600">Atchaya Raj</span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-8">
              <button onClick={() => scrollToSection('home')} className="nav-link">Home</button>
              <button onClick={() => scrollToSection('about')} className="nav-link">About</button>
              <button onClick={() => scrollToSection('skills')} className="nav-link">Skills</button>
              <button onClick={() => scrollToSection('projects')} className="nav-link">Projects</button>
              <button onClick={() => scrollToSection('contact')} className="nav-link">Contact</button>
            </div>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden mt-4 pb-4 border-t">
              <div className="flex flex-col gap-4 pt-4">
                <button onClick={() => scrollToSection('home')} className="nav-link text-left">Home</button>
                <button onClick={() => scrollToSection('about')} className="nav-link text-left">About</button>
                <button onClick={() => scrollToSection('skills')} className="nav-link text-left">Skills</button>
                <button onClick={() => scrollToSection('projects')} className="nav-link text-left">Projects</button>
                <button onClick={() => scrollToSection('contact')} className="nav-link text-left">Contact</button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen hero-gradient flex items-center relative overflow-hidden">
        {/* Floating Shapes */}
        <div className="absolute inset-0">
          <div className="floating-shape top-1/4 left-1/12 w-20 h-20 bg-white rounded-full" style={{ animationDelay: '-1s' }}></div>
          <div className="floating-shape top-3/5 right-1/12 w-16 h-16 bg-white transform rotate-45" style={{ animationDelay: '-2s' }}></div>
          <div className="floating-shape bottom-1/4 left-1/5 w-24 h-24 bg-white rounded-3xl" style={{ animationDelay: '-3s' }}></div>
          <div className="floating-shape top-1/3 right-1/3 w-12 h-12 bg-white rounded-full" style={{ animationDelay: '-4s' }}></div>
        </div>

        <div className="max-w-6xl mx-auto px-6 pt-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center hero-content">
            {/* Text Content */}
            <div className="text-white">
              <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                <span className="typing-text">Hi, I'm Atchaya Raj</span>
              </h1>
              <p className="text-xl font-medium mb-4 text-white/90">
                Final Year CSE Student at SASTRA deemed University
              </p>
              <p className="text-lg mb-8 text-white/80 max-w-lg">
                Passionate about building effective web solutions and exploring new technologies. 
                With a solid foundation in full-stack development, I'm eager to contribute to meaningful projects.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  onClick={() => scrollToSection('projects')}
                  className="bg-white/20 hover:bg-white/30 text-white border-2 border-white/30 backdrop-blur-lg"
                >
                  <Rocket className="w-5 h-5 mr-2" />
                  View My Work
                </Button>
                <Button 
                  variant="outline" 
                  className="bg-white/10 hover:bg-white/20 text-white border-2 border-white/30 backdrop-blur-lg"
                >
                  <Download className="w-5 h-5 mr-2" />
                  Download CV
                </Button>
              </div>
            </div>

            {/* Experience Card */}
            <div className="flex justify-center">
              <Card className="bg-white/10 backdrop-blur-lg border-white/20 text-white max-w-sm">
                <CardContent className="p-8 text-center">
                  <div className="w-32 h-32 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <User className="w-16 h-16 text-white" />
                  </div>
                  <div className="space-y-4">
                    <div>
                      <div className="text-xl font-bold mb-2">Workshop Organizer</div>
                      <div className="text-sm text-white/80">Active member of Daksh workshop team</div>
                    </div>
                    <div className="border-t border-white/20 pt-4">
                      <div className="text-sm text-white/90">
                        Organized multiple workshops and events, helping students learn new technologies and skills
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-slate-50 dark:bg-slate-900">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
              About Me
            </h2>
            <p className="text-lg text-muted-foreground">Get to know me better</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 about-content">
            {/* About Card */}
            <Card className="border-purple-200 dark:border-purple-800">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold mb-4 text-purple-600">Who Am I?</h3>
                <p className="text-muted-foreground mb-6">
                  I am passionate about building effective web solutions and exploring new technologies. 
                  With a solid foundation in full-stack development, I'm eager to contribute to meaningful projects.
                </p>
                
                <div className="mb-6">
                  <h4 className="text-lg font-semibold mb-3 text-purple-600 flex items-center gap-2">
                    <GraduationCap className="w-5 h-5" />
                    Education & Experience
                  </h4>
                  <div className="space-y-2">
                    <p><strong>B.Tech in CSE</strong> - SASTRA University</p>
                    <p><strong>Workshop Organizer</strong> - Active member of Daksh workshop team</p>
                    <p><strong>Leadership</strong> - Organized multiple workshops and events</p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div className="flex items-center gap-2 p-3 bg-purple-50 dark:bg-purple-950/20 rounded-lg border border-purple-200 dark:border-purple-800">
                    <Code className="w-5 h-5 text-purple-600" />
                    <span className="font-medium">Web Developer</span>
                  </div>
                  <div className="flex items-center gap-2 p-3 bg-purple-50 dark:bg-purple-950/20 rounded-lg border border-purple-200 dark:border-purple-800">
                    <Lightbulb className="w-5 h-5 text-purple-600" />
                    <span className="font-medium">Problem Solver</span>
                  </div>
                  <div className="flex items-center gap-2 p-3 bg-purple-50 dark:bg-purple-950/20 rounded-lg border border-purple-200 dark:border-purple-800">
                    <Rocket className="w-5 h-5 text-purple-600" />
                    <span className="font-medium">Tech Explorer</span>
                  </div>
                  <div className="flex items-center gap-2 p-3 bg-purple-50 dark:bg-purple-950/20 rounded-lg border border-purple-200 dark:border-purple-800">
                    <TrendingUp className="w-5 h-5 text-purple-600" />
                    <span className="font-medium">Growth Mindset</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Timeline */}
            <div className="relative">
              <div className="absolute left-5 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-600 to-indigo-600"></div>
              
              <div className="space-y-8">
                <div className="relative pl-12">
                  <div className="absolute left-3 top-2 w-4 h-4 bg-purple-600 rounded-full border-4 border-white shadow-lg"></div>
                  <Card className="border-purple-200 dark:border-purple-800">
                    <CardContent className="p-4">
                      <h4 className="font-semibold text-purple-600 mb-1">Frontend Development</h4>
                      <p className="text-muted-foreground">HTML, CSS, JavaScript, React.js</p>
                    </CardContent>
                  </Card>
                </div>
                
                <div className="relative pl-12">
                  <div className="absolute left-3 top-2 w-4 h-4 bg-purple-600 rounded-full border-4 border-white shadow-lg"></div>
                  <Card className="border-purple-200 dark:border-purple-800">
                    <CardContent className="p-4">
                      <h4 className="font-semibold text-purple-600 mb-1">Backend Development</h4>
                      <p className="text-muted-foreground">Node.js, Express.js</p>
                    </CardContent>
                  </Card>
                </div>
                
                <div className="relative pl-12">
                  <div className="absolute left-3 top-2 w-4 h-4 bg-purple-600 rounded-full border-4 border-white shadow-lg"></div>
                  <Card className="border-purple-200 dark:border-purple-800">
                    <CardContent className="p-4">
                      <h4 className="font-semibold text-purple-600 mb-1">Programming Languages</h4>
                      <p className="text-muted-foreground">C, C++, Java, Python</p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
              Skills & Expertise
            </h2>
            <p className="text-lg text-muted-foreground">Technologies I work with</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 skills-content">
            {/* Frontend Skills */}
            <Card className="border-purple-200 dark:border-purple-800">
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold mb-6 text-purple-600 flex items-center gap-3">
                  <Code className="w-6 h-6" />
                  Frontend Development
                </h3>
                
                <div className="space-y-6">
                  {[
                    { name: 'HTML5', percentage: 90, color: '#e34c26' },
                    { name: 'CSS3', percentage: 85, color: '#1572b6' },
                    { name: 'JavaScript', percentage: 80, color: '#f7df1e' },
                    { name: 'React.js', percentage: 75, color: '#61dafb' }
                  ].map((skill) => (
                    <div key={skill.name}>
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-medium">{skill.name}</span>
                        <span className="text-purple-600 font-semibold">{skill.percentage}%</span>
                      </div>
                      <div className="w-full bg-purple-100 dark:bg-purple-950/20 rounded-full h-2">
                        <div 
                          className="skill-progress bg-gradient-to-r from-purple-600 to-indigo-600 h-2 rounded-full"
                          style={{ 
                            width: skillsVisible ? `${skill.percentage}%` : '0%'
                          }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Backend Skills */}
            <Card className="border-purple-200 dark:border-purple-800">
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold mb-6 text-purple-600 flex items-center gap-3">
                  <Server className="w-6 h-6" />
                  Backend Development
                </h3>
                
                <div className="space-y-6">
                  {[
                    
                    { name: 'Node.js', percentage: 80, color: '#339933' },
                    { name: 'Express.js', percentage: 75, color: '#4db33d' },
                    { name: 'MongoDB', percentage: 70, color: '#4db33d' }
                  ].map((skill) => (
                    <div key={skill.name}>
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-medium">{skill.name}</span>
                        <span className="text-purple-600 font-semibold">{skill.percentage}%</span>
                      </div>
                      <div className="w-full bg-purple-100 dark:bg-purple-950/20 rounded-full h-2">
                        <div 
                          className="skill-progress bg-gradient-to-r from-purple-600 to-indigo-600 h-2 rounded-full"
                          style={{ 
                            width: skillsVisible ? `${skill.percentage}%` : '0%'
                          }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Programming Languages */}
            <Card className="border-purple-200 dark:border-purple-800">
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold mb-6 text-purple-600 flex items-center gap-3">
                  <Database className="w-6 h-6" />
                  Programming Languages
                </h3>
                
                <div className="space-y-6">
                  {[
                    { name: 'Java', percentage: 85, color: '#007396' },
                    { name: 'Python', percentage: 80, color: '#3776ab' },
                    { name: 'C/C++', percentage: 75, color: '#00599c' }
                  ].map((skill) => (
                    <div key={skill.name}>
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-medium">{skill.name}</span>
                        <span className="text-purple-600 font-semibold">{skill.percentage}%</span>
                      </div>
                      <div className="w-full bg-purple-100 dark:bg-purple-950/20 rounded-full h-2">
                        <div 
                          className="skill-progress bg-gradient-to-r from-purple-600 to-indigo-600 h-2 rounded-full"
                          style={{ 
                            width: skillsVisible ? `${skill.percentage}%` : '0%'
                          }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-slate-50 dark:bg-slate-900">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
              My Projects
            </h2>
            <p className="text-lg text-muted-foreground">Here are some of my recent works</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 projects-grid">
            {/* Todo List Project */}
            <Card className="border-purple-200 dark:border-purple-800 overflow-hidden project-card hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="project-image h-48 overflow-hidden">
                <img 
                  src={todoImage} 
                  alt="Todo List Application Interface" 
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-3 text-purple-600">Interactive Todo List</h3>
                <p className="text-muted-foreground mb-4">
                  A modern and intuitive todo list application with a beautiful interface, featuring task management, 
                  categories, and progress tracking.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="secondary">HTML5</Badge>
                  <Badge variant="secondary">CSS3</Badge>
                  <Badge variant="secondary">JavaScript</Badge>
                  <Badge variant="secondary">Local Storage</Badge>
                </div>
                <div className="flex gap-3">
                  <Button size="sm" className="bg-gradient-to-r from-purple-600 to-indigo-600">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Live Demo
                  </Button>
                  <Button size="sm" variant="outline">
                    <Github className="w-4 h-4 mr-2" />
                    Code
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Number Guessing Game */}
            <Card className="border-purple-200 dark:border-purple-800 overflow-hidden project-card hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="project-image h-48 overflow-hidden">
                <img 
                  src={guessGameImage} 
                  alt="Number Guessing Game Interface" 
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-3 text-purple-600">Number Guessing Game</h3>
                <p className="text-muted-foreground mb-4">
                  An interactive number guessing game with scoring system and feedback. Features difficulty levels 
                  and score tracking for an engaging user experience.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="secondary">HTML5</Badge>
                  <Badge variant="secondary">CSS3</Badge>
                  <Badge variant="secondary">JavaScript</Badge>
                  <Badge variant="secondary">Game Logic</Badge>
                </div>
                <div className="flex gap-3">
                  <Button size="sm" className="bg-gradient-to-r from-purple-600 to-indigo-600">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Live Demo
                  </Button>
                  <Button size="sm" variant="outline">
                    <Github className="w-4 h-4 mr-2" />
                    Code
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* MERN Stack Project */}
            <Card className="border-purple-200 dark:border-purple-800 overflow-hidden project-card hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="project-image h-48 overflow-hidden">
                <img 
                  src={mernStackImage} 
                  alt="MERN Stack CRUD Application Interface" 
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-3 text-purple-600">MERN Stack CRUD App</h3>
                <p className="text-muted-foreground mb-4">
                  A full-stack CRUD application built with MongoDB, Express.js, React.js, and Node.js. 
                  Features complete data management with search, add, edit, and delete functionality.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="secondary">MongoDB</Badge>
                  <Badge variant="secondary">Express.js</Badge>
                  <Badge variant="secondary">React.js</Badge>
                  <Badge variant="secondary">Node.js</Badge>
                </div>
                <div className="flex gap-3">
                  <Button size="sm" className="bg-gradient-to-r from-purple-600 to-indigo-600">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Live Demo
                  </Button>
                  <Button size="sm" variant="outline">
                    <Github className="w-4 h-4 mr-2" />
                    Code
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Calculator Project */}
            <Card className="border-purple-200 dark:border-purple-800 overflow-hidden project-card hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="project-image h-48 overflow-hidden">
                <img 
                  src={calculatorImage} 
                  alt="Calculator Application Interface" 
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-3 text-purple-600">Calculator Application</h3>
                <p className="text-muted-foreground mb-4">
                  A functional calculator application with a clean, modern interface. Supports basic arithmetic 
                  operations, decimal calculations, and keyboard input for enhanced usability.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="secondary">HTML5</Badge>
                  <Badge variant="secondary">CSS3</Badge>
                  <Badge variant="secondary">JavaScript</Badge>
                  <Badge variant="secondary">Math Operations</Badge>
                </div>
                <div className="flex gap-3">
                  <Button size="sm" className="bg-gradient-to-r from-purple-600 to-indigo-600">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Live Demo
                  </Button>
                  <Button size="sm" variant="outline">
                    <Github className="w-4 h-4 mr-2" />
                    Code
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
              Get In Touch
            </h2>
            <p className="text-lg text-muted-foreground">Let's work together on your next project</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 contact-content">
            {/* Contact Info */}
            <Card className="border-purple-200 dark:border-purple-800">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold mb-6 text-purple-600">Contact Information</h3>
                
                <div className="space-y-6">
                  <div className="flex items-center gap-4 p-4 bg-purple-50 dark:bg-purple-950/20 rounded-lg border border-purple-200 dark:border-purple-800">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-full flex items-center justify-center">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold">Email</h4>
                      <p className="text-muted-foreground">atchayaraj@example.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4 p-4 bg-purple-50 dark:bg-purple-950/20 rounded-lg border border-purple-200 dark:border-purple-800">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-full flex items-center justify-center">
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold">Phone</h4>
                      <p className="text-muted-foreground">+91 12345 67890</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4 p-4 bg-purple-50 dark:bg-purple-950/20 rounded-lg border border-purple-200 dark:border-purple-800">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-full flex items-center justify-center">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold">Location</h4>
                      <p className="text-muted-foreground">Tamil Nadu, India</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4 p-4 bg-purple-50 dark:bg-purple-950/20 rounded-lg border border-purple-200 dark:border-purple-800">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-full flex items-center justify-center">
                      <Linkedin className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold">LinkedIn</h4>
                      <p className="text-muted-foreground">linkedin.com/in/atchayaraj</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Contact Form */}
            <Card className="border-purple-200 dark:border-purple-800">
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Input 
                      placeholder="Your Name" 
                      required 
                      className="border-purple-200 dark:border-purple-800 focus:border-purple-600"
                    />
                  </div>
                  
                  <div>
                    <Input 
                      type="email" 
                      placeholder="Your Email" 
                      required 
                      className="border-purple-200 dark:border-purple-800 focus:border-purple-600"
                    />
                  </div>
                  
                  <div>
                    <Input 
                      placeholder="Subject" 
                      required 
                      className="border-purple-200 dark:border-purple-800 focus:border-purple-600"
                    />
                  </div>
                  
                  <div>
                    <Textarea 
                      placeholder="Your Message" 
                      required 
                      className="min-h-32 border-purple-200 dark:border-purple-800 focus:border-purple-600"
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700"
                  >
                    <Send className="w-5 h-5 mr-2" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col items-center gap-6">
            <div className="flex gap-6">
              <Button variant="ghost" size="icon" className="hover:bg-white/10">
                <Github className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:bg-white/10">
                <Linkedin className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:bg-white/10">
                <Mail className="w-5 h-5" />
              </Button>
            </div>
            <p className="text-white/80 text-center">
              © 2024 Atchaya Raj. All rights reserved. Built with passion and modern web technologies.
            </p>
          </div>
        </div>
      </footer>

      {/* Back to Top Button */}
      {showBackToTop && (
        <Button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 w-12 h-12 rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 shadow-lg"
          size="icon"
        >
          <ArrowUp className="w-5 h-5" />
        </Button>
      )}
    </div>
  );
}

// Helper styles for navigation
const navLinkStyles = "text-foreground hover:text-purple-600 transition-colors font-medium";
