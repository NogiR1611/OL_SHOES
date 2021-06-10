import React from 'react';
import numeral from 'numeral';
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
                closeIcon={<ArrowLeft className="bg-gray-lighter-4 hover:bg-gray-lighter-5 transition duration-300 ease-in-out rounded-full stroke-current stroke-0 focus:outline-none text-black transform scale-100 h-6 w-6 hp-one:h-8 hp-one:w-8 p-1 flex justify-center" />}
                center
            >
                <div className="bg-gray-lighter w-full md:w-480 items-center">
                    <div className="h-9 md:w-480" />
                    <div className="flex justify-center md:hidden">
                        <div className="bg-gray-lighter-6 mx-auto h-1 w-20 absolute top-1 rounded-sm" />
                    </div>
                    <div className="">
                        <p className="w-full font-medium text-black-darker text-sm hp-one:text-base lg:text-lg py-4 px-2 hp-one:px-6">Pilih Bank</p>
                        <div className="flex justify-between w-full px-2 hp-one:px-6 text-black-darker">
                            <span className="float-left text-xs hp-one:text-sm">Total Harga Order:</span>
                            <span className="float-right text-xs hp-one:text-sm font-medium">Rp. {numeral(754000).format('0,0')}</span>
                        </div>
                    </div>
                    <div className="overflow-y-auto px-2 hp-one:px-6 pb-5">
                        <button
                            className="flex flex-nowrap flex-auto px-2 mt-4 h-12 w-full cursor-pointer shadow-xl focus:outline-none rounded-md bg-white hover:bg-gray-lighter-5 active:bg-gray-lighter-3 transition duration-300 ease-in-out"
                            onClick={e => e.preventDefault()}
                        >
                            <div className="flex flex-col flex-auto flex-nowrap justify-center self-center text-center">
                                <p className="text-black-darker text-xs hp-one:text-sm lg:text-lg font-medium leading-none">BCA</p>
                                <span className="text-gray-lighter-1 text-tiny hp-one:text-sm lg:text-lg leading-none">Auto Konfirmasi &bull; Virtual Account</span>
                            </div>
                            <div className="flex flex-none self-center">
                                <img 
                                    src="https://statik.tempo.co/data/2019/04/23/id_836405/836405_720.jpg"
                                    className="self-center w-6 h-6 hp-one:w-8 hp-one:h-8 md:w-12 md:h-12"
                                />
                            </div>
                        </button>
                        <button
                            className="flex flex-nowrap flex-auto px-2 mt-4 h-12 w-full cursor-pointer shadow-xl focus:outline-none rounded-md bg-white hover:bg-gray-lighter-5 active:bg-gray-lighter-3 transition duration-300 ease-in-out"
                            onClick={e => e.preventDefault()}
                        >
                            <div className="flex flex-col flex-auto flex-nowrap justify-center self-center text-center">
                                <p className="text-black-darker text-xs hp-one:text-sm lg:text-lg font-medium leading-none">BCA</p>
                                <span className="text-gray-lighter-1 text-tiny hp-one:text-sm lg:text-lg leading-none">Auto Konfirmasi &bull; Virtual Account</span>
                            </div>
                            <div className="flex flex-none self-center">
                                <img 
                                    src="https://statik.tempo.co/data/2019/04/23/id_836405/836405_720.jpg"
                                    className="self-center w-6 h-6 hp-one:w-8 hp-one:h-8 md:w-12 md:h-12"
                                />
                            </div>
                        </button>
                    </div>
                </div>
            </Modal>
        );
    }
}