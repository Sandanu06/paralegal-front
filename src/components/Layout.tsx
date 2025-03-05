import React from 'react';
import Navbar from './Navbar';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Navbar />
      <div className="container mx-auto px-4 py-8 mt-16">
        {children}
      </div>
    </>
  );
};

export default Layout;
