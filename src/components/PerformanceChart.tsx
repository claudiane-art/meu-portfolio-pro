'use client';

import { motion } from 'framer-motion';

export default function PerformanceChart() {
  const data = [
    { label: 'Seu Site', value: 0.8, color: '#a855f7' },
    { label: 'Concorrente Médio', value: 4.2, color: '#6b7280' },
  ];

  return (
    <div className="mt-8">
      <h4 className="text-lg font-semibold mb-4 text-center">Tempo de Carregamento (segundos)</h4>
      <div className="flex items-end justify-center space-x-8">
        {data.map((item, index) => (
          <div key={item.label} className="text-center">
            <motion.div
              initial={{ height: 0 }}
              whileInView={{ height: `${(item.value / 5) * 200}px` }}
              transition={{ duration: 1, delay: index * 0.2 }}
              className="w-16 bg-gradient-to-t from-purple-500 to-blue-500 rounded-t mb-2 flex items-end justify-center text-white font-bold text-sm"
              style={{ background: `linear-gradient(to top, ${item.color}, ${item.color}aa)` }}
            >
              <span className="mb-2">{item.value}s</span>
            </motion.div>
            <p className="text-sm text-gray-300">{item.label}</p>
          </div>
        ))}
      </div>
      <p className="text-center text-sm text-gray-400 mt-4">
        Carregamento ultra-rápido garantido
      </p>
    </div>
  );
}