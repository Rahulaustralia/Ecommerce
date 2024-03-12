import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import "../Style/Navbar.css";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <AppBar style={{ position: "static" }}>
        <Toolbar>
          <NavLink to="/" className="rp1-ty">
            E-Comm
          </NavLink>
          <NavLink to="/all" className="rp1-ty">
            All Product
          </NavLink>
          <NavLink to="/add" className="rp1-ty">
            Add Product
          </NavLink>
          <div className="rp-right-nav">
            <NavLink to="/cart" className="rp1-ty">
              Cart
            </NavLink>
            <NavLink to="/login" className="rp1-ty">
              Login
            </NavLink>
          </div>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Navbar;
