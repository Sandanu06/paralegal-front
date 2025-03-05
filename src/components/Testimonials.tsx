import React from 'react';
import { Quote } from 'lucide-react';

const Testimonials: React.FC = () => {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto">
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 text-center mb-8">
          What Our Users Say
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Testimonial Card 1 */}
          <div className="bg-gray-50 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
            <Quote className="h-6 w-6 text-gray-400 mb-4" />
            <p className="text-gray-600">
              "This software has transformed the way we manage cases. It's intuitive, efficient, and has significantly improved our productivity."
            </p>
            <p className="mt-4 font-medium text-gray-700">
              - Jane Smith, Paralegal
            </p>
          </div>

          {/* Testimonial Card 2 */}
          <div className="bg-gray-50 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
            <Quote className="h-6 w-6 text-gray-400 mb-4" />
            <p className="text-gray-600">
              "The deadline tracking feature alone has saved us countless hours. We highly recommend this tool to any paralegal team."
            </p>
            <p className="mt-4 font-medium text-gray-700">
              - Michael Johnson, Senior Paralegal
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
