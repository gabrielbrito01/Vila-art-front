// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Certifique-se de que este arquivo existe

const Navbar = () => {
  return (
    <nav className="navbar">
      <h2>Vila de Artesanato</h2>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/info">Informações</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
