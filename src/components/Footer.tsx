import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-white border-t">
      <div className="container mx-auto px-4 py-6">
        <div className="text-center text-sm text-gray-600">
          <p>
            © 2024{' '}
            <a 
              href="https://lyvena.xyz/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              Lyvena.
            </a>{' '}
            All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;