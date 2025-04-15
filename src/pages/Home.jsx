import { Link } from 'react-router-dom';

export default function Home() {
    return (
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-center gap-12">
            {/* Photo Section */}
            <div className="w-full md:w-1/3 flex justify-center">
              <div className="relative">
                <img 
                  src="/my-photo.png"
                  alt="Your Name"
                  className="w-64 h-64 md:w-80 md:h-80 rounded-full object-cover border-4 border-emerald-500 shadow-lg"
                />
                <div className="absolute -inset-4 border-2 border-emerald-400 rounded-full animate-pulse opacity-70 pointer-events-none"></div>
              </div>
            </div>
  
            {/* Text Content */}
            <div className="w-full md:w-1/2 text-center md:text-left">
              <h1 className="text-4xl font-bold mb-6 text-black">
                Hello, I'm <span className="text-emerald-500">Arief Agus</span>
              </h1>
              <p className="text-xl mb-8 text-gray-700">
                A passionate developer creating simple and fast digital solutions.
              </p>
              <div className="flex flex-wrap justify-center md:justify-start gap-4">
                <Link  
                  to="/portfolio" 
                  className="bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-3 rounded-lg transition-colors font-medium shadow hover:shadow-lg"
                >
                  View My Work
                </Link>
                <Link 
                  to="/contact" 
                  className="bg-white text-black border-2 border-black hover:bg-black hover:text-white px-6 py-3 rounded-lg transition-colors font-medium shadow hover:shadow-lg"
                >
                  Contact Me
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }