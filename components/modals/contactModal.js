import React from 'react';
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import Whatsapp from './../../assets/images/icons/whatsapp.svg';
import SMS from './../../assets/images/icons/sms.svg';
import Exit from './../../assets/images/icons/exit.svg';

export default class ContactModal extends React.Component{
    render(){
        return (
            <Modal
                styles={{modal: { maxWidth : '100%',borderRadius : '5%',padding: '0' }}} 
                open={this.props.onOpenContact} 
                onClose={this.props.onCloseContact}
                closeIcon={<Exit width={28} height={28} className="hover:bg-gray-200 rounded-full h-8 w-8 flex justify-center duration-300" />}
                center
            >
                <div className="w-full max-w-2xl py-4 px-4 items-center">
                    <div className="py-4">
                        <p className="text-xl text-gray-700 font-semibold py-2">Login dengan Nomor HP</p>
                        <p className="text-lg text-gray-700">Dapatkan layanan VIP!</p>
                    </div>
                    <div className="">
                        <label className="text-gray-600 focus:text-red-600" htmlFor="number">Nomor HP</label>
                        <input
                            className="w-full block transition duration-400 ease-in-out rounded-md bg-gray-100 pt-2 border-b-2 border-gray-400 outline-none focus:border-red-600"
                            type="text"
                            name="number"
                            id="number" 
                        />
                    </div>
                    <div className="py-2">
                        <p className="px-4 py-2 text-gray-700">Pilih cara untuk mendapatkan kode verifikasi</p>
                        <button
                            className="text-sm bg-red-600 transition duration-400 ease-in-out hover:bg-red-700 active:bg-red-800 focus:outline-none font-semibold text-white rounded-md w-full my-2 p-2"
                        >
                            <Whatsapp 
                                width={20}
                                height={20}
                                className="float-left stroke-current stroke-1 text-white"
                                fill="white"
                            />
                            Kirim Ke Whatsapp
                        </button>
                        <button
                            className="text-sm shadow-xl transition duration-400 ease-in-out border-1 border-black focus:outline-none hover:bg-gray-200 active:bg-gray-300 font-semibold text-gray-800 rounded-md my-2 p-2 w-full"
                        >
                            <SMS 
                                width={20}
                                height={20}
                                className="float-left stroke-current stroke-1 text-black"
                                fill="black"
                            />
                            Kirim ke SMS
                        </button>
                    </div>
                </div>
            </Modal>
        );
    }
}
