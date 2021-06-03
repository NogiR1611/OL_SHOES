import React from 'react';
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import Search from './../../assets/images/icons/search.svg';
import ArrowLeft from './../../assets/images/icons/arrowLeft.svg';
import Clear from './../../assets/images/icons/clear.svg';

export default class SearchModal extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            openModal : false,
            search : ''
        }
    }

    render(){
        const {search} = this.state;
        return (
            <Modal
                styles={{modal: { maxWidth: '100%',borderRadius : '10px' }}}
                open={this.props.onOpenSearch}
                onClose={this.props.onCloseSearch}
                closeIcon={<ArrowLeft className="bg-gray-lighter-4 hover:bg-gray-lighter-4 rounded-full stroke-current stroke-0 focus:outline-none text-black transform scale-100 h-8 w-8 p-1 flex justify-center duration-300" />}
                center 
            >
                <div className="bg-gray-lighter md:w-560 px-6 pt-2 mx-auto items-center">                
                    <div className="flex justify-center md:hidden">
                        <div className="bg-gray-lighter-6 mx-auto h-1 w-20 absolute top-1 rounded-sm" />
                    </div>
                    <div className="h-24 pt-16">
                        <div className="flex flex-nowrap flex-auto bg-gray-lighter-7 focus:bg-gray-400 w-full rounded-t-lg">
                            <div className="flex-auto inline-block relative border-b-2 focus-within:border-red-darker-1 px-3">
                                <input
                                    type="text" 
                                    id="username" 
                                    name="username" 
                                    placeholder=" " 
                                    value={this.state.search}
                                    className="block w-full bg-transparent appearance-none pt-4 pl-2 focus:outline-none" 
                                    onChange={(e) => this.setState({ search: e.target.value }) }
                                />
                                <label for="username" class="absolute top-3 text-gray-lighter-3 text-sm lg:text-base transition duration-300 ease-in-out">Cari Produk</label>
                            </div>
                            <div className="flex flex-none px-1">
                                {search !== '' ?
                                    <button className="self-center focus:outline-none" onClick={() => this.setState({ search: '' }) }>
                                        <Clear className="inline-block " width={24} height={24} />
                                    </button> : 
                                    <Search className="self-center inline-block" width={24} height={24} />
                                }
                            </div>
                        </div>
                    </div>
                    <div className="px-6 pb-5 w-full overflow-y-auto">
                        <div className="pt-3 relative">
                            <p className="text-black-darker pt-4 pb-3">0 Hasil ditemukan</p>
                            <p>Gunakan nama yang berbeda atau lebih spesifik</p>
                        </div>
                    </div>
                </div>
            </Modal>
        );
    }
}