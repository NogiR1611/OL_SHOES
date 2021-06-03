import React from 'react';
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import ArrowLeft from './../../assets/images/icons/arrowLeft.svg';
import Checklist from './../../assets/images/icons/checklist1.svg';

export default class FilterModal extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            clickSpec: '',
            clickType: 'semua'
        }
    }
    render(){
        return (
            <Modal
                styles={{modal: { maxWidth : '100%',borderRadius : '5%' }}} 
                open={this.props.onOpenFilter} 
                onClose={this.props.onCloseFilter}
                showCloseIcon={false}
                center
            >
                <div className="bg-gray-lighter w-full md:w-480 items-center">
                    <div className="flex justify-center md:hidden">
                        <div className="bg-gray-lighter-6 mx-auto h-1 w-20 absolute top-1 rounded-sm" />
                    </div>
                    <p className="text-black-darker text-xl font-semibold py-4 px-6">Urutkan Produk Berdasarkan</p>
                    <div className="w-full pt-2 mb-4 px-6">
                        <button
                            onClick={() => this.setState({ clickType: 'semua' })}
                            className={
                                "py-2 px-2 text-sm text-right font-medium rounded-lg focus:outline-none mr-3 " +
                                (this.state.clickType === "semua" ? "bg-red-darker-1 hover:opacity-90 active:bg-opacity-50 active:bg-red-darker-1 transition duration-300 ease-in-out text-white" : "bg-gray-300 text-gray-800 transition duration-300 ease-in-out hover:bg-gray-400 text-gray-800")
                            }
                        >
                            {this.state.clickType === "semua" ? 
                            (<Checklist className="inline-block float-left fill-current text-white mx-2" fill="white" stroke="white" width={20} height={20}/>)
                            : null}
                            Semua
                        </button>
                        <button 
                            onClick={() => this.setState({ clickType: 'tersedia' })}
                            className={
                                "py-2 px-2 text-sm text-right font-medium rounded-lg focus:outline-none " +
                                (this.state.clickType === "tersedia" ? "bg-red-darker-1 hover:opacity-90 active:bg-opacity-50 active:bg-red-darker-1 transition duration-300 ease-in-out text-white" : "bg-gray-300 text-gray-800 transition duration-300 ease-in-out hover:bg-gray-400 text-gray-800")
                            }
                        >
                            {this.state.clickType === "tersedia" ? 
                            (<Checklist className="inline-block float-left fill-current text-white mx-2" fill="white" stroke="white" width={20} height={20}/>)
                            : null}
                            Tersedia
                        </button>
                    </div>
                    <div className="px-6 pb-5">
                        <button
                            onClick={() => this.setState({ clickSpec: 'unggulan' })}
                            className="w-full text-left block p-2 text-sm md:text-base text-gray-800 font-medium rounded-lg focus:outline-none  hover:bg-gray-lighter-5 active:bg-gray-lighter-3 transition duration-200 ease-in-out"
                        >
                            Unggulan
                            {this.state.clickSpec === 'unggulan' ?
                                (<Checklist className="inline-block float-right" width={20} height={20} />) : null
                            }
                        </button>
                        <button
                            onClick={() => this.setState({ clickSpec: 'terbaru' })}
                            className="w-full text-left block p-2 text-sm md:text-base text-gray-800 font-medium rounded-lg focus:outline-none  hover:bg-gray-lighter-5 active:bg-gray-lighter-3 transition duration-200 ease-in-out"
                        >
                            Terbaru
                            {this.state.clickSpec === 'terbaru' ?
                                (<Checklist className="inline-block float-right" width={20} height={20} />) : null
                            }
                        </button>
                        <button
                            onClick={() => this.setState({ clickSpec: 'terlama' })}
                            className="w-full text-left block p-2 text-sm md:text-base text-gray-800 font-medium rounded-lg focus:outline-none hover:bg-gray-lighter-5 active:bg-gray-lighter-3 transition duration-200 ease-in-out"
                        >
                            Terlama
                            {this.state.clickSpec === 'terlama' ?
                                (<Checklist className="inline-block float-right" width={20} height={20} />) : null
                            }
                        </button>
                        <button
                            onClick={() => this.setState({ clickSpec: 'terpopuler' })}
                            className="w-full text-left block p-2 text-sm md:text-base text-gray-800 font-medium rounded-lg focus:outline-none hover:bg-gray-lighter-5 active:bg-gray-lighter-3 transition duration-200 ease-in-out"
                        >
                            Terpopuler
                            {this.state.clickSpec === 'terpopuler' ?
                                (<Checklist className="inline-block float-right" width={20} height={20} />) : null
                            }
                        </button>
                        <button
                            onClick={() => this.setState({ clickSpec: 'terendah' })}
                            className="w-full text-left block p-2 text-sm md:text-base text-gray-800 font-medium rounded-lg focus:outline-none hover:bg-gray-lighter-5 active:bg-gray-lighter-3 transition duration-200 ease-in-out"
                        >
                            Harga Terendah
                            {this.state.clickSpec === 'terendah' ?
                                (<Checklist className="inline-block float-right" width={20} height={20} />) : null
                            }
                        </button>
                        <button
                            onClick={() => this.setState({ clickSpec: 'tertinggi' })}
                            className="w-full text-left block p-2 text-sm md:text-base text-gray-800 font-medium rounded-lg focus:outline-none hover:bg-gray-lighter-5 active:bg-gray-lighter-3 transition duration-200 ease-in-out"
                        >
                            Harga Tertinggi
                            {this.state.clickSpec === 'tertinggi' ?
                                (<Checklist className="inline-block float-right" width={20} height={20} />) : null
                            }
                        </button>
                        <button
                            onClick={() => this.setState({ clickSpec: 'produk' })}
                            className="w-full text-left block p-2 text-sm md:text-base text-gray-800 font-medium rounded-lg focus:outline-none hover:bg-gray-lighter-5 active:bg-gray-lighter-3 transition duration-200 ease-in-out"
                        >
                            Nama Produk (A-Z)
                            {this.state.clickSpec === 'produk' ?
                                (<Checklist className="inline-block float-right" width={20} height={20} />) : null
                            }
                        </button>
                    </div>
                </div>
            </Modal>
        )
    }
}