import React from 'react';
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import Exit from './../../../assets/images/icons/exit.svg';
import Locked from './../../../assets/images/icons/locked.svg';

export default class CreditAndDebit extends React.Component{
    render(){
        return (
            <Modal
                styles={{modal: { maxWidth : '100%',borderRadius : '5%',padding: '0' }}} 
                open={this.props.creditAndDebit}
                onClose={this.props.onCloseCreditAndDebit}
                closeIcon={<Exit width={28} height={28} className="hover:bg-gray-200 rounded-full h-8 w-8 flex justify-center transition duration-300 ease-in-out" />}
                center
            >
                <div className="w-full max-w-md py-4 px-4 items-center">
                    <p className="w-full text-xl font-bold text-gray-800">Kartu Kredit/Debit</p>
                    <div className="overflow-y-auto max-h-96">
                        <div className="py-4">
                            <div className="w-full py-2 text-gray-600">
                                <span className="float-left">Total Harga:</span>
                                <span className="float-right font-bold">Rp.754.000</span>
                            </div>
                            <div className="w-full py-4 text-gray-600">
                                <span className="float-left">Biaya Kartu Kredit/Debit:</span>
                                <span className="float-right font-bold">Rp.2.500</span>
                            </div>
                            <div className="w-full py-2 text-gray-600">
                                <span className="float-left">Total Pembayaran:</span>
                                <span className="float-right font-bold">Rp.756.500</span>
                            </div>
                        </div>
                    </div>
                    <div className="py-4">
                        <div className="block relative bg-gray-100 my-6 border-b-2 w-full focus-within:border-red-500">
                            <input
                                type="text" 
                                id="name" 
                                name="name" 
                                placeholder=" " 
                                className="block w-full appearance-none focus:outline-none bg-gray-100" 
                            />
                            <label for="name" class="absolute top-0 transition duration-300 ease-in-out">Nama Di Kartu</label>
                        </div>
                        <div className="block w-full bg-gray-100 focus:bg-gray-400 py-1">
                            <div className="inline-block relative border-b-2 xl:w-11/12 focus-within:border-red-500">
                                <input
                                    type="text" 
                                    id="name" 
                                    name="name" 
                                    placeholder=" " 
                                    className="block w-full appearance-none focus:outline-none bg-gray-100" 
                                />
                                <label for="name" class="absolute top-0 transition duration-300 ease-in-out">Nomor Kartu</label>
                            </div>
                            <Locked className="inline-block pl-1" width={28} height={28} />
                        </div>
                        <img 
                            src="https://d1ggq58xg1ha0k.cloudfront.net/_nuxt/img/credit_cards.ef76bc8.svg"
                            className="my-4 w-1/3"
                        />
                        <div className="block relative bg-gray-100 my-6 border-b-2 w-full focus-within:border-red-500">
                            <input
                                type="text" 
                                id="name" 
                                name="name" 
                                placeholder=" " 
                                className="block w-full appearance-none focus:outline-none bg-gray-100" 
                            />
                            <label for="name" class="absolute top-0 transition duration-300 ease-in-out">Berlaku Hingga</label>
                        </div>
                        <div className="block w-full py-1">
                            <div className="inline-block relative bg-gray-100 focus:bg-gray-400 xl:w-9/12 border-b-2 w-full focus-within:border-red-500">
                                <input
                                    type="text" 
                                    id="name" 
                                    name="name" 
                                    placeholder=" " 
                                    className="block w-full appearance-none focus:outline-none bg-gray-100" 
                                />
                                <label for="name" class="absolute top-0 transition duration-300 ease-in-out">Kode CVV</label>
                            </div>
                            <img 
                                src="https://d1ggq58xg1ha0k.cloudfront.net/_nuxt/img/credit_card_cvv.9385122.svg"
                                className="inline-block xl:w-2/12 mx-2"
                            />
                        </div>
                        <p className="text-xs my-2">
                            Info pembayaran kamu tersimpan dengan aman.
                            Kami bekerja sama dengan NICEPAY untuk memastikan info kamu terlindungi.Kami tidak dapat mengakses info kartumu.
                        </p>
                        <button
                            className="w-full bg-red-600 text-white py-2 my-2 rounded-md hover:bg-red-700 active:bg-red-800 focus:outline-none transition duration-300 ease-in-out"
                        >
                            Lanjutkan
                        </button>
                    </div>
                </div>
            </Modal>
        );
    }
}