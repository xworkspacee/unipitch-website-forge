
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, FileText, CreditCard, Shield, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";

const Apply = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    businessName: "",
    websiteType: "",
    mainPurpose: "",
    existingWebsite: "",
    existingWebsiteLink: "",
    features: [] as string[],
    specialRequests: "",
    contentProvider: "",
    budget: "",
    timeline: "",
    domainHosting: "",
    domainDetails: "",
    maintenance: "",
    additionalNotes: ""
  });

  const websiteTypes = [
    "Clinic", "E-commerce", "Portfolio", "Blog", "Education", 
    "NGO", "Service-based", "Booking", "News", "Other"
  ];

  const features = [
    "Contact Form", "Online Appointment Booking", "Live Chat", 
    "Payment Gateway", "Product Catalog", "Blog/News Section",
    "Admin Panel", "Reviews & Ratings", "User Login/Signup",
    "Google Map/Location", "WhatsApp Integration", "Newsletter Signup"
  ];

  const budgetRanges = [
    "₹2,000–₹5,000", "₹5,000–₹10,000", "₹10,000–₹25,000", 
    "₹25,000–₹50,000", "Custom"
  ];

  const handleFeatureChange = (feature: string, checked: boolean) => {
    if (checked) {
      setFormData(prev => ({ ...prev, features: [...prev.features, feature] }));
    } else {
      setFormData(prev => ({ 
        ...prev, 
        features: prev.features.filter(f => f !== feature) 
      }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Application Submitted Successfully!",
      description: "We'll contact you within 24 hours to discuss your project and start the demo development.",
    });
    console.log("Form submitted:", formData);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-100">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b border-purple-100 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <ArrowLeft className="h-5 w-5 text-purple-600" />
            <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-3 py-2 rounded-lg font-bold">
              UniPitch
            </div>
          </Link>
          <Badge variant="secondary" className="bg-purple-100 text-purple-800">
            Application Form
          </Badge>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              Website Development Application
            </h1>
            <p className="text-xl text-gray-600 mb-6">
              Tell us about your project requirements and we'll create a perfect website for you
            </p>
            
            <div className="flex items-center justify-center space-x-4 mb-6">
              <div className="flex items-center space-x-2 bg-green-50 text-green-700 px-4 py-2 rounded-lg">
                <CheckCircle className="h-5 w-5" />
                <span className="font-medium">Application Fee: ₹600</span>
              </div>
              <div className="flex items-center space-x-2 bg-blue-50 text-blue-700 px-4 py-2 rounded-lg">
                <CreditCard className="h-5 w-5" />
                <span className="font-medium">Deducted from Final Payment</span>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Basic Information */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <FileText className="h-5 w-5 text-purple-600" />
                  <span>Basic Information</span>
                </CardTitle>
                <CardDescription>
                  Let's start with your basic details
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="fullName">Your Full Name *</Label>
                    <Input
                      id="fullName"
                      value={formData.fullName}
                      onChange={(e) => setFormData(prev => ({ ...prev, fullName: e.target.value }))}
                      placeholder="Enter your full name"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                      placeholder="your@email.com"
                      required
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="phone">Phone Number *</Label>
                    <Input
                      id="phone"
                      value={formData.phone}
                      onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                      placeholder="+91 XXXXX XXXXX"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="businessName">Business Name (if any)</Label>
                    <Input
                      id="businessName"
                      value={formData.businessName}
                      onChange={(e) => setFormData(prev => ({ ...prev, businessName: e.target.value }))}
                      placeholder="Your business name"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Website Requirements */}
            <Card>
              <CardHeader>
                <CardTitle>🌐 Website Requirements</CardTitle>
                <CardDescription>
                  Tell us what kind of website you need
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <Label htmlFor="websiteType">What kind of website do you want? *</Label>
                  <Select value={formData.websiteType} onValueChange={(value) => setFormData(prev => ({ ...prev, websiteType: value }))}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select website type" />
                    </SelectTrigger>
                    <SelectContent>
                      {websiteTypes.map((type) => (
                        <SelectItem key={type} value={type}>{type}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="mainPurpose">What is the main purpose of the website? *</Label>
                  <Textarea
                    id="mainPurpose"
                    value={formData.mainPurpose}
                    onChange={(e) => setFormData(prev => ({ ...prev, mainPurpose: e.target.value }))}
                    placeholder="e.g., To sell products, take appointments, show portfolio, generate leads..."
                    rows={3}
                    required
                  />
                </div>

                <div>
                  <Label>Do you have an existing website?</Label>
                  <RadioGroup 
                    value={formData.existingWebsite} 
                    onValueChange={(value) => setFormData(prev => ({ ...prev, existingWebsite: value }))}
                    className="mt-2"
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="yes" id="existing-yes" />
                      <Label htmlFor="existing-yes">Yes (please share the link below)</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="no" id="existing-no" />
                      <Label htmlFor="existing-no">No, this is my first website</Label>
                    </div>
                  </RadioGroup>
                  
                  {formData.existingWebsite === "yes" && (
                    <div className="mt-4">
                      <Label htmlFor="existingWebsiteLink">Website Link</Label>
                      <Input
                        id="existingWebsiteLink"
                        value={formData.existingWebsiteLink}
                        onChange={(e) => setFormData(prev => ({ ...prev, existingWebsiteLink: e.target.value }))}
                        placeholder="https://your-website.com"
                      />
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>

            {/* Features & Functionality */}
            <Card>
              <CardHeader>
                <CardTitle>🛠️ Features & Functionality</CardTitle>
                <CardDescription>
                  Select all the features you need on your website
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <Label className="text-base font-medium mb-4 block">What features do you need? (Check all that apply)</Label>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {features.map((feature) => (
                      <div key={feature} className="flex items-center space-x-2">
                        <Checkbox
                          id={feature}
                          checked={formData.features.includes(feature)}
                          onCheckedChange={(checked) => handleFeatureChange(feature, checked as boolean)}
                        />
                        <Label htmlFor={feature} className="text-sm font-normal">
                          {feature}
                        </Label>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <Label htmlFor="specialRequests">Any special requests or functions?</Label>
                  <Textarea
                    id="specialRequests"
                    value={formData.specialRequests}
                    onChange={(e) => setFormData(prev => ({ ...prev, specialRequests: e.target.value }))}
                    placeholder="e.g., multilingual, dark mode, animations, specific integrations..."
                    rows={3}
                  />
                </div>

                <div>
                  <Label>Do you want us to write the content or will you provide it?</Label>
                  <RadioGroup 
                    value={formData.contentProvider} 
                    onValueChange={(value) => setFormData(prev => ({ ...prev, contentProvider: value }))}
                    className="mt-2"
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="you-write" id="content-you" />
                      <Label htmlFor="content-you">Please write the content for me</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="i-provide" id="content-me" />
                      <Label htmlFor="content-me">I will provide the content</Label>
                    </div>
                  </RadioGroup>
                </div>
              </CardContent>
            </Card>

            {/* Budget & Timeline */}
            <Card>
              <CardHeader>
                <CardTitle>💸 Budget & Timeline</CardTitle>
                <CardDescription>
                  Help us understand your budget and timeline requirements
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <Label htmlFor="budget">What is your estimated budget for the website? *</Label>
                  <Select value={formData.budget} onValueChange={(value) => setFormData(prev => ({ ...prev, budget: value }))}>
                    <SelectTrigger>
                      <SelectValue placeholder="Choose budget range" />
                    </SelectTrigger>
                    <SelectContent>
                      {budgetRanges.map((range) => (
                        <SelectItem key={range} value={range}>{range}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="timeline">What is your ideal timeline or deadline?</Label>
                  <Input
                    id="timeline"
                    value={formData.timeline}
                    onChange={(e) => setFormData(prev => ({ ...prev, timeline: e.target.value }))}
                    placeholder="e.g., 2 weeks, 1 month, urgent"
                  />
                </div>
              </CardContent>
            </Card>

            {/* Domain & Hosting */}
            <Card>
              <CardHeader>
                <CardTitle>📦 Domain & Hosting</CardTitle>
                <CardDescription>
                  Domain and hosting information
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <Label>Do you already have a domain and hosting?</Label>
                  <RadioGroup 
                    value={formData.domainHosting} 
                    onValueChange={(value) => setFormData(prev => ({ ...prev, domainHosting: value }))}
                    className="mt-2"
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="yes" id="domain-yes" />
                      <Label htmlFor="domain-yes">Yes (I'll provide access details later)</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="no" id="domain-no" />
                      <Label htmlFor="domain-no">No, I need help buying</Label>
                    </div>
                  </RadioGroup>
                </div>

                <div>
                  <Label>Do you need long-term maintenance or updates?</Label>
                  <RadioGroup 
                    value={formData.maintenance} 
                    onValueChange={(value) => setFormData(prev => ({ ...prev, maintenance: value }))}
                    className="mt-2"
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="yes" id="maintenance-yes" />
                      <Label htmlFor="maintenance-yes">Yes</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="no" id="maintenance-no" />
                      <Label htmlFor="maintenance-no">No</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="maybe" id="maintenance-maybe" />
                      <Label htmlFor="maintenance-maybe">Maybe later</Label>
                    </div>
                  </RadioGroup>
                </div>
              </CardContent>
            </Card>

            {/* Additional Notes */}
            <Card>
              <CardHeader>
                <CardTitle>📝 Additional Notes</CardTitle>
                <CardDescription>
                  Anything else you'd like us to know?
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div>
                  <Label htmlFor="additionalNotes">Any other requirements, ideas, or questions you have?</Label>
                  <Textarea
                    id="additionalNotes"
                    value={formData.additionalNotes}
                    onChange={(e) => setFormData(prev => ({ ...prev, additionalNotes: e.target.value }))}
                    placeholder="Share any additional thoughts, references, or specific requirements..."
                    rows={4}
                  />
                </div>
              </CardContent>
            </Card>

            {/* NDA Agreement */}
            <Card className="border-purple-200 bg-purple-50">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Shield className="h-5 w-5 text-purple-600" />
                  <span>Non-Disclosure Agreement</span>
                </CardTitle>
                <CardDescription>
                  Your project details are completely secure with us
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-gray-600">
                  By submitting this application, you acknowledge that:
                </p>
                <ul className="text-sm text-gray-600 space-y-2 ml-4">
                  <li>• All project information will be kept confidential</li>
                  <li>• We will sign a digital NDA before starting work</li>
                  <li>• Your business ideas and requirements are protected</li>
                  <li>• We do not share client information with third parties</li>
                </ul>
                <div className="flex items-center space-x-2">
                  <Checkbox id="nda-agreement" required />
                  <Label htmlFor="nda-agreement" className="text-sm">
                    I agree to the NDA terms and conditions *
                  </Label>
                </div>
              </CardContent>
            </Card>

            {/* Submit Section */}
            <Card className="bg-gradient-to-r from-purple-600 to-blue-600 text-white">
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl font-bold mb-4">Ready to Start Your Project?</h3>
                <p className="mb-6 opacity-90">
                  Submit your application with ₹600 (fully deducted from final payment) and get your website demo in 1-2 days!
                </p>
                <Button 
                  type="submit" 
                  size="lg" 
                  variant="secondary" 
                  className="bg-white text-purple-600 hover:bg-gray-100 text-lg px-8 py-3"
                >
                  Submit Application & Pay ₹600
                </Button>
                <p className="mt-4 text-sm opacity-75">
                  🔒 Secure payment • ✅ No advance fees • 💯 Money-back guarantee
                </p>
              </CardContent>
            </Card>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Apply;
