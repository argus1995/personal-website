export default function Contact() {
    return (
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-12">
            {/* Photo */}
            <div className="w-full md:w-1/3 flex justify-center">
              <div className="relative">
                <img 
                  src="/my-photo.png"
                  alt="Arief Agus"
                  className="w-48 h-48 rounded-full object-cover border-2 border-emerald-100 shadow-md"
                />
                <div className="absolute inset-0 rounded-full border-4 border-emerald-400 opacity-10 pointer-events-none"></div>
              </div>
            </div>
  
            {/* Contact Information */}
            <div className="w-full md:w-2/3">
              <h1 className="text-4xl font-bold mb-8 text-gray-800">
                <span className="text-emerald-500">Contact</span> Me
              </h1>
              
              <div className="space-y-6">
                {/* Email */}
                <div className="flex items-center bg-gray-50 p-4 rounded-lg hover:bg-gray-100 transition-colors">
                  <div className="bg-emerald-100 text-emerald-600 p-3 rounded-full mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-gray-500">Email</h3>
                    <a 
                      href="mailto:ariefagus1995@gmail.com" 
                      className="text-emerald-600 hover:text-emerald-500 transition-colors font-medium"
                    >
                      ariefagus1995@gmail.com
                    </a>
                  </div>
                </div>
  
                {/* LinkedIn */}
                <div className="flex items-center bg-gray-50 p-4 rounded-lg hover:bg-gray-100 transition-colors">
                  <div className="bg-emerald-100 text-emerald-600 p-3 rounded-full mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-gray-500">LinkedIn</h3>
                    <a 
                      href="https://www.linkedin.com/in/ariefagus1995" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-emerald-600 hover:text-emerald-500 transition-colors font-medium"
                    >
                      linkedin.com/in/ariefagus1995
                    </a>
                  </div>
                </div>
  
                {/* GitHub */}
                <div className="flex items-center bg-gray-50 p-4 rounded-lg hover:bg-gray-100 transition-colors">
                  <div className="bg-emerald-100 text-emerald-600 p-3 rounded-full mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-gray-500">GitHub</h3>
                    <a 
                      href="https://github.com/argus1995" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-emerald-600 hover:text-emerald-500 transition-colors font-medium"
                    >
                      github.com/argus1995
                    </a>
                  </div>
                </div>
  
                {/* Resume */}
                <div className="flex items-center bg-gray-50 p-4 rounded-lg hover:bg-gray-100 transition-colors">
                  <div className="bg-emerald-100 text-emerald-600 p-3 rounded-full mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-gray-500">Resume</h3>
                    <a 
                      href="/my-resume.pdf" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-emerald-600 hover:text-emerald-500 transition-colors font-medium"
                    >
                      Download My Resume
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }