import React from 'react';
import classes from "./NavMenu.module.scss";

const NavMenu = () => {

    return (
        <nav>
            <ul className={classes.menu}>
                <li>
                    <a href="#">Услуги</a>
                </li>
                <li>
                    <a href="#">Виджеты</a>
                </li>
                <li>
                    <a href="#">Интеграции</a>
                </li>
                <li>
                    <a href="#">Кейсы</a>
                </li>
                <li className={classes.hideOnMobile}>
                    <a href="#">Сертификаты</a>
                </li>
            </ul>
        </nav>
    );
};

export default NavMenu;