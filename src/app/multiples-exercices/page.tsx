'use client';

import { useState } from 'react';
import BackToPlanButton from '@/components/content/BackToPlanButton';
import SectionNavigation from '@/components/content/SectionNavigation';
import { motion } from 'framer-motion';
import { Calculator, Building, TrendingUp, CheckCircle, AlertTriangle, Eye, EyeOff, ChevronDown, ChevronRight } from 'lucide-react';

// Données pour l'exercice 1
const retailTechData = {
  ca: 180,
  gmv: 2400,
  ebitda: 18,
  ebit: 8,
  resultatNet: 2,
  tresorerie: 45,
  dette: 15,
  takeRate: 7.5,
  croissance: 35
};

const comparablesRetailTech = [
  { nom: 'Zalando SE', pays: 'ALL', ca: 10350, ebitda: 478, ve: 8200, cap: 7800, gmv: 14800, croissance: 3 },
  { nom: 'About You AG', pays: 'ALL', ca: 1860, ebitda: 45, ve: 420, cap: 380, gmv: 2100, croissance: 8 },
  { nom: 'Vinted', pays: 'LIT', ca: 450, ebitda: 180, ve: 3600, cap: 3500, gmv: 5200, croissance: 61 },
  { nom: 'ManoMano', pays: 'FR', ca: 1100, ebitda: 28, ve: 850, cap: 800, gmv: 3400, croissance: 12 },
  { nom: 'ASOS Plc', pays: 'UK', ca: 3200, ebitda: 85, ve: 750, cap: 650, gmv: 3200, croissance: -18 },
  { nom: 'Allegro.eu', pays: 'POL', ca: 2100, ebitda: 950, ve: 7800, cap: 7200, gmv: 15600, croissance: 9 }
];

// Données pour l'exercice 2
const biotechMedData = {
  ca: 95,
  rd: 28,
  ebitda: 12,
  ebit: 4,
  resultatNet: -2,
  tresorerie: 65,
  dette: 8,
  croissance: 42
};

const comparablesBiotech = [
  { nom: 'Cardiovascular Systems', segment: 'Cardio pure', ca: 185, ebitda: 15, ve: 420, rd: 18, croissance: 12 },
  { nom: 'Shockwave Medical', segment: 'Cardio pure', ca: 580, ebitda: 145, ve: 4800, rd: 15, croissance: 35 },
  { nom: 'LivaNova', segment: 'Cardio + Neuro', ca: 1100, ebitda: 198, ve: 2200, rd: 12, croissance: 8 },
  { nom: 'Penumbra', segment: 'Neuro-vasculaire', ca: 890, ebitda: 89, ve: 2950, rd: 10, croissance: 18 },
  { nom: 'Inari Medical', segment: 'Vascular', ca: 420, ebitda: 78, ve: 1680, rd: 8, croissance: 25 },
  { nom: 'Abiomed', segment: 'Assist. cardiaque', ca: 1050, ebitda: 315, ve: 8400, rd: 14, croissance: 15 },
  { nom: 'AtriCure', segment: 'Fibrillation', ca: 385, ebitda: 32, ve: 1100, rd: 16, croissance: 22 }
];

interface CorrectionSectionProps {
  title: string;
  children: React.ReactNode;
  isVisible: boolean;
  onToggle: () => void;
}

function CorrectionSection({ title, children, isVisible, onToggle }: CorrectionSectionProps) {
  return (
    <div className="border border-gray-200 rounded-lg overflow-hidden">
      <button
        onClick={onToggle}
        className="w-full px-4 py-3 bg-gray-50 hover:bg-gray-100 transition-colors duration-200 flex items-center justify-between text-left"
      >
        <span className="font-semibold text-gray-900">{title}</span>
        <div className="flex items-center gap-2">
          {isVisible ? (
            <>
              <EyeOff className="h-4 w-4 text-gray-600" />
              <ChevronDown className="h-4 w-4 text-gray-600" />
            </>
          ) : (
            <>
              <Eye className="h-4 w-4 text-gray-600" />
              <ChevronRight className="h-4 w-4 text-gray-600" />
            </>
          )}
        </div>
      </button>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
          className="px-4 py-4 bg-white border-t border-gray-200"
        >
          {children}
        </motion.div>
      )}
    </div>
  );
}

