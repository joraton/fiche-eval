'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  BookOpen, 
  Scale, 
  Calculator, 
  TrendingUp, 
  BarChart3, 
  Award,
  ChevronRight
} from 'lucide-react';

interface CourseSection {
  id: string;
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  href: string;
  color: string;
  bgColor: string;
  available: boolean;
}

const courseSections: CourseSection[] = [
  {
    id: 'introduction',
    title: 'Introduction',
    description: 'Vue d\'ensemble des méthodes',
    icon: BookOpen,
    href: '/introduction',
    color: 'text-blue-600',
    bgColor: 'bg-blue-100',
    available: true
  },
  {
    id: 'ancc-theorie',
    title: 'ANCC - Théorie',
    description: 'Approche patrimoniale détaillée',
    icon: Scale,
    href: '/ancc-theorie',
    color: 'text-emerald-600',
    bgColor: 'bg-emerald-100',
    available: true
  },
  {
    id: 'ancc-exercices',
    title: 'ANCC - Exercices',
    description: 'Cas pratiques complexes',
    icon: Calculator,
    href: '/ancc-exercices',
    color: 'text-orange-600',
    bgColor: 'bg-orange-100',
    available: true
  },
  {
    id: 'dcf-theorie',
    title: 'DCF - Théorie',
    description: 'Flux de trésorerie actualisés',
    icon: TrendingUp,
    href: '/dcf-theorie',
    color: 'text-red-600',
    bgColor: 'bg-red-100',
    available: true
  },
  {
    id: 'dcf-exercices',
    title: 'DCF - Exercices',
    description: 'Cas pratiques sectoriels',
    icon: Calculator,
    href: '/dcf-exercices',
    color: 'text-pink-600',
    bgColor: 'bg-pink-100',
    available: true
  },
  {
    id: 'multiples-theorie',
    title: 'Multiples - Théorie',
    description: 'Approche comparative détaillée',
    icon: BarChart3,
    href: '/multiples-theorie',
    color: 'text-indigo-600',
    bgColor: 'bg-indigo-100',
    available: true
  },
  {
    id: 'multiples-exercices',
    title: 'Multiples - Exercices',
    description: 'Cas pratiques sectoriels',
    icon: TrendingUp,
    href: '/multiples-exercices',
    color: 'text-purple-600',
    bgColor: 'bg-purple-100',
    available: true
  },
  {
    id: 'quiz',
    title: 'Quiz Final',
    description: 'Évaluation ANCC',
    icon: Award,
    href: '/quiz',
    color: 'text-purple-600',
    bgColor: 'bg-purple-100',
    available: true
  }
];

export default function CoursePlan() {
  return (
    <div className="space-y-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-8"
      >
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
          Plan du cours
        </h2>
        <p className="text-gray-600 text-base max-w-2xl mx-auto">
          Parcours structuré pour maîtriser toutes les méthodes d&apos;évaluation d&apos;entreprise
        </p>
      </motion.div>
      
      <div className="grid gap-3 md:gap-4">
        {courseSections.map((section, index) => {
          const IconComponent = section.icon;
          
          const cardContent = (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.1,
                type: "spring",
                stiffness: 100
              }}
              whileHover={{ 
                y: section.available ? -8 : 0,
                transition: { duration: 0.2 }
              }}
              className={`
                group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 p-4 md:p-6
                ${section.available ? 'hover:scale-[1.02] cursor-pointer border-2 border-transparent hover:border-blue-200' : 'opacity-60 cursor-not-allowed'}
                overflow-hidden
              `}
            >
              {/* Background Gradient */}
              <div className={`absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-500 bg-gradient-to-br ${section.color.replace('text-', 'from-')} to-transparent`}></div>
              
              {/* Progress Indicator */}
              {section.available && (
                <div className="absolute top-0 left-0 w-full h-1 bg-gray-100">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: '100%' }}
                    transition={{ duration: 1, delay: index * 0.1 + 0.5 }}
                    className={`h-full bg-gradient-to-r ${section.color.replace('text-', 'from-')} to-blue-400`}
                  />
                </div>
              )}
              
              <div className="relative flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                    className={`p-3 rounded-2xl ${section.bgColor} shadow-lg group-hover:shadow-xl transition-shadow duration-300`}
                  >
                    <IconComponent className={`h-6 w-6 ${section.color}`} />
                  </motion.div>
                  
                  <div className="flex-1">
                    <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-1 group-hover:text-blue-600 transition-colors duration-300">
                      {section.title}
                    </h3>
                    <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                      {section.description}
                    </p>
                    
                    {/* Additional Info */}
                    <div className="flex items-center gap-3 mt-2">
                      {section.available && (
                        <>
                          <span className="inline-flex items-center gap-1 text-sm text-green-600 font-medium">
                            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                            Disponible
                          </span>
                          <span className="text-sm text-gray-500">
                            {index < 2 ? '~45 min' : index < 6 ? '~30 min' : '~20 min'}
                          </span>
                        </>
                      )}
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  {section.available ? (
                    <motion.div
                      whileHover={{ x: 5 }}
                      className="flex items-center gap-2 text-blue-600 font-semibold"
                    >
                      <span className="hidden md:inline text-lg">
                        Commencer
                      </span>
                      <motion.div
                        animate={{ x: [0, 5, 0] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      >
                        <ChevronRight className="h-6 w-6" />
                      </motion.div>
                    </motion.div>
                  ) : (
                    <div className="flex items-center gap-2 text-gray-400">
                      <span className="text-sm font-medium">
                        Bientôt disponible
                      </span>
                      <div className="w-6 h-6 border-2 border-gray-300 border-t-transparent rounded-full animate-spin"></div>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          );
          
          return section.available ? (
            <Link key={section.id} href={section.href}>
              {cardContent}
            </Link>
          ) : (
            <div key={section.id}>
              {cardContent}
            </div>
          );
        })}
      </div>
      
      {/* Progress Summary */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-4 md:p-6 mt-8 border border-blue-100"
      >
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <h3 className="text-lg font-bold text-gray-900 mb-1">
              🎯 Votre progression
            </h3>
            <p className="text-gray-600 text-sm">
              Complétez tous les modules pour obtenir votre certification
            </p>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-600">
                {courseSections.filter(s => s.available).length}/{courseSections.length}
              </div>
              <div className="text-sm text-gray-500">Modules</div>
            </div>
            
            <div className="w-24 h-2 bg-gray-200 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${(courseSections.filter(s => s.available).length / courseSections.length) * 100}%` }}
                transition={{ duration: 1, delay: 1 }}
                className="h-full bg-gradient-to-r from-blue-500 to-purple-500"
              />
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}