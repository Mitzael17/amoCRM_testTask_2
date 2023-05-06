import React from 'react';
import classes from "../styles/modules/Background.module.scss";

const Background = () => {
    return (
        <div className={classes.background}>
            <div className={`${classes.ball} ${classes.purple}`}></div>
            <div className={`${classes.ball} ${classes.red}`}></div>
            <div className={`${classes.ball} ${classes.smallBrown}`}></div>
            <div className={`${classes.lightBall} ${classes.red}`}></div>
            <div className={`${classes.lightBall} ${classes.purple}`}></div>
            <div className={`${classes.lightBall} ${classes.yellow}`}></div>
        </div>
    );
};

export default Background;