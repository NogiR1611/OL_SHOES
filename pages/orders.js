import React from 'react';
import Locked from './../assets/images/icons/locked.svg';
import Lists from './../assets/images/icons/orders.svg';
import Footer from './../components/footer/footer.js';
import OrderCard from './../components/cards/OrderCard.js';
import SearchModal from './../components/modals/searchModal.js';
import ContactModal from './../components/modals/contactModal.js';
import FilterModal from './../components/modals/filterModal.js';
import {Router} from '../routes.js';
import dynamic from 'next/dynamic'

export const Sidebar = dynamic(() => {
    return import('./../components/sidebar/sidebar.js')
},{ ssr:false });

export const Header = dynamic(() => {
    return import('./../components/header/header.js')
},{ ssr:false });

export default class Orders extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            data : [],
            openSearch : false,
            openContact : false,
            openFilter : false,
            changePage : false,
            namePage : "orders",
            orderData : [
                {
                    id: 1,
                    number: 13275,
                    date: "22/05/2021",
                    imgProduct: "/images/products/converse.jpg",
                    size: 40,
                    status: "order dibatalkan"
                },
                {
                    id: 1,
                    number: 13275,
                    date: "22/05/2021",
                    imgProduct: "/images/products/converse.jpg",
                    size: 40,
                    status: "order dibatalkan"
                },
                {
                    id: 1,
                    number: 13275,
                    date: "22/05/2021",
                    imgProduct: "/images/products/converse.jpg",
                    size: 40,
                    status: "order dibatalkan"
                },
            ]
        }
    }
    
    onOpenSearch = () => {
        this.setState({ openSearch : true });
    }

    onOpenFilter = () => {
        this.setState({ openFilter : true });
    }

    onOpenContact = () => {
        this.setState({ openContact : true });
    }

    onCloseSearch = () => {
        this.setState({ openSearch : false });
    }

    onCloseFilter = () => {
        this.setState({ openFilter : false });
    }

    onCloseContact = () => {
        this.setState({ openContact : false });
    }

    pageToHome = () => {
        Router.pushRoute('/');
    }

    pageToMessages = () => {
        Router.pushRoute('/messages');
    }

    render(){   
        return(
            <div className="bg-gray-lighter flex flex-col w-full min-h-screen max-h-full mb-auto">
                <Header
                    searchOnClick={this.onOpenSearch} 
                    filterOnClick={this.onOpenFilter}
                    displayProfile={false}
                    clickMenu={this.pageToHome}
                />
                <SearchModal onOpenSearch={this.state.openSearch} onCloseSearch={this.onCloseSearch} />
                <FilterModal onOpenFilter={this.state.openFilter} onCloseFilter={this.onCloseFilter} />
                <Sidebar searchOnClick={this.onOpenSearch} />
                <div className="flex flex-col flex-auto w-full lg:w-3/4 xl:w-8/10 lg:ml-auto bg-gray-lighter">
                    <div className="pt-6 pb-4 w-full">
                        <div className="w-11/12 md:w-9/12 lg:w-6/12 mx-auto">
                            <div className="flex flex-nowrap flex-auto w-full">
                                <ContactModal onOpenContact={this.state.openContact} onCloseContact={this.onCloseContact} />
                                <div className="flex flex-none mr-2">
                                    <img 
                                        className="w-16 h-16"
                                        src="https://d1ggq58xg1ha0k.cloudfront.net/_nuxt/img/profile.5623c4f.svg" 
                                    />
                                </div>
                                <button 
                                    onClick={this.onOpenContact}
                                    className="flex flex-1 h-12 self-center bg-red-darker-1 duration-300 hover:opacity-90 active:bg-opacity-50 active:bg-red-darker-1 focus:outline-none px-5 w-1/3 text-white font-semibold mx-1 rounded-lg"
                                >
                                    <Locked
                                        className="h-6 w-6 inline-block fill-current text-white stroke-current stroke-0 text-white float-left self-center"
                                    />
                                    <span className="self-center mx-auto text-xs md:text-sm font-semibold">Login dengan nomor HP</span>    
                                </button>
                            </div>
                            <div className="flex justify-end mt-2">
                                <img 
                                    src="https://d1ggq58xg1ha0k.cloudfront.net/_nuxt/img/encryption.238379a.svg"
                                    className="flex-shrink-1 mr-4"
                                />
                                <img 
                                    src="https://d1ggq58xg1ha0k.cloudfront.net/_nuxt/img/secure.d41b5e9.svg"
                                    className="flex-shrink-1"
                                />
                            </div>
                            <p className="mt-6 mb-2 text-black-darker font-medium">Dapatkan layanan VIP dengan login 1-klik:</p>
                            <div className="text-sm lg:text-base text-black-darker leading-5">
                                <p>★ Kamu bisa chat dengan JKTSNEAKERS.</p>
                                <p>★ Jadilah yang pertama mendapat diskon khusus.</p>
                                <p>★ Jangan pernah kehilangan order kamu.</p>
                            </div>
                        </div>
                    </div>
                    <div className="w-full sticky top-16 z-50 bg-gray-lighter">
                        <div className="w-full md:w-9/12 lg:w-6/12 mx-auto text-sm lg:text-base">
                            <button
                                className="w-1/2 text-center py-2 text-red-darker-1 transition duration-300 ease-in-out hover:bg-red-darker-1 hover:bg-opacity-10 focus:outline-none border-b-2 border-red-darker-1"
                            >
                                Order Saya
                            </button>
                            <button
                                onClick={() => this.pageToMessages() }
                                className="w-1/2 text-center py-2 text-red-darker-1 transition duration-300 ease-in-out hover:bg-red-darker-1 hover:bg-opacity-10 focus:outline-none"
                            >
                                Chat
                            </button>
                        </div>
                    </div>
                    <div className="bg-gray-lighter-4 w-full min-h-screen pt-4 pb-16">
                        <div className="mx-auto w-11/12 md:w-9/12 lg:w-1/2">
                            <p className="font-semibold text-black-darker text-xl">
                                Order Saya({this.state.orderData ? this.state.orderData.length : 0})
                            </p>
                        </div>
                        {this.state.orderData ?
                            this.state.orderData.map((element,index) => {
                                return (
                                    <OrderCard 
                                        href={`/orders/${element.id}`}
                                        numberOrder={element.number}
                                        dateOrder={element.date}
                                        size={element.size}
                                        imageProduct={element.imgProduct}
                                        statusOrder={element.status}
                                    />
                                )
                            }) : (
                            <div className="mx-auto w-11/12 md:w-3/4 lg:w-1/2">    
                                <p className="bg-gray-300 p-4 rounded-md text-gray-700">
                                    Kamu bisa mengecek order kamu dan update-nya di daftar ini.
                                </p>
                            </div>
                        )}
                    </div>
                </div>
                <Footer />
            </div>
        );
    }
}