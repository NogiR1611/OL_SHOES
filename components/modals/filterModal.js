import React from 'react';
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import Exit from './../../assets/images/icons/exit.svg';
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
                closeIcon={<Exit width={28} height={28} className="hover:bg-gray-200 rounded-full h-8 w-8 flex justify-center transition duration-300 ease-in-out" />}
                center
            >
                <div className="w-56 md:w-80 lg:w-96 py-6 px-1 items-center">
                    <p className="text-gray-800 text-base md:text-lg lg:text-2xl font-semibold">Urutkan Produk Berdasarkan</p>
                    <div className="w-full py-2">
                        <button
                            onClick={() => this.setState({ clickType: 'semua' })}
                            className={
                                "py-2 px-2 text-sm md:text-base text-right font-medium rounded-lg focus:outline-none mr-3 " +
                                (this.state.clickType === "semua" ? "bg-red-600 active:bg-red-700 transition duration-300 ease-in-out text-white" : "bg-gray-300 text-gray-800 transition duration-300 ease-in-out hover:bg-gray-400 text-gray-800")
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
                                "py-2 px-2 text-sm md:text-base text-right font-medium rounded-lg focus:outline-none " +
                                (this.state.clickType === "tersedia" ? "bg-red-600 active:bg-red-700 transition duration-300 ease-in-out text-white" : "bg-gray-300 text-gray-800 transition duration-300 ease-in-out hover:bg-gray-400 text-gray-800")
                            }
                        >
                            {this.state.clickType === "tersedia" ? 
                            (<Checklist className="inline-block float-left fill-current text-white mx-2" fill="white" stroke="white" width={20} height={20}/>)
                            : null}
                            Tersedia
                        </button>
                    </div>
                    <div className="pt-3">
                        <button
                            onClick={() => this.setState({ clickSpec: 'unggulan' })}
                            className="w-full text-left block p-2 text-sm md:text-base text-gray-800 font-medium rounded-lg focus:outline-none hover:bg-gray-100 transition duration-200 ease-in-out"
                        >
                            Unggulan
                            {this.state.clickSpec === 'unggulan' ?
                                (<Checklist className="inline-block float-right" width={20} height={20} />) : null
                            }
                        </button>
                        <button
                            onClick={() => this.setState({ clickSpec: 'terbaru' })}
                            className="w-full text-left block p-2 text-sm md:text-base text-gray-800 font-medium rounded-lg focus:outline-none hover:bg-gray-100 transition duration-200 ease-in-out"
                        >
                            Terbaru
                            {this.state.clickSpec === 'terbaru' ?
                                (<Checklist className="inline-block float-right" width={20} height={20} />) : null
                            }
                        </button>
                        <button
                            onClick={() => this.setState({ clickSpec: 'terlama' })}
                            className="w-full text-left block p-2 text-sm md:text-base text-gray-800 font-medium rounded-lg focus:outline-none hover:bg-gray-100 transition duration-200 ease-in-out"
                        >
                            Terlama
                            {this.state.clickSpec === 'terlama' ?
                                (<Checklist className="inline-block float-right" width={20} height={20} />) : null
                            }
                        </button>
                        <button
                            onClick={() => this.setState({ clickSpec: 'terpopuler' })}
                            className="w-full text-left block p-2 text-sm md:text-base text-gray-800 font-medium rounded-lg focus:outline-none hover:bg-gray-100 transition duration-200 ease-in-out"
                        >
                            Terpopuler
                            {this.state.clickSpec === 'terpopuler' ?
                                (<Checklist className="inline-block float-right" width={20} height={20} />) : null
                            }
                        </button>
                        <button
                            onClick={() => this.setState({ clickSpec: 'terendah' })}
                            className="w-full text-left block p-2 text-sm md:text-base text-gray-800 font-medium rounded-lg focus:outline-none hover:bg-gray-100 transition duration-200 ease-in-out"
                        >
                            Harga Terendah
                            {this.state.clickSpec === 'terendah' ?
                                (<Checklist className="inline-block float-right" width={20} height={20} />) : null
                            }
                        </button>
                        <button
                            onClick={() => this.setState({ clickSpec: 'tertinggi' })}
                            className="w-full text-left block p-2 text-sm md:text-base text-gray-800 font-medium rounded-lg focus:outline-none hover:bg-gray-100 transition duration-200 ease-in-out"
                        >
                            Harga Tertinggi
                            {this.state.clickSpec === 'tertinggi' ?
                                (<Checklist className="inline-block float-right" width={20} height={20} />) : null
                            }
                        </button>
                        <button
                            onClick={() => this.setState({ clickSpec: 'produk' })}
                            className="w-full text-left block p-2 text-sm md:text-base text-gray-800 font-medium rounded-lg focus:outline-none hover:bg-gray-100 transition duration-200 ease-in-out"
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