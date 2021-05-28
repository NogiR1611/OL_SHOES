import React from 'react';
import Link from 'next/link';
import Search from './../../assets/images/icons/search.svg';
import Clear from './../../assets/images/icons/clear.svg';
import ArrowDown from './../../assets/images/icons/arrowDown.svg';

export default class Sidebar extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            clickButton : false,
        }
    }

    render(){
        return (
            <>
                <nav className={"bg-gray-lighter top-16 w-2/3 md:w-1/4 min-h-screen fixed z-40 transition duration-500 linear transform lg:translate-x-0 " + (this.props.showSidebar ? "translate-x-0" : "-translate-x-full")}>
                    <div className="py-2">
                        <div className="justify-between">
                            <button
                                className="transition duration-300 ease-in-out focus:outline-none active:outline-none hover:bg-gray-300 rounded-full h-12 w-12"
                                onClick={this.props.searchOnClick}
                            >
                                <Search
                                    className="inline-block stroke-current stroke-0 black"
                                    width={24} 
                                    height={24}
                                /> 
                            </button>
                            {this.props.removeIcon ? 
                            (
                                <button
                                    className="transition duration-300 ease-in-out focus:outline-none active:outline-none hover:bg-gray-300 rounded-full h-16 w-16"
                                    onClick={this.props.removeSidebar}
                                >    
                                    <Clear
                                        className="inline-block stroke-current stroke-2 black"
                                        width={20} 
                                        height={20}
                                    />
                                </button>
                            ) : null
                            }
                        </div>
                        <ul className="">
                            <Link href="/home">
                                <li 
                                    className={
                                        "text-red-darker-1 px-4 py-3 uppercase cursor-pointer hover:bg-red-darker-1 hover:bg-opacity-10 transition duration-200 ease-in-out font-normal " + 
                                        (window.location.href.indexOf("/home") !==-1 ? "bg-red-darker-1 bg-opacity-10" : "bg-gray-lighter")
                                    }
                                >
                                    Beranda
                                </li>
                            </Link>
                            <Link href="/about">
                                <li className={
                                        "text-red-darker-1 px-4 py-3 uppercase cursor-pointer hover:bg-red-darker-1 hover:bg-opacity-10 transition duration-200 ease-in-out font-normal " +
                                        (window.location.href.indexOf("/about") !==-1 ? "bg-red-darker-1 bg-opacity-10" : "bg-gray-lighter")
                                    }    
                                >
                                    Tentang OL Shoes
                                </li>
                            </Link>
                            <Link href="#">
                                <li className={
                                    "px-4 py-3 uppercase cursor-pointer hover:bg-red-darker-1 hover:bg-opacity-10 transition duration-200 ease-in-out font-normal " 
                                    + (this.state.clickButton ? "bg-red-darker-1 bg-opacity-10" : "text-red-darker-1 ")
                                    }
                                >
                                        <button className="w-full uppercase text-left focus:outline-none" onClick={() => this.setState({ clickButton : !this.state.clickButton })}>
                                            Panduan Ukuran
                                            <ArrowDown 
                                                className={"float-right mx-2 transform scale-75 md:scale-100 transition duration-500 ease-in-out " + (this.state.clickButton ? "transform -rotate-180" : '')}
                                                width={24}
                                                height={24}
                                            />
                                        </button>
                                </li>
                            </Link>
                            <Link href="">
                                <li className="text-red-darker-1 px-4 py-3 uppercase cursor-pointer hover:bg-red-darker-1 hover:bg-opacity-10 transition duration-200 ease-in-out font-normal ">
                                    Pria
                                </li>
                            </Link>
                            <Link href="">
                                <li className="text-red-darker-1 px-4 py-3 uppercase cursor-pointer hover:bg-red-darker-1 hover:bg-opacity-10 transition duration-200 ease-in-out font-normal ">
                                    Wanita
                                </li>
                            </Link>
                            <Link href="">
                                <li className="text-red-darker-1 px-4 py-3 uppercase cursor-pointer hover:bg-red-darker-1 hover:bg-opacity-10 transition duration-200 ease-in-out font-normal ">
                                    Anak
                                </li>
                            </Link>
                            <Link href="">
                                <li className="text-red-darker-1 px-4 py-3 uppercase cursor-pointer hover:bg-red-darker-1 hover:bg-opacity-10 transition duration-200 ease-in-out font-normal ">
                                    Discount Up To 150K
                                </li>
                            </Link>
                        </ul>
                    </div>
                </nav>
            </>
        );
    }
}