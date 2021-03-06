import React from 'react';
import { Modal } from 'react-responsive-modal';
import ArrowLeft from './../../assets/images/icons/arrowLeft.svg';

export default class AmountModal extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            showAmountNotif: false,
            showAmount: false,
        }
    }

    onCloseAmountNotif = () => {
        this.setState({ showAmountNotif:false });
    }

    componentDidMount(){
        this.props.onOpenAmount ? this.setState({ showAmount:false }) : this.setState({ showAmount:false }) ;
    }

    render(){
        return (
            <>
            <Modal
                styles={{modal: { maxWidth:'100%',borderRadius : '10px' }}}
                open={this.props.onOpenAmount}
                onClose={this.props.onCloseAmount}
                closeIcon={<ArrowLeft className="bg-gray-lighter-4 hover:bg-gray-lighter-5 transition duration-300 ease-in-out rounded-full stroke-current stroke-0 focus:outline-none text-black transform scale-100 h-6 w-6 hp-one:h-8 hp-one:w-8 p-1 flex justify-center" />}
                center
            >
                <div className="bg-gray-lighter w-full md:w-480 items-center">
                    <div className="flex justify-center md:hidden">
                        <div className="bg-gray-lighter-6 mx-auto h-1 w-20 absolute top-1 rounded-sm" />
                    </div>
                    <div className="w-full pt-10">
                        <p className="text-base hp-one:text-lg lg:text-xl text-black-darker pt-4 px-6 font-medium">Pilih Jumlah :</p>
                        <div className="text-xs hp-one:text-sm px-6 pb-5">
                            <button
                                onClick={this.props.arraySize[0] === 1 ? () => this.props.onClickStock(1) : e => e.preventDefault()}
                                className={
                                    "h-12 w-full flex-column text-center rounded-md mt-4 pointer-events-auto focus:outline-none " +
                                    (this.props.arraySize[0] === 1 ? "shadow-md bg-white" : "bg-gray-lighter-5")
                                }
                            >
                                <p className="text-black-darker-1 font-medium">1</p>
                                <p className={"font-medium " + (this.props.arraySize[0] === 1 ? "text-black-darker" : "text-red-darker-1" )}>
                                    {this.props.arraySize[0] === 1 ? "Stok ada" : "Stok kosong"}
                                </p>
                            </button>
                            <button
                                onClick={this.props.arraySize[1] === 2 ? () => this.props.onClickStock(2) : e => e.preventDefault()}
                                className={
                                    "h-12 w-full flex-column text-center rounded-md mt-4 focus:outline-none " +
                                    (this.props.arraySize[1] === 2 ? "shadow-md bg-white" : "bg-gray-lighter-5")
                                }
                            >
                                <p className="text-black-darker-1 font-medium">2</p>
                                <p className={"font-medium " + (this.props.arraySize[1] === 2 ? "text-black-darker" : "text-red-darker-1" )}>
                                    {this.props.arraySize[1] === 2 ? "Stok ada" : "Stok kosong"}
                                </p>
                            </button>
                            <button
                                onClick={this.props.arraySize[2] === 3 ? () => this.props.onClickStock(3) : e => e.preventDefault()}
                                className={
                                    "h-12 w-full flex-column text-center rounded-md mt-4 focus:outline-none " +
                                    (this.props.arraySize[2] === 3 ? "shadow-md bg-white" : "bg-gray-lighter-5")
                                }
                            >
                                <p className="text-black-darker-1 font-medium">3</p>
                                <p className={"font-medium " + (this.props.arraySize[2] === 3 ? "text-black-darker" : "text-red-darker-1" )}>
                                    {this.props.arraySize[2] === 3 ? "Stok ada" : "Stok kosong"}
                                </p>
                            </button>
                            <button
                                onClick={this.props.arraySize[3] === 4 ? () => this.props.onClickStock(4) : e => e.preventDefault()}
                                className={
                                    "h-12 w-full flex-column text-center rounded-md mt-4 focus:outline-none " +
                                    (this.props.arraySize[3] === 4 ? "shadow-md bg-white" : "bg-gray-lighter-5")
                                }
                            >
                                <p className="text-black-darker-1 text-sm font-medium">4</p>
                                <p className={"font-medium " + (this.props.arraySize[3] === 4 ? "text-black-darker" : "text-red-darker-1" )}>
                                    {this.props.arraySize[3] === 4 ? "Stok ada" : "Stok kosong"}
                                </p>
                            </button>
                            <button
                                onClick={this.props.arraySize[4] === 5 ? () => this.props.onClickStock(5) : e => e.preventDefault()}
                                className={
                                    "h-12 w-full flex-column text-center rounded-md mt-4 focus:outline-none " +
                                    (this.props.arraySize[4] === 5 ? "shadow-md bg-white" : "bg-gray-lighter-5")
                                }
                            >
                                <p className="text-black-darker-1 text-sm font-medium">5</p>
                                <p className={"font-medium " + (this.props.arraySize[4] === 5 ? "text-black-darker" : "text-red-darker-1" )}>
                                    {this.props.arraySize[4] === 5 ? "Stok ada" : "Stok kosong"}
                                </p>
                            </button>
                            {this.props.setAmount ? (
                                <div className="flex flex-nowrap flex-auto mt-4">
                                    <div className="flex-auto block relative border-b-2 bg-gray-lighter-7 focus-within:border-red-darker-1 rounded-t-lg border-gray-lighter-9">
                                        <input
                                            type="number" 
                                            id="amount"     
                                            name="amount" 
                                            placeholder=" "
                                            className="block w-full text-xs hp-one:text-sm lg:text-base bg-transparent appearance-none pt-6 pl-5 pr-3 focus:outline-none" 
                                        />
                                        <label for="amount" className="text-xs hp-one:text-sm lg:text-base absolute top-4 text-gray-lighter-3 transition duration-300 ease-in-out font-medium">Atau ketikan jumlah (cth.5)</label>
                                    </div>
                                    <div className="flex flex-grow-0 flex-shrink-0">
                                        <button
                                            className="shadow-md focus:outline-none bg-white hover:bg-gray-lighter-5 active:bg-gray-lighter-3 text-black-darker h-12 ml-2 px-5 text-center rounded-md transition duration-300 ease-in-out"
                                        >
                                            Oke
                                        </button>
                                    </div>
                                </div>  
                            ) : (
                                <>
                                    <button
                                        onClick={this.props.arraySize[2] === 3 ? this.props.showSetAmount : e => e.preventDefault()}
                                        className={
                                            "h-12 w-full flex-column text-center rounded-md mt-4 focus:outline-none " + 
                                            (this.props.arraySize[2] === 3 ? "shadow-md bg-white" : "bg-gray-lighter-5")
                                        }
                                    >
                                        <p className="text-black-darker font-medium">+Lebih</p>
                                    </button>
                                    <button
                                        onClick={() => this.setState({ showAmountNotif:true })}
                                        className="h-12 w-full bg-gray-lighter flex-column text-center rounded-md bg-white mt-4 focus:outline-none"
                                    >
                                        <p className="text-red-darker-1 font-medium">Beri tahu saya jika produk tersedia kembali</p>
                                    </button>
                                </> 
                            )}
                        </div>
                    </div>
                </div>
            </Modal>
            <Modal
                styles={{modal: { maxWidth:'100%',borderRadius : '10px' }}}
                open={this.state.showAmountNotif}
                onClose={this.onCloseAmountNotif}
                closeIcon={<ArrowLeft className="bg-gray-lighter-4 hover:bg-gray-lighter-5 transition duration-300 ease-in-out rounded-full stroke-current stroke-0 focus:outline-none text-black transform scale-100 h-6 w-6 hp-one:h-8 hp-one:w-8 p-1 flex justify-center" />}
                center
            >
                <div className="bg-gray-lighter w-full md:w-480 items-center">
                    <div className="h-9 md:w-480" />
                    <div className="flex justify-center md:hidden">
                        <div className="bg-gray-lighter-6 mx-auto h-1 w-20 absolute top-1 rounded-sm" />
                    </div>
                    <p className="text-base hp-one:text-lg lg:text-xl text-black-darker font-semibold px-6 py-4">Beri tahu saya jika produk tersedia kembali</p>
                    <div className="pb-5 px-4 text-xs hp-one:text-sm lg:text-base">
                        <p className="mb-4">
                            Masukkan email kamu dan jumlah produk yang kamu inginkan,
                            kami akan mengirimkan email ketika produk tersedia kembali.
                        </p>
                        <div className="flex flex-col">
                            <div className="flex flex-auto">
                                <div className="block relative bg-gray-lighter-7 border-b-2 w-full border-gray-lighter-9 focus-within:border-red-darker-1 rounded-t-lg">
                                    <input
                                        type="text" 
                                        id="amount" 
                                        name="" 
                                        placeholder=" " 
                                        className="block w-full appearance-none focus:outline-none pt-4 pl-3 bg-transparent" 
                                    />
                                    <label for="amount" class="absolute top-3 transition duration-300 ease-in-out text-gray-lighter-3 font-medium">Jumlah</label>
                                </div>
                            </div>
                            <div className="flex flex-grow px-3 mb-2 h-3">
                                <p className="text-xs text-orange-lighter-1">
                                </p>
                            </div>
                        </div>
                        <div className="flex flex-col">
                            <div className="flex flex-auto">
                                <div className="block relative bg-gray-lighter-7 border-b-2 w-full border-gray-lighter-9 focus-within:border-red-darker-1 rounded-t-lg">
                                    <input
                                        type="text" 
                                        id="email" 
                                        name="" 
                                        placeholder=" " 
                                        className="block w-full appearance-none focus:outline-none pt-4 pl-3 bg-transparent" 
                                    />
                                    <label for="email" class="absolute top-3 transition duration-300 ease-in-out text-gray-lighter-3 font-medium">Email</label>
                                </div>
                            </div>
                            <div className="flex flex-grow px-3 mb-2 h-3">
                                <p className="text-xs text-orange-lighter-1">
                                </p>
                            </div>
                        </div>
                        <button
                            className="w-full bg-red-darker-1 text-white py-2 rounded-md hover:opacity-90 active:bg-opacity-50 active:bg-red-darker-1 focus:outline-none transition duration-300 ease-in-out"
                        >
                            Konfirmasi
                        </button>
                    </div>
                </div>
            </Modal>
            </>
        );
    }
}