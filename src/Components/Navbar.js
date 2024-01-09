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
            {/* <NavLink
                to="/contact"
                exact="true"
                className="navLinksRight"
            >
                Contact
            </NavLink> */}
        </div>
    );
}


export default NavBar