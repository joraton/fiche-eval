'use client';

import BackToPlanButton from '@/components/content/BackToPlanButton';
import SectionNavigation from '@/components/content/SectionNavigation';
import ANNCTable, { ANNCCalculationTable } from '@/components/content/ANNCTable';
import { motion } from 'framer-motion';
import { Calculator, Building, Factory, TrendingUp, CheckCircle, AlertTriangle, Lightbulb, AlertCircle } from 'lucide-react';

// Données pour l'exemple 1 - Holding Immobilier
const exemple1BilanActif = [
  { 'ACTIF': 'IMMOBILISATIONS', 'Valeur': '' },
  { 'ACTIF': 'Frais d\'établissement', 'Valeur': '25' },
  { 'ACTIF': 'Fonds commercial', 'Valeur': '150' },
  { 'ACTIF': 'Immeuble bureau (siège)', 'Valeur': '800' },
  { 'ACTIF': 'Immeuble locatif A', 'Valeur': '1 200' },
  { 'ACTIF': 'Immeuble locatif B', 'Valeur': '900' },
  { 'ACTIF': 'Titres participation non cotés', 'Valeur': '400' },
  { 'ACTIF': 'Titres cotés (actions)', 'Valeur': '300' },
  { 'ACTIF': 'Dépôt de garantie locataire', 'Valeur': '50' },
  { 'ACTIF': 'CIRCULANT', 'Valeur': '' },
  { 'ACTIF': 'Créances locataires', 'Valeur': '120' },
  { 'ACTIF': 'Banque', 'Valeur': '75' },
  { 'ACTIF': 'TOTAL ACTIF', 'Valeur': '4 700' }
];

const exemple1BilanPassif = [
  { 'PASSIF': 'CAPITAUX PROPRES', 'Valeur': '2 850' },
  { 'PASSIF': 'Capital social', 'Valeur': '1 500' },
  { 'PASSIF': 'Réserves', 'Valeur': '950' },
  { 'PASSIF': 'Résultat de l\'exercice', 'Valeur': '400' },
  { 'PASSIF': 'PROVISIONS', 'Valeur': '80' },
  { 'PASSIF': 'Provision pour litiges', 'Valeur': '80' },
  { 'PASSIF': 'DETTES', 'Valeur': '1 770' },
  { 'PASSIF': 'Emprunt hypothécaire A', 'Valeur': '600' },
  { 'PASSIF': 'Emprunt hypothécaire B', 'Valeur': '450' },
  { 'PASSIF': 'Emprunt acquisition titres', 'Valeur': '200' },
  { 'PASSIF': 'Dettes fiscales', 'Valeur': '320' },
  { 'PASSIF': 'Dettes diverses', 'Valeur': '200' },
  { 'PASSIF': 'TOTAL PASSIF', 'Valeur': '4 700' }
];

const exemple1Calculs = [
  { step: '', description: 'ANC de départ', calculation: '', amount: '2 850' },
  { step: '1', description: 'ACTIFS FICTIFS', calculation: '', amount: '' },
  { step: '1.1', description: 'Élimination frais établissement', calculation: '', amount: '-25' },
  { step: '1.2', description: 'Élimination fonds commercial obsolète', calculation: '', amount: '-150' },
  { step: '2', description: 'RÉÉVALUATIONS ACTIFS', calculation: '', amount: '' },
  { step: '2.1', description: 'Plus-value immeuble siège', calculation: '1 100 - 800', amount: '+300' },
  { step: '2.2', description: 'Plus-value immeuble A', calculation: '1 800 - 1 200', amount: '+600' },
  { step: '2.3', description: 'Plus-value immeuble B', calculation: '1 350 - 900', amount: '+450' },
  { step: '2.4', description: 'Plus-value titres non cotés', calculation: '650 - 400', amount: '+250' },
  { step: '2.5', description: 'Plus-value titres cotés', calculation: '420 - 300', amount: '+120' },
  { step: '2.6', description: 'Moins-value créances', calculation: 'Créance irrécouvrable', amount: '-15' },
  { step: '3', description: 'ÉLÉMENTS HORS-BILAN', calculation: '', amount: '' },
  { step: '3.1', description: 'Crédit-bail véhicules', calculation: '45 - 30', amount: '+15' },
  { step: '3.2', description: 'Engagement retraite', calculation: 'Provision manquante', amount: '-90' },
  { step: '3.3', description: 'Caution bancaire', calculation: 'Risque estimé', amount: '-20' },
  { step: '4', description: 'PROVISIONS', calculation: '', amount: '' },
  { step: '4.1', description: 'Reprise provision litige', calculation: 'Affaire réglée', amount: '+80' },
  { step: '', description: 'Sous-total avant impôt', calculation: '', amount: '4 365' },
  { step: '5', description: 'FISCALITÉ', calculation: '', amount: '' },
  { step: '5.1', description: 'Plus-values nettes', calculation: '(300+600+450+250+120+80) - (25+150+15+90+20)', amount: '+1 500' },
  { step: '5.2', description: 'Impôt latent (25%)', calculation: '1 500 × 25%', amount: '-375' }
];

