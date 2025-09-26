import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Careers | SeaTechnologies',
  description: 'Join SeaTechnologies - Explore career opportunities and become part of our innovative team',
};

// Sample job openings data - replace with your actual job listings
const jobOpenings = [
{
  id: 1,
  title: '.NET Developer',
  department: 'Engineering',
  location: 'Onsite',
  type: 'Full-time',
  experience: '1.5 - 3 years',
  description: 'Work on building and maintaining .NET applications, ensuring high performance, scalability, and quality standards.',
  requirements: [
    'Hands-on experience with .NET Core / ASP.NET MVC',
    'Strong knowledge of C# and object-oriented programming',
    'Experience with REST APIs and database integration',
    'Ability to debug, test, and optimize applications'
  ]
},
{
  id: 2,
  title: 'SQL Developer',
  department: 'Engineering',
  location: 'Onsite',
  type: 'Full-time',
  experience: '1.5 - 3 years',
  description: 'Design, develop, and optimize SQL queries, procedures, and databases to support business-critical applications.',
  requirements: [
    'Proficiency in writing complex SQL queries and stored procedures',
    'Experience with relational database management systems (RDBMS)',
    'Strong understanding of data modeling and performance tuning',
    'Knowledge of ETL processes and reporting tools is a plus'
  ]
},
{
  id: 3,
  title: 'Business Development Executive (Evening Shift)',
  department: 'Sales',
  location: 'Onsite',
  type: 'Full-time',
  experience: '1 - 3 years',
  description: 'Engage with potential clients, identify new business opportunities, and contribute to revenue growth during evening shifts.',
  requirements: [
    'Proven experience in business development or sales',
    'Excellent communication and negotiation skills',
    'Ability to manage client relationships effectively',
    'Comfortable working in evening shifts and achieving targets'
  ]
},
{
  id: 4,
  title: 'Python Developer (AI/ML)',
  department: 'Engineering',
  location: 'Onsite',
  type: 'Full-time',
  experience: '1 - 2 years',
  description: 'Contribute to AI/ML projects by building, training, and deploying machine learning models using Python.',
  requirements: [
    'Hands-on experience with Python and ML libraries (NumPy, Pandas, Scikit-learn, TensorFlow, or PyTorch)',
    'Knowledge of data preprocessing, feature engineering, and model training',
    'Ability to work with large datasets and perform data analysis',
    'Strong problem-solving and algorithmic skills'
  ]
}

];

const benefits = [
  {
    title: 'Competitive Compensation',
    description: 'Market-competitive salaries with performance-based bonuses and equity options.',
    icon: '💰'
  },
  {
    title: 'Flexible Work Arrangements',
    description: 'Remote-first culture with flexible hours and work-life balance support.',
    icon: '🏠'
  },
  {
    title: 'Professional Development',
    description: 'Learning budget for courses, conferences, and certifications to advance your career.',
    icon: '📚'
  },
  {
    title: 'Health & Wellness',
    description: 'Comprehensive health insurance, mental health support, and wellness programs.',
    icon: '🏥'
  },
  {
    title: 'Innovation Time',
    description: '20% time for personal projects and exploring new technologies and ideas.',
    icon: '💡'
  },
  {
    title: 'Team Building',
    description: 'Regular team events, retreats, and collaborative activities to build strong relationships.',
    icon: '🤝'
  }
];

