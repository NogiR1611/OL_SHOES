import React from 'react';
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import ArrowLeft from './../../assets/images/icons/arrowLeft.svg';

export default class SizeModal extends React.Component{ 
    render(){
        return (
            <Modal
                styles={{modal: { maxWidth:'100%',borderRadius : '10px' }}}
                open={this.props.onOpenSize}
                onClose={this.props.onCloseSize}
                closeIcon={<ArrowLeft className="bg-gray-lighter-4 hover:bg-gray-lighter-4 rounded-full stroke-current stroke-0 focus:outline-none text-black transform scale-100 h-8 w-8 p-1 flex justify-center" />}
                center
            >
                <div className="bg-gray-lighter w-full md:w-480 items-center">
                    <div className="flex justify-center md:hidden">
                        <div className="bg-gray-lighter-6 mx-auto h-1 w-20 absolute top-1 rounded-sm" />
                    </div>
                    <div className="w-full pt-10">
                        <p className="text-xl text-black-darker pt-4 px-6 font-medium">PILIH SIZE/UKURAN :</p>
                        <div className="px-6 pb-5">
                            <button
                                onClick={this.props.onClickSize}
                                className="h-12 w-full flex-column text-center text-sm rounded shadow bg-white mt-4 focus:outline-none"
                            >
                                <p className="text-darker-1 text-sm font-medium">SIZE 40</p>
                                <span className="text-lighter-1 text-sm">Stok Menipis </span><span className="text-red-darker-1 text-sm">(Rp 270.000)</span>
                            </button>
                            <button
                                onClick={this.props.onClickSize}
                                className="h-12 w-full flex-column text-center text-sm rounded shadow bg-white mt-4 focus:outline-none"
                            >
                                <p className="text-darker-1 text-sm font-medium">SIZE 41</p>
                                <span className="text-lighter-1 text-sm">Stok Banyak </span><span className="text-red-darker-1 text-sm">(Rp 290.000)</span>
                            </button>
                            <button
                                onClick={this.props.onClickSize}
                                className="h-12 w-full flex-column text-center text-sm rounded shadow bg-white mt-4 focus:outline-none"
                            >
                                <p className="text-darker-1 text-sm font-medium">SIZE 42</p>
                                <span className="text-lighter-1 text-sm">Stok Menipis </span><span className="text-red-darker-1 text-sm">(Rp 250.000)</span>
                            </button>
                            <button
                                onClick={this.props.onClickSize}
                                className="h-12 w-full flex-column text-center text-sm rounded shadow bg-white mt-4 focus:outline-none"
                            >
                                <p className="text-darker-1 text-sm font-medium">SIZE 43</p>
                                <span className="text-lighter-1 text-sm">Stok Menipis </span><span className="text-red-darker-1 text-sm">(Rp 370.000)</span>
                            </button>
                            <button
                                onClick={this.props.onClickSize}
                                className="h-12 w-full flex-column text-center text-sm rounded shadow bg-white mt-4 focus:outline-none"
                            >
                                <p className="text-darker-1 text-sm font-medium">SIZE 44</p>
                                <span className="text-lighter-1 text-sm">Stok Banyak </span><span className="text-red-darker-1 text-sm">(Rp 350.000)</span>
                            </button>
                        </div>
                    </div>
                </div>
            </Modal>
        );
    }
}