import React from 'react';
import Slider from 'react-touch-drag-slider';
import PropTypes from 'prop-types';

export default class DisplayImageCard extends React.Component{
    constructor(props){
        super(props)
        this.state = {}
    }

    render(){ 
        return (
        <div className="flex-auto h-480 w-480">
            <Slider
                onSlideComplete={this.props.changeIndex}
                activeIndex={this.props.activeIndex}
            >
                {this.props.imgUrls.map((element,index) => {
                    return (
                        <div onClick={() => this.props.openModal(this.props.index)}>
                            <img
                                className="h-full w-full" 
                                key={index}
                                src={element} 
                            />
                        </div>
                    )
                })
                }
            </Slider>
        </div>
        );
    }
}

DisplayImageCard.PropTypes = {
    imgUrls: PropTypes.arrayOf(PropTypes.string).isRequired,
    changeIndex: PropTypes.func.isRequired,
    openModal: PropTypes.func.isRequired,
    index: PropTypes.integer,
}