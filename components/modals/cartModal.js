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
                    showCloseIcon={false}
                    center
                >
                    <div className="bg-gray-lighter w-full h-full md:w-480 items-center">
                        <div className="flex justify-center md:hidden">
                            <div className="bg-gray-lighter-6 mx-auto h-1 w-20 absolute top-1 rounded-sm" />
                        </div>
                        <div className="flex px-6 py-4">
                            <Cart width={24} height={24} className="inline-block self-center" />
                            <p className="inline-block text-xl font-medium text-black-darker">Keranjang Saya {this.props.amountTotalProduct}</p>
                        </div>  
                        <div className="text-gray-600 px-6 pb-5 max-h-96 overflow-y-auto">
                                <div className="">
                                    {this.props.renderProductData}
                                </div>
                            <div className="">
                                <button
                                    onClick={this.props.continueToShop}
                                    className="w-full px-6 my-4 h-12 font-semibold bg-gray-lighter-4 hover:bg-gray-lighter-5 active:bg-gray-lighter-3 transition duration-300 ease-in-out text-black-darker text-sm rounded-md focus:outline-none "
                                >
                                    Lanjutkan Belanja
                                </button>
                                <hr className="border-b-1 border-black-darker my-2" />
                                <div className="flex flex-nowrap flex-auto my-2">
                                    <p className="flex-auto text-left leading-none">Harga Normal Produk</p>
                                    <p className="text-right font-bold text-black-darker leading-none">Rp.300.000</p>
                                </div>
                                <div className="flex flex-nowrap flex-auto my-2">
                                    <p className="flex-auto text-left leading-none">Diskon Produk</p>
                                    <p className="text-right font-bold text-black-darker leading-none">-Rp.50.000</p>
                                </div>
                                <div className="flex flex-nowrap flex-auto my-2">
                                    <p className="flex-auto text-left leading-none">Total Harga Produk (7 Barang)</p>
                                    <p className="text-right font-bold text-black-darker leading-none">Rp.2.300.000</p>
                                </div>
                                <div className="flex flex-wrap p-3 mt-3 justify-center">
                                    <button
                                        onClick={() => this.setState({ voucherOne: true }) }
                                        className="flex-auto p-2 m-1 font-semibold bg-gray-lighter-4 text-black-darker hover:bg-gray-lighter-5 active:bg-gray-lighter-3 transition duration-300 ease-in-out text-sm rounded-md focus:outline-none"
                                    >
                                        + Aplikasikan Voucher
                                    </button>
                                    <button
                                        onClick={() => this.setState({ note: true }) }
                                        className="flex-auto p-2 m-1 font-semibold bg-gray-lighter-4 text-black-darker hover:bg-gray-lighter-5 active:bg-gray-lighter-3 transition duration-300 ease-in-out text-sm rounded-md focus:outline-none"
                                    >
                                        + Tambahkan Catatan
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="px-4 py-3">
                            <button
                                onClick={this.props.removeModal}
                                className="w-full text-center px-2 h-12 font-bold bg-red-darker-1 text-sm text-white rounded-md hover:bg-red-darker-1 hover:opacity-90 active:bg-opacity-50 active:bg-red-darker-1 focus:outline-none transition duration-300 ease-in-out"
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