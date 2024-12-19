import Header from "../components/Header"; // Ensure the path is correct
import Footer from "../components/Footer"; // Ensure the Footer component is in the correct path

const ContactPage = () => {
  return (
    <>
      {/* Header */}
      <Header />

      {/* Main Content */}
      <main className="flex-grow container mx-auto px-4 py-12">
        <h2 className="mt-50 text-center text-2xl font-bold tracking-tight text-gray-900">
          Contact Us
        </h2>
        <p className="mt-100 text-center text-gray-700 mb-8">
          We would love to hear from you! Fill out the form below, and we will
          get back to you as soon as possible.
        </p>
        <div className="max-w-2xl mx-auto bg-gray-200 rounded-lg shadow-md p-6">
          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-1">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full px-3 py-2 rounded bg-white text-gray-300 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-800"
                
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-1">
                Your Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-3 py-2 rounded bg-white text-gray-300 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-800"
                
                required
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium mb-1"
              >
                Your Message
              </label>
              <textarea
                id="message"
                rows="5"
                className="w-full px-3 py-2 rounded bg-white text-gray-300 outline-gray-300 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-800"
                
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-gray-700 hover:bg-gray-950 text-white px-4 py-2 rounded-md font-medium"
            >
              Send Message
            </button>
          </form>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </>
  );
};

export default ContactPage;
