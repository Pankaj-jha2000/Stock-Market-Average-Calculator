import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/">Stock Market Calculator</Link>
      <Link to="/percentage">Percentage Calculator</Link>
      <Link to="/emi">EMI Calculator</Link>
    </nav>
  );
};

export default Navbar;
