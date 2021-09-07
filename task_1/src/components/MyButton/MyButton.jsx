import React from 'react';
import classes from './MyButton.module.css';
import {buttonSliderAction} from "../../data";

const MyButton = ({action, onClick, disableStatus}) => {

    const handleButtonClick = () => {
        onClick(action);
    }

    return (
        <button className={classes.button} onClick={handleButtonClick} disabled={disableStatus(action)}>
            {action === buttonSliderAction.increase ? '>' : '<'}
        </button>
    );
};

export default MyButton;
