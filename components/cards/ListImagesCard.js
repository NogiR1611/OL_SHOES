import React from 'react';
import PropTypes from 'prop-types';
import Checklist from './../../assets/images/icons/checklist1.svg';

export default class ListImagesCard extends React.Component{
    render(){
        return ( 
            <div className="hidden lg:flex flex-wrap justify-center mt-4">
                {this.props.imgUrls.map((url,index) => { 
                    return (
                        <div 
                            key={index} 
                            onClick={() => this.props.changeIndex(index)} 
                            className="flex justify-center h-24 w-24 cursor-pointer m-1"
                            style={{
                                backgroundImage: `url(${url})`,
                                backgroundRepeat: 'no-repeat',
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                            }}
                        >
                            <div className={"flex justify-center self-center h-12 w-12 rounded-full bg-black bg-opacity-40 " + (index === this.props.activeIndex ? "block" : "hidden")}>
                                <Checklist 
                                    className="self-center fill-current text-white h-4 w-4 hp-one:h-6 hp-one:w-6"
                                />
                            </div>
                        </div>
                    );
                })}
            </div>
        );
    }
}

ListImagesCard.PropTypes = {
    imgUrls: PropTypes.arrayOf(PropTypes.string).isRequired,
    openModal: PropTypes.func.isRequired
};