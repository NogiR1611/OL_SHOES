import React from 'react';
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import ArrowLeft from './../../../assets/images/icons/arrowLeft.svg';

export default class Minimarket extends React.Component{
    render(){
        return (
            <Modal
                styles={{modal: { maxWidth : '100%',borderRadius : '5%',padding: '0' }}} 
                open={this.props.minimarket}
                onClose={this.props.onCloseMinimarket}
                closeIcon={<ArrowLeft className="bg-gray-lighter-4 hover:bg-gray-lighter-5 transition duration-300 ease-in-out rounded-full stroke-current stroke-0 focus:outline-none text-black transform scale-100 h-8 w-8 p-1 flex justify-center" />}
                center
            >
                <div className="bg-gray-lighter w-full md:w-480 items-center">
                    <div className="md:h-9 md:w-480" />
                    <div className="py-4">
                        <p className="w-full text-xl font-bold text-gray-800">Pilih Minimarket</p>
                        <div className="w-full py-2 text-gray-600">
                            <span className="float-left">Total Harga:</span>
                            <span className="float-right font-bold">Rp.754.000</span>
                        </div>
                        <div className="w-full py-4 text-gray-600">
                            <span className="float-left">Biaya Minimarket:</span>
                            <span className="float-right font-bold">Rp.2.500</span>
                        </div>
                        <div className="w-full py-2 text-gray-600">
                            <span className="float-left">Total Pembayaran:</span>
                            <span className="float-right font-bold">Rp.756.500</span>
                        </div>
                    </div>
                    <div
                        className="flex flex-wrap py-2 my-4 cursor-pointer shadow-xl rounded-md bg-white hover:bg-gray-lighter-5 active:bg-gray-lighter-3 transition duration-300 ease-in-out"
                        onClick={e => e.preventDefault()}
                    >
                        <div className="w-8/12 text-center">
                            <p className="text-gray-700 font-semibold">Alfamart</p>
                            <span className="text-red-700 font-normal">Nama Merchant: EPAY ...</span>
                        </div>
                        <img 
                            src="https://upload.wikimedia.org/wikipedia/commons/9/9e/ALFAMART_LOGO_BARU.png"
                            className="w-3/12 mx-auto"
                        />
                    </div>
                </div>
            </Modal>
        )
    }
}