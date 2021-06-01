import React from 'react';
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import Trash from './../../../assets/images/icons/trash.svg';

export default class AmountOfProduct extends React.Component{
    render(){
        return (
            <Modal
                styles={{modal: { maxWidth : '100%',borderRadius : '10px' }}}
                open={this.props.openModalAmountProduct}
                onClose={this.props.onClosemodalAmountProduct}
                showCloseIcon={false}
                center
            >
                <div className="bg-gray-lighter w-full md:w-480 h-full items-center">
                    <div className="md:h-9 md:w-480" />
                    <div className="flex flex-nowrap flex-auto mt-4 mb-2 mx-6">
                        <p className="flex-auto font-medium text-xl text-black-darker whitespace-nowrap overflow-ellipsis overflow-hidden">VANS OLD SKOOL BLACK WHITE</p>
                        <div className="flex justify-center h-12 w-12 bg-gray-lighter-4 cursor-pointer rounded-full">
                            <Trash width={24} height={24} className="h-6 w-6 self-center"  />
                        </div>
                    </div>
                    <div className="flex justify-center my-4">
                        <button 
                            className="inline-block flex justify-center bg-gray-lighter-4 rounded-full h-12 w-12 mx-2 focus:outline-none hover:bg-opacity-50 hover:bg-gray-lighter-4 transition duration-300 ease-in-out"
                            onClick={this.props.onReduceAmount}
                        >
                            <svg className="self-center" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" fill="inherit"><path d="M19,11H5a1,1,0,0,0,0,2H19a1,1,0,0,0,0-2Z"></path></svg>
                        </button>
                        <div className="inline-block p-2">{this.props.amountProduct}</div>
                        <button
                            className="inline-block flex justify-center bg-gray-lighter-4 rounded-full active:bg-gray-500 h-12 w-12 mx-2 focus:outline-none active:bg-gray-lighter-4 hover:bg-opacity-80 transition duration-300 ease-in-out"
                            onClick={this.props.onAddAmount}
                        >
                            <svg className="self-center" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" fill="inherit"><path d="M19,11H13V5a1,1,0,0,0-2,0v6H5a1,1,0,0,0,0,2h6v6a1,1,0,0,0,2,0V13h6a1,1,0,0,0,0-2Z"></path></svg>
                        </button>
                    </div>
                    <div className="my-2 mx-4 flex justify-end bg-gray-lighter">
                        <button
                            onClick={this.props.onClosemodalAmountProduct}
                            className="mx-2 p-2 font-bold text-gray-800 focus:outline-none"
                        >
                            Tutup
                        </button>
                        <button
                            onClick={this.props.onClosemodalAmountProduct}
                            className="mx-2 p-2 font-bold bg-red-darker-1 hover:bg-red-700 active:bg-red-800 rounded-lg text-gray-100 focus:outline-none"
                        >
                            Simpan
                        </button>
                    </div>
                </div>
            </Modal>
        )
    }
}