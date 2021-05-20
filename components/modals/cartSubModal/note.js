import React from 'react';
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import Exit from './../../../assets/images/icons/exit.svg';

export default class Note extends React.Component{
    render(){
        return (
            <Modal
                styles={{modal: { width : '33%',borderRadius : '10px' }}}
                open={this.props.note}
                onClose={this.props.onCloseNote}
                closeIcon={<Exit width={28} height={28} className="hover:bg-gray-200 rounded-full h-8 w-8 flex justify-center transition duration-300 ease-in-out" />}
            >
                <div className="px-4">
                    <div className="w-full py-1 items-center">
                    <p className="text-lg text-gray-800 font-bold my-2">Tambahkan Catatan</p>
                        <label className="text-gray-600 font-semibold focus:text-red-600 my-4" htmlFor="note">Catatan Produk untuk OL SHOES</label>
                        <input
                            className="block w-full duration-400 my-4 rounded-md bg-gray-100 border-b-2 border-gray-400 px-2 mr-4 outline-none focus:border-2 border-red-600"
                            type="text"
                            name="note"
                            id="note"
                            placeholder="Contoh : Tolong Bungkus dengan Tebal"
                        />
                        <label className="text-gray-600 font-semibold focus:text-red-600 my-4" htmlFor="note">Catatan Penigiriman untuk Driver(Optional)</label>
                        <input
                            className="block w-full duration-400 my-4 rounded-md bg-gray-100 border-b-2 border-gray-400 px-2 mr-4 outline-none focus:border-2 border-red-600"
                            type="text"
                            name="note"
                            id="note"
                            placeholder="Contoh : Taruh Paket Didepan Pintu"
                        />
                    </div>
                    <button
                        onClick={this.props.onCloseNote}
                        className="float-right inline-block p-2 text-center font-bold bg-red-600 text-gray-100 rounded-md hover:bg-red-700 transition duration-300 ease-in-out focus:outline-none"
                    >
                        Oke
                    </button>
                </div>
            </Modal>
        )
    }
}