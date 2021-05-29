import React from 'react';
import LeftArrow from './../../assets/images/icons/leftArrow.svg';

export const CustomLeftArrow = ({ previous }) => {
    return (
        <button onClick={previous} className="bg-red-darker-1 rounded-full h-6 w-6 absolute">
            <LeftArrow />
        </button>
    );
};