import React from 'react';
import NavMenu from './NavMeniu';
import '../CSS/Header.css' 

const Header = () => {
  return (
    <header className="header-container">
      <div className="logo">Logo</div>
      <NavMenu />
    </header>
  );
};

export default Header;


