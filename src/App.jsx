import React, {useEffect} from 'react';
import Header from "./layouts/Header.jsx";
import Content from "./layouts/Content.jsx";
import Footer from "./layouts/Footer.jsx";
import ModeProvider from "./components/Providers/ModeProvider.jsx";

const App = () => {

    useEffect(() => {

        let vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty('--vh', `${vh}px`);

        const handlerResize = () => {
            let vh = window.innerHeight * 0.01;
            document.documentElement.style.setProperty('--vh', `${vh}px`);
        }

        window.addEventListener('resize', handlerResize);

        return () => {
            window.removeEventListener('resize', handlerResize);
        };

    }, []);

    return (
        <ModeProvider>
            <Header />
            <Content />
            <Footer />
        </ModeProvider>
    );
};

export default App;