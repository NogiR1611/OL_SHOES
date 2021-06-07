import React from 'react';
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import ArrowLeft from './../../assets/images/icons/arrowLeft.svg';

export default class AmountModal extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            showAmountNotif: false,
        }
    }

    onCloseAmountNotif = () => {
        this.setState({ showAmountNotif:false });
    }

    render(){
        return (
            <>
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
                                <p className={"text-sm font-medium " + (this.props.arraySize[0] === 1 ? "text-black-darker" : "text-red-darker-1" )}>
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
                                <p className={"text-sm font-medium " + (this.props.arraySize[1] === 2 ? "text-black-darker" : "text-red-darker-1" )}>
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
                                <p className={"text-sm font-medium " + (this.props.arraySize[2] === 3 ? "text-black-darker" : "text-red-darker-1" )}>
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
                                <p className={"text-sm font-medium " + (this.props.arraySize[3] === 4 ? "text-black-darker" : "text-red-darker-1" )}>
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
                                <p className={"text-sm font-medium " + (this.props.arraySize[4] === 5 ? "text-black-darker" : "text-red-darker-1" )}>
                                    {this.props.arraySize[4] === 5 ? "Stok ada" : "Stok kosong"}
                                </p>
                            </button>
                            <button
                                onClick={this.props.arraySize[0] === 1 ? this.props.onClickStock : e => e.preventDefault()}
                                className="h-12 w-full bg-gray-lighter-5 flex-column text-center text-sm rounded-md bg-white mt-4 focus:outline-none"
                            >
                                <p className="text-black-darker text-sm font-medium">+Lebih</p>
                            </button>
                            <button
                                onClick={() => this.setState({ showAmountNotif:true })}
                                className="h-12 w-full bg-gray-lighter flex-column text-center text-sm rounded-md bg-white mt-4 focus:outline-none"
                            >
                                <p className="text-red-darker-1 text-sm font-medium">Beri tahu saya jika produk tersedia kembali</p>
                            </button>
                        </div>
                    </div>
                </div>
            </Modal>
            <Modal
                styles={{modal: { maxWidth:'100%',borderRadius : '10px' }}}
                open={this.state.showAmountNotif}
                onClose={this.onCloseAmountNotif}
                closeIcon={<ArrowLeft className="bg-gray-lighter-4 hover:bg-gray-lighter-5 transition duration-300 ease-in-out rounded-full stroke-current stroke-0 focus:outline-none text-black transform scale-100 h-8 w-8 p-1 flex justify-center" />}
                center
            >
                <div className="bg-gray-lighter w-full md:w-480 items-center">
                    <div className="md:h-9 md:w-480" />
                    <div className="flex justify-center md:hidden">
                        <div className="bg-gray-lighter-6 mx-auto h-1 w-20 absolute top-1 rounded-sm" />
                    </div>
                    <p className="text-xl text-black-darker font-semibold px-6 py-4">Beri tahu saya jika produk tersedia kembali</p>
                    <div className="pb-5 px-4">
                        <p className="mb-4">
                            Masukkan email kamu dan jumlah produk yang kamu inginkan,
                            kami akan mengirimkan email ketika produk tersedia kembali.
                        </p>
                        <div className="flex flex-col">
                            <div className="flex flex-auto">
                                <div className="block relative bg-gray-lighter-7 border-b-2 w-full border-gray-lighter-9 focus-within:border-red-darker-1 rounded-t-lg">
                                    <input
                                        type="text" 
                                        id="amount" 
                                        name="" 
                                        placeholder=" " 
                                        className="block w-full appearance-none focus:outline-none pt-4 pl-3 bg-transparent" 
                                    />
                                    <label for="amount" class="absolute top-3 transition duration-300 ease-in-out text-gray-lighter-3 font-medium">Jumlah</label>
                                </div>
                            </div>
                            <div className="flex flex-grow px-3 mb-2 h-3">
                                <p className="text-xs text-orange-lighter-1">
                                </p>
                            </div>
                        </div>
                        <div className="flex flex-col">
                            <div className="flex flex-auto">
                                <div className="block relative bg-gray-lighter-7 border-b-2 w-full border-gray-lighter-9 focus-within:border-red-darker-1 rounded-t-lg">
                                    <input
                                        type="text" 
                                        id="email" 
                                        name="" 
                                        placeholder=" " 
                                        className="block w-full appearance-none focus:outline-none pt-4 pl-3 bg-transparent" 
                                    />
                                    <label for="email" class="absolute top-3 transition duration-300 ease-in-out text-gray-lighter-3 font-medium">Email</label>
                                </div>
                            </div>
                            <div className="flex flex-grow px-3 mb-2 h-3">
                                <p className="text-xs text-orange-lighter-1">
                                </p>
                            </div>
                        </div>
                        <button
                            className="w-full bg-red-darker-1 text-white py-2 rounded-md hover:opacity-90 active:bg-opacity-50 active:bg-red-darker-1 focus:outline-none transition duration-300 ease-in-out"
                        >
                            Konfirmasi
                        </button>
                    </div>
                </div>
            </Modal>
            </>
        );
    }
}