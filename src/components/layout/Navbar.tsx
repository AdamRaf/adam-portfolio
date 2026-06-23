import { AnimatePresence, motion } from 'framer-motion';
import { Code2, Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const handleMobileNavigation = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    debugger
    e.preventDefault();
    setIsMenuOpen(false);

    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth'})
    }
  }

  const navLinkClass = `
    text-gray-300
    transition-all duration-300
    hover:text-purple-200
    hover:[text-shadow:0_0_2px_rgba(255,255,255,0.8),0_0_8px_rgba(168,85,247,1),0_0_16px_rgba(168,85,247,1)]
  `;

  return (
    <nav className="fixed top-0 w-full z-50 glass-panel border-b border-white/5">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* Logo / Name */}
          <div className="flex-shrink-0 flex items-center gap-2 cursor-pointer">
            <Code2 className="text-blue-500 w-6 h-6" />
            <span className="font-bold text-xl tracking-wider text-gray-100">ADAM.</span>
          </div>

          {/* Navigation Links (Desktop) */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a href="#about" className={navLinkClass}>
                About
              </a>
              <a href="#skills" className={navLinkClass}>
                Skills
              </a>
              <a href="#projects" className={navLinkClass}>
                Projects
              </a>
            </div>
          </div>

          {/* Navigation Links (Mobile) */}
          <div className="block md:hidden">
            <button onClick={toggleMenu}>
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
          
          {/* Mobile dropdown mwnu container */}
          <AnimatePresence>
            {isMenuOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                // exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
                className="absolute top-16 left-0 md:hidden w-full bg-surface/95 backdrop-blur-[16px] border-b border-accent-purple/20 overflow-hidden"
              >
                <div className="px-4 pt-2 pb-6 space-y-4 flex flex-col items-center">
                  <a
                    href="#about"
                    onClick={(e) => handleMobileNavigation(e, 'about')}
                    className={navLinkClass}
                  >
                    About
                  </a>
                  <a
                    href="#skills"
                    onClick={(e) => handleMobileNavigation(e, 'skills')}
                    className={navLinkClass}
                  >
                    Skills
                  </a>
                  <a
                    href="#projects"
                    onClick={(e) => handleMobileNavigation(e, 'projects')}
                    className={navLinkClass}
                  >
                    Projects
                  </a>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
          
        </div>
      </div>
    </nav>
  );
}