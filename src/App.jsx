import Hero from './components/Hero'
import Highlights from './components/Highlights'
import Navbar from './components/Navbar'
import Model from './components/Model.jsx'
import Features from './components/Features'
import * as Sentry from '@sentry/react'
import HowItWorks from './components/HowItWorks.jsx'
import Footer from './components/Footer.jsx'

const App = () => {

  return (
   <main className='bg-black'>
    <Navbar />
    <Hero />
    <Highlights />
    <Model />
    <Features />
    <HowItWorks />
    <Footer />
   </main>
  )
}

export default Sentry.withProfiler(App);
