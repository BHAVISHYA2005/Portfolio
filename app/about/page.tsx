import Image from "next/image";

export default function About() {
  return (
    <div className="space-y-12">
      <h1 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">About Me</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Hello! I'm Bhavishya, a passionate web developer with a keen interest in creating beautiful, 
            functional, and user-friendly websites. I specialize in front-end development, 
            focusing on modern JavaScript frameworks like React and Next.js.
          </p>
          
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
            With experience in the field, I've worked on various projects ranging from 
            small business websites to complex web applications. I'm constantly learning and staying 
            updated with the latest technologies and best practices in web development.
          </p>
          
          <div className="mt-8">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Education</h2>
            <ul className="mt-4 space-y-4">
              <li className="text-gray-600 dark:text-gray-300">
                <div className="font-medium">Bachelor's in Computer Science</div>
                <div>University Name, 2022</div>
              </li>
              {/* Add more education items as needed */}
            </ul>
          </div>
          
          <div className="mt-8">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Experience</h2>
            <ul className="mt-4 space-y-4">
              <li className="text-gray-600 dark:text-gray-300">
                <div className="font-medium">Web Developer</div>
                <div>Company Name, 2022-Present</div>
                <ul className="list-disc pl-5 mt-2 space-y-1">
                  <li>Developed responsive websites using React and Next.js</li>
                  <li>Collaborated with design team to implement UI/UX improvements</li>
                  <li>Optimized site performance and loading times</li>
                </ul>
              </li>
              {/* Add more experience items as needed */}
            </ul>
          </div>
        </div>
        
        <div className="flex justify-center lg:justify-end">
          <div className="space-y-8">
            <div className="relative w-64 h-64 rounded-full overflow-hidden mx-auto">
              {/* Replace with your image */}
              <div className="absolute inset-0 bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
                <span className="text-gray-500 dark:text-gray-400">Your Photo</span>
              </div>
            </div>
            
            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md">
              <h3 className="font-medium mb-4 text-center">Tools & Technologies</h3>
              <div className="flex flex-wrap gap-2 justify-center">
                {['Git', 'VS Code', 'Figma', 'Docker', 'AWS', 'Firebase'].map((tool) => (
                  <span key={tool} className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-300 text-sm font-medium rounded-full">
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}