import React from 'react';
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import Trash from './../../../assets/images/icons/trash.svg';

export default class AmountOfProduct extends React.Component{
    render(){
        return (
            <Modal
                styles={{modal: { width : '33%',borderRadius : '10px' }}}
                open={this.props.openModalAmountProduct}
                onClose={this.props.onClosemodalAmountProduct}
                showCloseIcon={false}
            >
                <div className="w-full py-4 items-center">
                    <div className="flex flex-wrap w-full">
                        <p className="inline-block w-11/12 font-bold text-gray-800">VANS OLD SKOOL BLACK WHITE</p>
                        <Trash width={28} height={28} className="inline-block w-1/12 cursor-pointer hover:bg-gray-200 rounded-full h-10 w-10 flex justify-center duration-300"  />
                    </div>
                    <div className="flex justify-center my-4">
                        <button 
                            className="inline-block bg-gray-300 rounded-full active:bg-gray-500 h-10 w-10 mx-2 focus:outline-none focus:ring-offset-transparent hover:bg-gray-400 duration-300 p-auto"
                            onClick={this.props.onReduceAmount}
                        >
                            -
                        </button>
                        <div className="inline-block p-2">{this.props.amountProduct}</div>
                            <button
                                className="inline-block bg-gray-300 rounded-full active:bg-gray-500 h-10 w-10 mx-2 focus:outline-none hover:bg-gray-400 transition duration-300 ease-in-out p-auto"
                                onClick={this.props.onAddAmount}
                            >
                                +
                            </button>
                        </div>
                        <div className="my-4 float-right">
                            <button
                                onClick={this.props.onClosemodalAmountProduct}
                                className="mx-2 p-2 font-bold text-gray-800 focus:outline-none"
                            >
                                Tutup
                            </button>
                            <button
                                onClick={this.props.onClosemodalAmountProduct}
                                className="mx-2 p-2 font-bold bg-red-600 hover:bg-red-700 active:bg-red-800 rounded-lg text-gray-100 focus:outline-none"
                            >
                                Simpan
                            </button>
                        </div>
                    </div>
                </Modal>
        )
    }
}