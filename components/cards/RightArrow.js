import React from 'react';
import RightArrow from './../../assets/images/icons/rightArrow.svg';

export const customRightArrow = ({ onClick, ...rest }) => {
    const {
      onMove,
      carouselState: { currentSlide, deviceType }
    } = rest;
    // onMove means if dragging or swiping in progress.
    return (
        <button onClick={() => onClick()} className="bg-red-darker-1 rounded-full h-6 w-6">
            <RightArrow />
        </button>
    );
};