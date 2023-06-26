import React from 'react';
import { Link } from 'react-router-dom';
import '../CSS/NavMeniu.css';

const NavMenu = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/classes">Classes</Link>
          <ul>
            <li>
              <Link to="/basic-classes">Basic Classes</Link>
            </li>
            <li>
              <Link to="/advanced-classes">Advanced Classes</Link>
            </li>
            <li>
              <Link to="/master-classes">Master Classes</Link>
            </li>
          </ul>
        </li>
        <li>
          <Link to="/elements">Elements</Link>
          <ul>
            <li>
              <Link to="/core-elements">Core Elements</Link>
            </li>
            <li>
              <Link to="/prime-elements">Prime Elements</Link>
            </li>
          </ul>
        </li>
        <li>
          <Link to="/magic">Magic</Link>
          <ul>
            <li>
              <Link to="/pure-magic">Pure Magic</Link>
            </li>
            <li>
              <Link to="/mixed-magic">Mixed Magic</Link>
            </li>
            <li>
              <Link to="/magic-builder">Magic Builder</Link>
            </li>
          </ul>
        </li>
        <li>
          <Link to="/reviews">Reviews</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavMenu;
