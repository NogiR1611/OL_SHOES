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
                closeIcon={<ArrowLeft className="bg-gray-lighter-4 hover:bg-gray-lighter-5 transition duration-300 ease-in-out rounded-full stroke-current stroke-0 focus:outline-none text-black transform scale-100 h-8 w-8 p-1 flex justify-center" />}
                center
            >
                <div className="bg-gray-lighter w-full md:w-480 items-center">
                    <div className="flex justify-center md:hidden">
                        <div className="bg-gray-lighter-6 mx-auto h-1 w-20 absolute top-1 rounded-sm" />
                    </div>
                    <div className="w-full pt-10">
                        <p className="text-xl text-black-darker pt-4 px-6 font-medium">Pilih Jumlah :</p>
                        <div className="px-6 pb-5">
                            <button
                                onClick={this.props.arraySize[0] === 1 ? () => this.props.onClickStock(1) : e => e.preventDefault()}
                                className={
                                    "h-12 w-full flex-column text-center text-sm rounded-md mt-4 pointer-events-auto focus:outline-none " +
                                    (this.props.arraySize[0] === 1 ? "shadow-md bg-white" : "bg-gray-lighter-5")
                                }
                            >
                                <p className="text-black-darker-1 text-sm font-medium">1</p>
                                <p className="text-black-darker-1 text-sm font-medium">
                                    {this.props.arraySize[0] === 1 ? "Stok ada" : "Stok kosong"}
                                </p>
                            </button>
                            <button
                                onClick={this.props.arraySize[1] === 2 ? () => this.props.onClickStock(2) : e => e.preventDefault()}
                                className={
                                    "h-12 w-full flex-column text-center text-sm rounded-md mt-4 focus:outline-none " +
                                    (this.props.arraySize[1] === 2 ? "shadow-md bg-white" : "bg-gray-lighter-5")
                                }
                            >
                                <p className="text-black-darker-1 text-sm font-medium">2</p>
                                <p className="text-black-darker-1 text-sm font-medium">
                                    {this.props.arraySize[1] === 2 ? "Stok ada" : "Stok kosong"}
                                </p>
                            </button>
                            <button
                                onClick={this.props.arraySize[2] === 3 ? () => this.props.onClickStock(3) : e => e.preventDefault()}
                                className={
                                    "h-12 w-full flex-column text-center text-sm rounded-md mt-4 focus:outline-none " +
                                    (this.props.arraySize[2] === 3 ? "shadow-md bg-white" : "bg-gray-lighter-5")
                                }
                            >
                                <p className="text-black-darker-1 text-sm font-medium">3</p>
                                <p className="text-black-darker-1 text-sm font-medium">
                                    {this.props.arraySize[2] === 3 ? "Stok ada" : "Stok kosong"}
                                </p>
                            </button>
                            <button
                                onClick={this.props.arraySize[3] === 4 ? () => this.props.onClickStock(4) : e => e.preventDefault()}
                                className={
                                    "h-12 w-full flex-column text-center text-sm rounded-md mt-4 focus:outline-none " +
                                    (this.props.arraySize[3] === 4 ? "shadow-md bg-white" : "bg-gray-lighter-5")
                                }
                            >
                                <p className="text-black-darker-1 text-sm font-medium">4</p>
                                <p className="text-black-darker-1 text-sm font-medium">
                                    {this.props.arraySize[3] === 4 ? "Stok ada" : "Stok kosong"}
                                </p>
                            </button>
                            <button
                                onClick={this.props.arraySize[4] === 5 ? () => this.props.onClickStock(5) : e => e.preventDefault()}
                                className={
                                    "h-12 w-full flex-column text-center text-sm rounded-md mt-4 focus:outline-none " +
                                    (this.props.arraySize[4] === 5 ? "shadow-md bg-white" : "bg-gray-lighter-5")
                                }
                            >
                                <p className="text-black-darker-1 text-sm font-medium">5</p>
                                <p className="text-black-darker-1 text-sm font-medium">
                                    {this.props.arraySize[4] === 5 ? "Stok ada" : "Stok kosong"}
                                </p>
                            </button>
                            <button
                                onClick={this.props.arraySize[0] === 1 ? this.props.onClickStock : e => e.preventDefault()}
                                disabled="disabled"
                                className="h-12 w-full bg-gray-lighter-5 flex-column text-center text-sm rounded-md bg-white mt-4 focus:outline-none"
                            >
                                <p className="text-black-darker text-sm font-medium">+Lebih</p>
                            </button>
                            <button
                                onClick={this.props.arraySize[0] === 1 ? this.props.onClickStock : e => e.preventDefault()}
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