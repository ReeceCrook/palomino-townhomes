import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
    return (
        <div>
            <NavLink
                to="/"
                exact="true"
                className="navLinks"
            >
                Home
            </NavLink>
            {/* <NavLink
                to="/floorPlans"
                exact="true"
                className="navLinks"
            >
                Floor Plans
            </NavLink> */}
            <NavLink
                to="/inventory"
                exact="true"
                className="navLinks"
            >
                Inventory
            </NavLink>
            <NavLink
                to="/hoaDocs"
                exact="true"
                className="navLinksRight"
            >
                HOA Docs
            </NavLink>
            <NavLink
                to="/aboutUs"
                exact="true"
                className="navLinksRight"
            >
                About Us
            </NavLink>
            {/* { <NavLink
                to="/demo"
                exact="true"
                className="navLinksRight"
            >
                Demo
            </NavLink>} */}
        </div>
    );
}


export default NavBar