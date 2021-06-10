import React from 'react';
import numeral from 'numeral';
import Footer from './../components/footer/footer.js';
import CartModal from './../components/modals/cartModal.js';
import AmountOfProduct from './../components/modals/cartSubModal/amountOfProduct.js';
import CategoryCard from './../components/cards/CategoryCard.js';
import ChatWhatsappCard from './../components/cards/ChatWhatsappCard.js';
import SearchModal from './../components/modals/searchModal.js';
import Cart from './../assets/images/icons/cart.svg';
import Whatsapp from './../assets/images/icons/whatsapp.svg';
import dynamic from 'next/dynamic';
import {Router} from '../routes.js';

export const Sidebar = dynamic(() => {
    return import('./../components/sidebar/sidebar.js')
},{ ssr:false });

export const Header = dynamic(() => {
    return import('./../components/header/header.js')
},{ ssr:false });

export default class Categories extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            openSearch: false,
            showSidebar: false,
            cart: false,
            data: [],
            amountData: null,
            showCart: false,
            amountProduct: false,
            amount: null,
            openChat: false,
            tag: ["#adidas aw","#nike","#vans","#converse","#allstar","#airforce","#allstar","#authen","#authentic","#chuka",,"#converse60","#era","#macbeth","#revenge","#slip"],
        }
    }

    onOpenSearch = () => {
        this.setState({ openSearch : true });
    }

    onCloseSearch = () => {
        this.setState({ openSearch : false });
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
                    <div className="flex flex-nowrap flex-auto fixed bottom-0 z-50 md:pb-2 px-2 w-full">
                        {this.state.showCart ? 
                            <div className="flex flex-auto justify-center px-2">
                                <button 
                                    className="bg-black focus:outline-none w-full md:w-480 md:h-16 rounded-t-md md:rounded-md px-4 py-2"
                                    onClick={() => this.setState({ cart:true })}
                                >
                                    <div className="md:hidden bg-white opacity-30 mx-auto h-1 w-20 rounded-sm" />
                                    <div className="flex flex-nowrap">  
                                        <div className="flex flex-nowrap flex-auto text-left">
                                            <div className="flex flex-none mr-2">
                                                <img
                                                    src="/images/products/converse.jpg"
                                                    className="inline-block rounded-full w-12 h-12 self-center"
                                                />
                                            </div>
                                            <div className="self-center flex-auto">
                                                <p className="font-bold text-white text-sm md:text-base">{this.state.amountData} Barang di keranjang saya</p>
                                                <p className="text-white text-xs md:text-sm">Rp. {numeral(320000).format('0,0')}</p>
                                            </div>
                                        </div>
                                        <div className="flex self-center">
                                            <Cart className="fill-current text-white" width={24} height={24} />
                                            <span className="bg-red-darker-1 rounded-full font-medium px-1 py-1 h-6 w-6 text-xs text-white absolute ml-4 top-0">
                                                {this.state.amountData}
                                            </span>
                                        </div>
                                    </div>
                                </button>
                            </div>
                        : null}
                        <div className="flex flex-none">
                            <button
                                onClick={() => this.setState({ openChat:!this.state.openChat })}
                                className="flex justify-center float-right self-center rounded-full h-12 w-12 bg-green-whatsapp transition duration-300 ease-in-out hover:bg-opacity-70 hover:bg-green-whatsapp active:bg-opacity-40 active:bg-green-whatsapp focus:outline-none"
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
                            profileOnClick={this.pushProfileRoute}
                            displayProfile={true}
                        />
                        <SearchModal onOpenSearch={this.state.openSearch} onCloseSearch={this.onCloseSearch} />
                        <Sidebar
                            showSidebar={this.state.showSidebar}
                            removeIcon={this.state.showSidebar}
                            searchOnClick={this.onOpenSearch} 
                            removeSidebar={() => this.setState({ showSidebar:!this.state.showSidebar })}
                        />
                        <div className="flex flex-wrap relative bg-gray-lighter p-1 w-full lg:ml-auto lg:w-3/4 xl:w-8/10">
                            <div className="flex-column relative w-11/12 mx-auto">
                                <div className="flex flex-wrap">
                                    <div className="w-1/2 md:w-1/3">
                                        <CategoryCard 
                                            sourceImg='/images/products/vans_category.jpg'
                                            name='vans'
                                        />
                                    </div>
                                    <div className="w-1/2 md:w-1/3">
                                        <CategoryCard 
                                            sourceImg='/images/products/vans_category.jpg'
                                            name='vans'
                                        />
                                    </div>
                                    <div className="w-1/2 md:w-1/3">
                                        <CategoryCard 
                                            sourceImg='/images/products/vans_category.jpg'
                                            name='vans'
                                        />
                                    </div>
                                    <div className="w-1/2 md:w-1/3">
                                        <CategoryCard 
                                            sourceImg='/images/products/vans_category.jpg'
                                            name='vans'
                                        />
                                    </div>
                                    <div className="w-1/2 md:w-1/3">
                                        <CategoryCard 
                                            sourceImg='/images/products/vans_category.jpg'
                                            name='vans'
                                        />
                                    </div>
                                    <div className="w-1/2 md:w-1/3">
                                        <CategoryCard 
                                            sourceImg='/images/products/vans_category.jpg'
                                            name='vans'
                                        />
                                    </div>
                                    <div className="w-1/2 md:w-1/3">
                                        <CategoryCard 
                                            sourceImg='/images/products/vans_category.jpg'
                                            name='vans'
                                        />
                                    </div>
                                    <div className="w-1/2 md:w-1/3">
                                        <CategoryCard 
                                            sourceImg='/images/products/vans_category.jpg'
                                            name='vans'
                                        />
                                    </div>
                                </div>
                                <div className="mx-auto mt-6 px-2 w-11/12 md:w-9/12">
                                    <div className="flex flex-wrap flex-auto">
                                        {this.state.tag.map((element,index) => {
                                            return (
                                                <div 
                                                    key={index}
                                                    className="flex-shrink-0 h-12 hp-one:h-16 py-2 hp-one:px-1"
                                                >
                                                    <a href="#" className="text-black-darker px-1 hp-one:px-2 py-4 text-xs hp-one:text-sm md:text-base">
                                                        {element}
                                                    </a>
                                                </div>
                                            )
                                        })}
                                    </div>
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