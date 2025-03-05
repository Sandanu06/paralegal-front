import React from 'react';
import Hero from './components/Hero';
import Features from './components/Features';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Layout from './components/Layout';
import WhyChooseUs from './components/WhyChooseUs';

function App() {
  return (
    <Layout>
      <Hero />
      <Features />
      <WhyChooseUs />
      <Testimonials />
      <Contact />
    </Layout>
  );
}

export default App;
