import React from 'react';
import classes from "./Logo.module.scss";
import logo from "../../assets/logo.png";

const Logo = ({className = ''}) => {

    return (
        <div className={`${className} ${classes.logoContainer}`}>
            <a href="/" className={classes.logo}>
                <img src={logo} alt="Welbex" />
            </a>
            <div className={classes.subtitle}>
                крупный интегратор CRM в Росcии и ещё 8 странах
            </div>
        </div>
    );
};

export default Logo;