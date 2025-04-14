const projects = [
    {
      id: 1,
      title: 'Todo App',
      description: 'Simple Todo App with HTML, CSS and JavaCript',
      tags: ['HTML', 'CSS', 'JavaScript'],
      link: 'https://mission4todoapp.vercel.app',
      image: '/portfolio-1.png' 
    },
    {
      id: 2,
      title: 'Education Website',
      description: 'Responsive Education Website using React and CSS',
      tags: ['React', 'CSS'],
      link: 'https://mission5videobelajarreact.vercel.app', 
      image: '/portfolio-2.png' 
    },
    {
      id: 3,
      title: 'Portofolio Website',
      description: 'My own personal portofolio website using React and TailwindCSS',
      tags: ['React', 'TailwindCSS'],
      link: 'https://awgusmedia.com', 
      image: '/portfolio-3.png' 
    },
    {
        id: 4,
        title: 'IT Blog',
        description: 'IT blog website with WordPress',
        tags: ['WordPress'],
        link: 'https://awgusmedia.com', 
        image: '/portfolio-4.png' 
      },
  ]
  
  export default function Portfolio() {
    return (
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-12 text-center text-black">
            My <span className="text-emerald-500">Projects</span>
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <a 
                key={project.id} 
                href={project.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow border border-gray-200 hover:border-emerald-300 group"
              >
                <div className="h-48 bg-black flex items-center justify-center overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h2 className="text-xl font-bold mb-2 text-gray-800 group-hover:text-emerald-500 transition-colors">
                    {project.title}
                  </h2>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, index) => (
                      <span 
                        key={index} 
                        className="bg-emerald-100 text-emerald-800 text-xs font-medium px-2.5 py-0.5 rounded"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
    )
  }