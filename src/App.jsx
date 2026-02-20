import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Problem from './components/Problem'
import Benefits from './components/Benefits'
import Process from './components/Process'
import DogGallery from './components/DogGallery'
import Testimonials from './components/Testimonials'
import About from './components/About'
import QuoteForm from './components/QuoteForm'
import FinalCTA from './components/FinalCTA'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Problem />
      <Benefits />
      <Process />
      <DogGallery />
      <Testimonials />
      <About />
      <QuoteForm />
      <FinalCTA />
      <Footer />
    </div>
  )
}
