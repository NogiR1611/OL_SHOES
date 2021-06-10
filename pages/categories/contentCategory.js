import React from 'react';
import numeral from 'numeral';
import CartModal from './../../components/modals/cartModal.js';
import AmountOfProduct from './../../components/modals/cartSubModal/amountOfProduct.js';
import ChatWhatsappCard from './../../components/cards/ChatWhatsappCard.js';
import Cart from './../../assets/images/icons/cart.svg';
import Whatsapp from './../../assets/images/icons/whatsapp.svg';
import Footer from './../../components/footer/footer.js';
import Sorting from './../../assets/images/icons/sort.svg';
import SearchModal from './../../components/modals/searchModal.js';
import FilterModal from './../../components/modals/filterModal.js';
import CategoryModal from './../../components/modals/categoryModal.js';
import ProductCards from './../../components/cards/ProductCards.js';
import {Router} from './../../routes.js';
import dynamic from 'next/dynamic';
import FilterCard from './../../components/cards/FilterCard.js';

export const Sidebar = dynamic(() => {
    return import('./../../components/sidebar/sidebar.js')
},{ ssr:false });

export const Header = dynamic(() => {
    return import('./../../components/header/header.js')
},{ ssr:false });

export default class Categories extends React.Component{
    constructor(props){
        super(props)
        this.state = {
        openSearch : false,
        openFilter : false,
        openCategory : false,
        openSortir  : false,
        showSidebar : false,
        cart : false,
        showCart : false,
        openChat: false,
        data : [],
        amountData : null,
        amountProduct : false,
        amount : null,
        showCart : false,
        nameType: ['Semua Produk','Produk Unggulan','Diskon'],
        nameCategory: ['vans','saba','converse','ventela','local brand','kaos gabut','puma','kids'],
        clickType: '',
        clickCategory: ''
        }
    }

    onOpenSearch = () => {
        this.setState({ openSearch : true });
    }

    onOpenFilter = () => {
        this.setState({ openFilter : true });
    }

    onCloseSearch = () => {
        this.setState({ openSearch : false });
    }

    onCloseFilter = () => {
        this.setState({ openFilter : false });
    }

    onCloseCategory = () => {
        this.setState({ openCategory : false });
    }
    
    pushProfileRoute = () => {
        Router.pushRoute('/orders');
    }

    componentDidMount(){
        let appState = localStorage["cart"];

        if(appState){
            let parseData = JSON.parse(appState);
            this.setState({ 
                showCart:true,
                data:parseData, 
                amountData:parseData.length,
            })
        }
    }

