// projects page
export default function Projects() {
    return (
      <section id="projects" className="py-20 bg-white min-h-screen">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-6">
            Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-100 p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold text-gray-800 mb-2">Project 1</h3>
              <p className="text-gray-600">Description of your project goes here.</p>
            </div>
  
            <div className="bg-gray-100 p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold text-gray-800 mb-2">Project 2</h3>
              <p className="text-gray-600">Description of your project goes here.</p>
            </div>
          </div>
        </div>
      </section>
    );
  }
  