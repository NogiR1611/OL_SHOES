import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Package from './../../assets/images/icons/packing.svg';

export default class ProductListCards extends React.Component{
    render(){
        return (
            <>
                <Link href="">
                    <div className="relative inline-block flex flex-col w-1/5 pb-4 my-2 mx-2 border-2 rounded-lg shadow-lg h-1/4 object-contain cursor-pointer duration-300 hover:bg-gray-100">   
                        <div className="w-full relative">    
                            <Image  
                                src="/images/products/converse.jpg"
                                layout="responsive"
                                width={300}
                                height={300}
                                className="relative"
                            />
                            <div className="absolute bottom-0 left-0">
                                <p className="inline-block bg-black text-gray-100 px-1 m-2">Stok Ada</p>
                                <Package
                                    className="inline-block bg-red-600 my-2 px-1 rounded-md stroke-current stroke-1 text-white"
                                    width={25}
                                    height={25}
                                    fill="white" 
                                />
                            </div>
                        </div>
                        <div className="h-1/4 my-2 px-4">
                            <span className="block text-gray-700 font-semibold whitespace-nowrap overflow-ellipsis overflow-hidden uppercase">Converse 70S HI Herbal Black Egret</span>
                            <span className="block text-red-500">Rp 300.000</span>
                            <span className="block text-gray-300"><s>Rp 320.000</s></span>
                            <p className="bg-red-800 text-gray-200 px-1 inline-block">Diskon</p>
                            <hr className="border-b-1 border-gray-300 my-2" />
                            <span className="block text-gray-500 font-semibold text-center">Lihat Produk</span>
                        </div>
                    </div>
                </Link>
            </>
        );
    }
}