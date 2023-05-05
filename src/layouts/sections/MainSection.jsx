import React, {useEffect, useRef, useState} from 'react';
import {featuresData} from "../../data/featuresData.js";
import Button from "../../components/UI/Button/Button.jsx";

const MainSection = () => {

    const [currentMode, setCurrentMode] = useState(window.innerWidth > 420 ? 'pc' : 'mobile');
    const prevWidth = useRef(window.innerWidth);

    useEffect( () => {

        window.addEventListener('resize', handlerResizeWindow);

        return () => {

            window.removeEventListener('resize', handlerResizeWindow);

        }

    }, []);

    return (
        <section>
            <div className="container">
                <div className="mainSection">
                    <div className="mainSection__block">
                        <h2>Зарабатывайте больше <span className='colorful-text'>с WELBEX</span></h2>
                        <div className="mainSection__subtitle">Развиваем и контролируем продажи за вас</div>
                    </div>
                    <div className="mainSection__block">
                        <div className="mainSection__features features">
                            <h3>Вместе с <span className='colorful-text'>бесплатной консультацией мы дарим:</span></h3>
                            <div className="features__grid">
                                {featuresData.map( feature => (
                                    <div className='features__item' key={feature.id}>
                                        <h3 className='features__title'>{feature.title[currentMode]}</h3>
                                        <div className="features__text">{feature.content}</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <Button className='mainSection__button'>Получить консультацию</Button>
                    </div>
                </div>
            </div>
        </section>
    );

    function handlerResizeWindow() {

        if(prevWidth.current === window.innerWidth) return;

        prevWidth.current = window.innerWidth;

        if(window.innerWidth > 420) setCurrentMode('pc');
        else setCurrentMode('mobile');

    }

};

export default MainSection;