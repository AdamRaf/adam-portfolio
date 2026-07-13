import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';
import Skills from './components/sections/Skills';
import Projects from './components/sections/Projects';
import Experience from './components/sections/Experience';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/react';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-24 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto w-full">
        <Hero />
        <Skills />
        <Experience />
        <Projects />
      </main>

      <Footer />

      <Analytics />
      <SpeedInsights />
    </div>
  )
}
