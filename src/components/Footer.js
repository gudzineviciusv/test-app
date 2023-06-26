import React from 'react';
import Search from '../components/Search';

const Footer = () => {
  return (
    <footer>
       <Search />
      <p>&copy; {new Date().getFullYear()} All rights reserved Sun-Noir 2023.</p>
    </footer>
  );
};

export default Footer;


