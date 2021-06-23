import React from 'react';
import Carousel from 'react-multi-carousel';
import Image from 'next/image';

export default class CarouselPromotionCard extends React.Component{
    render(){
        return (
            <Carousel
                additionalTransfrom={0}
                autoPlay
                arrows={false}
                autoPlaySpeed={1000}
                centerMode={false}
                className="w-11/12 pt-3 h-72 overflow-hidden mx-auto z-80"
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
                    items: 1,
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
                    items: 1,
                    partialVisibilityGutter: 30
                }
                }}
                showDots={false}
                sliderClass=""
                slidesToSlide={2}
                swipeable
            >
                <div>
                    <img 
                        src="https://dbs9nopbkp043.cloudfront.net/images/profile/20210401_015927_0000_1617217228247.png"
                        className="w-full bg-cover bg-center"
                    />
                </div>
                <div>
                    <img 
                        src="https://dbs9nopbkp043.cloudfront.net/images/profile/slide_2_1618352193380.jpg"
                        className="w-full bg-cover bg-center"
                    />
                </div>
                <div>
                    <img 
                        src="https://dbs9nopbkp043.cloudfront.net/images/profile/DSCF6533_1618352325735.JPG"
                        className="w-full bg-cover bg-center"
                    />
                </div>
            </Carousel>
        );
    }
}