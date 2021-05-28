import React from 'react';
import Footer from './../../components/footer/footer.js';
import SearchModal from './../../components/modals/searchModal.js';
import FilterModal from './../../components/modals/filterModal.js';
import Checklist from './../../assets/images/icons/checklist2.svg';
import Copy from './../../assets/images/icons/copy.svg';
import Cart from './../../assets/images/icons/cart.svg';
import Sms from './../../assets/images/icons/sms.svg';
import dynamic from 'next/dynamic';

export const Header = dynamic(() => {
    return import('./../../components/header/header.js')
},{ ssr:false });

export const Sidebar = dynamic(() => {
    return import('./../../components/sidebar/sidebar.js')
},{ ssr:false });

export default class RejectedOrder extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            openSearch : false,
            openFilter : false,
            openDownload : false,
        }
    }

    onOpenDownload = () => {
        this.setState({ openDownload : true });
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
    
    render(){
        return (
            <div className="flex flex-col w-full min-h-screen mb-auto">
                <Header
                    searchOnClick={this.onOpenSearch} 
                    filterOnClick={this.onOpenFilter}
                    displayDownload={true}
                    displayProfile={true}
                />
                <SearchModal onOpenSearch={this.state.openSearch} onCloseSearch={this.onCloseSearch} />
                <FilterModal onOpenFilter={this.state.openFilter} onCloseFilter={this.onCloseFilter} />
                <Sidebar searchOnClick={this.onOpenSearch} />
                <div className="bg-gray-lighter flex flex-col flex-auto lg:ml-auto lg:w-3/4 min-h-screen relative p-2">
                    <div className="w-full px-6 xl:px-0 xl:w-3/4 mx-auto pt-4 pb-16">
                    <div className="">
                            <p className="text-xl font-semibold text-black-darker leading-6 mb-2">Order Saya</p>
                            <p className="text-sm lg:text-base font-bold text-black-darker leading-5">No. Order: 013275</p>
                            <p className="text-sm text-gray-lighter-1 leading-4 mb-4">(Order Berhasil 22/05/2021)</p>
                            <hr className="border-b-1 border-gray-300 my-2" />
                        </div>
                        <div className="w-full my-2 pt-6">
                            <p className="text-lg font-bold text-red-darker-1">Status : Order dibatalkan</p>
                        </div>
                        <button
                            className="flex w-full p-2 my-2 bg-gray-lighter-4 shadow-md font-semibold text-black-darker text-sm text-center hover:bg-gray-300 active:bg-gray-400 focus:outline-none transition duration-300 linear rounded-md"
                        >
                            <Cart className="inline-block float-left stroke-current stroke-0 black self-center" width={24} height={24} />
                            <span className="mx-auto self-center">Order Ulang dari Keranjang</span>
                        </button>
                        <hr className="border-b-1 border-gray-300 my-6" />
                        <div className="flex flex-auto flex-nowrap w-full">
                            <div className="flex flex-none">
                                <img 
                                    src="/images/products/converse.jpg"
                                    className="self-center h-12 w-12"
                                />
                            </div>
                            <div className="flex-1 w-10/12 ml-2 whitespace-nowrap overflow-ellipsis overflow-hidden">
                                <p className="block uppercase text-sm lg:text-base text-gray-lighter-2 tracking-tighter font-bold whitespace-nowrap overflow-ellipsis overflow-hidden">VANS OLD SKOOL BLACK WHITE</p>
                                <p className="uppercase text-sm lg:text-base text-gray-lighter-1">SIZE 40</p>
                                <p className="text-xs lg:text-sm text-gray-lighter-1">Rp.280.000</p>
                            </div>
                            <div className="flex-shrink font-bold text-sm lg:text-base">
                                <span className="my-4 float-right text-gray-lighter-2">3</span>
                            </div>
                        </div>
                        <hr className="border-b-1 border-gray-300 my-2" />
                        <div className="py-2">
                            <div className="w-full py-2">
                                <span className="float-left text-xs lg:text-sm text-gray-lighter-1 font-medium">Harga Normal Produk</span>
                                <span className="float-right font-bold text-sm lg:text-base text-black-darker">Rp.840.000</span>
                            </div>
                            <div className="w-full py-4">
                                <span className="float-left text-xs lg:text-sm text-gray-lighter-1 font-medium">Ongkos Kirim</span>
                                <span className="float-right font-bold text-sm lg:text-base text-black-darker">(3.0 Kg) Rp.24.000</span>
                            </div>
                            <div className="w-full py-2">
                                <span className="float-left text-xs lg:text-sm text-gray-lighter-1 font-medium">Diskon Pengiriman</span>
                                <span className="float-right font-bold text-sm lg:text-base text-black-darker"> -Rp.20.000</span>
                            </div>
                            <div className="w-full py-4">
                                <span className="float-left text-xs lg:text-sm text-gray-lighter-1 font-medium">Diskon</span>
                                <span className="float-right font-bold text-sm lg:text-base text-black-darker"> -Rp.90.000</span>
                            </div>
                            <div className="w-full py-2">
                                <span className="float-left text-xs lg:text-sm text-gray-lighter-1 font-medium">Total Harga Order</span>
                                <span className="float-right font-bold text-sm lg:text-base text-black-darker">Rp.754.000</span>
                            </div>
                        </div>
                        <div className="flex flex-auto flex-nowrap w-full mt-4">
                            <div className="flex flex-none">
                                <img 
                                    src="https://logos-download.com/wp-content/uploads/2016/06/Bank_Mandiri_logo_fon.png"
                                    className="self-center h-12 w-12"
                                />
                            </div>
                            <div className="flex-1 w-9/12 md:w-9/12 ml-1 md:ml-2">
                                <p className="font-bold text-sm lg:text-base text-black-darker">Mandiri</p>
                                <p className="text-gray-lighter-1 text-xs lg:text-sm font-medium">7001400400400292806</p>
                                <p className="text-gray-lighter-1 text-xs lg:text-sm font-medium">Metode Pembayaran</p>
                            </div>
                            <p className="flex-shrink md:w-2/12 text-sm lg:text-base self-center font-bold text-right text-black-darker tracking-tighter">Belum Terbayar</p>
                        </div>
                        <hr className="border-b-1 border-gray-300 my-4" />
                        <div className="flex flex-auto flex-nowrap w-full">
                            <div className="flex flex-none">
                                <img 
                                    src="https://upload.wikimedia.org/wikipedia/commons/9/92/New_Logo_JNE.png"
                                    className="self-center h-12 w-12"
                                />
                            </div>
                            <div className="flex-1 w-9/12">
                                <p className="font-bold text-sm lg:text-base text-black-darker">JNE OKE</p>
                                <p className="text-gray-lighter-1 text-xs lg:text-sm font-medium">Rp.4.000</p>
                                <p className="text-gray-lighter-1 text-xs lg:text-sm font-medium">Metode Pengiriman</p>
                            </div>
                            <p className="flex-shrink text-sm lg:text-base self-center font-bold text-right text-black-darker tracking-tighter">Belum Terkirim</p>
                        </div>
                        <div className="py-2">
                            <p className="text-sm lg:text-base text-black-darker">Hubungi JNE untuk kendala terkait pengiriman</p>
                            <p className="text-sm lg:text-base text-red-darker-1">(Pusat Bantuan)</p>
                        </div>
                        <hr className="border-b-1 border-gray-300 my-2" />
                        <div className="py-2">
                            <p className="text-sm lg:text-base text-gray-lighter-3">Nama Penerima</p>
                            <p className="text-sm lg:text-base font-semibold text-black-darker">fff</p>
                        </div>
                        <div className="py-2">
                            <p className="text-sm lg:text-base text-gray-lighter-3">Nomor HP Penerima</p>
                            <p className="text-sm lg:text-base font-semibold text-black-darker">+6285315099969</p>
                        </div>
                        <div className="py-2">
                            <p className="text-sm lg:text-base text-gray-lighter-3">Alamat Penerima</p>
                            <p className="text-sm lg:text-base font-semibold text-black-darker">ddede</p>
                            <p className="text-sm lg:text-base font-semibold text-black-darker">Bekasi, Cikarang Barat</p>
                        </div>
                        <div className="py-2">
                            <p className="text-sm lg:text-base text-gray-lighter-3">Email</p>
                            <p className="text-sm lg:text-base font-semibold text-black-darker">nogir16111998@gmail.com</p>
                        </div>
                        <div className="py-2">
                            <p className="text-sm lg:text-base text-gray-lighter-3">Nama Pengirim</p>
                            <p className="text-sm lg:text-base font-semibold text-black-darker">OLSHOES</p>
                        </div>
                        <div className="py-2">
                            <p className="text-sm lg:text-base text-gray-lighter-3">Nomor HP Pengirim</p>
                            <p className="text-sm lg:text-base font-semibold text-black-darker">0813-2122-1212</p>
                        </div>
                        <hr className="border-b-1 border-gray-300 my-2" />
                        <button
                            className="flex w-full p-2 my-2 bg-gray-lighter-4 shadow-md font-semibold text-black-darker text-sm text-center hover:bg-gray-300 active:bg-gray-400 focus:outline-none transition duration-300 linear rounded-md"
                        >
                            <Sms className="inline-block float-left stroke-current stroke-0 black self-center" width={24} height={24} />
                            <span className="mx-auto self-center">Kirim Pesan ke OLSHOES?</span>
                        </button>
                        <p className="text-xs py-2 text-black-darker">Mohon hubungi NICEPAY terkait kendala pembayaran.</p>
                        <div className="w-full flex justify-end py-4">
                            <div className="py-2">
                                <a 
                                    className="block p-2 my-2 shadow-md font-semibold text-center bg-gray-lighter-4 hover:bg-gray-300 active:bg-gray-400 focus:outline-none transition duration-300 linear text-gray-700 rounded-md"
                                    href="https://www.tokoepay.com/faq"
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                >
                                    <span className="block no-underline text-black-darker text-right underline text-red-600 cursor-pointer text-sm">Punya Pertanyaan?</span>
                                </a>
                                <a 
                                    target="_blank"  
                                    href='/terms-and-conditions'
                                    rel="noopener noreferrer"
                                >
                                    <span className="block text-right underline text-red-darker-1 text-xs lg:text-sm cursor-pointer">Syarat & Ketentuan</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        );
    }
}