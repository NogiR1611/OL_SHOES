import React from 'react';
import Checklist from './../../assets/images/icons/checklist.svg';
import Search from './../../assets/images/icons/search.svg';

export default class FilterCard extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            clickType: '',
            clickCategory: '',
            clickProduct: ''
        }
    }

    render(){
        return (
            <>
                <div className="hidden xl:block flex-none self-start h-100 bg-gray-200 xl:w-64 my-3 mx-1 px-1 py-4">
                    <div className="my-6">
                        <button
                            onClick={this.props.searchOnClick}
                            type="button"
                            className="w-full px-2 text-left text-gray-700 rounded-lg focus:outline-none hover:bg-gray-300 transition duration-200 ease-in-out py-2"
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
                            onClick={() => this.setState({ clickType: 'all_product' })}
                            className={
                                "w-full px-2 text-left text-gray-700 rounded-lg focus:outline-none hover:bg-gray-lighter-5 active:bg-gray-lighter-3 transition duration-200 ease-in-out py-2 " +
                                (this.state.clickType === 'all_product' ? "bg-gray-lighter-5" : "")
                            }
                        >
                            Semua Produk
                        </button>
                        <button
                            type="button"
                            onClick={() => this.setState({ clickType: 'unggulan_product' })}
                            className={
                                "w-full px-2 text-left text-gray-700 rounded-lg focus:outline-none hover:bg-gray-lighter-5 active:bg-gray-lighter-3 transition duration-200 ease-in-out py-2 " +
                                (this.state.clickType === 'unggulan_product' ? "bg-gray-lighter-5" : "")
                            }
                        >
                            Produk Unggulan
                        </button>
                        <button
                            type="button"
                            onClick={() => this.setState({ clickType: 'diskon' })}
                            className={
                                "w-full px-2 text-left text-gray-700 rounded-lg focus:outline-none hover:bg-gray-lighter-5 active:bg-gray-lighter-3 transition duration-200 ease-in-out py-2 " +
                                (this.state.clickType === 'diskon' ? "bg-gray-lighter-5" : "")
                            }
                        >
                            Diskon
                        </button>
                    </div>
                    <div className="">
                        <p className="text-gray-800 text-lg font-semibold px-2 py-4">Kategori</p>
                        <button
                            onClick={() => this.setState({ clickCategory: 'vans' })}
                            className={
                                "w-full text-left block py-1 px-2 text-gray-700 uppercase rounded-lg focus:outline-none hover:bg-gray-lighter-5 active:bg-gray-lighter-3 transition duration-200 ease-in-out " +
                                (this.state.clickCategory === 'vans' ? "bg-gray-lighter-5" : "")
                            }
                        >
                            vans
                        </button>
                        <button
                            onClick={() => this.setState({ clickCategory: 'saba' })}
                            className={
                                "w-full text-left block py-1 px-2 text-gray-700 uppercase rounded-lg focus:outline-none hover:bg-gray-lighter-5 active:bg-gray-lighter-3 transition duration-200 ease-in-out " +
                                (this.state.clickCategory === 'saba' ? "bg-gray-lighter-5" : "")
                            }
                        >
                            saba
                        </button>
                        <button
                            onClick={() => this.setState({ clickCategory: 'converse' })}
                            className={
                                "w-full text-left block py-1 px-2 text-gray-700 uppercase rounded-lg focus:outline-none hover:bg-gray-lighter-5 active:bg-gray-lighter-3 transition duration-200 ease-in-out " +
                                (this.state.clickCategory === 'converse' ? "bg-gray-lighter-5" : "")
                            }
                        >
                            converse
                        </button>
                        <button
                            onClick={() => this.setState({ clickCategory: 'ventela' })}
                            className={
                                "w-full text-left block py-1 px-2 text-gray-700 uppercase rounded-lg focus:outline-none hover:bg-gray-lighter-5 active:bg-gray-lighter-3 transition duration-200 ease-in-out " +
                                (this.state.clickCategory === 'ventela' ? "bg-gray-lighter-5" : "")
                            }
                        >
                            ventela
                        </button>
                        <button
                            onClick={() => this.setState({ clickCategory: 'local' })}
                            className={
                                "w-full text-left block py-1 px-2 text-gray-700 uppercase rounded-lg focus:outline-none hover:bg-gray-lighter-5 active:bg-gray-lighter-3 transition duration-200 ease-in-out " +
                                (this.state.clickCategory === 'local' ? "bg-gray-lighter-5" : "")
                            }
                        >
                            lokal brand
                        </button>
                        <button
                            onClick={() => this.setState({ clickCategory: 'gabut' })}
                            className={
                                "w-full text-left block py-1 px-2 text-gray-700 uppercase rounded-lg focus:outline-none hover:bg-gray-lighter-5 active:bg-gray-lighter-3 transition duration-200 ease-in-out " +
                                (this.state.clickCategory === 'gabut' ? "bg-gray-lighter-5" : "")
                            }
                        >
                            kaos gabut
                        </button>
                    </div>
                    <hr className="border-b-1 border-gray-300 my-4" />
                    <div className="">
                        <p className="text-gray-800 text-lg font-semibold text-center py-2">Urutkan produk berdasarkan</p>
                        <button
                            onClick={() => this.setState({clickProduct: 'unggulan' })}
                            className="w-full text-left block py-1 px-2 text-gray-700 rounded-lg focus:outline-none hover:bg-gray-lighter-5 active:bg-gray-lighter-3 transition duration-200 ease-in-out"
                        >
                            Unggulan
                            {this.state.clickProduct === 'unggulan' ?
                                (
                                    <Checklist className="inline-block float-right" width={20} height={20} />
                                ) : null
                            }
                        </button>
                        <button
                            onClick={() => this.setState({clickProduct: 'terbaru' })}
                            className="w-full text-left block py-1 px-2 text-gray-700 rounded-lg focus:outline-none hover:bg-gray-lighter-5 active:bg-gray-lighter-3 transition duration-200 ease-in-out"
                        >
                            Terbaru
                            {this.state.clickProduct === 'terbaru' ?
                                (
                                    <Checklist className="inline-block float-right" width={20} height={20} />
                                ) : null
                            }
                        </button>
                        <button
                            onClick={() => this.setState({clickProduct: 'terlama' })}
                            className="w-full text-left block py-1 px-2 text-gray-700 rounded-lg focus:outline-none hover:bg-gray-lighter-5 active:bg-gray-lighter-3 transition duration-200 ease-in-out"
                        >
                            Terlama
                            {this.state.clickProduct === 'terlama' ?
                                (
                                    <Checklist className="inline-block float-right" width={20} height={20} />
                                ) : null
                            }
                        </button>
                        <button
                            onClick={() => this.setState({clickProduct: 'terpopuler' })}
                            className="w-full text-left block py-1 px-2 text-gray-700 rounded-lg focus:outline-none hover:bg-gray-lighter-5 active:bg-gray-lighter-3 transition duration-200 ease-in-out"
                        >
                            Terpopuler
                            {this.state.clickProduct === 'terpopuler' ?
                                (
                                    <Checklist className="inline-block float-right" width={20} height={20} />
                                ) : null
                            }
                        </button>
                        <button
                            onClick={() => this.setState({clickProduct: 'terendah' })}
                            className="w-full text-left block py-1 px-2 text-gray-700 rounded-lg focus:outline-none hover:bg-gray-lighter-5 active:bg-gray-lighter-3 transition duration-200 ease-in-out"
                        >
                            Harga Terendah
                            {this.state.clickProduct === 'terendah' ?
                                (
                                    <Checklist className="inline-block float-right" width={20} height={20} />
                                ) : null
                            }
                        </button>
                        <button
                            onClick={() => this.setState({clickProduct: 'tertinggi' })}
                            className="w-full text-left block py-1 px-2 text-gray-700 rounded-lg focus:outline-none hover:bg-gray-lighter-5 active:bg-gray-lighter-3 transition duration-200 ease-in-out"
                        >
                            Harga Tertinggi
                            {this.state.clickProduct === 'tertinggi' ?
                                (
                                    <Checklist className="inline-block float-right" width={20} height={20} />
                                ) : null
                            }
                        </button>
                        <button
                            onClick={() => this.setState({clickProduct: 'nama_product' })}
                            className="w-full text-left block py-1 px-2 text-gray-700 rounded-lg focus:outline-none hover:bg-gray-lighter-5 active:bg-gray-lighter-3 transition duration-200 ease-in-out"
                        >
                            Nama Produk (A-Z)
                            {this.state.clickProduct === 'nama_product' ?
                                (
                                    <Checklist className="inline-block float-right" width={20} height={20} />
                                ) : null
                            }
                        </button>
                    </div>
                </div>
            </>
        );
    }
}