import React from 'react';
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import Download from './../../assets/images/icons/download.svg';

export default class VerificationModal extends React.Component{
    render(){
        return (
            <Modal
                styles={{modal: { maxWidth : '100%',borderRadius : '8px' }}} 
                open={this.props.openVerificationModal}
                onClose={this.props.onCloseVerificationModal}
                showCloseIcon={false}
                center
            >
                <div className="bg-gray-lighter w-full md:w-480 items-center">
                    <p className="text-xl text-black-darker font-semibold px-6 pt-4 pb-2">Simpan Faktur?</p>
                    <div className="px-6 pb-4">
                        <p className="text-black-darker">Faktur akan disimpan sebagai gambar di ponsel atau komputer?</p>
                    </div>
                        <div className="flex flex justify-end mt-2 py-2 px-4">
                            <button
                                onClick={this.props.onCloseVerificationModal}
                                className="h-12 bg-transparent text-red-darker-1 w-20 text-sm focus:outline-none rounded-md"
                            >
                                Tutup
                            </button>
                            <button
                                className="flex h-12 bg-red-darker-1 px-2 ml-2 text-white text-sm focus:outline-none rounded-md hover:opacity-90 active:bg-opacity-50 active:bg-red-darker-1 transition duration-300 linear"
                            >
                                <Download width={24} height={24} className="self-center fill-current text-white h-6 w-6 mr-2" />
                                <p className="flex-auto self-center">Download Faktur</p>
                            </button> 
                        </div>
                </div>
            </Modal>
        );
    }
}
