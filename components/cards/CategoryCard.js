import React from 'react';
import SearchModal from './../modals/searchModal.js';
import Search from './../../assets/images/icons/search.svg';

export default class CategoryCard extends React.Component{
    render(){
        return (
            <>
                <div className="bg-gray-200 w-3/12 my-2 mx-1 px-1 py-4">
                    <div className="my-6">
                        <button
                            onClick={this.props.searchOnClick}
                            type="button"
                            className="w-full px-2 text-left text-gray-700 rounded-lg focus:outline-none hover:bg-gray-300 duration-200 py-2"
                        >  
                            <Search
                                className="inline-block stroke-current stroke-0 black mr-1"
                                width={28} 
                                height={28} 
                            />
                            Cari
                        </button>
                        <button
                            type="button"
                            className="w-full px-2 text-left text-gray-700 rounded-lg focus:outline-none hover:bg-gray-300 duration-200 py-2"
                        >
                            Semua Produk
                        </button>
                        <button
                            type="button"
                            className="w-full px-2 text-left text-gray-700 rounded-lg focus:outline-none hover:bg-gray-300 duration-200 py-2"
                        >
                            Produk Unggulan
                        </button>
                        <button
                            type="button"
                            className="w-full px-2 text-left text-gray-700 rounded-lg focus:outline-none hover:bg-gray-300 duration-200 py-2"
                        >
                            Diskon
                        </button>
                    </div>
                    <div className="">
                        <p className="text-gray-800 text-xl font-semibold px-2 py-4">Kategori</p>
                        <button
                            className="w-full text-left block py-1 px-2 text-gray-700 uppercase rounded-lg focus:outline-none hover:bg-gray-300 duration-200"
                        >
                            vans
                        </button>
                        <button
                            className="w-full text-left block py-1 px-2 text-gray-700 uppercase rounded-lg focus:outline-none hover:bg-gray-300 duration-200"
                        >
                            saba
                        </button>
                        <button
                            className="w-full text-left block py-1 px-2 text-gray-700 uppercase rounded-lg focus:outline-none hover:bg-gray-300 duration-200"
                        >
                            converse
                        </button>
                        <button
                            className="w-full text-left block py-1 px-2 text-gray-700 uppercase rounded-lg focus:outline-none hover:bg-gray-300 duration-200"
                        >
                            ventela
                        </button>
                        <button
                            className="w-full text-left block py-1 px-2 text-gray-700 uppercase rounded-lg focus:outline-none hover:bg-gray-300 duration-200"
                        >
                            lokal brand
                        </button>
                        <button
                            className="w-full text-left block py-1 px-2 text-gray-700 uppercase rounded-lg focus:outline-none hover:bg-gray-300 duration-200"
                        >
                            kaos gabut
                        </button>
                    </div>
                    <hr className="border-b-1 border-gray-300 my-4" />
                    <div className="">
                        <p className="text-gray-800 text-xl font-semibold px-2 py-4">Urutkan produk berdasarkan</p>
                        <button
                            className="w-full text-left block py-1 px-2 text-gray-700 rounded-lg focus:outline-none hover:bg-gray-300 duration-200"
                        >
                            Unggulan
                        </button>
                        <button
                            className="w-full text-left block py-1 px-2 text-gray-700 rounded-lg focus:outline-none hover:bg-gray-300 duration-200"
                        >
                            Terbaru
                        </button>
                        <button
                            className="w-full text-left block py-1 px-2 text-gray-700 rounded-lg focus:outline-none hover:bg-gray-300 duration-200"
                        >
                            Terlama
                        </button>
                        <button
                            className="w-full text-left block py-1 px-2 text-gray-700 rounded-lg focus:outline-none hover:bg-gray-300 duration-200"
                        >
                            Terpopuler
                        </button>
                        <button
                            className="w-full text-left block py-1 px-2 text-gray-700 rounded-lg focus:outline-none hover:bg-gray-300 duration-200"
                        >
                            Harga Terendah
                        </button>
                        <button
                            className="w-full text-left block py-1 px-2 text-gray-700 rounded-lg focus:outline-none hover:bg-gray-300 duration-200"
                        >
                            Harga Tertinggi
                        </button>
                        <button
                            className="w-full text-left block py-1 px-2 text-gray-700 rounded-lg focus:outline-none hover:bg-gray-300 duration-200"
                        >
                            Nama Produk (A-Z)
                        </button>
                    </div>
                </div>
            </>
        );
    }
}