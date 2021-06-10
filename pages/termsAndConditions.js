import React from 'react';
import Footer from './../components/footer/footer.js';
import SearchModal from './../components/modals/searchModal.js';
import FilterModal from './../components/modals/filterModal.js';
import ArrowDown from './../assets/images/icons/arrowDown.svg';
import {Router} from '../routes.js';
import dynamic from 'next/dynamic';

export const Header = dynamic(() => {
    return import('./../components/header/header.js')
},{ ssr:false });

export const Sidebar = dynamic(() => {
    return import('./../components/sidebar/sidebar.js')
},{ ssr:false });

export default class TermAndConditions extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            openSearch : false,
            openFilter : false,
            activePage : '',
            activePage : false,
            showSidebar : false
        }
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

    render(){
        return (
            <>
                <Sidebar 
                    showSidebar={this.state.showSidebar}
                    removeIcon={this.state.showSidebar}
                    searchOnClick={() => this.setState({ openSearch:true })} 
                    removeSidebar={() => this.setState({ showSidebar:!this.state.showSidebar })}
                />
                <div>
                    {this.state.showSidebar ? (
                        <div className="bg-black bg-opacity-50 h-full w-full fixed z-500 top-0 bottom-0 left-0 right-0" onClick={() => this.setState({ showSidebar:!this.state.showSidebar })} />
                    ) : null}
                    <div className="bg-gray-lighter flex flex-col w-full min-h-screen mb-auto">
                        <Header
                            clickMenu={() => this.setState({ showSidebar:!this.state.showSidebar })}
                            changeIcon={this.state.showSidebar}
                            searchOnClick={() => this.setState({ openSearch:true })} 
                            profileOnClick={this.pushProfileRoute}
                            displayProfile={true}
                        />
                        <SearchModal onOpenSearch={this.state.openSearch} onCloseSearch={this.onCloseSearch} />
                        <FilterModal onOpenFilter={this.state.openFilter} onCloseFilter={this.onCloseFilter} />
                        <div className="flex flex-col flex-auto bg-gray-lighter min-h-screen w-full relative lg:ml-auto lg:w-3/4 xl:w-8/10 p-2">
                            <div className="bg-white w-10/12 md:w-8/12 mx-auto py-2 rounded-lg divide-y divide-gray-300 shadow-md">
                                <div className="bg-white px-1 hp-one:px-4">
                                    <button
                                        onClick={() => this.setState({ namePage: 'syarat',activePage:!this.state.activePage })}
                                        className="w-full focus:outline-none py-2 text-gray-600 text-xs hp-one:text-sm md:text-base font-base text-left"
                                    >
                                        Persyaratan Layanan
                                        <ArrowDown 
                                            className={"float-right mx-0 hp-one:mx-2 transform scale-75 md:scale-100 h-4 w-4 hp-one:h-7 hp-one:w-7 transition duration-500 ease-in-out " + (this.state.namePage === 'syarat' && this.state.activePage  ? "transform -rotate-180" : '')}
                                        />
                                    </button>
                                    <div className={this.state.namePage === 'syarat' && this.state.activePage ? "block" : "hidden"}>
                                        <p className="py-2 text-tiny hp-one:text-sm lg:text-base">
                                            Syarat dan Ketentuan ini menetapkan syarat dan ketentuan umum yang mengatur kegiatan pembelian Produk pada Situs JKTSNEAKERS (selanjutnya disebut “Syarat dan Ketentuan”).
                                        </p>
                                    </div>
                                </div>
                                <div className="bg-white px-1 hp-one:px-4">
                                    <button
                                        onClick={() => this.setState({ namePage: 'privasi',activePage:!this.state.activePage })}
                                        className="w-full focus:outline-none py-2 text-gray-600 text-xs hp-one:text-sm md:text-base font-base text-left"
                                    >
                                        Kebijakan Privasi
                                        <ArrowDown 
                                            className={"float-right mx-0 hp-one:mx-2 transform scale-75 md:scale-100 h-4 w-4 hp-one:h-7 hp-one:w-7 transition duration-500 ease-in-out " + (this.state.namePage === 'privasi' && this.state.activePage  ? "transform -rotate-180" : '')}
                                        />
                                    </button>
                                    <div className={this.state.namePage === 'privasi' && this.state.activePage ? "block" : "hidden"}>
                                        <p className="py-2 text-tiny hp-one:text-sm lg:text-base">
                                            Kebijakan Privasi adalah ketentuan mengenai jenis informasi pribadi milik Pembeli yang didapatkan, bagaimana penggunaan informasi tersebut dan mengenai cara penyimpanan informasi. 
                                        </p>
                                    </div> 
                                </div>
                                <div className="bg-white px-1 hp-one:px-4">
                                    <button
                                        onClick={() => this.setState({ namePage: 'pengiriman',activePage:!this.state.activePage })}
                                        className="w-full focus:outline-none py-2 text-gray-600 text-xs hp-one:text-sm md:text-base font-base text-left"
                                    >
                                        Kebijakan Pengiriman
                                        <ArrowDown 
                                            className={"float-right mx-0 hp-one:mx-2 transform scale-75 md:scale-100 h-4 w-4 hp-one:h-7 hp-one:w-7 transition duration-500 ease-in-out " + (this.state.namePage === 'pengiriman' && this.state.activePage  ? "transform -rotate-180" : '')}
                                        />
                                    </button>
                                    <div className={this.state.namePage === 'pengiriman' && this.state.activePage ? "block" : "hidden"}>
                                        <p className="py-2 text-tiny hp-one:text-sm lg:text-base">
                                            Kebijakan Pengiriman merupakan ketentuan penting terkait informasi pengiriman ketika Pembeli membuat pesanan, yang berisi detil mengenai metode dan biaya pengiriman, waktu pengiriman dan hal lainnya.
                                        </p>
                                    </div> 
                                </div>
                                <div className="bg-white px-1 hp-one:px-4">
                                    <button
                                        onClick={() => this.setState({ namePage: 'pengembalian',activePage:!this.state.activePage })}
                                        className="w-full focus:outline-none py-2 text-gray-600 text-xs hp-one:text-sm md:text-base font-base text-left"
                                    >
                                        Kebijakan Pengembalian    
                                        <ArrowDown 
                                            className={"float-right mx-0 hp-one:mx-2 transform scale-75 md:scale-100 h-4 w-4 hp-one:h-7 hp-one:w-7 transition duration-500 ease-in-out " + (this.state.namePage === 'pengembalian' && this.state.activePage  ? "transform -rotate-180" : '')}
                                        />
                                    </button>
                                    <div className={this.state.namePage === 'pengembalian' && this.state.activePage ? "block" : "hidden"}>
                                        <p className="py-2 text-tiny hp-one:text-sm lg:text-base">
                                            Kebijakan Pengembalian adalah ketentuan mengenai pengembalian uang ataupun barang oleh Penjual kepada Pembeli.
                                        </p>
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
