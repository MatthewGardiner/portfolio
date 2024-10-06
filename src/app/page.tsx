import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 flex flex-col items-center justify-center">
      <section className="text-center py-20">
        <h1 className="text-5xl font-bold text-gray-800 dark:text-gray-100 mb-4">
          Hi, I'm Matthew Gardiner
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300">
          I'm a software developer with a passion for building awesome projects with friends!
        </p>
        <Link href="/projects" className="bg-blue-500 dark:bg-blue-600 text-white px-6 py-3 rounded-full shadow hover:bg-blue-600 dark:hover:bg-blue-700 transition duration-100 mt-4 inline-block">
          View My Projects
        </Link>
      </section>
    </div>
  );
}
