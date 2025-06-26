"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

import { Phone, Mail, MapPin, Database, Users, Target, Brain, ChevronDown, Search } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { useEffect, useState } from "react"

export default function HomePage() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <div className="min-h-screen bg-white font-sans">
      {/* Header */}
      <header className="bg-white shadow-sm border-b sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-2">
              <Image src="/logo.jpg" alt="Inchoatus Logo" width={150} height={150} />
            </div>
            <nav className="hidden md:flex space-x-8">
              <Link
                href="#about"
                className="text-gray-700 hover:text-gray-900 font-medium transition-colors duration-200"
              >
                About
              </Link>
              <Link
                href="#services"
                className="text-gray-700 hover:text-gray-900 font-medium transition-colors duration-200"
              >
                Services
              </Link>
              <Link
                href="#work"
                className="text-gray-700 hover:text-gray-900 font-medium transition-colors duration-200"
              >
                Work
              </Link>
              <Link
                href="#contact"
                className="text-gray-700 hover:text-gray-900 font-medium transition-colors duration-200"
              >
                Contact
              </Link>
            </nav>
            <div className="flex items-center space-x-4">
              <Search className="h-5 w-5 text-gray-600 cursor-pointer hover:text-gray-900 transition-colors duration-200" />
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-white py-20 lg:py-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div
              className={`transform transition-all duration-1000 ${isVisible ? "translate-x-0 opacity-100" : "-translate-x-10 opacity-0"}`}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-8 leading-tight">
                Your Data Consultant &<span className="block">Evaluation Partner</span>
              </h1>
              <p className="text-xl text-gray-600 mb-10 leading-relaxed max-w-lg">
                Supporting organisations to use data to improve outcomes and enable evidence-based decision making.
              </p>
              <Button
                size="lg"
                className="text-white px-8 py-4 text-lg font-semibold rounded-full hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
                style={{ backgroundColor: "#38174f" }}
              >
                Work with me
              </Button>

              <div className="mt-16">
                <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4">OUR SERVICES</p>
                <ChevronDown className="h-6 w-6 text-gray-400 animate-bounce" />
              </div>
            </div>

            <div
              className={`relative transform transition-all duration-1000 delay-300 ${isVisible ? "translate-x-0 opacity-100" : "translate-x-10 opacity-0"}`}
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-100 to-purple-50 rounded-full transform rotate-6 scale-105"></div>
                <div className="relative bg-white rounded-full p-8 shadow-2xl">
                  <Image
                    src="/placeholder.svg?height=500&width=600"
                    alt="Data analytics and insights visualization"
                    width={600}
                    height={500}
                    className="rounded-full w-full h-auto"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Our Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We offer comprehensive data consulting services to meet all your business intelligence needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Database,
                title: "Data Services",
                description:
                  "Comprehensive data analysis, cleaning, and transformation services to help you make sense of your information.",
                color: "blue",
                delay: "0",
              },
              {
                icon: Target,
                title: "Evaluation Design",
                description:
                  "Strategic evaluation frameworks and methodologies to measure impact and demonstrate value.",
                color: "green",
                delay: "100",
              },
              {
                icon: Users,
                title: "Research Support",
                description:
                  "End-to-end research support from design through to analysis and reporting for evidence-based insights.",
                color: "purple",
                delay: "200",
              },
              {
                icon: Brain,
                title: "Strategic Consultancy",
                description:
                  "High-level strategic advice on data strategy, organizational learning, and evidence-based decision making.",
                color: "orange",
                delay: "300",
              },
            ].map((service, index) => (
              <Card
                key={index}
                className={`hover:shadow-xl transition-all duration-500 text-center group hover:-translate-y-2 animate-fade-in-up`}
                style={{ animationDelay: `${service.delay}ms` }}
              >
                <CardHeader>
                  <div
                    className={`w-16 h-16 ${
                      service.color === "blue"
                        ? "bg-blue-100"
                        : service.color === "green"
                          ? "bg-green-100"
                          : service.color === "purple"
                            ? "bg-purple-100"
                            : "bg-orange-100"
                    } rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <service.icon
                      className={`h-8 w-8 ${
                        service.color === "blue"
                          ? "text-blue-600"
                          : service.color === "green"
                            ? "text-green-600"
                            : service.color === "purple"
                              ? "text-purple-600"
                              : "text-orange-600"
                      }`}
                    />
                  </div>
                  <CardTitle className="text-xl font-bold">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 leading-relaxed">{service.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Work Section */}
      <section id="work" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Recent Work</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real results from real clients. See how we've helped businesses transform their data into actionable
              insights.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                badge: "Healthcare",
                title: "Patient Outcome Analysis",
                description:
                  "Comprehensive analysis of patient data to identify factors improving treatment outcomes and care quality.",
                metrics: [
                  { label: "Outcome Improvement", value: "+25%" },
                  { label: "Data Points Analyzed", value: "50,000+" },
                  { label: "Project Duration", value: "8 weeks" },
                ],
                delay: "0",
              },
              {
                badge: "Charity",
                title: "Impact Evaluation Framework",
                description:
                  "Designed and implemented evaluation methodology to measure program effectiveness and social impact.",
                metrics: [
                  { label: "Programs Evaluated", value: "15" },
                  { label: "Beneficiaries Tracked", value: "2,500+" },
                  { label: "ROI Demonstrated", value: "3.2:1" },
                ],
                delay: "100",
              },
              {
                badge: "Research",
                title: "Multi-Site Research Study",
                description:
                  "Led data collection and analysis for longitudinal research study across multiple locations and demographics.",
                metrics: [
                  { label: "Study Sites", value: "12" },
                  { label: "Participants", value: "1,200" },
                  { label: "Data Quality", value: "98%" },
                ],
                delay: "200",
              },
            ].map((project, index) => (
              <Card
                key={index}
                className={`hover:shadow-xl transition-all duration-500 group hover:-translate-y-2 animate-fade-in-up`}
                style={{ animationDelay: `${project.delay}ms` }}
              >
                <CardHeader>
                  <Badge
                    className={`mb-4 w-fit ${
                      project.badge === "Healthcare"
                        ? "bg-blue-100 text-blue-800"
                        : project.badge === "Charity"
                          ? "bg-green-100 text-green-800"
                          : "bg-purple-100 text-purple-800"
                    }`}
                  >
                    {project.badge}
                  </Badge>
                  <CardTitle className="text-xl font-bold">{project.title}</CardTitle>
                  <CardDescription className="text-gray-600 leading-relaxed">{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {project.metrics.map((metric, metricIndex) => (
                      <div key={metricIndex} className="flex justify-between items-center">
                        <span className="text-sm text-gray-600">{metric.label}</span>
                        <span className="font-semibold text-green-600">{metric.value}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button
              size="lg"
              variant="outline"
              className="border-gray-300 text-gray-700 hover:bg-gray-50 bg-transparent px-8 py-4 rounded-full hover:scale-105 transition-all duration-300"
            >
              View All Work
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Work with me</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Ready to unlock insights from your data? Let's discuss how I can help you achieve your goals through
              evidence-based analysis and strategic evaluation.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {[
              {
                icon: Phone,
                title: "Call",
                primary: "00000000",
                secondary: "Available for initial consultations",
              },
              {
                icon: Mail,
                title: "Email",
                primary: "hello@inchoatus.co.uk",
                secondary: "I respond within 24 hours",
              },
              {
                icon: MapPin,
                title: "Meet",
                primary: "Leeds & surrounding areas",
                secondary: "Happy to meet for coffee",
              },
            ].map((contact, index) => (
              <div key={index} className="text-center group">
                <div className="bg-gray-800 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-gray-700 transition-colors duration-300 group-hover:scale-110 transform">
                  <contact.icon className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-2xl font-semibold text-white mb-3">{contact.title}</h3>
                <p className="text-gray-300 text-lg mb-2">{contact.primary}</p>
                <p className="text-gray-400 text-sm">{contact.secondary}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-white py-8" style={{ backgroundColor: "#38174f" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-3 mb-6">
                <Image src="/white-logo.png" alt="Inchoatus Logo" width={100} height={100} className="h-12 w-auto" />
                <span className="text-2xl font-bold text-white">Inchoatus Ltd</span>
              </div>
              <div className="text-sm text-white space-y-2 opacity-90">
                <p>Inchoatus Ltd | Company No: 16533810 | Registered in England and Wales</p>
                <p>&copy; {new Date().getFullYear()} Inchoatus Ltd. All rights reserved.</p>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4 text-white">Contact</h3>
              <ul className="space-y-2 text-white opacity-90">
                <li>00000000</li>
                <li>hello@inchoatus.co.uk</li>
                <li>Leeds, UK</li>
              </ul>
            </div>
          </div>
        </div>
      </footer>

      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 0.6s ease-out forwards;
        }
      `}</style>
    </div>
  )
}
