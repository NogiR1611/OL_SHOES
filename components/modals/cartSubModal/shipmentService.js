import React from 'react';
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import Circle from './../../../assets/images/icons/circle.svg';
import Checkmark from './../../../assets/images/icons/checkmark2.svg';
import Exit from './../../../assets/images/icons/exit.svg';

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
                styles={{modal: { maxWidth : '100%',borderRadius : '5%',padding: '0' }}} 
                open={this.props.modalShipmentService}
                onClose={this.props.onCloseShipmentService}
                closeIcon={<Exit width={28} height={28} className="hover:bg-gray-200 rounded-full h-8 w-8 flex justify-center transition duration-300 ease-in-out" />}
                center
            >
                <div className="w-full max-w-2xl py-4 px-4 items-center">
                    <div className="w-full py-4">
                        <p className="text-xl font-bold text-gray-800">Pilih Metode Pengiriman</p>
                        <div className="py-2 text-gray-600">
                            <span className="float-left">Total Berat Paket:</span>
                            <span className="float-right font-bold">3000g</span>
                        </div>
                    </div>
                    <div className="overflow-y-auto py-2 divide-y">
                        {this.state.arrayShipment.map( (element,index) => {
                            return (
                            <>
                                <div
                                    onClick={() => this.handleOption(element.id) }
                                    key={index}
                                    className="flex flex-wrap py-2 cursor-pointer"
                                >
                                    <>
                                        {this.state.shipmentOption === element.nameShipment ? (
                                            <Checkmark className="flex-none w-8 h-8 self-center fill-current text-red-600" /> 
                                        ):
                                            <Circle className="flex-none w-8 h-8 self-center stroke-current stroke-2 text-black" />
                                        }
                                        <div className="flex-1 w-10/12">
                                            <div className="">
                                                <span className="line-through text-lg text-gray-400 mx-2">Rp {element.firstPrice}</span>
                                                <span className="text-gray-600 text-lg">Rp {element.discountPrice}</span>
                                            </div>
                                            <div className="py-1">
                                                <span className="text-gray-600 text-base">{element.timeDelivery} Hari</span>
                                            </div>
                                        </div>
                                        <div className="flex-none w-1/12 content-center">
                                            <img 
                                                src={element.logo}
                                                className="w-full my-2"
                                            />
                                        </div>
                                    </>
                                </div>
                                {this.state.shipmentOption === element.nameShipment ? (
                                    <div className="w-full">
                                        <div class="py-2">
                                            <div class="flex items-center mr-4 mb-2 cursor-pointer">
                                                <input type="checkbox" id="A3-yes" name="A3-confirmation" value="yes" className="opacity-0 absolute h-6 w-6 cursor-pointer" />
                                                <div className="cursor-pointer bg-white border-2 rounded-md border-gray-400 w-6 h-6 flex flex-shrink-0 duration-500 opacity-1 justify-center items-center mr-2 focus-within:border-red-500">
                                                    <svg className="fill-current hidden w-3 h-3 text-red-600 pointer-events-none" version="1.1" viewBox="0 0 17 12" xmlns="http://www.w3.org/2000/svg">
                                                        <g fill="none" fill-rule="evenodd">
                                                            <g transform="translate(-9 -11)" fill="#ff0d0d" fill-rule="nonzero">
                                                                <path d="m25.576 11.414c0.56558 0.55188 0.56558 1.4439 0 1.9961l-9.404 9.176c-0.28213 0.27529-0.65247 0.41385-1.0228 0.41385-0.37034 0-0.74068-0.13855-1.0228-0.41385l-4.7019-4.588c-0.56584-0.55188-0.56584-1.4442 0-1.9961 0.56558-0.55214 1.4798-0.55214 2.0456 0l3.679 3.5899 8.3812-8.1779c0.56558-0.55214 1.4798-0.55214 2.0456 0z" />
                                                            </g>
                                                        </g>
                                                    </svg>
                                                </div>
                                                <label for="A3-yes" class="cursor-pointer select-none text-gray-700">Gunakan Asuransi Rp.6.500</label>
                                            </div>
                                        </div>
                                        <button
                                            onClick={this.props.paymentModal}
                                            className="w-full bg-red-700 text-white text-center font-semibold py-2 rounded-md focus:outline-none"
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