// Données pour l'exemple 2 - Entreprise Industrielle
const exemple2BilanActif = [
  { 'ACTIF': 'IMMOBILISATIONS', 'Valeur': '' },
  { 'ACTIF': 'Frais R&D activés', 'Valeur': '180' },
  { 'ACTIF': 'Brevets et licences', 'Valeur': '120' },
  { 'ACTIF': 'Logiciels métier', 'Valeur': '80' },
  { 'ACTIF': 'Terrain industriel', 'Valeur': '300' },
  { 'ACTIF': 'Bâtiment usine', 'Valeur': '1 200' },
  { 'ACTIF': 'Machines CN (parc A)', 'Valeur': '800' },
  { 'ACTIF': 'Machines CN (parc B)', 'Valeur': '400' },
  { 'ACTIF': 'Matériel transport', 'Valeur': '150' },
  { 'ACTIF': 'Mobilier/informatique', 'Valeur': '100' },
  { 'ACTIF': 'CIRCULANT', 'Valeur': '' },
  { 'ACTIF': 'Stocks matières', 'Valeur': '200' },
  { 'ACTIF': 'Stocks produits finis', 'Valeur': '180' },
  { 'ACTIF': 'Créances clients', 'Valeur': '350' },
  { 'ACTIF': 'Banque', 'Valeur': '70' },
  { 'ACTIF': 'TOTAL ACTIF', 'Valeur': '4 130' }
];

const exemple2BilanPassif = [
  { 'PASSIF': 'CAPITAUX PROPRES', 'Valeur': '1 850' },
  { 'PASSIF': 'Capital social', 'Valeur': '800' },
  { 'PASSIF': 'Réserves', 'Valeur': '750' },
  { 'PASSIF': 'Résultat exercice', 'Valeur': '300' },
  { 'PASSIF': 'PROVISIONS', 'Valeur': '150' },
  { 'PASSIF': 'Provision garantie', 'Valeur': '50' },
  { 'PASSIF': 'Provision retraites', 'Valeur': '100' },
  { 'PASSIF': 'DETTES', 'Valeur': '1 730' },
  { 'PASSIF': 'Emprunt équipement', 'Valeur': '800' },
  { 'PASSIF': 'Crédit-bail machines', 'Valeur': '0' },
  { 'PASSIF': 'Avance clients', 'Valeur': '120' },
  { 'PASSIF': 'Dettes fournisseurs', 'Valeur': '400' },
  { 'PASSIF': 'Dettes sociales', 'Valeur': '210' },
  { 'PASSIF': 'Dettes fiscales', 'Valeur': '200' },
  { 'PASSIF': 'TOTAL PASSIF', 'Valeur': '3 730' }
];