    render(){
        return (
            <>
                <Sidebar
                    clickMenu={() => this.setState({ showSidebar:!this.state.showSidebar })}
                    showSidebar={this.state.showSidebar}
                    removeIcon={this.state.showSidebar}
                    searchOnClick={this.onOpenSearch} 
                    removeSidebar={() => this.setState({ showSidebar:!this.state.showSidebar })}
                />
                <div>
                    {this.state.showSidebar ? (
                        <div className="bg-black bg-opacity-50 h-full w-full fixed z-500 top-0 bottom-0 left-0 right-0" onClick={() => this.setState({ showSidebar:!this.state.showSidebar })} />
                    ) : null}
                    <CartModal
                        openCart={this.state.cart}
                        onCloseCart={() => this.setState({ cart:false })}
                        continueToShop={() => this.setState({ cart:false })}
                        removeModal={() => this.setState({ cart:false })}
                        renderProductData={
                            this.state.data.map((element,index) => {
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
                                                {this.state.amount === null ? element.amount : this.state.amount}
                                            </div>
                                            <div className="ml-2 self-center">
                                                <button
                                                    onClick={() => this.setState({ amountProduct: true,amount:element.amount }) }
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
                        amountProduct={this.state.amount}
                        onReduceAmount={() => this.setState({ amount : this.state.amount - 1 })}
                        onAddAmount={() => this.setState({ amount : this.state.amount + 1 })}
                    />
                    <div className="flex flex-nowrap flex-auto fixed bottom-0 z-100 md:pb-2 px-2 w-full">
                        {this.state.showCart ? 
                            <div className="flex flex-auto justify-center px-2">
                                <button 
                                    className="bg-black focus:outline-none w-full md:w-480 md:h-16 rounded-t-md md:rounded-md px-1 hp-one:px-4 py-2"
                                    onClick={() => this.setState({ cart:true })}
                                >
                                    <div className="md:hidden bg-white opacity-30 mx-auto h-1 w-20 rounded-sm" />
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
                            </div>
                        : <div className="w-full" />}
                        <div className="flex flex-none">
                            <button
                                onClick={() => this.setState({ openChat:!this.state.openChat })}
                                className="flex justify-center float-right self-center rounded-full w-8 h-8 hp-one:w-12 hp-one:h-12  bg-green-whatsapp transition duration-300 ease-in-out hover:bg-opacity-70 hover:bg-green-whatsapp active:bg-opacity-40 active:bg-green-whatsapp focus:outline-none"
                            >
                                <Whatsapp className="self-center fill-current text-white h-4 w-4 hp-one:h-6 hp-one:w-6" />
                            </button>
                        </div>
                    </div> 
                    <div className="bg-gray-lighter flex flex-col w-full min-h-screen max-h-full">  
                        {this.state.openChat ? (
                            <ChatWhatsappCard />
                        ) : null}
                        <Header
                            clickMenu={() => this.setState({ showSidebar:!this.state.showSidebar })}
                            changeIcon={this.state.showSidebar}
                            searchOnClick={this.onOpenSearch}  
                            filterOnClick={this.onOpenFilter}
                            displayProfile={true}
                            profileOnClick={this.pushProfileRoute}
                        />
                        <SearchModal onOpenSearch={this.state.openSearch} onCloseSearch={this.onCloseSearch} />
                        <FilterModal onOpenFilter={this.state.openFilter} onCloseFilter={this.onCloseFilter} />
                        <div className="flex-auto bg-gray-lighter lg:ml-auto xl:w-8/10 lg:w-3/4">
                            <div 
                                style={{
                                    backgroundImage: `url(/images/products/converse_category.jpg)`,
                                    width: "100%",
                                    height: "240px",
                                    backgroundRepeat: "no-repeat",
                                }} 
                                className="w-full flex-grow bg-cover bg-center relative p-1 bg-black bg-opacity-50"
                            >
                                <div className="absolute inset-0 bg-gray-900 bg-opacity-30"></div>
                                <div className="absolute uppercase text-white text-lg md:text-3xl lg:text-4xl xl:text-5xl font-medium bottom-5 left-5">
                                    VANS
                                </div>
                            </div>
                            <div className="xl:hidden py-4 w-full flex flex-wrap">
                                <button
                                    onClick={() => this.setState({ openCategory:true })}
                                    className="flex-1 block text-sm hp-one:text-base bg-gray-200 mx-2 rounded-md text-gray-900 py-4 font-semibold focus:outline-none hover:bg-gray-300 active:bg-gray-400"
                                >
                                    Kategori
                                </button>
                                <button
                                    onClick={() => this.setState({ openFilter:true })}
                                    className="flex-1 block text-sm hp-one:text-base bg-gray-200 mx-2 rounded-md text-gray-900 py-4 font-semibold focus:outline-none hover:bg-gray-300 active:bg-gray-400"
                                >
                                    <Sorting className="float-left ml-4 h-4 w-4 hp-one:h-6 hp-one:w-6"/>
                                    Urutan
                                </button>
                                <CategoryModal 
                                    openCategoryModal={this.state.openCategory}
                                    onCloseCategoryModal={this.onCloseCategory}
                                    renderType={
                                        this.state.nameType.map((element,index) => {
                                            return (
                                                <button
                                                    key={index}
                                                    type="button"
                                                    onClick={() => this.setState({ clickType:element })}
                                                    className={
                                                        "w-full flex flex-grow flex-shrink-0 justify-start h-8 leading-none text-left text-black-darker px-3 font-medium text-sm rounded-lg focus:outline-none hover:bg-gray-lighter-5 active:bg-gray-lighter-3 transition duration-200 ease-in-out " +
                                                        (this.state.clickType === element ? "bg-gray-lighter-5" : "")
                                                    }
                                                >
                                                    <span className="self-center">{element}</span>
                                                </button>
                                            );
                                        })
                                    }
                                    renderCategory={
                                        this.state.nameCategory.map((element,index) => {
                                            return (
                                                <button
                                                    key={index}
                                                    onClick={() => this.setState({ clickCategory:element })}
                                                    className={
                                                        "w-full flex flex-grow flex-shrink-0 justify-start h-8 leading-none text-left text-black-darker px-3 font-medium text-sm uppercase rounded-lg focus:outline-none hover:bg-gray-lighter-5 active:bg-gray-lighter-3 transition duration-200 ease-in-out " +
                                                        (this.state.clickCategory === element ? "bg-gray-lighter-5" : "")
                                                    }
                                                >
                                                    <span className="self-center">{element}</span>
                                                </button>
                                            )
                                        })
                                    }
                                />
                            </div>
                            <div className="bg-gray-lighter flex flex-nowrap">
                                <FilterCard searchOnClick={this.onOpenSearch} />
                                <SearchModal onOpenSearch={this.openSearch} onCloseSearch={this.onCloseSearch} />
                                <div className="flex flex-wrap w-full mb-16">
                                    <ProductCards />
                                    <ProductCards />
                                    <ProductCards /> 
                                    <ProductCards /> 
                                    <ProductCards /> 
                                    <ProductCards /> 
                                    <ProductCards /> 
                                </div>
                            </div>
                        </div>
                        <Footer />
                    </div>
                </div>
            </>
        );
    }
}