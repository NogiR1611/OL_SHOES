import React from 'react';
import Link from 'next/link';
import Search from './../../assets/images/icons/search.svg';

export default class Sidebar extends React.Component{
    render(){
        return (
            <>
                <nav className="bg-gray-100 absolute top-20 w-1/5 min-h-screen">
                    <div className="py-2">
                        <button
                            className="transition duration-300 ease-in-out focus:outline-none active:outline-none hover:bg-gray-300 rounded-full h-16 w-16"
                            onClick={this.props.searchOnClick}
                        >
                            <Search
                                className="inline-block stroke-current stroke-0 black"
                                width={24} 
                                height={24}
                            />
                        </button>
                        <ul className="px-4">
                            <li 
                                className={
                                    "text-red-500 text-2xl p-3 cursor-pointer hover:bg-red-300 transition duration-200 ease-in-out " + 
                                    (window.location.href.indexOf("/") !==-1 ? "bg-red-300" : "bg-gray-100")
                                }
                            >
                                <Link href="/">
                                    Beranda
                                </Link>
                            </li>
                            <li className={
                                    "text-red-500 text-2xl p-3 cursor-pointer hover:bg-red-300 transition duration-200 ease-in-out " +
                                    (window.location.href.indexOf("/about") !==-1 ? "bg-red-300" : "bg-gray-100")
                                }    
                            >
                                <Link href="/about">
                                    Tentang Kami
                                </Link>
                            </li>
                            <li className="text-red-500 text-2xl p-3 cursor-pointer hover:bg-red-300 transition duration-200 ease-in-out">
                                <Link href="">
                                    Pria
                                </Link>
                            </li>
                            <li className="text-red-500 text-2xl p-3 cursor-pointer hover:bg-red-300 transition duration-200 ease-in-out">
                                <Link href="">
                                    Wanita
                                </Link>
                            </li>
                            <li className="text-red-500 text-2xl p-3 cursor-pointer hover:bg-red-300 transition duration-200 ease-in-out">
                                <Link href="">
                                    Anak
                                </Link>
                            </li>
                        </ul>
                    </div>
                </nav>
            </>
        );
    }
}