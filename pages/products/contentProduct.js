import React from 'react';
import numeral from 'numeral';
import Footer from './../../components/footer/footer.js';
import FlashAlert from './../../components/cards/FlashAlertCard.js';
import ListImagesCard from './../../components/cards/ListImagesCard.js';
import ModalImageProduct from './../../components/modals/ModalImagesProduct.js';
import DisplayImageCard from './../../components/cards/DisplayImageCard.js';
import DescriptionProductCard from './../../components/cards/DescriptionProductCard.js';
import CarouselProductCard from './../../components/cards/CarouselProductCard.js';
import {Router} from './../../routes.js';
import dynamic from 'next/dynamic';
import ChatWhatsappCard from './../../components/cards/ChatWhatsappCard.js';
import Whatsapp from './../../assets/images/icons/whatsapp.svg';
import Cart from './../../assets/images/icons/cart.svg';
import address from './../../utils/address.js';

/**Import Modal */
import SearchModal from './../../components/modals/searchModal.js';
import SizeModal from './../../components/modals/sizeModal.js';
import AmountModal from './../../components/modals/amountModal.js';
import CartModal from './../../components/modals/cartModal.js';
import AmountOfProduct from './../../components/modals/cartSubModal/amountOfProduct.js';
import Note from './../../components/modals/cartSubModal/note.js';
import Voucher from './../../components/modals/cartSubModal/voucher.js';
import InfoCustomer from './../../components/modals/cartSubModal/infoCustomer.js';
import Provinces from './../../components/modals/cartSubModal/provinces.js';
import Cities from './../../components/modals/cartSubModal/cities.js';
import Districts from './../../components/modals/cartSubModal/district.js';
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

const imgUrls = [
    "https://source.unsplash.com/3Z70SDuYs5g/800x600",
    "https://source.unsplash.com/01vFmYAOqQ0/800x600",
    "https://source.unsplash.com/2Bjq3A7rGn4/800x600",
    "https://source.unsplash.com/t20pc32VbrU/800x600",
    "https://source.unsplash.com/pHANr-CpbYM/800x600",
    "https://source.unsplash.com/3PmwYw2uErY/800x600",
    "https://source.unsplash.com/uOi3lg8fGl4/800x600",
    "https://source.unsplash.com/CwkiN6_qpDI/800x600",
    "https://source.unsplash.com/9O1oQ9SzQZQ/800x600",
];                                    

