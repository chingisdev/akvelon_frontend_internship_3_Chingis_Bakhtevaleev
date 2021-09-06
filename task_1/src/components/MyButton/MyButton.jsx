import React from 'react';
import classes from './MyButton.module.css';
import {buttonSliderAction} from "../../data";

const MyButton = ({action, onClick, curIndex, limit}) => {

    const handleButtonClick = () => {
        onClick(action);
    }

    return (
        <button className={classes.button} onClick={handleButtonClick} disabled={curIndex === limit}>
            {action === buttonSliderAction.increase ? '>' : '<'}
        </button>
    );
};

export default MyButton;
