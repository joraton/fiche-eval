'use client';

import { useState } from 'react';
import BackToPlanButton from '@/components/content/BackToPlanButton';
import SectionNavigation from '@/components/content/SectionNavigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Award, CheckCircle, XCircle, RotateCcw, Trophy } from 'lucide-react';

interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

const questions: Question[] = [
  {
    id: 1,
    question: "Quelle est la formule de base de l'ANCC ?",
    options: [
      "ANCC = ANC + Corrections positives - Corrections négatives",
      "ANCC = ANC + Corrections positives - Corrections négatives - Impôt latent",
      "ANCC = Capitaux Propres + Plus-values - Moins-values",
      "ANCC = Total Actif - Total Passif + Corrections"
    ],
    correctAnswer: 1,
    explanation: "La formule complète de l'ANCC inclut l'impôt latent qui doit être déduit des plus-values nettes."
  },
  {
    id: 2,
    question: "Parmi ces éléments, lequel est considéré comme un actif fictif à éliminer ?",
    options: [
      "Un immeuble de bureaux",
      "Des frais d'établissement",
      "Des stocks de matières premières",
      "Des créances clients"
    ],
    correctAnswer: 1,
    explanation: "Les frais d'établissement sont des actifs fictifs car ils n'ont aucune valeur de revente ou d'utilité économique réelle."
  },
  {
    id: 3,
    question: "Dans le cadre d'un crédit-bail, quel est l'impact sur l'ANCC ?",
    options: [
      "Aucun impact car c'est hors-bilan",
      "Seulement l'ajout de l'actif",
      "Seulement l'ajout de la dette",
      "Ajout de l'actif (valeur du bien) et de la dette (montant restant dû)"
    ],
    correctAnswer: 3,
    explanation: "Le crédit-bail doit être retraité en ajoutant l'actif (valeur actuelle du bien) et la dette correspondante (montant restant dû)."
  },
  {
    id: 4,
    question: "Quel est le taux d'impôt latent généralement appliqué en France ?",
    options: [
      "15%",
      "20%",
      "25%",
      "33%"
    ],
    correctAnswer: 2,
    explanation: "Le taux d'impôt sur les sociétés en France est de 25% pour les plus-values, c'est donc ce taux qui s'applique pour l'impôt latent."
  },
  {
    id: 5,
    question: "Pour quel type d'entreprise l'ANCC est-elle particulièrement adaptée ?",
    options: [
      "Entreprise de services informatiques",
      "Start-up technologique",
      "Holding immobilier",
      "Entreprise de conseil"
    ],
    correctAnswer: 2,
    explanation: "L'ANCC est particulièrement adaptée aux holdings immobiliers car elle valorise le patrimoine, contrairement aux entreprises de services qui ont peu d'actifs tangibles."
  },
  {
    id: 6,
    question: "Que représente l'ANC dans le calcul de l'ANCC ?",
    options: [
      "L'actif total de l'entreprise",
      "Les capitaux propres comptables",
      "La valeur de marché des actifs",
      "Le chiffre d'affaires annuel"
    ],
    correctAnswer: 1,
    explanation: "L'ANC (Actif Net Comptable) correspond aux capitaux propres comptables, soit la différence entre l'actif total et les dettes."
  },
  {
    id: 7,
    question: "Quelle est la principale limite de la méthode ANCC ?",
    options: [
      "Elle est trop complexe à calculer",
      "Elle ignore la rentabilité future de l'entreprise",
      "Elle surestime la valeur des actifs",
      "Elle ne prend pas en compte les dettes"
    ],
    correctAnswer: 1,
    explanation: "La principale limite de l'ANCC est qu'elle ignore la rentabilité future et le potentiel de croissance, se concentrant uniquement sur la valeur patrimoniale."
  },
  {
    id: 8,
    question: "Comment doit-on traiter une provision pour litiges qui s'avère surévaluée ?",
    options: [
      "La maintenir par prudence",
      "La reprendre partiellement",
      "L'ajuster à sa juste valeur",
      "L'ignorer dans le calcul"
    ],
    correctAnswer: 2,
    explanation: "Une provision surévaluée doit être ajustée à sa juste valeur économique, ce qui constitue une correction positive dans le calcul de l'ANCC."
  },
  {
    id: 9,
    question: "Dans l'exemple du holding immobilier, quel était l'écart entre l'ANC et l'ANCC ?",
    options: [
      "+17%",
      "+25%",
      "+40%",
      "+55%"
    ],
    correctAnswer: 2,
    explanation: "Dans l'exemple du holding immobilier, l'ANCC (3 990 K€) représentait un écart de +40% par rapport à l'ANC initial (2 850 K€)."
  },
  {
    id: 10,
    question: "Quelle approche est recommandée pour une évaluation complète d'entreprise ?",
    options: [
      "Utiliser uniquement l'ANCC",
      "Utiliser uniquement la méthode DCF",
      "Combiner ANCC, DCF et Multiples",
      "Utiliser uniquement les multiples de marché"
    ],
    correctAnswer: 2,
    explanation: "Il est recommandé d'utiliser les trois approches (patrimoniale, intrinsèque et comparative) pour obtenir une fourchette de valorisation robuste."
  }
];

