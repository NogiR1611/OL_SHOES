import React from 'react';
import Header from './../../components/header/header.js';
import Footer from './../../components/footer/footer.js';
import SearchModal from './../../components/modals/searchModal.js';
import FilterModal from './../../components/modals/filterModal.js';
import Copy from './../../assets/images/icons/copy.svg';
import Sms from './../../assets/images/icons/sms.svg';
import dynamic from 'next/dynamic';

export const Sidebar = dynamic(() => {
    return import('./../../components/sidebar/sidebar.js')
},{ ssr:false });

export default class WaitingPayOrder extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            openSearch : false,
            openFilter : false,
            openDownload : false,
            namePage : 'ATM',
            showSidebar : false,
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
    
    copyText = () => {
        this.totalPrice.select();
        document.execCommand("copy");
        alert("berhasil copy");
    }

    copyAccount = () => {
        this.account.select();
        document.execCommand("copy");
        alert("berhasil copy");
    }

    render(){
        return (
            <div className="flex flex-col w-full min-h-screen mb-auto">
                <Header
                    clickMenu={() => this.setState({ showSidebar:!this.state.showSidebar })}
                    changeIcon={this.state.showSidebar}
                    searchOnClick={this.onOpenSearch} 
                    filterOnClick={this.onOpenFilter}
                    displayDownload={true}
                />
                <SearchModal onOpenSearch={this.state.openSearch} onCloseSearch={this.onCloseSearch} />
                <FilterModal onOpenFilter={this.state.openFilter} onCloseFilter={this.onCloseFilter} />
                <Sidebar
                    searchOnClick={this.onOpenSearch} 
                    showSidebar={this.state.showSidebar}
                    removeIcon={this.state.showSidebar}
                    removeSidebar={() => this.setState({ showSidebar:!this.state.showSidebar })}
                />
                <div className="flex-auto min-h-screen lg:ml-auto lg:w-3/4 px-4">
                    <div className="py-2">
                        <p className="text-xl font-semibold text-black my-2">Order Saya</p>
                        <p className="text-lg font-semibold text-black">No. Order: 013275</p>
                        <p className="font-light text-black">(Order Berhasil 22/05/2021)</p>
                        <hr className="border-b-1 border-gray-300 my-2" />
                    </div>
                    <div className="w-full my-2">
                        <img 
                            src="/images/component/status-1.png"
                            className="w-1/3 md:w-1/6 my-2"
                        />
                        <p className="text-lg font-semibold text-red-600">Status : Menunggu Pembayaran</p>
                        <p className="text-base font-semibold text-black">
                            <input type="text" value="Rp.754.000" ref={(totalPrice) => this.totalPrice = totalPrice} className="w-20 focus:outline-none select-none font-semibold text-black" readonly />
                            <button onClick={this.copyText} className="mx-1 focus:outline-none transition duration-300 ease-in-out transform active:scale-90 hover:scale-110">
                                <Copy className="inline-block stroke-current stroke-2 text-black mx-1 cursor-pointer" width={16} height={16} />
                            </button>
                        </p>
                        <p className="text-xs font-semibold text-red-600">Transfer sebelum 23 Mei 2021 06.50</p>
                    </div>
                    <div className="flex flex-wrap my-2">
                        <div className="flex-1 w-11/12">
                            <p className="text-sm text-black">Mandiri - Virtual Account</p>
                            <p className="text-base font-semibold text-black">
                                <input type="text" value="7001400400292806" ref={(account) => this.account = account} className="w-36 focus:outline-none select-none font-semibold text-black" readonly />
                                <button onClick={this.copyAccount} className="focus:outline-none transition duration-300 ease-in-out transform active:scale-90 hover:scale-110">
                                    <Copy className="inline-block stroke-current stroke-2 text-black cursor-pointer" width={16} height={16} />
                                </button>
                            </p>
                            <p className="text-xs font-semibold text-red-600">Ke: EPAY - OL Shoes fff</p>
                        </div>
                        <div className="flex-none w-1/12">
                            <img 
                                src="https://logos-download.com/wp-content/uploads/2016/06/Bank_Mandiri_logo_fon.png" 
                            />
                        </div>
                    </div>
                    <div className="bg-red-200">
                        <div className="w-full border-b-2 border-gray-200">
                            <button
                                onClick={() => this.setState({ namePage: 'ATM' }) }
                                className={"w-1/3 px-4  md:px-16 py-2 text-gray-600 text-xs md:text-base transition duration-300 ease-in-out hover:bg-red-100 focus:outline-none " + (this.state.namePage === "ATM" ? "border-b-2 border-red-600 text-red-600" : "")}
                            >
                                ATM
                            </button>
                            <button
                                onClick={() => this.setState({ namePage: 'Mobile Banking' }) }
                                className={"w-1/3 px-4 md:px-16 py-2 text-gray-600 text-xs md:text-base  transition duration-300 ease-in-out hover:bg-red-100 focus:outline-none " + (this.state.namePage === "Mobile Banking" ? "border-b-2 border-red-600 text-red-600" : "")}
                            >
                                Mobile Banking
                            </button>
                            <button
                                onClick={() => this.setState({ namePage: 'Internet Banking' }) }
                                className={"w-1/3 px-4 md:px-16 py-2 text-gray-600 text-xs md:text-base  transition duration-300 ease-in-out hover:bg-red-100 focus:outline-none " + (this.state.namePage === "Internet Banking" ? "border-b-2 border-red-600 text-red-600" : "")}
                            >
                                Internet Banking
                            </button>
                        </div>
                        <div className="w-full">
                            {this.state.namePage === 'ATM' ? (
                                <div className="m-2">
                                    <ol className="list-decimal list-inside text-red-600">
                                        <li>Masukkan kartu ATM dan Pin</li>
                                        <li>Pilih Menu Bayar/Beli.</li>
                                        <li>Pilih menu Lainnya, hingga menemukan menu Multipayment.</li>
                                        <li>Masukkan kode biller Tokopedia 88708, lalu pilih Benar.</li>
                                        <li>Masukkan Nomor Virtual Account Tokopedia, lalu pilih tombol Benar.</li>
                                        <li>Masukkan Angka 1 untuk memilih tagihan, lalu pilih tombol Ya.</li>
                                        <li>Akan muncul konfirmasi pembayaran, lalu pilih tombol Ya.</li>
                                        <li>Simpan struk sebagai bukti pembayaran Anda.</li>
                                    </ol>
                                </div>
                            ) : null 
                            }
                            {this.state.namePage === 'Mobile Banking' ? (
                                <div className="m-2">
                                    <ol className="list-decimal list-inside text-red-600">
                                        <li>Masukkan kartu ATM dan Pin</li>
                                        <li>Pilih Menu Bayar/Beli.</li>
                                        <li>Pilih menu Lainnya, hingga menemukan menu Multipayment.</li>
                                        <li>Masukkan kode biller Tokopedia 88708, lalu pilih Benar.</li>
                                        <li>Masukkan Nomor Virtual Account Tokopedia, lalu pilih tombol Benar.</li>
                                        <li>Masukkan Angka 1 untuk memilih tagihan, lalu pilih tombol Ya.</li>
                                        <li>Akan muncul konfirmasi pembayaran, lalu pilih tombol Ya.</li>
                                        <li>Simpan struk sebagai bukti pembayaran Anda.</li>
                                    </ol>
                                </div>
                            ) : null
                            }
                            {this.state.namePage === 'Internet Banking' ? (
                                <div className="m-2">
                                    <ol className="list-decimal list-inside text-red-600">
                                        <li>Login Mandiri Online dengan memasukkan username dan password.</li>
                                        <li>Pilih menu Pembayaran.</li>
                                        <li>Pilih menu Multipayment.</li>
                                        <li>Pilih penyedia jasa “Tokopedia.</li>
                                        <li>Masukkan Nomor Virtual Account dan Nominal yang akan dibabayarkan, lalu pilih Lanjut.</li>
                                        <li>Setelah muncul tagihan, pilih Konfirmasi.</li>
                                        <li>Masukkan PIN/ challange code token.</li>
                                        <li>Transaksi selesai, simpan bukti bayar kamu.</li>
                                    </ol>
                            </div>
                            ) : null
                            }
                        </div>
                    </div>
                    <hr className="border-b-1 border-gray-300 my-6" />
                    <div className="flex flex-wrap w-full">
                        <div className="flex-none w-1/12">
                            <img 
                                src="/images/products/converse.jpg"
                                className=""
                            />
                        </div>
                        <div className="flex-1 w-9/12 mx-4">
                            <p className="uppercase font-semibold text-base">VANS OLD SKOOL BLACK WHITE</p>
                            <p className="uppercase text-base">SIZE 40</p>
                            <p className="text-sm">Rp.280.000</p>
                        </div>
                        <div className="flex-none w-1/12 font-semibold text-lg">
                            <span className="my-4">3</span>
                        </div>
                    </div>
                    <hr className="border-b-1 border-gray-300 my-2" />
                    <div className="py-2">
                        <div className="w-full py-2 text-gray-600">
                            <span className="float-left">Harga Normal Produk:</span>
                            <span className="float-right font-bold">Rp.840.000</span>
                        </div>
                        <div className="w-full py-4 text-gray-600">
                            <span className="float-left">Ongkos Kirim:</span>
                            <span className="float-right font-bold">(3.0 Kg) Rp.24.000</span>
                        </div>
                        <div className="w-full py-2 text-gray-600">
                            <span className="float-left">Diskon Pengiriman:</span>
                            <span className="float-right font-bold"> -Rp.20.000</span>
                        </div>
                        <div className="w-full py-4 text-gray-600">
                            <span className="float-left">Diskon:</span>
                            <span className="float-right font-bold"> -Rp.90.000</span>
                        </div>
                        <div className="w-full py-2 text-gray-600">
                            <span className="float-left">Total Harga Order:</span>
                            <span className="float-right font-bold">Rp.754.000</span>
                        </div>
                    </div>
                    <div className="flex flex-wrap w-full">
                        <img 
                            src="https://logos-download.com/wp-content/uploads/2016/06/Bank_Mandiri_logo_fon.png"
                            className="flex-none w-1/6 lg:w-1/12 py-2"
                        />
                        <div className="flex-1 w-9/12 mx-2">
                            <p className="font-semibold">Mandiri</p>
                            <p className="text-gray-600">7001400400400292806</p>
                            <p className="text-gray-600">Metode Pembayaran</p>
                        </div>
                        <p className="flex-none w-2/12 self-center font-semibold text-right">Belum Terbayar</p>
                    </div>
                    <button
                        className="w-full p-2 my-2 bg-gray-200 shadow-lg font-semibold text-center hover:bg-gray-300 active:bg-gray-400 focus:outline-none transition duration-300 linear text-gray-700 rounded-md"
                    >
                        Ubah Metode Pembayaran
                    </button>
                    <hr className="border-b-1 border-gray-300 my-2" />
                    <div className="flex flex-wrap w-full">
                        <img 
                            src="https://upload.wikimedia.org/wikipedia/commons/9/92/New_Logo_JNE.png"
                            className="flex-none w-1/6 md:w-1/12 md:h-10 self-center"
                        />
                        <div className="flex-1 w-8/12 mx-2">
                            <p className="font-semibold">JNE OKE</p>
                            <p className="text-gray-600">Rp.4.000</p>
                            <p className="text-gray-600">Metode Pengiriman</p>
                        </div>
                        <p className="flex-none w-2/12 self-center font-semibold text-right">Belum Terkirim</p>
                    </div>
                    <div className="py-2">
                        <p className="text-gray-600">Hubungi JNE untuk kendala terkait pengiriman</p>
                        <p className="text-red-600">(Pusat Bantuan)</p>
                    </div>
                    <hr className="border-b-1 border-gray-300 my-2" />
                    <div className="py-2">
                        <p className="text-gray-600">Nama Penerima</p>
                        <p className="font-semibold">fff</p>
                    </div>
                    <div className="py-2">
                        <p className="text-gray-600">Nomor HP Penerima</p>
                        <p className="font-semibold">+6285315099969</p>
                    </div>
                    <div className="py-2">
                        <p className="text-gray-600">Alamat Penerima</p>
                        <p className="font-semibold">ddede</p>
                        <p className="font-semibold">Bekasi, Cikarang Barat</p>
                    </div>
                    <div className="py-2">
                        <p className="text-gray-600">Email</p>
                        <p className="font-semibold">nogir16111998@gmail.com</p>
                    </div>
                    <div className="py-2">
                        <p className="text-gray-600">Nama Pengirim</p>
                        <p className="font-semibold">OLSHOES</p>
                    </div>
                    <div className="py-2">
                        <p className="text-gray-600">Nomor HP Pengirim</p>
                        <p className="font-semibold">0813-2122-1212</p>
                    </div>
                    <button
                        className="w-full p-2 my-2 bg-gray-200 shadow-lg font-semibold text-center hover:bg-gray-300 active:bg-gray-400 focus:outline-none transition duration-300 linear text-gray-700 rounded-md"
                    >
                        Ubah Info
                    </button>
                    <hr className="border-b-1 border-gray-300 my-2" />
                    <button
                        className="w-full p-2 my-2 bg-gray-200 shadow-lg font-semibold text-center hover:bg-gray-300 active:bg-gray-400 focus:outline-none transition duration-300 linear text-gray-700 rounded-md"
                    >
                        <Sms className="inline-block float-left stroke-current stroke-2 black self-center" width={24} height={24} />
                        Kirim Pesan ke OLSHOES?
                    </button>
                    <button
                        className="w-full p-2 my-2 shadow-lg font-semibold text-center bg-red-500 hover:bg-red-600 active:bg-red-700 focus:outline-none transition duration-300 linear text-white rounded-md"
                    >
                        Batalkan Pesanan
                    </button>
                    <p className="text-xs py-2">Mohon hubungi NICEPAY terkait kendala pembayaran.</p>
                    <div className="w-full flex justify-end py-4">
                        <div className="py-2">
                            <button
                                className="p-2 my-2 shadow-lg font-semibold text-center bg-gray-200 hover:bg-gray-300 active:bg-gray-400 focus:outline-none transition duration-300 linear text-gray-700 rounded-md"
                            >
                                Punya Pertanyaan?
                            </button>
                            <a target="_blank"  href='/terms-and-conditions'>
                                <span className="block text-right underline text-red-600 cursor-pointer">Syarat & Ketentuan</span>
                            </a>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        );
    }
}