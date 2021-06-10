import React from 'react';
import PropTypes from 'prop-types';
import Exit from './../../assets/images/icons/clear.svg';
import ArrowLeft from './../../assets/images/icons/leftArrow1.svg';
import ArrowRight from './../../assets/images/icons/rightArrow1.svg';

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
                        <div className="flex justify-between relative top-0 z-2000 h-full max-w-full max-h-full">
                            <div className="flex flex-col">
                                <button className="focus:outline-none" onClick={this.props.onClose}>
                                    <Exit className="fill-current text-white h-6 w-6" />
                                </button>
                                <div className="flex flex-auto">
                                    <button
                                        className="self-center flex-grow-0 rounded-full h-6 w-6 focus:outline-none"
                                        onClick={this.props.onPrev}
                                    >
                                        <ArrowLeft className="fill-current text-white h-6 w-6" />
                                    </button>
                                </div>
                            </div>
                            <div className="flex w-2/3 max-w-1/2 h-full justify-center"> 
                                <img
                                    src={this.props.src}
                                    className="h-full"
                                />
                            </div>
                            <div className="flex flex-col">
                                <div className="h-6 w-6" />
                                <div className="flex flex-auto">
                                    <button 
                                        className="self-center flex-grow-0 rounded-full h-6 w-6 focus:outline-none"
                                        onClick={this.props.onNext}
                                    >
                                        <ArrowRight className="fill-current text-white h-6 w-6" />
                                    </button>
                                </div>
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