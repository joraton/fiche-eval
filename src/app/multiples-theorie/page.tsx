'use client';

import BackToPlanButton from '@/components/content/BackToPlanButton';
import SectionNavigation from '@/components/content/SectionNavigation';
import { motion } from 'framer-motion';
import { TrendingUp, Target, Calculator, BarChart3, Users, CheckCircle, AlertTriangle, Lightbulb, ArrowRight, Building2 } from 'lucide-react';

const secteurMultiples = [
  { 'Secteur': 'Technologie', 'Multiples privilégiés': 'VE/CA, P/E', 'Fourchettes typiques': 'VE/CA: 3-8x, P/E: 15-30x' },
  { 'Secteur': 'Distribution', 'Multiples privilégiés': 'VE/EBITDA, P/E', 'Fourchettes typiques': 'VE/EBITDA: 6-12x' },
  { 'Secteur': 'Industrie', 'Multiples privilégiés': 'VE/EBITDA, VE/EBIT', 'Fourchettes typiques': 'VE/EBITDA: 8-15x' },
  { 'Secteur': 'Immobilier', 'Multiples privilégiés': 'P/BV, VE/Loyers', 'Fourchettes typiques': 'P/BV: 0.8-1.5x' },
  { 'Secteur': 'Banque', 'Multiples privilégiés': 'P/BV, P/E', 'Fourchettes typiques': 'P/BV: 0.5-1.2x' },
  { 'Secteur': 'Énergie', 'Multiples privilégiés': 'VE/EBITDA, VE/Réserves', 'Fourchettes typiques': 'VE/EBITDA: 4-8x' }
];

const criteresSelection = [
  { 'Critère': 'Secteur d\'activité', 'Description': 'Même métier, même marché', 'Importance': '⭐⭐⭐' },
  { 'Critère': 'Taille', 'Description': 'CA, effectifs, capitalisation similaires', 'Importance': '⭐⭐⭐' },
  { 'Critère': 'Géographie', 'Description': 'Mêmes zones géographiques', 'Importance': '⭐⭐' },
  { 'Critère': 'Modèle économique', 'Description': 'Structure de coûts similaire', 'Importance': '⭐⭐⭐' },
  { 'Critère': 'Profil de croissance', 'Description': 'Croissance historique et prévisionnelle', 'Importance': '⭐⭐' },
  { 'Critère': 'Profil de risque', 'Description': 'Endettement, volatilité', 'Importance': '⭐⭐' },
  { 'Critère': 'Maturité', 'Description': 'Phase de développement', 'Importance': '⭐⭐' }
];

const multiplesEquity = [
  { 'Multiple': 'P/E (Price/Earnings)', 'Formule': 'Capitalisation / Résultat Net', 'Utilisation': 'Entreprises rentables et matures' },
  { 'Multiple': 'P/BV (Price/Book Value)', 'Formule': 'Capitalisation / Capitaux Propres', 'Utilisation': 'Sociétés avec actifs tangibles' },
  { 'Multiple': 'P/S (Price/Sales)', 'Formule': 'Capitalisation / CA', 'Utilisation': 'Entreprises en croissance, non rentables' }
];

const multiplesEntreprise = [
  { 'Multiple': 'VE/CA', 'Formule': 'Valeur d\'Entreprise / CA', 'Utilisation': 'Comparaison indépendante de la structure financière' },
  { 'Multiple': 'VE/EBITDA', 'Formule': 'Valeur d\'Entreprise / EBITDA', 'Utilisation': 'Le plus utilisé - neutralise amortissements et fiscalité' },
  { 'Multiple': 'VE/EBIT', 'Formule': 'Valeur d\'Entreprise / EBIT', 'Utilisation': 'Secteurs à intensité capitalistique similaire' }
];

