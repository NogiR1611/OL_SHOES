import React from 'react';
import NumberFormat from 'react-number-format';
import Like from './../../assets/images/icons/like.svg';
import Plus from './../../assets/images/icons/plus.svg';
import Truck from './../../assets/images/icons/truck.svg';
import ArrowDown from './../../assets/images/icons/arrowDown.svg';
import Cart from './../../assets/images/icons/cart.svg';
import Alert from './../../assets/images/icons/alert.svg';
import Sms from './../../assets/images/icons/sms.svg';

export default class DescriptionProductCard extends React.Component{
    render(){
        return (
            <div className="pl-6">
                <div className="flex flex-wrap">
                    <span className="bg-black text-white mt-1 mr-1 text-sm px-1">Ada Stok</span>
                    <span className="bg-red-darker-1 text-white mt-1 mr-1 text-sm px-1 flex flex-wrap">
                        <Like width={12} height={12} className="inline-block self-center" />
                        Terfavorit
                    </span>
                    <span className="bg-black text-white mt-1 mr-1 text-sm px-1">Ada Stok</span>
                </div>
                <p className="font-medium leading-6 text-xl py-2 text-black-darker">
                    {this.props.titleProduct}
                </p>
                <p className="text-gray-lighter-1 line-through">{this.props.realPrice}</p>
                <p className="text-red-darker-1">{this.props.discountPrice}</p>
                <div className="mt-2">
                    <div className="inline-block bg-red-darker-1 text-white text-sm mt-1">
                        <span>Beli Rp.200.000 Diskon Rp.30.000</span>
                    </div>
                    <div className="inline-flex flex-nowrap flex-auto py-1 w-full">
                        <Plus className="inline-block self-center" width={26} height={16} />
                        <div className="flex flex-auto flex-nowrap text-sm bg-red-darker-1 px-1 text-white">
                            <Truck className="float-left inline-block self-center fill-current text-white mx-1" width={16} height={14} />
                            <span className="w-full">Beli minimum 330000, dapatkan 25000 Diskon Pengiriman</span>
                            <ArrowDown className="float-right inline-block self-center fill-current text-white" width={24} height={24} />
                        </div>
                    </div>
                    <div className="inline-flex flex-nowrap flex-auto py-1">
                        <Plus className="inline-block self-center" width={26} height={16} />
                        <div className="flex flex-auto flex-nowrap text-sm bg-red-darker-1 px-1 text-white">
                            <Truck className="float-left inline-block self-center fill-current text-white mx-1" width={16} height={14} />
                            <span>Beli minimum 300000, dapatkan 25000 Diskon Pengiriman</span>
                        </div>
                    </div>
                    <button
                        onClick={this.props.cartButton}
                        className="flex w-full p-2 mt-10 bg-red-darker-1 shadow-md h-12 font-semibold text-white text-sm text-center hover:bg-red-darker-1 hover:bg-opacity-90 active:bg-red-darker-1 active:bg-opacity-30 focus:outline-none transition duration-300 linear rounded-md"
                    >
                        <Cart className="inline-block float-left fill-current text-white self-center" width={24} height={24} />
                        <span className="mx-auto self-center">Beli Sekarang</span>
                    </button>
                </div>
                <div className="mt-6 text-black-darker whitespace-pre-line">
                    <p>Kualitas Premium🔥</p>
                    <p>Size 40 s/d 44 Eur</p>
                    <p>Kode Waffle ICC</p>
                    <p>BNIB (Baru & Lengkap)</p>
                    <br />
                    <p>LIMITED EDITION🔥</p>
                    <p>Dijamin ngga bakal nyesel, garansi bisa tuker kalo salah ukuran.</p>
                    <p>Bisa return / refund kalo ada cacat / kerusakan. Lo pasti puas!</p>
                    <br />
                    <p>Bisa bayar di Alfamart & Indomaret</p>
                    <p>Bisa Gojekin wilayah Kota Bogor</p>
                    <br />
                    <p>Beli 3 Gratis 1, Beli 2 Free Kaos Distro</p>
                    <p>Beli 1 Bonus Voucher Diskon</p>
                    <p className="mt-6">Berat : 1000g</p>
                </div>
                <div className="bg-gray-lighter-4 mt-4 py-2 px-4 text-black-darker">
                    <p className="mb-2 font-medium">Pengiriman</p>
                    <div className="flex justify-between">
                        <p>Kirim ke:</p>
                        <button className="text-sm hover:bg-gray-300 py-1">
                            <span>Bekasi,Cikarang Barat</span>
                            <ArrowDown className="float-right inline-block self-center fill-current text-black" width={24} height={24} />
                        </button>
                    </div>
                    <div className="flex justify-between">
                        <p>Perkiraan:</p>
                        <button className="text-sm flex">
                            <span className="self-center">Rp.8000</span>
                            <Alert className="float-right inline-block self-center fill-current text-black" width={24} height={24} />
                        </button>
                    </div>
                    <div className="mt-4">
                        Dikirim dalam 8 jam,
                        <br />
                        (Setelah pembayaran dikonfirmasi)
                    </div>
                </div>
                <div className="mb-5 mt-6">
                    <p className="mb-2 font-medium text-black-darker">Size/Ukuran: </p>
                    <div className="flex flex-auto pt-2 pb-4 items-center">
                        <div className="flex-auto">
                            <p className="text-black-darker font-medium">Size 40</p>
                            <div className="flex flex-wrap text-sm">
                                <p className="mr-1 text-red-darker-1">Rp.300.000</p>
                                <p className="mr-1 text-red-black-darker">(Stok Menipis)</p>
                            </div>
                        </div>
                        <button
                            className="font-medium bg-gray-lighter-4 rounded-md h-8 w-14 text-center"
                        >
                            Beli
                        </button>
                    </div>
                    <hr className="border-b-1 border-gray-lighter-4 border-solid" />
                    <div className="flex flex-auto pt-2 pb-4 items-center">
                        <div className="flex-auto">
                            <p className="text-black-darker font-medium">Size 42</p>
                            <div className="flex flex-wrap text-sm">
                                <p className="mr-1 text-red-darker-1">Rp.300.000</p>
                                <p className="mr-1 text-red-black-darker">(Stok Menipis)</p>
                            </div>
                        </div>
                        <button
                            className="font-medium bg-gray-lighter-4 rounded-md h-8 w-14 text-center"
                        >
                            Beli
                        </button>
                    </div>
                    <hr className="border-b-1 border-gray-lighter-4 border-solid" />
                    <div className="flex flex-auto pt-2 pb-4 items-center">
                        <div className="flex-auto">
                            <p className="text-black-darker font-medium">Size 43</p>
                            <div className="flex flex-wrap text-sm">
                                <p className="mr-1 text-red-darker-1">Rp.300.000</p>
                                <p className="mr-1 text-red-black-darker">(Stok Menipis)</p>
                            </div>
                        </div>
                        <button
                            className="font-medium bg-gray-lighter-4 rounded-md h-8 w-14 text-center"
                        >
                            Beli
                        </button>
                    </div>
                    <hr className="border-b-1 border-gray-lighter-4 border-solid" />
                    <div className="flex flex-auto pt-2 pb-4 items-center">
                        <div className="flex-auto">
                            <p className="text-black-darker font-medium">Size 44</p>
                            <div className="flex flex-wrap text-sm">
                                <p className="mr-1 text-red-darker-1">Rp.300.000</p>
                                <p className="mr-1 text-red-black-darker">(Stok Menipis)</p>
                            </div>
                        </div>
                        <button
                            className="font-medium bg-gray-lighter-4 rounded-md h-8 w-14 text-center"
                        >
                            Beli
                        </button>
                    </div>
                    <hr className="border-b-1 border-gray-lighter-4 border-solid" />
                        <button
                            className="flex w-full p-2 mt-6 bg-gray-lighter-4 shadow-md font-semibold text-black-darker text-sm text-center hover:bg-gray-300 active:bg-gray-400 focus:outline-none transition duration-300 linear rounded-md"
                        >
                            <Sms className="inline-block float-left stroke-current stroke-0 black self-center" width={24} height={24} />
                            <span className="mx-auto self-center">Kirim Pesan ke OLSHOES?</span>
                        </button>
                </div>
            </div>
        );
    }
}