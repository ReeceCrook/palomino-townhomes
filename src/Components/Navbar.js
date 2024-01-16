import React from "react";
import { NavLink, useNavigate, useLocation } from "react-router-dom";
import homeIcon from '../assets/Icons/home.png';
import floorPlansIcon from '../assets/Icons/blueprint.png'
import directionsIcon from "../assets/Icons/direction.png";
import communityInfoIcon from "../assets/Icons/info.png";
import contactUsIcon from '../assets/Icons/contact-us.png'
import "../App.css"

function NavBar() {
    const navigate = useNavigate()
    const location = useLocation();
    const isHome = location.pathname === '/';

    return (
        <div className={`tabs ${isHome ? 'homeTabs' : 'dropdown'}`}>
            <NavLink 
                to="/" 
                activeclassname="active"
                exact="true"
            >
                <figure className="iconsWrapper">
                    <button className="iconButtons">
                        <img src={homeIcon} alt="home icon" onClick={() => navigate('/')} className="icons" />
                        <figcaption>Home</figcaption>
                    </button>
                </figure>
            </NavLink>
            <NavLink
                to="/floorPlans"
                exact="true"
                activeclassname="active"
            >
                <figure className="iconsWrapper">
                    <button className="iconButtons">
                        <img src={floorPlansIcon} alt="Floor Plan icon" onClick={() => navigate('/floorPlans')} className="icons" />
                        <figcaption>Floor Plans</figcaption>
                    </button>
                </figure>
            </NavLink>
            <NavLink
                to="/directions"
                exact="true"
                activeclassname="active"
            >
                <figure className="iconsWrapper">
                    <button className="iconButtons">
                        <img src={directionsIcon} alt="Directions icon" onClick={() => navigate('/directions')} className="icons" />
                        <figcaption>Directions</figcaption>
                    </button>
                    
                </figure>
            </NavLink>
            <NavLink
                to="/communityInfo"
                exact="true"
                activeclassname="active"
            >
                <figure className="iconsWrapper">
                    <button className="iconButtons">
                        <img src={communityInfoIcon} alt="Community Info icon" onClick={() => navigate('/communityInfo')} className="icons" />
                        <figcaption>Community Info</figcaption>
                    </button>
                    
                </figure>
            </NavLink>
            <NavLink
                to="/contactUs"
                exact="true"
                activeclassname="active"
            >
                <figure className="iconsWrapper">
                    <button className="iconButtons">
                        <img src={contactUsIcon} alt="Contact Us icon" onClick={() => navigate('/contactUs')} className="icons" />
                        <figcaption>Contact Us</figcaption>
                    </button>
                </figure>
            </NavLink>
        </div>
    );
}


export default NavBar