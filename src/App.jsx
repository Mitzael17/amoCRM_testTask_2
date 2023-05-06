import {useEffect} from 'react';
import Header from "./layouts/Header.jsx";
import Content from "./layouts/Content.jsx";
import Footer from "./layouts/Footer.jsx";
import ModeProvider from "./components/Providers/ModeProvider.jsx";
import {MouseParallaxContainer} from "react-parallax-mouse";

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
            <MouseParallaxContainer className='page'>
                <Header />
                <Content />
                <Footer />
            </MouseParallaxContainer>
        </ModeProvider>
    );
};

export default App;