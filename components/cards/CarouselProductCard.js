import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import ProductCards from './ProductCards.js';
import LeftArrow from './../../assets/images/icons/leftArrow.svg';
import RightArrow from './../../assets/images/icons/rightArrow.svg';

export const CustomRightArrow = ({ onClick, ...rest }) => {
    const {
        onMove,
        carouselState: { currentSlide, deviceType }
      } = rest;

    return (
        <button onClick={() => onClick()} className="bg-red-darker-1 rounded-full h-6 w-6 absolute">
            <RightArrow />
        </button>
    );
};

export const CustomLeftArrow = ({ onClick, ...rest }) => {
    const {
        onMove,
        carouselState: { currentSlide, deviceType }
      } = rest;

    return (
        <button onClick={() => onClick()} className="bg-red-darker-1 rounded-full h-6 w-6 absolute">
            <LeftArrow />
        </button>
    );
};

export default class CarouselProductCard extends React.Component{
    render(){
        return (
            <Carousel
                additionalTransfrom={0}
                arrows
                autoPlaySpeed={3000}
                centerMode={false}
                className="w-11/12 pt-3 mx-auto"
                containerClass="container-with-dots"
                dotListClass=""
                draggable
                focusOnSelect={false}
                infinite
                itemClass=""
                keyBoardControl
                minimumTouchDrag={80}
                renderButtonGroupOutside={false}
                renderDotsOutside={false}
                responsive={{
                desktop: {
                    breakpoint: {
                    max: 3000,
                    min: 1024
                    },
                    items: 6,
                    partialVisibilityGutter: 40
                },
                mobile: {
                    breakpoint: {
                    max: 464,
                    min: 0
                    },
                    items: 1,
                    partialVisibilityGutter: 30
                },
                tablet: {
                    breakpoint: {
                    max: 1024,
                    min: 464
                    },
                    items: 2,
                    partialVisibilityGutter: 30
                }
                }}
                showDots={false}
                sliderClass=""
                slidesToSlide={1}
                swipeable
            >
                <ProductCards fullWidth={true}/>
                <ProductCards fullWidth={true}/>
                <ProductCards fullWidth={true}/>
                <ProductCards fullWidth={true}/>
                <ProductCards fullWidth={true}/>
                <ProductCards fullWidth={true}/>
                <ProductCards fullWidth={true}/>
                <ProductCards fullWidth={true}/>
                <ProductCards fullWidth={true}/>
                <ProductCards fullWidth={true}/>
            </Carousel>
        );
    }
}
