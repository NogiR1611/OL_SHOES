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
                        <div className="inline-block relative border-b-2 xl:w-11/12 focus-within:border-red-500 pl-2">
                            <input
                                type="text" 
                                id="username" 
                                name="username" 
                                placeholder=" " 
                                value={this.state.search}
                                className="block w-full appearance-none focus:outline-none bg-gray-100" 
                                onChange={(e) => this.setState({ search: e.target.value }) }
                            />
                            <label for="username" class="absolute top-0 transition duration-300 ease-in-out">Cari Produk</label>
                        </div>
                        {search !== '' ?
                            <button className="focus:outline-none pl-1" onClick={() => this.setState({ search: '' }) }>
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