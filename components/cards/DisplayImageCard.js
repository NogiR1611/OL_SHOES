import React from 'react';
import ArrowLeft from './../../assets/images/icons/leftArrow1.svg';
import ArrowRight from './../../assets/images/icons/rightArrow1.svg';
import Slider from 'react-touch-drag-slider';
import PropTypes from 'prop-types';

export default class DisplayImageCard extends React.Component{
    constructor(props){
        super(props)
        this.state = {}
    }

    render(){ 
        return (
            <>
                <div className="aspect-w-2 aspect-h-1 lg:aspect-w-1 lg:aspect-h-1">
                    <Slider
                        onSlideComplete={this.props.changeIndex}
                        activeIndex={this.props.activeIndex}
                    >
                        {this.props.imgUrls.map((element,index) => {
                            return (
                                <div 
                                    key={index} 
                                    onClick={() => this.props.openModal(this.props.index)} 
                                    className="flex justify-center h-24 w-24 cursor-pointer"
                                    style={{
                                        backgroundImage: `url(${element})`,
                                        backgroundRepeat: 'no-repeat',
                                        backgroundSize: 'cover',
                                        backgroundPosition: 'center',
                                    }}
                                />
                            )
                        })
                        }
                    </Slider>
                </div>
                <div className="flex justify-center my-2 w-full lg:hidden">
                    {this.props.imgUrls.map((element,index) => {
                        return (
                            <div 
                                onClick={() => this.props.changeDotIndex(index)}
                                className={"rounded-full h-2 w-2 mr-1 " + (index === this.props.activeIndex ? "bg-black" : "bg-gray-lighter-1")} 
                            />
                        );
                    })}
                </div>
            </>
        );
    }
}

DisplayImageCard.PropTypes = {
    imgUrls: PropTypes.arrayOf(PropTypes.string).isRequired,
    onPrevious: PropTypes.func.isRequired,
    onNext: PropTypes.func.isRequired,
    changeIndex: PropTypes.func.isRequired,
    openModal: PropTypes.func.isRequired,
    index: PropTypes.integer,
}