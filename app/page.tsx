"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Phone, Mail, MapPin, Database, Users, Target, Brain } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white font-sans">
      {/* Header */}
      <header className="shadow-sm border-b" style={{ backgroundColor: "#38174f" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-2">
              <Image src="/white-logo.png" alt="Inchoatus Logo" width={100} height={100} className="h-16 w-auto" />
            </div>
            <nav className="flex space-x-8">
              <Link href="#about" className="text-white hover:text-gray-300 font-medium transition-colors">
                About
              </Link>
              <Link href="#services" className="text-white hover:text-gray-300 font-medium transition-colors">
                Services
              </Link>
              <Link href="#work" className="text-white hover:text-gray-300 font-medium transition-colors">
                Work
              </Link>
              <Link href="#contact" className="text-white hover:text-gray-300 font-medium transition-colors">
                Contact
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Your Data Consultant & Evaluation Partner
              </h1>
              <div className="space-y-4 text-lg text-gray-600 leading-relaxed">
                <p>
                  Supporting organisations to use data to improve outcomes and enable evidence-based decision making.
                </p>
                <p>
                  We support with data analysis, evaluation design, research support, project management and strategic
                  data consultancy.
                </p>
                <p>
                  We work with charities, public sector organisations, healthcare providers, and research institutions
                  to data with outcomes that make a difference.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 mt-8">
                <Button size="lg" className="text-white" style={{ backgroundColor: "#38174f" }}>
                  Work with me
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="text-white hover:text-white bg-transparent"
                  style={{ borderColor: "#38174f", color: "#38174f", backgroundColor: "transparent" }}
                  onMouseEnter={(e) => (e.target.style.backgroundColor = "#38174f")}
                  onMouseLeave={(e) => (e.target.style.backgroundColor = "transparent")}
                >
                  View my work
                </Button>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/placeholder.svg?height=500&width=600"
                alt="Data analytics and insights visualization"
                width={600}
                height={500}
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="hover:shadow-lg transition-shadow text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-blue-200 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Database className="h-8 w-8 text-blue-800" />
                </div>
                <CardTitle className="text-xl">Data Services</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">
                  Comprehensive data analysis, cleaning, and transformation services to help you make sense of your
                  information.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-green-200 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Target className="h-8 w-8 text-green-800" />
                </div>
                <CardTitle className="text-xl">Evaluation Design</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">
                  Strategic evaluation frameworks and methodologies to measure impact and demonstrate value.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow text-center">
              <CardHeader>
                <div
                  className="w-16 h-16 rounded-lg flex items-center justify-center mx-auto mb-4"
                  style={{ backgroundColor: "#e9d5f0" }}
                >
                  <Users className="h-8 w-8" style={{ color: "#38174f" }} />
                </div>
                <CardTitle className="text-xl">Research Support</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">
                  End-to-end research support from design through to analysis and reporting for evidence-based insights.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-orange-200 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Brain className="h-8 w-8 text-orange-800" />
                </div>
                <CardTitle className="text-xl">Strategic Consultancy</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">
                  High-level strategic advice on data strategy, organizational learning, and evidence-based decision
                  making.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Recent Work Section */}
      <section id="work" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Recent work:</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Badge className="mb-2 bg-blue-200 text-blue-900 w-fit">Healthcare</Badge>
                <CardTitle>Patient Outcome Analysis</CardTitle>
                <CardDescription>
                  Comprehensive analysis of patient data to identify factors improving treatment outcomes and care
                  quality.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Outcome Improvement</span>
                    <span className="font-semibold text-green-700">+25%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Data Points Analyzed</span>
                    <span className="font-semibold">50,000+</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Project Duration</span>
                    <span className="font-semibold">8 weeks</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Badge className="mb-2 bg-green-200 text-green-900 w-fit">Charity</Badge>
                <CardTitle>Impact Evaluation Framework</CardTitle>
                <CardDescription>
                  Designed and implemented evaluation methodology to measure program effectiveness and social impact.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Programs Evaluated</span>
                    <span className="font-semibold text-green-700">15</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Beneficiaries Tracked</span>
                    <span className="font-semibold">2,500+</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">ROI Demonstrated</span>
                    <span className="font-semibold text-green-700">3.2:1</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Badge className="mb-2 bg-purple-200 text-purple-900 w-fit">Research</Badge>
                <CardTitle>Multi-Site Research Study</CardTitle>
                <CardDescription>
                  Led data collection and analysis for longitudinal research study across multiple locations and
                  demographics.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Study Sites</span>
                    <span className="font-semibold text-green-700">12</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Participants</span>
                    <span className="font-semibold">1,200</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Data Quality</span>
                    <span className="font-semibold text-green-700">98%</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Button
              size="lg"
              variant="outline"
              className="border-gray-300 text-gray-700 hover:bg-gray-50 bg-transparent"
            >
              View All Work
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Work with me</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Ready to unlock insights from your data? Let's discuss how I can help you achieve your goals through
              evidence-based analysis and strategic evaluation.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="bg-gray-800 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Call</h3>
              <p className="text-gray-300">+44 7552 081 278</p>
              <p className="text-gray-300 text-sm">Available for initial consultations</p>
            </div>

            <div className="text-center">
              <div className="bg-gray-800 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Email</h3>
              <p className="text-gray-300">hello@inchoatus.co.uk</p>
              <p className="text-gray-300 text-sm">I respond within 24 hours</p>
            </div>

            <div className="text-center">
              <div className="bg-gray-800 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Meet</h3>
              <p className="text-gray-300">Leeds & surrounding areas</p>
              <p className="text-gray-300 text-sm">Happy to meet for coffee</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-white py-6" style={{ backgroundColor: "#38174f" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <Image src="/white-logo.png" alt="Inchoatus Logo" width={100} height={100} className="h-16 w-auto" />
                <span className="text-2xl font-bold text-white">Inchoatus Ltd</span>
              </div>
              <div className="text-sm text-white space-y-1">
                <p>Inchoatus Ltd | Company No: 16533810 | Registered in England and Wales</p>
                <p>&copy; {new Date().getFullYear()} Inchoatus Ltd. All rights reserved.</p>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4 text-white">Contact</h3>
              <ul className="space-y-2 text-white">
                <li>+44 7552 081 278</li>
                <li>hello@inchoatus.co.uk</li>
                <li>Leeds, UK</li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
