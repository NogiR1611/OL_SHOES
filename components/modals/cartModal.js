import React from 'react';
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import Trash from './../../assets/images/icons/trash.svg';
import Packing from './../../assets/images/icons/packing.svg';
import Cart from './../../assets/images/icons/cart.svg';
import Exit from './../../assets/images/icons/exit.svg';

export default class CartModal extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            openModal: false,
            note: false,
            amountProduct: 0,
            modalAmountProduct: false,
            voucherOne: false,
            voucherTwo: false
        }
    }

    onClosemodalAmountProduct = () => {
        this.setState({ modalAmountProduct: false });
    }

    onCloseNote = () => {
        this.setState({ note: false });
    }

    onCloseVoucherOne = () => {
        this.setState({ voucherOne: false });
    }

    onCloseVoucherTwo = () => {
        this.setState({ voucherTwo: false })
    }

    render(){
        
        if(this.state.amountProduct < 0){
            this.setState({ amountProduct : 0 })
        }

        return (
            <>
                <Modal
                    styles={{modal: { maxWidth : '100%',borderRadius : '5%',padding: '0' }}} 
                    open={this.props.onOpenCart} 
                    onClose={this.props.onCloseCart}
                    closeIcon={<Exit width={28} height={28} className="hover:bg-gray-200 rounded-full h-8 w-8 flex justify-center duration-300" />}
                >
                    <div className="w-full max-w-2xl py-4 items-center">
                        <div className="px-2">
                            <Cart width={24} height={24} className="inline-block mr-2" fill="gray" />
                            <p className="inline-block text-lg font-bold text-gray-800">Keranjang Saya {this.props.amountTotalProduct}</p>
                        </div>
                        <div className="text-gray-600 my-4 max-h-96 overflow-y-auto">
                            <ul className="">
                                <div className="my-4 mx-2">
                                    <li className="w-full flex flex-wrap my-4">
                                        <img
                                            src="/images/products/converse.jpg"
                                            className="inline-block w-2/12 mr-4"
                                        />
                                        <div className="inline-block w-7/12">
                                            <span className="block uppercase font-bold">VANS OLD SKOOL BLACK WHITE</span> 
                                            <span className="block">Rp 300.000</span>
                                            <span className="block"><s>Rp 320.000</s></span>
                                        </div>
                                        <div className="w-2/12">
                                            <span className="inline-block">{this.state.amountProduct}</span>
                                            <button
                                                onClick={() => this.setState({ modalAmountProduct: true }) }
                                                className="inline-block py-2 px-2 ml-4 justify-self-end font-semibold bg-gray-100 rounded-md outline-none focus:outline-none hover:bg-gray-200 duration-300"
                                            >
                                                Ubah
                                            </button>
                                        </div>
                                    </li>
                                    <hr className="border-gray-300 my-2 mx-2" />
                                </div>
                            </ul>
                            <div className="px-4 py-2">
                                <button
                                    onClick={this.props.continueToShop}
                                    className="w-full p-2 font-semibold bg-gray-200 rounded-md outline-none focus:outline-none hover:bg-gray-300 duration-300"
                                >
                                    Lanjutkan Belanja
                                </button>
                                <hr className="border-black my-4" />
                                <div className="flex flex-wrap">
                                    <p className="text-left">Harga Normal Produk</p>
                                    <p className="text-right">{this.props.totalNormalPrice}</p>
                                </div>
                                <div className="flex flex-wrap">
                                    <p className="text-left">Diskon Produk</p>
                                    <p className="text-right">{this.props.productDiscount}</p>
                                </div>
                                <div className="flex flex-wrap">
                                    <p className="text-left">Total Harga Produk</p>
                                    <p className="text-right">{this.props.totalPrice}</p>
                                </div>
                                <div className="flex flex-wrap my-4">
                                    <button
                                        onClick={() => this.setState({ voucherOne: true }) }
                                        className="p-2 font-semibold bg-gray-200 mx-auto rounded-md outline-none focus:outline-none hover:bg-gray-300 duration-300"
                                    >
                                        + Aplikasikan Voucher
                                    </button>
                                    <button
                                        onClick={() => this.setState({ note: true }) }
                                        className="p-2 font-semibold bg-gray-200 mx-auto rounded-md outline-none focus:outline-none hover:bg-gray-300 duration-300"
                                    >
                                        + Tambahkan Catatan
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="mx-4">
                            <button
                                className="w-full p-4 text-center font-bold bg-red-600 text-gray-100 rounded-md hover:bg-red-700 active:bg-red-800 duration-300"
                            >
                                <Packing width={20} height={20} fill="white" className="inline-block float-left stroke-current stroke-2 white" />
                                Order Sekarang
                            </button>
                        </div>
                    </div>
                </Modal>
                {/* Modal for Manage Amount of Product */}
                <Modal
                    styles={{modal: { width : '33%',borderRadius : '10px' }}}
                    open={this.state.modalAmountProduct}
                    onClose={this.onClosemodalAmountProduct}
                    showCloseIcon={false}
                >
                    <div className="w-full py-4 items-center">
                        <div className="flex flex-wrap w-full">
                            <p className="inline-block w-11/12 font-bold text-gray-800">VANS OLD SKOOL BLACK WHITE</p>
                            <Trash width={28} height={28} className="inline-block w-1/12 cursor-pointer hover:bg-gray-200 rounded-full h-10 w-10 flex justify-center duration-300"  />
                        </div>
                        <div className="flex justify-center my-4">
                            <button 
                                className="inline-block bg-gray-300 rounded-full active:bg-gray-500 h-10 w-10 mx-2 focus:outline-none focus:ring-offset-transparent hover:bg-gray-400 duration-300 p-auto"
                                onClick={() => this.setState({ amountProduct : this.state.amountProduct - 1 })}
                            >
                                -
                            </button>
                            <div className="inline-block p-2">{this.state.amountProduct}</div>
                            <button
                                className="inline-block bg-gray-300 rounded-full active:bg-gray-500 h-10 w-10 mx-2 focus:outline-none hover:bg-gray-400 duration-300 p-auto"
                                onClick={() => this.setState({ amountProduct : this.state.amountProduct + 1 })}
                            >
                                +
                            </button>
                        </div>
                        <div className="my-4 float-right">
                            <button
                                onClick={this.onClosemodalAmountProduct}
                                className="mx-2 p-2 font-bold text-gray-800 focus:outline-none"
                            >
                                Tutup
                            </button>
                            <button
                                onClick={this.onClosemodalAmountProduct}
                                className="mx-2 p-2 font-bold bg-red-600 hover:bg-red-700 active:bg-red-800 rounded-lg text-gray-100 focus:outline-none"
                            >
                                Simpan
                            </button>
                        </div>
                    </div>
                </Modal>
                {/* Modal for note */}
                <Modal
                    styles={{modal: { width : '33%',borderRadius : '10px' }}}
                    open={this.state.note}
                    onClose={this.onCloseNote}
                    closeIcon={<Exit width={28} height={28} className="hover:bg-gray-200 rounded-full h-8 w-8 flex justify-center duration-300" />}
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
                            onClick={this.onCloseNote}
                            className="float-right inline-block p-2 text-center font-bold bg-red-600 text-gray-100 rounded-md hover:bg-red-700 duration-300 focus:outline-none"
                        >
                            Oke
                        </button>
                    </div>
                </Modal>
                {/* Modal For Voucher */}
                <Modal
                    styles={{modal: { width : '33%',borderRadius : '10px' }}}
                    open={this.state.voucherOne}
                    onClose={this.onCloseVoucherOne}
                    closeIcon={<Exit width={28} height={28} className="hover:bg-gray-200 rounded-full h-8 w-8 flex justify-center duration-300" />}
                    center
                >
                    <div className="w-full p-4">
                        <div className="">
                            <p className="text-xl text-gray-800 font-bold my-4">Voucher Saya ()</p>
                            <p className="text-base text-gray-500 my-2">
                                Hanya 2 voucher (1 untuk pengiriman dan 1 untuk produk) yang dapat diaplikasikan per order.
                            </p>
                        </div>
                        <button
                            onClick={() => this.setState({ voucherTwo: true })}
                            className="w-full text-gray-500 my-2 bg-gray-200 hover:bg-gray-300 active:bg-gray-400 p-2 font-bold text-base duration-300 rounded-lg focus:outline-none"
                        >
                            + Aplikasi Kode Voucher
                        </button>
                    </div>
                </Modal>
                <Modal
                    styles={{modal: { width : '33%',borderRadius : '10px' }}}
                    open={this.state.voucherTwo}
                    onClose={this.onCloseVoucherTwo}
                    closeIcon={<Exit width={28} height={28} className="hover:bg-gray-200 rounded-full h-8 w-8 flex justify-center duration-300" />}
                    center
                >
                    <div className="w-full p-4">
                        <p
                            className="text-xl text-gray-600 font-bold my-4"
                        >
                            Aplikasikan Kode Voucher
                        </p>
                        <input
                            className="block w-full duration-400 my-4 rounded-md bg-gray-100 border-b-2 border-gray-400 px-4 outline-none focus:border-2 border-red-600"
                            type="text"
                            name=""
                            id=""
                            placeholder="Kode Voucher"
                        />
                        <button
                            className="w-full p-2 text-center font-bold bg-red-600 text-gray-100 rounded-md hover:bg-red-700 active:bg-red-800 duration-300 focus:outline-none"
                        >
                            Aplikasikan
                        </button>
                        <button
                            onClick={this.onCloseVoucherTwo}
                            className="w-full p-2 text-gray-500 my-2 bg-gray-200 hover:bg-gray-300 active:bg-gray-400 font-bold text-base duration-300 rounded-lg focus:outline-none"
                        >
                            Batal
                        </button>
                    </div>
                </Modal>
            </>
        );
    }
}