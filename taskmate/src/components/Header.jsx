//import React from 'react';
import logo from '../assets/logo.svg';
import "./header.css";

const Header = () => {
    return (
        <header>
            <img className= 'logo' src={logo} alt=" " />
            <a href="/">Home</a>
        </header>
    );
};

export default Header;