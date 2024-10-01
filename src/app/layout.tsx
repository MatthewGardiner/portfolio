// app/layout.js
import './globals.css';
import Link from 'next/link';

export const metadata = {
  title: 'My Portfolio',
  description: 'Welcome to my developer portfolio',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-100">
        <nav className="bg-gray-800 text-white py-4">
          <div className="max-w-4xl mx-auto flex justify-between items-center">
            <h1 className="text-2xl font-bold">Portfolio</h1>
            <div className="space-x-4">
              <Link href="/" className="hover:text-gray-400">Home</Link>
              <Link href="/about" className="hover:text-gray-400">About</Link>
              <Link href="/projects" className="hover:text-gray-400">Projects</Link>
              <Link href="/contact" className="hover:text-gray-400">Contact</Link>
            </div>
          </div>
        </nav>
        {children}

        <footer className="bg-gray-800 text-white py-6">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-sm">&copy; {new Date().getFullYear()} Matthew Gardiner. All rights reserved.</p>
            <div className="mt-4 space-x-4">
              <a href="https://github.com/MatthewGardiner" className="hover:text-gray-400">GitHub</a>
              <a href="https://www.linkedin.com/in/matthew-gardiner-69b830112/" className="hover:text-gray-400">LinkedIn</a>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
