import React from 'react';
import {format} from 'date-fns';
import Locked from './../assets/images/icons/locked.svg';
import Send from './../assets/images/icons/send.svg';
import FlashAlert from './../components/cards/FlashAlertCard.js';
import SearchModal from './../components/modals/searchModal.js';
import ContactModal from './../components/modals/contactModal.js';
import FilterModal from './../components/modals/filterModal.js';
import dynamic from 'next/dynamic';
import {Router} from '../routes.js';
import {io} from "socket.io-client";


export const Sidebar = dynamic(() => {
    return import('./../components/sidebar/sidebar.js')
},{ ssr:false });

export const Header = dynamic(() => {
    return import('./../components/header/header.js')
},{ ssr:false });

const SERVER = "http://localhost:8080";
let socket = io(SERVER);

export default class Messages extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            data : [],
            message : '',
            messages : [],
            naon: null,
            user: '',
            openSearch : false,
            openContact : false,
            openFilter : false,
            changePage : false,
            showAlert : false,
            showSidebar : false,
            placeholder : 'Pesan'
        }
        
        /*
        this.socket = io("http://localhost:8000");
        
        this.socket.on('connection',function(data){
            addMessage(data);
        });
        
        const addMessage = data => {
            this.setState({ messages: [...this.state.messages,data]});
        }

        this.sendMessage = ev => {
            ev.preventDefault();
            this.socket.emit('connection',{
                message: this.state.message
            })
            this.setState({message: '' });
        }
        */
    }

    componentDidMount(){
        let userToken = localStorage["user_token"];
        if(userToken){
            let parseToken = JSON.parse(userToken);
            this.setState({ user:parseToken.token });
        }
        
        socket.on("test",data => {
            console.log(data);
        })

        socket.on("connection", () => {
            console.log(socket.id);
        });

        socket.on('spread-message',(data) => {
            this.setState({ messages:data })
        })

        socket.on("retrieve-message",(data) => {
            console.log(data);
            this.setState({ messages:[...this.state.messages,data] });
        });
    }

    clickEnter = e => {
        if(e.key === "Enter"){
            if(this.state.message === ''){
                this.setState({ showAlert:true });
                setTimeout(() => this.setState({ showAlert:false }),1000)
            }
            this.sendMessage();
        }
    }

    sendMessage = ev => {
        if(this.state.message === ''){
            this.setState({ showAlert:true });
            setTimeout(() => this.setState({ showAlert:false }),1000)
        }
        else{
            socket.emit('send-message',{
                user:this.state.user,
                message: this.state.message,
                time: format(new Date(),'hh:mm dd/MM/yyyy')
            });
            this.setState({message: '' });
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
        socket.emit('channel-name',this.state.user);
        return(
            <>
            {this.state.showSidebar ? (
                <div className="bg-black bg-opacity-50 h-full w-full fixed z-500 top-0 bottom-0 left-0 right-0" onClick={() => this.setState({ showSidebar:!this.state.showSidebar })} />
            ) : null}
            <div className="bg-gray-lighter flex flex-col w-full min-h-screen mb-auto">
                <Header
                    clickMenu={() => this.setState({ showSidebar:!this.state.showSidebar })}
                    changeIcon={this.state.showSidebar}
                    searchOnClick={this.onOpenSearch} 
                    filterOnClick={this.onOpenFilter}
                    displayProfile={false}
                />
                <SearchModal onOpenSearch={this.state.openSearch} onCloseSearch={this.onCloseSearch} />
                <FilterModal onOpenFilter={this.state.openFilter} onCloseFilter={this.onCloseFilter} />
                <Sidebar
                    removeSidebar={() => this.setState({ showSidebar:!this.state.showSidebar })}
                    showSidebar={this.state.showSidebar}
                    removeIcon={this.state.showSidebar}
                    searchOnClick={this.onOpenSearch} 
                />
                {this.state.showAlert ? (
                    <FlashAlert 
                        message="Mohon isikan pesan anda"
                        showChecklist={false}
                    />
                    )
                : null}
                <div className="flex flex-col flex-auto w-full lg:w-3/4 xl:w-8/10 lg:ml-auto bg-gray-lighter min-h-screen relative">
                    <div className="pt-6 pb-4 w-full">
                        <div className="w-11/12 md:w-9/12 lg:w-6/12 mx-auto">
                            <div className="flex flex-nowrap flex-auto w-full">
                                <ContactModal onOpenContact={this.state.openContact} onCloseContact={this.onCloseContact} />
                                <div className="flex flex-none mr-2">
                                    <img 
                                        className="w-8 h-8 hp-one:w-16 hp-one:h-16"
                                        src="https://d1ggq58xg1ha0k.cloudfront.net/_nuxt/img/profile.5623c4f.svg" 
                                    />
                                </div>
                                <button 
                                    onClick={this.onOpenContact}
                                    className="flex flex-1 h-8 hp-one:h-12 self-center bg-red-darker-1 transition duration-300 ease-in-out hover:opacity-90 active:bg-opacity-50 active:bg-red-darker-1 focus:outline-none px-5 w-1/3 text-white font-semibold mx-1 rounded-lg"
                                >
                                    <Locked
                                        className="h-4 w-4 hp-one:h-6 hp-one:w-6 inline-block fill-current text-white stroke-current stroke-0 text-white float-left self-center"
                                    />
                                    <span className="self-center mx-auto text-xs md:text-sm font-semibold">Login dengan nomor HP</span>    
                                </button>
                            </div>
                            <div className="flex justify-end mt-2">
                                <img 
                                    src="https://d1ggq58xg1ha0k.cloudfront.net/_nuxt/img/encryption.238379a.svg"
                                    className="flex-shrink-0 mr-4"
                                />
                                <img 
                                    src="https://d1ggq58xg1ha0k.cloudfront.net/_nuxt/img/secure.d41b5e9.svg"
                                    className="flex-shrink-0"
                                />
                            </div>
                            <p className="mt-6 mb-2 text-black-darker font-medium text-sm hp-one:text-base">Dapatkan layanan VIP dengan login 1-klik:</p>
                            <div className="text-xs hp-one:text-sm text-black-darker leading-5">
                                <p>★ Kamu bisa chat dengan JKTSNEAKERS.</p>
                                <p>★ Jadilah yang pertama mendapat diskon khusus.</p>
                                <p>★ Jangan pernah kehilangan order kamu.</p>
                            </div>
                        </div>
                    </div>
                    <div className="w-full sticky top-24 md:top-16 z-90 bg-gray-lighter">
                        <div className="w-full md:w-9/12 lg:w-6/12 mx-auto text-xs hp-one:text-sm lg:text-base">
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
                        <div className="w-full md:w-9/12 lg:w-1/2 mx-auto pt-4 px-2 hp-one:px-6 pb-20 flex-col">
                            {/*
                            <div className="flex justify-end mt-4 ml-8 hp-one:ml-20">  
                                <div className="flex flex-col">
                                    <div className="bg-red-darker-1 rounded-xl flex-shrink break-words md:w-80 p-2 text-xs hp-one:text-sm md:text-base text-white text-left">
                                        <p>Permisi apa ada yang bisa saya Chat lewat sini?</p>
                                    </div>
                                    <div className="flex justify-start pl-3 mt-1">
                                        <p className="text-tiny hp-one:text-xs md:text-sm text-gray-lighter-1">15 Mei 2021 14:36</p>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-nowrap flex-auto justify-start mt-4 mr-8 hp-one:mr-10">
                                <div className="flex-shrink-0">
                                    <Logo className="h-6 w-6 rounded-full mr-2" />
                                </div>
                                <div className="flex flex-col">
                                    <div className="flex-shrink break-words bg-white rounded-xl md:w-80 p-2 text-xs hp-one:text-sm md:text-base text-black-darker text-left">
                                        <p>Iya Kak silahkan diorder saja Iya Kak silahkan diorder saja Iya Kak silahkan diorder saja
                                        Iya Kak silahkan diorder saja Iya Kak silahkan diorder saja
                                        </p>
                                    </div>
                                    <div className="flex justify-start pl-3 mt-1">
                                        <p className="text-tiny hp-one:text-xs md:text-sm text-gray-lighter-1">15 Mei 2021 14:36</p>
                                    </div>
                                </div>
                            </div>
                            <div className="flex justify-end mt-4 ml-8 hp-one:ml-20">
                                <div className="flex flex-col">
                                    <div className="flex-shrink break-words bg-red-darker-1 rounded-xl md:w-80 p-2 text-xs hp-one:text-sm md:text-base text-white text-left">
                                        <p>Oke siap min</p>
                                    </div>
                                    <div className="flex justify-start pl-3 mt-1">
                                        <p className="text-tiny hp-one:text-xs md:text-sm text-gray-lighter-1">15 Mei 2021 14:36</p>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-nowrap flex-auto justify-start mt-4 mr-8 hp-one:mr-10">
                                <div className="flex-shrink-0">
                                    <Logo className="h-6 w-6 rounded-full mr-2" />
                                </div>
                                <div className="flex flex-shrink flex-col">
                                    <div className="p-2 bg-white md:w-80 rounded-xl">
                                        <p className="text-sm hp-one:text-base text-red-darker-1 font-semibold">Status: Menunggu pembayaran</p>
                                        <p className="break-words text-black-darker text-xs hp-one:text-sm md:text-base">
                                            Mohon lakukan pembayaran agar order kamu tidak dibatalkan
                                        </p>
                                    </div>
                                    <div className="mt-2 bg-white rounded-xl md:w-80 py-4 px-2">
                                        <button 
                                            className="flex flex-auto flex-nowrap bg-gray-lighter-4 hover:bg-gray-lighter-5 active:bg-gray-lighter-3 transition duration-300 linear w-full h-8 rounded-lg px-3 focus:outline-none"
                                        >
                                            <div className="flex flex-none self-center">
                                                <Note 
                                                    className="h-4 w-4 hp-one:h-6 hp-one:w-6 self-center"
                                                />
                                            </div>
                                            <div className="flex flex-auto justify-center self-center">
                                                <p className="text-black-darker font-semibold text-xs hp-one:text-sm md:text-base">Lihat Order</p>
                                            </div>
                                        </button>
                                    </div>
                                    <div className="flex justify-start pl-3 mt-1">
                                        <p className="text-tiny hp-one:text-xs md:text-sm text-gray-lighter-1">15 Mei 2021 14:36</p>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-nowrap flex-auto justify-start mt-4 mr-8 hp-one:mr-10">
                                <div className="flex-shrink-0">
                                    <Logo className="h-6 w-6 rounded-full mr-2" />
                                </div>
                                <div className="flex flex-col">
                                    <div className="p-2 bg-white flex-shrink-0 md:w-80 rounded-xl">
                                        <p className="text-sm hp-one:text-base text-red-darker-1 font-semibold">Status: Order dibatalkan</p>
                                        <p className="text-black-darker break-words text-xs hp-one:text-sm md:text-base">
                                            Mohon maaf atas ketidaknyamanannya. Kamu bisa order ulang produk tersebut di bawah ini.
                                        </p>
                                    </div>
                                    <div className="mt-2 bg-white rounded-xl flex-shrink-0 md:w-80 py-4 px-2">
                                        <div className="mb-3">
                                            <div className="flex flex-nowrap flex-auto pb-2 text-xs hp-one:text-sm md:text-base">
                                                <div className="flex flex-auto flex-col">
                                                    <p className="text-xs hp-one:text-base font-bold text-black-darker break-words">VANS OLD SKOOL BLACK WHITE</p>
                                                    <p className="text-xs hp-one:text-base text-gray-lighter-1">SIZE 40</p>
                                                    <p className="text-xs hp-one:text-base text-gray-lighter-1 break-words">(Order Berhasil 22/05/2021)</p>
                                                </div>
                                                <div className="flex flex-none ml-2">
                                                    <img 
                                                        src="images/products/converse.jpg"
                                                        className="w-8 h-8 hp-one:w-12 hp-one:h-12"
                                                    />
                                                </div>
                                            </div>
                                            <hr className="border-b-1 border-gray-300" />
                                        </div>
                                        <button 
                                            className="flex flex-auto flex-nowrap bg-gray-lighter-4 hover:bg-gray-lighter-5 active:bg-gray-lighter-3 transition duration-300 linear w-full h-8 rounded-lg px-3 focus:outline-none"
                                        >
                                            <div className="flex flex-none self-center">
                                                <Note 
                                                    className="h-4 w-4 hp-one:h-6 hp-one:w-6 self-center"
                                                />
                                            </div>
                                            <div className="flex flex-auto justify-center self-center">
                                                <p className="text-black-darker font-semibold text-xs hp-one:text-sm md:text-base">Lihat Order</p>
                                            </div>
                                        </button>
                                    </div>
                                    <div className="flex justify-start pl-3 mt-1">
                                        <p className="text-tiny hp-one:text-xs md:text-sm text-gray-lighter-1">15 Mei 2021 14:36</p>
                                    </div>
                                </div>
                            </div>
                            */}
                            {this.state.messages && this.state.messages.map(message => {
                                return (
                                    <div className={"flex mt-4 " + (message.admin ? "justify-start mr-8 hp-one:mr-10" : " justify-end ml-8 hp-one:ml-20")}>  
                                        <div className="flex flex-col">
                                            <div className={"rounded-xl flex-shrink break-words md:w-80 p-2 text-xs hp-one:text-sm md:text-base text-left " + (message.admin ? "bg-white text-black-darker" : "bg-red-darker-1 text-white")}>
                                                <p>{message.message}</p>
                                            </div>
                                            <div className="flex justify-start pl-3 mt-1">
                                                <p className="text-tiny hp-one:text-xs md:text-sm text-gray-lighter-1">{message.time}</p>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
                <div className="fixed bottom-3 flex justify-center w-full px-1">
                    <div className="flex w-full md:w-9/12 lg:w-6/12">
                        <div className="flex-auto block relative border-b-2 border-gray-lighter-9 transition duration-500 ease-in-out focus-within:border-red-darker-1 rounded-t-lg">
                            <input
                                type="text" 
                                id="messages" 
                                name="messages"
                                onKeyPress={this.clickEnter}
                                value={this.state.message}
                                onChange={ev => this.setState({message:ev.target.value })}
                                placeholder={this.state.placeholder} 
                                onFocus={() => this.setState({ placeholder: '' })}
                                onBlur={() => this.setState({ placeholder: 'Pesan' })}
                                className="text-xs hp-one:text-sm md:text-base block w-full appearance-none focus:outline-none bg-gray-100 rounded-t-lg pt-4 pl-4 hp-one:h-12" 
                            />
                        </div>
                        <button
                            onClick={this.sendMessage}
                            className="self-center pointer-events-auto flex bg-green-whatsapp transition duration-300 ease-in-out shadow-md hover:bg-opacity-70 hover:bg-green-whatsapp active:bg-opacity-40 active:bg-green-whatsapp rounded-lg ml-2 h-8 w-12 hp-one:h-12 hp-one:w-16 focus:outline-none"
                        >
                            <Send className="self-center h-4 w-4 hp-one:h-6 hp-one:w-6 mx-auto fill-current text-white" />
                        </button>
                    </div>
                </div>
            </div>
        </>
        );
    }
}