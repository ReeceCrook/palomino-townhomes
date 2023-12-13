import React from "react";
import { NavLink } from "react-router-dom";
import mbLogo from '../assets/mainPics/MB-logo.png';
import jim from '../assets/mainPics/jim.jpg'

function BottomNavBar() {
    return (
        <div className="footerWrapper">
            <div className="jimContactInfoContainer">
                <img src={jim} alt="Jim Stiltner" className="jimContactPhoto" />
                <h4 className="contactH4" >
                    <a href="tel:+1-719-964-3526" className="contactATag">719-964-3526</a>
                    <a href="mailto:jim@masterbilt.com" className="contactATag">jim@masterbilt.com</a>  
                </h4>
            </div>
            <div className="bottomNavDiv">
                <NavLink
                    to="/"
                    exact="true"
                    className="bottomNavLinks"
                >
                    Home
                </NavLink>
                <NavLink
                    to="/floorPlans"
                    exact="true"
                    className="bottomNavLinks"
                >
                    Floor Plans
                </NavLink>
                <NavLink
                    to="/inventory"
                    exact="true"
                    className="bottomNavLinks"
                >
                    Inventory
                </NavLink>

                <img src={mbLogo} alt='MB-Logo' className='mbLogo' />

                <NavLink
                    to="/hoaDocs"
                    exact="true"
                    className="bottomNavLinksRight"
                >
                    HOA Docs
                </NavLink>
                <NavLink
                    to="/aboutUs"
                    exact="true"
                    className="bottomNavLinksRight"
                >
                    About Us
                </NavLink>
                <NavLink
                    to="/contact"
                    exact="true"
                    className="bottomNavLinksRight"
                >
                    Contact
                </NavLink>
            </div>   
        </div>
    );
}

export default BottomNavBar