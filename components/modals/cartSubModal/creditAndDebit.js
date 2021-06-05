import React from 'react';
import numeral from 'numeral';
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import ArrowLeft from './../../../assets/images/icons/arrowLeft.svg';
import Locked from './../../../assets/images/icons/locked.svg';

export default class CreditAndDebit extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            nameCustomer: '',
            numberCard: null,
            dateCard: null,
            code: null,
            statusNameCustomer: false,
            statusNumberCard: false,
            statusDateCard: false,
            statusCode: false
        }
    }

    validationInfo = () => {
        const {nameCustomer,numberCard,dateCard,code} = this.state;
        if(nameCustomer === ''){
            this.setState({statusNameCustomer:true })
        }
        else{
            this.setState({statusNameCustomer:false })
        }
        if(numberCard === null){
            this.setState({statusNumberCard:true })
        }
        else{
            this.setState({statusNumberCard:false })
        }
        if(dateCard === null){
            this.setState({statusDateCard:true })
        }
        else{
            this.setState({statusDateCard:false })
        }
        if(code === null){
            this.setState({statusCode:true })
        }
        else{
            this.setState({statusCode:false })
        }
    }

    render(){
        return (
            <Modal
                styles={{modal: { maxWidth : '100%',borderRadius : '5%',padding: '0' }}} 
                open={this.props.creditAndDebit}
                onClose={this.props.onCloseCreditAndDebit}
                closeIcon={<ArrowLeft className="bg-gray-lighter-4 hover:bg-gray-lighter-5 transition duration-300 ease-in-out rounded-full stroke-current stroke-0 focus:outline-none text-black transform scale-100 h-8 w-8 p-1 flex justify-center" />}
                center
            >
                <div className="bg-gray-lighter w-full md:w-480 items-center">
                    <div className="md:h-9 md:w-480" />
                    <p className="w-full text-xl font-medium text-black-darker px-6 py-4">Kartu Kredit/Debit</p>
                    <div className="overflow-y-auto max-h-96 px-6">
                        <div className="">
                            <div className="flex justify-between mt-2 text-black-darker">
                                <span className="float-left text-sm">Total Harga:</span>
                                <span className="float-right text-sm">Rp. {numeral(754000).format('0,0')}</span>
                            </div>
                            <div className="flex justify-between w-full mt-2 text-black-darker">
                                <span className="float-left text-sm">Biaya Kartu Kredit/Debit:</span>
                                <span className="float-right text-sm">Rp. {numeral(2500).format('0,0')}</span>
                            </div>
                            <div className="flex justify-between w-full mt-2 text-black-darker">
                                <span className="float-left text-sm">Total Pembayaran:</span>
                                <span className="float-right font-bold">Rp. {numeral(756500).format('0,0')}</span>
                            </div>
                        </div>
                    </div>
                    <div className="px-6 mt-3">
                        <div className="flex flex-col">
                            <div className="flex flex-auto">
                                <div className="block relative bg-gray-lighter-7 border-b-2 w-full border-gray-lighter-9 focus-within:border-red-darker-1 rounded-t-lg">
                                    <input
                                        type="text" 
                                        id="name" 
                                        name="name" 
                                        value={this.state.nameCustomer}
                                        onChange={e => this.setState({ nameCustomer:e.target.value })}
                                        placeholder=" " 
                                        className="block w-full appearance-none focus:outline-none pt-4 pl-3 bg-transparent" 
                                    />
                                    <label for="name" class="absolute top-3 transition duration-300 ease-in-out text-gray-lighter-3 font-medium">Nama di Kartu</label>
                                </div>
                            </div>
                            <div className="flex flex-grow">
                                <p className="text-xs text-orange-lighter-1">
                                    {this.state.statusNameCustomer ?
                                        "Mohon isi nama kartu anda" : null
                                    }
                                </p>
                            </div>
                        </div>
                        <div className="flex flex-col">
                            <div className="flex flex-auto">
                                <div className="flex flex-nowrap flex-auto bg-gray-lighter-7 border-b-2 border-gray-lighter-9 focus:bg-gray-400 w-full pr-3 rounded-t-lg mt-4">
                                    <div className="flex-auto inline-block relative border-b-2 focus-within:border-red-darker-1">
                                        <input
                                            type="text" 
                                            id="number" 
                                            name="number" 
                                            value={this.state.numberCard}
                                            onChange={e => this.setState({ numberCard:e.target.value })}
                                            placeholder=" " 
                                            className="block w-full bg-transparent appearance-none pt-4 pl-3 focus:outline-none" 
                                        />
                                        <label for="number" class="absolute top-3 text-gray-lighter-3 transition duration-300 ease-in-out font-medium">Nomor Kartu</label>
                                    </div>
                                    <div className="flex flex-none">
                                        <Locked className="self-center inline-block" width={24} height={24} />
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-grow">
                                <p className="text-xs text-orange-lighter-1">
                                    {this.state.statusNumberCard ?
                                        "Mohon isi nomor kartu anda" : null
                                    }
                                </p>
                            </div>
                        </div>
                        <img 
                            src="https://d1ggq58xg1ha0k.cloudfront.net/_nuxt/img/credit_cards.ef76bc8.svg"
                            className="my-4 w-1/3"
                        />
                        <div className="flex flex-col">
                            <div className="flex flex-auto">
                                <div className="block relative bg-gray-lighter-7 border-b-2 w-full border-gray-lighter-9 focus-within:border-red-darker-1 rounded-t-lg">
                                    <input
                                        type="text" 
                                        id="date" 
                                        name="date" 
                                        value={this.state.dateCard}
                                        onChange={e => this.setState({ dateCard:e.target.value })}
                                        placeholder=" " 
                                        className="block w-full appearance-none focus:outline-none pt-4 pl-3 bg-transparent" 
                                    />
                                    <label for="date" class="absolute top-3 transition duration-300 ease-in-out text-gray-lighter-3 font-medium">Berlaku hingga</label>
                                </div>
                            </div>
                            <div className="flex flex-grow">
                                <p className="text-xs text-orange-lighter-1">
                                    {this.state.statusDateCard ?
                                        "Mohon isi tanggal" : null
                                    }
                                </p>
                            </div>
                        </div>
                        <div className="flex flex-col">
                            <div className="flex flex-auto">
                                <div className="flex flex-wrap flex-auto mt-4">
                                    <div className="flex-auto block relative border-b-2 bg-gray-lighter-7 focus-within:border-red-darker-1 rounded-t-lg border-gray-lighter-9">
                                        <input
                                            type="text" 
                                            id="cvv" 
                                            name="cvv" 
                                            value={this.state.code}
                                            onChange={e => this.setState({ code:e.target.value })}
                                            placeholder=" " 
                                            className="block w-full bg-transparent appearance-none pt-4 pl-3 focus:outline-none" 
                                        />
                                        <label for="cvv" class="absolute top-4 text-gray-lighter-3 transition duration-300 ease-in-out font-medium">Kode CVV</label>
                                    </div>
                                    <div className="flex flex-grow-0 ml-3 pr-3">
                                        <img 
                                            src="https://d1ggq58xg1ha0k.cloudfront.net/_nuxt/img/credit_card_cvv.9385122.svg"
                                            className="inline-block"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-grow">
                                <p className="text-xs text-orange-lighter-1">
                                    {this.state.statusCode ?
                                        "Mohon isi kode CVV" : null
                                    }
                                </p>
                            </div>
                        </div>
                        <p className="text-xs mt-4 mx-1">
                            Info pembayaran kamu tersimpan dengan aman.
                            Kami bekerja sama dengan NICEPAY untuk memastikan info kamu terlindungi.Kami tidak dapat mengakses info kartumu.
                        </p>
                        <button
                            onClick={this.state.nameCustomer !== '' && this.state.numberCard !== null && this.state.dateCard !== null && this.state.code !== null ?
                                this.props.moveModal : this.validationInfo
                            }
                            className="w-full bg-red-darker-1 text-white py-2 my-2 rounded-md hover:opacity-90 active:bg-opacity-50 active:bg-red-darker-1 focus:outline-none transition duration-300 ease-in-out"
                        >
                            Lanjutkan
                        </button>
                    </div>
                </div>
            </Modal>
        );
    }
}