export default class ContentProduct extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            imgIndex: 0,
            imgUrlLength :imgUrls.length,
            showImgModal : false,
            openSearch : false,
            openFilter : false,
            showSidebar : false,
            size: false,
            amount:false,
            showSetAmount:false,
            cart: false,
            alert: false,
            amountProduct: 0,
            amountData: null,
            showCart: false,
            openChat: false,
            amountProductCart: null,
            modalAmountProduct: false,
            note: false,
            voucherOne: false,
            voucherTwo: false,
            modalInfoCustomer: false,
            amountProductModal: false,
            provinces: false,
            searchProvince: '',
            provinceId: null,
            provinceName: null,
            provinceData: [],
            city: false,
            searchCity: '',
            cityId: null,
            cityName: null,
            cityData: [],
            district: false,
            searchDistrict: '',
            districtName: null,
            districtId: null,
            districtData: [],
            shipmentModal: false,
            paymentService: false,
            transferBank: false,
            ePayment: false,
            minimarket: false,
            creditAndDebit: false,
            productFromStorage: [],
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
        Router.pushRoute('/orders');
    } 

    pushMessageRoute = () => {
        Router.pushRoute('/messages');
    }

    openModal = () => {
        this.setState({ showImgModal:true })
    }

    closeModal = () => {
        this.setState({ showImgModal:false })
    }

    nextClick = () => {
        this.setState(prevState => {
            return {
                imgIndex:
                    prevState.imgIndex === prevState.imgUrlLength - 1
                    ? 0
                    : prevState.imgIndex + 1
            };
        });
    }

    prevClick = () => {
        this.setState(prevState => {
            return {
                imgIndex:
                    prevState.imgIndex === 0 
                    ? prevState.imgUrlLength - 1
                    : prevState.imgIndex - 1
            };
        });
    }

    componentDidMount(){
        let appState = localStorage["cart"];

        if(appState){
            let parseData = JSON.parse(appState);
            this.setState({ 
                showCart:true,
                productFromStorage:parseData, 
                amountData:parseData.length,
            })
        }

        address.get('/provinces')
        .then(res => {
            const {data} = res.data
            this.setState({ provinceData: data })
        })
        .catch(err => {
            console.log(err)
        })
    }

    render(){
        console.log(this.state.city);
        return (
            <>
                <Sidebar
                    showSidebar={this.state.showSidebar}
                    removeIcon={this.state.showSidebar}
                    searchOnClick={this.onOpenSearch} 
                    removeSidebar={() => this.setState({ showSidebar:!this.state.showSidebar })}
                />
                <div className="bg-gray-lighter">
                    {this.state.showSidebar ? (
                        <div className="bg-black bg-opacity-50 h-full w-full fixed z-500 top-0 bottom-0 left-0 right-0" onClick={() => this.setState({ showSidebar:!this.state.showSidebar })} />
                    ) : null}
                    <CartModal
                        openCart={this.state.cart}
                        onCloseCart={() => this.setState({ cart:false })}
                        continueToShop={() => this.setState({ cart:false })}
                        removeModal={() => this.setState({ cart:false,modalInfoCustomer:true })}
                        renderProductData={
                            this.state.productFromStorage.map((element,index) => {
                                return (
                                    <div key={index}>
                                        <div className="w-full flex flex-nowrap">
                                            <img
                                                src="/images/products/converse.jpg"
                                                className="inline-block w-8 h-8 hp-one:w-12 hp-one:h-12 self-center"
                                            />
                                            <div className="overflow-hidden flex-shrink flex-grow ml-2">
                                                <span className="bg-black text-white mt-1 mr-1 text-tiny hp-one:text-xs md:text-sm px-1">Ada Stok</span>
                                                <span className="block text-black-darker font-bold text-xs hp-one:text-sm md:text-base whitespace-nowrap overflow-ellipsis overflow-hidden leading-none">{element.name}</span> 
                                                <span className="block text-gray-lighter-1 text-xs hp-one:text-sm md:text-base leading-none">SIZE {element.size}</span>
                                                <span className="block text-gray-lighter-1 text-xs hp-one:text-sm md:text-base opacity-50 line-through leading-none">Rp. {numeral(320000).format('0,0')}</span>
                                                <span className="block text-gray-lighter-1 text-xs hp-one:text-sm md:text-base leading-none">Rp {numeral(element.price).format('0,0')}</span>
                                            </div>
                                            <div className="mx-1 text-xs hp-one:text-sm md:text-base font-bold self-center">
                                                {this.state.amountProductCart === null ? element.amount : this.state.amountProductCart}
                                            </div>
                                            <div className="ml-2 self-center">
                                                <button
                                                    onClick={() => this.setState({ amountProduct: true,amountProductCart:element.amount }) }
                                                    className="w-full h-8 px-3 text-xs hp-one:text-sm justify-self-end font-semibold bg-gray-lighter-4 text-black-darker rounded-md outline-none focus:outline-none hover:bg-gray-200"
                                                >
                                                    Ubah
                                                </button>
                                            </div>
                                        </div>
                                        <hr className="border-b-1 border-gray-300" />
                                    </div>
                                );
                            })
                        }
                    />
                    <AmountOfProduct 
                        openModalAmountProduct={this.state.amountProduct}
                        onClosemodalAmountProduct={() => this.setState({ amountProduct:false })}
                        amountProduct={this.state.amountProductCart}
                        onReduceAmount={() => this.setState({ amountProductCart : this.state.amountProductCart - 1 })}
                        onAddAmount={() => this.setState({ amountProductCart : this.state.amountProductCart + 1 })}
                    />
                    <div className="flex flex-nowrap fixed bottom-0 z-50 md:pb-2 px-2 w-full">
                        <div className="flex flex-auto flex-shrink-0 justify-center px-2">
                        <button
                            onClick={() => this.setState({ size:true })}
                            className="block lg:hidden flex w-full p-2 bg-red-darker-1 shadow-md h-12 font-semibold text-white text-sm text-center hover:bg-red-darker-1 hover:bg-opacity-90 active:bg-red-darker-1 active:bg-opacity-30 focus:outline-none transition duration-300 linear rounded-md"
                        >
                            <Cart className="inline-block float-left fill-current text-white self-center h-5 w-5 hp-one:h-6 hp-one:w-6" />
                            <span className="mx-auto self-center">Beli Sekarang</span>
                        </button>
                            {this.state.showCart ? 
                                <button 
                                    className="hidden lg:block bg-black focus:outline-none w-full md:w-480 md:h-16 rounded-t-md md:rounded-md px-1 hp-one:px-4 py-2"
                                    onClick={() => this.setState({ cart:true })}
                                >
                                    <div className="bg-white opacity-30 mx-auto h-1 w-20 rounded-sm" />
                                    <div className="flex flex-nowrap">  
                                        <div className="flex flex-nowrap flex-auto text-left">
                                            <div className="flex flex-none mr-2">
                                                <img
                                                    src="/images/products/converse.jpg"
                                                    className="inline-block rounded-full w-8 h-8 hp-one:w-12 hp-one:h-12 self-center"
                                                />
                                            </div>
                                            <div className="self-center flex-auto">
                                                <p className="font-bold text-white text-xs hp-one:text-sm md:text-base">{this.state.amountData} Barang di keranjang saya</p>
                                                <p className="text-white text-xs md:text-sm">Rp. {numeral(320000).format('0,0')}</p>
                                            </div>
                                        </div>
                                        <div className="flex self-center">
                                            <Cart className="fill-current text-white h-5 w-5 hp-one:h-6 hp-one:w-6" />
                                            <div className="bg-red-darker-1 rounded-full font-medium flex justify-center w-4 h-4 hp-one:h-6 hp-one:w-6 text-tiny hp-one:text-xs text-white absolute ml-4 top-3 hp-one:top-0">
                                                <span className="self-center">{this.state.amountData}</span>
                                            </div>
                                        </div>
                                    </div>
                                </button>
                            : null}
                            </div>
                        <div className="flex flex-shrink-0">
                            {this.state.showCart ? (
                                <button
                                    className="flex justify-center lg:hidden mr-2 float-right self-center rounded-full h-12 w-12 bg-black transition duration-300 ease-in-out hover:bg-opacity-70 hover:bg-black active:bg-opacity-40 active:bg-black focus:outline-none"
                                    onClick={() => this.setState({ cart:true })}
                                >
                                    <Cart className="self-center fill-current text-white h-5 w-5 hp-one:h-6 hp-one:w-6" />
                                        <div className="bg-red-darker-1 rounded-full font-medium flex justify-center w-4 h-4 text-tiny text-white absolute ml-8 top-0">
                                            <span className="self-center">{this.state.amountData}</span>
                                        </div>
                                </button> )
                            : null}
                            <button
                                onClick={() => this.setState({ openChat:!this.state.openChat })}
                                className="flex justify-center float-right self-center rounded-full h-12 w-12 bg-green-whatsapp transition duration-300 ease-in-out hover:bg-opacity-70 hover:bg-green-whatsapp active:bg-opacity-40 active:bg-green-whatsapp focus:outline-none"
                            >
                                <Whatsapp className="self-center h-5 w-5 hp-one:h-6 hp-one:w-6 fill-current text-white" />
                            </button>
                        </div>
                    </div> 
                    <>
                        {this.state.openChat ? (
                            <ChatWhatsappCard 
                                onClickWhatsapp={() => window.open('https://api.whatsapp.com/send?phone=+6281212701276','_blank')}
                            />
                        ) : null}
                        <Header 
                            clickMenu={() => this.setState({ showSidebar:!this.state.showSidebar })}
                            displayShare={true}
                            searchOnClick={this.onOpenSearch}
                            profileOnClick={this.pushProfileRoute}
                            displayProfile={true}
                        />
                        <SearchModal onOpenSearch={this.state.openSearch} onCloseSearch={this.onCloseSearch} />
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
                                                    priceProduct:element.price,
                                                    alert:true,
                                                })
                                                setTimeout(() => this.setState({ alert:false }),1000)
                                            }}
                                            className="h-12 w-full flex-column text-center text-xs hp-one:text-sm rounded shadow bg-white mt-4 focus:outline-none"
                                        >
                                            <p className="text-darker-1 font-medium">SIZE {element.size}</p>
                                            <span className="text-lighter-1">Stok {element.status} </span><span className="text-red-darker-1 text-sm">(Rp. {numeral(element.price).format('0,0')})</span>
                                        </button>
                                    )
                                })
                            }
                        />
                        {this.state.alert && this.state.amount ? (
                            <FlashAlert
                                message={"Berhasil memilih ukuran " + this.state.sizeProduct} 
                            />): null} 
                        <AmountModal 
                            onOpenAmount={this.state.amount}
                            onCloseAmount={() => this.setState({ amount:false,size:true,showSetAmount:!this.state.showSetAmount })}
                            onClickStock={amountProduct => {
                                this.setState({ amount:false,cart:true,alert:true,showSetAmount:!this.state.showSetAmount })
                                setTimeout(() => this.setState({ alert:false }),1000)
                                let arr = new Array();
                                let productData = {
                                    name: 'VANS SK8 HI BLACK WHITE',
                                    price:this.state.priceProduct,
                                    size:this.state.sizeProduct,
                                    amount:amountProduct,
                                };
                                arr.push(productData);
                                this.setState({
                                    productFromStorage:[...this.state.productFromStorage,productData],
                                    amountData: this.state.amountData + 1
                                });
                                localStorage["cart"] = JSON.stringify([...this.state.productFromStorage,productData]);
                            }}
                            setAmount={this.state.showSetAmount}
                            showSetAmount={() => this.setState({ showSetAmount:!this.state.showSetAmount })}
                            arraySize={this.state.arrayAmount}
                        />
                        {this.state.alert && this.state.cart ? (
                            <FlashAlert
                                message="Berhasil ditambahkan" 
                            />): null} 
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
                        {/* Modal for Provinces */}
                        <Provinces 
                            onOpenProvince={this.state.provinces}
                            onCloseProvince={() => this.setState({ provinces:false })}
                            searchProvince={this.state.searchProvince}
                            onChangeProvince={e => this.setState({ searchProvince: e.target.value })}
                            clearInput={() => this.setState({ searchProvince : '' }) }
                            provinceData={this.state.provinceData}
                            onClickProvinces={(id,name) => {
                                address.get(`/cities?search=province_id=${id}`)
                                .then(res => {
                                    const {data} = res.data;
                                    this.setState({ cityData: data,provinceName:name,city:true,provinces:false })
                                })
                                .catch(err => {
                                    console.log(err)
                                })
                            }}
                        /> 
                        {/* Modal for Cities */}
                        <Cities 
                            onOpenCity={this.state.city}
                            onCloseCity={() => this.setState({ city:false,provinces:true })}
                            provinceName={this.state.provinceName}
                            searchCity={this.state.searchCity}
                            onChangeCity={e => this.setState({ searchCity: e.target.value })}
                            clearInput={() => this.setState({ searchCity : '' })}
                            cityData={this.state.cityData}
                            onClickCity={(id,name) => {
                                address.get(`/districts?search=city_id=${id}`)
                                .then(res => {
                                    const {data} = res.data;
                                    this.setState({ districtData:data,cityName:name,cityId:id,city:false,district:true })
                                })
                                .catch(err => {
                                    console.log(err)
                                })
                            }}
                        />
                        {/* Modal for Districts */}
                        <Districts 
                            onOpenDistrict={this.state.district}
                            onCloseDistrict={() => this.setState({ district:false,city:true })}
                            provincesAndCities={`${this.state.cityName},${this.state.provinceName}`}
                            searchDistrict={this.state.searchDistrict}
                            onChangeDistrict={e => this.setState({ searchDistrict:e.target.value })}
                            clearInput={() => this.setState({ searchDistrict:'' })}
                            districtData={this.state.districtData}
                            onClickDistrict={(id,name) => this.setState({
                                districtId:id,
                                districtName:name,
                                district:false
                            })}
                        />
                        {/* Modal for shipment service */}
                        <ShipmentService
                            modalShipmentService={this.state.shipmentService}
                            onCloseShipmentService={() => this.setState({ shipmentService:false,modalInfoCustomer:true })}
                            paymentModal={() => {
                                this.setState({ shipmentService:false,alert:true,paymentService:true })
                                setTimeout(() => this.setState({ alert:false }),1000)
                            }}
                        />
                        {this.state.alert && this.state.paymentService ? (
                            <FlashAlert
                                message="Berhasil memilih jasa pengiriman" 
                            />): null} 
                        {/**Modal for payment service */}
                        <PaymentService 
                            modalPayment={this.state.paymentService}
                            onCloseModalPayment={() => this.setState({ paymentService:false,alert:true,shipmentService:true })}
                            transferBank={() => {
                                this.setState({ paymentService:false,alert:true,transferBank:true })
                                setTimeout(() => this.setState({ alert:false }),1000)
                            }}
                            ePayment={() => {
                                this.setState({ paymentService:false,alert:true,ePayment:true }) 
                                setTimeout(() => this.setState({ alert:false }),1000)
                            }}
                            minimarket={() => {
                                this.setState({ paymentService:false,alert:true,minimarket:true })
                                setTimeout(() => this.setState({ alert:false }),1000)
                            }}
                            creditAndDebit={() => {
                                this.setState({ paymentService:false,alert:true,creditAndDebit:true }) 
                                setTimeout(() => this.setState({ alert:false }),1000)
                            }}
                        />
                        {this.state.alert && this.state.transferBank ? (
                            <FlashAlert
                                message="Berhasil memilih transfer bank" 
                            />): null} 
                        {this.state.alert && this.state.ePayment ? (
                            <FlashAlert
                                message="Berhasil memilih E-Payment" 
                            />): null} 
                        {this.state.alert && this.state.minimarket ? (
                            <FlashAlert
                                message="Berhasil memilih Minimarket" 
                            />): null} 
                        {this.state.alert && this.state.creditAndDebit ? (
                            <FlashAlert
                                message="Berhasil memilih Kartu kredit dan debit" 
                            />): null} 
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
                    </>
                    <div className="bg-gray-lighter flex flex-auto relative min-h-screen w-full lg:ml-auto xl:w-8/10 lg:w-3/4">
                        <div className="w-full md:w-11/12 mx-auto">
                            <div className="flex flex-wrap flex-auto">
                                <div className="flex-auto w-full lg:w-1/2">
                                    <ModalImageProduct 
                                        isOpen={this.state.showImgModal}
                                        onClose={this.closeModal}
                                        onNext={this.nextClick}
                                        onPrev={this.prevClick}
                                        src={imgUrls[this.state.imgIndex]}
                                    />
                                    <DisplayImageCard 
                                        imgUrls={imgUrls}
                                        onNext={() => this.setState({ imgIndex:this.state.imgIndex - 1 })}
                                        onPrevious={() => this.setState({ imgIndex:this.state.imgIndex + 1 })}
                                        changeIndex={i => this.setState({ imgIndex:i })}
                                        openModal={this.openModal}
                                        activeIndex={this.state.imgIndex}
                                        changeDotIndex={i => this.setState({ imgIndex:i })}
                                    />
                                    <div className="flex justify-center">
                                        <ListImagesCard
                                            imgUrls={imgUrls} 
                                            changeIndex={i => this.setState({ imgIndex:i })} 
                                            activeIndex={this.state.imgIndex}
                                        />
                                    </div>
                                    <video width="750" height="500" controls className="mt-10" >
                                        <source src="/video/1.mp4" type="video/mp4"/>
                                    </video>
                                </div>
                                <div className="flex-auto w-full lg:w-1/2">
                                    <DescriptionProductCard 
                                        titleProduct="VANS SK8 HI BLACK WHITE"
                                        realPrice="320,000"
                                        discountPrice="290,000"
                                        cartButton={() => this.setState({ size:true })}
                                        onClickMessage={this.pushMessageRoute}
                                        onClickAddressCustomer={() => this.setState({ provinces:true })}
                                        nameAddressCustomer={this.state.cityName && this.state.provinceName ? `${this.state.cityName},${this.state.provinceName}` : "Silahkan di isi"}
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
            </>
        );
    }
}