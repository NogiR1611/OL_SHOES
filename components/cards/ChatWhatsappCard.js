import React from 'react';
import Logo from './../../assets/images/icons/logo-bg-black.svg';
import Send from './../../assets/images/icons/send.svg';

export default class ChatWhatsappCard extends React.Component{
    render(){
        return (
            <div className="w-8/10 md:w-450 z-1000 bottom-20 right-4 shadow-lg rounded-lg fixed h-3/4 bg-white-1">
                <div className="p-4">
                    <p className="text-black-darker font-semibold text-xl lg:text-lg lg:font-medium">Chat Whatsapp</p>
                </div>
                <div className="pb-4 px-4 overflow-y-auto text-sm lg:text-base flex flex-grow flex-shrink">
                    <div className="flex flex-nowrap flex-auto mr-10 mb-4">
                        <div className="mr-2">
                            <Logo className="h-6 w-6 rounded-full" width={24} height={24} />
                        </div>
                        <div className="flex flex-col">
                            <div className="bg-white p-2 w-full flex-auto rounded-md">
                                <p className="text-red-darker-1 font-bold">Apa yang bisa kami lakukan untukmu hari ini?</p>
                                <p>Silahkan bertanya kepada kami di Whatsapp</p>
                            </div>
                            <div className="mt-1 pl-3">
                                <p className="text-sm text-gray-lighter-1">01 Juni 2021 17:13</p>
                            </div>
                        </div>
                    </div>
                    <div className="bottom-4 left-4 right-4 absolute">
                        <div className="flex flex-nowrap flex-auto">
                            <div className="flex flex-auto block relative bg-gray-lighter-7 border-b-2 w-full border-gray-lighter-9 focus-within:border-red-darker-1 rounded-t-lg">
                                <input
                                    type="text" 
                                    id="messages" 
                                    name="messages" 
                                    placeholder="Pesan" 
                                    className="block w-full appearance-none focus:outline-none pt-4 pl-4 bg-transparent" 
                                />
                            </div>
                            <button
                                className="flex bg-green-whatsapp transition duration-300 ease-in-out hover:bg-opacity-70 hover:bg-green-whatsapp active:bg-opacity-40 active:bg-green-whatsapp rounded-lg ml-2 h-12 w-16 focus:outline-none"
                            >
                                <Send className="self-center h-6 w-6 mx-auto fill-current text-white" width={24} height={24} />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}