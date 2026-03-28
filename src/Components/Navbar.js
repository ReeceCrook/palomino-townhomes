import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import '../css/Navbar.css';
import homeIcon from '../assets/Icons/home.png';
import floorPlansIcon from '../assets/Icons/blueprint.png'
import directionsIcon from "../assets/Icons/direction.png";
import communityInfoIcon from "../assets/Icons/info.png";
import contactUsIcon from '../assets/Icons/About-Us.png';
import facebookLogo from "../assets/Icons/play.png";

function NavBar() {
    const location = useLocation();
    const home = location.pathname === '/';
    const floorPlans = location.pathname === '/floor-plans';
    const directions = location.pathname === '/directions';
    const contactUs = location.pathname === '/contact-us';

    const navClass = ({ isActive }) => isActive ? 'active' : undefined;

    return (
        <nav className={`tabs ${home ? 'homeTabs' : (floorPlans || contactUs || directions) ? 'navTabs' : 'whiteBGNav'}`}>
            <NavLink to="/" className={navClass}>
                <figure className="iconsWrapper">
                    <button type="button" className="iconButtons">
                        <img src={homeIcon} alt="townhome icon" className="icons" />
                        <figcaption>Home</figcaption>
                    </button>
                </figure>
            </NavLink>
            <NavLink to="/floor-plans" className={navClass}>
                <figure className="iconsWrapper">
                    <button type="button" className="iconButtons">
                        <img src={floorPlansIcon} alt="TownHomes Floor Plan icon" className="icons" />
                        <figcaption>Floor Plans</figcaption>
                    </button>
                </figure>
            </NavLink>
            <NavLink to="/directions" className={navClass}>
                <figure className="iconsWrapper">
                    <button type="button" className="iconButtons">
                        <img src={directionsIcon} alt="Townhomes Directions icon" className="icons" />
                        <figcaption>Directions</figcaption>
                    </button>
                </figure>
            </NavLink>
            <NavLink to="/community-info" className={navClass}>
                <figure className="iconsWrapper">
                    <button type="button" className="iconButtons">
                        <img src={communityInfoIcon} alt="townhomes Community Info icon" className="icons" />
                        <figcaption>Community Info</figcaption>
                    </button>
                </figure>
            </NavLink>
            <NavLink to="/contact-us" className={navClass}>
                <figure className="iconsWrapper">
                    <button type="button" className="iconButtons">
                        <img src={contactUsIcon} alt="Masterbilt Contact Us icon" className="icons" />
                        <figcaption>About Us</figcaption>
                    </button>
                </figure>
            </NavLink>

            <a
                href='https://www.facebook.com/reel/370942789140592'
                target='_blank'
                rel="noopener noreferrer"
                className="facebookButtonNav"
            >
                <figure className="iconsWrapper facebookNavWrapper">
                    <button type="button" className="iconButtons facebookIcon">
                        <img src={facebookLogo} alt="Facebook Logo" className="facebookLogoNav" /><br />
                        <figcaption>Play Video</figcaption>
                    </button>
                </figure>
            </a>
        </nav>
    );
}

export default NavBar
