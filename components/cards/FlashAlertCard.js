import React from 'react';
import Checklist from './../../assets/images/icons/checklist2.svg';

export default class FlashAlert extends React.Component{
    constructor(props){
        super(props)
        this.state = {} 
    }

    render(){
        return (
            <div className={"flex justify-center fixed z-2000 transition duration-500 ease-in-out top-10 animate-fade left-1/2"}>
                <div className="flex flex-nowrap flex-auto fixed z-1000 top-10 px-4 bg-black h-8 hp-one:h-12 rounded-lg text-center text-white">
                    {this.props.showChecklist ? 
                        <Checklist width={24} height={24} className="fill-current text-white stroke-current stroke-0 text-white self-center" /> 
                        : null
                    }
                    <p className="self-center text-xs hp-one:text-sm lg:text-base">{this.props.message}</p>
                </div>
            </div>
        );
    }
}

FlashAlert.defaultProps = {
    showChecklist:true
}