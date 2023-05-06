import classes from "../../../styles/modules/UI/Buttons/Button.module.scss";

const Button = ({children, link, className = '', ...props}) => {
    return (
        <>
            { link ?
                <a href={link} className={`${className} ${classes.button}`} {...props}>{children}</a>
                :
                <button className={`${className} ${classes.button}`} {...props}>{children}</button>
            }
        </>


    );
};

export default Button;