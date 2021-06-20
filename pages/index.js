import React from 'react';
import numeral from 'numeral';
import Footer from './../components/footer/footer.js';
import CartModal from './../components/modals/cartModal.js';
import AmountOfProduct from './../components/modals/cartSubModal/amountOfProduct.js';
import ListAddress from './../components/modals/cartSubModal/listAddress.js';
import OptionAddress from './../components/modals/cartSubModal/optionAddress.js';
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
import address from './../utils/address.js';

export const Header = dynamic(() => {
    return import('./../components/header/header.js')
},{ ssr:false });

export const Sidebar = dynamic(() => {
    return import('./../components/sidebar/sidebar.js')
},{ ssr:false });

/*
export async function getServerSideProps(){
    const apiURL = `http://localhost:8000/v1/token`;
    const response = await fetch(apiURL);
    const token_user = await response.json();
    return { 
        props : { token_user } 
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
            addressSaved : false,
            listAddress : false,
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
            tag: ["#adidas aw","#nike","#vans","#converse","#allstar","#airforce","#allstar","#authen","#authentic","#chuka",,"#converse60","#era","#macbeth","#revenge","#slip"],
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
            })
        }

        address.get('/users/token')
        .then(res => {
            let tokenUser = localStorage["user_token"];

            if(!tokenUser){
                const {token} = res.data;
                localStorage["user_token"] = JSON.stringify({ token });
            }
        })
        .catch(err => console.log(err))

        /*
        if(!tokenUser){
            let token = this.props.token_user;
            let object_token = [];
            object_token.push(token);
            localStorage["token"] = JSON.stringify(object_token);
        }
        */
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
                        removeModal={() => this.setState({ cart:false,addressSaved:true })}
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
                    <ListAddress 
                        openAddressSaved={this.state.addressSaved}
                        openOptionAddress={() => this.setState({ listAddress:true })}
                        onCloseAddressSaved={() => this.setState({ addressSaved:false })}
                    />
                    <OptionAddress 
                        openListAddress={this.state.listAddress}
                        onCloseListAddress={() => this.setState({ listAddress:false })}
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
                    <div className={"bg-gray-lighter flex flex-col w-full min-h-screen mb-auto"}>  
                        {this.state.openChat ? (
                            <ChatWhatsappCard  
                                onClickWhatsapp={() => window.open('https://api.whatsapp.com/send?phone=+6281212701276','_blank')}
                            />
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
                        <div
                            className="flex flex-col flex-auto bg-gray-lighter min-h-screen w-full lg:ml-auto lg:w-3/4 xl:w-8/10 relative p-1 transition duration-100 linear"
                        >
                            <div className="bg-gray-400 my-2 w-full h-full">
                                <p className="text-center">Cover Here</p>
                            </div>
                            <div className="w-full lg:w-11/12 mx-auto">
                                <div className="flex flex-wrap w-full p-1">
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
                                <div className="flex flex-wrap justify-center w-full p-1">
                                    <div className="flex">
                                        <p className="text-sm hp-one:text-base text-gray-700">Product Recommended</p>
                                    </div>
                                </div>
                                <div className="w-full">
                                        <div className="flex flex-wrap w-full mx-auto p-1">
                                            <ProductCards />
                                            <ProductCards />
                                            <ProductCards />
                                            <ProductCards />
                                        </div>
                                </div>
                                <div className="flex flex-wrap w-full p-1">
                                    <div className="text-center w-full bg-gray-400">
                                        Buyer Slider
                                    </div>
                                </div>
                                <div className="flex flex-wrap w-full p-1">
                                    <div className="w-full bg-gray-lighter sticky top-16 z-90 flex flex-nowrap flex-auto border-b-2 border-gray-200 whitespace-nowrap overflow-hidden flex-grow flex-shrink-0">
                                        <button
                                            onClick={() => this.setState({ namePage: 'category' }) }
                                            className={"w-1/3 md:px-6 whitespace-normal relative py-2 text-xs hp-one:text-sm text-white-2 transition duration-300 ease-in-out hover:bg-red-darker-1 hover:bg-opacity-10 focus:outline-none " + (this.state.namePage === "category" ? "border-b-2 border-red-darker-1 text-red-darker-1" : "")}
                                        >
                                            Kategori
                                        </button>
                                        <button
                                            onClick={() => this.setState({ namePage: 'product' }) }
                                            className={"w-1/3 md:px-6 whitespace-normal relative py-2 text-xs hp-one:text-sm text-white-2 transition duration-300 ease-in-out hover:bg-red-darker-1 hover:bg-opacity-10 focus:outline-none " + (this.state.namePage === "product" ? "border-b-2 border-red-darker-1 text-red-darker-1" : "")}
                                        >
                                            Semua Produk
                                        </button>
                                        <button
                                            onClick={() => this.setState({ namePage: 'discount' }) }
                                            className={"w-1/3 md:px-6 whitespace-normal relative py-2 text-xs hp-one:text-sm text-white-2 transition duration-300 ease-in-out hover:bg-red-darker-1 hover:bg-opacity-10 focus:outline-none " + (this.state.namePage === "discount" ? "border-b-2 border-red-darker-1 text-red-darker-1" : "")}
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
                                                <div className="flex justify-center w-full">
                                                    <div className="flex flex-wrap w-full mx-auto">
                                                        <ProductCards />
                                                        <ProductCards />
                                                        <ProductCards />
                                                        <ProductCards />
                                                    </div>
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

export default Index;