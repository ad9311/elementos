import { NavLink } from 'react-router-dom';
import React from 'react';

const Navbar = () => (
  <nav>
    <NavLink exact to="/">Back</NavLink>
    <h4>Elementos</h4>
  </nav>
);

export default Navbar;
