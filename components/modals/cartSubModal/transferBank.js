import React from 'react';
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import ArrowLeft from './../../../assets/images/icons/arrowLeft.svg';

export default class TransferBank extends React.Component{
    render(){
        return (
            <Modal
                styles={{modal: { maxWidth : '100%',borderRadius : '5%',padding: '0' }}} 
                open={this.props.transferBank}
                onClose={this.props.onCloseTransferBank}
                closeIcon={<ArrowLeft className="bg-gray-lighter-4 hover:bg-gray-lighter-5 transition duration-300 ease-in-out rounded-full stroke-current stroke-0 focus:outline-none text-black transform scale-100 h-8 w-8 p-1 flex justify-center" />}
                center
            >
                <div className="bg-gray-lighter w-full md:w-480 items-center">
                    <div className="md:h-9 md:w-480" />
                    <div className="">
                        <p className="w-full font-medium text-black-darker text-xl py-4 px-6">Pilih Bank</p>
                        <div className="flex justify-between w-full px-6 text-black-darker">
                            <span className="float-left text-sm">Total Harga Order:</span>
                            <span className="float-right font-medium">Rp.754.000</span>
                        </div>
                    </div>
                    <div className="overflow-y-auto px-6 pb-5">
                        <button
                            className="flex flex-wrap px-5 mt-4 h-12 w-full cursor-pointer shadow-xl focus:outline-none rounded-md bg-white hover:bg-gray-lighter-5 active:bg-gray-lighter-3 transition duration-300 ease-in-out"
                            onClick={e => e.preventDefault()}
                        >
                            <div className="flex flex-col flex-auto flex-nowrap justify-center self-center text-center">
                                <p className="text-black-darker font-sm font-medium leading-none">BCA</p>
                                <span className="text-gray-lighter-1 font-sm leading-none">Auto Konfirmasi &bull; Virtual Account</span>
                            </div>
                            <img 
                                src="https://statik.tempo.co/data/2019/04/23/id_836405/836405_720.jpg"
                                className="self-center h-10 w-10"
                            />
                        </button>
                        <button
                            className="flex flex-wrap px-5 mt-4 h-12 w-full cursor-pointer shadow-xl focus:outline-none rounded-md bg-white hover:bg-gray-lighter-5 active:bg-gray-lighter-3 transition duration-300 ease-in-out"
                            onClick={e => e.preventDefault()}
                        >
                            <div className="flex flex-col flex-auto flex-nowrap justify-center self-center text-center">
                                <p className="text-black-darker font-sm font-medium leading-none">BCA</p>
                                <span className="text-gray-lighter-1 font-sm leading-none">Auto Konfirmasi &bull; Virtual Account</span>
                            </div>
                            <img 
                                src="https://statik.tempo.co/data/2019/04/23/id_836405/836405_720.jpg"
                                className="self-center h-10 w-10"
                            />
                        </button>
                    </div>
                </div>
            </Modal>
        );
    }
}