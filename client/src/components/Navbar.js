import React from "react";
import "./style/navbar.css";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav>
        <div className="heroNav">
          <section className="navigaitons">
            {/* main page navigation home about and contact  */}
            <ul className="navbar-nav">
              
              <li className="nav-item">
                <NavLink className="nav-link" to="/">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/about">
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/contact">
                  Contact
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/products">
                  Products
                </NavLink>
              </li>
            </ul>
          </section>

          {/* logo section which includes the logo  */}
          <section className="logo">
            <h1>LOGO</h1>
          </section>

          {/* navigation to individual product page */}
          <section className="productNavigation">
            <ul className="navbar-nav">
              
              <li className="nav-item">
                <NavLink className="nav-link" to="/rings">
                  RINGS
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/bracelets">
                  BRACELETS
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/earrings">
                  EARRINGS
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/necklaces">
                  NECKLACES
                </NavLink>
              </li>
            </ul>
          </section>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
