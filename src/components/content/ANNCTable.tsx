'use client';

import { motion } from 'framer-motion';

interface TableRow {
  [key: string]: string | number;
}

interface ANNCTableProps {
  title: string;
  headers: string[];
  rows: TableRow[];
  className?: string;
  highlightLastRow?: boolean;
  colorScheme?: 'default' | 'emerald' | 'blue' | 'orange';
}

const colorSchemes = {
  default: {
    header: 'bg-gray-50 text-gray-900',
    border: 'border-gray-200',
    highlight: 'bg-blue-50'
  },
  emerald: {
    header: 'bg-emerald-50 text-emerald-900',
    border: 'border-emerald-200',
    highlight: 'bg-emerald-100'
  },
  blue: {
    header: 'bg-blue-50 text-blue-900',
    border: 'border-blue-200',
    highlight: 'bg-blue-100'
  },
  orange: {
    header: 'bg-orange-50 text-orange-900',
    border: 'border-orange-200',
    highlight: 'bg-orange-100'
  }
};

export default function ANNCTable({ 
  title, 
  headers, 
  rows, 
  className = '', 
  highlightLastRow = false,
  colorScheme = 'default'
}: ANNCTableProps) {
  const colors = colorSchemes[colorScheme];
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={`bg-white rounded-xl shadow-lg overflow-hidden ${className}`}
    >
      <div className={`px-6 py-4 ${colors.header} border-b ${colors.border}`}>
        <h3 className="text-lg font-semibold">{title}</h3>
      </div>
      
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className={`${colors.header} border-b ${colors.border}`}>
              {headers.map((header, index) => (
                <th 
                  key={index} 
                  className="px-4 py-3 text-left font-semibold text-sm"
                >
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row, rowIndex) => {
              const isLastRow = rowIndex === rows.length - 1;
              const shouldHighlight = highlightLastRow && isLastRow;
              
              return (
                <tr 
                  key={rowIndex} 
                  className={`
                    border-b border-gray-100 hover:bg-gray-50 transition-colors
                    ${shouldHighlight ? colors.highlight : ''}
                    ${isLastRow ? 'border-b-2 ' + colors.border : ''}
                  `}
                >
                  {headers.map((header, cellIndex) => {
                    const cellValue = row[header];
                    const isNumeric = typeof cellValue === 'number' || 
                                    (typeof cellValue === 'string' && /^[+-]?\d+/.test(cellValue));
                    
                    return (
                      <td 
                        key={cellIndex} 
                        className={`
                          px-4 py-3 text-sm
                          ${isNumeric ? 'text-right font-mono' : 'text-left'}
                          ${shouldHighlight ? 'font-semibold' : ''}
                        `}
                      >
                        {cellValue}
                      </td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </motion.div>
  );
}

// Composant spécialisé pour les calculs ANCC
interface ANNCCalculationTableProps {
  title: string;
  calculations: {
    step: string;
    description: string;
    calculation?: string;
    amount: string | number;
  }[];
  finalAmount: string | number;
  colorScheme?: 'emerald' | 'blue' | 'orange';
}

export function ANNCCalculationTable({ 
  title, 
  calculations, 
  finalAmount, 
  colorScheme = 'emerald' 
}: ANNCCalculationTableProps) {
  const colors = colorSchemes[colorScheme];
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white rounded-xl shadow-lg overflow-hidden"
    >
      <div className={`px-6 py-4 ${colors.header} border-b ${colors.border}`}>
        <h3 className="text-lg font-semibold">{title}</h3>
      </div>
      
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className={`${colors.header} border-b ${colors.border}`}>
              <th className="px-4 py-3 text-left font-semibold text-sm w-16">N°</th>
              <th className="px-4 py-3 text-left font-semibold text-sm">Retraitement</th>
              <th className="px-4 py-3 text-left font-semibold text-sm">Calcul</th>
              <th className="px-4 py-3 text-right font-semibold text-sm w-24">Impact K€</th>
            </tr>
          </thead>
          <tbody>
            {calculations.map((calc, index) => (
              <tr key={index} className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                <td className="px-4 py-3 text-sm font-medium text-gray-600">
                  {calc.step}
                </td>
                <td className="px-4 py-3 text-sm text-gray-900">
                  {calc.description}
                </td>
                <td className="px-4 py-3 text-sm text-gray-700 font-mono">
                  {calc.calculation || '-'}
                </td>
                <td className="px-4 py-3 text-sm text-right font-mono font-semibold">
                  <span className={`
                    ${typeof calc.amount === 'string' && calc.amount.startsWith('+') ? 'text-green-600' : ''}
                    ${typeof calc.amount === 'string' && calc.amount.startsWith('-') ? 'text-red-600' : ''}
                  `}>
                    {calc.amount}
                  </span>
                </td>
              </tr>
            ))}
            
            {/* Ligne finale */}
            <tr className={`border-t-2 ${colors.border} ${colors.highlight}`}>
              <td className="px-4 py-4 text-sm font-bold" colSpan={3}>
                {title.includes('FINAL') ? 'ANCC FINAL' : 'TOTAL'}
              </td>
              <td className="px-4 py-4 text-sm text-right font-mono font-bold text-lg">
                <span className="text-gray-900">{finalAmount}</span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </motion.div>
  );
}