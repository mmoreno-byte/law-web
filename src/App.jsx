import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Practices from './components/Practices'
import Process from './components/Process'
import About from './components/About'
import FAQ from './components/FAQ'
import Contact from './components/Contact'
import Footer from './components/Footer'
import { useReveal } from './hooks/useReveal'

function App() {
  useReveal()

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Practices />
        <Process />
        <About />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App
