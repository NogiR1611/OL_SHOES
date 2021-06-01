import React from 'react';
import Footer from './../components/footer/footer.js';
import CartModal from './../components/modals/cartModal.js';
import AmountOfProduct from './../components/modals/cartSubModal/amountOfProduct.js'
import SearchModal from './../components/modals/searchModal.js';
import FilterModal from './../components/modals/filterModal.js';
import ProductCards from './../components/cards/ProductCards.js';
import CategoryCard from './../components/cards/CategoryCard.js';
import ChatWhatsappCard from './../components/cards/ChatWhatsappCard.js';
import CarouselPromotionCard from './../components/cards/CarouselPromotionCard.js';
import {Router} from '../routes.js';
import dynamic from 'next/dynamic';
import Cart from './../assets/images/icons/cart.svg';
import Whatsapp from './../assets/images/icons/whatsapp.svg';


export const Header = dynamic(() => {
    return import('./../components/header/header.js')
},{ ssr:false });

export const Sidebar = dynamic(() => {
    return import('./../components/sidebar/sidebar.js')
},{ ssr:false });

/*
export const getStaticProps = async () => {
    //example of API data
    const apiURL = 'https://jsonplaceholder.typicode.com/users';
    const response = await fetch(apiURL);
    const result = await response.json();
    return { 
        props : { categories : result } 
    }
}
*/

