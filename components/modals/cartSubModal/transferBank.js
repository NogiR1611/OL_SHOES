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
                <div className="w-full max-w-md py-4 px-4 items-center">
                    <div className="py-4">
                        <p className="w-full text-xl font-bold text-gray-800">Pilih Metode Pembayaran</p>
                        <div className="w-full py-2 text-gray-600">
                            <span className="float-left">Total Harga Order:</span>
                            <span className="float-right font-bold">Rp.754.000</span>
                        </div>
                    </div>
                    <div className="overflow-y-auto">
                        <div
                            className="flex flex-wrap py-2 cursor-pointer shadow-xl rounded-md transition duration-300 ease-in-out hover:bg-gray-200 active:bg-gray-300"
                            onClick={e => e.preventDefault()}
                        >
                            <div className="w-9/12 text-center">
                                <p className="text-gray-700 font-semibold">BCA</p>
                                <span className="text-gray-700 font-light">Auto Konfirmasi &bull; Virtual Account</span>
                            </div>
                                <img 
                                    src="https://statik.tempo.co/data/2019/04/23/id_836405/836405_720.jpg"
                                    className="w-2/12 mx-auto"
                                />
                        </div>
                        <div
                            className="flex flex-wrap py-2 my-4 cursor-pointer shadow-xl rounded-md transition duration-300 ease-in-out hover:bg-gray-200 active:bg-gray-300"
                            onClick={e => e.preventDefault()}
                        >
                            <div className="w-9/12 text-center">
                                <p className="text-gray-700 font-semibold">BCA</p>
                                <span className="text-gray-700 font-light">Auto Konfirmasi &bull; Virtual Account</span>
                            </div>
                                <img 
                                    src="https://statik.tempo.co/data/2019/04/23/id_836405/836405_720.jpg"
                                    className="w-2/12 mx-auto"
                                />
                        </div>
                    </div>
                </div>
            </Modal>
        );
    }
}