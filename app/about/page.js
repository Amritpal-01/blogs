const teamMembers = [
  {
    id: 1,
    name: "John Doe",
    role: "Founder & Lead Developer",
    bio: "Passionate about web development and creating meaningful digital experiences.",
    image: "/placeholder.jpg"
  },
  {
    id: 2,
    name: "Jane Smith",
    role: "Content Strategist",
    bio: "Expert in content creation and digital marketing strategies.",
    image: "/placeholder.jpg"
  },
  {
    id: 3,
    name: "Mike Johnson",
    role: "Technical Writer",
    bio: "Specializing in making complex technical concepts accessible to everyone.",
    image: "/placeholder.jpg"
  }
]

export default function AboutPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-5 lg:px-8">
      {/* Hero Section */}
      <section className="text-center py-24 bg-gradient-to-b from-gray-50 to-white">
        <h1 className="text-5xl font-bold text-gray-900 mb-6">About BlogSpace</h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          We're on a mission to make knowledge sharing accessible to everyone
        </p>
      </section>

      {/* Mission Section */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-8">Our Mission</h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            At BlogSpace, we believe in the power of sharing knowledge and experiences. 
            Our platform is designed to be a space where writers, developers, and thinkers 
            can share their insights with the world. We're committed to creating a community 
            that fosters learning, growth, and meaningful discussions.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">Our Story</h2>
          <div className="space-y-6 text-lg text-gray-600">
            <p>
              BlogSpace was born from a simple idea: to create a platform where people 
              could share their knowledge and experiences in a meaningful way. What started 
              as a small project has grown into a vibrant community of writers, developers, 
              and thought leaders.
            </p>
            <p>
              Today, we're proud to host thousands of articles covering topics from web 
              development to artificial intelligence, from software engineering to cloud 
              computing. Our community continues to grow, and we're excited to see what 
              the future holds.
            </p>
          </div>
        </div>
      </section>

      {/* Team Section */}
      {/* <section className="py-16 bg-white">
        <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Meet Our Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {teamMembers.map((member) => (
            <div key={member.id} className="text-center">
              <div className="w-48 h-48 mx-auto mb-6 rounded-full overflow-hidden bg-gray-200">
                <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-300"></div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">{member.name}</h3>
              <p className="text-blue-600 font-medium mb-4">{member.role}</p>
              <p className="text-gray-600">{member.bio}</p>
            </div>
          ))}
        </div>
      </section> */}

      {/* Values Section */}
      <section className="py-16 bg-gray-50">
        <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Our Values</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Quality Content</h3>
            <p className="text-gray-600">
              We believe in maintaining high standards for all content published on our platform.
            </p>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Community First</h3>
            <p className="text-gray-600">
              Our community is at the heart of everything we do.
            </p>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Continuous Learning</h3>
            <p className="text-gray-600">
              We encourage and support continuous learning and growth.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
