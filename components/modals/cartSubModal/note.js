import React from 'react';
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import ArrowLeft from './../../../assets/images/icons/arrowLeft.svg';

export default class Note extends React.Component{
    render(){
        return (
            <Modal
                styles={{modal: { width : '33%',maxHeight:'100%',borderRadius : '10px' }}}
                open={this.props.note}
                onClose={this.props.onCloseNote}
                showCloseIcon={false}
                center
            >
                <div className="bg-gray-lighter w-full md:w-480 h-full items-center px-6 pb-5">
                    <div className="md:h-9 md:w-480" />
                    <p className="text-lg text-gray-800 font-bold my-2">Tambahkan Catatan</p>
                    <label className="text-gray-600 font-semibold focus:text-red-darker-1 my-4" htmlFor="note">Catatan Produk untuk OL SHOES</label>
                    <input
                        className="block w-full transition duration-400 ease-in-out my-4 rounded-t-md bg-gray-100 border-b-2 border-gray-400 px-2 mr-4 outline-none focus:border-2 border-red-darker-1"
                        type="text"
                        name="note"
                        id="note"
                        placeholder="Contoh : Tolong Bungkus dengan Tebal"
                    />
                    <label className="text-gray-600 font-semibold focus:text-red- my-4" htmlFor="note">Catatan Pengiriman untuk Driver(Optional)</label>
                    <input
                        className="block w-full duration-400 my-4 rounded-t-md bg-gray-100 border-b-2 border-gray-400 px-2 mr-4 outline-none focus:border-2 border-red-darker-1"
                        type="text"
                        name="note"
                        id="note"
                        placeholder="Contoh : Taruh Paket Didepan Pintu"
                    />
                    <button
                        onClick={this.props.onCloseNote}
                        className="float-right inline-block p-2 text-center font-bold bg-red-darker-1 text-gray-100 rounded-md hover:opacity-90 active:bg-opacity-50 active:bg-red-darker-1 transition duration-300 ease-in-out focus:outline-none"
                    >
                        Oke
                    </button>
                </div>
            </Modal>
        )
    }
}