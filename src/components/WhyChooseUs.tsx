import React from 'react';

const WhyChooseUs: React.FC = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 font-serif">Why Choose Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Card 1 */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2 font-sans">Streamline Your Workflow</h3>
              <p className="text-gray-700 font-sans">
                Our software reduces administrative tasks, freeing you to focus on your cases.
              </p>
            </div>
            <div className="px-6 py-4 bg-gray-100 border-t border-gray-200">
              <span className="text-sm text-gray-500">Efficiency Guaranteed</span>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2 font-sans">Secure and Reliable</h3>
              <p className="text-gray-700 font-sans">
                Latest encryption technology ensures your case information is safe and secure.
              </p>
            </div>
            <div className="px-6 py-4 bg-gray-100 border-t border-gray-200">
              <span className="text-sm text-gray-500">Data Protection</span>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2 font-sans">Dedicated Support</h3>
              <p className="text-gray-700 font-sans">
                Our support team is here to help you every step of the way.
              </p>
            </div>
            <div className="px-6 py-4 bg-gray-100 border-t border-gray-200">
              <span className="text-sm text-gray-500">24/7 Assistance</span>
            </div>
          </div>

          {/* Card 4 */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2 font-sans">Affordable Pricing</h3>
              <p className="text-gray-700 font-sans">
                Flexible and affordable pricing plans to fit your budget.
              </p>
            </div>
            <div className="px-6 py-4 bg-gray-100 border-t border-gray-200">
              <span className="text-sm text-gray-500">Value for Money</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
