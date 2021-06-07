import React from 'react';
import PropTypes from 'prop-types';
import Exit from './../../assets/images/icons/exit.svg';
import ArrowLeft from './../../assets/images/icons/arrowLeft.svg';
import ArrowRight from './../../assets/images/icons/rightArrow.svg';

export default class ModalImageProduct extends React.Component{
    constructor(props){
        super(props) 
        this.state = {}
    }

    render(){
        return (
            <>
                {this.props.isOpen ? (
                    <div className="fixed w-full h-full top-0 left-0 bg-black z-1000">
                        <div className="flex flex-nowrap flex-auto justify-between relative top-0 z-2000 max-w-full max-h-full">
                            <div className="flex flex-col">
                                <div className="">
                                    <button className="" onClick={this.props.onClose}>
                                        <Exit className="fill-current text-white h-12 w-12" width={24} height={24} />
                                    </button>
                                </div>
                                <div className="flex">
                                    <button
                                        className="self-center"
                                        onClick={this.props.onPrev}
                                    >
                                        <ArrowLeft className="fill-current text-white h-6 w-6" width={24} height={24} />
                                    </button>
                                </div>
                            </div>
                            <div className="flex flex-auto w-1/2 h-1/2 mx-auto"> 
                                <img
                                    src={this.props.src}
                                    className=""
                                />
                            </div>
                            <div className="flex">
                                <button onClick={this.props.onNext}>
                                    <ArrowRight className="fill-current text-white h-6 w-6" width={24} height={24} />
                                </button>
                            </div>
                        </div>
                    </div>
                ) : null}
            </>
        );
    }
}

ModalImageProduct.PropTypes = {
    isOpen: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
    onNext: PropTypes.func.isRequired,
    onPrev: PropTypes.func.isRequired,
    src: PropTypes.string
}