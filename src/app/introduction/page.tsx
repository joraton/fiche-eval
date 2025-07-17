'use client';

import BackToPlanButton from '@/components/content/BackToPlanButton';
import SectionNavigation from '@/components/content/SectionNavigation';
import { motion } from 'framer-motion';
import { Scale, TrendingUp, BarChart3, Target, CheckCircle } from 'lucide-react';

const methods = [
  {
    name: 'ANCC - Approche Patrimoniale',
    icon: Scale,
    color: 'text-emerald-600',
    bgColor: 'bg-emerald-100',
    description: 'Valorisation basée sur les actifs nets corrigés',
    principle: 'Valeur de liquidation ordonnée',
    formula: 'ANCC = ANC + Corrections positives - Corrections négatives - Impôt latent',
    useCases: ['Holdings avec participations', 'Sociétés immobilières', 'Entreprises industrielles', 'Situations de restructuration'],
    advantages: ['Basée sur des éléments concrets', 'Valeur plancher fiable', 'Utile pour négociations'],
    limits: ['Ignore la rentabilité future', 'Sous-estime les entreprises de services', 'Approche statique']
  },
  {
    name: 'DCF - Approche Intrinsèque',
    icon: TrendingUp,
    color: 'text-blue-600',
    bgColor: 'bg-blue-100',
    description: 'Valorisation par actualisation des flux futurs',
    principle: 'Valeur de rentabilité',
    formula: 'DCF = Σ (FCF / (1+WACC)^n) + Valeur terminale actualisée',
    useCases: ['Entreprises en croissance', 'Sociétés de services', 'Projets d\'investissement', 'Valorisations stratégiques'],
    advantages: ['Capture le potentiel futur', 'Méthode théoriquement robuste', 'Intègre la stratégie'],
    limits: ['Sensible aux hypothèses', 'Complexe à mettre en œuvre', 'Incertitude sur les prévisions']
  },
  {
    name: 'Multiples - Approche Comparative',
    icon: BarChart3,
    color: 'text-orange-600',
    bgColor: 'bg-orange-100',
    description: 'Valorisation par comparaison avec le marché',
    principle: 'Valeur de marché relative',
    formula: 'Valeur = Multiple sectoriel × Agrégat financier',
    useCases: ['Marchés liquides', 'Secteurs standardisés', 'Valorisations rapides', 'Contrôle de cohérence'],
    advantages: ['Rapide à mettre en œuvre', 'Reflète le marché', 'Facile à comprendre'],
    limits: ['Dépend de la qualité des comparables', 'Peut être biaisée par les cycles', 'Moins précise']
  }
];

export default function IntroductionPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        <BackToPlanButton />
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-6">
            Introduction aux Méthodes d&apos;Évaluation
          </h1>
          
          <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-8 rounded-r-lg">
            <div className="flex items-center gap-3 mb-3">
              <Target className="h-6 w-6 text-blue-600" />
              <h2 className="text-xl font-semibold text-blue-900">
                Objectif de l&apos;évaluation d&apos;entreprise
              </h2>
            </div>
            <p className="text-blue-800 leading-relaxed">
              L&apos;évaluation d&apos;entreprise vise à déterminer la valeur économique d&apos;une société dans un contexte donné. 
              Cette valeur dépend de l&apos;objectif (cession, acquisition, transmission) et de la perspective de l&apos;évaluateur.
            </p>
          </div>
          
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Les 3 Approches Fondamentales
            </h2>
            <p className="text-gray-700 mb-6">
              Chaque méthode répond à une question différente et apporte un éclairage complémentaire sur la valeur de l&apos;entreprise.
            </p>
          </div>
          
          <div className="grid gap-8 lg:grid-cols-1">
            {methods.map((method, index) => {
              const IconComponent = method.icon;
              
              return (
                <motion.div
                  key={method.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  className="bg-white rounded-xl shadow-lg p-8"
                >
                  <div className="flex items-center gap-4 mb-6">
                    <div className={`p-3 rounded-full ${method.bgColor}`}>
                      <IconComponent className={`h-8 w-8 ${method.color}`} />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900">
                        {method.name}
                      </h3>
                      <p className="text-gray-600">
                        {method.description}
                      </p>
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Principe</h4>
                      <p className="text-gray-700 mb-4">{method.principle}</p>
                      
                      <h4 className="font-semibold text-gray-900 mb-2">Formule</h4>
                      <div className="bg-gray-50 p-3 rounded-lg font-mono text-sm text-gray-800 mb-4">
                        {method.formula}
                      </div>
                      
                      <h4 className="font-semibold text-gray-900 mb-2">Cas d&apos;usage</h4>
                      <ul className="space-y-1">
                        {method.useCases.map((useCase, idx) => (
                          <li key={idx} className="flex items-center gap-2 text-gray-700">
                            <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                            {useCase}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Avantages</h4>
                      <ul className="space-y-1 mb-4">
                        {method.advantages.map((advantage, idx) => (
                          <li key={idx} className="flex items-center gap-2 text-green-700">
                            <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                            {advantage}
                          </li>
                        ))}
                      </ul>
                      
                      <h4 className="font-semibold text-gray-900 mb-2">Limites</h4>
                      <ul className="space-y-1">
                        {method.limits.map((limit, idx) => (
                          <li key={idx} className="flex items-center gap-2 text-red-700">
                            <div className="h-4 w-4 border-2 border-red-500 rounded-full flex-shrink-0" />
                            {limit}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="bg-gradient-to-r from-purple-50 to-blue-50 border border-purple-200 rounded-xl p-8 mt-8"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Synthèse et Recommandations
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Approche recommandée</h3>
                <p className="text-gray-700 mb-4">
                  Utiliser les trois méthodes de manière complémentaire pour obtenir une fourchette de valorisation robuste.
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li>• <strong>ANCC</strong> : Valeur plancher (liquidation)</li>
                  <li>• <strong>DCF</strong> : Valeur intrinsèque (rentabilité)</li>
                  <li>• <strong>Multiples</strong> : Valeur de marché (comparaison)</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Analyse des écarts</h3>
                <p className="text-gray-700">
                  Les écarts entre les méthodes révèlent des informations précieuses sur :
                </p>
                <ul className="space-y-2 text-gray-700 mt-3">
                  <li>• La qualité de la gestion</li>
                  <li>• Le potentiel de croissance</li>
                  <li>• Les synergies possibles</li>
                  <li>• Les risques spécifiques</li>
                </ul>
              </div>
            </div>
          </motion.div>
        </motion.div>
        
        <SectionNavigation
          nextSection={{
            title: "ANCC - Théorie",
            href: "/ancc-theorie"
          }}
        />
      </div>
    </div>
  );
}