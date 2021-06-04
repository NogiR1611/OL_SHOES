import React from 'react';
import Locked from './../assets/images/icons/locked.svg';
import Send from './../assets/images/icons/send.svg';
import Footer from './../components/footer/footer.js';
import SearchModal from './../components/modals/searchModal.js';
import ContactModal from './../components/modals/contactModal.js';
import FilterModal from './../components/modals/filterModal.js';
import dynamic from 'next/dynamic';
import {Router} from '../routes.js';



export const Sidebar = dynamic(() => {
    return import('./../components/sidebar/sidebar.js')
},{ ssr:false });

export const Header = dynamic(() => {
    return import('./../components/header/header.js')
},{ ssr:false });

export default class Messages extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            data : [],
            openSearch : false,
            openContact : false,
            openFilter : false,
            changePage : false,
            placeholder : 'Pesan'
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

    pageToOrders = () => {
        Router.pushRoute('/orders');
    }

    render(){
        return(
            <div className="bg-gray-lighter flex flex-col w-full min-h-screen mb-auto">
                <Header
                    searchOnClick={this.onOpenSearch} 
                    filterOnClick={this.onOpenFilter}
                    displayProfile={false}
                />
                <SearchModal onOpenSearch={this.state.openSearch} onCloseSearch={this.onCloseSearch} />
                <FilterModal onOpenFilter={this.state.openFilter} onCloseFilter={this.onCloseFilter} />
                <Sidebar searchOnClick={this.onOpenSearch} />
                <div className="flex flex-col flex-auto w-full lg:w-3/4 xl:w-8/10 lg:ml-auto bg-gray-lighter min-h-screen relative">
                    <div className="pt-6 pb-4 w-full">
                        <div className="w-6/12 mx-auto">
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
                                    <span className="self-center mx-auto text-sm font-semibold">Login dengan nomor HP</span>    
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
                            <div className="text-black-darker">
                                <p>★ Kamu bisa chat dengan JKTSNEAKERS.</p>
                                <p>★ Jadilah yang pertama mendapat diskon khusus.</p>
                                <p>★ Jangan pernah kehilangan order kamu.</p>
                            </div>
                        </div>
                    </div>
                    <div className="w-full sticky top-16 z-50 bg-gray-lighter">
                        <div className="w-full md:w-9/12 lg:w-6/12 mx-auto text-sm lg:text-base">
                            <button
                                onClick={() => this.pageToOrders() }
                                className="w-1/2 text-center py-2 text-red-darker-1 transition duration-300 ease-in-out hover:bg-red-darker-1 hover:bg-opacity-10 focus:outline-none"
                            >
                                Order Saya
                            </button>
                            <button
                                className="w-1/2 text-center py-2 text-red-darker-1 transition duration-300 ease-in-out hover:bg-red-darker-1 hover:bg-opacity-10 focus:outline-none border-b-2 border-red-darker-1"
                            >
                                Chat
                            </button>
                        </div>
                    </div>
                    <div className="bg-gray-lighter-4 w-full min-h-screen">
                        <div className="w-1/2 mx-auto pt-4 pb-20 flex-col">
                            <div className="flex justify-end mt-4 ml-20">
                                <div className="bg-red-darker-1 rounded-xl w-80 p-2 text-white text-left">
                                    <p>Permisi apa ada yang bisa saya Chat lewat sini?</p>
                                </div>
                            </div>
                            <div className="flex justify-start mt-4 mr-10">
                                <div className="bg-white rounded-xl w-80 p-2 text-black-darker text-left">
                                    <p>Iya Kak silahkan diorder saja Iya Kak silahkan diorder saja Iya Kak silahkan diorder saja
                                    Iya Kak silahkan diorder saja Iya Kak silahkan diorder saja
                                    </p>
                                </div>
                            </div>
                            <div className="flex justify-end mt-4 ml-20">
                                <div className="bg-red-darker-1 rounded-xl w-80 p-2 text-white text-left">
                                    <p>Oke siap min</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                    <div className="fixed bottom-3 w-full flex justify-center flex flex-nowrap flex-auto">
                            <div className="flex w-1/2 block relative border-b-2 border-gray-lighter-9 transition duration-500 ease-in-out focus-within:border-red-darker-1 rounded-t-lg">
                                <input
                                    type="text" 
                                    id="messages" 
                                    name="messages"
                                    placeholder={this.state.placeholder} 
                                    onFocus={() => this.setState({ placeholder: '' })}
                                    onBlur={() => this.setState({ placeholder: 'Pesan' })}
                                    className="block w-full appearance-none focus:outline-none bg-gray-100 rounded-t-lg pt-4 pl-4" 
                                />
                            </div>
                            <button
                                className="flex bg-green-whatsapp transition duration-300 ease-in-out hover:bg-opacity-70 hover:bg-green-whatsapp active:bg-opacity-40 active:bg-green-whatsapp rounded-lg ml-2 h-12 w-16 focus:outline-none"
                            >
                                <Send className="self-center h-6 w-6 mx-auto fill-current text-white" width={24} height={24} />
                            </button>
                        </div>
            </div>
        );
    }
}