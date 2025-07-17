'use client';

import { useState } from 'react';
import BackToPlanButton from '@/components/content/BackToPlanButton';
import { motion } from 'framer-motion';
import { Calculator, TrendingUp, DollarSign, BarChart3, Target, AlertTriangle, Lightbulb, CheckCircle, ArrowRight, Eye, EyeOff, Building, Zap, Users, Globe, PieChart, Activity } from 'lucide-react';
import SectionNavigation from '@/components/content/SectionNavigation';

const sections = [
  { id: 'exercice1', title: 'Exercice 1: GreenTech Industries' },
  { id: 'exercice2', title: 'Exercice 2: Luxe & Services SAS' },
  { id: 'points-cles', title: 'Points Clés d\'Apprentissage' }
];

export default function DCFExercicesPage() {
  const [showCorrection1, setShowCorrection1] = useState(false);
  const [showCorrection2, setShowCorrection2] = useState(false);

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
            <Calculator className="h-8 w-8 text-red-600" />
            <h1 className="text-3xl font-bold text-gray-900">DCF - Exercices Pratiques</h1>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Appliquez la méthode DCF sur des cas concrets d'entreprises
          </p>
        </motion.div>



        {/* Exercice 1: GreenTech Industries */}
        <motion.section
          id="exercice1"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="bg-white rounded-2xl shadow-xl p-8 mb-8"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 bg-green-100 rounded-full">
              <Zap className="h-6 w-6 text-green-600" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900">Exercice 1: GreenTech Industries SA</h2>
          </div>

          <div className="space-y-6">
            {/* Contexte */}
            <div className="bg-green-50 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-green-800 mb-4">Contexte de l'entreprise</h3>
              <p className="text-gray-700 mb-4">
                GreenTech Industries SA est une entreprise française spécialisée dans les solutions d'énergie renouvelable 
                (panneaux solaires, éoliennes domestiques). L'entreprise connaît une forte croissance depuis 5 ans.
              </p>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Données Historiques (en M€)</h4>
                  <div className="bg-white rounded-lg p-4">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="border-b">
                          <th className="text-left py-2">Année</th>
                          <th className="text-right py-2">CA</th>
                          <th className="text-right py-2">EBITDA</th>
                          <th className="text-right py-2">Capex</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr><td>2019</td><td className="text-right">45</td><td className="text-right">6.8</td><td className="text-right">3.2</td></tr>
                        <tr><td>2020</td><td className="text-right">52</td><td className="text-right">8.3</td><td className="text-right">4.1</td></tr>
                        <tr><td>2021</td><td className="text-right">61</td><td className="text-right">10.4</td><td className="text-right">5.5</td></tr>
                        <tr><td>2022</td><td className="text-right">73</td><td className="text-right">12.8</td><td className="text-right">6.2</td></tr>
                        <tr><td>2023</td><td className="text-right">85</td><td className="text-right">15.3</td><td className="text-right">7.1</td></tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Informations Complémentaires</h4>
                  <div className="bg-white rounded-lg p-4 space-y-2 text-sm">
                    <div className="flex justify-between"><span>BFR/CA:</span><span>12%</span></div>
                    <div className="flex justify-between"><span>Taux d'impôt:</span><span>25%</span></div>
                    <div className="flex justify-between"><span>Dette nette:</span><span>18 M€</span></div>
                    <div className="flex justify-between"><span>Bêta:</span><span>1.3</span></div>
                    <div className="flex justify-between"><span>Taux sans risque:</span><span>2.5%</span></div>
                    <div className="flex justify-between"><span>Prime de marché:</span><span>6%</span></div>
                    <div className="flex justify-between"><span>Coût de la dette:</span><span>4%</span></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Business Plan */}
            <div className="bg-blue-50 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-blue-800 mb-4">Hypothèses du Business Plan</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Croissance et Marges</h4>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li>• Croissance CA: 15% (2024-2026), puis 8% (2027-2028)</li>
                    <li>• Marge EBITDA: stabilisation à 18%</li>
                    <li>• Capex: 8% du CA en moyenne</li>
                    <li>• BFR: maintien à 12% du CA</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Paramètres Financiers</h4>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li>• Structure financière cible: 70% FP / 30% Dette</li>
                    <li>• Taux de croissance perpétuel: 2.5%</li>
                    <li>• Horizon de prévision: 5 ans (2024-2028)</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Questions */}
            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <Target className="h-5 w-5 text-red-600" />
                Questions à Résoudre
              </h3>
              <ol className="space-y-3 text-sm">
                <li className="flex gap-3">
                  <span className="bg-red-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold flex-shrink-0">1</span>
                  <span>Établissez les prévisions de chiffre d'affaires et d'EBITDA pour 2024-2028</span>
                </li>
                <li className="flex gap-3">
                  <span className="bg-red-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold flex-shrink-0">2</span>
                  <span>Calculez les Free Cash Flows prévisionnels</span>
                </li>
                <li className="flex gap-3">
                  <span className="bg-red-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold flex-shrink-0">3</span>
                  <span>Déterminez le WACC de l'entreprise</span>
                </li>
                <li className="flex gap-3">
                  <span className="bg-red-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold flex-shrink-0">4</span>
                  <span>Calculez la valeur terminale par la méthode de Gordon-Shapiro</span>
                </li>
                <li className="flex gap-3">
                  <span className="bg-red-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold flex-shrink-0">5</span>
                  <span>Déterminez la valeur des fonds propres et la valeur par action (1M d'actions)</span>
                </li>
              </ol>
            </div>

            {/* Bouton Correction */}
            <div className="text-center">
              <button
                onClick={() => setShowCorrection1(!showCorrection1)}
                className="inline-flex items-center gap-2 bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700 transition-colors"
              >
                {showCorrection1 ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                {showCorrection1 ? 'Masquer la correction' : 'Voir la correction'}
              </button>
            </div>

            {/* Correction */}
            {showCorrection1 && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                transition={{ duration: 0.5 }}
                className="bg-green-50 rounded-xl p-6 border-2 border-green-200"
              >
                <h3 className="text-lg font-semibold text-green-800 mb-4 flex items-center gap-2">
                  <CheckCircle className="h-5 w-5" />
                  Correction Détaillée
                </h3>

                <div className="space-y-6">
                  {/* Prévisions */}
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">1. Prévisions Financières</h4>
                    <div className="bg-white rounded-lg p-4">
                      <table className="w-full text-sm">
                        <thead>
                          <tr className="border-b">
                            <th className="text-left py-2">Année</th>
                            <th className="text-right py-2">CA (M€)</th>
                            <th className="text-right py-2">Croissance</th>
                            <th className="text-right py-2">EBITDA (M€)</th>
                            <th className="text-right py-2">Marge</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr><td>2024</td><td className="text-right">97.8</td><td className="text-right">15%</td><td className="text-right">17.6</td><td className="text-right">18%</td></tr>
                          <tr><td>2025</td><td className="text-right">112.4</td><td className="text-right">15%</td><td className="text-right">20.2</td><td className="text-right">18%</td></tr>
                          <tr><td>2026</td><td className="text-right">129.3</td><td className="text-right">15%</td><td className="text-right">23.3</td><td className="text-right">18%</td></tr>
                          <tr><td>2027</td><td className="text-right">139.6</td><td className="text-right">8%</td><td className="text-right">25.1</td><td className="text-right">18%</td></tr>
                          <tr><td>2028</td><td className="text-right">150.8</td><td className="text-right">8%</td><td className="text-right">27.1</td><td className="text-right">18%</td></tr>
                        </tbody>
                      </table>
                    </div>
                  </div>

                  {/* FCF */}
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">2. Calcul des Free Cash Flows</h4>
                    <div className="bg-white rounded-lg p-4">
                      <table className="w-full text-sm">
                        <thead>
                          <tr className="border-b">
                            <th className="text-left py-2">Année</th>
                            <th className="text-right py-2">EBITDA</th>
                            <th className="text-right py-2">Impôts*</th>
                            <th className="text-right py-2">Capex</th>
                            <th className="text-right py-2">Δ BFR</th>
                            <th className="text-right py-2">FCF</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr><td>2024</td><td className="text-right">17.6</td><td className="text-right">-4.4</td><td className="text-right">-7.8</td><td className="text-right">-1.5</td><td className="text-right">3.9</td></tr>
                          <tr><td>2025</td><td className="text-right">20.2</td><td className="text-right">-5.1</td><td className="text-right">-9.0</td><td className="text-right">-1.8</td><td className="text-right">4.3</td></tr>
                          <tr><td>2026</td><td className="text-right">23.3</td><td className="text-right">-5.8</td><td className="text-right">-10.3</td><td className="text-right">-2.0</td><td className="text-right">5.2</td></tr>
                          <tr><td>2027</td><td className="text-right">25.1</td><td className="text-right">-6.3</td><td className="text-right">-11.2</td><td className="text-right">-1.2</td><td className="text-right">6.4</td></tr>
                          <tr><td>2028</td><td className="text-right">27.1</td><td className="text-right">-6.8</td><td className="text-right">-12.1</td><td className="text-right">-1.3</td><td className="text-right">6.9</td></tr>
                        </tbody>
                      </table>
                      <p className="text-xs text-gray-600 mt-2">*Impôts calculés sur EBIT (EBITDA - amortissements estimés)</p>
                    </div>
                  </div>

                  {/* WACC */}
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">3. Calcul du WACC</h4>
                    <div className="bg-white rounded-lg p-4">
                      <div className="grid md:grid-cols-2 gap-4 text-sm">
                        <div>
                          <div className="font-medium mb-2">Coût des fonds propres (CAPM):</div>
                          <div className="space-y-1">
                            <div>Re = 2.5% + 1.3 × 6% = 10.3%</div>
                          </div>
                        </div>
                        <div>
                          <div className="font-medium mb-2">WACC:</div>
                          <div className="space-y-1">
                            <div>WACC = 70% × 10.3% + 30% × 4% × (1-25%)</div>
                            <div className="font-bold">WACC = 8.1%</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Valeur terminale */}
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">4. Valeur Terminale</h4>
                    <div className="bg-white rounded-lg p-4 text-sm">
                      <div>FCF 2029 = 6.9 × (1 + 2.5%) = 7.1 M€</div>
                      <div>VT = 7.1 / (8.1% - 2.5%) = 126.8 M€</div>
                    </div>
                  </div>

                  {/* Valeur finale */}
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">5. Valeur des Fonds Propres</h4>
                    <div className="bg-white rounded-lg p-4">
                      <table className="w-full text-sm">
                        <thead>
                          <tr className="border-b">
                            <th className="text-left py-2">Élément</th>
                            <th className="text-right py-2">Valeur (M€)</th>
                            <th className="text-right py-2">VP (M€)</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr><td>FCF 2024</td><td className="text-right">3.9</td><td className="text-right">3.6</td></tr>
                          <tr><td>FCF 2025</td><td className="text-right">4.3</td><td className="text-right">3.7</td></tr>
                          <tr><td>FCF 2026</td><td className="text-right">5.2</td><td className="text-right">4.1</td></tr>
                          <tr><td>FCF 2027</td><td className="text-right">6.4</td><td className="text-right">4.7</td></tr>
                          <tr><td>FCF 2028</td><td className="text-right">6.9</td><td className="text-right">4.7</td></tr>
                          <tr><td>Valeur terminale</td><td className="text-right">126.8</td><td className="text-right">86.4</td></tr>
                          <tr className="border-t font-bold"><td>Valeur d'entreprise</td><td className="text-right">-</td><td className="text-right">107.2</td></tr>
                          <tr><td>- Dette nette</td><td className="text-right">-</td><td className="text-right">-18.0</td></tr>
                          <tr className="border-t font-bold"><td>Valeur des fonds propres</td><td className="text-right">-</td><td className="text-right">89.2</td></tr>
                          <tr className="font-bold text-green-600"><td>Valeur par action</td><td className="text-right">-</td><td className="text-right">89.2€</td></tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </div>
        </motion.section>

        {/* Exercice 2: Luxe & Services SAS */}
        <motion.section
          id="exercice2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white rounded-2xl shadow-xl p-8 mb-8"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 bg-purple-100 rounded-full">
              <Building className="h-6 w-6 text-purple-600" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900">Exercice 2: Luxe & Services SAS</h2>
          </div>

          <div className="space-y-6">
            {/* Contexte */}
            <div className="bg-purple-50 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-purple-800 mb-4">Contexte de l'entreprise</h3>
              <p className="text-gray-700 mb-4">
                Luxe & Services SAS est une chaîne de magasins haut de gamme spécialisée dans la maroquinerie et 
                les accessoires de luxe. L'entreprise dispose de 15 boutiques en France et envisage une expansion européenne.
              </p>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Données Historiques (en M€)</h4>
                  <div className="bg-white rounded-lg p-4">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="border-b">
                          <th className="text-left py-2">Année</th>
                          <th className="text-right py-2">CA</th>
                          <th className="text-right py-2">EBITDA</th>
                          <th className="text-right py-2">Capex</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr><td>2019</td><td className="text-right">28</td><td className="text-right">4.2</td><td className="text-right">1.8</td></tr>
                        <tr><td>2020</td><td className="text-right">22</td><td className="text-right">2.9</td><td className="text-right">0.8</td></tr>
                        <tr><td>2021</td><td className="text-right">31</td><td className="text-right">5.1</td><td className="text-right">2.2</td></tr>
                        <tr><td>2022</td><td className="text-right">35</td><td className="text-right">6.3</td><td className="text-right">2.8</td></tr>
                        <tr><td>2023</td><td className="text-right">42</td><td className="text-right">7.6</td><td className="text-right">3.4</td></tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Informations Sectorielles</h4>
                  <div className="bg-white rounded-lg p-4 space-y-2 text-sm">
                    <div className="flex justify-between"><span>BFR/CA:</span><span>18%</span></div>
                    <div className="flex justify-between"><span>Taux d'impôt:</span><span>25%</span></div>
                    <div className="flex justify-between"><span>Dette nette:</span><span>8 M€</span></div>
                    <div className="flex justify-between"><span>Bêta sectoriel:</span><span>1.1</span></div>
                    <div className="flex justify-between"><span>Taux sans risque:</span><span>2.5%</span></div>
                    <div className="flex justify-between"><span>Prime de marché:</span><span>6%</span></div>
                    <div className="flex justify-between"><span>Coût de la dette:</span><span>3.5%</span></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Plan d'expansion */}
            <div className="bg-blue-50 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-blue-800 mb-4">Plan d'Expansion 2024-2028</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Stratégie de Croissance</h4>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li>• Ouverture de 8 nouvelles boutiques (2024-2026)</li>
                    <li>• Croissance CA: 12% (2024-2025), puis 8% (2026-2028)</li>
                    <li>• Amélioration marge EBITDA: 18% → 20%</li>
                    <li>• Investissements expansion: 15 M€ sur 3 ans</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Hypothèses Financières</h4>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li>• BFR: augmentation à 20% du CA (expansion)</li>
                    <li>• Capex maintenance: 6% du CA</li>
                    <li>• Structure cible: 60% FP / 40% Dette</li>
                    <li>• Taux de croissance perpétuel: 2%</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Questions */}
            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <Target className="h-5 w-5 text-purple-600" />
                Questions à Résoudre
              </h3>
              <ol className="space-y-3 text-sm">
                <li className="flex gap-3">
                  <span className="bg-purple-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold flex-shrink-0">1</span>
                  <span>Modélisez l'évolution du chiffre d'affaires et de la marge EBITDA</span>
                </li>
                <li className="flex gap-3">
                  <span className="bg-purple-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold flex-shrink-0">2</span>
                  <span>Calculez les investissements totaux (expansion + maintenance)</span>
                </li>
                <li className="flex gap-3">
                  <span className="bg-purple-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold flex-shrink-0">3</span>
                  <span>Déterminez les Free Cash Flows en tenant compte de l'évolution du BFR</span>
                </li>
                <li className="flex gap-3">
                  <span className="bg-purple-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold flex-shrink-0">4</span>
                  <span>Calculez le WACC avec la nouvelle structure financière</span>
                </li>
                <li className="flex gap-3">
                  <span className="bg-purple-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold flex-shrink-0">5</span>
                  <span>Évaluez l'entreprise et analysez l'impact de l'expansion sur la valeur</span>
                </li>
              </ol>
            </div>

            {/* Bouton Correction */}
            <div className="text-center">
              <button
                onClick={() => setShowCorrection2(!showCorrection2)}
                className="inline-flex items-center gap-2 bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition-colors"
              >
                {showCorrection2 ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                {showCorrection2 ? 'Masquer la correction' : 'Voir la correction'}
              </button>
            </div>

            {/* Correction */}
            {showCorrection2 && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                transition={{ duration: 0.5 }}
                className="bg-purple-50 rounded-xl p-6 border-2 border-purple-200"
              >
                <h3 className="text-lg font-semibold text-purple-800 mb-4 flex items-center gap-2">
                  <CheckCircle className="h-5 w-5" />
                  Correction Détaillée
                </h3>

                <div className="space-y-6">
                  {/* Prévisions */}
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">1. Prévisions de Croissance</h4>
                    <div className="bg-white rounded-lg p-4">
                      <table className="w-full text-sm">
                        <thead>
                          <tr className="border-b">
                            <th className="text-left py-2">Année</th>
                            <th className="text-right py-2">CA (M€)</th>
                            <th className="text-right py-2">Croissance</th>
                            <th className="text-right py-2">EBITDA (M€)</th>
                            <th className="text-right py-2">Marge</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr><td>2024</td><td className="text-right">47.0</td><td className="text-right">12%</td><td className="text-right">8.5</td><td className="text-right">18%</td></tr>
                          <tr><td>2025</td><td className="text-right">52.6</td><td className="text-right">12%</td><td className="text-right">9.5</td><td className="text-right">18%</td></tr>
                          <tr><td>2026</td><td className="text-right">56.8</td><td className="text-right">8%</td><td className="text-right">10.9</td><td className="text-right">19%</td></tr>
                          <tr><td>2027</td><td className="text-right">61.3</td><td className="text-right">8%</td><td className="text-right">12.0</td><td className="text-right">19.5%</td></tr>
                          <tr><td>2028</td><td className="text-right">66.2</td><td className="text-right">8%</td><td className="text-right">13.2</td><td className="text-right">20%</td></tr>
                        </tbody>
                      </table>
                    </div>
                  </div>

                  {/* Investissements */}
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">2. Plan d'Investissements</h4>
                    <div className="bg-white rounded-lg p-4">
                      <table className="w-full text-sm">
                        <thead>
                          <tr className="border-b">
                            <th className="text-left py-2">Année</th>
                            <th className="text-right py-2">Capex Maintenance</th>
                            <th className="text-right py-2">Capex Expansion</th>
                            <th className="text-right py-2">Total Capex</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr><td>2024</td><td className="text-right">2.8</td><td className="text-right">6.0</td><td className="text-right">8.8</td></tr>
                          <tr><td>2025</td><td className="text-right">3.2</td><td className="text-right">5.0</td><td className="text-right">8.2</td></tr>
                          <tr><td>2026</td><td className="text-right">3.4</td><td className="text-right">4.0</td><td className="text-right">7.4</td></tr>
                          <tr><td>2027</td><td className="text-right">3.7</td><td className="text-right">0</td><td className="text-right">3.7</td></tr>
                          <tr><td>2028</td><td className="text-right">4.0</td><td className="text-right">0</td><td className="text-right">4.0</td></tr>
                        </tbody>
                      </table>
                    </div>
                  </div>

                  {/* FCF */}
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">3. Free Cash Flows</h4>
                    <div className="bg-white rounded-lg p-4">
                      <table className="w-full text-sm">
                        <thead>
                          <tr className="border-b">
                            <th className="text-left py-2">Année</th>
                            <th className="text-right py-2">EBITDA</th>
                            <th className="text-right py-2">Impôts*</th>
                            <th className="text-right py-2">Capex</th>
                            <th className="text-right py-2">Δ BFR</th>
                            <th className="text-right py-2">FCF</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr><td>2024</td><td className="text-right">8.5</td><td className="text-right">-2.1</td><td className="text-right">-8.8</td><td className="text-right">-1.0</td><td className="text-right">-3.4</td></tr>
                          <tr><td>2025</td><td className="text-right">9.5</td><td className="text-right">-2.4</td><td className="text-right">-8.2</td><td className="text-right">-1.1</td><td className="text-right">-2.2</td></tr>
                          <tr><td>2026</td><td className="text-right">10.9</td><td className="text-right">-2.7</td><td className="text-right">-7.4</td><td className="text-right">-0.8</td><td className="text-right">0.0</td></tr>
                          <tr><td>2027</td><td className="text-right">12.0</td><td className="text-right">-3.0</td><td className="text-right">-3.7</td><td className="text-right">-0.9</td><td className="text-right">4.4</td></tr>
                          <tr><td>2028</td><td className="text-right">13.2</td><td className="text-right">-3.3</td><td className="text-right">-4.0</td><td className="text-right">-1.0</td><td className="text-right">4.9</td></tr>
                        </tbody>
                      </table>
                      <p className="text-xs text-gray-600 mt-2">*Impôts calculés sur EBIT estimé</p>
                    </div>
                  </div>

                  {/* WACC */}
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">4. Calcul du WACC</h4>
                    <div className="bg-white rounded-lg p-4">
                      <div className="grid md:grid-cols-2 gap-4 text-sm">
                        <div>
                          <div className="font-medium mb-2">Coût des fonds propres:</div>
                          <div className="space-y-1">
                            <div>Re = 2.5% + 1.1 × 6% = 9.1%</div>
                          </div>
                        </div>
                        <div>
                          <div className="font-medium mb-2">WACC:</div>
                          <div className="space-y-1">
                            <div>WACC = 60% × 9.1% + 40% × 3.5% × (1-25%)</div>
                            <div className="font-bold">WACC = 6.5%</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Évaluation */}
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">5. Évaluation Finale</h4>
                    <div className="bg-white rounded-lg p-4">
                      <div className="grid md:grid-cols-2 gap-4 text-sm">
                        <div>
                          <div className="font-medium mb-2">Valeur terminale:</div>
                          <div className="space-y-1">
                            <div>FCF 2029 = 4.9 × 1.02 = 5.0 M€</div>
                            <div>VT = 5.0 / (6.5% - 2%) = 111.1 M€</div>
                          </div>
                        </div>
                        <div>
                          <div className="font-medium mb-2">Valeur d'entreprise:</div>
                          <div className="space-y-1">
                            <div>VP des FCF = 2.8 M€</div>
                            <div>VP de la VT = 81.4 M€</div>
                            <div className="font-bold">VE = 84.2 M€</div>
                          </div>
                        </div>
                      </div>
                      <div className="mt-4 pt-4 border-t">
                        <div className="font-bold text-purple-600">Valeur des fonds propres = 84.2 - 8.0 = 76.2 M€</div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-yellow-50 rounded-lg p-4">
                    <h5 className="font-semibold text-yellow-800 mb-2">Analyse de l'Impact de l'Expansion</h5>
                    <p className="text-sm text-gray-700">
                      L'expansion génère des FCF négatifs les premières années mais améliore significativement 
                      la rentabilité à partir de 2027. La valeur terminale bénéficie de la base de revenus élargie 
                      et des marges améliorées.
                    </p>
                  </div>
                </div>
              </motion.div>
            )}
          </div>
        </motion.section>

        {/* Points Clés d'Apprentissage */}
        <motion.section
          id="points-cles"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="bg-white rounded-2xl shadow-xl p-8 mb-8"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 bg-red-100 rounded-full">
              <Lightbulb className="h-6 w-6 text-red-600" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900">Points Clés d'Apprentissage</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: 'Modélisation Financière',
                icon: BarChart3,
                points: [
                  'Cohérence entre croissance et investissements',
                  'Impact du BFR sur les flux de trésorerie',
                  'Distinction entre Capex de maintenance et de croissance',
                  'Évolution des marges selon la maturité'
                ]
              },
              {
                title: 'Paramètres de Valorisation',
                icon: Target,
                points: [
                  'Sensibilité du WACC à la structure financière',
                  'Impact du taux de croissance perpétuel',
                  'Importance de la valeur terminale',
                  'Validation par les multiples sectoriels'
                ]
              },
              {
                title: 'Analyse Sectorielle',
                icon: Globe,
                points: [
                  'Adaptation aux spécificités sectorielles',
                  'Prise en compte des cycles d\'investissement',
                  'Impact de la saisonnalité sur le BFR',
                  'Stratégies de croissance et leur financement'
                ]
              },
              {
                title: 'Validation et Contrôle',
                icon: CheckCircle,
                points: [
                  'Analyse de sensibilité systématique',
                  'Comparaison avec les méthodes alternatives',
                  'Vérification de la cohérence des hypothèses',
                  'Documentation des sources et calculs'
                ]
              }
            ].map((section, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className="bg-gradient-to-br from-red-50 to-pink-50 rounded-xl p-6"
              >
                <div className="flex items-center gap-3 mb-4">
                  <section.icon className="h-6 w-6 text-red-600" />
                  <h3 className="text-lg font-semibold text-gray-900">{section.title}</h3>
                </div>
                <ul className="space-y-2">
                  {section.points.map((point, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm">
                      <ArrowRight className="h-4 w-4 text-red-600 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{point}</span>
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
            title: "DCF - Théorie",
            href: "/dcf-theorie"
          }}
          nextSection={{
            title: "Plan du Cours",
            href: "/"
          }}
        />
      </div>
    </div>
  );
}