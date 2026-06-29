import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { projectsData } from '../../data/projects';

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

export default function Projects() {
  return (
    <section id="projects" className="py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="mb-12"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-gray-100 tracking-tight">
          Project Hub.
        </h2>
        <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mt-4 rounded-full"></div>
      </motion.div>

      {/* Content Grid Section */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-50px" }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {projectsData.map((project) => (
          <motion.div
            key={project.title}
            variants={cardVariants}
            className="glass-panel flex flex-col rounded-2xl overflow-hidden group hover:border-purple-500/50 transition-colors duration-500"
          >
            {/* Desc Container */}
            <div className="p-6 flex flex-col flex-grow">
              <h3 className="text-xl font-bold text-gray-100 mb-3 group-hover:text-blue-400 transition-colors">
                {project.title}
              </h3>

              <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-grow">
                {project.description}
              </p>

              {/* Tech Stack Tags */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.techStack.map((tech, index) => (
                  <span
                    key={index}
                    className="text-xs font-medium px-3 py-1 rounded-full bg-gray-800/50 text-gray-300 border border-white/5"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto flex items-center justify-center gap-2 w-full py-3 rounded-lg text-sm font-medium text-gray-200 neu-extruded hover:neu-sunken transition-all duration-300"
              >
                Launch Project <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}