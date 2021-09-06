import React from 'react';
import imageStyle from './MyImage.module.css';

const MyImage = ({ imageSrc }) => {
    return (
        <img className={imageStyle.layout} src={imageSrc} alt=""/>
    );
};

export default MyImage;
