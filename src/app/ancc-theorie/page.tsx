'use client';

import BackToPlanButton from '@/components/content/BackToPlanButton';
import SectionNavigation from '@/components/content/SectionNavigation';
import { motion } from 'framer-motion';
import { Scale, AlertTriangle, CheckCircle, Calculator, Building, TrendingUp, BarChart3 } from 'lucide-react';

const actifsFictifs = [
  {
    categorie: 'Frais immobilisés',
    elements: [
      'Frais d\'établissement (constitution, transformation)',
      'Frais d\'augmentation de capital',
      'Frais d\'émission d\'emprunts',
      'Frais d\'acquisition d\'immobilisations',
      'Charges à répartir sur plusieurs exercices'
    ]
  },
  {
    categorie: 'R&D et incorporel',
    elements: [
      'Frais de R&D activés (projets abandonnés/incertains)',
      'Concessions et brevets obsolètes',
      'Logiciels inutilisés ou dépassés',
      'Frais de développement sur marchés abandonnés'
    ]
  },
  {
    categorie: 'Financier',
    elements: [
      'Primes de remboursement des obligations',
      'Écarts de conversion actif (si non couverts)',
      'Charges constatées d\'avance douteuses',
      'Comptes de régularisation sans substance économique'
    ]
  }
];

const elementsHorsBilan = [
  {
    categorie: 'Contrats de financement',
    elements: 'Crédit-bail mobilier/immobilier, Location avec option d\'achat (LOA), Contrats de location-financement',
    impact: '+Actif/-Passif',
    calcul: 'Valeur actuelle bien - Dette restante'
  },
  {
    categorie: 'Créances et effets',
    elements: 'Effets escomptés non échus (EENE), Affacturage avec recours, Créances cédées avec garantie',
    impact: '+Actif/+Passif',
    calcul: 'Créances cédées + Dette bancaire'
  },
  {
    categorie: 'Engagements sociaux',
    elements: 'Provisions retraites/fin de carrière, Engagements de préretraite, Médailles du travail, Comptes épargne-temps',
    impact: '-Passif',
    calcul: 'Provisions non comptabilisées'
  },
  {
    categorie: 'Garanties et cautions',
    elements: 'Cautions données, Avals et garanties accordés, Garanties de passif sur cessions',
    impact: '-Passif',
    calcul: 'Risque évalué de mise en jeu'
  }
];

const reevaluations = [
  { categorie: 'Immobilier', methode: 'Expertise immobilière → Valeur vénale' },
  { categorie: 'Machines', methode: 'Valeur d\'utilité ou de remplacement' },
  { categorie: 'Titres cotés', methode: 'Cours de bourse (moyenne mobile)' },
  { categorie: 'Titres non cotés', methode: 'Valorisation par DCF/ANCC/Multiples' },
  { categorie: 'Stocks', methode: 'Valeur réalisable nette (obsolètes = 0)' },
  { categorie: 'Créances', methode: 'Analyse ancienneté → Créances douteuses' }
];

const secteursPrivilegies = [
  { secteur: 'Holdings', description: 'avec participations importantes' },
  { secteur: 'Sociétés immobilières', description: 'patrimoine immobilier significatif' },
  { secteur: 'Entreprises industrielles', description: 'avec patrimoine lourd' },
  { secteur: 'Situations de restructuration', description: 'ou liquidation' }
];

const avantages = [
  'Basée sur des éléments concrets et vérifiables',
  'Donne une valeur plancher ("valeur de liquidation")',
  'Utile pour les négociations d\'acquisition',
  'Complète l\'analyse DCF et multiples'
];

const limites = [
  'Ignore la rentabilité future et le potentiel de croissance',
  'Sous-estime les entreprises de services/technologie',
  'Ne capture pas les synergies opérationnelles',
  'Approche statique qui ne reflète pas le dynamisme'
];

