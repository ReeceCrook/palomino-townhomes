import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import homeIcon from '../assets/mainPics/home-icon-silhouette.png';

function NavBar() {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const navigate = useNavigate()

    const homeButtonHandler = () => {
        navigate('/')
    }
      
    const toggleDropdown = () => {
        setIsDropdownOpen(current => !current);
    };

    return (
        <div className="dropdown">
            <button><img src={homeIcon} alt="home icon" onClick={homeButtonHandler} className="homeIcon"></img></button>
            <a href="#" className="navi" onClick={toggleDropdown}>
                <div className="lineOne"></div>
                <div className="lineTwo"></div>
                <div className="lineThree"></div>
            </a>
            {isDropdownOpen && (
                <div className="dropdown-content" onClick={toggleDropdown}>
                <NavLink 
                    to="/" 
                    activeClassName="active"
                    exact="true"
                >
                    Home
                </NavLink>
                <NavLink
                    to="/floorPlans"
                    exact="true"
                    activeClassName="active"
                >
                    Floor Plans
                </NavLink>
                <NavLink
                    to="/communityInfo"
                    exact="true"
                    activeClassName="active"
                >
                    Community Info
                </NavLink>
                <NavLink
                    to="/contactUs"
                    exact="true"
                    activeClassName="active"
                >
                    Contact Us
                </NavLink>
                <NavLink
                    to="/directions"
                    exact="true"
                    activeClassName="active"
                >
                    Directions
                </NavLink>
                </div>
            )}
        </div>
    );
}


export default NavBar