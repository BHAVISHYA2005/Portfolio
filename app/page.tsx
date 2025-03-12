import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="flex flex-col md:flex-row gap-12 items-center">
        <div className="flex-1 space-y-6">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Hi, I'm <span className="text-blue-600">Bhavishya</span>
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-lg">
            Web Developer specializing in building modern, responsive websites and applications
            with React, Next.js, and Tailwind CSS.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link 
              href="/projects" 
              className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
            >
              View My Work
            </Link>
            <Link 
              href="/contact" 
              className="border border-gray-300 px-4 py-2 rounded-md hover:bg-gray-50 transition"
            >
              Contact Me
            </Link>
          </div>
        </div>
        <div className="flex-1 flex justify-center">
          <div className="relative w-64 h-64 rounded-full overflow-hidden border-8 border-gray-100 shadow-lg">
            <div className="absolute inset-0 bg-gray-200 flex items-center justify-center">
              <span className="text-gray-500">Your Photo</span>
            </div>
            {/* Uncomment and add your image when ready
            <Image 
              src="/your-profile-photo.jpg"
              alt="Bhavishya"
              fill
              className="object-cover"
            />
            */}
          </div>
        </div>
      </section>
      
      {/* Featured Projects Section */}
      <section className="space-y-8">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-semibold">Featured Projects</h2>
          <Link href="/projects" className="text-blue-600 hover:text-blue-500">
            View all projects →
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Project Card 1 */}
          <div className="border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition">
            <div className="h-48 bg-gray-100 flex items-center justify-center">
              <span className="text-gray-400">Project Image</span>
            </div>
            <div className="p-4">
              <h3 className="font-medium">Project One</h3>
              <p className="mt-1 text-sm text-gray-600">
                Brief description of the project and technologies used.
              </p>
              <div className="mt-4 flex gap-2">
                <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded-md">
                  React
                </span>
                <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded-md">
                  Next.js
                </span>
              </div>
            </div>
          </div>
          
          {/* Project Card 2 */}
          <div className="border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition">
            <div className="h-48 bg-gray-100 flex items-center justify-center">
              <span className="text-gray-400">Project Image</span>
            </div>
            <div className="p-4">
              <h3 className="font-medium">Project Two</h3>
              <p className="mt-1 text-sm text-gray-600">
                Brief description of the project and technologies used.
              </p>
              <div className="mt-4 flex gap-2">
                <span className="px-2 py-1 bg-green-100 text-green-800 text-xs font-medium rounded-md">
                  TypeScript
                </span>
                <span className="px-2 py-1 bg-green-100 text-green-800 text-xs font-medium rounded-md">
                  Node.js
                </span>
              </div>
            </div>
          </div>
          
          {/* Project Card 3 */}
          <div className="border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition">
            <div className="h-48 bg-gray-100 flex items-center justify-center">
              <span className="text-gray-400">Project Image</span>
            </div>
            <div className="p-4">
              <h3 className="font-medium">Project Three</h3>
              <p className="mt-1 text-sm text-gray-600">
                Brief description of the project and technologies used.
              </p>
              <div className="mt-4 flex gap-2">
                <span className="px-2 py-1 bg-purple-100 text-purple-800 text-xs font-medium rounded-md">
                  React
                </span>
                <span className="px-2 py-1 bg-purple-100 text-purple-800 text-xs font-medium rounded-md">
                  Tailwind
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Skills Section */}
      <section className="space-y-8">
        <h2 className="text-2xl font-semibold">Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="border border-gray-200 rounded-lg p-6 shadow-sm">
            <h3 className="font-medium mb-4">Frontend Development</h3>
            <div className="flex flex-wrap gap-2">
              {['HTML', 'CSS', 'JavaScript', 'React', 'Next.js', 'Tailwind CSS'].map((skill) => (
                <span key={skill} className="px-3 py-1 bg-blue-100 text-blue-800 text-sm font-medium rounded-full">
                  {skill}
                </span>
              ))}
            </div>
          </div>
          
          <div className="border border-gray-200 rounded-lg p-6 shadow-sm">
            <h3 className="font-medium mb-4">Backend Development</h3>
            <div className="flex flex-wrap gap-2">
              {['Node.js', 'Express', 'MongoDB', 'SQL', 'RESTful APIs'].map((skill) => (
                <span key={skill} className="px-3 py-1 bg-green-100 text-green-800 text-sm font-medium rounded-full">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
