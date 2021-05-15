import React from 'react';
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import Exit from './../../assets/images/icons/exit.svg';

export default class FilterModal extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            openModal : false
        }
    }
    render(){
        return (
            <Modal
                styles={{modal: { width : '30%',borderRadius : '5%' }}} 
                open={this.props.onOpenFilter} 
                onClose={this.props.onCloseFilter}
                closeIcon={<Exit width={28} height={28} className="hover:bg-gray-200 rounded-full h-8 w-8 flex justify-center transition duration-300 ease-in-out" />}
                center
            >
                <div className="w-full max-w-md py-8 px-1 items-center">
                    <p className="text-gray-800 text-2xl font-semibold">Urutkan Produk Berdasarkan</p>
                    <div className="py-2">
                        <button className="bg-gray-300 p-3 text-gray-800 font-medium rounded-lg transition duration-300 ease-in-out focus:outline-none hover:bg-gray-400 mr-3">Semua</button>
                        <button className="bg-gray-300 p-3 text-gray-800 font-medium rounded-lg transition duration-300 ease-in-out focus:outline-none hover:bg-gray-400">Tersedia</button>
                    </div>
                    <div className="pt-3">
                        <button
                            className="w-full text-left block p-3 text-gray-800 font-medium rounded-lg focus:outline-none hover:bg-gray-100 transition duration-200 ease-in-out"
                        >
                            Unggulan
                        </button>
                        <button
                            className="w-full text-left block p-3 text-gray-800 font-medium rounded-lg focus:outline-none hover:bg-gray-100 transition duration-200 ease-in-out"
                        >
                            Terbaru
                        </button>
                        <button
                            className="w-full text-left block p-3 text-gray-800 font-medium rounded-lg focus:outline-none hover:bg-gray-100 transition duration-200 ease-in-out"
                        >
                            Terlama
                        </button>
                        <button
                            className="w-full text-left block p-3 text-gray-800 font-medium rounded-lg focus:outline-none hover:bg-gray-100 transition duration-200 ease-in-out"
                        >
                            Terpopuler
                        </button>
                        <button
                            className="w-full text-left block p-3 text-gray-800 font-medium rounded-lg focus:outline-none hover:bg-gray-100 transition duration-200 ease-in-out"
                        >
                            Harga Terendah
                        </button>
                        <button
                            className="w-full text-left block p-3 text-gray-800 font-medium rounded-lg focus:outline-none hover:bg-gray-100 transition duration-200 ease-in-out"
                        >
                            Harga Tertinggi
                        </button>
                        <button
                            className="w-full text-left block p-3 text-gray-800 font-medium rounded-lg focus:outline-none hover:bg-gray-100 transition duration-200 ease-in-out"
                        >
                            Nama Produk (A-Z)
                        </button>
                    </div>
                </div>
            </Modal>
        )
    }
}