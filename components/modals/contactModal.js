import React from 'react';
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import Whatsapp from './../../assets/images/icons/whatsapp.svg';
import SMS from './../../assets/images/icons/sms.svg';
import ArrowLeft from './../../assets/images/icons/arrowLeft.svg';

export default class ContactModal extends React.Component{
    render(){
        return (
            <Modal
                styles={{modal: { maxWidth : '100%',borderRadius : '5%',padding: '0' }}} 
                open={this.props.onOpenContact} 
                onClose={this.props.onCloseContact}
                closeIcon={<ArrowLeft className="bg-gray-lighter-4 hover:bg-gray-lighter-5 transition duration-300 ease-in-out rounded-full stroke-current stroke-0 focus:outline-none text-black transform scale-100 h-8 w-8 p-1 flex justify-center" />}
                center
            >
                <div className="bg-gray-lighter w-full md:w-480 items-center">
                    <div className="md:h-9 md:w-480" />
                    <p className="text-xl text-black-darker font-semibold py-4 px-6">Login dengan Nomor HP</p>
                    <div className="px-6 pb-5">
                        <p className="text-black-darker pb-4">Dapatkan layanan VIP!</p>
                        <div className="flex flex-col">
                            <div className="flex flex-auto">
                                <div className="block relative bg-gray-lighter-7 border-b-2 w-full border-gray-lighter-9 focus-within:border-red-darker-1 rounded-t-lg">
                                    <input
                                        type="text" 
                                        id="number" 
                                        name="number" 
                                        placeholder=" " 
                                        className="block w-full appearance-none focus:outline-none pt-4 pl-4 bg-transparent" 
                                    />
                                    <label for="number" class="absolute top-3 transition duration-300 ease-in-out text-gray-lighter-3 font-medium">Nomor HP Kamu*</label>
                                </div>
                            </div>
                            <div className="flex flex-grow px-3 pb-2">
                            </div>
                        </div>
                        <div className="py-2">
                            <p className="mb-2 text-black-darker text-center">Pilih cara untuk mendapatkan kode verifikasi</p>
                            <button
                                className="text-sm bg-red-darker-1 shadow-md h-12 px-5 transition duration-500 ease-in-out hover:opacity-90 active:bg-opacity-50 active:bg-red-darker-1 focus:outline-none font-semibold text-white rounded-md w-full p-2"
                            >
                                <Whatsapp 
                                    width={24}
                                    height={24}
                                    className="float-left stroke-current stroke-0 text-white"
                                    fill="white"
                                />
                                Kirim Ke Whatsapp
                            </button>
                            <button
                                className="bg-white text-sm shadow-md h-12 transition duration-400 ease-in-out border-1 border-black focus:outline-none hover:bg-gray-lighter active:bg-gray-lighter-5 font-semibold text-black-darker-1 rounded-md px-5 mt-3 w-full"
                            >
                                <SMS 
                                    width={24}
                                    height={24}
                                    className="float-left stroke-current stroke-0 text-black"
                                    fill="black"
                                />
                                Kirim ke SMS
                            </button>
                        </div>
                    </div>
                </div>
            </Modal>
        );
    }
}