export default function QuizPage() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<number[]>([]);
  const [showResults, setShowResults] = useState(false);
  const [quizCompleted, setQuizCompleted] = useState(false);

  const handleAnswerSelect = (answerIndex: number) => {
    const newAnswers = [...selectedAnswers];
    newAnswers[currentQuestion] = answerIndex;
    setSelectedAnswers(newAnswers);
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setQuizCompleted(true);
      setShowResults(true);
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setSelectedAnswers([]);
    setShowResults(false);
    setQuizCompleted(false);
  };

  const calculateScore = () => {
    let correct = 0;
    questions.forEach((question, index) => {
      if (selectedAnswers[index] === question.correctAnswer) {
        correct++;
      }
    });
    return correct;
  };

  const getScoreColor = (score: number) => {
    const percentage = (score / questions.length) * 100;
    if (percentage >= 80) return 'text-green-600';
    if (percentage >= 60) return 'text-orange-600';
    return 'text-red-600';
  };

  const getScoreMessage = (score: number) => {
    const percentage = (score / questions.length) * 100;
    if (percentage >= 80) return 'Excellent ! Vous maîtrisez parfaitement l\'ANCC.';
    if (percentage >= 60) return 'Bien ! Quelques révisions vous permettront de parfaire vos connaissances.';
    return 'Il est recommandé de revoir le cours théorique avant de continuer.';
  };

  if (showResults) {
    const score = calculateScore();
    const percentage = Math.round((score / questions.length) * 100);

    return (
      <div className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-4 py-8 max-w-4xl">
          <BackToPlanButton />
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-xl shadow-lg p-8 text-center"
          >
            <div className="mb-6">
              <div className="bg-purple-100 p-4 rounded-full w-20 h-20 mx-auto mb-4 flex items-center justify-center">
                <Trophy className="h-10 w-10 text-purple-600" />
              </div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">Quiz Terminé !</h1>
              <p className="text-gray-600">Voici vos résultats sur l'ANCC</p>
            </div>
            
            <div className="mb-8">
              <div className={`text-6xl font-bold mb-2 ${getScoreColor(score)}`}>
                {score}/{questions.length}
              </div>
              <div className={`text-2xl font-semibold mb-4 ${getScoreColor(score)}`}>
                {percentage}%
              </div>
              <p className="text-gray-700 text-lg">
                {getScoreMessage(score)}
              </p>
            </div>
            
            <div className="space-y-4 mb-8">
              {questions.map((question, index) => {
                const isCorrect = selectedAnswers[index] === question.correctAnswer;
                const userAnswer = selectedAnswers[index];
                
                return (
                  <motion.div
                    key={question.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    className="bg-gray-50 rounded-lg p-4 text-left"
                  >
                    <div className="flex items-start gap-3">
                      <div className="flex-shrink-0 mt-1">
                        {isCorrect ? (
                          <CheckCircle className="h-5 w-5 text-green-500" />
                        ) : (
                          <XCircle className="h-5 w-5 text-red-500" />
                        )}
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-gray-900 mb-2">
                          Question {index + 1}: {question.question}
                        </h3>
                        <div className="text-sm space-y-1">
                          <div className={`${isCorrect ? 'text-green-700' : 'text-red-700'}`}>
                            <strong>Votre réponse :</strong> {question.options[userAnswer] || 'Non répondu'}
                          </div>
                          {!isCorrect && (
                            <div className="text-green-700">
                              <strong>Bonne réponse :</strong> {question.options[question.correctAnswer]}
                            </div>
                          )}
                          <div className="text-gray-600 mt-2">
                            <strong>Explication :</strong> {question.explanation}
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
            
            <button
              onClick={resetQuiz}
              className="inline-flex items-center gap-2 bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition-colors"
            >
              <RotateCcw className="h-5 w-5" />
              Recommencer le quiz
            </button>
            
            <SectionNavigation
              previousSection={{
                title: "ANCC - Exercices",
                href: "/ancc-exercices"
              }}
            />
          </motion.div>
        </div>
      </div>
    );
  }

  const currentQ = questions[currentQuestion];
  const progress = ((currentQuestion + 1) / questions.length) * 100;

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <BackToPlanButton />
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-4 mb-8">
            <div className="bg-purple-100 p-3 rounded-xl">
              <Award className="h-8 w-8 text-purple-600" />
            </div>
            <div>
              <h1 className="text-4xl font-bold text-gray-900">
                Quiz Final - ANCC
              </h1>
              <p className="text-gray-600 text-lg">
                Évaluez vos connaissances sur l'Actif Net Comptable Corrigé
              </p>
            </div>
          </div>
          
          {/* Barre de progression */}
          <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
            <div className="flex justify-between items-center mb-4">
              <span className="text-sm font-medium text-gray-600">
                Question {currentQuestion + 1} sur {questions.length}
              </span>
              <span className="text-sm font-medium text-purple-600">
                {Math.round(progress)}% complété
              </span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <motion.div
                className="bg-purple-600 h-2 rounded-full"
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.5 }}
              />
            </div>
          </div>
          
          {/* Question */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentQuestion}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-xl shadow-lg p-8 mb-8"
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                {currentQ.question}
              </h2>
              
              <div className="space-y-4">
                {currentQ.options.map((option, index) => {
                  const isSelected = selectedAnswers[currentQuestion] === index;
                  
                  return (
                    <motion.button
                      key={index}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => handleAnswerSelect(index)}
                      className={`
                        w-full text-left p-4 rounded-lg border-2 transition-all duration-200
                        ${
                          isSelected
                            ? 'border-purple-500 bg-purple-50 text-purple-900'
                            : 'border-gray-200 bg-white text-gray-700 hover:border-purple-300 hover:bg-purple-50'
                        }
                      `}
                    >
                      <div className="flex items-center gap-3">
                        <div className={`
                          w-6 h-6 rounded-full border-2 flex items-center justify-center
                          ${
                            isSelected
                              ? 'border-purple-500 bg-purple-500'
                              : 'border-gray-300'
                          }
                        `}>
                          {isSelected && (
                            <CheckCircle className="h-4 w-4 text-white" />
                          )}
                        </div>
                        <span className="font-medium">
                          {String.fromCharCode(65 + index)}. {option}
                        </span>
                      </div>
                    </motion.button>
                  );
                })}
              </div>
            </motion.div>
          </AnimatePresence>
          
          {/* Navigation */}
          <div className="flex justify-between items-center">
            <button
              onClick={handlePrevious}
              disabled={currentQuestion === 0}
              className="px-6 py-3 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Précédent
            </button>
            
            <button
              onClick={handleNext}
              disabled={selectedAnswers[currentQuestion] === undefined}
              className="px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {currentQuestion === questions.length - 1 ? 'Terminer' : 'Suivant'}
            </button>
          </div>
          
          <SectionNavigation
            previousSection={{
              title: "ANCC - Exercices",
              href: "/ancc-exercices"
            }}
          />
        </motion.div>
      </div>
    </div>
  );
}