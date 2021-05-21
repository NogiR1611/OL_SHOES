import React from 'react';
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import Exit from './../../../assets/images/icons/exit.svg';

export default class TransferBank extends React.Component{
    render(){
        return (
            <Modal
                styles={{modal: { maxWidth : '100%',borderRadius : '5%',padding: '0' }}} 
                open={this.props.transferBank}
                onClose={this.props.onCloseTransferBank}
                closeIcon={<Exit width={28} height={28} className="hover:bg-gray-200 rounded-full h-8 w-8 flex justify-center transition duration-300 ease-in-out" />}
                center
            >
                <div className="w-full max-w-2xl py-4 px-4 items-center">
                    <div className="w-full py-4">
                        <p className="w-full text-xl font-bold text-gray-800">Pilih Pembayaran</p>
                        <div className="w-full py-2 text-gray-600">
                            <span className="float-left">Total Harga Order:</span>
                            <span className="float-right font-bold">Rp.754.000</span>
                        </div>
                    </div>
                    <div className="py-4">
                        <button 
                            className="w-full text-center h-16 focus:outline-none py-2 transition duration-300 ease-in-out bg-gray-200 hover:bg-gray-300 active:bg-gray-300 shadow-lg rounded-md font-semibold text-gray-900 my-2"
                        >
                            BCA
                        </button>
                    </div>
                </div>
            </Modal>
        );
    }
}