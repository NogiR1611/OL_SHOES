import React from 'react';
import Link from 'next/link';
import Lists from './../../assets/images/icons/orders.svg';

export default class RejectedOrderCard extends React.Component{
    render(){
        return (
            <Link href={this.props.href}>
                <div className="mx-auto w-11/12 md:w-9/12 lg:w-1/2 h-56 hp-one:h-64 mt-4 mb-4 bg-white shadow rounded-md p-4 cursor-pointer">
                    <p className="text-xs hp-one:text-sm lg:text-base font-bold text-black-darker leading-5">No Order : {this.props.numberOrder}</p>
                    <p className="text-xs hp-one:text-sm text-gray-lighter-1 leading-4 mb-2">(Order berhasil {this.props.dateOrder})</p>
                    <div className="flex flex-nowrap flex-auto my-2 w-full mb-2">
                        <div className="flex-1 w-9/12 hp-one:w-11/12">
                            <p className="block uppercase text-xs hp-one:text-sm lg:text-base text-gray-lighter-2 tracking-tighter font-bold whitespace-nowrap overflow-ellipsis overflow-hidden">VANS OLD SKOOL BLACK WHITE</p>
                            <p className="uppercase text-xs hp-one:text-sm lg:text-base text-gray-lighter-1">{this.props.size}</p>
                        </div>
                        <div className="flex flex-none">
                            <img 
                                src={this.props.imageProduct}
                                className="self-center w-8 h-8 hp-one:w-12 hp-one:h-12"
                            />
                        </div>
                    </div>
                    <hr className="border-b-1 border-gray-300" />
                    <div className="w-full pt-6">
                    <p className="text-sm hp-one:text-base font-bold text-red-darker-1">Status : {this.props.statusOrder}</p>
                    </div>
                    <button
                        className="flex w-full p-2 mt-4 h-8 hp-one:h-12 bg-gray-lighter-4 hover:bg-gray-lighter-5 active:bg-gray-lighter-3 text-black-darker text-sm shadow-md font-semibold text-center focus:outline-none transition duration-300 linear rounded-md"
                    >
                        <Lists className="inline-block float-left stroke-current stroke-0 black self-center h-4 w-4 hp-one:h-6 hp-one:w-6" />
                        <span className="text-sm hp-one:text-base mx-auto self-center">Lihat Order</span>
                    </button>
                </div>
            </Link>
        );
    }
}