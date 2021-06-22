import React from 'react';
import { Modal } from 'react-responsive-modal';
import Checkmark from './../../../assets/images/icons/checkmark2.svg';
import ArrowLeft from './../../../assets/images/icons/arrowLeft.svg';

export default class OptionAddress extends React.Component{
    render(){
        return (
            <Modal
                styles={{modal: { maxWidth : '100%',borderRadius : '10px' }}}
                open={this.props.openListAddress}
                onClose={this.props.onCloseListAddress}
                closeIcon={<ArrowLeft className="bg-gray-lighter-4 rounded-full flex justify-center transition duration-300 ease-in-out h-6 w-6 hp-one:h-8 hp-one:w-8" />}
                center
            >
                <div className="bg-gray-lighter w-full md:w-480 h-full items-center">
                    <div className="h-9 md:w-480" />
                    <div className="flex justify-center md:hidden">
                        <div className="bg-gray-lighter-6 mx-auto h-1 w-20 absolute top-1 rounded-sm" />
                    </div>
                    <p className="px-2 hp-one:px-6 mt-2 text-sm hp-one:text-xl text-black-darker font-semibold">
                        Pilihan alamat pengiriman
                    </p>
                    <div className="p-4">
                        <div className="flex flex-nowrap flex-auto cursor-pointer">
                            <div className="flex flex-none">
                                <Checkmark className="self-center h-4 w-4 hp-one:h-6 hp-one:w-6 self-center stroke-current stroke-0 text-red-darker-1 mr-2" />
                            </div>
                            <div className="flex flex-auto flex-col text-xs hp-one:text-sm md:text-base">
                                <p className="text-black-darker font-bold">fff</p>
                                <p className="text-black-darker">dede</p>
                                <p className="text-black-darker">Bangli,Kintamani,Indonesia</p>
                                <p className="text-black-darker">085318909969</p>
                                <p className="text-black-darker">nogir16111998@gmail.com</p>
                            </div>
                        </div>
                        <div className="mt-2">
                            <button
                                onClick={this.props.onCloseListAddress}
                                className="w-full px-5 mb-2 h-8 hp-one:h-12 shadow-md font-semibold text-center text-xs hp-one:text-sm bg-red-darker-1 hover:opacity-90 active:bg-opacity-50 active:bg-red-darker-1 focus:outline-none transition duration-300 linear text-white rounded-md"
                            >
                                Kirim ke alamat ini
                            </button>
                            <div className="flex flex-nowrap flex-auto h-8">
                                <button
                                    onClick={this.changeAddress}
                                    className="rounded-lg w-1/2 text-black-darker text-center px-3 text-xs hp-one:text-sm bg-gray-lighter-4 focus:outline-none hover:bg-gray-lighter-5 active:bg-gray-lighter-3 transition duration-300 ease-in-out"
                                >
                                    Ubah
                                </button>
                                <button
                                    className="rounded-lg w-1/2 ml-2 text-black-darker text-center px-3 text-xs hp-one:text-sm bg-gray-lighter-8 focus:outline-none hover:bg-gray-lighter-5 active:bg-gray-lighter-3 transition duration-300 ease-in-out"
                                >
                                    Hapus
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="px-4 pb-4 pt-6">
                        <button
                            onClick={this.props.addNewAddress}
                            className="flex w-full px-2 mt-2 h-8 bg-gray-lighter-4 shadow-md font-medium text-black-darker text-xs hp-one:text-sm text-center focus:outline-none hover:bg-gray-lighter-5 active:bg-gray-lighter-3 transition duration-300 ease-in-out rounded-md"
                        >
                            <span className="mx-auto self-center">Tambah alamat pengiriman baru</span>
                        </button>
                    </div>
                </div>
            </Modal>
        );
    }
}