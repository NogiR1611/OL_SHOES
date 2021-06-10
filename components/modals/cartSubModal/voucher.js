import React from 'react';
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import ArrowLeft from './../../../assets/images/icons/arrowLeft.svg';

export default class Voucher extends React.Component{
    render(){
        return (
        <>
            <Modal
                styles={{modal: { maxWidth : '100%',borderRadius : '10px' }}}
                open={this.props.voucherOne}
                onClose={this.props.onCloseVoucherOne}
                closeIcon={<ArrowLeft className="bg-gray-lighter-4 hover:bg-gray-lighter-5 transition duration-300 ease-in-out rounded-full stroke-current stroke-0 focus:outline-none text-black transform scale-100 h-6 w-6 hp-one:h-8 hp-one:w-8 p-1 flex justify-center" />}
                center
            >
                <div className="bg-gray-lighter w-full md:w-480 h-full items-center px-3 pb-2 hp-one:px-6 hp-one:pb-5 overflow-x-hidden">   
                    <div className="h-9 md:w-480" />
                    <div className="flex justify-center md:hidden">
                        <div className="bg-gray-lighter-6 mx-auto h-1 w-20 absolute top-1 rounded-sm" />
                    </div>
                    <div className="">
                        <p className="text-base hp-one:text-xl text-black-darker font-medium my-4">Voucher Saya ()</p>
                        <p className="text-xs hp-one:text-sm md:text-base text-black-darker mb-6">
                            Hanya 2 voucher (1 untuk pengiriman dan 1 untuk produk) yang dapat diaplikasikan per order.
                        </p>
                    </div>
                    <button
                        onClick={this.props.changeVoucherTwo}
                        className="w-full text-black-darker h-8 hp-one:h-12 my-2 bg-gray-lighter-4 hover:bg-gray-300 active:bg-gray-400 flex justify-center font-medium transition duration-300 ease-in-out rounded-lg focus:outline-none"
                    >
                        <span className="self-center text-xs hp-one:text-sm">+ Aplikasi Kode Voucher</span>
                    </button>
                </div>
            </Modal>
            <Modal
                styles={{modal: { maxWidth : '100%',borderRadius : '10px' }}}
                open={this.props.voucherTwo}
                onClose={this.props.onCloseVoucherTwo}
                closeIcon={<ArrowLeft className="bg-gray-lighter-4 rounded-full flex justify-center transition duration-300 ease-in-out h-6 w-6 hp-one:h-8 hp-one:w-8" />}
                center
            >
                <div className="bg-gray-lighter w-full md:w-480 h-full items-center px-6 pb-5 overflow-x-hidden">
                    <div className="flex justify-center md:hidden">
                        <div className="bg-gray-lighter-6 mx-auto h-1 w-20 absolute top-1 rounded-sm" />
                    </div>
                    <div className="h-9 w-full md:w-480" />
                    <p className="text-sm hp-one:text-xl text-black-darker py-4 font-bold">
                        Aplikasikan Kode Voucher
                    </p>
                    <div className="block relative bg-gray-lighter-7 border-b-2 w-full border-gray-lighter-9 focus-within:border-red-darker-1 rounded-t-lg">
                        <input
                            type="text" 
                            id="voucher" 
                            name="voucher" 
                            placeholder=" " 
                            className="block w-full appearance-none focus:outline-none pt-4 pl-3 bg-transparent" 
                        />
                        <label for="voucher" class="absolute top-3 transition duration-300 ease-in-out text-gray-lighter-3  text-xs hp-one:text-sm lg:text-base font-medium">Kode Voucher</label>
                    </div>
                    <button
                        className="w-full p-2 mt-6 text-center text-xs hp-one:text-sm h-8 hp-one:h-12 font-bold bg-red-darker-1 text-white rounded-md hover:opacity-90 active:bg-opacity-50 active:bg-red-darker-1 transition duration-300 ease-in-out focus:outline-none"
                    >
                        Aplikasikan
                    </button>
                    <button
                        onClick={this.props.onCloseVoucherTwo}
                        className="w-full p-2 text-black-darker text-xs hp-one:text-sm h-8 hp-one:h-12 mt-2 bg-gray-lighter-4 hover:bg-gray-lighter-5 active:bg-gray-lighter-3 transition duration-300 ease-in-out font-bold rounded-lg focus:outline-none"
                    >
                        Batal
                    </button>
                </div>
            </Modal>
        </>
        )
    }
}