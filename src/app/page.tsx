'use client';

import { motion } from 'framer-motion';
import { Target, Search, Code, Globe, Zap, Shield, Search as SearchIcon, MessageCircle, Github, Linkedin, Mail } from 'lucide-react';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#030712] text-white">
      {/* Navbar */}
      <nav className="fixed top-0 w-full bg-[#030712]/80 backdrop-blur-md border-b border-white/10 z-50">
        <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          <motion.h1
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-xl font-bold tracking-tighter"
          >
            Claudiane
          </motion.h1>
          <div className="hidden md:flex space-x-6">
            <a href="#hero" className="hover:text-purple-400 transition-colors">Início</a>
            <a href="#expertise" className="hover:text-purple-400 transition-colors">Expertise</a>
            <a href="#projects" className="hover:text-purple-400 transition-colors">Projetos</a>
            <a href="#performance" className="hover:text-purple-400 transition-colors">Performance</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="min-h-screen flex items-center justify-center px-4 pt-20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter mb-6 bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent"
          >
            Engenharia de Computação
            <br />
            + Gestão de Tráfego
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto"
          >
            Transformando dados em resultados. Especialista em TI para impulsionar seu negócio.
          </motion.p>
          <motion.a
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            href="https://wa.me/5511999999999"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-green-500 to-green-600 rounded-full text-white font-semibold hover:shadow-lg hover:shadow-green-500/25 transition-all duration-300 group"
          >
            <MessageCircle className="mr-2 w-5 h-5" />
            Falar no WhatsApp
          </motion.a>
        </div>
      </section>

      {/* Bento Grid de Expertise */}
      <section id="expertise" className="py-20 px-4">
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
            {[
              { icon: Target, title: 'Meta Ads', desc: 'Campanhas otimizadas no Facebook e Instagram.' },
              { icon: Search, title: 'Google Ads', desc: 'Anúncios performáticos no Google.' },
              { icon: Code, title: 'Python & Automação', desc: 'Scripts e bots para automação.' },
              { icon: Globe, title: 'Desenvolvimento Web', desc: 'Sites responsivos e otimizados.' },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white/10 backdrop-blur-md rounded-xl p-6 hover:bg-white/20 transition-all duration-300 border border-white/20"
              >
                <item.icon className="w-12 h-12 text-purple-500 mb-4" />
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-300">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Showcase de Projetos */}
      <section id="projects" className="py-20 px-4">
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
            {[
              { title: 'Landing Page E-commerce', desc: 'Página de conversão otimizada.', img: '/project1.jpg' },
              { title: 'Site Institucional', desc: 'Presença digital profissional.', img: '/project2.jpg' },
              { title: 'Dashboard Analytics', desc: 'Interface para monitoramento.', img: '/project3.jpg' },
            ].map((project, index) => (
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
                  <p className="text-gray-300 mb-4">{project.desc}</p>
                  <button className="inline-flex items-center text-purple-400 hover:text-purple-300 transition-colors group-hover:translate-x-1 transform transition-transform">
                    Ver Projeto <Globe className="ml-2 w-4 h-4" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Seção de Performance */}
      <section id="performance" className="py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold tracking-tighter mb-12 bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent"
          >
            Performance & Segurança
          </motion.h2>
          <div className="flex flex-col md:flex-row justify-center items-center space-y-8 md:space-y-0 md:space-x-12">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="bg-white/10 backdrop-blur-md rounded-full px-8 py-4 border border-white/20"
            >
              <Zap className="w-12 h-12 text-green-500 mx-auto mb-2" />
              <h3 className="text-xl font-semibold">100% Core Web Vitals</h3>
              <p className="text-gray-300">Otimização máxima</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white/10 backdrop-blur-md rounded-full px-8 py-4 border border-white/20"
            >
              <Shield className="w-12 h-12 text-blue-500 mx-auto mb-2" />
              <h3 className="text-xl font-semibold">Security First</h3>
              <p className="text-gray-300">Proteção avançada</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
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
            <a
              href="https://wa.me/5511999999999"
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-green-500 to-green-600 rounded-full text-white font-semibold hover:shadow-lg hover:shadow-green-500/25 transition-all duration-300"
            >
              <MessageCircle className="mr-2 w-5 h-5" />
              WhatsApp
            </a>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex justify-center space-x-6 mb-8"
          >
            <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">
              <Github className="w-6 h-6" />
            </a>
            <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">
              <Linkedin className="w-6 h-6" />
            </a>
            <a href="mailto:claudiane@email.com" className="text-gray-400 hover:text-purple-400 transition-colors">
              <Mail className="w-6 h-6" />
            </a>
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
    </main>
  );
}
