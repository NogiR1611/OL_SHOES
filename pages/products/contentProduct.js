import React from 'react';
import Footer from './../../components/footer/footer.js';
import FlashAlert from './../../components/cards/FlashAlertCard.js';
import CarouselCard from './../../components/cards/CarouselCard.js';
import DescriptionProductCard from './../../components/cards/DescriptionProductCard.js';
import CarouselProductCard from './../../components/cards/CarouselProductCard.js';
import ProductCards from './../../components/cards/ProductCards.js';
import {Router} from './../../routes.js';
import dynamic from 'next/dynamic';

/**Import Modal */
import SearchModal from './../../components/modals/searchModal.js';
import SizeModal from './../../components/modals/sizeModal.js';
import AmountModal from './../../components/modals/amountModal.js';
import CartModal from './../../components/modals/cartModal.js';
import AmountOfProduct from './../../components/modals/cartSubModal/amountOfProduct.js';
import Note from './../../components/modals/cartSubModal/note.js';
import Voucher from './../../components/modals/cartSubModal/voucher.js';
import InfoCustomer from './../../components/modals/cartSubModal/infoCustomer.js';
import ShipmentService from './../../components/modals/cartSubModal/shipmentService.js';
import PaymentService from './../../components/modals/cartSubModal/paymentService.js';
import TransferBank from './../../components/modals/cartSubModal/transferBank.js';
import EPayment from './../../components/modals/cartSubModal/ePayment.js';
import Minimarket from './../../components/modals/cartSubModal/minimarket.js';
import CreditAndDebit from './../../components/modals/cartSubModal/creditAndDebit.js';

export const Header = dynamic(() => {
    return import('./../../components/header/header.js')
},{ ssr:false });

export const Sidebar = dynamic(() => {
    return import('./../../components/sidebar/sidebar.js')
},{ ssr:false });