export default function ANNCTheoriePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        <BackToPlanButton />
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="bg-emerald-100 p-3 rounded-xl">
              <Scale className="h-8 w-8 text-emerald-600" />
            </div>
            <div>
              <h1 className="text-4xl font-bold text-gray-900">
                ANCC - Théorie Complète
              </h1>
              <p className="text-gray-600 text-lg">
                Actif Net Comptable Corrigé - Approche Patrimoniale
              </p>
            </div>
          </div>
          
          {/* Définition et Principe */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Définition et Principe</h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-semibold text-emerald-600 mb-3">Qu&apos;est-ce que l&apos;ANCC ?</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  L&apos;<strong>Actif Net Comptable Corrigé (ANCC)</strong> est une méthode de valorisation patrimoniale 
                  qui vise à déterminer la valeur économique réelle d&apos;une entreprise en corrigeant les insuffisances 
                  du bilan comptable.
                </p>
                
                <div className="bg-emerald-50 border-l-4 border-emerald-500 p-4 rounded-r-lg">
                  <h4 className="font-semibold text-emerald-900 mb-2">Question centrale</h4>
                  <p className="text-emerald-800 italic">
                    "Si je devais reconstituer l&apos;outil de production aujourd&apos;hui ou vendre tous les actifs 
                    au meilleur prix, quelle serait la valeur nette après avoir payé toutes les dettes ?"
                  </p>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-emerald-600 mb-3">Formule de Base</h3>
                <div className="bg-gray-50 p-6 rounded-lg border-2 border-emerald-200">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-gray-900 mb-2">ANCC =</div>
                    <div className="text-lg text-gray-700 space-y-1">
                      <div>ANC + Corrections positives</div>
                      <div>- Corrections négatives</div>
                      <div>- Impôt latent</div>
                    </div>
                  </div>
                  <div className="mt-4 pt-4 border-t border-gray-300 text-center text-sm text-gray-600">
                    Où <strong>ANC = Capitaux Propres</strong> (Total Actif - Total Dettes)
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Étapes de Calcul */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Étapes de Calcul</h2>
            
            <div className="space-y-8">
              {/* Point de départ */}
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-blue-100 p-2 rounded-full">
                    <Calculator className="h-5 w-5 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">1. Point de Départ : L&apos;ANC</h3>
                </div>
                <ul className="list-disc list-inside text-gray-700 space-y-1 ml-8">
                  <li>Partir des <strong>Capitaux Propres</strong> du bilan comptable</li>
                  <li>ANC = Total Actif - Total Passif (hors capitaux propres)</li>
                </ul>
              </div>
              
              {/* Éliminer les actifs fictifs */}
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-red-100 p-2 rounded-full">
                    <AlertTriangle className="h-5 w-5 text-red-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">2A. Éliminer les Actifs Fictifs ❌</h3>
                </div>
                <p className="text-gray-700 mb-4 ml-8">
                  <strong>Définition :</strong> Éléments inscrits à l&apos;actif mais sans valeur de revente ou d&apos;utilité économique réelle
                </p>
                
                <div className="ml-8 space-y-4">
                  {actifsFictifs.map((categorie, index) => (
                    <div key={index} className="border border-gray-200 rounded-lg p-4">
                      <h4 className="font-semibold text-gray-900 mb-2">{categorie.categorie}</h4>
                      <ul className="list-disc list-inside text-gray-700 space-y-1">
                        {categorie.elements.map((element, idx) => (
                          <li key={idx}>{element}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Intégrer éléments hors-bilan */}
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-green-100 p-2 rounded-full">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">2B. Intégrer les Éléments Hors-Bilan ➕</h3>
                </div>
                <p className="text-gray-700 mb-4 ml-8">
                  <strong>Principe :</strong> Ajouter des biens/dettes non inscrits au bilan mais ayant une valeur ou coût économique
                </p>
                
                <div className="ml-8 overflow-x-auto">
                  <table className="w-full border border-gray-200 rounded-lg">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-4 py-3 text-left font-semibold text-gray-900">Catégorie</th>
                        <th className="px-4 py-3 text-left font-semibold text-gray-900">Éléments</th>
                        <th className="px-4 py-3 text-left font-semibold text-gray-900">Impact</th>
                        <th className="px-4 py-3 text-left font-semibold text-gray-900">Calcul</th>
                      </tr>
                    </thead>
                    <tbody>
                      {elementsHorsBilan.map((element, index) => (
                        <tr key={index} className="border-t border-gray-200">
                          <td className="px-4 py-3 font-medium text-gray-900">{element.categorie}</td>
                          <td className="px-4 py-3 text-gray-700 text-sm">{element.elements}</td>
                          <td className="px-4 py-3 text-gray-700">{element.impact}</td>
                          <td className="px-4 py-3 text-gray-700 text-sm">{element.calcul}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
              
              {/* Réévaluer à la valeur de marché */}
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-purple-100 p-2 rounded-full">
                    <TrendingUp className="h-5 w-5 text-purple-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">2C. Réévaluer à la Valeur de Marché 📈📉</h3>
                </div>
                <p className="text-gray-700 mb-4 ml-8">
                  <strong>Objectif :</strong> Remplacer valeurs comptables par valeurs économiques actuelles
                </p>
                
                <div className="ml-8 grid md:grid-cols-2 gap-4">
                  {reevaluations.map((reeval, index) => (
                    <div key={index} className="border border-gray-200 rounded-lg p-4">
                      <h4 className="font-semibold text-gray-900 mb-1">{reeval.categorie}</h4>
                      <p className="text-gray-700 text-sm">{reeval.methode}</p>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Calcul impôt latent */}
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-orange-100 p-2 rounded-full">
                    <Calculator className="h-5 w-5 text-orange-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">3. Calcul de l&apos;Impôt Latent</h3>
                </div>
                <div className="ml-8 bg-orange-50 p-4 rounded-lg">
                  <div className="font-mono text-sm space-y-1">
                    <div>Plus-values nettes = (Plus-values) - (Moins-values)</div>
                    <div>Impôt latent = Plus-values nettes × Taux IS</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Quand utiliser l'ANCC */}
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Quand Utiliser l&apos;ANCC ?</h2>
              
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-emerald-600 mb-3">✅ Secteurs Privilégiés</h3>
                <div className="space-y-3">
                  {secteursPrivilegies.map((secteur, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <Building className="h-5 w-5 text-emerald-600 flex-shrink-0" />
                      <div>
                        <span className="font-medium text-gray-900">{secteur.secteur}</span>
                        <span className="text-gray-600 text-sm ml-2">{secteur.description}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-emerald-600 mb-3">✅ Avantages</h3>
                <ul className="space-y-2">
                  {avantages.map((avantage, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{avantage}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Limites et Précautions</h2>
              
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-red-600 mb-3">❌ Limites</h3>
                <ul className="space-y-2">
                  {limites.map((limite, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <AlertTriangle className="h-5 w-5 text-red-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{limite}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 rounded-r-lg">
                <h3 className="text-lg font-semibold text-yellow-800 mb-2">Points d&apos;Attention</h3>
                <ul className="text-yellow-700 space-y-1 text-sm">
                  <li>• <strong>Immobilier :</strong> Déduire droits de mutation (7-8%)</li>
                  <li>• <strong>Distribution :</strong> Valoriser emplacements commerciaux</li>
                  <li>• <strong>Technologie :</strong> Attention à l&apos;obsolescence rapide</li>
                  <li>• <strong>Industrie :</strong> Intégrer coûts de démantèlement</li>
                </ul>
              </div>
            </div>
          </div>
          
          {/* Position dans l'évaluation globale */}
          <div className="bg-gradient-to-r from-emerald-50 to-blue-50 border border-emerald-200 rounded-xl p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Position dans l&apos;Évaluation Globale</h2>
            
            <p className="text-gray-700 mb-6">
              L&apos;ANCC est une des <strong>trois approches fondamentales</strong> de valorisation :
            </p>
            
            <div className="grid md:grid-cols-3 gap-6 mb-6">
              <div className="text-center">
                <div className="bg-emerald-100 p-4 rounded-full w-16 h-16 mx-auto mb-3 flex items-center justify-center">
                  <Scale className="h-8 w-8 text-emerald-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-1">Approche patrimoniale</h3>
                <p className="text-gray-600 text-sm">(ANCC) → Valeur de liquidation</p>
              </div>
              
              <div className="text-center">
                <div className="bg-blue-100 p-4 rounded-full w-16 h-16 mx-auto mb-3 flex items-center justify-center">
                  <TrendingUp className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-1">Approche intrinsèque</h3>
                <p className="text-gray-600 text-sm">(DCF) → Valeur de rentabilité</p>
              </div>
              
              <div className="text-center">
                <div className="bg-orange-100 p-4 rounded-full w-16 h-16 mx-auto mb-3 flex items-center justify-center">
                  <BarChart3 className="h-8 w-8 text-orange-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-1">Approche comparative</h3>
                <p className="text-gray-600 text-sm">(Multiples) → Valeur de marché</p>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg border border-emerald-200">
              <h3 className="font-semibold text-gray-900 mb-2">Synthèse recommandée</h3>
              <p className="text-gray-700">
                Utiliser les trois méthodes et analyser les écarts pour obtenir une fourchette de valorisation robuste.
              </p>
            </div>
          </div>
        </motion.div>
        
        <SectionNavigation
          previousSection={{
            title: "Introduction",
            href: "/introduction"
          }}
          nextSection={{
            title: "ANCC - Exercices",
            href: "/ancc-exercices"
          }}
        />
      </div>
    </div>
  );
}