export default function MultiplesExercicesPage() {
  const [visibleCorrections, setVisibleCorrections] = useState<Record<string, boolean>>({});

  const toggleCorrection = (key: string) => {
    setVisibleCorrections(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

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
              <Calculator className="h-8 w-8 text-purple-600" />
            </div>
            <div>
              <h1 className="text-4xl font-bold text-gray-900">
                Multiples - Exercices Pratiques
              </h1>
              <p className="text-gray-600 text-lg">
                Cas complexes avec corrections détaillées
              </p>
            </div>
          </div>
          
          {/* Exercice 1 - RetailTech SA */}
          <div className="mb-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white rounded-xl shadow-lg p-8 mb-8"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-blue-100 p-3 rounded-xl">
                  <Building className="h-8 w-8 text-blue-600" />
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-gray-900">
                    Exercice 1 : RetailTech SA - E-commerce Européen
                  </h2>
                  <p className="text-gray-600">
                    Plateforme e-commerce multi-marques présente dans 8 pays européens. Valorisation en vue d&apos;une levée de fonds Série C.
                  </p>
                </div>
              </div>
              
              <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-lg mb-6">
                <h3 className="font-semibold text-blue-900 mb-2">Données Financières RetailTech SA (2024)</h3>
                <div className="grid md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <p><strong>Chiffre d&apos;Affaires :</strong> {retailTechData.ca} M€</p>
                    <p><strong>GMV :</strong> {retailTechData.gmv} M€</p>
                    <p><strong>EBITDA :</strong> {retailTechData.ebitda} M€</p>
                    <p><strong>EBIT :</strong> {retailTechData.ebit} M€</p>
                  </div>
                  <div>
                    <p><strong>Résultat Net :</strong> {retailTechData.resultatNet} M€</p>
                    <p><strong>Trésorerie :</strong> {retailTechData.tresorerie} M€</p>
                    <p><strong>Dette :</strong> {retailTechData.dette} M€</p>
                    <p><strong>Croissance CA :</strong> +{retailTechData.croissance}%</p>
                  </div>
                </div>
              </div>
              
              <div className="overflow-x-auto mb-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Échantillon de Comparables</h3>
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-blue-50">
                      <th className="border border-blue-200 px-3 py-2 text-left text-sm font-semibold">Entreprise</th>
                      <th className="border border-blue-200 px-3 py-2 text-right text-sm font-semibold">CA (M€)</th>
                      <th className="border border-blue-200 px-3 py-2 text-right text-sm font-semibold">EBITDA (M€)</th>
                      <th className="border border-blue-200 px-3 py-2 text-right text-sm font-semibold">VE (M€)</th>
                      <th className="border border-blue-200 px-3 py-2 text-right text-sm font-semibold">GMV (M€)</th>
                      <th className="border border-blue-200 px-3 py-2 text-right text-sm font-semibold">Croissance</th>
                    </tr>
                  </thead>
                  <tbody>
                    {comparablesRetailTech.map((comp, index) => (
                      <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                        <td className="border border-gray-200 px-3 py-2 text-sm font-medium">{comp.nom}</td>
                        <td className="border border-gray-200 px-3 py-2 text-sm text-right">{comp.ca.toLocaleString()}</td>
                        <td className="border border-gray-200 px-3 py-2 text-sm text-right">{comp.ebitda}</td>
                        <td className="border border-gray-200 px-3 py-2 text-sm text-right">{comp.ve.toLocaleString()}</td>
                        <td className="border border-gray-200 px-3 py-2 text-sm text-right">{comp.gmv.toLocaleString()}</td>
                        <td className="border border-gray-200 px-3 py-2 text-sm text-right">{comp.croissance > 0 ? '+' : ''}{comp.croissance}%</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Questions</h3>
                  <div className="space-y-3 text-gray-700">
                    <p><strong>Question 1 (5 points) :</strong> Calculez pour chaque comparable les multiples VE/CA, VE/EBITDA et VE/GMV.</p>
                    <p><strong>Question 2 (3 points) :</strong> Identifiez les outliers et proposez un traitement.</p>
                    <p><strong>Question 3 (4 points) :</strong> Calculez les statistiques descriptives (moyenne, médiane, Q1, Q3) pour VE/CA et VE/EBITDA.</p>
                    <p><strong>Question 4 (4 points) :</strong> RetailTech affiche +35% de croissance vs médiane +9%. Justifiez et proposez un ajustement.</p>
                    <p><strong>Question 5 (4 points) :</strong> Valorisez RetailTech et proposez une fourchette finale.</p>
                  </div>
                </div>
              </div>
            </motion.div>
            
            {/* Corrections Exercice 1 */}
            <div className="space-y-4">
              <CorrectionSection
                title="Correction Question 1 - Calcul des Multiples"
                isVisible={visibleCorrections['ex1q1']}
                onToggle={() => toggleCorrection('ex1q1')}
              >
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="bg-green-50">
                        <th className="border border-green-200 px-3 py-2 text-left text-sm font-semibold">Entreprise</th>
                        <th className="border border-green-200 px-3 py-2 text-right text-sm font-semibold">VE/CA</th>
                        <th className="border border-green-200 px-3 py-2 text-right text-sm font-semibold">VE/EBITDA</th>
                        <th className="border border-green-200 px-3 py-2 text-right text-sm font-semibold">VE/GMV</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr><td className="border px-3 py-2 text-sm">Zalando</td><td className="border px-3 py-2 text-sm text-right">0.79x</td><td className="border px-3 py-2 text-sm text-right">17.2x</td><td className="border px-3 py-2 text-sm text-right">0.55x</td></tr>
                      <tr><td className="border px-3 py-2 text-sm">About You</td><td className="border px-3 py-2 text-sm text-right">0.23x</td><td className="border px-3 py-2 text-sm text-right">9.3x</td><td className="border px-3 py-2 text-sm text-right">0.20x</td></tr>
                      <tr><td className="border px-3 py-2 text-sm">Vinted</td><td className="border px-3 py-2 text-sm text-right">8.0x</td><td className="border px-3 py-2 text-sm text-right">20.0x</td><td className="border px-3 py-2 text-sm text-right">0.69x</td></tr>
                      <tr><td className="border px-3 py-2 text-sm">ManoMano</td><td className="border px-3 py-2 text-sm text-right">0.77x</td><td className="border px-3 py-2 text-sm text-right">30.4x</td><td className="border px-3 py-2 text-sm text-right">0.25x</td></tr>
                      <tr><td className="border px-3 py-2 text-sm">ASOS</td><td className="border px-3 py-2 text-sm text-right">0.23x</td><td className="border px-3 py-2 text-sm text-right">8.8x</td><td className="border px-3 py-2 text-sm text-right">0.23x</td></tr>
                      <tr><td className="border px-3 py-2 text-sm">Allegro</td><td className="border px-3 py-2 text-sm text-right">3.71x</td><td className="border px-3 py-2 text-sm text-right">8.2x</td><td className="border px-3 py-2 text-sm text-right">0.50x</td></tr>
                    </tbody>
                  </table>
                </div>
              </CorrectionSection>
              
              <CorrectionSection
                title="Correction Question 2 - Analyse des Outliers"
                isVisible={visibleCorrections['ex1q2']}
                onToggle={() => toggleCorrection('ex1q2')}
              >
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-red-600 mb-2">Outliers identifiés :</h4>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start gap-2">
                        <AlertTriangle className="h-4 w-4 text-red-500 flex-shrink-0 mt-0.5" />
                        <span><strong>Vinted :</strong> VE/CA = 8.0x (croissance exceptionnelle +61%, modèle P2P)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <AlertTriangle className="h-4 w-4 text-red-500 flex-shrink-0 mt-0.5" />
                        <span><strong>ASOS :</strong> Multiples très bas (croissance négative -18%, difficultés)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <AlertTriangle className="h-4 w-4 text-red-500 flex-shrink-0 mt-0.5" />
                        <span><strong>ManoMano :</strong> VE/EBITDA = 30.4x (très élevé)</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-green-600 mb-2">Traitement recommandé :</h4>
                    <ul className="space-y-1 text-sm">
                      <li>• Exclusion d&apos;ASOS (profil de risque différent)</li>
                      <li>• Pondération réduite Vinted (50%)</li>
                      <li>• Analyse de sensibilité avec/sans ManoMano</li>
                    </ul>
                  </div>
                </div>
              </CorrectionSection>
              
              <CorrectionSection
                title="Correction Question 3 - Statistiques Descriptives"
                isVisible={visibleCorrections['ex1q3']}
                onToggle={() => toggleCorrection('ex1q3')}
              >
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-blue-600 mb-2">VE/CA (hors ASOS) :</h4>
                    <ul className="space-y-1 text-sm">
                      <li>• Moyenne simple : 2.70x</li>
                      <li>• Moyenne pondérée (Vinted 50%) : 1.90x</li>
                      <li>• <strong>Médiane : 0.79x</strong> → Privilégier (moins sensible aux outliers)</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-purple-600 mb-2">VE/EBITDA :</h4>
                    <ul className="space-y-1 text-sm">
                      <li>• Moyenne (hors ManoMano) : 13.7x</li>
                      <li>• <strong>Médiane : 17.2x</strong></li>
                    </ul>
                  </div>
                </div>
              </CorrectionSection>
              
              <CorrectionSection
                title="Correction Question 4 - Ajustement Croissance"
                isVisible={visibleCorrections['ex1q4']}
                onToggle={() => toggleCorrection('ex1q4')}
              >
                <div className="space-y-4">
                  <div className="bg-yellow-50 border border-yellow-200 p-4 rounded-lg">
                    <h4 className="font-semibold text-yellow-800 mb-2">Prime croissance :</h4>
                    <ul className="space-y-1 text-sm text-yellow-700">
                      <li>• Écart : +35% vs +9% = +26 points</li>
                      <li>• Prime recommandée : 20-25% sur multiples de base</li>
                      <li>• Justification : Forte croissance rentable rare en e-commerce</li>
                    </ul>
                  </div>
                </div>
              </CorrectionSection>
              
              <CorrectionSection
                title="Correction Question 5 - Valorisation Finale"
                isVisible={visibleCorrections['ex1q5']}
                onToggle={() => toggleCorrection('ex1q5')}
              >
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-green-600 mb-2">Multiples ajustés :</h4>
                    <ul className="space-y-1 text-sm">
                      <li>• VE/CA : 0.79x × 1.25 = <strong>1.0x</strong> → 180 × 1.0 = <strong>180 M€</strong></li>
                      <li>• VE/EBITDA : 17.2x × 1.20 = <strong>20.6x</strong> → 18 × 20.6 = <strong>371 M€</strong></li>
                    </ul>
                  </div>
                  <div className="bg-green-50 border border-green-200 p-4 rounded-lg">
                    <h4 className="font-semibold text-green-800 mb-2">Valorisation finale :</h4>
                    <ul className="space-y-1 text-sm text-green-700">
                      <li>• Pondération : VE/EBITDA (60%) + VE/CA (40%)</li>
                      <li>• <strong>Valorisation centrale : 294 M€</strong></li>
                      <li>• <strong>Fourchette recommandée : 265-325 M€</strong></li>
                    </ul>
                  </div>
                </div>
              </CorrectionSection>
            </div>
          </div>
          
          {/* Exercice 2 - BiotechMed SAS */}
          <div className="mb-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="bg-white rounded-xl shadow-lg p-8 mb-8"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-orange-100 p-3 rounded-xl">
                  <TrendingUp className="h-8 w-8 text-orange-600" />
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-gray-900">
                    Exercice 2 : BiotechMed SAS - MedTech Spécialisée
                  </h2>
                  <p className="text-gray-600">
                    Développement de dispositifs médicaux pour la cardiologie interventionnelle. Valorisation pour introduction en bourse.
                  </p>
                </div>
              </div>
              
              <div className="bg-orange-50 border-l-4 border-orange-500 p-4 rounded-r-lg mb-6">
                <h3 className="font-semibold text-orange-900 mb-2">Données Financières BiotechMed SAS (2024)</h3>
                <div className="grid md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <p><strong>Chiffre d&apos;Affaires :</strong> {biotechMedData.ca} M€</p>
                    <p><strong>Dépenses R&D :</strong> {biotechMedData.rd} M€</p>
                    <p><strong>EBITDA :</strong> {biotechMedData.ebitda} M€</p>
                    <p><strong>EBIT :</strong> {biotechMedData.ebit} M€</p>
                  </div>
                  <div>
                    <p><strong>Résultat Net :</strong> ({Math.abs(biotechMedData.resultatNet)}) M€</p>
                    <p><strong>Trésorerie :</strong> {biotechMedData.tresorerie} M€</p>
                    <p><strong>Dette :</strong> {biotechMedData.dette} M€</p>
                    <p><strong>Croissance CA :</strong> +{biotechMedData.croissance}%</p>
                  </div>
                </div>
              </div>
              
              <div className="overflow-x-auto mb-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Échantillon de Comparables MedTech</h3>
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-orange-50">
                      <th className="border border-orange-200 px-3 py-2 text-left text-sm font-semibold">Entreprise</th>
                      <th className="border border-orange-200 px-3 py-2 text-left text-sm font-semibold">Segment</th>
                      <th className="border border-orange-200 px-3 py-2 text-right text-sm font-semibold">CA (M€)</th>
                      <th className="border border-orange-200 px-3 py-2 text-right text-sm font-semibold">EBITDA (M€)</th>
                      <th className="border border-orange-200 px-3 py-2 text-right text-sm font-semibold">VE (M€)</th>
                      <th className="border border-orange-200 px-3 py-2 text-right text-sm font-semibold">R&D/CA</th>
                      <th className="border border-orange-200 px-3 py-2 text-right text-sm font-semibold">Croissance</th>
                    </tr>
                  </thead>
                  <tbody>
                    {comparablesBiotech.map((comp, index) => (
                      <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                        <td className="border border-gray-200 px-3 py-2 text-sm font-medium">{comp.nom}</td>
                        <td className="border border-gray-200 px-3 py-2 text-sm">{comp.segment}</td>
                        <td className="border border-gray-200 px-3 py-2 text-sm text-right">{comp.ca}</td>
                        <td className="border border-gray-200 px-3 py-2 text-sm text-right">{comp.ebitda}</td>
                        <td className="border border-gray-200 px-3 py-2 text-sm text-right">{comp.ve.toLocaleString()}</td>
                        <td className="border border-gray-200 px-3 py-2 text-sm text-right">{comp.rd}%</td>
                        <td className="border border-gray-200 px-3 py-2 text-sm text-right">+{comp.croissance}%</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Questions</h3>
                  <div className="space-y-3 text-gray-700">
                    <p><strong>Question 1 (4 points) :</strong> Proposez une segmentation pertinente de l&apos;échantillon en 2-3 groupes avec pondération.</p>
                    <p><strong>Question 2 (5 points) :</strong> Calculez les multiples VE/CA et VE/EBITDA moyens par segment, traitez les outliers.</p>
                    <p><strong>Question 3 (3 points) :</strong> Le multiple VE/R&D est-il pertinent ? Quels autres facteurs qualitatifs ?</p>
                    <p><strong>Question 4 (6 points) :</strong> Proposez des ajustements pour : taille, croissance, géographie, pipeline, trésorerie.</p>
                    <p><strong>Question 5 (2 points) :</strong> Valorisez BiotechMed avec analyse de sensibilité et fourchette finale.</p>
                  </div>
                </div>
              </div>
            </motion.div>
            
            {/* Corrections Exercice 2 */}
            <div className="space-y-4">
              <CorrectionSection
                title="Correction Question 1 - Segmentation de l&apos;Échantillon"
                isVisible={visibleCorrections['ex2q1']}
                onToggle={() => toggleCorrection('ex2q1')}
              >
                <div className="space-y-4">
                  <h4 className="font-semibold text-orange-600 mb-2">Segmentation proposée :</h4>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="bg-blue-50 border border-blue-200 p-3 rounded-lg">
                      <h5 className="font-semibold text-blue-800">Segment A : Cardiologie pure (40%)</h5>
                      <p className="text-sm text-blue-700">Cardiovascular, Shockwave, AtriCure</p>
                    </div>
                    <div className="bg-green-50 border border-green-200 p-3 rounded-lg">
                      <h5 className="font-semibold text-green-800">Segment B : Dispositifs vasculaires (35%)</h5>
                      <p className="text-sm text-green-700">LivaNova, Penumbra, Inari</p>
                    </div>
                    <div className="bg-purple-50 border border-purple-200 p-3 rounded-lg">
                      <h5 className="font-semibold text-purple-800">Segment C : Technologies premium (25%)</h5>
                      <p className="text-sm text-purple-700">Abiomed</p>
                    </div>
                  </div>
                </div>
              </CorrectionSection>
              
              <CorrectionSection
                title="Correction Question 2 - Calcul des Multiples par Segment"
                isVisible={visibleCorrections['ex2q2']}
                onToggle={() => toggleCorrection('ex2q2')}
              >
                <div className="space-y-4">
                  <h4 className="font-semibold text-orange-600 mb-2">Multiples VE/CA par segment :</h4>
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse">
                      <thead>
                        <tr className="bg-gray-50">
                          <th className="border border-gray-200 px-3 py-2 text-left text-sm font-semibold">Segment</th>
                          <th className="border border-gray-200 px-3 py-2 text-center text-sm font-semibold">VE/CA Moyen</th>
                          <th className="border border-gray-200 px-3 py-2 text-center text-sm font-semibold">VE/EBITDA Moyen</th>
                          <th className="border border-gray-200 px-3 py-2 text-left text-sm font-semibold">Outliers traités</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr><td className="border px-3 py-2 text-sm">Cardiologie pure</td><td className="border px-3 py-2 text-sm text-center">4.2x</td><td className="border px-3 py-2 text-sm text-center">24.8x</td><td className="border px-3 py-2 text-sm">Aucun outlier significatif</td></tr>
                        <tr><td className="border px-3 py-2 text-sm">Dispositifs vasculaires</td><td className="border px-3 py-2 text-sm text-center">5.1x</td><td className="border px-3 py-2 text-sm text-center">28.5x</td><td className="border px-3 py-2 text-sm">Penumbra ajusté (-10%)</td></tr>
                        <tr><td className="border px-3 py-2 text-sm">Technologies premium</td><td className="border px-3 py-2 text-sm text-center">6.8x</td><td className="border px-3 py-2 text-sm text-center">32.1x</td><td className="border px-3 py-2 text-sm">Abiomed : prime justifiée</td></tr>
                        <tr className="bg-orange-50"><td className="border px-3 py-2 text-sm font-semibold">Moyenne pondérée</td><td className="border px-3 py-2 text-sm text-center font-semibold">4.9x</td><td className="border px-3 py-2 text-sm text-center font-semibold">27.1x</td><td className="border px-3 py-2 text-sm font-semibold">Base de valorisation</td></tr>
                      </tbody>
                    </table>
                  </div>
                  <div className="bg-yellow-50 border border-yellow-200 p-4 rounded-lg">
                    <h5 className="font-semibold text-yellow-800 mb-2">Traitement des outliers :</h5>
                    <ul className="space-y-1 text-sm text-yellow-700">
                      <li>• Penumbra : VE/EBITDA 45x → Ajusté à 40x (croissance exceptionnelle mais non durable)</li>
                      <li>• Abiomed : Multiples élevés maintenus (technologie disruptive, barrières à l&apos;entrée)</li>
                      <li>• Méthodologie : Winsorisation à 95% + analyse qualitative</li>
                    </ul>
                  </div>
                </div>
              </CorrectionSection>
              
              <CorrectionSection
                title="Correction Question 3 - Pertinence du Multiple VE/R&D"
                isVisible={visibleCorrections['ex2q3']}
                onToggle={() => toggleCorrection('ex2q3')}
              >
                <div className="space-y-4">
                  <div className="bg-red-50 border border-red-200 p-4 rounded-lg">
                    <h4 className="font-semibold text-red-800 mb-2">Multiple VE/R&D : Utilisation limitée</h4>
                    <ul className="space-y-1 text-sm text-red-700">
                      <li>• <strong>Problème :</strong> R&D = coût, pas indicateur de performance</li>
                      <li>• <strong>Variabilité :</strong> Politiques comptables différentes (capitalisation vs charges)</li>
                      <li>• <strong>Timing :</strong> Décalage entre investissement R&D et revenus</li>
                      <li>• <strong>Conclusion :</strong> Indicateur qualitatif plutôt que base de valorisation</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-orange-600 mb-2">Facteurs qualitatifs prioritaires :</h4>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <div className="flex items-start gap-2">
                          <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                          <div>
                            <h5 className="font-semibold text-gray-900">Pipeline produits</h5>
                            <p className="text-sm text-gray-600">Phases d&apos;essais cliniques, probabilités de succès</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-2">
                          <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                          <div>
                            <h5 className="font-semibold text-gray-900">Propriété intellectuelle</h5>
                            <p className="text-sm text-gray-600">Brevets, durée de protection, barrières concurrentielles</p>
                          </div>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-start gap-2">
                          <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                          <div>
                            <h5 className="font-semibold text-gray-900">Approbations réglementaires</h5>
                            <p className="text-sm text-gray-600">FDA, CE, délais et risques d&apos;approbation</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-2">
                          <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                          <div>
                            <h5 className="font-semibold text-gray-900">Positionnement concurrentiel</h5>
                            <p className="text-sm text-gray-600">Avantages technologiques, parts de marché</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CorrectionSection>
              
              <CorrectionSection
                title="Correction Question 4 - Ajustements Multi-Factoriels"
                isVisible={visibleCorrections['ex2q4']}
                onToggle={() => toggleCorrection('ex2q4')}
              >
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="bg-gray-50">
                        <th className="border border-gray-200 px-3 py-2 text-left text-sm font-semibold">Facteur</th>
                        <th className="border border-gray-200 px-3 py-2 text-center text-sm font-semibold">Ajustement</th>
                        <th className="border border-gray-200 px-3 py-2 text-left text-sm font-semibold">Justification</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr><td className="border px-3 py-2 text-sm">Taille</td><td className="border px-3 py-2 text-sm text-center">-10%</td><td className="border px-3 py-2 text-sm">Décote liquidité/scaling</td></tr>
                      <tr><td className="border px-3 py-2 text-sm">Croissance</td><td className="border px-3 py-2 text-sm text-center">+25%</td><td className="border px-3 py-2 text-sm">+42% vs +16% médiane</td></tr>
                      <tr><td className="border px-3 py-2 text-sm">Géographie</td><td className="border px-3 py-2 text-sm text-center">-5%</td><td className="border px-3 py-2 text-sm">Moindre valorisation Europe</td></tr>
                      <tr><td className="border px-3 py-2 text-sm">Pipeline</td><td className="border px-3 py-2 text-sm text-center">+15%</td><td className="border px-3 py-2 text-sm">5 produits phase avancée</td></tr>
                      <tr><td className="border px-3 py-2 text-sm">Trésorerie</td><td className="border px-3 py-2 text-sm text-center">+5%</td><td className="border px-3 py-2 text-sm">Position financière solide</td></tr>
                      <tr className="bg-green-50"><td className="border px-3 py-2 text-sm font-semibold">Net</td><td className="border px-3 py-2 text-sm text-center font-semibold">+30%</td><td className="border px-3 py-2 text-sm font-semibold">Ajustement global</td></tr>
                    </tbody>
                  </table>
                </div>
              </CorrectionSection>
              
              <CorrectionSection
                title="Correction Question 5 - Valorisation BiotechMed"
                isVisible={visibleCorrections['ex2q5']}
                onToggle={() => toggleCorrection('ex2q5')}
              >
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-orange-600 mb-2">Multiples de base pondérés :</h4>
                    <ul className="space-y-1 text-sm">
                      <li>• VE/CA : 4.9x → Ajusté : 6.4x → <strong>608 M€</strong></li>
                      <li>• VE/EBITDA : 27.1x → Ajusté : 35.2x → <strong>422 M€</strong></li>
                    </ul>
                  </div>
                  <div className="bg-orange-50 border border-orange-200 p-4 rounded-lg">
                    <h4 className="font-semibold text-orange-800 mb-2">Valorisation finale :</h4>
                    <ul className="space-y-1 text-sm text-orange-700">
                      <li>• Pondération VE/CA (40%) + VE/EBITDA (60%)</li>
                      <li>• <strong>Valeur centrale : 497 M€</strong></li>
                      <li>• <strong>Fourchette recommandée : 450-550 M€</strong></li>
                    </ul>
                  </div>
                </div>
              </CorrectionSection>
            </div>
          </div>
          
          {/* Points Clés d'Apprentissage */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 1.4 }}
            className="bg-gradient-to-r from-purple-50 to-blue-50 border border-purple-200 rounded-xl p-8 mb-8"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Points Clés d&apos;Apprentissage</h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-blue-600 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Sélection des comparables</h4>
                    <p className="text-gray-700 text-sm">La qualité de l&apos;échantillon détermine la fiabilité de la valorisation</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Traitement des outliers</h4>
                    <p className="text-gray-700 text-sm">Analyser les causes avant d&apos;exclure ou pondérer différemment</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-orange-600 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Ajustements sectoriels</h4>
                    <p className="text-gray-700 text-sm">Prendre en compte les spécificités de croissance, taille, géographie</p>
                  </div>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-purple-600 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Multiples privilégiés</h4>
                    <p className="text-gray-700 text-sm">VE/EBITDA généralement plus fiable que les multiples d&apos;equity</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-red-600 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Fourchette de valorisation</h4>
                    <p className="text-gray-700 text-sm">Toujours présenter une fourchette plutôt qu&apos;une valeur unique</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-teal-600 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Validation croisée</h4>
                    <p className="text-gray-700 text-sm">Utiliser plusieurs multiples et méthodes pour confirmer la valorisation</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
        
        <SectionNavigation
          previousSection={{
            title: "Multiples - Théorie",
            href: "/multiples-theorie"
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