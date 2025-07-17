'use client';

import { TrendingUp, BarChart3, Calculator, Target, Star, Users } from 'lucide-react';
import { motion } from 'framer-motion';

export default function CourseHeader() {
  return (
    <div className="relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-purple-600 to-violet-700 rounded-3xl">
        <div className="absolute inset-0 opacity-30">
          <div className="w-full h-full" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}></div>
        </div>
      </div>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative bg-gradient-to-br from-blue-600 via-purple-600 to-violet-700 rounded-3xl p-6 md:p-8 text-white shadow-2xl mb-6"
      >
        {/* Floating Elements */}
        <motion.div
          animate={{ y: [-10, 10, -10] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-6 right-6 bg-white/10 p-3 rounded-2xl backdrop-blur-sm"
        >
          <BarChart3 className="h-6 w-6" />
        </motion.div>
        
        <motion.div
          animate={{ y: [10, -10, 10] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-6 right-20 bg-white/10 p-2 rounded-xl backdrop-blur-sm"
        >
          <Calculator className="h-4 w-4" />
        </motion.div>
        
        <div className="flex flex-col lg:flex-row items-start gap-6">
          <div className="bg-white/20 p-4 rounded-2xl backdrop-blur-sm border border-white/20">
            <TrendingUp className="h-10 w-10" />
          </div>
          
          <div className="flex-1">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3 leading-tight">
                Méthodes d&apos;Évaluation
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-orange-300">
                  d&apos;Entreprise
                </span>
              </h1>
            </motion.div>
            
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-blue-100 text-lg mb-6 max-w-2xl leading-relaxed"
            >
              Maîtrisez les 3 approches fondamentales de valorisation avec des cas pratiques concrets et des outils professionnels
            </motion.p>
            
            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6"
            >
              <div className="bg-white/10 p-3 rounded-xl backdrop-blur-sm border border-white/20">
                <div className="flex items-center gap-2 mb-2">
                  <Target className="h-5 w-5 text-yellow-300" />
                  <span className="text-2xl font-bold">3</span>
                </div>
                <p className="text-blue-100 text-sm">Méthodes</p>
              </div>
              
              <div className="bg-white/10 p-3 rounded-xl backdrop-blur-sm border border-white/20">
                <div className="flex items-center gap-2 mb-2">
                  <Calculator className="h-5 w-5 text-green-300" />
                  <span className="text-2xl font-bold">8</span>
                </div>
                <p className="text-blue-100 text-sm">Exercices</p>
              </div>
              
              <div className="bg-white/10 p-3 rounded-xl backdrop-blur-sm border border-white/20">
                <div className="flex items-center gap-2 mb-2">
                  <Star className="h-5 w-5 text-orange-300" />
                  <span className="text-2xl font-bold">4h</span>
                </div>
                <p className="text-blue-100 text-sm">Durée</p>
              </div>
              
              <div className="bg-white/10 p-3 rounded-xl backdrop-blur-sm border border-white/20">
                <div className="flex items-center gap-2 mb-2">
                  <Users className="h-5 w-5 text-purple-300" />
                  <span className="text-2xl font-bold">Pro</span>
                </div>
                <p className="text-blue-100 text-sm">Niveau</p>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-wrap gap-3"
            >
              <span className="bg-gradient-to-r from-yellow-400 to-orange-400 text-gray-900 px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                🏆 Formation Expert
              </span>
              <span className="bg-white/20 px-4 py-2 rounded-full text-sm font-medium backdrop-blur-sm border border-white/20">
                📊 Cas Réels
              </span>
              <span className="bg-white/20 px-4 py-2 rounded-full text-sm font-medium backdrop-blur-sm border border-white/20">
                🎯 Certification
              </span>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}