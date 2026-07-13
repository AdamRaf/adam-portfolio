import { motion } from 'framer-motion';
import { experienceData } from '../../data/experience';

export default function Experience() {
  return (
    <section id="experience" className="py-20">
        
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="mb-16"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-gray-100 tracking-tight">
          Enterprise Engineering History.
        </h2>
        <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mt-4 rounded-full"></div>
        <p className="text-gray-400 mt-2 text-sm text-base">
          Major enterprise-grade architectures and components shipped during my tenure at PT Solusi Integrasindo.
        </p>
      </motion.div>

      <div className="space-y-8">
        {experienceData.map((project, index) => (
          <motion.div
            key={project.systemName}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="glass-panel p-6 md:p-8 rounded-2xl border border-white/5 hover:border-purple-500/30 transition-all duration-300 group"
          >
            <div className="flex flex-col justify-between gap-4 mb-6">
              <div className="flex items-center gap-4">
                <div>
                  <h3 className="text-xl md:text-2xl font-bold text-gray-100 group-hover:text-blue-400 transition-colors">
                    {project.systemName}
                  </h3>
                </div>
              </div>
            </div>

            <p className="text-gray-300 text-sm text-base leading-relaxed mb-6">
              {project.description}
            </p>

            <ul className="space-y-3 mb-6">
              {project.highlights.map((point, idx) => (
                <li key={idx} className="text-gray-400 text-sm flex items-start gap-2">
                  <span className="text-purple-500 font-bold mt-0.5">▪</span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>

    </section>
  );
}