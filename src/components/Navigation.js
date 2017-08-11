import React from 'react';
import { NavLink } from 'react-router-dom';

import './Navigation.css';

const Navigation = () =>
  <nav className="Navigation">
    <NavLink className="Navigation-link" exact to="/">Start</NavLink>
    <NavLink className="Navigation-link" to="/tjanster">Tjänster</NavLink>
    <NavLink className="Navigation-link" to="/kontakt">Kontakt</NavLink>
    <NavLink className="Navigation-link" to="/blogg">Blogg</NavLink>
    <NavLink className="Navigation-link" to="/recept">Recept</NavLink>
    <NavLink className="Navigation-link" to="/om-mig">Om mig</NavLink>
  </nav>

export default Navigation;