export default function MultiplesTheoriePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8 max-w-7xl">
        <BackToPlanButton />
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-4 mb-8">
            <div className="bg-purple-100 p-3 rounded-xl">
              <TrendingUp className="h-8 w-8 text-purple-600" />
            </div>
            <div>
              <h1 className="text-4xl font-bold text-gray-900">
                Méthode des Multiples - Théorie
              </h1>
              <p className="text-gray-600 text-lg">
                Approche comparative pour l&apos;évaluation d&apos;entreprise
              </p>
            </div>
          </div>
          
          {/* Définition et Principe */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white rounded-xl shadow-lg p-8 mb-8"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-blue-100 p-3 rounded-xl">
                <Target className="h-8 w-8 text-blue-600" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900">Définition et Principe</h2>
            </div>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Qu&apos;est-ce que la Méthode des Multiples ?</h3>
                <p className="text-gray-700 leading-relaxed">
                  La <strong>méthode des multiples</strong> (ou approche comparative) évalue une entreprise en la comparant à des entreprises similaires (comparables) cotées en bourse ou ayant fait l&apos;objet de transactions récentes.
                </p>
              </div>
              
              <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg">
                <h4 className="font-semibold text-blue-900 mb-2">Principe Fondamental</h4>
                <p className="text-blue-800 mb-3">
                  <strong>Hypothèse de base :</strong> À un instant T, des entreprises similaires doivent avoir des valorisations similaires par rapport à leurs agrégats financiers (chiffre d&apos;affaires, EBITDA, résultat net...).
                </p>
                <div className="bg-white p-4 rounded-lg border border-blue-200">
                  <p className="text-sm text-gray-700 font-mono">
                    Si Entreprise A = 10x EBITDA et Entreprise B (similaire) = 12x EBITDA<br/>
                    → L&apos;une est sous-évaluée ou l&apos;autre est surévaluée<br/>
                    → Le marché devrait corriger cet écart
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
          
          {/* Étapes Méthodologiques */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="bg-white rounded-xl shadow-lg p-8 mb-8"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-green-100 p-3 rounded-xl">
                <Calculator className="h-8 w-8 text-green-600" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900">Étapes Méthodologiques</h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">1. Identification de l&apos;Entreprise Cible</h3>
                <div className="space-y-3">
                  <p className="text-gray-700">Collecter les agrégats financiers de l&apos;entreprise à valoriser :</p>
                  <ul className="text-sm text-gray-600 space-y-1 ml-4">
                    <li>• Chiffre d&apos;affaires (CA)</li>
                    <li>• EBITDA (Earnings Before Interest, Taxes, Depreciation, Amortization)</li>
                    <li>• EBIT (Résultat d&apos;exploitation)</li>
                    <li>• Résultat net</li>
                    <li>• Capitaux propres (fonds propres)</li>
                    <li>• Dette nette</li>
                  </ul>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">2. Sources d&apos;Information</h3>
                <div className="space-y-3">
                  <ul className="text-sm text-gray-600 space-y-2">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span><strong>Bases de données :</strong> Bloomberg, Factset, Capital IQ</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span><strong>Sites spécialisés :</strong> Yahoo Finance, Google Finance</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span><strong>Rapports annuels</strong> des entreprises cotées</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span><strong>Analyses sectorielles</strong> des cabinets</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
          
          {/* Sélection des Comparables */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="bg-white rounded-xl shadow-lg p-8 mb-8"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-orange-100 p-3 rounded-xl">
                <Users className="h-8 w-8 text-orange-600" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900">Sélection de l&apos;Échantillon de Comparables</h2>
            </div>
            
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-orange-50">
                    <th className="border border-orange-200 px-4 py-3 text-left font-semibold text-gray-900">Critère</th>
                    <th className="border border-orange-200 px-4 py-3 text-left font-semibold text-gray-900">Description</th>
                    <th className="border border-orange-200 px-4 py-3 text-center font-semibold text-gray-900">Importance</th>
                  </tr>
                </thead>
                <tbody>
                  {criteresSelection.map((critere, index) => (
                    <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                      <td className="border border-gray-200 px-4 py-3 font-medium text-gray-900">{critere.Critère}</td>
                      <td className="border border-gray-200 px-4 py-3 text-gray-700">{critere.Description}</td>
                      <td className="border border-gray-200 px-4 py-3 text-center">{critere.Importance}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>
          
          {/* Types de Multiples */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="bg-white rounded-xl shadow-lg p-8 mb-8"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-indigo-100 p-3 rounded-xl">
                <BarChart3 className="h-8 w-8 text-indigo-600" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900">Types de Multiples de Valorisation</h2>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-indigo-600 mb-4">A. Multiples d&apos;Equity (Capitaux Propres)</h3>
                <p className="text-gray-600 mb-4">Basés sur la <strong>capitalisation boursière</strong> de l&apos;entreprise.</p>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="bg-indigo-50">
                        <th className="border border-indigo-200 px-3 py-2 text-left text-sm font-semibold text-gray-900">Multiple</th>
                        <th className="border border-indigo-200 px-3 py-2 text-left text-sm font-semibold text-gray-900">Formule</th>
                        <th className="border border-indigo-200 px-3 py-2 text-left text-sm font-semibold text-gray-900">Utilisation</th>
                      </tr>
                    </thead>
                    <tbody>
                      {multiplesEquity.map((multiple, index) => (
                        <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                          <td className="border border-gray-200 px-3 py-2 text-sm font-medium text-gray-900">{multiple.Multiple}</td>
                          <td className="border border-gray-200 px-3 py-2 text-sm text-gray-700">{multiple.Formule}</td>
                          <td className="border border-gray-200 px-3 py-2 text-sm text-gray-700">{multiple.Utilisation}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-purple-600 mb-4">B. Multiples d&apos;Entreprise (Enterprise Value)</h3>
                <p className="text-gray-600 mb-4">Basés sur la <strong>valeur d&apos;entreprise</strong> (VE = Capitalisation + Dette Nette).</p>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="bg-purple-50">
                        <th className="border border-purple-200 px-3 py-2 text-left text-sm font-semibold text-gray-900">Multiple</th>
                        <th className="border border-purple-200 px-3 py-2 text-left text-sm font-semibold text-gray-900">Formule</th>
                        <th className="border border-purple-200 px-3 py-2 text-left text-sm font-semibold text-gray-900">Utilisation</th>
                      </tr>
                    </thead>
                    <tbody>
                      {multiplesEntreprise.map((multiple, index) => (
                        <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                          <td className="border border-gray-200 px-3 py-2 text-sm font-medium text-gray-900">{multiple.Multiple}</td>
                          <td className="border border-gray-200 px-3 py-2 text-sm text-gray-700">{multiple.Formule}</td>
                          <td className="border border-gray-200 px-3 py-2 text-sm text-gray-700">{multiple.Utilisation}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </motion.div>
          
          {/* Multiples par Secteur */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 1.0 }}
            className="bg-white rounded-xl shadow-lg p-8 mb-8"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-teal-100 p-3 rounded-xl">
                <Building2 className="h-8 w-8 text-teal-600" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900">Multiples par Secteur</h2>
            </div>
            
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-teal-50">
                    <th className="border border-teal-200 px-4 py-3 text-left font-semibold text-gray-900">Secteur</th>
                    <th className="border border-teal-200 px-4 py-3 text-left font-semibold text-gray-900">Multiples privilégiés</th>
                    <th className="border border-teal-200 px-4 py-3 text-left font-semibold text-gray-900">Fourchettes typiques</th>
                  </tr>
                </thead>
                <tbody>
                  {secteurMultiples.map((secteur, index) => (
                    <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                      <td className="border border-gray-200 px-4 py-3 font-medium text-gray-900">{secteur.Secteur}</td>
                      <td className="border border-gray-200 px-4 py-3 text-gray-700">{secteur['Multiples privilégiés']}</td>
                      <td className="border border-gray-200 px-4 py-3 text-gray-700">{secteur['Fourchettes typiques']}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>
          
          {/* Traitement Statistique */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 1.2 }}
            className="bg-white rounded-xl shadow-lg p-8 mb-8"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-red-100 p-3 rounded-xl">
                <BarChart3 className="h-8 w-8 text-red-600" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900">Traitement Statistique des Multiples</h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Mesures de Tendance Centrale</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Moyenne arithmétique</h4>
                      <p className="text-gray-700 text-sm">Sensible aux valeurs extrêmes</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-blue-600 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Médiane</h4>
                      <p className="text-gray-700 text-sm">Plus robuste, recommandée</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-purple-600 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Moyenne harmonique</h4>
                      <p className="text-gray-700 text-sm">Pour éviter les biais des multiples élevés</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Élimination des Outliers</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <AlertTriangle className="h-5 w-5 text-orange-600 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Méthode des quartiles</h4>
                      <p className="text-gray-700 text-sm">Supprimer Q1-1,5*IQR et Q3+1,5*IQR</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <AlertTriangle className="h-5 w-5 text-red-600 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Analyse manuelle</h4>
                      <p className="text-gray-700 text-sm">Vérifier la justification des valeurs aberrantes</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <AlertTriangle className="h-5 w-5 text-yellow-600 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Seuils aberrants</h4>
                      <p className="text-gray-700 text-sm">&gt; 50x ou &lt; 2x selon le secteur</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
          
          {/* Avantages et Limites */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 1.4 }}
            className="bg-white rounded-xl shadow-lg p-8 mb-8"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-yellow-100 p-3 rounded-xl">
                <Lightbulb className="h-8 w-8 text-yellow-600" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900">Avantages et Limites</h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-green-600 mb-4 flex items-center gap-2">
                  <CheckCircle className="h-5 w-5" />
                  Avantages
                </h3>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Rapidité d&apos;exécution</h4>
                      <p className="text-gray-700 text-sm">Résultats en quelques heures</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Simplicité de compréhension</h4>
                      <p className="text-gray-700 text-sm">Facile à expliquer aux non-financiers</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Reflet du marché</h4>
                      <p className="text-gray-700 text-sm">Intègre la perception actuelle des investisseurs</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Benchmarking</h4>
                      <p className="text-gray-700 text-sm">Permet de positionner l&apos;entreprise vs concurrents</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-red-600 mb-4 flex items-center gap-2">
                  <AlertTriangle className="h-5 w-5" />
                  Limites
                </h3>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <AlertTriangle className="h-5 w-5 text-red-600 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Qualité des comparables</h4>
                      <p className="text-gray-700 text-sm">Difficile de trouver des &quot;vrais jumeaux&quot;</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <AlertTriangle className="h-5 w-5 text-red-600 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Effets de marché</h4>
                      <p className="text-gray-700 text-sm">Propage les bulles ou sous-évaluations</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <AlertTriangle className="h-5 w-5 text-red-600 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Spécificités ignorées</h4>
                      <p className="text-gray-700 text-sm">Ne capture pas les avantages concurrentiels uniques</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <AlertTriangle className="h-5 w-5 text-red-600 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Timing</h4>
                      <p className="text-gray-700 text-sm">Sensible aux conditions de marché du moment</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
          
          {/* Bonnes Pratiques */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 1.6 }}
            className="bg-gradient-to-r from-purple-50 to-blue-50 border border-purple-200 rounded-xl p-8 mb-8"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Bonnes Pratiques</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-purple-600 mb-4">Constituer l&apos;Échantillon</h3>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <ArrowRight className="h-5 w-5 text-purple-600 flex-shrink-0 mt-1" />
                    <p className="text-gray-700 text-sm"><strong>Minimum 4-5 comparables</strong> pour éviter les biais</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <ArrowRight className="h-5 w-5 text-purple-600 flex-shrink-0 mt-1" />
                    <p className="text-gray-700 text-sm"><strong>Maximum 15-20</strong> pour rester manageable</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <ArrowRight className="h-5 w-5 text-purple-600 flex-shrink-0 mt-1" />
                    <p className="text-gray-700 text-sm"><strong>Justifier les exclusions</strong> des entreprises non retenues</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <ArrowRight className="h-5 w-5 text-purple-600 flex-shrink-0 mt-1" />
                    <p className="text-gray-700 text-sm"><strong>Documenter les sources</strong> et dates de collecte</p>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-blue-600 mb-4">Appliquer les Multiples</h3>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <ArrowRight className="h-5 w-5 text-blue-600 flex-shrink-0 mt-1" />
                    <p className="text-gray-700 text-sm"><strong>Utiliser plusieurs multiples</strong> pour validation croisée</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <ArrowRight className="h-5 w-5 text-blue-600 flex-shrink-0 mt-1" />
                    <p className="text-gray-700 text-sm"><strong>Pondérer selon la pertinence</strong> (VE/EBITDA souvent privilégié)</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <ArrowRight className="h-5 w-5 text-blue-600 flex-shrink-0 mt-1" />
                    <p className="text-gray-700 text-sm"><strong>Présenter une fourchette</strong> plutôt qu&apos;une valeur unique</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <ArrowRight className="h-5 w-5 text-blue-600 flex-shrink-0 mt-1" />
                    <p className="text-gray-700 text-sm"><strong>Analyser les écarts</strong> entre multiples</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
        
        <SectionNavigation
          previousSection={{
            title: "Quiz Final",
            href: "/quiz"
          }}
          nextSection={{
            title: "Multiples - Exercices",
            href: "/multiples-exercices"
          }}
        />
      </div>
    </div>
  );
}