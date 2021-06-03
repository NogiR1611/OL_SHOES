import React from 'react';
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';

export default class CategoryModal extends React.Component{
    render(){
        return (
            <Modal
                styles={{modal: { maxWidth : '100%',borderRadius : '5%',padding: '0' }}} 
                open={this.props.openCategoryModal}
                onClose={this.props.onCloseCategoryModal}
                showCloseIcon={false}
                center
            >
                <div className="bg-gray-lighter w-full md:w-480 px-6 pb-5 mx-auto items-center">
                    <div className="flex justify-center md:hidden">
                        <div className="bg-gray-lighter-6 mx-auto h-1 w-20 absolute top-1 rounded-sm" />
                    </div>
                    <div className="pt-8">
                        {this.props.renderType}
                    </div>
                    <p className="text-black-darker text-sm mb-1 mx-3 mt-6 font-medium">Kategori</p>
                    {this.props.renderCategory}
                </div>
            </Modal>
        );
    }
}