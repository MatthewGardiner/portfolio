export default function About() {
  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-900 min-h-screen"> {/* Dark mode background */}
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-6"> {/* Dark mode text */}
          About Me
        </h2>
        <p className="text-xl text-gray-600 dark:text-gray-300"> {/* Dark mode text */}
          Write something useful here
        </p>
      </div>
    </section>
  );
}
