import React from 'react';
import Locked from './../assets/images/icons/locked.svg';
import Footer from './../components/footer/footer.js';
import SearchModal from './../components/modals/searchModal.js';
import ContactModal from './../components/modals/contactModal.js';
import FilterModal from './../components/modals/filterModal.js';
import dynamic from 'next/dynamic'


export const Sidebar = dynamic(() => {
    return import('./../components/sidebar/sidebar.js')
},{ ssr:false });

export const Header = dynamic(() => {
    return import('./../components/header/header.js')
},{ ssr:false });

export default class Users extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            data : [],
            openSearch : false,
            openContact : false,
            openFilter : false,
            changePage : false,
            namePage : "orders"
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

    render(){
        return(
            <div className="flex flex-col w-full min-h-screen mb-auto">
                <Header
                    searchOnClick={this.onOpenSearch} 
                    filterOnClick={this.onOpenFilter}
                    displayProfile={false}
                />
                <SearchModal onOpenSearch={this.state.openSearch} onCloseSearch={this.onCloseSearch} />
                <FilterModal onOpenFilter={this.state.openFilter} onCloseFilter={this.onCloseFilter} />
                <Sidebar searchOnClick={this.onOpenSearch} />
                <div className="flex flex-col bg-gray-lighter min-h-screen relative ml-72">
                    <div className="my-4 w-full">
                        <div className="flex wrap justify-center my-4 mx-auto">
                            <ContactModal onOpenContact={this.state.openContact} onCloseContact={this.onCloseContact} />
                            <img 
                                src="https://d1ggq58xg1ha0k.cloudfront.net/_nuxt/img/profile.5623c4f.svg" 
                            />
                            <button 
                                onClick={this.onOpenContact}
                                className="bg-red-darker-1 duration-300 hover:bg-red-700 active:bg-red-800 focus:outline-none p-2 w-1/3 text-white font-semibold mx-1 rounded-lg    "
                            >
                                <Locked
                                    className="h-6 w-6 inline-block fill-current text-white stroke-current stroke-0 text-white float-left"
                                />
                                Login dengan nomor HP    
                            </button>
                        </div>
                    </div>
                    <div className="mx-auto">
                        <button
                            onClick={() => this.setState({ namePage: 'orders',changePage: false }) }
                            className={"px-16 py-2 text-red-darker-1 transition duration-300 ease-in-out hover:bg-red-100 focus:outline-none " + (this.state.namePage === "orders" ? "border-b-2 border-red-darker-1" : "")}
                        >
                            Order Saya
                        </button>
                        <button
                            onClick={() => this.setState({ namePage: 'chat',changePage: true }) }
                            className={"px-16 py-2 text-red-darker-1 transition duration-300 ease-in-out hover:bg-red-100 focus:outline-none " + (this.state.namePage === "chat" ? "border-b-2 border-red-darker-1" : "")}
                        >
                            Chat
                        </button>
                    </div>
                    <div className="bg-gray-lighter-4 w-full h-screen">
                        {this.state.changePage ? 
                        <div className="">
                            <p>ini chat</p>
                        </div> : 
                        <div className="mx-auto w-1/2">
                            <p
                                className="py-4 font-bold text-lg"
                            >
                                Order Saya(0)
                            </p>
                            <p
                                className="bg-gray-300 p-4 rounded-md text-gray-700"
                            >
                                Kamu bisa mengecek order kamu dan update-nya di daftar ini.
                            </p>
                        </div>
                        }
                    </div>
                </div>
                <Footer />
            </div>
        );
    }
}