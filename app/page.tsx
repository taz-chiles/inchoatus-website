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
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-2">
              <Image src="/logo.jpg" alt="Inchoatus Logo" width={200} height={200} className="h-16 w-auto" />
            </div>
            <nav className="flex space-x-8">
              <Link href="#about" className="text-gray-700 hover:text-black font-medium">
                About
              </Link>
              <Link href="#services" className="text-gray-700 hover:text-black font-medium">
                Services
              </Link>
              <Link href="#work" className="text-gray-700 hover:text-black font-medium">
                Work
              </Link>
              <Link href="#contact" className="text-gray-700 hover:text-black font-medium">
                Contact
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-50 to-gray-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Tazmin Chiles</h1>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-700 mb-6">
                Data Consultant | Evaluation Partner
              </h2>
              <div className="space-y-4 text-lg text-gray-600 leading-relaxed">
                <p>
                  I am an independent data consultant specializing in helping organizations unlock insights from their
                  data to improve outcomes and drive evidence-based decision making.
                </p>
                <p>
                  I offer a range of services including data analysis, evaluation design, research support, and
                  strategic data consultancy to help you make the most of your information assets.
                </p>
                <p>
                  I collaborate with charities, public sector organizations, healthcare providers, and research
                  institutions to connect complex data with actionable insights that make a real difference.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 mt-8">
                <Button size="lg" className="bg-black hover:bg-gray-800">
                  Work with me
                </Button>
                <Button size="lg" variant="outline" className="border-gray-300 text-gray-700 hover:bg-gray-50">
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
                <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Database className="h-8 w-8 text-blue-600" />
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
                <div className="w-16 h-16 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Target className="h-8 w-8 text-green-600" />
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
                <div className="w-16 h-16 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-purple-600" />
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
                <div className="w-16 h-16 bg-orange-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Brain className="h-8 w-8 text-orange-600" />
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

      {/* Organizations Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Organizations I work with:</h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center justify-items-center">
            {/* Placeholder for client logos */}
            <div className="w-32 h-20 bg-gray-200 rounded-lg flex items-center justify-center">
              <span className="text-gray-500 text-sm">Client Logo</span>
            </div>
            <div className="w-32 h-20 bg-gray-200 rounded-lg flex items-center justify-center">
              <span className="text-gray-500 text-sm">Client Logo</span>
            </div>
            <div className="w-32 h-20 bg-gray-200 rounded-lg flex items-center justify-center">
              <span className="text-gray-500 text-sm">Client Logo</span>
            </div>
            <div className="w-32 h-20 bg-gray-200 rounded-lg flex items-center justify-center">
              <span className="text-gray-500 text-sm">Client Logo</span>
            </div>
            <div className="w-32 h-20 bg-gray-200 rounded-lg flex items-center justify-center">
              <span className="text-gray-500 text-sm">Client Logo</span>
            </div>
            <div className="w-32 h-20 bg-gray-200 rounded-lg flex items-center justify-center">
              <span className="text-gray-500 text-sm">Client Logo</span>
            </div>
          </div>
        </div>
      </section>

      {/* Recent Work Section */}
      <section id="work" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Recent work:</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Badge className="mb-2 bg-blue-100 text-blue-800 w-fit">Healthcare</Badge>
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
                    <span className="font-semibold text-green-600">+25%</span>
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
                <Badge className="mb-2 bg-green-100 text-green-800 w-fit">Charity</Badge>
                <CardTitle>Impact Evaluation Framework</CardTitle>
                <CardDescription>
                  Designed and implemented evaluation methodology to measure program effectiveness and social impact.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Programs Evaluated</span>
                    <span className="font-semibold text-green-600">15</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Beneficiaries Tracked</span>
                    <span className="font-semibold">2,500+</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">ROI Demonstrated</span>
                    <span className="font-semibold text-green-600">3.2:1</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Badge className="mb-2 bg-purple-100 text-purple-800 w-fit">Research</Badge>
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
                    <span className="font-semibold text-green-600">12</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Participants</span>
                    <span className="font-semibold">1,200</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Data Quality</span>
                    <span className="font-semibold text-green-600">98%</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Button size="lg" variant="outline" className="border-gray-300 text-gray-700 hover:bg-gray-50">
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
      <footer className="bg-gray-600 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <Image src="/logo.jpg" alt="Inchoatus Logo" width={300} height={300} className="h-16 w-auto" />
                <span className="text-2xl font-bold">Inchoatus Ltd</span>
              </div>
              <p className="text-gray-200 mb-4 max-w-md">
                Independent data consultant helping organizations unlock insights from their data to improve outcomes
                and drive evidence-based decision making.
              </p>
              <div className="text-sm text-gray-300">
                <p>Inchoatus Ltd | Company No: 16533810 | Registered in England and Wales</p>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Contact</h3>
              <ul className="space-y-2 text-gray-200">
                <li>+44 7552 081 278</li>
                <li>hello@inchoatus.co.uk</li>
                <li>Leeds, UK</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-500 mt-8 pt-8 text-center text-gray-300">
            <p>&copy; {new Date().getFullYear()} Inchoatus Ltd. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
