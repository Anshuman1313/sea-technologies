
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Our Story | Your Company',
  description: 'Who we are & our journey - Learn about our company story and mission',
};

export default function StoryPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-blue-50 to-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our Story
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Who we are & our journey
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="prose prose-lg max-w-none">
          {/* Company Origins */}
          <div className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              How It All Started
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Founded in 2020, our company began with a simple yet powerful vision: to revolutionize 
              the way businesses leverage technology to solve complex challenges. What started as a 
              small team of passionate engineers has grown into a trusted partner for organizations 
              across various industries.
            </p>
          </div>

          {/* Mission & Values */}
          <div className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Our Mission
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              We believe that innovative technology should be accessible and transformative. Our 
              mission is to bridge the gap between cutting-edge solutions and real-world applications, 
              helping businesses thrive in an increasingly digital landscape.
            </p>
            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r">
              <p className="text-blue-800 font-medium italic">
                "Excellence through innovation, trust through transparency, and growth through collaboration."
              </p>
            </div>
          </div>

          {/* Journey & Milestones */}
          <div className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Our Journey
            </h2>
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <span className="text-blue-600 font-semibold">2020</span>
                </div>
                <div className="ml-4">
                  <h3 className="font-medium text-gray-900">Company Founded</h3>
                  <p className="text-gray-600">Started with a team of 5 dedicated professionals</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <span className="text-blue-600 font-semibold">2022</span>
                </div>
                <div className="ml-4">
                  <h3 className="font-medium text-gray-900">Major Expansion</h3>
                  <p className="text-gray-600">Reached 50+ clients and expanded our service offerings</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <span className="text-blue-600 font-semibold">2025</span>
                </div>
                <div className="ml-4">
                  <h3 className="font-medium text-gray-900">Present Day</h3>
                  <p className="text-gray-600">Leading innovation with 200+ successful projects</p>
                </div>
              </div>
            </div>
          </div>

          {/* Team Philosophy */}
          <div className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Our Team
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Behind every successful project is our dedicated team of experts who bring diverse 
              backgrounds, innovative thinking, and unwavering commitment to excellence. We foster 
              a culture of continuous learning, collaboration, and creative problem-solving.
            </p>
          </div>

          {/* Call to Action */}
          <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-lg p-8 text-center">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Ready to Be Part of Our Story?
            </h3>
            <p className="text-gray-600 mb-6">
              Whether you're looking to collaborate, join our team, or learn more about our services, 
              we'd love to hear from you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/contactus" 
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
              >
                Get In Touch
              </a>
              <a 
                href="/about" 
                className="border border-blue-600 text-blue-600 hover:bg-blue-50 px-6 py-3 rounded-lg font-medium transition-colors"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
