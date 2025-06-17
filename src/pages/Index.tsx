import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { ArrowRight, CheckCircle, Users, Zap, Shield, Smartphone, Search, TrendingUp, Code, Star, Check } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  const benefits = [
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Faster Loading Speed",
      description: "No unnecessary code or plugins slowing down your site"
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Better Security",
      description: "Custom code is harder to hack with fewer vulnerabilities"
    },
    {
      icon: <Smartphone className="h-6 w-6" />,
      title: "High Mobile Optimization",
      description: "100% responsive design for all devices"
    },
    {
      icon: <Search className="h-6 w-6" />,
      title: "SEO Optimization",
      description: "Clean code for better Google indexing and ranking"
    },
    {
      icon: <Code className="h-6 w-6" />,
      title: "Better Control",
      description: "Full maintenance control without template restrictions"
    },
    {
      icon: <TrendingUp className="h-6 w-6" />,
      title: "Scalable Growth",
      description: "Easy to add features as your business expands"
    }
  ];

  const processSteps = [
    {
      step: "1",
      title: "Fill Application Form",
      description: "Complete our detailed form with your requirements (₹600 - deducted from final payment)",
      color: "bg-purple-100 text-purple-800"
    },
    {
      step: "2",
      title: "Demo Development",
      description: "We create a live demo of your website within 1-2 days",
      color: "bg-blue-100 text-blue-800"
    },
    {
      step: "3",
      title: "Review & Refinement",
      description: "Review the demo, provide feedback, and we make necessary changes",
      color: "bg-green-100 text-green-800"
    },
    {
      step: "4",
      title: "Final Payment & Delivery",
      description: "Pay the remaining amount and get full access with complete guidance",
      color: "bg-orange-100 text-orange-800"
    }
  ];

  const services = [
    "Upselling Landing Pages",
    "Product Listing & Catalog",
    "Search Functionality",
    "Checkout & Payment Gateway",
    "Review System",
    "Admin Analytics Dashboard",
    "SEO Optimization",
    "1 Year Maintenance"
  ];

  const extraOffers = [
    "Free Domain & Hosting Setup (1st year)",
    "WhatsApp Chat Integration",
    "Basic Email Setup",
    "Social Media Integration",
    "Speed Optimization",
    "Mobile-Responsive Design",
    "Monthly Backup & Reports",
    "Training Guide & Video Tutorial"
  ];

  const pricingPlans = [
    {
      type: "Business/Company",
      priceRange: "₹2,000 - ₹7,000",
      basic: {
        name: "Basic Plan",
        subtitle: "Static / One-page",
        features: ["Home", "About", "Contact Form", "Responsive design"]
      },
      medium: {
        name: "Medium Plan", 
        subtitle: "Multi-page / Semi-dynamic",
        features: ["+ Services page", "+ Testimonials", "+ Gallery/Team", "+ WhatsApp chat"]
      },
      standard: {
        name: "Standard Plan",
        subtitle: "Fully dynamic / Advanced", 
        features: ["+ Blog/News", "+ Admin Panel", "+ Live Chat", "+ SEO + Analytics"]
      }
    },
    {
      type: "E-commerce",
      priceRange: "₹7,000 - ₹15,000",
      basic: {
        name: "Basic Plan",
        subtitle: "Static / One-page",
        features: ["Home", "Product List (Static)", "Contact Info"]
      },
      medium: {
        name: "Medium Plan",
        subtitle: "Multi-page / Semi-dynamic", 
        features: ["+ Product pages", "+ Cart (Static)", "+ Inquiry form"]
      },
      standard: {
        name: "Standard Plan",
        subtitle: "Fully dynamic / Advanced",
        features: ["+ Add to Cart", "+ Payment Gateway", "+ Admin Dashboard", "+ Order Management"]
      }
    },
    {
      type: "Service-Based",
      priceRange: "₹3,000 - ₹12,000",
      subtitle: "(Doctors, Salons, etc.)",
      basic: {
        name: "Basic Plan", 
        subtitle: "Static / One-page",
        features: ["Home", "Services", "Contact Page"]
      },
      medium: {
        name: "Medium Plan",
        subtitle: "Multi-page / Semi-dynamic",
        features: ["+ Booking Form", "+ Testimonials", "+ Map Integration"] 
      },
      standard: {
        name: "Standard Plan",
        subtitle: "Fully dynamic / Advanced",
        features: ["+ Online Booking System", "+ Payment Integration", "+ Reviews + Notifications"]
      }
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-100">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b border-purple-100 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-3 py-2 rounded-lg font-bold">
              UniPitch
            </div>
            <Badge variant="secondary" className="bg-purple-100 text-purple-800">
              Backed by Uniford Foundation
            </Badge>
          </div>
          <nav className="hidden md:flex items-center space-x-6">
            <a href="#services" className="text-gray-700 hover:text-purple-600 transition-colors">Services</a>
            <a href="#pricing" className="text-gray-700 hover:text-purple-600 transition-colors">Pricing</a>
            <a href="#process" className="text-gray-700 hover:text-purple-600 transition-colors">Process</a>
            <a href="#benefits" className="text-gray-700 hover:text-purple-600 transition-colors">Benefits</a>
            <a href="#contact" className="text-gray-700 hover:text-purple-600 transition-colors">Contact</a>
            <Link to="/apply">
              <Button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700">
                Apply Now
              </Button>
            </Link>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 text-center">
        <Badge className="mb-4 bg-purple-100 text-purple-800 hover:bg-purple-200">
          ✨ Premium Web Development Service
        </Badge>
        <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
          Transform Your Ideas Into Professional Websites
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
          Get custom-coded websites at affordable prices. No templates, no limitations - just professional, 
          fast, and secure websites tailored to your business needs.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link to="/apply">
            <Button size="lg" className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-lg px-8 py-3">
              Start Your Project <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
          <Button variant="outline" size="lg" className="border-purple-300 text-purple-700 hover:bg-purple-50 text-lg px-8 py-3">
            View Our Work
          </Button>
        </div>
        
        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="text-3xl font-bold text-purple-600 mb-2">500+</div>
            <div className="text-gray-600">Websites Delivered</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-purple-600 mb-2">100%</div>
            <div className="text-gray-600">Client Satisfaction</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-purple-600 mb-2">1 Year</div>
            <div className="text-gray-600">Free Maintenance</div>
          </div>
        </div>
      </section>

      {/* Trust Banner */}
      <section className="bg-gradient-to-r from-purple-600 to-blue-600 text-white py-4">
        <div className="container mx-auto px-4 text-center">
          <p className="text-lg">
            ✅ Verified by Uniford Foundation | ✅ No Advance Fees | ✅ See Demo First, Pay Later
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">What We Build For You</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Complete website solutions with all the features your business needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow border-purple-100">
                <CardContent className="p-6 text-center">
                  <CheckCircle className="h-8 w-8 text-green-500 mx-auto mb-3" />
                  <p className="font-medium text-gray-800">{service}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="bg-gradient-to-r from-purple-50 to-blue-50 border-purple-200">
            <CardHeader>
              <CardTitle className="text-2xl text-center">✨ Extra Value Offers</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {extraOffers.map((offer, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <Star className="h-5 w-5 text-yellow-500" />
                    <span className="text-gray-700">{offer}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Pricing Plans Section */}
      <section id="pricing" className="py-16 bg-gradient-to-r from-purple-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Website Package Plans</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose the perfect plan based on your website functionality needs and budget
            </p>
          </div>

          <div className="space-y-12">
            {pricingPlans.map((plan, index) => (
              <Card key={index} className="overflow-hidden shadow-lg border-purple-200">
                <CardHeader className="bg-gradient-to-r from-purple-100 to-blue-100 text-center">
                  <CardTitle className="text-2xl text-purple-800">{plan.type}</CardTitle>
                  <CardDescription className="text-lg font-semibold text-purple-600">
                    {plan.priceRange}
                  </CardDescription>
                  {plan.subtitle && (
                    <p className="text-sm text-gray-600">{plan.subtitle}</p>
                  )}
                </CardHeader>
                <CardContent className="p-0">
                  <div className="overflow-x-auto">
                    <Table>
                      <TableHeader>
                        <TableRow className="bg-gray-50">
                          <TableHead className="font-bold text-center">Basic Plan</TableHead>
                          <TableHead className="font-bold text-center">Medium Plan</TableHead>  
                          <TableHead className="font-bold text-center">Standard Plan</TableHead>
                        </TableRow>
                        <TableRow className="bg-gray-25">
                          <TableHead className="text-center text-sm text-gray-600 font-normal">
                            {plan.basic.subtitle}
                          </TableHead>
                          <TableHead className="text-center text-sm text-gray-600 font-normal">
                            {plan.medium.subtitle}
                          </TableHead>
                          <TableHead className="text-center text-sm text-gray-600 font-normal">
                            {plan.standard.subtitle}
                          </TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        <TableRow>
                          <TableCell className="align-top p-6">
                            <div className="space-y-3">
                              {plan.basic.features.map((feature, idx) => (
                                <div key={idx} className="flex items-center space-x-2">
                                  <Check className="h-4 w-4 text-green-500 flex-shrink-0" />
                                  <span className="text-sm">{feature}</span>
                                </div>
                              ))}
                            </div>
                          </TableCell>
                          <TableCell className="align-top p-6 bg-purple-25">
                            <div className="space-y-3">
                              {plan.basic.features.map((feature, idx) => (
                                <div key={idx} className="flex items-center space-x-2 text-gray-500">
                                  <Check className="h-4 w-4 text-gray-400 flex-shrink-0" />
                                  <span className="text-sm">{feature}</span>
                                </div>
                              ))}
                              {plan.medium.features.map((feature, idx) => (
                                <div key={idx} className="flex items-center space-x-2">
                                  <Check className="h-4 w-4 text-purple-500 flex-shrink-0" />
                                  <span className="text-sm font-medium">{feature}</span>
                                </div>
                              ))}
                            </div>
                          </TableCell>
                          <TableCell className="align-top p-6">
                            <div className="space-y-3">
                              {plan.basic.features.map((feature, idx) => (
                                <div key={idx} className="flex items-center space-x-2 text-gray-500">
                                  <Check className="h-4 w-4 text-gray-400 flex-shrink-0" />
                                  <span className="text-sm">{feature}</span>
                                </div>
                              ))}
                              {plan.medium.features.map((feature, idx) => (
                                <div key={idx} className="flex items-center space-x-2 text-gray-500">
                                  <Check className="h-4 w-4 text-gray-400 flex-shrink-0" />
                                  <span className="text-sm">{feature}</span>
                                </div>
                              ))}
                              {plan.standard.features.map((feature, idx) => (
                                <div key={idx} className="flex items-center space-x-2">
                                  <Check className="h-4 w-4 text-blue-500 flex-shrink-0" />
                                  <span className="text-sm font-medium text-blue-700">{feature}</span>
                                </div>
                              ))}
                            </div>
                          </TableCell>
                        </TableRow>
                      </TableBody>
                    </Table>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-lg text-gray-600 mb-6">
              💡 All plans include responsive design, basic SEO, and 1-year maintenance
            </p>
            <Link to="/apply">
              <Button size="lg" className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700">
                Choose Your Plan - Apply Now <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="process" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Our Simple Process</h2>
            <p className="text-xl text-gray-600">
              Transparent, efficient, and risk-free website development
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader className="text-center">
                  <div className={`w-12 h-12 rounded-full ${step.color} flex items-center justify-center mx-auto mb-4 text-xl font-bold`}>
                    {step.step}
                  </div>
                  <CardTitle className="text-lg">{step.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-center">{step.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Why Choose Custom-Coded Websites?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Unlike templates, our custom-coded websites give you complete control, better performance, and professional results
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow border-purple-100">
                <CardHeader>
                  <div className="bg-purple-100 text-purple-600 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                    {benefit.icon}
                  </div>
                  <CardTitle className="text-xl">{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-12 bg-red-50 border border-red-200 rounded-lg p-6">
            <h3 className="text-xl font-bold text-red-800 mb-4">⚠️ Why Templates Are Risky for Long-Term Growth</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-red-700">
              <div>• Slower due to extra code and plugins</div>
              <div>• Prone to crashes with updates</div>
              <div>• Harder to scale or modify</div>
              <div>• Less secure (many use same code)</div>
              <div>• Limited control over SEO</div>
              <div>• Looks like other websites</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-purple-600 to-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Start Your Project?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join hundreds of satisfied clients who chose UniPitch for their web development needs
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/apply">
              <Button size="lg" variant="secondary" className="bg-white text-purple-600 hover:bg-gray-100 text-lg px-8 py-3">
                Apply Now - Only ₹600 <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-purple-600 text-lg px-8 py-3">
              Contact Us First
            </Button>
          </div>
          <p className="mt-4 text-purple-100">
            💡 Application fee is fully deducted from your final payment
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Get In Touch</h2>
            <p className="text-xl text-gray-600">
              Have questions? We're here to help you make the right decision
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="bg-purple-100 text-purple-600 w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Users className="h-6 w-6" />
                </div>
                <h3 className="font-bold mb-2">WhatsApp Support</h3>
                <p className="text-gray-600 mb-4">Get instant responses to your queries</p>
                <Button variant="outline" className="border-purple-300 text-purple-700">
                  Chat Now
                </Button>
              </CardContent>
            </Card>
            
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="bg-blue-100 text-blue-600 w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-6 w-6" />
                </div>
                <h3 className="font-bold mb-2">Email Inquiry</h3>
                <p className="text-gray-600 mb-4">Send us your detailed requirements</p>
                <Button variant="outline" className="border-blue-300 text-blue-700">
                  Send Email
                </Button>
              </CardContent>
            </Card>
            
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="bg-green-100 text-green-600 w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="h-6 w-6" />
                </div>
                <h3 className="font-bold mb-2">Verify Credentials</h3>
                <p className="text-gray-600 mb-4">Check our Uniford Foundation backing</p>
                <Button variant="outline" className="border-green-300 text-green-700">
                  Verify Now
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-3 py-2 rounded-lg font-bold">
              UniPitch
            </div>
            <span className="text-gray-400">Backed by Uniford Foundation</span>
          </div>
          <p className="text-gray-400 mb-4">
            Professional web development services with transparent pricing and guaranteed results
          </p>
          <div className="flex justify-center space-x-6 text-sm text-gray-400">
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">NDA Agreement</a>
          </div>
          <p className="mt-4 text-sm text-gray-500">
            © 2024 UniPitch. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
