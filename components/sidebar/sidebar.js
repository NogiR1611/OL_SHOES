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
                            <li 
                                className={
                                    "text-red-darker-1 px-4 py-3 uppercase cursor-pointer hover:bg-red-300 transition duration-200 ease-in-out font-normal " + 
                                    (window.location.href.indexOf("/home") !==-1 ? "bg-red-300" : "bg-gray-lighter")
                                }
                            >
                                <Link href="/home">
                                    Beranda
                                </Link>
                            </li>
                            <li className={
                                    "text-red-darker-1 px-4 py-3 uppercase cursor-pointer hover:bg-red-300 transition duration-200 ease-in-out font-normal " +
                                    (window.location.href.indexOf("/about") !==-1 ? "bg-red-300" : "bg-gray-lighter")
                                }    
                            >
                                <Link href="/about">
                                    Tentang OL Shoes
                                </Link>
                            </li>
                            <li className={
                                "px-4 py-3 uppercase cursor-pointer hover:bg-red-300 transition duration-200 ease-in-out font-normal " 
                                + (this.state.clickButton ? "text-black-darker" : "text-red-darker-1 ")
                                }
                            >
                                <Link href="#">
                                    <button className="w-full uppercase text-left focus:outline-none" onClick={() => this.setState({ clickButton : !this.state.clickButton })}>
                                        Panduan Ukuran
                                        <ArrowDown 
                                            className={"float-right mx-2 transform scale-75 md:scale-100 transition duration-500 ease-in-out " + (this.state.clickButton ? "transform -rotate-180" : '')}
                                            width={24}
                                            height={24}
                                        />
                                    </button>
                                </Link>
                            </li>
                            <li className="text-red-darker-1 px-4 py-3 uppercase cursor-pointer hover:bg-red-300 transition duration-200 ease-in-out font-normal ">
                                <Link href="">
                                    Pria
                                </Link>
                            </li>
                            <li className="text-red-darker-1 px-4 py-3 uppercase cursor-pointer hover:bg-red-300 transition duration-200 ease-in-out font-normal ">
                                <Link href="">
                                    Wanita
                                </Link>
                            </li>
                            <li className="text-red-darker-1 px-4 py-3 uppercase cursor-pointer hover:bg-red-300 transition duration-200 ease-in-out font-normal ">
                                <Link href="">
                                    Anak
                                </Link>
                            </li>
                            <li className="text-red-darker-1 px-4 py-3 uppercase cursor-pointer hover:bg-red-300 transition duration-200 ease-in-out font-normal ">
                                <Link href="">
                                    Discount Up To 150K
                                </Link>
                            </li>
                        </ul>
                    </div>
                </nav>
            </>
        );
    }
}