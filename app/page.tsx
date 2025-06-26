import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Phone, Mail, MapPin, Database, BarChart3, Settings, FileText, Zap, TrendingUp } from "lucide-react"
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
              <Image src="/logo.jpg" alt="Inchoatus Logo" width={50} height={50} className="h-12 w-auto" />
            </div>
            <nav className="flex space-x-8">
              <Link href="#services" className="text-gray-700 hover:text-black font-medium">
                Services
              </Link>
              <Link href="#case-studies" className="text-gray-700 hover:text-black font-medium">
                Case Studies
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
              <Badge className="mb-4 bg-gray-100 text-gray-800 hover:bg-gray-100">Certified Data Professional</Badge>
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                Data-Driven Solutions
                <span className="text-gray-900 block">You Can Trust</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Professional data consulting services for businesses ready to unlock insights from their data. From
                strategy development to implementation, we deliver actionable solutions that drive growth.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-black hover:bg-gray-800">
                  Get Free Quote
                </Button>
                <Button size="lg" variant="outline" className="border-gray-300 text-gray-700 hover:bg-gray-50">
                  View Our Work
                </Button>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/placeholder.svg?height=500&width=600"
                alt="Data analytics dashboard"
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
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We offer comprehensive data consulting services to meet all your business intelligence needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <BarChart3 className="h-12 w-12 text-black mb-4" />
                <CardTitle>Data Strategy & Consulting</CardTitle>
                <CardDescription>
                  Strategic planning and roadmap development for data-driven transformation
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Data Strategy Development</li>
                  <li>• Technology Assessment</li>
                  <li>• ROI Analysis & Planning</li>
                  <li>• Implementation Roadmaps</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Database className="h-12 w-12 text-black mb-4" />
                <CardTitle>Data Collection & Integration</CardTitle>
                <CardDescription>Comprehensive data gathering and system integration solutions</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Data Source Integration</li>
                  <li>• API Development</li>
                  <li>• Database Design</li>
                  <li>• ETL Pipeline Creation</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <TrendingUp className="h-12 w-12 text-black mb-4" />
                <CardTitle>Analytics & Reporting</CardTitle>
                <CardDescription>Transform raw data into actionable insights and automated reports</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Business Intelligence Dashboards</li>
                  <li>• Custom Analytics Solutions</li>
                  <li>• Automated Reporting</li>
                  <li>• KPI Tracking Systems</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Settings className="h-12 w-12 text-black mb-4" />
                <CardTitle>Data Transformation</CardTitle>
                <CardDescription>Clean, structure, and optimize your data for maximum value</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Data Cleaning & Validation</li>
                  <li>• Schema Design</li>
                  <li>• Data Modeling</li>
                  <li>• Quality Assurance</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Zap className="h-12 w-12 text-black mb-4" />
                <CardTitle>Process Automation</CardTitle>
                <CardDescription>Streamline operations with intelligent automation solutions</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Workflow Automation</li>
                  <li>• Report Generation</li>
                  <li>• Data Pipeline Automation</li>
                  <li>• System Integration</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <FileText className="h-12 w-12 text-black mb-4" />
                <CardTitle>Evaluation & Auditing</CardTitle>
                <CardDescription>Comprehensive assessment of your current data infrastructure</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Data Audit Services</li>
                  <li>• Performance Evaluation</li>
                  <li>• Compliance Assessment</li>
                  <li>• Optimization Recommendations</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section id="case-studies" className="py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Case Studies</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real results from real clients. See how we've helped businesses transform their data into actionable
              insights.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Badge className="mb-2 bg-black text-white w-fit">E-commerce</Badge>
                <CardTitle>Revenue Analytics Dashboard</CardTitle>
                <CardDescription>
                  Helped an online retailer increase revenue by 35% through comprehensive sales analytics
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Revenue Increase</span>
                    <span className="font-semibold text-green-600">+35%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Data Sources Integrated</span>
                    <span className="font-semibold">12</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Implementation Time</span>
                    <span className="font-semibold">6 weeks</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Badge className="mb-2 bg-black text-white w-fit">Healthcare</Badge>
                <CardTitle>Patient Flow Optimization</CardTitle>
                <CardDescription>
                  Streamlined patient data management reducing wait times by 40% for a medical practice
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Wait Time Reduction</span>
                    <span className="font-semibold text-green-600">-40%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Patients Processed Daily</span>
                    <span className="font-semibold">+150</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Staff Efficiency</span>
                    <span className="font-semibold text-green-600">+25%</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Badge className="mb-2 bg-black text-white w-fit">Manufacturing</Badge>
                <CardTitle>Supply Chain Analytics</CardTitle>
                <CardDescription>
                  Reduced inventory costs by 28% through predictive analytics and automated reporting
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Cost Reduction</span>
                    <span className="font-semibold text-green-600">-28%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Forecast Accuracy</span>
                    <span className="font-semibold">94%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Automation Level</span>
                    <span className="font-semibold">85%</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Button size="lg" variant="outline" className="border-gray-300 text-gray-700 hover:bg-gray-50">
              View All Case Studies
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to Transform Your Data?</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Contact us today for a free consultation. Let's discuss how data can drive your business forward.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="bg-gray-800 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Call Us</h3>
              <p className="text-gray-300">(555) 123-4567</p>
              <p className="text-gray-300 text-sm">Mon-Fri 7AM-6PM</p>
            </div>

            <div className="text-center">
              <div className="bg-gray-800 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Email Us</h3>
              <p className="text-gray-300">hello@inchoatus.com</p>
              <p className="text-gray-300 text-sm">We respond within 24 hours</p>
            </div>

            <div className="text-center">
              <div className="bg-gray-800 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Visit Us</h3>
              <p className="text-gray-300">123 Business Center</p>
              <p className="text-gray-300">Your City, ST 12345</p>
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
                <Image src="/logo.jpg" alt="Inchoatus Logo" width={40} height={40} className="h-10 w-auto" />
                <span className="text-2xl font-bold">Inchoatus</span>
              </div>
              <p className="text-gray-200 mb-4 max-w-md">
                Your trusted partner for data consulting and analytics solutions. Strategic insights, reliable
                implementation, and measurable results.
              </p>
              <div className="text-sm text-gray-300">
                <p>Certified Data Professional</p>
                <p>Serving the Greater Metro Area</p>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Contact</h3>
              <ul className="space-y-2 text-gray-200">
                <li>(555) 123-4567</li>
                <li>hello@inchoatus.com</li>
                <li>
                  123 Business Center
                  <br />
                  Your City, ST 12345
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-500 mt-8 pt-8 text-center text-gray-300">
            <p>&copy; {new Date().getFullYear()} Inchoatus. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
