import React from 'react';
import Link from 'next/link';
import {format} from 'date-fns';
import numeral from 'numeral';
import Checklist from './../../assets/images/icons/checklist2.svg';
import Copy from './../../assets/images/icons/copy.svg';
import Lists from './../../assets/images/icons/orders.svg';
import FlashAlert from './../../components/cards/FlashAlertCard.js';

export default class WaitingOrderCard extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            namePage: 'ATM',
            showAlert: false
        }
    }

    copyElement = (elementToCopy,e) => {
        e.preventDefault();
        var TempText = document.createElement("input");
        TempText.value = elementToCopy;
        document.body.appendChild(TempText);
        TempText.select();
        
        document.execCommand("copy");
        document.body.removeChild(TempText);
        
        this.setState({ showCopyAlert:true });
        setTimeout(() => this.setState({ showCopyAlert:false }),1000);
    }

    render(){
        return (
            <>
            {this.state.showCopyAlert ? (
                <FlashAlert
                    message="Berhasil disalin"  
                />
            ) : null}
            <Link href='/'>
                <div className="mx-auto w-11/12 md:w-9/12 lg:w-1/2 mt-4 mb-4 bg-white shadow rounded-md p-4 cursor-pointer">
                    <p className="text-black-darker font-semibold">No Order: 013636</p>
                    <p className="text-xs text-gray-lighter-1 leading-4 mb-4">(Order Berhasil {format(new Date(),'MM/dd/yyyy')})</p>
                    <div className="pb-2 flex flex-auto flex-nowrap">
                        <div className="flex flex-auto flex-col">
                            <p className="font-bold text-black-darker">CONVERSE</p>
                            <p className="text-black-darker">42</p>
                        </div>
                        <div className="flex flex-none">
                            <img 
                                src="/images/products/converse.jpg" 
                                className="h-12 w-12"
                            />
                        </div>
                    </div>
                    <div className="pt-6">
                        <div className="flex flex-nowrap flex-auto w-1/3 md:w-1/6 mb-4">
                            <div className="flex-shrink items-center">
                                <div className="rounded-full w-8 h-8 flex items-center inline-flex justify-center bg-red-darker-1 align-middle">
                                    <Checklist className="w-6 h-6" />
                                </div>
                            </div>
                            <div className="flex flex-nowrap flex-shrink items-center">
                                <hr className="flex-1 max-w-6 w-6 block border-gray-lighter-4" />
                                <div className="rounded-full w-8 h-8 flex items-center justify-center bg-white">
                                    <div className="rounded-full w-2 h-2 bg-gray-lighter-4"></div>
                                </div>
                            </div>
                            <div className="flex flex-nowrap flex-shrink items-center">
                                <hr className="flex-1 max-w-6 w-6 block border-gray-lighter-4" />
                                <div className="rounded-full w-8 h-8 flex items-center justify-center bg-white">
                                    <div className="rounded-full w-2 h-2 bg-gray-lighter-4"></div>
                                </div>
                            </div>
                            <div className="flex flex-nowrap flex-shrink items-center">
                                <hr className="flex-1 max-w-6 w-6 block border-gray-lighter-4" />
                                <div className="rounded-full w-8 h-8 flex items-center justify-center bg-white">
                                    <div className="rounded-full w-2 h-2 bg-gray-lighter-4"></div>
                                </div>
                            </div>
                        </div>  
                        <p className="font-semibold text-red-darker-1">Status : Menunggu Pembayaran</p>  
                    </div>
                    <div className="mt-4">
                        <div className="mt-2 mb-4">
                            <div className="flex flex-auto flex-nowrap">
                                <span className="bg-transparent focus:outline-none select-none font-semibold text-xl text-black-darker leading-6">Rp. {numeral(754000).format('0,0')}</span>
                                <button onClick={() => this.copyElement(754000,event)} className="focus:outline-none transition duration-300 ease-in-out transform active:scale-90 hover:scale-110">
                                    <Copy className="inline-block stroke-current stroke-0 text-black cursor-pointer" />
                                </button>
                            </div>
                            <p className="text-xs font-semibold text-red-darker-1">Transfer sebelum <b>{format(new Date(), "dd/MM/yyyy hh.mm")}</b></p>
                        </div>
                        <div className="pb-3">
                            <div className="flex flex-nowrap flex-auto my-2 w-full">
                                <div className="flex-1 w-11/12">
                                    <p className="flex flex-auto text-black-darker">Mandiri - Virtual Account</p>
                                    <div className="flex flex-auto flex-nowrap">
                                        <span className="bg-transparent focus:outline-none select-none font-semibold text-xl text-black-darker leading-6">7001400400292806</span>
                                        <button onClick={() => this.copyElement(7001400400292806,event)} className="focus:outline-none transition duration-300 ease-in-out transform active:scale-90 hover:scale-110">
                                            <Copy className="inline-block stroke-current stroke-0 text-black cursor-pointer" />
                                        </button>
                                    </div>
                                </div>
                                <div className="flex flex-none">
                                    <img 
                                        src="https://logos-download.com/wp-content/uploads/2016/06/Bank_Mandiri_logo_fon.png" 
                                        className="w-12 h-12 self-center"
                                    />
                                </div>
                            </div>
                            <p className="text-xs font-semibold mt-2 text-red-darker-1">Ke: EPAY - OL Shoes fff</p>
                            <div className="bg-flat-orange mt-4">
                                <div className="flex flex-auto flex-nowrap w-full border-b-2 border-gray-200">
                                    <button
                                        onClick={() => this.setState({ namePage: 'ATM' }) }
                                        className={"flex justify-center tracking-tighter w-1/3 py-2 text-gray-lighter-1 text-xs lg:text-base transition duration-300 ease-in-out hover:bg-red-100 focus:outline-none " + (this.state.namePage === "ATM" ? "border-b-2 border-orange-darker text-black-lighter-1 font-semibold" : "")}
                                    >
                                        ATM
                                    </button>
                                    <button
                                        onClick={() => this.setState({ namePage: 'Mobile Banking' }) }
                                        className={"flex justify-center tracking-tighter w-1/3 py-2 text-gray-lighter-1 text-xs lg:text-base transition duration-300 ease-in-out hover:bg-red-100 focus:outline-none " + (this.state.namePage === "Mobile Banking" ? "border-b-2 border-orange-darker text-black-lighter-1 font-semibold" : "")}
                                    >
                                        Mobile Banking
                                    </button>
                                    <button
                                        onClick={() => this.setState({ namePage: 'Internet Banking' }) }
                                        className={"flex justify-center tracking-tighter w-1/3 py-2 text-gray-lighter-1 text-xs lg:text-base transition duration-300 ease-in-out hover:bg-red-100 focus:outline-none " + (this.state.namePage === "Internet Banking" ? "border-b-2 border-orange-darker text-black-lighter-1 font-semibold" : "")}
                                    >
                                        Internet Banking
                                    </button>
                                </div>
                                <div className="w-full p-4">
                                    {this.state.namePage === 'ATM' ? (
                                        <div className="text-orange-lighter-1">
                                            <p className="text-xl font-semibold leading-6 mb-4">Bagaimana cara membayar:</p>
                                            <ol className="list-decimal list-inside text-sm lg:text-base">
                                                <li className="mb-4">Masukkan kartu ATM dan Pin</li>
                                                <li className="mb-4">Pilih Menu Bayar/Beli.</li>
                                                <li className="mb-4">Pilih menu Lainnya, hingga menemukan menu Multipayment.</li>
                                                <li className="mb-4">Masukkan kode biller Tokopedia 88708, lalu pilih Benar.</li>
                                                <li className="mb-4">Masukkan Nomor Virtual Account Tokopedia, lalu pilih tombol Benar.</li>
                                                <li className="mb-4">Masukkan Angka 1 untuk memilih tagihan, lalu pilih tombol Ya.</li>
                                                <li className="mb-4">Akan muncul konfirmasi pembayaran, lalu pilih tombol Ya.</li>
                                                <li>Simpan struk sebagai bukti pembayaran Anda.</li>
                                            </ol>
                                        </div>
                                    ) : null 
                                    }
                                    {this.state.namePage === 'Mobile Banking' ? (
                                        <div className="text-orange-lighter-1">
                                            <p className="text-xl font-semibold leading-6 mb-4">Bagaimana cara membayar:</p>
                                            <ol className="list-decimal list-inside text-sm lg:text-base">
                                                <li className="mb-4">Masukkan kartu ATM dan Pin</li>
                                                <li className="mb-4">Pilih Menu Bayar/Beli.</li>
                                                <li className="mb-4">Pilih menu Lainnya, hingga menemukan menu Multipayment.</li>
                                                <li className="mb-4">Masukkan kode biller Tokopedia 88708, lalu pilih Benar.</li>
                                                <li className="mb-4">Masukkan Nomor Virtual Account Tokopedia, lalu pilih tombol Benar.</li>
                                                <li className="mb-4">Masukkan Angka 1 untuk memilih tagihan, lalu pilih tombol Ya.</li>
                                                <li className="mb-4">Akan muncul konfirmasi pembayaran, lalu pilih tombol Ya.</li>
                                                <li>Simpan struk sebagai bukti pembayaran Anda.</li>
                                            </ol>
                                        </div>
                                    ) : null
                                    }
                                    {this.state.namePage === 'Internet Banking' ? (
                                        <div className="text-orange-lighter-1">
                                            <p className="text-xl font-semibold leading-6 mb-4">Bagaimana cara membayar:</p>
                                            <ol className="list-decimal list-inside text-sm lg:text-base">
                                                <li className="mb-4">Login Mandiri Online dengan memasukkan username dan password.</li>
                                                <li className="mb-4">Pilih menu Pembayaran.</li>
                                                <li className="mb-4">Pilih menu Multipayment.</li>
                                                <li className="mb-4">Pilih penyedia jasa “Tokopedia.</li>
                                                <li className="mb-4">Masukkan Nomor Virtual Account dan Nominal yang akan dibabayarkan, lalu pilih Lanjut.</li>
                                                <li className="mb-4">Setelah muncul tagihan, pilih Konfirmasi.</li>
                                                <li className="mb-4">Masukkan PIN/ challange code token.</li>
                                                <li>Transaksi selesai, simpan bukti bayar kamu.</li>
                                            </ol>
                                        </div>
                                    ) : null
                                    }
                                </div>
                            </div>
                        </div>
                        <button
                            className="flex w-full p-2 mt-4 h-12 bg-gray-lighter-4 hover:bg-gray-lighter-5 active:bg-gray-lighter-3 text-black-darker text-sm shadow-md font-semibold text-center focus:outline-none transition duration-300 linear rounded-md"
                        >
                            <Lists className="inline-block float-left stroke-current stroke-0 black self-center" width={24} height={24} />
                            <span className="mx-auto self-center">Lihat Order</span>
                        </button>
                    </div>
                </div>
            </Link>
            </>
        );
    }
}
