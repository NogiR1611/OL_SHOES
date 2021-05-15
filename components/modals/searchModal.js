import React from 'react';
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import Search from './../../assets/images/icons/search.svg';
import Exit from './../../assets/images/icons/exit.svg';
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
                styles={{modal: { width : '30%',borderRadius : '10px' }}}
                open={this.props.onOpenSearch}
                onClose={this.props.onCloseSearch}
                closeIcon={<Exit width={28} height={28} className="hover:bg-gray-200 rounded-full h-8 w-8 flex justify-center duration-300" />}
                center
            >
                <div className="w-full max-w-md py-8 px-1 items-center">                
                    <div className="bg-gray-100 focus:bg-gray-400 w-full py-1 rounded-lg">
                        <label className="text-gray-600 px-2 focus:text-red-600" htmlFor="product">Cari Produk</label>
                        <input
                            className="inline-block transition duration-400 ease-in-out bg-gray-100 border-b-2 border-gray-400 xl:w-11/12 md:3/12 px-2 outline-none focus:border-red-600"
                            type="text"
                            name="product"
                            id="product" 
                            value={search}
                            onChange={ (e) => this.setState({ search : e.target.value }) }
                        />
                        {search !== '' ?
                            <button className="focus:outline-none pl-1" onClick={() => this.setState({ search : '' }) }>
                                <Clear className="inline-block " width={25} height={25} />
                            </button> : 
                            <Search className="inline-block pl-1" width={28} height={28} />
                        }
                    </div>
                </div>
            </Modal>
        );
    }
}