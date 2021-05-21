import React from 'react';
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import Packing from './../../assets/images/icons/packing.svg';
import Cart from './../../assets/images/icons/cart.svg';
import Exit from './../../assets/images/icons/exit.svg';

//import submodal
import AmountOfProduct from './cartSubModal/amountOfProduct.js';
import Note from './cartSubModal/note.js';
import Voucher from './cartSubModal/voucher.js';
import InfoCustomer from './cartSubModal/infoCustomer.js';
import ShipmentService from './cartSubModal/shipmentService.js';
import PaymentService from './cartSubModal/paymentService.js';

export default class CartModal extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            openCart: true,
            openModal: false,
            note: false,
            amountProduct: 0,
            modalAmountProduct: false,
            voucherOne: false,
            voucherTwo: false,
            modalInfoCustomer: false,
            shipmentModal: false,
            paymentService: false,
        }
    }

    onCloseCart = () => {
        this.setState({ openCart:false });
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
        this.setState({ voucherTwo: false });
    }

    onCloseModalInfoCustomer = () => {
        this.setState({ modalInfoCustomer: false });
    }
    
    onCloseShipmentService = () => {
        this.setState({ shipmentService:false })
    }

    onClosePaymentService = () => {
        this.setState({ paymentService:false })
    }

    render(){
        if(this.state.amountProduct < 0){
            this.setState({ amountProduct : 0 })
        }

        return (
            <>
                <Modal
                    styles={{modal: { maxWidth : '100%',borderRadius : '5%',padding: '0' }}} 
                    open={this.props.openCart}
                    onClose={this.props.onCloseCart}
                    closeIcon={<Exit width={28} height={28} className="hover:bg-gray-200 rounded-full h-8 w-8 flex justify-center transition duration-300 ease-in-out" />}
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
                                    className="w-full p-2 font-semibold bg-gray-200 rounded-md outline-none focus:outline-none hover:bg-gray-300 transition duration-300 ease-in-out"
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
                                        className="p-2 font-semibold bg-gray-200 mx-auto rounded-md outline-none focus:outline-none hover:bg-gray-300 transition duration-300 ease-in-out"
                                    >
                                        + Aplikasikan Voucher
                                    </button>
                                    <button
                                        onClick={() => this.setState({ note: true }) }
                                        className="p-2 font-semibold bg-gray-200 mx-auto rounded-md outline-none focus:outline-none hover:bg-gray-300 transition duration-300 ease-in-out"
                                    >
                                        + Tambahkan Catatan
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="mx-4">
                            <button
                                onClick={this.props.removeModal}
                                className="w-full p-4 text-center font-bold bg-red-600 text-gray-100 rounded-md hover:bg-red-700 active:bg-red-800 focus:outline-none transition duration-300 ease-in-out"
                            >
                                <Packing width={20} height={20} fill="white" className="inline-block float-left stroke-current stroke-2 white" />
                                Order Sekarang
                            </button>
                        </div>
                    </div>
                </Modal>
                {/* Modal for Manage Amount of Product */}
                <AmountOfProduct 
                    openModalAmountProduct={this.state.modalAmountProduct}
                    onClosemodalAmountProduct={this.onClosemodalAmountProduct}
                    amountProduct={this.state.amountProduct}
                    onReduceAmount={() => this.setState({ amountProduct : this.state.amountProduct - 1 })}
                    onAddAmount={() => this.setState({ amountProduct : this.state.amountProduct + 1 })}
                />
                {/* Modal for note */}
                <Note 
                    note={this.state.note}
                    onCloseNote={this.onCloseNote}
                />
                {/* Modal For Voucher */}
                <Voucher 
                    voucherOne={this.state.voucherOne}
                    voucherTwo={this.state.voucherTwo}
                    onCloseVoucherOne={this.onCloseVoucherOne}
                    onCloseVoucherTwo={this.onCloseVoucherTwo}
                    changeVoucherTwo={() => this.setState({ voucherTwo: true })}
                />
                {/* Modal for info customer */}
                <InfoCustomer
                    modalInfoCustomer={this.state.modalInfoCustomer}
                    onCloseModalInfoCustomer={this.onCloseModalInfoCustomer}
                    shipmentModal={() => this.setState({ shipmentService:true }) }
                />
                {/* Modal for shipment service */}
                <ShipmentService
                    modalShipmentService={this.state.shipmentService}
                    onCloseShipmentService={this.onCloseShipmentService}
                    paymentModal={() => this.setState({ paymentService:true })}
                />
                {/**Modal for payment service */}
                <PaymentService 
                    modalPayment={this.state.paymentService}
                    onCloseModalPayment={this.onClosePaymentService}
                />
            </>
        );
    }
}