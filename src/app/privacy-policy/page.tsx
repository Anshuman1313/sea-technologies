import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy | SEA Technologies',
  description: 'Privacy Policy for SEA Technologies - Learn how we collect, use, and protect your personal information',
};

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-blue-50 to-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Privacy Policy
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Effective Date: September 23, 2025
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="prose prose-lg max-w-none">
          
          {/* Overview Section */}
          <section className="mb-12">
            <h2 className="text-3xl font-semibold text-gray-900 mb-6 border-b-2 border-blue-100 pb-2 ">
              Overview
            </h2>
            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg mb-6">
              <p className="text-gray-700 leading-relaxed">
                At <strong>SEA Technologies (ST)</strong>, we are deeply committed to safeguarding the privacy and personal data of our users. This Privacy Policy outlines our approach to collecting, using, and securing the personal information of website visitors. By continuing to use our website, you consent to the practices described in this policy.
              </p>
            </div>
            <p className="text-gray-600 leading-relaxed">
              The personal data we collect may include, but is not limited to, names, email addresses, phone numbers, and other identifying details. This information may be used for business purposes, always in accordance with applicable privacy laws and with your consent.
            </p>
          </section>

          {/* Information Collection Section */}
          <section className="mb-12">
            <h2 className="text-3xl font-semibold text-gray-900 mb-6 border-b-2 border-blue-100 pb-2">
              Information Collection and Usage
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              To enhance your experience and provide better services, we collect certain types of data when you interact with our website. This includes:
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                <h3 className="font-semibold text-gray-900 mb-4 flex items-center">
                  <svg className="w-5 h-5 text-blue-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Technical Data
                </h3>
                <ul className="text-gray-600 space-y-2">
                  <li>• Internet protocol (IP) addresses</li>
                  <li>• Browser type and version</li>
                  <li>• Pages visited on our site</li>
                  <li>• Date, time, and duration of visits</li>
                </ul>
              </div>
              
              <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                <h3 className="font-semibold text-gray-900 mb-4 flex items-center">
                  <svg className="w-5 h-5 text-blue-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
                  </svg>
                  Interaction Data
                </h3>
                <ul className="text-gray-600 space-y-2">
                  <li>• Form submissions</li>
                  <li>• Chatbot usage</li>
                  <li>• Blog comments</li>
                  <li>• User preferences</li>
                </ul>
              </div>
            </div>

            <p className="text-gray-600 leading-relaxed">
              This information helps us improve website functionality, troubleshoot issues, analyze user behavior, and understand which areas of our site are most frequented. Our goal is to provide an optimized, user-centric experience.
            </p>
          </section>

          {/* Information Security Section */}
          <section className="mb-12">
            <h2 className="text-3xl font-semibold text-gray-900 mb-6 border-b-2 border-blue-100 pb-2">
              Information Security
            </h2>
            <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-6">
              <div className="flex items-start">
                <svg className="w-6 h-6 text-green-600 mt-1 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
                <div>
                  <h3 className="font-semibold text-green-900 mb-2">Your Privacy is Protected</h3>
                  <p className="text-green-800">
                    Protecting your personal information is a top priority at SEA Technologies (ST). We have implemented strict administrative, technical, and physical safeguards to ensure the security of your data.
                  </p>
                </div>
              </div>
            </div>
            
            <p className="text-gray-600 leading-relaxed mb-4">
              Your personal information will never be shared with third parties without your explicit consent, except where required by law.
            </p>
            
            <p className="text-gray-600 leading-relaxed">
              Occasionally, we may use third-party tools or plugins to improve functionality. While these tools operate under their own privacy policies, we encourage you to review their terms to understand how your data might be processed.
            </p>
          </section>

          {/* Cookies Section */}
          <section className="mb-12">
            <h2 className="text-3xl font-semibold text-gray-900 mb-6 border-b-2 border-blue-100 pb-2">
              Use of Cookies
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Cookies are small text files stored on your device to improve your browsing experience. These files help us recognize returning users and collect data such as:
            </p>

            <div className="bg-gray-50 rounded-lg p-6 mb-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="text-center">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-2">
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h4 className="font-medium text-gray-900">IP Addresses</h4>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-2">
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <h4 className="font-medium text-gray-900">Browser Information</h4>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-2">
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h4 className="font-medium text-gray-900">User Behavior</h4>
                </div>
              </div>
            </div>

            <p className="text-gray-600 leading-relaxed mb-4">
              Cookies allow us to analyze how users interact with our site, track preferences, and deliver a more personalized experience. For example:
            </p>

            <div className="border-l-4 border-blue-500 bg-blue-50 p-4 rounded-r-lg">
              <h4 className="font-semibold text-blue-900 mb-2">Session Cookies</h4>
              <p className="text-blue-800">
                Temporary cookies that help users navigate the website seamlessly during an active session. These are deleted once the session ends.
              </p>
            </div>

            <p className="text-gray-600 leading-relaxed mt-4">
              You can manage your cookie preferences in your browser settings. However, disabling cookies may affect certain functionalities of the site.
            </p>
          </section>

          {/* Policy Updates Section */}
          <section className="mb-12">
            <h2 className="text-3xl font-semibent text-gray-900 mb-6 border-b-2 border-blue-100 pb-2">
              Policy Updates
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              This Privacy Policy is effective as of its stated date and will remain so unless modified. We reserve the right to make changes to this policy at any time. Updates will be posted on this page, and we encourage you to review the policy periodically.
            </p>
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
              <p className="text-yellow-800">
                <strong>Important:</strong> Continued use of the website after any changes indicates your acceptance of the updated policy.
              </p>
            </div>
          </section>

          {/* Contact Information */}
          <section className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-lg p-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Questions or Concerns?
            </h2>
            <p className="text-gray-600 mb-6">
              For questions or concerns regarding this Privacy Policy, feel free to contact us.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="mailto:info@seatechnologies.in" 
                className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                info@seatechnologies.in
              </a>
              <a 
                href="/contactus" 
                className="inline-flex items-center px-6 py-3 border border-blue-600 text-blue-600 hover:bg-blue-50 rounded-lg font-medium transition-colors"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
                Contact Us
              </a>
            </div>
          </section>

        </div>
      </div>
    </div>
  );
}