export default function CareersPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-blue-50 to-white py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Join SeaTechnologies
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed max-w-3xl">
            Be part of a team that's shaping the future of technology. We're looking for 
            passionate individuals who want to make a real impact while growing their careers 
            in an innovative environment.
          </p>
        </div>
      </div>

      {/* Why Work With Us Section */}
      <div className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Why Choose SeaTechnologies?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We believe in creating an environment where talent thrives and innovation flourishes
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center p-6 rounded-xl hover:bg-blue-50 transition-colors">
                <div className="text-4xl mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {benefit.title}
                </h3>
                <p className="text-gray-600">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Current Openings Section */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Current Openings
            </h2>
            <p className="text-xl text-gray-600">
              Explore opportunities to grow your career with us
            </p>
          </div>

          <div className="space-y-6">
            {jobOpenings.map((job) => (
              <div key={job.id} className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow p-8">
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between">
                  <div className="flex-1">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                      <h3 className="text-2xl font-bold text-gray-900 mb-2 sm:mb-0">
                        {job.title}
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                          {job.department}
                        </span>
                        <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium">
                          {job.type}
                        </span>
                      </div>
                    </div>

                    <div className="flex flex-wrap items-center text-gray-600 mb-4 space-x-6">
                      <div className="flex items-center">
                        <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        {job.location}
                      </div>
                      <div className="flex items-center">
                        <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        {job.experience}
                      </div>
                    </div>

                    <p className="text-gray-600 mb-4">
                      {job.description}
                    </p>

                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 mb-2">Key Requirements:</h4>
                      <ul className="list-disc list-inside space-y-1 text-gray-600">
                        {job.requirements.map((req, index) => (
                          <li key={index}>{req}</li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="lg:ml-8 lg:flex-shrink-0">
                    <a href="/contactus">
                    <button className="w-full cursor-pointer lg:w-auto bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors">
                      Apply Now
                    </button>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* No Current Openings Alternative */}
          <div className="text-center mt-12 p-8 bg-white rounded-xl shadow-md">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Don't See the Right Fit?
            </h3>
            <p className="text-gray-600 mb-6">
              We're always looking for talented individuals. Send us your resume and let us know 
              how you'd like to contribute to SeaTechnologies.
            </p>
            <a href="/contactus">
            <button className="bg-blue-600 cursor-pointer hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors">
              Submit General Application
            </button>
            </a>
          </div>
        </div>
      </div>

      {/* Company Culture Section */}
      <div className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Our Culture
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              At SeaTechnologies, we foster an environment of collaboration, innovation, and continuous learning
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                What Makes Us Different
              </h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="ml-4">
                    <h4 className="font-medium text-gray-900">Innovation-First Mindset</h4>
                    <p className="text-gray-600">We encourage experimentation and creative problem-solving at every level.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="ml-4">
                    <h4 className="font-medium text-gray-900">Work-Life Balance</h4>
                    <p className="text-gray-600">We believe productivity comes from well-rested, motivated team members.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="ml-4">
                    <h4 className="font-medium text-gray-900">Continuous Learning</h4>
                    <p className="text-gray-600">Dedicated budget and time for professional development and skill growth.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8">
              <div className="text-center">
                <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <svg className="w-10 h-10 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Join Our Growing Team
                </h3>
                <p className="text-gray-600 mb-6">
                  Be part of a diverse, talented group of professionals who are passionate about making a difference.
                </p>
                <div className="text-3xl font-bold text-blue-600">50+</div>
                <div className="text-gray-600">Team Members & Growing</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Application Process Section */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Our Hiring Process
            </h2>
            <p className="text-xl text-gray-600">
              A transparent and efficient process designed to find the right mutual fit
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold">1</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Application</h3>
              <p className="text-sm text-gray-600">Submit your resume and cover letter</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold">2</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Screening</h3>
              <p className="text-sm text-gray-600">Initial phone or video call</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold">3</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Interview</h3>
              <p className="text-sm text-gray-600">Technical and cultural fit assessment</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold">4</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Offer</h3>
              <p className="text-sm text-gray-600">Welcome to the team!</p>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Ready to Start Your Journey?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Take the next step in your career and join our innovative team at SeaTechnologies.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/contactus" 
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium transition-colors"
            >
              Apply Now
            </a>
            <a 
              href="/contactus" 
              className="border border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-3 rounded-lg font-medium transition-colors"
            >
              Have Questions?
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
