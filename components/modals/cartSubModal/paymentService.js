import React from 'react';
import numeral from 'numeral';
import { Modal } from 'react-responsive-modal';
import ArrowLeft from './../../../assets/images/icons/arrowLeft.svg';

export default class PaymentService extends React.Component{
    render(){
        return (
            <Modal
                styles={{modal: { maxWidth : '100%',borderRadius : '5%',padding: '0' }}} 
                open={this.props.modalPayment}
                onClose={this.props.onCloseModalPayment}
                closeIcon={<ArrowLeft className="bg-gray-lighter-4 hover:bg-gray-lighter-5 transition duration-300 ease-in-out rounded-full stroke-current stroke-0 focus:outline-none text-black transform scale-100 h-8 w-8 p-1 flex justify-center" />}
                center
            >
                <div className="bg-gray-lighter w-full md:w-480 items-center">
                    <div className="h-9 md:w-480" />
                    <div className="flex justify-center md:hidden">
                        <div className="bg-gray-lighter-6 mx-auto h-1 w-20 absolute top-1 rounded-sm" />
                    </div>
                    <div className="w-full py-4">
                        <p className="w-full text-sm hp-one:text-base lg:text-lg font-bold text-black-darker py-4 px-2 hp-one:px-6">Pilih Metode Pembayaran</p>
                        <div className="w-full px-2 hp-one:px-6 text-xs hp-one:text-sm lg:text-base text-gray-600">
                            <span className="float-left">Total Harga Order:</span>
                            <span className="float-right font-bold">Rp. {numeral(754000).format('0,0')}</span>
                        </div>
                    </div>
                    <div className="pb-5 px-2 hp-one:px-6">
                        <button
                            onClick={this.props.transferBank}
                            className="w-full text-center bg-white text-xs hp-one:text-sm w-8 hp-one:h-12 mt-4 focus:outline-none py-2 hover:bg-gray-lighter-5 active:bg-gray-lighter-3 transition duration-300 ease-in-out shadow rounded-md font-semibold text-black-darker"
                        >
                            Transfer Bank
                        </button>
                        <button
                            onClick={this.props.ePayment}
                            className="w-full text-center bg-white text-xs hp-one:text-sm w-8 hp-one:h-12 mt-4 focus:outline-none py-2 hover:bg-gray-lighter-5 active:bg-gray-lighter-3 transition duration-300 ease-in-out shadow rounded-md font-semibold text-black-darker"
                        >
                            <div className="flex flex-col flex-auto flex-nowrap">
                                <p className="text-center leading-none">E-Payment</p>
                                <p className="text-gray-lighter-1 text-center font-normal leading-none">OVO</p>
                            </div>
                        </button>
                        <button
                            onClick={this.props.minimarket}
                            className="w-full text-center bg-white text-xs hp-one:text-sm w-8 hp-one:h-12 mt-4 focus:outline-none py-2 hover:bg-gray-lighter-5 active:bg-gray-lighter-3 transition duration-300 ease-in-out shadow rounded-md font-semibold text-black-darker"
                        >
                            <div className="flex flex-col flex-auto flex-nowrap">
                                <p className="text-center leading-none">Minimarket</p>
                                <p className="text-gray-lighter-1 text-center font-normal leading-none">Alfamart</p>
                            </div>
                        </button>
                        <button
                            onClick={this.props.creditAndDebit}
                            className="bg-white text-xs hp-one:text-sm w-full text-center w-8 hp-one:h-12 mt-4 focus:outline-none py-2 hover:bg-gray-lighter-5 active:bg-gray-lighter-3 transition duration-300 ease-in-out shadow rounded-md font-semibold text-black-darker"
                        >
                            Kartu Kredit/Debit
                        </button>
                    </div>
                </div>
            </Modal>
        );
    }
}