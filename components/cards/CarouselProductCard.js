import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import ProductCards from './ProductCards.js';
import LeftArrow from './../../assets/images/icons/leftArrow.svg';
import RightArrow from './../../assets/images/icons/rightArrow.svg';

function CustomRightArrow({ onClick }) {
    function handleClick() {
      // do whatever you want on the right button click
      console.log('Right button clicked, go to next slide');
      // ... and don't forget to call onClick to slide
      onClick();
    }
  
    return (
      <button
        onClick={handleClick}
        aria-label="Go to next slide"
        className="react-multiple-carousel__arrow react-multiple-carousel__arrow--right"
      />
    );
  }

function CustomLeftArrow({ onClick }) {
    function handleClick() {
      // do whatever you want on the right button click
      console.log('Right button clicked, go to previous slide');
      // ... and don't forget to call onClick to slide
      onClick();
    }
  
    return (
      <button
        onClick={handleClick}
        aria-label="Go to previous slide"
        className="react-multiple-carousel__arrow react-multiple-carousel__arrow--left"
      />
    );
}

export default class CarouselProductCard extends React.Component{
    render(){
        return (
            <Carousel
                additionalTransfrom={0}
                arrows
                autoPlaySpeed={3000}
                centerMode={false}
                className="w-full pt-3 px20"
                containerClass="container-with-dots"
                customLeftArrow={<CustomLeftArrow />}
                customRightArrow={<CustomRightArrow />}
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
                    max: 425,
                    min: 0
                    },
                    items: 2,
                    partialVisibilityGutter: 30
                },
                tablet: {
                    breakpoint: {
                    max: 1024,
                    min: 425
                    },
                    items: 4,
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
