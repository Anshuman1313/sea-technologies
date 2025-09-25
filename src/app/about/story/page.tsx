import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Our Story | Sea Technologies',
  description: 'Learn about Sea Technologies – from our beginnings in 2010 with Dot Net, to expanding across mobile, Flutter, Angular, and beyond.',
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
            Building meaningful solutions through technology since 2010
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="prose prose-lg max-w-none">
          {/* Company Origins */}
          <div className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Our Beginning – 2010
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Sea Technologies was founded in 2010 in Mohali, Punjab, by five passionate individuals
              with a dream to build something meaningful through technology. At that time, our
              expertise revolved around a single technology: <strong>Dot Net</strong>. With dedication
              and determination, we laid the foundation of a trusted technology partner for businesses.
            </p>
          </div>

          {/* Expanding Horizons */}
          <div className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Expanding Horizons – 2010 to 2015
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Over the next five years, we expanded our capabilities, adding <strong>Mobile Applications</strong>,
              <strong> Flutter</strong>, <strong>Angular</strong>, and other front-end technologies. 
              This diversification allowed us to meet a broader range of client needs while 
              maintaining our commitment to quality and innovation.
            </p>
          </div>

          {/* Leadership & Growth */}
          <div className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Leadership & Growth – 2017
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              In 2017, we welcomed our Chief Technology Officer (CTO), whose expertise and vision 
              helped transform our team from 5 to 20 dedicated professionals. With her guidance, 
              Sea Technologies took significant strides toward becoming a larger, more capable 
              organization.
            </p>
          </div>

          {/* Evolving with Technology */}
          <div className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Evolving with Technology – 2021 to Present
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              From 2021 onward, we have embraced evolving technologies and continue to strengthen 
              our expertise to meet modern business challenges. Today, Sea Technologies stands as a 
              trusted partner, delivering solutions that combine innovation, scalability, and 
              reliability for clients across industries.
            </p>
          </div>

          {/* Team Philosophy */}
          <div className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Our Team
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Behind every milestone is our growing team of passionate professionals. 
              We foster a culture of continuous learning, collaboration, and innovation, 
              ensuring that every project reflects our commitment to excellence.
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
                href="/contactus" 
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
