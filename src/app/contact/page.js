export default function Contact() {
    return (
      <section id="contact" className="py-20 bg-gray-50 min-h-screen">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-6">Contact Me</h2>
          <p className="text-lg text-gray-600 mb-12">Feel free to reach out for collaborations or just a friendly chat!</p>
  
          <form className="space-y-6">
            <div>
              <label className="block text-left text-gray-700 font-medium">Name</label>
              <input type="text" name="name" className="w-full p-3 border border-gray-300 rounded-md" placeholder="Your Name" />
            </div>
  
            <div>
              <label className="block text-left text-gray-700 font-medium">Email</label>
              <input type="email" name="email" className="w-full p-3 border border-gray-300 rounded-md" placeholder="Your Email" />
            </div>
  
            <div>
              <label className="block text-left text-gray-700 font-medium">Message</label>
              <textarea name="message" className="w-full p-3 border border-gray-300 rounded-md" placeholder="Your Message" rows="5"></textarea>
            </div>
  
            <button type="submit" className="w-full bg-blue-500 text-white py-3 rounded-md hover:bg-blue-600 transition duration-300">
              Send Message
            </button>
          </form>
        </div>
      </section>
    );
  }
  