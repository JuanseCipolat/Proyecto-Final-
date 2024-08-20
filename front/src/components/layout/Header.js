import React from 'react';
import '../../styles/components/layout/Header.css';

const Header = (props) => {
  return (
    <header>
      <div className="holder">
        <img src="images/logo.jpg" width="100" alt="Frecuencia Gamer" />
        <h1>Frecuencia Gamer</h1>
      </div>
    </header>
  );
};

export default Header;
