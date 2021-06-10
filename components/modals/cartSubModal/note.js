import React from 'react';
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';

export default class Note extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            placeholderOne: 'Catatan Produk untuk OL SHOES',
            placeholderTwo: 'Catatan Pengiriman untuk Driver(Optional)'
        }
    }
    render(){
        return (
            <Modal
                styles={{modal: { maxWidth : '100%',borderRadius : '10px' }}}
                open={this.props.note}
                onClose={this.props.onCloseNote}
                showCloseIcon={false}
                center
            >
                <div className="bg-gray-lighter w-full md:w-480 h-full items-center">
                    <p className="text-sm hp-one:text-lg text-gray-800 font-bold pt-4 pb-2 px-6">Tambahkan Catatan</p>
                    <div className="px-2 hp-one:px-6 pb-5">
                        <div className="flex flex-col">
                            <label for="note_olshoes" class="text-black-darker text-xs hp-one:text-sm font-medium">Catatan Produk untuk OL SHOES</label>
                            <div className="flex flex-auto">
                                <div className="block relative bg-gray-lighter-7 border-b-2 w-full border-gray-lighter-9 transition duration-300 ease-in-out focus-within:border-red-darker-1 rounded-t-lg">
                                    <input
                                        type="text"  
                                        id="note_olshoes" 
                                        name="note_olshoes" 
                                        placeholder={this.state.placeholderOne}
                                        onFocus={() => this.setState({ placeholderOne: 'Contoh : Tolong Bungkus dengan Tebal' })}
                                        onBlur={() => this.setState({ placeholderOne: 'Catatan Produk untuk OL SHOES' })}
                                        className="block w-full appearance-none focus:outline-none text-xs hp-one:text-sm md:text-base pt-4 pl-2 hp-one:pl-4 bg-transparent" 
                                    />
                                </div>
                            </div>
                            <div className="flex flex-grow px-3 pb-2 mt-2">
                            </div>
                        </div>
                        <div className="flex flex-col">
                            <label for="note_driver" class="text-black-darker text-xs hp-one:text-sm font-medium">Catatan Pengiriman untuk Driver(Opsional)</label>
                            <div className="flex flex-auto">
                                <div className="block relative bg-gray-lighter-7 border-b-2 w-full border-gray-lighter-9 transition duration-300 ease-in-out focus-within:border-red-darker-1 rounded-t-lg">
                                    <input
                                        type="text" 
                                        id="note_driver" 
                                        name="note_driver" 
                                        placeholder='Contoh : Taruh Paket Didepan Pintu'
                                        className="block w-full appearance-none focus:outline-none text-xs hp-one:text-sm md:text-base pt-4 pl-2 hp-one:pl-4 bg-transparent" 
                                    />
                                </div>
                            </div>
                            <div className="flex flex-grow px-3 pb-2 mt-2">
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-end py-2 px-4">
                        <button
                            onClick={this.props.onCloseNote}
                            className="px-2 h-8 hp-one:h-12 text-center w-20 text-black-darker text-xs hp-one:text-sm font-medium rounded-md focus:outline-none"
                        >
                            Tutup
                        </button>
                        <button
                            onClick={this.props.onCloseNote}
                            className="px-2 ml-2 h-8 hp-one:h-12 text-center w-20 font-medium bg-red-darker-1 text-xs hp-one:text-sm text-white rounded-md hover:opacity-90 active:bg-opacity-50 active:bg-red-darker-1 transition duration-300 ease-in-out focus:outline-none"
                        >
                            Oke
                        </button>
                    </div>
                </div>
            </Modal>
        )
    }
}