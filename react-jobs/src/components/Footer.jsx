import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-4">
      <div className="container mx-auto flex justify-between items-center">
        <p className="text-sm">© 2024 Interntwine. <br/>All rights reserved.</p>
        <div>
          <a href="#" className="text-sm mr-4">Privacy Policy</a>
          <a href="#" className="text-sm">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
