import React from 'react';
import Logo from "../components/Logo/Logo.jsx";
import NavMenu from "../components/NavMenu/NavMenu.jsx";
import Contacts from "../components/Contacts/Contacts.jsx";

const Header = () => {

    return (
        <header>
            <div className="container">
                <div className="header">
                    <Logo />
                    <NavMenu />
                    <Contacts />
                </div>
            </div>
        </header>
    );
};

export default Header;