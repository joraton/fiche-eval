import CourseHeader from '@/components/home/CourseHeader';
import CoursePlan from '@/components/home/CoursePlan';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50/30 to-purple-50/30 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-40">
        <div className="w-full h-full" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23e0e7ff' fill-opacity='0.3'%3E%3Cpath d='M50 50m-20 0a20 20 0 1 1 40 0a20 20 0 1 1 -40 0' stroke='%23c7d2fe' stroke-width='0.5' fill='none'/%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
      </div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-blue-200/20 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute top-40 right-20 w-32 h-32 bg-purple-200/20 rounded-full blur-xl animate-pulse" style={{animationDelay: '2s'}}></div>
      <div className="absolute bottom-20 left-1/4 w-24 h-24 bg-indigo-200/20 rounded-full blur-xl animate-pulse" style={{animationDelay: '4s'}}></div>
      
      <div className="relative container mx-auto px-4 py-6 md:py-8 max-w-6xl">
        <CourseHeader />
        <CoursePlan />
        
        {/* Footer */}
        <footer className="mt-12 pt-6 border-t border-gray-200/50 text-center">
          <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-4 shadow-lg">
            <p className="text-gray-600 mb-3 text-sm">
              💡 <strong>Formation professionnelle</strong> - Développez vos compétences en évaluation d&apos;entreprise
            </p>
            <div className="flex flex-wrap justify-center gap-3 text-xs text-gray-500">
              <span>📚 Contenu expert</span>
              <span>🎯 Cas pratiques</span>
              <span>🏆 Certification</span>
              <span>⚡ Accès immédiat</span>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
