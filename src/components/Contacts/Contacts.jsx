import React from 'react';
import classes from "./Contacts.module.scss"
import TelegramIcon from "../Icons/TelegramIcon.jsx";
import ViberIcon from "../Icons/ViberIcon.jsx";
import WhatsappIcon from "../Icons/WhatsappIcon.jsx";

const Contacts = ({className = ''}) => {

    return (
        <div className={`${className} ${classes.contacts}`}>
            <a className={className.tel} href="tel:+75555555555">+7 555 555-55-55</a>
            <div className={classes.socials}>
                <a href="#" target='_blank' className={classes.socialItem}>
                    <TelegramIcon />
                </a>
                <a href="#" target='_blank' className={classes.socialItem}>
                    <ViberIcon />
                </a>
                <a href="#" target='_blank' className={classes.socialItem}>
                    <WhatsappIcon />
                </a>
            </div>
        </div>
    );

};

export default Contacts;