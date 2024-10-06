// src/components/Footer.tsx
import { GitHubIcon, LinkedInIcon } from "./icons";

export default function Footer() {
  return (
    <footer className="bg-gray-800 dark:bg-gray-900 text-white py-6">
      <div className="max-w-4xl mx-auto text-center">
        <p className="text-sm">&copy; {new Date().getFullYear()} Matthew Gardiner. All rights reserved.</p>
        <div className="mt-4 space-x-4 flex justify-center">
          <a href="https://github.com/MatthewGardiner" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
            <GitHubIcon />
          </a>
          <a href="https://www.linkedin.com/in/matthew-gardiner-69b830112/" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
            <LinkedInIcon />
          </a>
        </div>
      </div>
    </footer>
  );
}
