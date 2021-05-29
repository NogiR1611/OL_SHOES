import React from 'react';
import RightArrow from './../../assets/images/icons/rightArrow.svg';

export default const CustomRightArrow = ({ next }) => {
    return (
        <button onClick={next} className="bg-red-darker-1 rounded-full h-6 w-6 absolute">
            <RightArrow />
        </button>
    );
};