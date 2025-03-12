import Image from "next/image";
import Link from "next/link";

// Sample project data (replace with your own)
const projects = [
  {
    id: 1,
    title: "Project One",
    description: "A detailed description of project one explaining its purpose, features, and technologies used. You can include challenges faced and how you overcame them.",
    image: "/project1.jpg",
    tags: ["React", "TailwindCSS", "Next.js"],
    demoUrl: "https://project1.example.com",
    githubUrl: "https://github.com/yourusername/project1",
  },
  {
    id: 2,
    title: "Project Two",
    description: "A detailed description of project two explaining its purpose, features, and technologies used. You can include challenges faced and how you overcame them.",
    image: "/project2.jpg",
    tags: ["TypeScript", "Node.js", "MongoDB"],
    demoUrl: "https://project2.example.com",
    githubUrl: "https://github.com/yourusername/project2",
  },
  {
    id: 3,
    title: "Project Three",
    description: "A detailed description of project three explaining its purpose, features, and technologies used. You can include challenges faced and how you overcame them.",
    image: "/project3.jpg",
    tags: ["React", "Firebase", "CSS Modules"],
    demoUrl: "https://project3.example.com",
    githubUrl: "https://github.com/yourusername/project3",
  },
];

export default function Projects() {
  return (
    <div className="space-y-12">
      <h1 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">My Projects</h1>
      
      <p className="text-lg text-gray-600 dark:text-gray-300">
        Here are some of the projects I've worked on. Each represents different challenges I've tackled and skills I've developed.
      </p>
      
      <div className="space-y-16">
        {projects.map((project, index) => (
          <div key={project.id} className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className={index % 2 === 1 ? "md:order-2" : ""}>
              <h2 className="text-2xl font-bold mb-4">{project.title}</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map((tag) => (
                  <span key={tag} className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs font-medium rounded-md">
                    {tag}
                  </span>
                ))}
              </div>
              
              <div className="flex gap-4">
                <a 
                  href={project.demoUrl} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
                >
                  Live Demo
                </a>
                <a 
                  href={project.githubUrl} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="border border-gray-300 px-4 py-2 rounded-md hover:bg-gray-50 transition"
                >
                  Source Code
                </a>
              </div>
            </div>
            
            <div className={`bg-gray-100 dark:bg-gray-800 rounded-lg overflow-hidden shadow-md ${index % 2 === 1 ? "md:order-1" : ""}`}>
              <div className="aspect-video w-full bg-gray-200 dark:bg-gray-700 relative">
                {/* Replace with actual project images */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-gray-500 dark:text-gray-400">Project Image</span>
                </div>
                {/* Uncomment when you have images
                <Image 
                  src={project.image} 
                  alt={project.title}
                  fill
                  className="object-cover"
                />
                */}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}