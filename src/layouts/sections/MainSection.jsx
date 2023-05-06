import {useContext} from 'react';
import {featuresData} from "../../data/featuresData.js";
import Button from "../../components/UI/Buttons/Button.jsx";
import {ModeContext} from "../../contexts/ModeContext.js";
import Background from "../../components/Background.jsx";

const MainSection = () => {

    const currentMode = useContext(ModeContext);

    return (
        <section className='relative'>
            <div className="container">
                <div className="mainSection">
                    <div className="mainSection__block">
                        <h2 className='gradient-colorful-text'>
                            <span className='font-400 no-gradient-text'>Зарабатывайте больше</span>
                            <br/>
                            с WELBEX
                        </h2>
                        <div className="mainSection__subtitle">Развиваем и контролируем продажи за вас</div>
                    </div>
                    <div className="mainSection__block">
                        <div className="mainSection__features features">
                            <h3 className='gradient-gold-text'>
                                <span className='no-gradient-text font-500'>Вместе с </span>
                                бесплатной консультацией
                                <span className='no-gradient-text font-500'> мы дарим:</span>
                            </h3>
                            <div className="features__grid">
                                {featuresData.map( feature => (
                                    <div className='features__item' key={feature.id}>
                                        <h3 className='features__title'>{feature.title[currentMode]}</h3>
                                        <div className="features__text hideOnTablet">{feature.content}</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <Button className='mainSection__button hideOnTablet' link='#'>Получить консультацию</Button>
                    </div>
                </div>
            </div>
            <Background />
        </section>
    );
};

export default MainSection;