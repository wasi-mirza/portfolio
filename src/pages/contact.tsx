// src/pages/Contact.tsx
export default function ContactPage() {
    return (
      <section className="min-h-screen bg-slate-50 dark:bg-slate-900 px-6 py-24 flex items-center justify-center">
        <div className="max-w-2xl w-full bg-white dark:bg-slate-800 p-10 rounded-2xl shadow-md">
          <h1 className="text-3xl md:text-4xl font-bold text-center text-gray-900 dark:text-white mb-8">
            Get in Touch
          </h1>
  
          <form className="space-y-6">
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">
                Your Name
              </label>
              <input
                type="text"
                placeholder="Enter your name"
                className="w-full px-4 py-3 rounded-lg bg-slate-100 dark:bg-slate-700 text-gray-800 dark:text-white border border-slate-300 dark:border-slate-600 focus:outline-none focus:ring-2 focus:ring-primary"
                required
              />
            </div>
  
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">
                Your Email
              </label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-3 rounded-lg bg-slate-100 dark:bg-slate-700 text-gray-800 dark:text-white border border-slate-300 dark:border-slate-600 focus:outline-none focus:ring-2 focus:ring-primary"
                required
              />
            </div>
  
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">
                Your Message
              </label>
              <textarea
                rows={5}
                placeholder="Write your message..."
                className="w-full px-4 py-3 rounded-lg bg-slate-100 dark:bg-slate-700 text-gray-800 dark:text-white border border-slate-300 dark:border-slate-600 focus:outline-none focus:ring-2 focus:ring-primary"
                required
              />
            </div>
  
            <div className="text-center">
              <button
                type="submit"
                className="px-6 py-3 bg-primary hover:bg-primary-hover text-white rounded-lg font-medium transition-all"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </section>
    );
  }
  