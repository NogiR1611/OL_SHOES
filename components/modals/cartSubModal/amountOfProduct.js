import React from 'react';
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
                <div className="bg-gray-lighter w-full h-full md:w-480 h-full items-center">
                    <div className="flex justify-center md:hidden">
                        <div className="bg-gray-lighter-6 mx-auto h-1 w-20 absolute top-1 rounded-sm" />
                    </div>
                    <div className="flex flex-nowrap flex-auto pt-4 pb-2 mx-2 hp-one:mx-6">
                        <p className="self-center flex-auto font-medium text-sm hp-one:text-base md:text-xl text-black-darker whitespace-nowrap overflow-ellipsis overflow-hidden">VANS OLD SKOOL BLACK WHITE</p>
                        <div className="flex justify-center flex-shrink-0 h-10 w-10 hp:h-12 hp:w-12 bg-gray-lighter-4 cursor-pointer rounded-full">
                            <Trash className="h-5 w-5 hp:h-6 hp:w-6 self-center"  />
                        </div>
                    </div>
                    <div className="flex justify-center my-4">
                        <button 
                            className="inline-block flex justify-center bg-gray-lighter-4 rounded-full h-10 w-10 hp:h-12 hp:w-12 mx-2 focus:outline-none hover:bg-opacity-50 hover:bg-gray-lighter-4 transition duration-300 ease-in-out"
                            onClick={this.props.onReduceAmount}
                        >
                            <svg className="self-center h-5 w-5 hp:h-6 hp:w-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="inherit"><path d="M19,11H5a1,1,0,0,0,0,2H19a1,1,0,0,0,0-2Z"></path></svg>
                        </button>
                        <div className="self-center text-sm md:text-base inline-block p-2">{this.props.amountProduct}</div>
                        <button
                            className="inline-block flex justify-center bg-gray-lighter-4 rounded-full active:bg-gray-500 h-10 w-10 hp:h-12 hp:w-12 mx-2 focus:outline-none active:bg-gray-lighter-4 hover:bg-opacity-80 transition duration-300 ease-in-out"
                            onClick={this.props.onAddAmount}
                        >
                            <svg className="self-center h-5 w-5 hp:h-6 hp:w-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="inherit"><path d="M19,11H13V5a1,1,0,0,0-2,0v6H5a1,1,0,0,0,0,2h6v6a1,1,0,0,0,2,0V13h6a1,1,0,0,0,0-2Z"></path></svg>
                        </button>
                    </div>
                    <div className="pb-2 mx-2 hp-one:mx-4 flex justify-end bg-gray-lighter">
                        <button
                            onClick={this.props.onClosemodalAmountProduct}
                            className="text-xs hp-one:text-sm md:text-base mx-2 p-2 font-bold text-gray-800 focus:outline-none"
                        >
                            Tutup
                        </button>
                        <button
                            onClick={this.props.onClosemodalAmountProduct}
                            className="text-xs hp-one:text-sm md:text-base mx-2 p-2 font-bold bg-red-darker-1 hover:bg-red-700 active:bg-red-800 rounded-lg text-gray-100 focus:outline-none"
                        >
                            Simpan
                        </button>
                    </div>
                </div>
            </Modal>
        )
    }
}