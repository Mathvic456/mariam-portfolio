"use client"

import type React from "react"

import { useState, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import {
  Mail,
  Phone,
  Linkedin,
  Calendar,
  FileText,
  Palette,
  Users,
  Clock,
  CreditCard,
  Eye,
  ArrowRight,
  Star,
  Download,
  Menu,
} from "lucide-react"

export default function Portfolio() {
  const [portfolioModalOpen, setPortfolioModalOpen] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [successModalOpen, setSuccessModalOpen] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const formRef = useRef<HTMLFormElement>(null)

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setMobileMenuOpen(false)
    }
  }

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    const formData = new FormData(e.currentTarget)

    try {
      // Submit to Formspree
      const response = await fetch("https://formspree.io/f/mrblelnl", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      })

      if (response.ok) {
        // Reset form on success using ref
        if (formRef.current) {
          formRef.current.reset()
        }
        // Show success modal
        setSuccessModalOpen(true)
      } else {
        throw new Error("Form submission failed")
      }
    } catch (error) {
      console.error("Form submission error:", error)
      // You could add an error modal here
      alert("Sorry, there was an error sending your message. Please try again or email me directly!")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Floating Navigation - Improved Mobile */}
      <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 w-full max-w-sm sm:max-w-md lg:max-w-lg px-4">
        <div className="bg-white/90 backdrop-blur-md rounded-full px-4 sm:px-6 py-3 shadow-lg border border-sky-100">
          <div className="flex items-center justify-between">
            <div className="text-sm font-semibold text-slate-700">Matte & Milk 🥛</div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-6">
              <button
                onClick={() => scrollToSection("about")}
                className="text-xs text-gray-600 hover:text-sky-500 transition-colors"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("services")}
                className="text-xs text-gray-600 hover:text-sky-500 transition-colors"
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-xs text-gray-600 hover:text-sky-500 transition-colors"
              >
                Contact
              </button>
            </div>

            {/* Mobile Menu Button */}
            <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="sm" className="md:hidden p-2">
                  <Menu className="w-4 h-4" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-64">
                <SheetHeader>
                  <SheetTitle>Navigation</SheetTitle>
                  <SheetDescription>Navigate to different sections</SheetDescription>
                </SheetHeader>
                <div className="flex flex-col space-y-4 mt-6">
                  <button
                    onClick={() => scrollToSection("about")}
                    className="text-left text-gray-600 hover:text-sky-500 transition-colors py-2"
                  >
                    About Me
                  </button>
                  <button
                    onClick={() => scrollToSection("services")}
                    className="text-left text-gray-600 hover:text-sky-500 transition-colors py-2"
                  >
                    Services
                  </button>
                  <button
                    onClick={() => scrollToSection("contact")}
                    className="text-left text-gray-600 hover:text-sky-500 transition-colors py-2"
                  >
                    Contact
                  </button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </nav>

      {/* Hero Section - Fully Responsive */}
      <section className="min-h-screen flex items-center px-4 sm:px-6 lg:px-8 relative overflow-hidden pt-20 sm:pt-16">
        {/* Background Pattern - Responsive */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 sm:top-20 left-4 sm:left-20 w-16 sm:w-32 h-16 sm:h-32 bg-sky-200 rounded-full"></div>
          <div className="absolute bottom-20 sm:bottom-40 right-4 sm:right-20 w-12 sm:w-24 h-12 sm:h-24 bg-blue-300 rounded-full"></div>
          <div className="absolute top-1/2 left-1/4 sm:left-1/3 w-8 sm:w-16 h-8 sm:h-16 bg-sky-100 rounded-full"></div>
        </div>

        <div className="max-w-7xl mx-auto w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Content - Mobile First */}
            <div className="lg:col-span-7 text-center lg:text-left order-2 lg:order-1">
              <div className="inline-flex items-center bg-sky-50 text-slate-700 px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm mb-4 sm:mb-6">
                <Star className="w-3 sm:w-4 h-3 sm:h-4 mr-2" />
                Available for new projects
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight">
                Hey, I'm <br />
                <span className="text-sky-500">Mariam!</span> ✨
              </h1>

              <p className="text-base sm:text-lg lg:text-xl text-gray-600 mb-6 sm:mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0 px-4 sm:px-0">
                I turn digital chaos into organized bliss and boring brands into eye candy. Virtual assistant by day,
                design wizard by night! 🌙
              </p>

              {/* Buttons - Responsive Stack */}
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start mb-6 sm:mb-8 px-4 sm:px-0">
                <Button size="lg" className="bg-slate-800 hover:bg-slate-900 text-white group w-full sm:w-auto">
                  <span className="hidden sm:inline">Start Your Glow-Up</span>
                  <span className="sm:hidden">Get Started</span>
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>

                <Dialog open={portfolioModalOpen} onOpenChange={setPortfolioModalOpen}>
                  <DialogTrigger asChild>
                    <Button
                      variant="outline"
                      size="lg"
                      className="border-sky-300 text-sky-600 hover:bg-sky-50 bg-transparent w-full sm:w-auto"
                    >
                      <span className="hidden sm:inline">See My Magic ✨</span>
                      <span className="sm:hidden">Portfolio ✨</span>
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="max-w-[95vw] sm:max-w-4xl max-h-[90vh] overflow-y-auto">
                    <DialogHeader>
                      <DialogTitle className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">
                        My Portfolio ✨
                      </DialogTitle>
                      <DialogDescription className="text-gray-600 text-sm sm:text-base">
                        A collection of my favorite projects and designs that made clients go "WOW!" 🎉
                      </DialogDescription>
                    </DialogHeader>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mt-6">
                      {/* Portfolio Items - Responsive Grid */}
                      {[
                        {
                          title: "Brand Identity Design",
                          category: "Graphic Design",
                          description: "Complete rebrand for a tech startup including logo, colors, and style guide.",
                        },
                        {
                          title: "Social Media Campaign",
                          category: "Virtual Assistant",
                          description: "Managed and created content for 3-month social media campaign.",
                        },
                        {
                          title: "Executive Dashboard",
                          category: "Executive Support",
                          description: "Created comprehensive reporting system for C-suite executives.",
                        },
                        {
                          title: "Product Packaging",
                          category: "Graphic Design",
                          description: "Designed packaging that increased product sales by 40%.",
                        },
                        {
                          title: "Email Marketing System",
                          category: "Virtual Assistant",
                          description: "Automated email sequences that boosted engagement by 60%.",
                        },
                        {
                          title: "Presentation Design",
                          category: "Executive Support",
                          description: "Investor pitch deck that helped secure $2M in funding.",
                        },
                      ].map((item, index) => (
                        <Card key={index} className="border-0 shadow-sm hover:shadow-md transition-shadow">
                          <CardHeader className="pb-3">
                            <div className="w-full h-24 sm:h-32 bg-gradient-to-br from-sky-100 to-blue-200 rounded-lg mb-3 sm:mb-4 flex items-center justify-center">
                              <div className="text-center text-gray-500">
                                <div className="w-6 sm:w-8 h-6 sm:h-8 bg-white rounded-full mx-auto mb-1 sm:mb-2"></div>
                                <p className="text-xs">Project Image</p>
                              </div>
                            </div>
                            <Badge className="w-fit bg-sky-100 text-sky-700 hover:bg-sky-200 text-xs">
                              {item.category}
                            </Badge>
                            <CardTitle className="text-base sm:text-lg font-semibold">{item.title}</CardTitle>
                          </CardHeader>
                          <CardContent>
                            <p className="text-xs sm:text-sm text-gray-600">{item.description}</p>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                    <div className="mt-6 text-center">
                      <p className="text-gray-600 mb-4 text-sm sm:text-base">
                        Want to see more? Let's chat about your project!
                      </p>
                      <Button
                        className="bg-slate-800 hover:bg-slate-900 text-white w-full sm:w-auto"
                        onClick={() => setPortfolioModalOpen(false)}
                      >
                        Get In Touch 🚀
                      </Button>
                    </div>
                  </DialogContent>
                </Dialog>

                <Button
                  variant="outline"
                  size="lg"
                  className="border-sky-300 text-sky-600 hover:bg-sky-50 hover:border-sky-400 hover:text-sky-700 bg-transparent transition-all duration-300 hover:scale-105 hover:shadow-md group w-full sm:w-auto"
                  onClick={() => {
                    const link = document.createElement("a")
                    link.href = "/cv.pdf"
                    link.download = "Mariam-Collins-CV.pdf"
                    document.body.appendChild(link)
                    link.click()
                    document.body.removeChild(link)
                  }}
                >
                  <span className="hidden sm:inline">Download CV</span>
                  <span className="sm:hidden">CV</span>
                  <Download className="w-4 h-4 ml-2 group-hover:translate-y-1 transition-transform" />
                </Button>
              </div>

              {/* Quick Stats - Responsive */}
              <div className="flex flex-wrap justify-center lg:justify-start gap-4 sm:gap-6 text-sm text-gray-600 px-4 sm:px-0">
                <div className="text-center">
                  <div className="font-bold text-sky-500 text-lg sm:text-xl">3+</div>
                  <div className="text-xs sm:text-sm">Languages</div>
                </div>
                <div className="text-center">
                  <div className="font-bold text-sky-500 text-lg sm:text-xl">24h</div>
                  <div className="text-xs sm:text-sm">Response Time</div>
                </div>
                <div className="text-center">
                  <div className="font-bold text-sky-500 text-lg sm:text-xl">100%</div>
                  <div className="text-xs sm:text-sm">Satisfaction</div>
                </div>
              </div>
            </div>

            {/* Right Content - Photo - Responsive */}
            <div className="lg:col-span-5 flex justify-center order-1 lg:order-2 mb-8 lg:mb-0">
              <div className="relative">
                <div className="w-64 sm:w-72 md:w-80 h-80 sm:h-88 md:h-96 bg-gradient-to-br from-sky-50 to-blue-100 rounded-3xl flex items-center justify-center border-4 border-white shadow-2xl">
                  <div className="text-center text-gray-500">
                    <div className="w-16 sm:w-20 h-16 sm:h-20 bg-white rounded-full mx-auto mb-3 sm:mb-4 shadow-lg"></div>
                    <p className="text-sm font-medium">Professional Photo</p>
                    <p className="text-xs">Coming Soon!</p>
                  </div>
                </div>
                {/* Floating Elements - Responsive */}
                <div className="absolute -top-2 sm:-top-4 -right-2 sm:-right-4 bg-white rounded-full p-2 sm:p-3 shadow-lg">
                  <Palette className="w-4 sm:w-6 h-4 sm:h-6 text-sky-500" />
                </div>
                <div className="absolute -bottom-2 sm:-bottom-4 -left-2 sm:-left-4 bg-white rounded-full p-2 sm:p-3 shadow-lg">
                  <FileText className="w-4 sm:w-6 h-4 sm:h-6 text-slate-600" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section - Responsive */}
      <section id="about" className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              The Story Behind the Magic 🪄
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-sm sm:text-base">
              Spoiler alert: It involves a lot of coffee and an unhealthy obsession with perfect pixels!
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
            <div>
              <Card className="border-0 shadow-xl bg-white p-6 sm:p-8">
                <div className="space-y-4 sm:space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-10 sm:w-12 h-10 sm:h-12 bg-sky-50 rounded-full flex items-center justify-center">
                      <span className="text-xl sm:text-2xl">👋</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 text-sm sm:text-base">Nice to meet you!</h3>
                      <p className="text-xs sm:text-sm text-gray-600">Your new favorite work buddy</p>
                    </div>
                  </div>

                  <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                    Every brand has a voice and every inbox has potential (even that scary one with 10,000 unread emails
                    😅). I'm your friendly neighborhood virtual assistant who happens to be slightly obsessed with
                    making everything beautiful and functional.
                  </p>

                  <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                    I take the tasks that make you want to hide under a blanket and transform them into streamlined
                    systems that actually spark joy. Think Marie Kondo meets your favorite designer! ✨
                  </p>
                </div>
              </Card>
            </div>

            <div className="space-y-4 sm:space-y-6">
              <div className="bg-sky-50 rounded-2xl p-4 sm:p-6">
                <h4 className="font-semibold text-gray-900 mb-3 sm:mb-4 text-sm sm:text-base">
                  What Makes Me Different? 🌟
                </h4>
                <ul className="space-y-2 sm:space-y-3">
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-sky-400 rounded-full mt-2"></div>
                    <span className="text-gray-600 text-sm sm:text-base">
                      I speak three languages (organizing chaos is universal!)
                    </span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-sky-400 rounded-full mt-2"></div>
                    <span className="text-gray-600 text-sm sm:text-base">
                      Creative meets corporate - I get both worlds
                    </span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-sky-400 rounded-full mt-2"></div>
                    <span className="text-gray-600 text-sm sm:text-base">Deadlines are my love language 💕</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-sky-400 rounded-full mt-2"></div>
                    <span className="text-gray-600 text-sm sm:text-base">
                      Professional but never boring (life's too short!)
                    </span>
                  </li>
                </ul>
              </div>

              {/* Core Values Pills - Responsive */}
              <div>
                <h4 className="font-semibold text-gray-900 mb-3 sm:mb-4 text-sm sm:text-base">
                  My M.A.R.I.A.M Values 💎
                </h4>
                <div className="flex flex-wrap gap-2">
                  {[
                    { letter: "M", value: "Mastery", emoji: "🎯" },
                    { letter: "A", value: "Accountability", emoji: "✅" },
                    { letter: "R", value: "Respect", emoji: "🤝" },
                    { letter: "I", value: "Innovation", emoji: "💡" },
                    { letter: "A", value: "Authenticity", emoji: "💯" },
                    { letter: "M", value: "Momentum", emoji: "🚀" },
                  ].map((item, index) => (
                    <Badge
                      key={index}
                      className="bg-sky-50 text-slate-700 hover:bg-sky-100 px-2 sm:px-3 py-1 text-xs sm:text-sm"
                    >
                      {item.emoji} {item.value}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services - Fully Responsive */}
      <section id="services" className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              How I Make Magic Happen ✨
            </h2>
            <p className="text-gray-600 text-sm sm:text-base">Three ways to make your work life infinitely better!</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {/* Service 1 - Virtual Assistant */}
            <div className="group">
              <Card className="border-0 shadow-lg hover:shadow-2xl transition-all duration-300 group-hover:scale-105 h-full">
                <CardHeader className="text-center pb-4">
                  <div className="w-12 sm:w-16 h-12 sm:h-16 bg-gradient-to-br from-sky-400 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-3 sm:mb-4 group-hover:rotate-6 transition-transform">
                    <FileText className="w-6 sm:w-8 h-6 sm:h-8 text-white" />
                  </div>
                  <CardTitle className="text-lg sm:text-xl font-bold text-gray-900">Virtual Assistant</CardTitle>
                  <CardDescription className="text-slate-600 font-medium text-sm sm:text-base">
                    Your Digital Life, Organized! 📧
                  </CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <div className="space-y-2 sm:space-y-3 mb-4 sm:mb-6">
                    <div className="bg-gray-50 rounded-lg p-2 sm:p-3 text-xs sm:text-sm text-gray-600">
                      Email taming & inbox zen
                    </div>
                    <div className="bg-gray-50 rounded-lg p-2 sm:p-3 text-xs sm:text-sm text-gray-600">
                      Calendar wizardry
                    </div>
                    <div className="bg-gray-50 rounded-lg p-2 sm:p-3 text-xs sm:text-sm text-gray-600">
                      Meeting prep magic
                    </div>
                    <div className="bg-gray-50 rounded-lg p-2 sm:p-3 text-xs sm:text-sm text-gray-600">
                      Document creation
                    </div>
                  </div>
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button
                        variant="outline"
                        className="w-full border-sky-300 text-sky-600 hover:bg-sky-50 bg-transparent text-sm"
                      >
                        Learn More
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-[95vw] sm:max-w-2xl max-h-[90vh] overflow-y-auto">
                      <DialogHeader>
                        <DialogTitle className="text-xl sm:text-2xl font-bold text-gray-900 flex items-center">
                          <FileText className="w-5 sm:w-6 h-5 sm:h-6 mr-2 text-sky-500" />
                          Virtual Assistant Services
                        </DialogTitle>
                        <DialogDescription className="text-gray-600 text-sm sm:text-base">
                          Let me handle the digital chaos so you can focus on what you do best! 🎯
                        </DialogDescription>
                      </DialogHeader>
                      <div className="space-y-4 sm:space-y-6 mt-6">
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-3 text-sm sm:text-base">
                            What I'll Do For You:
                          </h4>
                          <ul className="space-y-2 text-gray-600 text-sm sm:text-base">
                            <li className="flex items-start space-x-2">
                              <span className="text-sky-500 mt-1">•</span>
                              <span>Transform your chaotic inbox into an organized masterpiece</span>
                            </li>
                            <li className="flex items-start space-x-2">
                              <span className="text-sky-500 mt-1">•</span>
                              <span>Schedule meetings without the back-and-forth email dance</span>
                            </li>
                            <li className="flex items-start space-x-2">
                              <span className="text-sky-500 mt-1">•</span>
                              <span>Create documents that actually make sense (revolutionary, I know!)</span>
                            </li>
                            <li className="flex items-start space-x-2">
                              <span className="text-sky-500 mt-1">•</span>
                              <span>Keep your CRM updated so you never lose track of important contacts</span>
                            </li>
                            <li className="flex items-start space-x-2">
                              <span className="text-sky-500 mt-1">•</span>
                              <span>Handle travel coordination like a pro travel agent</span>
                            </li>
                          </ul>
                        </div>
                        <div className="bg-sky-50 rounded-lg p-3 sm:p-4">
                          <h4 className="font-semibold text-gray-900 mb-2 text-sm sm:text-base">Perfect For:</h4>
                          <p className="text-gray-600 text-xs sm:text-sm">
                            Entrepreneurs, consultants, and busy professionals who need reliable support without the
                            overhead of a full-time employee.
                          </p>
                        </div>
                        <div className="text-center">
                          <Button className="bg-slate-800 hover:bg-slate-900 text-white w-full sm:w-auto">
                            Let's Get Started! 🚀
                          </Button>
                        </div>
                      </div>
                    </DialogContent>
                  </Dialog>
                </CardContent>
              </Card>
            </div>

            {/* Service 2 - Graphic Design */}
            <div className="group">
              <Card className="border-0 shadow-lg hover:shadow-2xl transition-all duration-300 group-hover:scale-105 h-full">
                <CardHeader className="text-center pb-4">
                  <div className="w-12 sm:w-16 h-12 sm:h-16 bg-gradient-to-br from-blue-500 to-slate-600 rounded-2xl flex items-center justify-center mx-auto mb-3 sm:mb-4 group-hover:rotate-6 transition-transform">
                    <Palette className="w-6 sm:w-8 h-6 sm:h-8 text-white" />
                  </div>
                  <CardTitle className="text-lg sm:text-xl font-bold text-gray-900">Graphic Design</CardTitle>
                  <CardDescription className="text-slate-600 font-medium text-sm sm:text-base">
                    Pretty Things That Work! 🎨
                  </CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <div className="space-y-2 sm:space-y-3 mb-4 sm:mb-6">
                    <div className="bg-gray-50 rounded-lg p-2 sm:p-3 text-xs sm:text-sm text-gray-600">
                      Social media that pops
                    </div>
                    <div className="bg-gray-50 rounded-lg p-2 sm:p-3 text-xs sm:text-sm text-gray-600">
                      Flyers people actually read
                    </div>
                    <div className="bg-gray-50 rounded-lg p-2 sm:p-3 text-xs sm:text-sm text-gray-600">
                      Packaging perfection
                    </div>
                    <div className="bg-gray-50 rounded-lg p-2 sm:p-3 text-xs sm:text-sm text-gray-600">
                      Canva + personal flair
                    </div>
                  </div>
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button
                        variant="outline"
                        className="w-full border-sky-300 text-sky-600 hover:bg-sky-50 bg-transparent text-sm"
                      >
                        See Portfolio
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-[95vw] sm:max-w-2xl max-h-[90vh] overflow-y-auto">
                      <DialogHeader>
                        <DialogTitle className="text-xl sm:text-2xl font-bold text-gray-900 flex items-center">
                          <Palette className="w-5 sm:w-6 h-5 sm:h-6 mr-2 text-sky-500" />
                          Graphic Design Services
                        </DialogTitle>
                        <DialogDescription className="text-gray-600 text-sm sm:text-base">
                          Making your brand look as amazing as it actually is! ✨
                        </DialogDescription>
                      </DialogHeader>
                      <div className="space-y-4 sm:space-y-6 mt-6">
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-3 text-sm sm:text-base">
                            Design Magic I Create:
                          </h4>
                          <ul className="space-y-2 text-gray-600 text-sm sm:text-base">
                            <li className="flex items-start space-x-2">
                              <span className="text-sky-500 mt-1">•</span>
                              <span>Social media graphics that stop the scroll</span>
                            </li>
                            <li className="flex items-start space-x-2">
                              <span className="text-sky-500 mt-1">•</span>
                              <span>Flyers and brochures people actually want to keep</span>
                            </li>
                            <li className="flex items-start space-x-2">
                              <span className="text-sky-500 mt-1">•</span>
                              <span>Product packaging that makes customers go "ooh!"</span>
                            </li>
                            <li className="flex items-start space-x-2">
                              <span className="text-sky-500 mt-1">•</span>
                              <span>Presentations that don't put people to sleep</span>
                            </li>
                            <li className="flex items-start space-x-2">
                              <span className="text-sky-500 mt-1">•</span>
                              <span>Brand identity that tells your story perfectly</span>
                            </li>
                          </ul>
                        </div>
                        <div className="bg-sky-50 rounded-lg p-3 sm:p-4">
                          <h4 className="font-semibold text-gray-900 mb-2 text-sm sm:text-base">
                            My Design Philosophy:
                          </h4>
                          <p className="text-gray-600 text-xs sm:text-sm">
                            Beautiful designs that actually work. No pretty pictures that don't convert - every design
                            has a purpose and gets results!
                          </p>
                        </div>
                        <div className="text-center">
                          <Button className="bg-slate-800 hover:bg-slate-900 text-white w-full sm:w-auto">
                            Let's Create Something Beautiful! 🎨
                          </Button>
                        </div>
                      </div>
                    </DialogContent>
                  </Dialog>
                </CardContent>
              </Card>
            </div>

            {/* Service 3 - Executive Support */}
            <div className="group md:col-span-2 lg:col-span-1">
              <Card className="border-0 shadow-lg hover:shadow-2xl transition-all duration-300 group-hover:scale-105 h-full">
                <CardHeader className="text-center pb-4">
                  <div className="w-12 sm:w-16 h-12 sm:h-16 bg-gradient-to-br from-slate-600 to-slate-800 rounded-2xl flex items-center justify-center mx-auto mb-3 sm:mb-4 group-hover:rotate-6 transition-transform">
                    <Users className="w-6 sm:w-8 h-6 sm:h-8 text-white" />
                  </div>
                  <CardTitle className="text-lg sm:text-xl font-bold text-gray-900">Executive Support</CardTitle>
                  <CardDescription className="text-slate-600 font-medium text-sm sm:text-base">
                    Your Secret Weapon! 🦸‍♀️
                  </CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <div className="space-y-2 sm:space-y-3 mb-4 sm:mb-6">
                    <div className="bg-gray-50 rounded-lg p-2 sm:p-3 text-xs sm:text-sm text-gray-600">
                      Marie Kondo-level organization
                    </div>
                    <div className="bg-gray-50 rounded-lg p-2 sm:p-3 text-xs sm:text-sm text-gray-600">
                      Deep research & reports
                    </div>
                    <div className="bg-gray-50 rounded-lg p-2 sm:p-3 text-xs sm:text-sm text-gray-600">
                      Confidential communications
                    </div>
                    <div className="bg-gray-50 rounded-lg p-2 sm:p-3 text-xs sm:text-sm text-gray-600">
                      Workflow optimization
                    </div>
                  </div>
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button
                        variant="outline"
                        className="w-full border-sky-300 text-sky-600 hover:bg-sky-50 bg-transparent text-sm"
                      >
                        Get Started
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-[95vw] sm:max-w-2xl max-h-[90vh] overflow-y-auto">
                      <DialogHeader>
                        <DialogTitle className="text-xl sm:text-2xl font-bold text-gray-900 flex items-center">
                          <Users className="w-5 sm:w-6 h-5 sm:h-6 mr-2 text-sky-500" />
                          Executive Support Services
                        </DialogTitle>
                        <DialogDescription className="text-gray-600 text-sm sm:text-base">
                          Your strategic partner for high-level success! 🎯
                        </DialogDescription>
                      </DialogHeader>
                      <div className="space-y-4 sm:space-y-6 mt-6">
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-3 text-sm sm:text-base">
                            Executive-Level Support:
                          </h4>
                          <ul className="space-y-2 text-gray-600 text-sm sm:text-base">
                            <li className="flex items-start space-x-2">
                              <span className="text-sky-500 mt-1">•</span>
                              <span>Strategic calendar management and priority optimization</span>
                            </li>
                            <li className="flex items-start space-x-2">
                              <span className="text-sky-500 mt-1">•</span>
                              <span>Comprehensive research and detailed reporting</span>
                            </li>
                            <li className="flex items-start space-x-2">
                              <span className="text-sky-500 mt-1">•</span>
                              <span>Confidential communication handling with discretion</span>
                            </li>
                            <li className="flex items-start space-x-2">
                              <span className="text-sky-500 mt-1">•</span>
                              <span>Workflow analysis and process improvement</span>
                            </li>
                            <li className="flex items-start space-x-2">
                              <span className="text-sky-500 mt-1">•</span>
                              <span>Project coordination and stakeholder management</span>
                            </li>
                          </ul>
                        </div>
                        <div className="bg-sky-50 rounded-lg p-3 sm:p-4">
                          <h4 className="font-semibold text-gray-900 mb-2 text-sm sm:text-base">Ideal For:</h4>
                          <p className="text-gray-600 text-xs sm:text-sm">
                            C-suite executives, founders, and senior leaders who need strategic support to maximize
                            their impact and efficiency.
                          </p>
                        </div>
                        <div className="text-center">
                          <Button className="bg-slate-800 hover:bg-slate-900 text-white w-full sm:w-auto">
                            Let's Elevate Your Success! 🚀
                          </Button>
                        </div>
                      </div>
                    </DialogContent>
                  </Dialog>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ - Responsive */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Got Questions? I've Got Answers! 🤔
            </h2>
            <p className="text-gray-600 text-sm sm:text-base">Everything you need to know about working together</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            <div className="space-y-4 sm:space-y-6">
              <Card className="border-0 shadow-sm hover:shadow-md transition-shadow">
                <CardHeader>
                  <CardTitle className="text-base sm:text-lg flex items-center text-gray-900">
                    <Calendar className="w-4 sm:w-5 h-4 sm:h-5 mr-3 text-sky-500" />
                    How do we get started?
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm sm:text-base">
                    Just shoot me an email! I'll reply within 24-48 hours to schedule our discovery call. We'll chat
                    about your needs and find the perfect fit! ☕
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-sm hover:shadow-md transition-shadow">
                <CardHeader>
                  <CardTitle className="text-base sm:text-lg flex items-center text-gray-900">
                    <Clock className="w-4 sm:w-5 h-4 sm:h-5 mr-3 text-sky-500" />
                    What's your turnaround time?
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-gray-600 space-y-1 text-sm sm:text-base">
                    <p>• Designs: 2-3 business days</p>
                    <p>• Admin tasks: 24-hour response</p>
                    <p>• Executive support: Flexible scheduling</p>
                    <p>• Rush jobs: Just ask! 🚀</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-sm hover:shadow-md transition-shadow">
                <CardHeader>
                  <CardTitle className="text-base sm:text-lg flex items-center text-gray-900">
                    <Users className="w-4 sm:w-5 h-4 sm:h-5 mr-3 text-sky-500" />
                    What tools do you use?
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm sm:text-base">
                    Google Workspace, Canva, Trello, Zoom, and more! I'm super flexible and adapt to your preferred
                    tools. Tech-savvy is my middle name! 💻
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-4 sm:space-y-6">
              <Card className="border-0 shadow-sm hover:shadow-md transition-shadow">
                <CardHeader>
                  <CardTitle className="text-base sm:text-lg flex items-center text-gray-900">
                    <FileText className="w-4 sm:w-5 h-4 sm:h-5 mr-3 text-sky-500" />
                    What services do you offer?
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm sm:text-base">
                    Virtual assistance, graphic design, and executive support! One-off projects or ongoing partnerships
                    - whatever works for you! ✨
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-sm hover:shadow-md transition-shadow">
                <CardHeader>
                  <CardTitle className="text-base sm:text-lg flex items-center text-gray-900">
                    <CreditCard className="w-4 sm:w-5 h-4 sm:h-5 mr-3 text-sky-500" />
                    How do payments work?
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm sm:text-base">
                    Bank transfers work best! Some projects need a deposit upfront, with the balance due on delivery.
                    Simple and straightforward! 💳
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-sm hover:shadow-md transition-shadow">
                <CardHeader>
                  <CardTitle className="text-base sm:text-lg flex items-center text-gray-900">
                    <Eye className="w-4 sm:w-5 h-4 sm:h-5 mr-3 text-sky-500" />
                    Can I see your work?
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm sm:text-base">
                    Email me and I'll send over my portfolio. I also share updates on LinkedIn and Instagram! 📸
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Contact - Fully Responsive */}
      <section
        id="contact"
        className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-700 via-blue-600 to-sky-500"
      >
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
            <div className="text-white order-2 lg:order-1">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
                Ready to Start Our Adventure? 🚀
              </h2>
              <p className="text-lg sm:text-xl text-sky-100 mb-6 sm:mb-8 leading-relaxed">
                Let's turn your to-do list into a ta-da list! Drop me a line and let's create something amazing
                together.
              </p>

              <div className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
                <div className="flex items-center space-x-3 sm:space-x-4">
                  <div className="w-10 sm:w-12 h-10 sm:h-12 bg-white/20 rounded-full flex items-center justify-center">
                    <Mail className="w-5 sm:w-6 h-5 sm:h-6" />
                  </div>
                  <div>
                    <p className="font-medium text-sm sm:text-base">Email Me!</p>
                    <p className="text-sky-100 text-sm sm:text-base break-all">mariamcollinslawal@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-center space-x-3 sm:space-x-4">
                  <div className="w-10 sm:w-12 h-10 sm:h-12 bg-white/20 rounded-full flex items-center justify-center">
                    <Phone className="w-5 sm:w-6 h-5 sm:h-6" />
                  </div>
                  <div>
                    <p className="font-medium text-sm sm:text-base">Call Me Maybe?</p>
                    <p className="text-sky-100 text-sm sm:text-base">07026501406 • 09136605197</p>
                  </div>
                </div>

                <div className="flex items-center space-x-3 sm:space-x-4">
                  <div className="w-10 sm:w-12 h-10 sm:h-12 bg-white/20 rounded-full flex items-center justify-center">
                    <Linkedin className="w-5 sm:w-6 h-5 sm:h-6" />
                  </div>
                  <div>
                    <p className="font-medium text-sm sm:text-base">Let's Connect!</p>
                    <p className="text-sky-100 text-sm sm:text-base">lawal-mariam-collins</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-2xl order-1 lg:order-2">
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">Let's Chat! ☕</h3>
              <form ref={formRef} onSubmit={handleFormSubmit} className="space-y-4 sm:space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Your Name</label>
                  <input
                    type="text"
                    name="name"
                    required
                    disabled={isSubmitting}
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-sky-400 focus:border-transparent text-sm sm:text-base disabled:opacity-50 disabled:cursor-not-allowed"
                    placeholder="What should I call you?"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                  <input
                    type="email"
                    name="email"
                    required
                    disabled={isSubmitting}
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-sky-400 focus:border-transparent text-sm sm:text-base disabled:opacity-50 disabled:cursor-not-allowed"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">What's on your mind?</label>
                  <textarea
                    rows={4}
                    name="message"
                    required
                    disabled={isSubmitting}
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-sky-400 focus:border-transparent text-sm sm:text-base resize-none disabled:opacity-50 disabled:cursor-not-allowed"
                    placeholder="Tell me about your project or just say hi! 👋"
                  ></textarea>
                </div>

                {/* Formspree hidden fields */}
                <input type="hidden" name="_subject" value="New contact from portfolio website!" />
                <input type="hidden" name="_next" value="https://your-website.com/thank-you" />
                <input type="hidden" name="_captcha" value="false" />

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-slate-800 hover:bg-slate-900 text-white py-2 sm:py-3 text-sm sm:text-base disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                      Sending...
                    </>
                  ) : (
                    "Send My Message! ✨"
                  )}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Success Modal */}
      <Dialog open={successModalOpen} onOpenChange={setSuccessModalOpen}>
        <DialogContent className="max-w-[95vw] sm:max-w-md">
          <DialogHeader className="text-center">
            <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
              <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
            </div>
            <DialogTitle className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">Message Sent! 🎉</DialogTitle>
            <DialogDescription className="text-gray-600 text-sm sm:text-base">
              Thanks for reaching out! I'll get back to you within 24-48 hours. Can't wait to chat about your project!
              ☕
            </DialogDescription>
          </DialogHeader>
          <div className="flex flex-col sm:flex-row gap-3 mt-6">
            <Button
              onClick={() => setSuccessModalOpen(false)}
              className="bg-slate-800 hover:bg-slate-900 text-white flex-1"
            >
              Awesome! 🚀
            </Button>
            <Button
              variant="outline"
              onClick={() => {
                setSuccessModalOpen(false)
                scrollToSection("services")
              }}
              className="border-sky-300 text-sky-600 hover:bg-sky-50 flex-1"
            >
              Explore Services
            </Button>
          </div>
        </DialogContent>
      </Dialog>

      {/* Footer - Responsive */}
      <footer className="py-6 sm:py-8 px-4 sm:px-6 bg-slate-900 text-sky-100 text-center">
        <div className="max-w-6xl mx-auto">
          <p className="text-xs sm:text-sm">
            © 2025 Matte & Milk. Made with lots of ☕, endless ✨, and a sprinkle of magic! 🪄
          </p>
        </div>
      </footer>
    </div>
  )
}
