import React from 'react';
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import Truck from './../../assets/images/icons/truck.svg';
import Cart from './../../assets/images/icons/cart.svg';
import Blank from './../../assets/images/icons/blank.svg';

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
                    styles={{modal: { maxWidth : '100%',maxHeight:'90%',borderRadius : '5%' }}} 
                    open={this.props.openCart}
                    onClose={this.props.onCloseCart}
                    closeIcon={<Blank />}
                    center
                >
                    <div className="bg-gray-lighter w-full h-full md:w-480 items-center">
                        <div className="flex px-6 py-4">
                            <Cart width={24} height={24} className="inline-block self-center" />
                            <p className="inline-block text-lg font-medium text-darker-1">Keranjang Saya {this.props.amountTotalProduct}</p>
                        </div>  
                        <div className="text-gray-600 px-6 pb-5 max-h-96 overflow-y-auto">
                                <div className="">
                                    <div className="w-full flex flex-nowrap">
                                        <img
                                            src="/images/products/converse.jpg"
                                            className="inline-block w-12 h-12 self-center"
                                        />
                                        <div className="flex-shrink flex-grow ml-2">
                                            <span className="bg-black text-white mt-1 mr-1 text-sm px-1">Ada Stok</span>
                                            <span className="block text-black-darker font-bold">VANS OLD SKOOL BLACK WHITE</span> 
                                            <span className="block text-sm text-gray-lighter-1">SIZE 40</span>
                                            <span className="block text-sm text-gray-lighter-1 opacity-50 line-through">Rp 320.000</span>
                                            <span className="block text-sm text-gray-lighter-1">Rp 300.000</span>
                                        </div>
                                        <div className="mx-1 font-bold self-center">
                                            3
                                        </div>
                                        <div className="ml-2 self-center">
                                            <button
                                                onClick={() => this.setState({ modalAmountProduct: true }) }
                                                className="w-full h-8 px-3 text-sm justify-self-end font-semibold bg-gray-lighter-4 text-black-darker rounded-md outline-none focus:outline-none hover:bg-gray-200"
                                            >
                                                Ubah
                                            </button>
                                        </div>
                                    </div>
                                    <hr className="border-b-1 border-gray-300" />
                                    <div className="w-full flex flex-nowrap mt-2">
                                        <img
                                            src="/images/products/converse.jpg"
                                            className="inline-block w-12 h-12 self-center"
                                        />
                                        <div className="flex-shrink flex-grow ml-2">
                                            <span className="bg-black text-white mt-1 mr-1 text-sm px-1">Ada Stok</span>
                                            <span className="block text-black-darker font-bold">VANS OLD SKOOL BLACK WHITE</span> 
                                            <span className="block text-sm text-gray-lighter-1">SIZE 40</span>
                                            <span className="block text-sm text-gray-lighter-1 opacity-50 line-through">Rp 320.000</span>
                                            <span className="block text-sm text-gray-lighter-1">Rp 300.000</span>
                                        </div>
                                        <div className="mx-1 font-bold self-center">
                                            3
                                        </div>
                                        <div className="ml-2 self-center">
                                            <button
                                                onClick={() => this.setState({ modalAmountProduct: true }) }
                                                className="w-full h-8 px-3 text-sm justify-self-end font-semibold bg-gray-lighter-4 text-black-darker rounded-md outline-none focus:outline-none hover:bg-gray-200"
                                            >
                                                Ubah
                                            </button>
                                        </div>
                                    </div>
                                    <hr className="border-b-1 border-gray-300" />
                                </div>
                            <div className="">
                                <button
                                    onClick={this.props.continueToShop}
                                    className="w-full px-6 my-4 h-12 font-semibold bg-gray-lighter-4 text-black-darker text-sm rounded-md outline-none focus:outline-none hover:bg-gray-300 transition duration-300 ease-in-out"
                                >
                                    Lanjutkan Belanja
                                </button>
                                <hr className="border-b-1 border-black-darker my-2" />
                                <div className="flex flex-nowrap flex-auto my-2">
                                    <p className="flex-auto text-left">Harga Normal Produk</p>
                                    <p className="text-right font-bold text-black-darker">Rp.300.000</p>
                                </div>
                                <div className="flex flex-nowrap flex-auto my-2">
                                    <p className="flex-auto text-left">Diskon Produk</p>
                                    <p className="text-right font-bold text-black-darker">-Rp.50.000</p>
                                </div>
                                <div className="flex flex-nowrap flex-auto my-2">
                                    <p className="flex-auto text-left">Total Harga Produk (7 Barang)</p>
                                    <p className="text-right font-bold text-black-darker">Rp.2.300.000</p>
                                </div>
                                <div className="flex flex-wrap p-3 mt-3 justify-center">
                                    <button
                                        onClick={() => this.setState({ voucherOne: true }) }
                                        className="flex-auto p-2 m-1 font-semibold bg-gray-lighter-4 text-black-darker text-sm rounded-md outline-none focus:outline-none hover:bg-gray-300 transition duration-300 ease-in-out"
                                    >
                                        + Aplikasikan Voucherd
                                    </button>
                                    <button
                                        onClick={() => this.setState({ note: true }) }
                                        className="flex p-2 m-1 font-semibold bg-gray-lighter-4 text-black-darker text-sm rounded-md outline-none focus:outline-none hover:bg-gray-300 transition duration-300 ease-in-out"
                                    >
                                        + Tambahkan Catatan
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="px-4 py-3">
                            <button
                                onClick={this.props.removeModal}
                                className="w-full text-center px-2 h-12 font-bold bg-red-darker-1 text-sm text-white rounded-md hover:bg-red-darker-1 active:bg-red-darker-1 hover:bg-opacity-90 active:bg-opacity-50 focus:outline-none transition duration-300 ease-in-out"
                            >
                                <Truck width={24} height={24} className="inline-block float-left stroke-current stroke-0 white" />
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