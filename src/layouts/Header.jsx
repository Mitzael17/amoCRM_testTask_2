import React, {useEffect, useRef, useState} from 'react';
import Logo from "../components/Logo/Logo.jsx";
import NavMenu from "../components/NavMenu/NavMenu.jsx";
import Contacts from "../components/Contacts/Contacts.jsx";

const Header = () => {

    const [isFixed, setIsFixed] = useState(window.innerWidth <= 420);
    const headerRef = useRef(null);
    const headerContainerRef = useRef(null);
    const prevWidth = useRef(window.innerWidth);

    useEffect(() => {
        
        window.addEventListener('resize', handlerWindowResize);
        
        return () => {
            
            window.removeEventListener('resize', handlerWindowResize);
            
        }
        
    }, []);

    useEffect(() => {
        
        if(isFixed) {
            
            headerRef.current.style.height = headerRef.current.offsetHeight + 'px';
            headerContainerRef.current.classList.add('fixed')
            
            return;
            
        }
        
        headerRef.current.style.height = null;
        headerContainerRef.current.classList.remove('fixed')
        
    }, [isFixed]);
    
    
    return (
        <header ref={headerRef}>
            <div className="container" ref={headerContainerRef}>
                <div className="header">
                    <Logo className='header__logo' />
                    <NavMenu />
                    <Contacts className='header__contacts' />
                </div>
            </div>
        </header>
    );
    
    function handlerWindowResize() {

        // Избегаем лишнего рендера при изменение высоты
        if(prevWidth.current === window.innerWidth) return;

        prevWidth.current = window.innerWidth;

        setIsFixed( prevState => {

            if(window.innerWidth > 420 && prevState) return false;
            if(window.innerWidth <= 420 && !prevState) return true

            return prevState;

        })
        
    }
    
};

export default Header;