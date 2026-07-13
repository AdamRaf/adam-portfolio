import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import profilePic from '../../assets/profile.webp';

export default function Hero() {
  return (
    <section id="about" className="min-h-[80vh] flex items-center pt-12 md:pt-0 pb-20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center w-full">
        
        {/* Typography & CTA */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-start gap-6"
        >
          <div className="space-y-2">
            <h1 className="text-5xl md:text-7xl font-bold text-gray-100 tracking-tight">
              Hi, I am <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
                Adam.
              </span>
            </h1>
            <h3 className="text-2xl md:text-3xl text-gray-300 font-semibold mt-2">
              Software Engineer
            </h3>
          </div>

          <p className="text-gray-400 text-lg leading-relaxed max-w-lg">
            With 3 years of experience specializing in building scalable mobile and web applications.
            Proven expertise in architecting Server-Driven UI (SDUI) systems and implementing complex
            data security through steganography. Deeply focused on Frontend Architecture and performance
            optimization, with a solid engineering foundation in Industrial IoT.
          </p>

          {/* Neumorphism Button */}
          <a 
            href="#experience" 
            className="mt-4 flex items-center gap-2 px-8 py-4 rounded-xl text-gray-200 font-medium neu-extruded transition-all duration-300 group"
          >
            View My Experience
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 group-hover:text-purple-500 transition-transform" />
          </a>
        </motion.div>

        {/* Main pic */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative flex justify-center items-center"
        >
          {/* Outer Glow */}
          <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/30 to-purple-600/30 blur-3xl rounded-full w-64 h-64 md:w-80 md:h-80 m-auto"></div>
          
          {/* Avatar / Shape Placeholder with Glassmorphism */}
          <div className="glass-panel w-64 h-64 md:w-80 md:h-80 rounded-full relative z-10 flex items-center justify-center overflow-hidden border border-purple-500/30 group">
             <img
              src={profilePic}
              alt="Profile Picture"
              className="w-full h-full object-cover object-center transition-transform duration-400 group-hover:scale-105"
             />
          </div>
        </motion.div>

      </div>
    </section>
  );
}
