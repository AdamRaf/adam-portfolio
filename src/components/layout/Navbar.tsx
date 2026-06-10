import { Code2 } from 'lucide-react';

export default function Navbar() {
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
              <a
                href="#about"
                className="
                  text-gray-300
                  transition-all duration-300
                  hover:text-purple-200
                  hover:[text-shadow:0_0_2px_rgba(255,255,255,0.8),0_0_8px_rgba(168,85,247,1),0_0_16px_rgba(168,85,247,1)]
                "
              >
                About
              </a>
              <a 
                href="#skills" 
                className="
                  text-gray-300
                  transition-all duration-300
                  hover:text-purple-200
                  hover:[text-shadow:0_0_2px_rgba(255,255,255,0.8),0_0_8px_rgba(168,85,247,1),0_0_16px_rgba(168,85,247,1)]
                "
              >
                Skills
              </a>
              <a 
                href="#projects" 
                className="
                  text-gray-300
                  transition-all duration-300
                  hover:text-purple-200
                  hover:[text-shadow:0_0_2px_rgba(255,255,255,0.8),0_0_8px_rgba(168,85,247,1),0_0_16px_rgba(168,85,247,1)]
                "
              >
                Projects
              </a>
            </div>
          </div>
          
        </div>
      </div>
    </nav>
  );
}