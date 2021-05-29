import React from 'react';
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import ArrowLeft from './../../assets/images/icons/arrowLeft.svg';

export default class AmountModal extends React.Component{
    render(){
        return (
            <Modal
                styles={{modal: { maxWidth:'100%',borderRadius : '10px' }}}
                open={this.props.onOpenAmount}
                onClose={this.props.onCloseAmount}
                closeIcon={<ArrowLeft className="bg-gray-lighter-4 hover:bg-gray-lighter-4 rounded-full stroke-current stroke-0 focus:outline-none text-black transform scale-100 h-8 w-8 p-1 flex justify-center duration-300" />}
                center
            >
                <div className="bg-gray-lighter w-full md:w-480 items-center">
                    <div className="flex justify-center md:hidden">
                        <div className="bg-gray-lighter-6 mx-auto h-1 w-20 absolute top-1 rounded-sm" />
                    </div>
                    <div className="w-full pt-10">
                        <p className="text-xl text-black-darker pt-4 px-6 font-medium">PILIH SIZE/UKURAN :</p>
                        <div className="px-6 pb-5">
                            <button
                                onClick={this.props.onClickStock}
                                className="h-12 w-full flex-column text-center text-sm rounded-md shadow-md bg-white mt-4 focus:outline-none"
                            >
                                <p className="text-darker-1 text-sm font-medium">1</p>
                                <p className="text-darker-1 text-sm font-medium">Ada Stok</p>
                            </button>
                            <button
                                onClick={this.props.onClickStock}
                                className="h-12 w-full flex-column text-center text-sm rounded-md shadow-md bg-white mt-4 focus:outline-none"
                            >
                                <p className="text-darker-1 text-sm font-medium">2</p>
                                <p className="text-darker-1 text-sm font-medium">Ada Stok</p>
                            </button>
                            <button
                                onClick={this.props.onClickStock}
                                className="h-12 w-full flex-column text-center text-sm rounded-md shadow-md bg-white mt-4 focus:outline-none"
                            >
                                <p className="text-darker-1 text-sm font-medium">3</p>
                                <p className="text-darker-1 text-sm font-medium">Ada Stok</p>
                            </button>
                            <button
                                onClick={this.props.onClickStock}
                                className="h-12 w-full flex-column text-center text-sm rounded-md shadow-md bg-white mt-4 focus:outline-none"
                            >
                                <p className="text-darker-1 text-sm font-medium">4</p>
                                <p className="text-darker-1 text-sm font-medium">Ada Stok</p>
                            </button>
                            <button
                                onClick={this.props.onClickStock}
                                disabled="disabled"
                                className="h-12 w-full bg-gray-lighter-5 flex-column text-center text-sm rounded-md bg-white mt-4 focus:outline-none"
                            >
                                <p className="text-darker-1 text-sm font-medium">5</p>
                                <p className="text-red-darker-1 text-sm font-medium">Stok Kosong</p>
                            </button>
                            <button
                                onClick={this.props.onClickStock}
                                disabled="disabled"
                                className="h-12 w-full bg-gray-lighter-5 flex-column text-center text-sm rounded-md bg-white mt-4 focus:outline-none"
                            >
                                <p className="text-black-darker text-sm font-medium">+Lebih</p>
                            </button>
                            <button
                                onClick={this.props.onClickStock}
                                disabled="disabled"
                                className="h-12 w-full bg-gray-lighter flex-column text-center text-sm rounded-md bg-white mt-4 focus:outline-none"
                            >
                                <p className="text-red-darker-1 text-sm font-medium">Beri tahu saya jika produk tersedia kembali</p>
                            </button>
                        </div>
                    </div>
                </div>
            </Modal>
        );
    }
}