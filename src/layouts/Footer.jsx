import {useContext, useRef} from 'react';
import {footerLinks} from "../data/footerLinks.js";
import Contacts from "../components/Contacts.jsx";
import {ModeContext} from "../contexts/ModeContext.js";

const Footer = () => {

    const currentMode = useContext(ModeContext);

    const generatorId = useRef((() => {

        let id = 0;

        return () => ++id;

    })());

    return (
        <footer>
            <div className="container">
                <div className="footer">
                    <div className="footer__content">
                        {footerLinks.map( ({category, links}) => (
                            <div key={generatorId.current()}>
                                <div className="footer__title">{category}</div>
                                <div className="footer__lists" key={category}>
                                    {links.map( group => (
                                        <ul className="footer__list" key={generatorId.current()}>
                                            {group.map( link => (
                                                <li className={`footer__link ${link.optionalClass ?? ''}`} key={generatorId.current()}>
                                                    <a href={link.href}>{link.text[currentMode] ?? link.text['pc']}</a>
                                                </li>
                                            ))}
                                        </ul>
                                    ))}
                                </div>
                            </div>
                        ))}
                        <div className='footer__info'>
                            <div className="footer__title">Контакты</div>
                            <Contacts />
                            <div className='footer__address'>Москва, Путевой проезд 3с1, к 902</div>
                        </div>
                        <div className="footer__copyright">
                            <div>©WELBEX 2022. Все права защищены.</div>
                            <a href='#' className="link">Политика конфиденциальности</a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;