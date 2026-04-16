'use client';

import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

const projects = [
  {
    title: 'Landing Page E-commerce',
    description: 'Página de conversão otimizada para vendas online.',
    image: '/project1.jpg', // Placeholder
  },
  {
    title: 'Site Institucional',
    description: 'Presença digital profissional para empresa B2B.',
    image: '/project2.jpg',
  },
  {
    title: 'Dashboard Analytics',
    description: 'Interface para monitoramento de campanhas de tráfego.',
    image: '/project3.jpg',
  },
];

export default function ProjectShowcase() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold tracking-tighter text-center mb-12 bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent"
        >
          Projetos em Destaque
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white/10 backdrop-blur-md rounded-xl overflow-hidden hover:bg-white/20 transition-all duration-300 border border-white/20 group"
            >
              <div className="h-48 bg-gradient-to-r from-purple-500 to-blue-500 flex items-center justify-center">
                <span className="text-white text-lg font-semibold">{project.title}</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-300 mb-4">{project.description}</p>
                <button className="inline-flex items-center text-purple-400 hover:text-purple-300 transition-colors group-hover:translate-x-1 transform transition-transform">
                  Ver Projeto <ExternalLink className="ml-2 w-4 h-4" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}