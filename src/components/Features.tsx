import React from 'react';

const Features: React.FC = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 font-serif">Key Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Feature Card 1 */}
          <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
            <h3 className="text-xl font-bold mb-4 font-sans">Case Tracking</h3>
            <p className="text-gray-700 font-sans">
              Easily track and manage all your cases in one centralized location. Stay updated on deadlines, court dates, and important milestones.
            </p>
          </div>

          {/* Feature Card 2 */}
          <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
            <h3 className="text-xl font-bold mb-4 font-sans">Document Management</h3>
            <p className="text-gray-700 font-sans">
              Securely store and organize all case-related documents. Access files from anywhere and ensure version control.
            </p>
          </div>

          {/* Feature Card 3 */}
          <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
            <h3 className="text-xl font-bold mb-4 font-sans">Task Management</h3>
            <p className="text-gray-700 font-sans">
              Assign tasks, set deadlines, and monitor progress. Ensure that all team members are on the same page.
            </p>
          </div>

          {/* Feature Card 4 */}
          <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
            <h3 className="text-xl font-bold mb-4 font-sans">Client Communication</h3>
            <p className="text-gray-700 font-sans">
              Communicate with clients directly through the platform. Keep clients informed and engaged with automated updates.
            </p>
          </div>

          {/* Feature Card 5 */}
          <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
            <h3 className="text-xl font-bold mb-4 font-sans">Reporting &amp; Analytics</h3>
            <p className="text-gray-700 font-sans">
              Generate reports and gain insights into your case management process. Make data-driven decisions to improve efficiency.
            </p>
          </div>

          {/* Feature Card 6 */}
          <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
            <h3 className="text-xl font-bold mb-4 font-sans">Mobile Access</h3>
            <p className="text-gray-700 font-sans">
              Access your case information from anywhere with our mobile app. Stay connected and productive on the go.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
