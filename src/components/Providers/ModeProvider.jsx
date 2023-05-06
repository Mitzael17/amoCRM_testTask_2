import {useEffect, useRef, useState} from 'react';
import {ModeContext} from "../../contexts/ModeContext.js";

const ModeProvider = ({children}) => {

    const [currentMode, setCurrentMode] = useState(window.innerWidth >= 800 ? 'pc' : 'mobile');
    const prevWidth = useRef(window.innerWidth);

    useEffect( () => {

        window.addEventListener('resize', handlerResizeWindow);

        return () => {

            window.removeEventListener('resize', handlerResizeWindow);

        }

    }, []);

    return (
        <ModeContext.Provider value={currentMode}>
            {children}
        </ModeContext.Provider>
    );

    function handlerResizeWindow() {

        if(prevWidth.current === window.innerWidth) return;

        prevWidth.current = window.innerWidth;

        if(window.innerWidth >= 800) setCurrentMode('pc');
        else setCurrentMode('mobile');

    }

};

export default ModeProvider;