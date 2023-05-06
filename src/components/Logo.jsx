import classes from "../styles/modules/Logo.module.scss";
import logo from "../assets/logo.png";

const Logo = ({className = ''}) => {

    return (
        <div className={`${className} ${classes.logoContainer}`}>
            <a href="/">
                <img src={logo} alt="Welbex" />
            </a>
            <div className={classes.subtitle}>
                крупный интегратор CRM в Росcии и ещё 8 странах
            </div>
        </div>
    );
};

export default Logo;