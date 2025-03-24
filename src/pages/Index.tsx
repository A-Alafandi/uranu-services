
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Shield, Clock, UserCheck, Phone, GraduationCap, BookOpen } from "lucide-react"
import { Link } from "react-router-dom"

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Header/Navigation */}
      <header className="bg-white py-4 shadow-sm">
        <div className="container max-w-6xl mx-auto px-4 flex justify-between items-center">
          <div className="text-primary font-bold text-2xl">Uranu Services</div>
          <nav className="hidden md:flex gap-6">
            <a href="#diensten" className="text-gray-600 hover:text-primary">Diensten</a>
            <a href="#opleiding" className="text-gray-600 hover:text-primary">Opleiding</a>
            <a href="#over-ons" className="text-gray-600 hover:text-primary">Over Ons</a>
            <a href="#contact" className="text-gray-600 hover:text-primary">Contact</a>
          </nav>
          <Button 
            className="bg-secondary hover:bg-secondary/90"
            onClick={() => document.getElementById('contact')?.scrollIntoView()}
          >
            Contact
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero-section min-h-[80vh] flex items-center justify-center text-white px-4">
        <div className="container max-w-6xl mx-auto text-center animate-fade-in">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Verkeersregelaar Opleiding
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Professionele opleiding voor verkeersregelaars en uitgebreide veiligheidsdiensten
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg"
              className="bg-secondary hover:bg-secondary/90 text-white px-8 py-6 text-lg"
              onClick={() => document.getElementById('opleiding')?.scrollIntoView()}
            >
              Meer over de opleiding
            </Button>
            <Button 
              size="lg"
              variant="outline" 
              className="bg-white hover:bg-white/90 text-primary border-white px-8 py-6 text-lg"
              onClick={() => document.getElementById('contact')?.scrollIntoView()}
            >
              Offerte aanvragen
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="diensten" className="py-20 px-4 bg-white">
        <div className="container max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-primary">
            Onze Diensten
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {diensten.map((dienst, index) => (
              <Card 
                key={dienst.title}
                className="service-card p-6 animate-fade-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  {dienst.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{dienst.title}</h3>
                <p className="text-gray-600">{dienst.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Training Section */}
      <section id="opleiding" className="py-20 px-4 bg-accent">
        <div className="container max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-primary">
            Verkeersregelaar Opleiding
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold mb-4">Word een gecertificeerde verkeersregelaar</h3>
              <p className="text-gray-600 mb-6">
                Onze opleiding tot verkeersregelaar is speciaal ontwikkeld om u alle vaardigheden en kennis te bieden die nodig zijn in het verkeersbeheer. Met een combinatie van theorie en praktijk bereiden we u voor op diverse verkeerssituaties.
              </p>
              <ul className="space-y-3">
                {opleidingPunten.map((punt, index) => (
                  <li key={index} className="flex items-start">
                    <div className="mr-3 text-primary mt-1">{punt.icon}</div>
                    <span>{punt.text}</span>
                  </li>
                ))}
              </ul>
              <Button 
                className="mt-8 bg-primary hover:bg-primary/90"
                onClick={() => document.getElementById('contact')?.scrollIntoView()}
              >
                Schrijf je nu in
              </Button>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Opleidingsdetails</h3>
              <div className="space-y-4">
                <div className="flex justify-between pb-3 border-b">
                  <span className="font-medium">Duur:</span>
                  <span>1 dag (8 uur)</span>
                </div>
                <div className="flex justify-between pb-3 border-b">
                  <span className="font-medium">Certificering:</span>
                  <span>Officieel erkend</span>
                </div>
                <div className="flex justify-between pb-3 border-b">
                  <span className="font-medium">Locatie:</span>
                  <span>Door heel Nederland</span>
                </div>
                <div className="flex justify-between pb-3 border-b">
                  <span className="font-medium">Inclusief:</span>
                  <span>Lesmateriaal, lunch, certificaat</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="over-ons" className="py-20 px-4 bg-white">
        <div className="container max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-primary">
            Waarom Kiezen voor Uranu Services?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {voordelen.map((voordeel, index) => (
              <div 
                key={voordeel.title}
                className="text-center animate-fade-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-md">
                  {voordeel.icon}
                </div>
                <h3 className="text-lg font-semibold mb-2">{voordeel.title}</h3>
                <p className="text-gray-600">{voordeel.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-accent">
        <div className="container max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="animate-fade-up">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary">
                Neem Contact Op
              </h2>
              <p className="text-gray-600 mb-8">
                Heeft u vragen over onze diensten of wilt u meer informatie over de opleiding? Neem contact met ons op en we reageren binnen 24 uur.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Phone className="w-6 h-6 text-primary mr-3" />
                  <span>+31 (0) 123 456 789</span>
                </div>
              </div>
            </div>
            <form className="space-y-6 animate-fade-up" style={{ animationDelay: "0.2s" }}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Input placeholder="Voornaam" />
                <Input placeholder="Achternaam" />
              </div>
              <Input type="email" placeholder="E-mailadres" />
              <Input type="tel" placeholder="Telefoonnummer" />
              <Textarea placeholder="Uw bericht" className="h-32" />
              <Button className="w-full bg-primary hover:bg-primary/90">
                Verstuur Bericht
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
              <h3 className="text-xl font-bold mb-4">Uranu Services</h3>
              <p className="text-white/80">
                Professionele verkeersveiligheidsoplossingen voor al uw behoeften.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Snelle Links</h4>
              <ul className="space-y-2 text-white/80">
                <li>
                  <a href="#diensten" className="hover:text-white">Diensten</a>
                </li>
                <li>
                  <a href="#opleiding" className="hover:text-white">Opleiding</a>
                </li>
                <li>
                  <a href="#over-ons" className="hover:text-white">Over Ons</a>
                </li>
                <li>
                  <a href="#contact" className="hover:text-white">Contact</a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Diensten</h4>
              <ul className="space-y-2 text-white/80">
                <li>
                  <a href="#" className="hover:text-white">Verkeer & Veiligheid</a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">Verkeersregelaar Opleiding</a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact</h4>
              <address className="not-italic text-white/80">
                <p>Straatnaam 123</p>
                <p>1234 AB Amsterdam</p>
                <p>info@uranuservices.nl</p>
                <p>+31 (0) 123 456 789</p>
              </address>
            </div>
          </div>
          <div className="border-t border-white/10 mt-8 pt-8 text-center text-white/60">
            <p>&copy; {new Date().getFullYear()} Uranu Services. Alle rechten voorbehouden.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

const diensten = [
  {
    title: "Verkeer & Veiligheid",
    description: "Professionele verkeersbegeleiding voor bouwplaatsen, evenementen en wegwerkzaamheden. Onze gecertificeerde verkeersregelaars zorgen voor een veilige doorstroming van het verkeer.",
    icon: <Shield className="w-6 h-6 text-primary" />,
  },
  {
    title: "Verkeersregelaar Opleiding",
    description: "Complete opleiding tot gecertificeerd verkeersregelaar. Leer alle vaardigheden en kennis die nodig zijn om professioneel verkeer te regelen bij diverse situaties.",
    icon: <GraduationCap className="w-6 h-6 text-primary" />,
  },
]

const opleidingPunten = [
  {
    text: "Officieel erkend certificaat na afronding",
    icon: <Shield className="w-5 h-5" />,
  },
  {
    text: "Theorie en praktijktraining door ervaren instructeurs",
    icon: <BookOpen className="w-5 h-5" />,
  },
  {
    text: "Leer verkeerstekens, handsignalen en communicatietechnieken",
    icon: <UserCheck className="w-5 h-5" />,
  },
  {
    text: "Direct inzetbaar na het behalen van je certificaat",
    icon: <Clock className="w-5 h-5" />,
  },
]

const voordelen = [
  {
    title: "Expert Team",
    description: "Hoogopgeleide professionals",
    icon: <UserCheck className="w-6 h-6 text-primary" />,
  },
  {
    title: "24/7 Service",
    description: "Altijd beschikbaar wanneer u ons nodig heeft",
    icon: <Clock className="w-6 h-6 text-primary" />,
  },
  {
    title: "Gecertificeerd",
    description: "Volledig gediplomeerd en verzekerd",
    icon: <Shield className="w-6 h-6 text-primary" />,
  },
  {
    title: "Snelle Respons",
    description: "Snelle reactie op uw verzoeken",
    icon: <Phone className="w-6 h-6 text-primary" />,
  },
]

export default Index
