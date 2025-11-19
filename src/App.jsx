import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Benefits from './components/Benefits'
import HowItWorks from './components/HowItWorks'
import Features from './components/Features'
import Testimonials from './components/Testimonials'
import Pricing from './components/Pricing'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900 scroll-smooth">
      <Navbar />
      <main>
        <Hero />
        {/* Por qué elegirnos */}
        <Benefits />
        {/* Galería */}
        <HowItWorks />
        {/* Servicios */}
        <Features />
        {/* Testimonios */}
        <Testimonials />
        {/* Tipos de eventos */}
        <Pricing />
        {/* Contacto / CTA final */}
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
