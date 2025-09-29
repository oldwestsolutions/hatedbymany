import { useState, useEffect } from 'react'
import { Analytics } from '@vercel/analytics/react'
import Header from './components/Header'
import Hero from './components/Hero'
import Products from './components/Products'
import About from './components/About'
import Footer from './components/Footer'
import AboutUs from './pages/AboutUs'
import OurStory from './pages/OurStory'
import Awards from './pages/Awards'
import Careers from './pages/Careers'
import Partners from './pages/Partners'
import LearnMore from './pages/LearnMore'
import Collections from './pages/Collections'
import Solutions from './pages/Solutions'
import CustomerService from './pages/CustomerService'

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
      case 'partners':
        return <Partners />
      case 'awards':
        return <Awards />
      case 'careers':
        return <Careers />
      case 'learn-more':
        return <LearnMore />
      case 'collections':
        return <Collections />
      case 'solutions':
        return <Solutions />
      case 'customer-service':
        return <CustomerService />
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
      <Analytics />
    </div>
  )
}

export default App