const projects = [
  {
    id: 1,
    title: "Education Website",
    description: "Responsive Education Website using React and CSS",
    tags: ["React", "CSS"],
    link: "https://advance-fe-2.vercel.app/",
    image: "/education-website.png",
  },
  {
    id: 2,
    title: "Portfolio Website",
    description:
      "My own personal portfolio website using React and TailwindCSS",
    tags: ["React", "TailwindCSS"],
    link: "https://ariefagus.vercel.app/",
    image: "/portfolio-website.png",
  },
  {
    id: 3,
    title: "KPI Tracking App",
    description:
      "A web-based system for managing and reporting organizational performance metrics.",
    tags: ["React", "TailwindCSS, Axios"],
    link: "https://github.com/Rezeon/vpbi-kpi-tracker-frontend",
    image: "/kpi-tracking-app.png",
  },
  {
    id: 4,
    title: "Indonesian Resto",
    description:
      "A simple and modern Indonesian restaurant web app built using React, Vite, HTML, and CSS",
    tags: ["html", "CSS", "React", "Vite"],
    link: "https://indonesian-resto.vercel.app/",
    image: "/indonesian-resto.png",
  },
   {
    id: 5,
    title: "CMMS App (in progress)",
    description:
      "Backend service for a Computerized Maintenance Management System (CMMS) built using Express.js, Prisma ORM, and Neon PostgreSQL.",
    tags: ["nodejs", "jwt", "expressjs", "prisma"],
    link: "https://github.com/argus1995/cmms-app",
    image: "/cmms-app.png",
  },
  {
    id: 6,
    title: "Ticketing Api (in progress)",
    description:
      "A simple Ticketing System REST API built with Laravel",
    tags: ["laravel", "rest-api", "sanctum", "mysql"],
    link: "https://github.com/argus1995/ticketing-api",
    image: "/ticketing-api.png",
  },
];

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
  );
}
