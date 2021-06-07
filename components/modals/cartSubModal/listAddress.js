import React from 'react';
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import Checkmark from './../../../assets/images/icons/checkmark2.svg';
import ArrowLeft from './../../../assets/images/icons/arrowLeft.svg';

export default class ListAddress extends React.Component{
    constructor(props){
        super(props)
        this.state = {

        }
    }
    render(){
        return (
            <Modal
                styles={{modal: { maxWidth : '100%',borderRadius : '10px' }}}
                open={this.props.openAddressSaved}
                onClose={this.props.onCloseAddressSaved}
                closeIcon={<ArrowLeft className="bg-gray-lighter-4 hover:bg-gray-lighter-5 transition duration-300 ease-in-out rounded-full stroke-current stroke-0 focus:outline-none text-black transform scale-100 h-8 w-8 p-1 flex justify-center" />}
                center
            >
                <div className="bg-gray-lighter w-full md:w-480 h-full items-center">
                    <div className="md:h-9 md:w-480" />
                    <div className="flex justify-center md:hidden">
                        <div className="bg-gray-lighter-6 mx-auto h-1 w-20 absolute top-1 rounded-sm" />
                    </div>
                    <p className="px-6 py-4 text-xl text-black-darker font-semibold">
                        Informasi Pengiriman
                    </p>
                    <div className="pb-5 px-6">
                        <div className="flex flex-nowrap flex-auto cursor-pointer">
                            <div className="flex flex-none">
                                <Checkmark className="self-center w-6 h-6 self-center stroke-current stroke-0    text-red-darker-1 mr-2" />
                            </div>
                            <div className="flex flex-auto flex-col">
                                <p className="text-black-darker font-bold">fff</p>
                                <p className="text-black-darker">dede</p>
                                <p className="text-black-darker">Bangli,Kintamani,Indonesia</p>
                                <p className="text-black-darker">085318909969</p>
                                <p className="text-black-darker">nogir16111998@gmail.com</p>
                            </div>
                        </div>
                        <button
                            onClick={this.props.openOptionAddress}
                            className="flex w-full px-2 mt-2 h-8 bg-gray-lighter-4 shadow-md font-medium text-black-darker text-sm text-center focus:outline-none hover:bg-gray-lighter-5 active:bg-gray-lighter-3 transition duration-300 ease-in-out rounded-md"
                        >
                            <span className="mx-auto self-center">Ganti alamat pengiriman</span>
                        </button>
                        <p className="text-black-darker mt-6">
                            Saya sudah membaca dan menyetujui<span> </span>
                                <a 
                                    target="_blank"  
                                    href='/terms-and-conditions'
                                    rel="noopener noreferrer"
                                >
                                    <span className="text-red-darker-1 underline">Syarat & Ketentuan</span>
                                </a>
                        </p>
                        <button
                            className="w-full px-5 mt-4 h-12 shadow-md font-semibold text-center text-sm bg-red-darker-1 hover:opacity-90 active:bg-opacity-50 active:bg-red-darker-1 focus:outline-none transition duration-300 linear text-white rounded-md"
                        >
                            Setuju & Lanjutkan
                        </button>
                    </div>
                </div>
            </Modal>
        );
    }
}