import React from 'react';
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import ArrowLeft from './../../../assets/images/icons/arrowLeft.svg';

export default class Minimarket extends React.Component{
    render(){
        return (
            <Modal
                styles={{modal: { maxWidth : '100%',borderRadius : '5%',padding: '0' }}} 
                open={this.props.minimarket}
                onClose={this.props.onCloseMinimarket}
                closeIcon={<ArrowLeft className="bg-gray-lighter-4 hover:bg-gray-lighter-5 transition duration-300 ease-in-out rounded-full stroke-current stroke-0 focus:outline-none text-black transform scale-100 h-8 w-8 p-1 flex justify-center" />}
                center
            >
                <div className="bg-gray-lighter w-full md:w-480 items-center">
                    <div className="md:h-9 md:w-480" />
                    <p className="w-full text-xl font-bold text-black-darker py-4 px-6">Pilih Minimarket</p>
                    <div className="px-6 pb-5">
                        <div className="flex flex-nowrap flex-auto w-full mb-2 text-black-darker">
                            <span className="flex flex-auto">Total Harga:</span>
                            <span className="flex flex-none font-semibold">Rp.754.000</span>
                        </div>
                        <div className="flex flex-nowrap flex-auto w-full mb-2 text-black-darker">
                            <span className="flex flex-auto">Biaya Minimarket:</span>
                            <span className="flex flex-none font-semibold">Rp.2.500</span>
                        </div>
                        <div className="flex flex-nowrap flex-auto w-full text-black-darker">
                            <span className="flex flex-auto">Total Pembayaran:</span>
                            <span className="flex flex-none font-semibold">Rp.756.500</span>
                        </div>
                        <div
                            className="flex flex-wrap h-12 px-5 mt-4 cursor-pointer shadow-xl rounded-md bg-white hover:bg-gray-lighter-5 active:bg-gray-lighter-3 transition duration-300 ease-in-out"
                            onClick={e => e.preventDefault()}
                        >
                            <div className="flex flex-col flex-auto text-sm self-center text-center">
                                <p className="text-black-darker font-semibold">Alfamart</p>
                                <span className="text-red-darker-1">Nama Merchant: EPAY ...</span>
                            </div>
                            <div className="flex flex-none">
                                <img 
                                    src="https://d1ggq58xg1ha0k.cloudfront.net/_nuxt/img/alma.4b569b7.svg"
                                    className="self-center h-10 w-10 bg-auto bg-center"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </Modal>
        )
    }
}