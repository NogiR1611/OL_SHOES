import React from 'react';
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import Circle from './../../../assets/images/icons/circle.svg';
import Checkmark from './../../../assets/images/icons/checkmark2.svg';
import ArrowLeft from './../../../assets/images/icons/arrowLeft.svg';

export default class ShipmentService extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            arrayShipment : [
                {
                    id: 1,
                    nameShipment:'JNE',
                    firstPrice:25000,
                    discountPrice:4000,
                    timeDelivery:'2-3',
                    logo:'https://upload.wikimedia.org/wikipedia/commons/9/92/New_Logo_JNE.png'
                },
                {
                    id: 2,
                    nameShipment:'J&E',
                    firstPrice:25000,
                    discountPrice:5000,
                    timeDelivery:'3-4',
                    logo:'https://upload.wikimedia.org/wikipedia/commons/3/35/Logo_J%26T_Merah_Square.jpg'
                }
            ],
            shipmentOption: '',
            handleClick: false
        }
    }

    handleOption = id => {
        this.setState({ shipmentOption: this.state.arrayShipment[id - 1].nameShipment })
    }

    render(){
        return (
            <Modal
                styles={{modal: { maxWidth : '100%',borderRadius : '5%' }}} 
                open={this.props.modalShipmentService}
                onClose={this.props.onCloseShipmentService}
                closeIcon={<ArrowLeft className="bg-gray-lighter-4 hover:bg-gray-lighter-5 transition duration-300 ease-in-out rounded-full stroke-current stroke-0 focus:outline-none text-black transform scale-100 h-8 w-8 p-1 flex justify-center" />}
                center
            >
                <div className="bg-gray-lighter w-full md:w-480 items-center">
                    <div className="md:h-9 md:w-480" />
                    <div className="w-full">
                        <p className="text-xl font-medium text-black-darker py-4 px-6 text-gray-800">Pilih Metode Pengiriman</p>
                        <div className="flex justify-between px-6 flex-auto text-black-darker">
                            <div className="">Total Berat Paket:</div>
                            <div className="font-bold">3000g</div>
                        </div>
                    </div>
                    <div className="overflow-y-auto px-6 pb-6 divide-y-1 divide-gray-300">
                        {this.state.arrayShipment.map( (element,index) => {
                            return (
                            <>
                                <div
                                    onClick={() => this.handleOption(element.id) }
                                    key={index}
                                    className="flex flex-nowrap flex-auto mt-4 cursor-pointer"
                                >
                                    <>
                                        {this.state.shipmentOption === element.nameShipment ? (
                                            <Checkmark className="flex-none w-6 h-6 self-center stroke-current stroke-1 text-red-darker-1" /> 
                                        ):
                                            <Circle className="flex-none w-6 h-6 self-center stroke-current stroke-1 text-black" />
                                        }
                                        <div className="flex-auto">
                                            <div className="">
                                                <span className="line-through text-gray-lighter-1 mr-1">Rp {element.firstPrice}</span>
                                                <span className="text-black-darker">Rp {element.discountPrice}</span>
                                            </div>
                                            <div className="py-1">
                                                <span className="text-gray-lighter-1 text-sm">{element.timeDelivery} Hari</span>
                                            </div>
                                        </div>
                                        <div className="flex-none content-center">
                                            <img 
                                                src={element.logo}
                                                className="w-12 h-12"
                                            />
                                        </div>
                                    </>
                                </div>
                                {this.state.shipmentOption === element.nameShipment ? (
                                    <div className="w-full">
                                        <div class="py-2">
                                            <div class="flex items-center mr-4 mb-2 cursor-pointer">
                                                <input type="checkbox" id="A3-yes" name="A3-confirmation" value="yes" className="opacity-0 absolute h-6 w-6 cursor-pointer" />
                                                <div className="cursor-pointer bg-gray-lighter border-2 border-gray-400 w-6 h-6 flex flex-shrink-0 opacity-1 justify-center items-center mr-2 focus-within:border-red-darker-1 transition duration-300 ease-in-out">
                                                    <svg className="fill-current hidden w-3 h-3 text-red-darker-1 pointer-events-none" version="1.1" viewBox="0 0 17 12" xmlns="http://www.w3.org/2000/svg">
                                                        <g fill="none" fill-rule="evenodd">
                                                            <g transform="translate(-9 -11)" fill="#B80B2A" fill-rule="nonzero">
                                                                <path d="m25.576 11.414c0.56558 0.55188 0.56558 1.4439 0 1.9961l-9.404 9.176c-0.28213 0.27529-0.65247 0.41385-1.0228 0.41385-0.37034 0-0.74068-0.13855-1.0228-0.41385l-4.7019-4.588c-0.56584-0.55188-0.56584-1.4442 0-1.9961 0.56558-0.55214 1.4798-0.55214 2.0456 0l3.679 3.5899 8.3812-8.1779c0.56558-0.55214 1.4798-0.55214 2.0456 0z" />
                                                            </g>
                                                        </g>
                                                    </svg>
                                                </div>
                                                <label for="A3-yes" class="cursor-pointer select-none text-black-darker">Gunakan Asuransi Rp.6.500</label>
                                            </div>
                                        </div>
                                        <button
                                            onClick={this.props.paymentModal}
                                            className="w-full bg-red-darker-1 hover:opacity-90 active:bg-opacity-50 active:bg-red-darker-1 text-white text-center font-medium text-sm h-8 rounded-md focus:outline-none"
                                        >
                                            Pilih metode ini
                                        </button>
                                    </div>
                                ) : ''}
                            </>
                            );
                        })}
                    </div>  
                </div>    
            </Modal>
        );
    }
}