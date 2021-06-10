import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Truck from './../../assets/images/icons/truck.svg';

export default class ProductCards extends React.Component{
    render(){
        return (
            <>
                <Link href=''>
                    <div className={(this.props.fullWidth ? "w-full" : "w-1/2 md:w-1/3") + " relative bg-white inline-block flex flex-none self-start flex-col h-100 border-2 rounded-lg shadow-lg object-contain cursor-pointer transition duration-300 ease-in-out hover:bg-gray-100"}>   
                        <div className="w-full relative">    
                            <Image  
                                src="/images/products/converse.jpg"
                                layout="responsive"
                                width={300}
                                height={300}
                                className="relative"
                            />
                            <div className="absolute bottom-0 left-0">
                                <p className="inline-block bg-black text-gray-100 px-1 m-0 md:m-2 text-xs">Ada Stok</p>
                                <Truck
                                    className="inline-block bg-red-darker-1 my-2 px-1 stroke-current stroke-0 text-white transform scale-75 md:scale-100 "
                                    width={20}
                                    height={20}
                                    fill="white" 
                                />
                            </div>
                        </div>
                        <div className="my-2 px-1 hp-one:px-4">
                            <span className="block text-black-darker font-semibold whitespace-nowrap overflow-ellipsis overflow-hidden uppercase text-xs hp-one:text-sm md:text-base">Converse 70S HI Herbal Black Egret</span>
                            <span className="block text-gray-lighter-1 line-through text-xs hp-one:text-sm md:text-base">Rp 320.000</span>
                            <span className="block text-red-darker-1 text-xs hp-one:text-sm md:text-base">Rp 300.000</span>
                            <p className="bg-red-darker-1 text-white px-1 inline-block text-xs">Diskon</p>
                            <hr className="border-b-1 border-gray-300 my-2" />
                            <span className="block text-black-darker font-semibold text-center text-xs hp-one:text-sm md:text-base">Lihat Produk</span>
                        </div>
                    </div>
                </Link>
            </>
        );
    }
}