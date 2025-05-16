"use client"
import FullWidthBlog from '../components/FullWidthBlog'
import FeaturedBlogs from '../components/FeaturedBlogs'

export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-[#5f5f5f] to-[#3c3c3c] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">
              Share Your Knowledge,<br />
              <span className="text-blue-200">Inspire Others</span>
            </h1>
            <p className="text-xl text-blue-100 mb-8">
              Join our community of writers and developers. Share your insights, learn from others, and grow together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="/blogs"
                className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-lg text-blue-700 bg-white hover:bg-blue-50 transition-colors duration-200"
              >
                Explore Blogs
              </a>
              <a
                href="/contact"
                className="inline-flex items-center justify-center px-6 py-3 border border-white text-base font-medium rounded-lg text-white hover:bg-blue-700 transition-colors duration-200"
              >
                Start Writing
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Blog Post */}
      <FullWidthBlog />

      {/* Featured Blogs Section */}
      <FeaturedBlogs />

      {/* Newsletter Section */}
      {/* <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Stay Updated with Our Latest Articles
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Subscribe to our newsletter and never miss out on new content, updates, and exclusive offers.
            </p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <button
                type="submit"
                className="px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors duration-200"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section> */}

      {/* Categories Section
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Explore by Category
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: 'Technology', count: 24, color: 'bg-blue-100 text-blue-800' },
              { name: 'Web Development', count: 18, color: 'bg-green-100 text-green-800' },
              { name: 'Artificial Intelligence', count: 12, color: 'bg-purple-100 text-purple-800' },
              { name: 'Design', count: 15, color: 'bg-pink-100 text-pink-800' },
            ].map((category) => (
              <a
                key={category.name}
                href={`/blogs?category=${category.name.toLowerCase().replace(' ', '-')}`}
                className="group block p-6 rounded-xl bg-white shadow-sm hover:shadow-md transition-shadow duration-200"
              >
                <div className={`inline-block p-3 rounded-lg ${category.color} mb-4`}>
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-200">
                  {category.name}
                </h3>
                <p className="text-gray-600">
                  {category.count} articles
                </p>
              </a>
            ))}
          </div>
        </div>
      </section> */}
    </main>
  )
}
