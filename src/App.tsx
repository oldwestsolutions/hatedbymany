import { useState, useEffect } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Products from './components/Products'
import About from './components/About'
import Footer from './components/Footer'
import AboutUs from './pages/AboutUs'
import OurStory from './pages/OurStory'
import Craftsmanship from './pages/Craftsmanship'
import Awards from './pages/Awards'

function App() {
  const [currentPage, setCurrentPage] = useState('home')

  useEffect(() => {
    const handleRouteChange = () => {
      const path = window.location.pathname
      setCurrentPage(path === '/' ? 'home' : path.substring(1))
    }

    // Listen for route changes
    window.addEventListener('popstate', handleRouteChange)
    handleRouteChange() // Check initial route

    return () => window.removeEventListener('popstate', handleRouteChange)
  }, [])

  const handleLinkClick = (href: string) => {
    if (href.startsWith('/')) {
      window.history.pushState({}, '', href)
      setCurrentPage(href.substring(1))
    }
  }

  // Add click handler to all links
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      const link = target.closest('a')
      if (link && link.href && link.href.startsWith(window.location.origin)) {
        const href = link.getAttribute('href')
        if (href && href.startsWith('/')) {
          e.preventDefault()
          handleLinkClick(href)
        }
      }
    }

    document.addEventListener('click', handleClick)
    return () => document.removeEventListener('click', handleClick)
  }, [])

  const renderPage = () => {
    switch (currentPage) {
      case 'about-us':
        return <AboutUs />
      case 'our-story':
        return <OurStory />
      case 'craftsmanship':
        return <Craftsmanship />
      case 'awards':
        return <Awards />
      case 'home':
      default:
        return (
          <main>
            <Hero />
            <Products />
            <About />
          </main>
        )
    }
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      {renderPage()}
      <Footer />
    </div>
  )
}

export default App