class Index extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            data : [],
            openSearch : false,
            openFilter : false,
            namePage : 'product',
            showSidebar : false,
            showCart: false,
            cart: false,
            amountProduct: false,
            data: [],
            amountData: null,
            name: null,
            price: null,
            size: null,
            amount: null,
            openChat: false,
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
            },() => {
                console.log(this.state.showCart)
                console.log(this.state.data)
            })
        }
    }

    render(){
        return (
            <>
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
                                            className="inline-block w-12 h-12 self-center"
                                        />
                                        <div className="flex-shrink flex-grow ml-2">
                                            <span className="bg-black text-white mt-1 mr-1 text-sm px-1">Ada Stok</span>
                                            <span className="block text-black-darker font-bold whitespace-nowrap overflow-ellipsis overflow-hidden leading-none">{element.name}</span> 
                                            <span className="block text-sm text-gray-lighter-1 leading-none">SIZE {element.size}</span>
                                            <span className="block text-sm text-gray-lighter-1 opacity-50 line-through leading-none">Rp 320.000</span>
                                            <span className="block text-sm text-gray-lighter-1 leading-none">Rp {element.price}</span>
                                        </div>
                                        <div className="mx-1 font-bold self-center">
                                            {this.state.amount === null ? element.amount : this.state.amount}
                                        </div>
                                        <div className="ml-2 self-center">
                                            <button
                                                onClick={() => this.setState({ amountProduct: true,amount:element.amount }) }
                                                className="w-full h-8 px-3 text-sm justify-self-end font-semibold bg-gray-lighter-4 text-black-darker rounded-md outline-none focus:outline-none hover:bg-gray-200"
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
                {this.state.showCart ? 
                        <div className="flex flex-nowrap flex-auto justify-center fixed bottom-0 z-50 pb-2 px-2 w-full">
                            <button 
                                className="block flex flex-nowrap bg-black focus:outline-none w-9/10 md:w-480 md:h-16 mx-auto rounded-md px-4 py-2"
                                onClick={() => this.setState({ cart:true })}
                            >
                                <div className="flex-auto text-left">
                                    <p className="font-bold text-white">{this.state.amountData} Barang di keranjang saya</p>
                                    <p className="text-white text-sm">Rp.320000</p>
                                </div>
                                <div className="flex self-center">
                                    <Cart className="fill-current text-white" width={24} height={24} />
                                    <span className="bg-red-darker-1 rounded-full font-medium px-1 py-1 h-6 w-6 text-xs text-white absolute ml-4 top-0">
                                        {this.state.amountData}
                                    </span>
                                </div>
                            </button>
                            <button
                                onClick={() => this.setState({ openChat:!this.state.openChat })}
                                className="flex justify-center self-center rounded-full h-12 w-12 bg-green-whatsapp focus:outline-none"
                            >
                                <Whatsapp className="self-center h-6 w-6 fill-current text-white" width={24} height={24} />
                            </button>
                        </div> 
                    : null}
                <div className={"bg-gray-lighter flex flex-col w-full min-h-screen mb-auto"}>  
                {this.state.openChat ? (
                    <ChatWhatsappCard />
                ) : null}
                    <Header
                        clickMenu={() => this.setState({ showSidebar:!this.state.showSidebar })}
                        changeIcon={this.state.showSidebar}
                        searchOnClick={this.onOpenSearch} 
                        displayFilter={true}
                        displayProfile={true}
                        filterOnClick={this.onOpenFilter}
                        profileOnClick={this.pushProfileRoute}
                    />
                    <SearchModal onOpenSearch={this.state.openSearch} onCloseSearch={this.onCloseSearch} />
                    <FilterModal onOpenFilter={this.state.openFilter} onCloseFilter={this.onCloseFilter} />
                    <Sidebar
                        showSidebar={this.state.showSidebar}
                        removeIcon={this.state.showSidebar}
                        searchOnClick={this.onOpenSearch} 
                        removeSidebar={() => this.setState({ showSidebar:!this.state.showSidebar })}
                    />
                    <div
                        className={"flex flex-col flex-auto bg-gray-lighter min-h-screen w-full lg:ml-auto lg:w-3/4 relative p-4 transition duration-100 linear " + (this.state.showSidebar ? "opacity-30" : "")}
                    >
                        <div className="bg-gray-400 my-2 w-full h-full">
                            <p className="text-center">Cover Here</p>
                        </div>
                        <div className="w-full lg:w-11/12 mx-auto">
                            <div className="flex flex-wrap w-full">
                                <CategoryCard 
                                    sourceImg='/images/products/vans_category.jpg'
                                    name='vans'
                                />
                                <CategoryCard 
                                    sourceImg='/images/products/vans_category.jpg'
                                    name='vans'
                                />
                            </div>
                            <div className="flex flex-wrap w-full p-1">
                                <div className="text-center w-full bg-gray-400">
                                    Profile Video Here
                                </div>
                            </div>
                            <div className="flex flex-wrap w-full p-1 h-72">
                                <div className="text-center w-full h-72">
                                    <CarouselPromotionCard />
                                </div>
                            </div>
                            <div className="flex flex-wrap w-full p-1">
                                <div className="text-center w-full">
                                    <p className="text-gray-700">Product Recommended</p>
                                </div>
                                <ProductCards />
                                <ProductCards />
                                <ProductCards />
                            </div>
                            <div className="flex flex-wrap w-full p-1">
                                <div className="text-center w-full bg-gray-400">
                                    Buyer Slider
                                </div>
                            </div>
                            <div className="flex flex-wrap w-full p-1">
                                <div className="w-full border-b-2 border-gray-200">
                                    <button
                                        onClick={() => this.setState({ namePage: 'category' }) }
                                        className={"w-1/3 md:px-6 py-2 text-sm text-gray-600 transition duration-300 ease-in-out hover:bg-red-100 focus:outline-none " + (this.state.namePage === "category" ? "border-b-2 border-red-600 text-red-600" : "")}
                                    >
                                        Kategori
                                    </button>
                                    <button
                                        onClick={() => this.setState({ namePage: 'product' }) }
                                        className={"w-1/3 md:px-6 py-2 text-sm text-gray-600 transition duration-300 ease-in-out hover:bg-red-100 focus:outline-none " + (this.state.namePage === "product" ? "border-b-2 border-red-600 text-red-600" : "")}
                                    >
                                        Semua Produk
                                    </button>
                                    <button
                                        onClick={() => this.setState({ namePage: 'discount' }) }
                                        className={"w-1/3 md:px-6 py-2 text-sm text-gray-600 transition duration-300 ease-in-out hover:bg-red-100 focus:outline-none " + (this.state.namePage === "discount" ? "border-b-2 border-red-600 text-red-600" : "")}
                                    >
                                        Diskon
                                    </button>
                                </div>
                                <div className="w-full">
                                    {this.state.namePage === 'category' ? 
                                        (
                                            <div className="flex flex-wrap">
                                                <CategoryCard 
                                                    sourceImg='/images/products/vans_category.jpg'
                                                    name='vans'
                                                />
                                                <CategoryCard 
                                                    sourceImg='/images/products/vans_category.jpg'
                                                    name='vans'
                                                />
                                                <CategoryCard 
                                                    sourceImg='/images/products/vans_category.jpg'
                                                    name='vans'
                                                />
                                            </div>
                                        ) : ''
                                    }
                                    {this.state.namePage === 'product' ? 
                                        (
                                            <div className="flex flex-wrap w-full px-auto">
                                                <ProductCards />
                                                <ProductCards />
                                                <ProductCards />
                                                <ProductCards />
                                            </div>
                                        ) : ''
                                    }
                                    {this.state.namePage === 'discount' ? 
                                        (
                                        <div className="flex flex-wrap w-full px-auto">
                                            <ProductCards />
                                            <ProductCards />
                                            <ProductCards />
                                            <ProductCards />
                                            <ProductCards />
                                        </div>
                                        ) : ''
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                    <Footer />
                </div>
            </>
        );
    }
}

export default Index;