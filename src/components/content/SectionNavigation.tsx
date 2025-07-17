'use client';

import Link from 'next/link';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';

interface SectionNavigationProps {
  previousSection?: {
    title: string;
    href: string;
  };
  nextSection?: {
    title: string;
    href: string;
  };
}

export default function SectionNavigation({ previousSection, nextSection }: SectionNavigationProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="flex justify-between items-center mt-12 pt-8 border-t border-gray-200"
    >
      {/* Section précédente */}
      <div className="flex-1">
        {previousSection ? (
          <Link href={previousSection.href}>
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-2 px-6 py-3 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors group"
            >
              <ChevronLeft className="h-5 w-5 group-hover:-translate-x-1 transition-transform" />
              <div className="text-left">
                <div className="text-sm text-gray-500">Précédent</div>
                <div className="font-semibold">{previousSection.title}</div>
              </div>
            </motion.div>
          </Link>
        ) : (
          <div></div>
        )}
      </div>

      {/* Retour au plan */}
      <div className="flex-1 flex justify-center">
        <Link href="/">
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-4 py-2 text-purple-600 hover:text-purple-700 font-medium transition-colors"
          >
            Plan du cours
          </motion.div>
        </Link>
      </div>

      {/* Section suivante */}
      <div className="flex-1 flex justify-end">
        {nextSection ? (
          <Link href={nextSection.href}>
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-2 px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors group"
            >
              <div className="text-right">
                <div className="text-sm text-purple-200">Suivant</div>
                <div className="font-semibold">{nextSection.title}</div>
              </div>
              <ChevronRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </motion.div>
          </Link>
        ) : (
          <div></div>
        )}
      </div>
    </motion.div>
  );
}