const exemple2Calculs = [
  { step: '', description: 'ANC de départ', calculation: '', amount: '1 850' },
  { step: '1', description: 'ACTIFS FICTIFS', calculation: '', amount: '' },
  { step: '1.1', description: 'Élimination R&D abandonné', calculation: 'Projet A échoué', amount: '-80' },
  { step: '1.2', description: 'Élimination brevet expiré', calculation: 'Sans valeur', amount: '-30' },
  { step: '2', description: 'RÉÉVALUATIONS ACTIFS', calculation: '', amount: '' },
  { step: '2.1', description: 'Plus-value brevets valides', calculation: '150 - (120-30)', amount: '+60' },
  { step: '2.2', description: 'Plus-value terrain', calculation: '450 - 300', amount: '+150' },
  { step: '2.3', description: 'Plus-value bâtiment', calculation: '1 600 - 1 200', amount: '+400' },
  { step: '2.4', description: 'Plus-value machines A', calculation: '1 100 - 800', amount: '+300' },
  { step: '2.5', description: 'Moins-value machines B', calculation: '200 - 400', amount: '-200' },
  { step: '2.6', description: 'Moins-value transport', calculation: '80 - 150', amount: '-70' },
  { step: '2.7', description: 'Moins-value stocks matières', calculation: 'Périmées', amount: '-20' },
  { step: '2.8', description: 'Moins-value stocks produits', calculation: 'Invendables', amount: '-30' },
  { step: '2.9', description: 'Moins-value créances', calculation: 'Irrécouvrable', amount: '-25' },
  { step: '3', description: 'ÉLÉMENTS HORS-BILAN', calculation: '', amount: '' },
  { step: '3.1', description: 'Crédit-bail machines', calculation: '180 - 120', amount: '+60' },
  { step: '3.2', description: 'EENE', calculation: 'Neutre (actif = passif)', amount: '0' },
  { step: '3.3', description: 'Complément retraites', calculation: '180 - 100', amount: '-80' },
  { step: '3.4', description: 'Contrat défavorable', calculation: 'Surcoût estimé', amount: '-60' },
  { step: '4', description: 'PROVISIONS', calculation: '', amount: '' },
  { step: '4.1', description: 'Ajustement provision garantie', calculation: '50 - 30', amount: '+20' },
  { step: '', description: 'Sous-total avant impôt', calculation: '', amount: '2 245' },
  { step: '5', description: 'FISCALITÉ', calculation: '', amount: '' },
  { step: '5.1', description: 'Plus-values nettes', calculation: '(60+150+400+300+20) - (80+30+200+70+20+30+25+80+60)', amount: '+335' },
  { step: '5.2', description: 'Impôt latent (25%)', calculation: '335 × 25%', amount: '-84' }
];

const syntheseComparative = [
  { 'Critère': 'Écart ANCC/ANC', 'Holding Immobilier': '+40%', 'Entreprise Industrielle': '+17%' },
  { 'Critère': 'Principal driver', 'Holding Immobilier': 'Plus-values immobilières', 'Entreprise Industrielle': 'Réévaluation terrain/bâtiment' },
  { 'Critère': 'Complexité HB', 'Holding Immobilier': 'Faible', 'Entreprise Industrielle': 'Forte (crédit-bail, EENE)' },
  { 'Critère': 'Risque d\'obsolescence', 'Holding Immobilier': 'Faible', 'Entreprise Industrielle': 'Fort (machines)' },
  { 'Critère': 'Impôt latent', 'Holding Immobilier': 'Élevé (375 K€)', 'Entreprise Industrielle': 'Modéré (84 K€)' }
];

