
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Shield, Clock, UserCheck, Phone } from "lucide-react"

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="hero-section min-h-[80vh] flex items-center justify-center text-white px-4">
        <div className="container max-w-6xl mx-auto text-center animate-fade-in">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Professional Traffic Safety Solutions
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Expert traffic controllers and comprehensive safety services for your events and projects
          </p>
          <Button 
            size="lg"
            className="bg-secondary hover:bg-secondary/90 text-white px-8 py-6 text-lg"
            onClick={() => document.getElementById('contact')?.scrollIntoView()}
          >
            Request Quote
          </Button>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4 bg-white">
        <div className="container max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-primary">
            Our Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card 
                key={service.title}
                className="service-card p-6 animate-fade-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 bg-accent">
        <div className="container max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-primary">
            Why Choose Us?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div 
                key={benefit.title}
                className="text-center animate-fade-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-md">
                  {benefit.icon}
                </div>
                <h3 className="text-lg font-semibold mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-white">
        <div className="container max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="animate-fade-up">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary">
                Contact Us
              </h2>
              <p className="text-gray-600 mb-8">
                Get in touch with us for all your traffic safety needs. We'll respond within 24 hours.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Phone className="w-6 h-6 text-primary mr-3" />
                  <span>+1 (555) 123-4567</span>
                </div>
              </div>
            </div>
            <form className="space-y-6 animate-fade-up" style={{ animationDelay: "0.2s" }}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Input placeholder="First Name" />
                <Input placeholder="Last Name" />
              </div>
              <Input type="email" placeholder="Email Address" />
              <Input type="tel" placeholder="Phone Number" />
              <Textarea placeholder="Your Message" className="h-32" />
              <Button className="w-full bg-primary hover:bg-primary/90">
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-white py-12">
        <div className="container max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Traffic Safety Co.</h3>
              <p className="text-white/80">
                Professional traffic safety solutions for all your needs.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-white/80">
                <li>
                  <a href="#" className="hover:text-white">About Us</a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">Services</a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">Contact</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/10 mt-8 pt-8 text-center text-white/60">
            <p>&copy; {new Date().getFullYear()} Traffic Safety Co. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

const services = [
  {
    title: "Traffic Control",
    description: "Professional traffic controllers for construction sites and events",
    icon: <Shield className="w-6 h-6 text-primary" />,
  },
  {
    title: "24/7 Availability",
    description: "Round-the-clock service for emergency situations",
    icon: <Clock className="w-6 h-6 text-primary" />,
  },
  {
    title: "Certified Staff",
    description: "Fully trained and certified traffic safety professionals",
    icon: <UserCheck className="w-6 h-6 text-primary" />,
  },
]

const benefits = [
  {
    title: "Expert Team",
    description: "Highly trained professionals",
    icon: <UserCheck className="w-6 h-6 text-primary" />,
  },
  {
    title: "24/7 Service",
    description: "Always available when you need us",
    icon: <Clock className="w-6 h-6 text-primary" />,
  },
  {
    title: "Certified",
    description: "Fully licensed and insured",
    icon: <Shield className="w-6 h-6 text-primary" />,
  },
  {
    title: "Fast Response",
    description: "Quick response to your requests",
    icon: <Phone className="w-6 h-6 text-primary" />,
  },
]

export default Index