export default class ContentProduct extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            openSearch : false,
            openFilter : false,
            showSidebar : false,
            size: false,
            amount:false,
            cart: false,
            alert: false,
            amountProduct: 0,
            modalAmountProduct: false,
            note: false,
            voucherOne: false,
            voucherTwo: false,
            modalInfoCustomer: false,
            shipmentModal: false,
            paymentService: false,
            transferBank: false,
            ePayment: false,
            minimarket: false,
            creditAndDebit: false,
            productDataset: [
                {
                    id:1,
                    size:41,
                    price:270000,
                    amount:2,
                    status:'banyak',
                },
                {
                    id:2,
                    size:42,
                    price:300000,
                    amount:3,
                    status:'banyak'
                },
                {
                    id:1,
                    size:43,
                    price:330000,
                    amount:4,
                    status:'banyak'
                },
            ],
            arrayAmount: [],
            sizeProduct: null,
            priceProduct: null,
            amountProduct: null,
        }
    }

    onCloseSize = () => {
        this.setState({ size : false });
    }

    onOpenSearch = () => {
        this.setState({ openSearch : true });
    }

    onCloseSearch = () => {
        this.setState({ openSearch : false });
    }

    onCloseCart = () => {
        this.setState({ cart:false });
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

    pushProfileRoute = () => {
        Router.pushRoute('/users');
    } 

    addProductToCart = () => {

    }

    render(){
        console.log(this.state.alert);
        return (
            <div className="bg-gray-lighter">
                <>
                <Header 
                    displayShare={true}
                    searchOnClick={this.onOpenSearch}
                    profileOnClick={this.pushProfileRoute}
                    displayProfile={true}
                />
                <SearchModal onOpenSearch={this.state.openSearch} onCloseSearch={this.onCloseSearch} />
                {this.state.alert ? (
                <FlashAlert
                    message="Berhasil ditambahkan" 
                />): null}
                {/**Modal for size */}
                <SizeModal 
                    onOpenSize={this.state.size}
                    onCloseSize={() => this.setState({ size:false })}
                    onClickSize={() => this.setState({ size:false,amount:true })}
                    renderButton={
                        this.state.productDataset.map((element,index) => {
                            return (
                                <button
                                    key={index}
                                    onClick={() => {
                                        this.setState({ 
                                            size:false,
                                            amount:true,
                                            arrayAmount:Array.from({length: element.amount}, (_, i) => i + 1),
                                            sizeProduct:element.size,
                                            priceProduct:element.price
                                        })
                                    }}
                                    className="h-12 w-full flex-column text-center text-sm rounded shadow bg-white mt-4 focus:outline-none"
                                >
                                    <p className="text-darker-1 text-sm font-medium">SIZE {element.size}</p>
                                    <span className="text-lighter-1 text-sm">Stok {element.status} </span><span className="text-red-darker-1 text-sm">({element.price})</span>
                                </button>
                            )
                        })
                    }
                />
                <AmountModal 
                    onOpenAmount={this.state.amount}
                    onCloseAmount={() => this.setState({ amount:false,size:true })}
                    onClickStock={amount => {
                        this.setState({ amount:false,cart:true,alert:true })
                        setTimeout(() => this.setState({ alert:false }),1000)
                        let cartTotalProduct = [];
                        let productData = {
                            name: 'VANS SK8 HI BLACK WHITE',
                            price:this.state.priceProduct,
                            size:this.state.sizeProduct,
                            amount:amount,
                        };
                        cartTotalProduct.push(productData);
                        localStorage["cart"] = JSON.stringify(cartTotalProduct);
                    }
                    }
                    arraySize={this.state.arrayAmount}
                />
                {/** Modal for Cart */}
                <CartModal
                    openCart={this.state.cart}
                    onCloseCart={this.onCloseCart}
                    continueToShop={this.onCloseCart}
                    removeModal={() => this.setState({ cart:false,modalInfoCustomer:true })}
                />
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
                    onCloseModalInfoCustomer={() => this.setState({ modalInfoCustomer:false,cart:true })}
                    shipmentModal={() => this.setState({ modalInfoCustomer:false,shipmentService:true }) }
                />
                {/* Modal for shipment service */}
                <ShipmentService
                    modalShipmentService={this.state.shipmentService}
                    onCloseShipmentService={() => this.setState({ shipmentService:false,modalInfoCustomer:true })}
                    paymentModal={() => this.setState({ shipmentService:false,paymentService:true })}
                />
                {/**Modal for payment service */}
                <PaymentService 
                    modalPayment={this.state.paymentService}
                    onCloseModalPayment={() => this.setState({ paymentService:false,shipmentService:true })}
                    transferBank={() => this.setState({ paymentService:false,transferBank:true })}
                    ePayment={() => this.setState({ paymentService:false,ePayment:true }) }
                    minimarket={() => this.setState({ paymentService:false,minimarket:true })}
                    creditAndDebit={() => this.setState({ paymentService:false,creditAndDebit:true }) }
                />
                {/**Modal for transfer bank */}
                <TransferBank
                    transferBank={this.state.transferBank}
                    onCloseTransferBank={() => this.setState({ transferBank:false,paymentService:true })}
                />
                {/**Modal For E-Payment */}
                <EPayment 
                    ePayment={this.state.ePayment}
                    onCloseEpayment={() => this.setState({ ePayment:false,paymentService:true })}
                />
                {/**Modal For Minimarket */}
                <Minimarket 
                    minimarket={this.state.minimarket}
                    onCloseMinimarket={() => this.setState({ minimarket:false,paymentService:true })}
                />
                {/**Modal For Credit And Debit */}
                <CreditAndDebit
                    creditAndDebit={this.state.creditAndDebit}
                    onCloseCreditAndDebit={() => this.setState({ creditAndDebit:false,paymentService:true }) }
                />
                <Sidebar
                    showSidebar={this.state.showSidebar}
                    removeIcon={this.state.showSidebar}
                    searchOnClick={this.onOpenSearch} 
                    removeSidebar={() => this.setState({ showSidebar:!this.state.showSidebar })}
                />
                </>
                <div className="bg-gray-lighter flex flex-auto relative min-h-screen w-full lg:ml-auto lg:w-3/4">
                    <div className="w-11/12 mx-auto">
                        <div className="flex flex-wrap flex-auto">
                            <div className="flex-auto w-1/2">
                                <CarouselCard />
                            </div>
                            <div className="flex-auto w-1/2">
                                <DescriptionProductCard 
                                    titleProduct="VANS SK8 HI BLACK WHITE"
                                    realPrice="320,000"
                                    discountPrice="290,000"
                                    cartButton={() => this.setState({ size:true })}
                                />
                            </div>
                        </div>
                        <div className="my-4">
                            <p className="text-black-darker font-medium">Kamu mungkin juga suka</p>
                            <CarouselProductCard />
                        </div>
                        <div className="my-4">
                            <p className="text-black-darker font-medium">Produk lain dari toko ini</p>
                            <CarouselProductCard />
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        );
    }
}