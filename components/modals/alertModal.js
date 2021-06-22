import React from 'react';
import { Modal } from 'react-responsive-modal';

export default class AlertModal extends React.Component{
    render(){
        return (
            <Modal
                styles={{modal: { maxWidth : '100%',borderRadius : '4%',padding: '0' }}} 
                open={this.props.openAlert} 
                onClose={this.props.closeAlert}
                showCloseIcon={false}
                center
            >
                <div className="bg-gray-lighter w-full md:w-480 items-center">
                    <div className="px-6 pt-4 pb-2">
                        <p className="text-xl text-black-darker font-medium">Mohon Diingat</p>
                    </div>
                    <div className="px-6 pb-5">
                        <p className="text-black-darker">
                            {this.props.message}
                        </p>    
                    </div>
                    <div className="flex justify-end px-4 py-2">
                        <button
                            onClick={this.props.closeAlert}
                            className="bg-red-darker-1 hover:opacity-90 active:bg-opacity-50 active:bg-red-darker-1 transition duration-300 linear w-20 text-white text-center font-medium px-2 h-12 rounded-lg focus:outline-none"
                        >
                            Oke
                        </button>
                    </div>
                </div>
            </Modal>
        );
    }
}
