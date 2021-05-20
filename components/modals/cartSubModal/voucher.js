import React from 'react';
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import Exit from './../../../assets/images/icons/exit.svg';

export default class Voucher extends React.Component{
    render(){
        return (
        <>
            <Modal
                styles={{modal: { width : '33%',borderRadius : '10px' }}}
                open={this.props.voucherOne}
                onClose={this.props.onCloseVoucherOne}
                closeIcon={<Exit width={28} height={28} className="hover:bg-gray-200 rounded-full h-8 w-8 flex justify-center transition duration-300 ease-in-out" />}
                center
            >
                <div className="w-full p-4">
                    <div className="">
                        <p className="text-xl text-gray-800 font-bold my-4">Voucher Saya ()</p>
                        <p className="text-base text-gray-500 my-2">
                            Hanya 2 voucher (1 untuk pengiriman dan 1 untuk produk) yang dapat diaplikasikan per order.
                        </p>
                    </div>
                    <button
                        onClick={this.props.changeVoucherTwo}
                        className="w-full text-gray-500 my-2 bg-gray-200 hover:bg-gray-300 active:bg-gray-400 p-2 font-bold text-base transition duration-300 ease-in-out rounded-lg focus:outline-none"
                    >
                        + Aplikasi Kode Voucher
                    </button>
                </div>
            </Modal>
            <Modal
                styles={{modal: { width : '33%',borderRadius : '10px' }}}
                open={this.props.voucherTwo}
                onClose={this.props.onCloseVoucherTwo}
                closeIcon={<Exit width={28} height={28} className="hover:bg-gray-200 rounded-full h-8 w-8 flex justify-center transition duration-300 ease-in-out" />}
                center
            >
                <div className="w-full p-4">
                    <p
                        className="text-xl text-gray-600 font-bold my-4"
                    >
                        Aplikasikan Kode Voucher
                    </p>
                    <input
                        className="block w-full duration-400 my-4 rounded-md bg-gray-100 border-b-2 border-gray-400 px-4 outline-none focus:border-2 border-red-600"
                        type="text"
                        name=""
                        id=""
                        placeholder="Kode Voucher"
                    />
                    <button
                        className="w-full p-2 text-center font-bold bg-red-600 text-gray-100 rounded-md hover:bg-red-700 active:bg-red-800 transition duration-300 ease-in-out focus:outline-none"
                    >
                        Aplikasikan
                    </button>
                    <button
                        onClick={this.props.onCloseVoucherTwo}
                        className="w-full p-2 text-gray-500 my-2 bg-gray-200 hover:bg-gray-300 active:bg-gray-400 font-bold text-base transition duration-300 ease-in-out rounded-lg focus:outline-none"
                    >
                        Batal
                    </button>
                </div>
            </Modal>
        </>
        )
    }
}