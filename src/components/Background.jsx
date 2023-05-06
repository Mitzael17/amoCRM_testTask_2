import classes from "../styles/modules/Background.module.scss";
import {MouseParallaxChild} from "react-parallax-mouse";

const Background = () => {
    return (
        <div className={classes.background}>
            <MouseParallaxChild factorX={0.015} factorY={0.015} className={`${classes.ball} ${classes.purple}`} />
            <MouseParallaxChild factorX={0.03} factorY={0.03} className={`${classes.ball} ${classes.red}`} />
            <MouseParallaxChild factorX={0.02} factorY={0.02} className={`${classes.ball} ${classes.smallBrown}`} />
            <div className={`${classes.lightBall} ${classes.red}`}></div>
            <div className={`${classes.lightBall} ${classes.purple}`}></div>
            <div className={`${classes.lightBall} ${classes.yellow}`}></div>
        </div>
    );
};

export default Background;