'use client';

import { motion } from 'framer-motion';
import { Zap, Shield, Search } from 'lucide-react';
import PerformanceChart from './PerformanceChart';

const differentials = [
  {
    icon: Zap,
    title: 'Performance Extrema',
    description: 'Sites carregam em menos de 1 segundo, garantindo experiência excepcional.',
    hasChart: true,
  },
  {
    icon: Shield,
    title: 'Segurança Avançada',
    description: 'Implementações com HTTPS, proteção contra vulnerabilidades e dados criptografados.',
  },
  {
    icon: Search,
    title: 'SEO Otimizado',
    description: 'Estruturas que rankeiam no topo do Google, aumentando visibilidade orgânica.',
  },
];

export default function TechnicalDifferential() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold tracking-tighter text-center mb-12 bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent"
        >
          Diferencial Técnico
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {differentials.map((diff, index) => (
            <motion.div
              key={diff.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center bg-white/10 backdrop-blur-md rounded-xl p-8 hover:bg-white/20 transition-all duration-300 border border-white/20"
            >
              <diff.icon className="w-16 h-16 text-purple-500 mx-auto mb-4" />
              <h3 className="text-2xl font-semibold mb-4">{diff.title}</h3>
              <p className="text-gray-300 mb-4">{diff.description}</p>
              {diff.hasChart && <PerformanceChart />}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}