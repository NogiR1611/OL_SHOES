import React from 'react';
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import Exit from './../../assets/images/icons/exit.svg';

export default class CategoryModal extends React.Component{
    render(){
        return (
            <Modal
                styles={{modal: { maxWidth : '100%',borderRadius : '5%',padding: '0' }}} 
                open={this.props.openCategoryModal}
                onClose={this.props.onCloseCategoryModal}
                closeIcon={<Exit width={28} height={28} className="hover:bg-gray-200 rounded-full h-8 w-8 flex justify-center transition duration-300 ease-in-out" />}
                center
            >
                <div className="w-full max-w-2xl py-6 px-4 items-center overflow-y-auto h-96">
                    <div className="py-4">
                        {this.props.renderType}
                    </div>
                    <div className="py-4">
                        <p className="text-gray-800 text-lg font-semibold px-2 py-2">Kategori</p>
                        {this.props.renderCategory}
                    </div>
                </div>
            </Modal>
        );
    }
}