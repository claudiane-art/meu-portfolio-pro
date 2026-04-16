'use client';

import { motion } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';

const socialLinks = [
  { icon: Github, href: 'https://github.com/claudiane-amaral', label: 'GitHub' },
  { icon: Linkedin, href: 'https://www.linkedin.com/in/claudiane-amaral/', label: 'LinkedIn' },
  { icon: Mail, href: 'mailto:claudiane.silvaamaral@gmail.com', label: 'Email' },
];

export default function Footer() {
  return (
    <footer className="py-12 px-4 border-t border-white/20">
      <div className="max-w-6xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <h3 className="text-2xl font-semibold mb-4">Vamos Conversar?</h3>
          <p className="text-gray-300 mb-6">Pronto para transformar sua presença digital?</p>
          <button className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full text-white font-semibold hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300">
            Entre em Contato
          </button>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex justify-center space-x-6 mb-8"
        >
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-gray-400 hover:text-purple-400 transition-colors"
              aria-label={link.label}
            >
              <link.icon className="w-6 h-6" />
            </a>
          ))}
        </motion.div>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-gray-500 text-sm"
        >
          © 2026 Claudiane Amaral. Todos os direitos reservados.
        </motion.p>
      </div>
    </footer>
  );
}