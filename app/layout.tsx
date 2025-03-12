import './globals.css'
import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Bhavishya - Portfolio',
  description: 'Personal portfolio showcasing my projects and skills',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-gray-50 dark:bg-gray-900">
        <header className="sticky top-0 z-10 bg-white dark:bg-gray-800 shadow-sm">
          <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16">
              <div className="flex">
                <div className="flex-shrink-0 flex items-center">
                  <Link href="/" className="font-bold text-xl">Bhavishya</Link>
                </div>
                <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                  <Link href="/" className="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 px-1 pt-1 border-b-2">Home</Link>
                  <Link href="/about" className="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 px-1 pt-1 border-b-2">About</Link>
                  <Link href="/projects" className="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 px-1 pt-1 border-b-2">Projects</Link>
                  <Link href="/contact" className="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 px-1 pt-1 border-b-2">Contact</Link>
                </div>
              </div>
            </div>
          </nav>
        </header>
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          {children}
        </main>
        <footer className="bg-white dark:bg-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <p className="text-center text-gray-500">© {new Date().getFullYear()} Bhavishya. All rights reserved.</p>
          </div>
        </footer>
      </body>
    </html>
  )
}