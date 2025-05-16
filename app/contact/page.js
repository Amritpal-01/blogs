'use client'

import { useForm } from 'react-hook-form'

export default function ContactPage() {
  const { register, handleSubmit, formState: { errors } } = useForm()

  const onSubmit = (data) => {
    console.log(data)
    // Here you can add your form submission logic
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-5 lg:px-8">
      {/* Hero Section */}
      <section className="text-center py-24 bg-gradient-to-b from-gray-50 to-white">
        <h1 className="text-5xl font-bold text-gray-900 mb-6">Contact Us</h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Have questions? We&apos;d love to hear from you.
        </p>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 bg-white">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
          <div className="pr-8">
            <h2 className="text-4xl font-bold text-gray-900 mb-8">Get in Touch</h2>
            <p className="text-lg text-gray-600 mb-8">
              Whether you have a question about our platform, want to collaborate, 
              or just want to say hello, we&apos;re here to help.
            </p>
            <div className="space-y-8">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Email</h3>
                <p className="text-gray-600">amritpalonly13571@gmail.com</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Location</h3>
                <p className="text-gray-600">Amritsar, punjab</p>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="bg-white p-8 rounded-xl shadow-lg">
            <div className="mb-6">
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                Name
              </label>
              <input
                id="name"
                type="text"
                {...register('name', { required: 'Name is required' })}
                className={`w-full px-4 py-3 rounded-lg border ${
                  errors.name ? 'border-red-500' : 'border-gray-300'
                } focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
              />
              {errors.name && (
                <span className="text-sm text-red-500 mt-1">{errors.name.message}</span>
              )}
            </div>

            <div className="mb-6">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                Email
              </label>
              <input
                id="email"
                type="email"
                {...register('email', { 
                  required: 'Email is required',
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: 'Invalid email address'
                  }
                })}
                className={`w-full px-4 py-3 rounded-lg border ${
                  errors.email ? 'border-red-500' : 'border-gray-300'
                } focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
              />
              {errors.email && (
                <span className="text-sm text-red-500 mt-1">{errors.email.message}</span>
              )}
            </div>

            <div className="mb-6">
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                Message
              </label>
              <textarea
                id="message"
                rows="5"
                {...register('message', { required: 'Message is required' })}
                className={`w-full px-4 py-3 rounded-lg border ${
                  errors.message ? 'border-red-500' : 'border-gray-300'
                } focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
              />
              {errors.message && (
                <span className="text-sm text-red-500 mt-1">{errors.message.message}</span>
              )}
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-medium hover:bg-blue-700 transition-colors duration-200"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>

      {/* Join Community Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-8">Join Our Community</h2>
          <p className="text-lg text-gray-600 mb-8">
            Be part of our growing community of writers, developers, and thinkers. 
            Share your knowledge, learn from others, and grow together.
          </p>
          
          <form onSubmit={handleSubmit(onSubmit)} className="bg-white p-8 rounded-xl shadow-lg">
            <div className="mb-6">
              <label htmlFor="communityName" className="block text-sm font-medium text-gray-700 mb-2">
                Name
              </label>
              <input
                id="communityName"
                type="text"
                {...register('communityName', { required: 'Name is required' })}
                className={`w-full px-4 py-3 rounded-lg border ${
                  errors.communityName ? 'border-red-500' : 'border-gray-300'
                } focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
              />
              {errors.communityName && (
                <span className="text-sm text-red-500 mt-1">{errors.communityName.message}</span>
              )}
            </div>

            <div className="mb-6">
              <label htmlFor="communityEmail" className="block text-sm font-medium text-gray-700 mb-2">
                Email
              </label>
              <input
                id="communityEmail"
                type="email"
                {...register('communityEmail', { 
                  required: 'Email is required',
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: 'Invalid email address'
                  }
                })}
                className={`w-full px-4 py-3 rounded-lg border ${
                  errors.communityEmail ? 'border-red-500' : 'border-gray-300'
                } focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
              />
              {errors.communityEmail && (
                <span className="text-sm text-red-500 mt-1">{errors.communityEmail.message}</span>
              )}
            </div>

            <div className="mb-6">
              <label htmlFor="communityDescription" className="block text-sm font-medium text-gray-700 mb-2">
                Tell us about yourself
              </label>
              <textarea
                id="communityDescription"
                rows="4"
                {...register('communityDescription', { required: 'Description is required' })}
                className={`w-full px-4 py-3 rounded-lg border ${
                  errors.communityDescription ? 'border-red-500' : 'border-gray-300'
                } focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
                placeholder="What interests you about our community? What would you like to contribute?"
              />
              {errors.communityDescription && (
                <span className="text-sm text-red-500 mt-1">{errors.communityDescription.message}</span>
              )}
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-medium hover:bg-blue-700 transition-colors duration-200"
            >
              Join Community
            </button>
          </form>
        </div>
      </section>
    </div>
  )
}
