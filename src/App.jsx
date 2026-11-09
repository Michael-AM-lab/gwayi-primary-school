import { useEffect } from 'react'
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom'
import About from './components/About.jsx'
import Home from './components/Home.jsx'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import Contact from './components/Contact.jsx'
import Academics from './components/Academics.jsx'
import Sports from './components/Sports.jsx'
import Admision from './components/Admision.jsx'
import Donations from './components/Donations.jsx'

function ScrollToLocation() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      if (hash) {
        document.getElementById(hash.slice(1))?.scrollIntoView()
      } else {
        window.scrollTo(0, 0)
      }
    })

    return () => window.cancelAnimationFrame(frameId)
  }, [pathname, hash])

  return null
}

function AppLayout() {
  return (
    <div className="relative min-h-dvh w-full bg-white">
      <ScrollToLocation />
      <Navbar />
      
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/academics" element={<Academics />} />
          <Route path="/sports" element={<Sports />} />
          <Route path="/admissions" element={<Admision />} />
          <Route path="/donations" element={<Donations />} />
          <Route path="*" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

function App() {
  return (
    <BrowserRouter>
      <AppLayout />
    </BrowserRouter>
  )
}

export default App