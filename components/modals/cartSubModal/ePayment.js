import React from 'react';
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import Exit from './../../../assets/images/icons/exit.svg';

export default class EPayment extends React.Component{
    render(){
        return (
            <Modal
                styles={{modal: { maxWidth : '100%',borderRadius : '5%',padding: '0' }}} 
                open={this.props.ePayment}
                onClose={this.props.onCloseEpayment}
                closeIcon={<Exit width={28} height={28} className="hover:bg-gray-200 rounded-full h-8 w-8 flex justify-center transition duration-300 ease-in-out" />}
                center
            >
                <div className="w-full max-w-md py-4 px-4 items-center">
                    <div className="py-4">
                        <p className="w-full text-xl font-bold text-gray-800">Pilih E-Payment</p>
                        <div className="w-full py-2 text-gray-600">
                            <span className="float-left">Total Harga:</span>
                            <span className="float-right font-bold">Rp.754.000</span>
                        </div>
                        <div className="w-full py-4 text-gray-600">
                            <span className="float-left">Biaya E-Payment:</span>
                            <span className="float-right font-bold">Rp.3.000</span>
                        </div>
                        <div className="w-full py-2 text-gray-600">
                            <span className="float-left">Total Pembayaran:</span>
                            <span className="float-right font-bold">Rp.757.000</span>
                        </div>
                    </div>
                    <div
                        className="flex flex-wrap py-2 my-4 cursor-pointer shadow-xl rounded-md transition duration-300 ease-in-out hover:bg-gray-200 active:bg-gray-300"
                        onClick={e => e.preventDefault()}
                    >
                        <div className="w-9/12 text-center">
                            <p className="text-gray-700 font-semibold">OVO</p>
                            <span className="text-red-700 font-normal">Merchant: EPAY</span>
                        </div>
                        <img 
                            src="https://gadgetren.com/wp-content/uploads/2019/07/OVO-Logo.jpg"
                            className="w-2/12 mx-auto"
                        />
                    </div>
                </div>
            </Modal>
        )
    }
}