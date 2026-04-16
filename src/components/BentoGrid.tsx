'use client';

import { motion } from 'framer-motion';
import { Target, Search, Code, Globe } from 'lucide-react';

const expertise = [
  {
    icon: Target,
    title: 'Meta Ads',
    description: 'Campanhas otimizadas no Facebook e Instagram para máxima conversão.',
  },
  {
    icon: Search,
    title: 'Google Ads',
    description: 'Anúncios performáticos no Google com foco em ROI.',
  },
  {
    icon: Code,
    title: 'Python & Automação',
    description: 'Scripts e bots para automatizar processos e análise de dados.',
  },
  {
    icon: Globe,
    title: 'Desenvolvimento Web',
    description: 'Sites e landing pages responsivos e otimizados.',
  },
];

export default function BentoGrid() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold tracking-tighter text-center mb-12 bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent"
        >
          Minha Expertise
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {expertise.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white/10 backdrop-blur-md rounded-xl p-6 hover:bg-white/20 transition-all duration-300 border border-white/20"
            >
              <item.icon className="w-12 h-12 text-purple-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-300">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}