import React from 'react';
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import ArrowLeft from './../../assets/images/icons/arrowLeft.svg';

export default class SizeModal extends React.Component{ 
    render(){
        return (
            <Modal
                styles={{modal: { maxWidth:'100%',borderRadius : '10px' }}}
                open={this.props.onOpenSize}
                onClose={this.props.onCloseSize}
                closeIcon={<ArrowLeft className="bg-gray-lighter-4 hover:bg-gray-lighter-5 transition duration-300 ease-in-out rounded-full stroke-current stroke-0 focus:outline-none text-black transform scale-100 h-6 w-6 hp-one:h-8 hp-one:w-8 p-1 flex justify-center" />}
                center
            >
                <div className="bg-gray-lighter w-full md:w-480 items-center">
                    <div className="flex justify-center md:hidden">
                        <div className="bg-gray-lighter-6 mx-auto h-1 w-20 absolute top-1 rounded-sm" />
                    </div>
                    <div className="w-full pt-10">
                        <p className="text-base hp-one:text-lg lg:text-xl text-black-darker pt-4 px-6 font-medium">PILIH SIZE/UKURAN :</p>
                        <div className="px-6 pb-5">
                            {this.props.renderButton}
                        </div>
                    </div>
                </div>
            </Modal>
        );
    }
}