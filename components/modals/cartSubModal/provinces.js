import React from 'react';
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import ArrowLeft from './../../../assets/images/icons/arrowLeft.svg';
import Search from './../../../assets/images/icons/search.svg';
import Clear from './../../../assets/images/icons/clear.svg';
import address from './../../../address.js';
import RightArrow from './../../../assets/images/icons/rightArrow.svg';

export default class Provinces extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            provinceData: [],
            searchProvince: '',
        }
    }

    render(){
        return (
            <Modal
                styles={{modal: { maxWidth : '100%',borderRadius : '5%',padding: '0' }}} 
                open={this.props.onOpenProvince}
                onClose={this.props.onCloseProvince}
                closeIcon={<ArrowLeft className="bg-gray-lighter-4 hover:bg-gray-lighter-5 transition duration-300 ease-in-out rounded-full stroke-current stroke-0 focus:outline-none text-black transform scale-100 h-6 w-6 hp-one:h-8 hp-one:w-8 p-1 flex justify-center" />}
                center
            >
                <div className="bg-gray-lighter w-full md:w-480 items-center">
                    <div className="flex justify-center md:hidden">
                        <div className="bg-gray-lighter-6 mx-auto h-1 w-20 absolute top-1 rounded-sm" />
                    </div>
                    <div className="h-9 md:w-480" />
                    <div className="py-4 px-2 hp-one:px-6">  
                        <p className="text-sm hp-one:text-base lg:text-xl text-gray-800 font-semibold py-1">1.Pilih Provinsi</p>
                        <p className="text-xs hp-one:text-sm lg:text-base text-gray-800 py-1 mb-4">Kemana kamu mau mengirimkan paket?</p>
                        <div className="flex flex-nowrap flex-auto text-xs hp-one:text-sm lg:text-base bg-gray-lighter-7 focus:bg-gray-400 w-full rounded-t-lg">
                            <input
                                className="flex-auto inline-block transition duration-400 ease-in-out bg-transparent border-b-2 border-gray-400 px-2 outline-none focus:border-red-darker-1"
                                type="text"
                                name=""
                                id="" 
                                value={this.props.searchProvince}
                                onChange={this.props.onChangeProvince}
                            />
                            {this.props.searchProvince !== '' ?
                                <button className="bg-transparent flex flex-none focus:outline-none pl-1" onClick={this.props.clearInput}>
                                    <Clear className="self-center inline-block h-4 w-4 hp-one:h-6 hp-one:w-6 lg:h-8 lg:w-8" />
                                </button> : 
                                <Search className="self-center inline-block pl-1 h-4 w-4 hp-one:h-6 hp-one:w-6 lg:h-8 lg:w-8" />
                            }
                        </div>
                    </div>
                    <div className="w-full max-h-96 text-xs hp-one:text-sm lg:text-base overflow-y-auto">
                        {this.props.provinceData
                        .filter(element => {
                            return (
                                element.name.toLowerCase().includes(this.props.searchProvince.toString().toLowerCase())    
                            )
                        })
                        .map( (element,index) => {
                            return (
                                <div className="w-full pl-6 font-bold text-gray-800" key={index}>
                                    <button
                                        className="flex flex-nowrap flex-auto w-full text-left font-bold text-gray-800 py-3 pr-3 focus:outline-none hover:bg-gray-100 transition duration-300 ease-in-out rounded-md"
                                        onClick={() => this.props.onClickProvinces(element.id,element.name)}
                                    >
                                        <span className="flex-auto self-center">{element.name}</span>
                                        <RightArrow className="flex-none inline-block float-right stroke-current stroke-0 text-black h-4 w-4 hp-one:h-6 hp-one:w-6" />
                                    </button>
                                    <hr className="border-b-2 border-gray-200" />
                                </div>
                            )
                        })}
                    </div>
                </div>
            </Modal>
        );
    }
}