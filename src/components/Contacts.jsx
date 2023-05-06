import TelegramIcon from "./Icons/TelegramIcon.jsx";
import ViberIcon from "./Icons/ViberIcon.jsx";
import WhatsappIcon from "./Icons/WhatsappIcon.jsx";

const Contacts = ({className = ''}) => {

    return (
        <div className={`${className} contacts`}>
            <div className='contacts__tel'>
                <a className={className.tel} href="tel:+75555555555">+7 555 555-55-55</a>
            </div>
            <div className='contacts__socials'>
                <a href="Contacts#" target='_blank' className='contacts__socialItem'>
                    <TelegramIcon />
                </a>
                <a href="Contacts#" target='_blank' className='contacts__socialItem'>
                    <ViberIcon />
                </a>
                <a href="Contacts#" target='_blank' className='contacts__socialItem'>
                    <WhatsappIcon />
                </a>
            </div>
        </div>
    );

};

export default Contacts;