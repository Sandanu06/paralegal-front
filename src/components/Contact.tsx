import React from 'react';
import { Mail, Phone } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section className="py-12 bg-gray-100">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-semibold text-gray-800 mb-8">
          Contact Us
        </h2>
        <p className="text-gray-500 mb-4">
          Have questions? Reach out to our team for more information.
        </p>
        <div className="flex items-center justify-center space-x-4">
          <div className="flex items-center">
            <Mail className="h-5 w-5 text-indigo-600 mr-2" />
            <a href="mailto:info@example.com" className="text-indigo-600 hover:underline">
              info@example.com
            </a>
          </div>
          <div className="flex items-center">
            <Phone className="h-5 w-5 text-indigo-600 mr-2" />
            <a href="tel:+15551234567" className="text-indigo-600 hover:underline">
              +1 (555) 123-4567
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
