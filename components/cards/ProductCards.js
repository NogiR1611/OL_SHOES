import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Package from './../../assets/images/icons/packing.svg';

export default class ProductCards extends React.Component{
    render(){
        return (
            <>
                <Link href="">
                    <div className="relative inline-block flex flex-col w-1/2 md:w-1/3 my-2 h-2/4 border-2 rounded-lg shadow-lg object-contain cursor-pointer transition duration-300 ease-in-out hover:bg-gray-100">   
                        <div className="w-full relative">    
                            <Image  
                                src="/images/products/converse.jpg"
                                layout="responsive"
                                width={300}
                                height={300}
                                className="relative"
                            />
                            <div className="absolute bottom-0 left-0">
                                <p className="inline-block bg-black text-gray-100 px-1 m-0 md:m-2 text-xs md:text-base">Stok Ada</p>
                                <Package
                                    className="inline-block bg-red-600 my-2 px-1 rounded-md stroke-current stroke-1 text-white transform scale-75 md:scale-100 "
                                    width={25}
                                    height={25}
                                    fill="white" 
                                />
                            </div>
                        </div>
                        <div className="my-2 px-4">
                            <span className="block text-gray-700 font-semibold whitespace-nowrap overflow-ellipsis overflow-hidden uppercase text-sm md:text-base">Converse 70S HI Herbal Black Egret</span>
                            <span className="block text-red-500 text-sm md:text-base">Rp 300.000</span>
                            <span className="block text-gray-300 text-sm md:text-base"><s>Rp 320.000</s></span>
                            <p className="bg-red-800 text-gray-200 px-1 inline-block text-xs md:text-base">Diskon</p>
                            <hr className="border-b-1 border-gray-300 my-2" />
                            <span className="block text-gray-500 font-semibold text-center text-sm md:text-base">Lihat Produk</span>
                        </div>
                    </div>
                </Link>
            </>
        );
    }
}