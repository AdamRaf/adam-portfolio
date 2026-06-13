import { motion } from "framer-motion"
import { skillsData } from "../../data/Skills";

const containerVariants = {
    hidden: {opacity: 0},
    show: {
        opacity: 1,
        transition: { staggerChildren: 0.15 }
    }
}

const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    show: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.5 }
    }
}

export default function Skills() {
    return (
        <section id="skills" className="py-20">
            <motion.div
                initial={{ opacity: 1, y: 0 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                className="mb-12"
            >
                <h2 className="text-3xl md:text-4xl font-bold text-gray-100 tracking-tight">
                    Engineering Core.
                </h2>
                <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mt-4 rounded-full"></div>
            </motion.div>
            
            <motion.div 
                variants={containerVariants}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-50px" }}
                className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4"
            >
                {skillsData.map((skill) => {
                    const Icon = skill.icon;
                    return (
                        <motion.div 
                            key={skill.id}
                            variants={cardVariants}
                            className="neu-extruded-sm rounded-lg p-4 flex flex-col items-center justify-center gap-2 hover:cyber-glow transition-all duration-300 cursor-pointer group"
                        >
                            <div className="text-3xl group-hover:#F3F4F6 group-hover:cyber-text-glow transition-colors">
                                <Icon className="w-6 h-6" />
                            </div>
                            
                            <div>
                                <h3 className="font-label-md text-label-md transition-colors">
                                    {skill.name}
                                </h3>
                            </div>
                        </motion.div>
                    );
                })}
            </motion.div>
        </section>
    )
}