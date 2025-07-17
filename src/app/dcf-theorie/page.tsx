'use client';

import BackToPlanButton from '@/components/content/BackToPlanButton';
import { motion } from 'framer-motion';
import { Calculator, TrendingUp, DollarSign, BarChart3, Target, AlertTriangle, Lightbulb, CheckCircle, ArrowRight, PieChart, Activity, Zap, Shield, Users, Globe, Building, Briefcase, TrendingDown, Eye, Settings } from 'lucide-react';
import SectionNavigation from '@/components/content/SectionNavigation';



export default function DCFTheoriePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 to-pink-50">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-3 bg-white rounded-full px-6 py-3 shadow-lg mb-6">
            <TrendingUp className="h-8 w-8 text-red-600" />
            <h1 className="text-3xl font-bold text-gray-900">DCF - Théorie</h1>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Maîtrisez la méthode des flux de trésorerie actualisés pour une évaluation précise
          </p>
        </motion.div>



        {/* Section 1: Définition et Principes */}
        <motion.section
          id="definition"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="bg-white rounded-2xl shadow-xl p-8 mb-8"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 bg-red-100 rounded-full">
              <Target className="h-6 w-6 text-red-600" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900">Définition et Principes Fondamentaux</h2>
          </div>

          <div className="space-y-6">
            <div className="bg-red-50 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-red-800 mb-3">Définition</h3>
              <p className="text-gray-700">
                La méthode DCF (Discounted Cash Flow) évalue une entreprise en actualisant ses flux de trésorerie futurs 
                à leur valeur présente, en utilisant un taux de rendement requis qui reflète le risque de l&apos;investissement.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gray-50 rounded-xl p-6">
                <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                  <Calculator className="h-5 w-5 text-red-600" />
                  Formule Générale
                </h4>
                <div className="bg-white rounded-lg p-4 font-mono text-sm">
                  <div className="text-center">
                    <div className="mb-2">Valeur = Σ (FCFt / (1 + WACC)^t) + VT / (1 + WACC)^n</div>
                    <div className="text-xs text-gray-600">
                      FCF = Free Cash Flow | WACC = Coût moyen pondéré du capital | VT = Valeur terminale
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 rounded-xl p-6">
                <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                  <Lightbulb className="h-5 w-5 text-red-600" />
                  Principe Clé
                </h4>
                <p className="text-gray-700 text-sm">
                  La valeur d&apos;une entreprise correspond à la somme actualisée de tous les flux de trésorerie 
                  qu&apos;elle générera dans le futur, reflétant sa capacité à créer de la valeur.
                </p>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Section 2: Méthodologie */}
        <motion.section
          id="methodologie"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white rounded-2xl shadow-xl p-8 mb-8"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 bg-red-100 rounded-full">
              <BarChart3 className="h-6 w-6 text-red-600" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900">Étapes Méthodologiques</h2>
          </div>

          <div className="grid gap-6">
            {[
              {
                step: '1',
                title: 'Prévisions Financières',
                description: 'Élaboration du business plan et projections sur 5-10 ans',
                icon: TrendingUp,
                details: ['Chiffre d&apos;affaires', 'Charges opérationnelles', 'Investissements', 'BFR']
              },
              {
                step: '2',
                title: 'Calcul des FCF',
                description: 'Détermination des flux de trésorerie disponibles',
                icon: Calculator,
                details: ['EBITDA', 'Impôts', 'Capex', 'Variation BFR']
              },
              {
                step: '3',
                title: 'Détermination du WACC',
                description: 'Calcul du coût moyen pondéré du capital',
                icon: PieChart,
                details: ['Coût des fonds propres', 'Coût de la dette', 'Structure financière']
              },
              {
                step: '4',
                title: 'Valeur Terminale',
                description: 'Estimation de la valeur au-delà de la période explicite',
                icon: Target,
                details: ['Méthode de Gordon-Shapiro', 'Multiple de sortie', 'Taux de croissance perpétuel']
              },
              {
                step: '5',
                title: 'Actualisation',
                description: 'Calcul de la valeur présente et passage à la valeur des fonds propres',
                icon: DollarSign,
                details: ['Actualisation des FCF', 'Soustraction dette nette', 'Valeur par action']
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className="bg-gradient-to-r from-red-50 to-pink-50 rounded-xl p-6"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 bg-red-600 text-white rounded-full flex items-center justify-center font-bold">
                      {item.step}
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <item.icon className="h-5 w-5 text-red-600" />
                      <h3 className="text-lg font-semibold text-gray-900">{item.title}</h3>
                    </div>
                    <p className="text-gray-700 mb-3">{item.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {item.details.map((detail, idx) => (
                        <span key={idx} className="bg-white px-3 py-1 rounded-full text-sm text-gray-600 border">
                          {detail}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Section 3: Calcul des FCF */}
        <motion.section
          id="fcf"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="bg-white rounded-2xl shadow-xl p-8 mb-8"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 bg-red-100 rounded-full">
              <Calculator className="h-6 w-6 text-red-600" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900">Calcul des Free Cash Flows</h2>
          </div>

          <div className="space-y-6">
            <div className="bg-red-50 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-red-800 mb-4">Méthode de Calcul</h3>
              <div className="bg-white rounded-lg p-4">
                <div className="space-y-2 font-mono text-sm">
                  <div className="flex justify-between border-b pb-2">
                    <span>EBITDA</span>
                    <span className="text-green-600">+ XXX</span>
                  </div>
                  <div className="flex justify-between">
                    <span>- Impôts sur EBIT</span>
                    <span className="text-red-600">- XXX</span>
                  </div>
                  <div className="flex justify-between">
                    <span>- Investissements (Capex)</span>
                    <span className="text-red-600">- XXX</span>
                  </div>
                  <div className="flex justify-between">
                    <span>- Variation BFR</span>
                    <span className="text-red-600">- XXX</span>
                  </div>
                  <div className="flex justify-between border-t pt-2 font-bold">
                    <span>= Free Cash Flow</span>
                    <span className="text-blue-600">= XXX</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gray-50 rounded-xl p-6">
                <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                  <Activity className="h-5 w-5 text-red-600" />
                  Points d&apos;Attention
                </h4>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                    Utiliser l&apos;EBITDA normalisé
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                    Distinguer Capex de maintenance vs croissance
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                    Anticiper l&apos;évolution du BFR
                  </li>
                </ul>
              </div>

              <div className="bg-gray-50 rounded-xl p-6">
                <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                  <AlertTriangle className="h-5 w-5 text-red-600" />
                  Pièges à Éviter
                </h4>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="h-4 w-4 text-orange-600 mt-0.5 flex-shrink-0" />
                    Oublier les investissements de renouvellement
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="h-4 w-4 text-orange-600 mt-0.5 flex-shrink-0" />
                    Sous-estimer la variation du BFR
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="h-4 w-4 text-orange-600 mt-0.5 flex-shrink-0" />
                    Négliger les éléments exceptionnels
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Section 4: Calcul du WACC */}
        <motion.section
          id="wacc"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-white rounded-2xl shadow-xl p-8 mb-8"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 bg-red-100 rounded-full">
              <PieChart className="h-6 w-6 text-red-600" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900">Calcul du WACC</h2>
          </div>

          <div className="space-y-6">
            <div className="bg-red-50 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-red-800 mb-4">Formule du WACC</h3>
              <div className="bg-white rounded-lg p-4 font-mono text-sm text-center">
                WACC = (E/V × Re) + (D/V × Rd × (1-T))
                <div className="text-xs text-gray-600 mt-2">
                  E = Fonds propres | D = Dette | V = Valeur totale | Re = Coût des FP | Rd = Coût de la dette | T = Taux d&apos;impôt
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-blue-50 rounded-xl p-6">
                <h4 className="font-semibold text-blue-900 mb-3 flex items-center gap-2">
                  <Users className="h-5 w-5 text-blue-600" />
                  Coût des Fonds Propres
                </h4>
                <div className="space-y-3">
                  <div className="bg-white rounded-lg p-3">
                    <div className="text-sm font-medium mb-1">Méthode CAPM</div>
                    <div className="text-xs font-mono">Re = Rf + β × (Rm - Rf)</div>
                  </div>
                  <ul className="text-xs space-y-1">
                    <li>• Rf : Taux sans risque</li>
                    <li>• β : Bêta de l&apos;entreprise</li>
                    <li>• Rm : Rendement du marché</li>
                  </ul>
                </div>
              </div>

              <div className="bg-green-50 rounded-xl p-6">
                <h4 className="font-semibold text-green-900 mb-3 flex items-center gap-2">
                  <Building className="h-5 w-5 text-green-600" />
                  Coût de la Dette
                </h4>
                <div className="space-y-3">
                  <div className="bg-white rounded-lg p-3">
                    <div className="text-sm font-medium mb-1">Calcul</div>
                    <div className="text-xs font-mono">Rd = Taux moyen pondéré</div>
                  </div>
                  <ul className="text-xs space-y-1">
                    <li>• Taux d&apos;intérêt actuels</li>
                    <li>• Spread de crédit</li>
                    <li>• Échéancier de la dette</li>
                  </ul>
                </div>
              </div>

              <div className="bg-purple-50 rounded-xl p-6">
                <h4 className="font-semibold text-purple-900 mb-3 flex items-center gap-2">
                  <Shield className="h-5 w-5 text-purple-600" />
                  Structure Financière
                </h4>
                <div className="space-y-3">
                  <div className="bg-white rounded-lg p-3">
                    <div className="text-sm font-medium mb-1">Pondération</div>
                    <div className="text-xs font-mono">E/V et D/V</div>
                  </div>
                  <ul className="text-xs space-y-1">
                    <li>• Valeur de marché</li>
                    <li>• Structure cible</li>
                    <li>• Évolution temporelle</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Section 5: Valeur Terminale */}
        <motion.section
          id="valeur-terminale"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="bg-white rounded-2xl shadow-xl p-8 mb-8"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 bg-red-100 rounded-full">
              <Target className="h-6 w-6 text-red-600" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900">Calcul de la Valeur Terminale</h2>
          </div>

          <div className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-blue-50 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-blue-800 mb-4 flex items-center gap-2">
                  <TrendingUp className="h-5 w-5" />
                  Méthode de Gordon-Shapiro
                </h3>
                <div className="bg-white rounded-lg p-4 mb-4">
                  <div className="font-mono text-sm text-center">
                    VT = FCF(n+1) / (WACC - g)
                    <div className="text-xs text-gray-600 mt-2">
                      g = taux de croissance perpétuel
                    </div>
                  </div>
                </div>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span>Croissance stable à long terme</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span>Généralement 2-3% (inflation)</span>
                  </div>
                </div>
              </div>

              <div className="bg-green-50 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-green-800 mb-4 flex items-center gap-2">
                  <BarChart3 className="h-5 w-5" />
                  Méthode des Multiples
                </h3>
                <div className="bg-white rounded-lg p-4 mb-4">
                  <div className="font-mono text-sm text-center">
                    VT = Multiple × Métrique(n)
                    <div className="text-xs text-gray-600 mt-2">
                      EV/EBITDA, P/E, etc.
                    </div>
                  </div>
                </div>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span>Basé sur les comparables</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span>Validation croisée</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-orange-50 rounded-xl p-6">
              <h4 className="font-semibold text-orange-900 mb-3 flex items-center gap-2">
                <AlertTriangle className="h-5 w-5 text-orange-600" />
                Sensibilité de la Valeur Terminale
              </h4>
              <p className="text-gray-700 text-sm mb-3">
                La valeur terminale représente souvent 60-80% de la valeur totale. Une variation de 0,5% du taux de croissance 
                ou du WACC peut impacter significativement l&apos;évaluation.
              </p>
              <div className="bg-white rounded-lg p-4">
                <div className="text-xs font-mono">
                  Exemple : g = 2% vs 2,5% → Impact de +15% sur la valeur
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Section 6: Adaptations Sectorielles */}
        <motion.section
          id="adaptations"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="bg-white rounded-2xl shadow-xl p-8 mb-8"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 bg-red-100 rounded-full">
              <Globe className="h-6 w-6 text-red-600" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900">Adaptations Sectorielles</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                sector: 'Technologie',
                icon: Zap,
                color: 'blue',
                adaptations: [
                  'Forte croissance initiale',
                  'Capex limités (logiciels)',
                  'BFR souvent négatif',
                  'Taux d&apos;actualisation élevés'
                ]
              },
              {
                sector: 'Industrie',
                icon: Settings,
                color: 'green',
                adaptations: [
                  'Capex de renouvellement importants',
                  'Cycles d&apos;investissement longs',
                  'BFR significatif',
                  'Sensibilité aux cycles économiques'
                ]
              },
              {
                sector: 'Services',
                icon: Users,
                color: 'purple',
                adaptations: [
                  'Capex limités',
                  'Coûts de personnel prépondérants',
                  'Récurrence des revenus',
                  'Scalabilité du modèle'
                ]
              },
              {
                sector: 'Retail',
                icon: Briefcase,
                color: 'orange',
                adaptations: [
                  'Saisonnalité marquée',
                  'Investissements en stocks',
                  'Expansion géographique',
                  'Digitalisation des canaux'
                ]
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className={`bg-${item.color}-50 rounded-xl p-6`}
              >
                <div className="flex items-center gap-3 mb-4">
                  <item.icon className={`h-6 w-6 text-${item.color}-600`} />
                  <h3 className={`text-lg font-semibold text-${item.color}-900`}>{item.sector}</h3>
                </div>
                <ul className="space-y-2">
                  {item.adaptations.map((adaptation, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm">
                      <ArrowRight className={`h-4 w-4 text-${item.color}-600 mt-0.5 flex-shrink-0`} />
                      <span className="text-gray-700">{adaptation}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Section 7: Analyse de Sensibilité */}
        <motion.section
          id="sensibilite"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="bg-white rounded-2xl shadow-xl p-8 mb-8"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 bg-red-100 rounded-full">
              <Eye className="h-6 w-6 text-red-600" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900">Analyse de Sensibilité</h2>
          </div>

          <div className="space-y-6">
            <div className="bg-red-50 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-red-800 mb-4">Variables Clés à Tester</h3>
              <div className="grid md:grid-cols-3 gap-4">
                {[
                  { param: 'Taux de croissance', impact: 'Très élevé', range: '±0,5%' },
                  { param: 'WACC', impact: 'Très élevé', range: '±0,5%' },
                  { param: 'Marge EBITDA', impact: 'Élevé', range: '±1%' },
                  { param: 'Capex/CA', impact: 'Moyen', range: '±0,5%' },
                  { param: 'BFR/CA', impact: 'Moyen', range: '±1%' },
                  { param: 'Taux d&apos;impôt', impact: 'Faible', range: '±2%' }
                ].map((item, index) => (
                  <div key={index} className="bg-white rounded-lg p-4">
                    <div className="font-medium text-sm mb-1">{item.param}</div>
                    <div className="text-xs text-gray-600 mb-1">Impact: {item.impact}</div>
                    <div className="text-xs font-mono bg-gray-100 px-2 py-1 rounded">{item.range}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-blue-50 rounded-xl p-6">
                <h4 className="font-semibold text-blue-900 mb-3 flex items-center gap-2">
                  <BarChart3 className="h-5 w-5 text-blue-600" />
                  Analyse Univariée
                </h4>
                <p className="text-gray-700 text-sm mb-3">
                  Test de l&apos;impact d&apos;une variable à la fois en maintenant les autres constantes.
                </p>
                <ul className="text-xs space-y-1">
                  <li>• Graphiques en tornade</li>
                  <li>• Élasticité de la valeur</li>
                  <li>• Seuils de rentabilité</li>
                </ul>
              </div>

              <div className="bg-green-50 rounded-xl p-6">
                <h4 className="font-semibold text-green-900 mb-3 flex items-center gap-2">
                  <Activity className="h-5 w-5 text-green-600" />
                  Analyse de Scénarios
                </h4>
                <p className="text-gray-700 text-sm mb-3">
                  Combinaison cohérente de plusieurs variables selon différents scénarios.
                </p>
                <ul className="text-xs space-y-1">
                  <li>• Scénario optimiste</li>
                  <li>• Scénario central</li>
                  <li>• Scénario pessimiste</li>
                </ul>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Section 8: Avantages et Limites */}
        <motion.section
          id="avantages-limites"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="bg-white rounded-2xl shadow-xl p-8 mb-8"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 bg-red-100 rounded-full">
              <AlertTriangle className="h-6 w-6 text-red-600" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900">Avantages et Limites</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-green-50 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-green-800 mb-4 flex items-center gap-2">
                <CheckCircle className="h-5 w-5" />
                Avantages
              </h3>
              <ul className="space-y-3">
                {[
                  'Méthode théoriquement rigoureuse',
                  'Prise en compte de la création de valeur',
                  'Flexibilité dans les hypothèses',
                  'Analyse prospective détaillée',
                  'Intégration du risque via le WACC'
                ].map((advantage, index) => (
                  <li key={index} className="flex items-start gap-2 text-sm">
                    <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{advantage}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-red-50 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-red-800 mb-4 flex items-center gap-2">
                <TrendingDown className="h-5 w-5" />
                Limites
              </h3>
              <ul className="space-y-3">
                {[
                  'Sensibilité aux hypothèses',
                  'Difficulté de prévision à long terme',
                  'Complexité du calcul du WACC',
                  'Subjectivité du taux de croissance',
                  'Poids important de la valeur terminale'
                ].map((limit, index) => (
                  <li key={index} className="flex items-start gap-2 text-sm">
                    <AlertTriangle className="h-4 w-4 text-red-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{limit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.section>

        {/* Section 9: Bonnes Pratiques */}
        <motion.section
          id="bonnes-pratiques"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="bg-white rounded-2xl shadow-xl p-8 mb-8"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 bg-red-100 rounded-full">
              <Lightbulb className="h-6 w-6 text-red-600" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900">Bonnes Pratiques</h2>
          </div>

          <div className="grid gap-6">
            {[
              {
                category: 'Prévisions',
                icon: TrendingUp,
                practices: [
                  'Baser les prévisions sur l&apos;historique et les tendances sectorielles',
                  'Valider la cohérence entre croissance et investissements',
                  'Intégrer les cycles économiques et sectoriels',
                  'Documenter toutes les hypothèses'
                ]
              },
              {
                category: 'Paramètres',
                icon: Settings,
                practices: [
                  'Utiliser des données de marché récentes pour le WACC',
                  'Ajuster le bêta selon la structure financière cible',
                  'Tester plusieurs taux de croissance terminale',
                  'Valider les multiples par des comparables'
                ]
              },
              {
                category: 'Validation',
                icon: CheckCircle,
                practices: [
                  'Effectuer une analyse de sensibilité complète',
                  'Comparer avec d&apos;autres méthodes d&apos;évaluation',
                  'Vérifier la cohérence des ratios financiers',
                  'Documenter les sources et méthodologies'
                ]
              }
            ].map((section, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className="bg-gradient-to-r from-red-50 to-pink-50 rounded-xl p-6"
              >
                <div className="flex items-center gap-3 mb-4">
                  <section.icon className="h-6 w-6 text-red-600" />
                  <h3 className="text-lg font-semibold text-gray-900">{section.category}</h3>
                </div>
                <ul className="space-y-2">
                  {section.practices.map((practice, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm">
                      <ArrowRight className="h-4 w-4 text-red-600 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{practice}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.section>

        <BackToPlanButton />
        
        <SectionNavigation
          previousSection={{
            title: "Multiples - Exercices",
            href: "/multiples-exercices"
          }}
          nextSection={{
            title: "DCF - Exercices",
            href: "/dcf-exercices"
          }}
        />
      </div>
    </div>
  );
}