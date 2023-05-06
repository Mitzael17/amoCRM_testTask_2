import React from 'react';
import classes from "../styles/modules/NavMenu.module.scss";

const NavMenu = () => {

    return (
        <nav>
            <ul className={classes.menu}>
                <li>
                    <a href="NavMenu#">Услуги</a>
                </li>
                <li>
                    <a href="NavMenu#">Виджеты</a>
                </li>
                <li>
                    <a href="NavMenu#">Интеграции</a>
                </li>
                <li>
                    <a href="NavMenu#">Кейсы</a>
                </li>
                <li className='hideOnMobile'>
                    <a href="NavMenu#">Сертификаты</a>
                </li>
            </ul>
        </nav>
    );
};

export default NavMenu;