export default function ANNCExercicesPage() {
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
            <div className="bg-orange-100 p-3 rounded-xl">
              <Calculator className="h-8 w-8 text-orange-600" />
            </div>
            <div>
              <h1 className="text-4xl font-bold text-gray-900">
                ANCC - Exercices Pratiques
              </h1>
              <p className="text-gray-600 text-lg">
                Cas pratiques complexes avec corrections détaillées
              </p>
            </div>
          </div>
          
          {/* Exemple 1 - Holding Immobilier */}
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
                    Exemple 1 : Holding Immobilier "Patrimoine Invest SA"
                  </h2>
                  <p className="text-gray-600">
                    Société holding spécialisée dans l&apos;investissement immobilier et les participations. Évaluation en vue d&apos;une cession.
                  </p>
                </div>
              </div>
              
              <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-lg mb-6">
                <p className="text-blue-800">
                  <strong>ANC Initial :</strong> 2 850 K€
                </p>
              </div>
            </motion.div>
            
            <div className="grid lg:grid-cols-2 gap-8 mb-8">
              <ANNCTable
                title="Bilan Comptable Initial - ACTIF (en K€)"
                headers={['ACTIF', 'Valeur']}
                rows={exemple1BilanActif}
                colorScheme="blue"
                highlightLastRow
              />
              
              <ANNCTable
                title="Bilan Comptable Initial - PASSIF (en K€)"
                headers={['PASSIF', 'Valeur']}
                rows={exemple1BilanPassif}
                colorScheme="blue"
                highlightLastRow
              />
            </div>
            
            <div className="mb-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="bg-white rounded-xl shadow-lg p-6 mb-6"
              >
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Informations Complémentaires</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-blue-600 mb-2">Expertises et Analyses</h4>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• <strong>Frais d&apos;établissement :</strong> Aucune valeur</li>
                      <li>• <strong>Fonds commercial :</strong> Valeur nulle</li>
                      <li>• <strong>Immeuble siège :</strong> Expertise 2024 → 1 100 K€</li>
                      <li>• <strong>Immeuble A :</strong> Expertise 2024 → 1 800 K€</li>
                      <li>• <strong>Immeuble B :</strong> Expertise 2024 → 1 350 K€</li>
                      <li>• <strong>Titres non cotés :</strong> Valorisation DCF = 650 K€</li>
                      <li>• <strong>Titres cotés :</strong> Cours moyen 3 mois → 420 K€</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-blue-600 mb-2">Éléments Hors-Bilan</h4>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• <strong>Crédit-bail :</strong> Véhicules (VNC = 45 K€, dette = 30 K€)</li>
                      <li>• <strong>Engagement retraite :</strong> Non provisionné → 90 K€</li>
                      <li>• <strong>Caution bancaire :</strong> Risque estimé 20 K€</li>
                      <li>• <strong>Créances locataires :</strong> 15 K€ irrécouvrables</li>
                      <li>• <strong>Provision litige :</strong> Affaire réglée favorablement</li>
                      <li>• <strong>Fiscalité :</strong> Taux IS = 25%</li>
                    </ul>
                  </div>
                </div>
              </motion.div>
            </div>
            
            <ANNCCalculationTable
              title="Calcul Détaillé de l'ANCC - Holding Immobilier"
              calculations={exemple1Calculs}
              finalAmount="3 990"
              colorScheme="blue"
            />
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="bg-gradient-to-r from-blue-50 to-green-50 border border-blue-200 rounded-xl p-6 mt-6"
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Synthèse Exemple 1</h3>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900">2 850 K€</div>
                  <div className="text-sm text-gray-600">ANC comptable</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600">3 990 K€</div>
                  <div className="text-sm text-gray-600">ANCC corrigé</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">+40%</div>
                  <div className="text-sm text-gray-600">Écart vs ANC</div>
                </div>
              </div>
            </motion.div>
          </div>
          
          {/* Exemple 2 - Entreprise Industrielle */}
          <div className="mb-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="bg-white rounded-xl shadow-lg p-8 mb-8"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-orange-100 p-3 rounded-xl">
                  <Factory className="h-8 w-8 text-orange-600" />
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-gray-900">
                    Exemple 2 : Entreprise Industrielle "Meca Precision SAS"
                  </h2>
                  <p className="text-gray-600">
                    PME industrielle spécialisée dans l&apos;usinage de précision. Évaluation pour transmission familiale.
                  </p>
                </div>
              </div>
              
              <div className="bg-orange-50 border-l-4 border-orange-500 p-4 rounded-r-lg mb-6">
                <p className="text-orange-800">
                  <strong>ANC Initial :</strong> 1 850 K€
                </p>
              </div>
            </motion.div>
            
            <div className="grid lg:grid-cols-2 gap-8 mb-8">
              <ANNCTable
                title="Bilan Comptable Initial - ACTIF (en K€)"
                headers={['ACTIF', 'Valeur']}
                rows={exemple2BilanActif}
                colorScheme="orange"
                highlightLastRow
              />
              
              <ANNCTable
                title="Bilan Comptable Initial - PASSIF (en K€)"
                headers={['PASSIF', 'Valeur']}
                rows={exemple2BilanPassif}
                colorScheme="orange"
                highlightLastRow
              />
            </div>
            
            <div className="mb-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.0 }}
                className="bg-white rounded-xl shadow-lg p-6 mb-6"
              >
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Informations Complémentaires</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-orange-600 mb-2">Analyses Techniques</h4>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• <strong>Frais R&D :</strong> Projet A abandonné (80 K€), Projet B à conserver (100 K€)</li>
                      <li>• <strong>Brevets :</strong> 1 brevet expiré (30 K€), autres réévalués à 150 K€</li>
                      <li>• <strong>Terrain :</strong> Zone industrielle valorisée → 450 K€</li>
                      <li>• <strong>Bâtiment :</strong> Expertise technique → 1 600 K€</li>
                      <li>• <strong>Machines A :</strong> Neuves, haute performance → 1 100 K€</li>
                      <li>• <strong>Machines B :</strong> Obsolètes, 2 machines HS → 200 K€</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-orange-600 mb-2">Éléments Hors-Bilan</h4>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• <strong>Crédit-bail machines :</strong> 3 machines (valeur 180 K€, dette 120 K€)</li>
                      <li>• <strong>EENE :</strong> Effets escomptés → 80 K€</li>
                      <li>• <strong>Engagements retraite :</strong> Évaluation actuarielle → 180 K€</li>
                      <li>• <strong>Contrat défavorable :</strong> Sous-traitance → Surcoût 60 K€</li>
                      <li>• <strong>Stocks :</strong> 20 K€ matières périmées, 30 K€ produits invendables</li>
                      <li>• <strong>Créances :</strong> Client défaillant → 25 K€ irrécouvrables</li>
                    </ul>
                  </div>
                </div>
              </motion.div>
            </div>
            
            <ANNCCalculationTable
              title="Calcul Détaillé de l'ANCC - Entreprise Industrielle"
              calculations={exemple2Calculs}
              finalAmount="2 161"
              colorScheme="orange"
            />
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.2 }}
              className="bg-gradient-to-r from-orange-50 to-green-50 border border-orange-200 rounded-xl p-6 mt-6"
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Synthèse Exemple 2</h3>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900">1 850 K€</div>
                  <div className="text-sm text-gray-600">ANC comptable</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600">2 161 K€</div>
                  <div className="text-sm text-gray-600">ANCC corrigé</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-orange-600">+17%</div>
                  <div className="text-sm text-gray-600">Écart vs ANC</div>
                </div>
              </div>
            </motion.div>
          </div>
          
          {/* Analyse Comparative */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.4 }}
            className="mb-8"
          >
            <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-purple-100 p-3 rounded-xl">
                  <TrendingUp className="h-8 w-8 text-purple-600" />
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-gray-900">
                    Analyse Comparative des Deux Exemples
                  </h2>
                </div>
              </div>
              
              <ANNCTable
                title="Comparaison des Résultats"
                headers={['Critère', 'Holding Immobilier', 'Entreprise Industrielle']}
                rows={syntheseComparative}
                colorScheme="default"
              />
            </div>
            
            <div className="bg-gradient-to-r from-purple-50 to-blue-50 border border-purple-200 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Points Clés d&apos;Apprentissage</h3>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <AlertCircle className="h-5 w-5 text-blue-600 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Secteur immobilier</h4>
                      <p className="text-gray-700 text-sm">Les plus-values latentes peuvent être très significatives</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <AlertCircle className="h-5 w-5 text-orange-600 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Secteur industriel</h4>
                      <p className="text-gray-700 text-sm">Attention aux obsolescences techniques et aux éléments hors-bilan</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <AlertCircle className="h-5 w-5 text-red-600 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Fiscalité</h4>
                      <p className="text-gray-700 text-sm">L&apos;impôt latent peut représenter 25% des plus-values → Impact majeur</p>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <AlertCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Hors-bilan</h4>
                      <p className="text-gray-700 text-sm">Souvent négligé mais peut modifier substantiellement la valorisation</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <AlertCircle className="h-5 w-5 text-purple-600 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Provisions</h4>
                      <p className="text-gray-700 text-sm">Vérifier systématiquement leur justification économique</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
        
        <SectionNavigation
          previousSection={{
            title: "ANCC - Théorie",
            href: "/ancc-theorie"
          }}
          nextSection={{
            title: "Quiz Final",
            href: "/quiz"
          }}
        />
      </div>
    </div>
  );
}