import React, { useEffect, useState } from 'react';
import * as Lucide from 'lucide-react';

const Hero: React.FC = () => {
  const [LawIcon, setLawIcon] = useState<React.FC<Lucide.LucideProps> | null>(null);

  useEffect(() => {
    import('lucide-react')
      .then((lucide) => {
        if (lucide && lucide.Law) {
          setLawIcon(() => lucide.Law);
        } else {
          console.error('Law icon not found in lucide-react');
        }
      })
      .catch((error) => {
        console.error('Failed to load lucide-react', error);
      });
  }, []);

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto text-center">
        {LawIcon && <LawIcon className="mx-auto h-16 w-16 text-blue-500" />}
        <h1 className="text-4xl md:text-5xl font-bold mb-6 font-serif">
          Revolutionize Your Paralegal Case Management
        </h1>
        <p className="text-xl text-gray-700 mb-8 font-sans">
          Empowering paralegals with intuitive and efficient case management tools.
        </p>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full glowing-button">
          Explore Features
        </button>
      </div>
    </section>
  );
};

export default Hero;
