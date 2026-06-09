import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-24 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto w-full">
        <div className="h-[100vh] flex items-center justify-center border border-dashed border-white/10 rounded-xl">
          <p className="text-gray-500">Type "1" to show the content</p>
        </div>
      </main>

      <Footer />
    </div>
  )
}