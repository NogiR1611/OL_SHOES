import React from 'react';
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
                    <div className="flex justify-center md:hidden">
                        <div className="bg-gray-lighter-6 mx-auto h-1 w-20 absolute top-1 rounded-sm" />
                    </div>
                    <p className="text-base hp-one:text-xl text-black-darker font-semibold px-2 hp-one:px-6 pt-4 pb-2">Simpan Faktur?</p>
                    <div className="px-2 hp-one:px-6 pb-4">
                        <p className="text-sm hp-one:text-base text-black-darker">Faktur akan disimpan sebagai gambar di ponsel atau komputer?</p>
                    </div>
                        <div className="flex flex justify-end mt-2 py-2 px-4">
                            <button
                                onClick={this.props.onCloseVerificationModal}
                                className="h-12 bg-transparent text-red-darker-1 w-20 text-xs hp-one:text-sm focus:outline-none rounded-md"
                            >
                                Tutup
                            </button>
                            <button
                                onClick={this.props.download}
                                className="flex h-12 bg-red-darker-1 px-2 ml-2 text-white text-xs hp-one:text-sm focus:outline-none rounded-md hover:opacity-90 active:bg-opacity-50 active:bg-red-darker-1 transition duration-300 linear"
                            >
                                <Download className="self-center fill-current text-white w-4 h-4 hp-one:w-6 hp-one:h-6 mr-1 hp-one:mr-2" />
                                <p className="flex-auto self-center">Download Faktur</p>
                            </button> 
                        </div>
                </div>
            </Modal>
        );
    }
}
