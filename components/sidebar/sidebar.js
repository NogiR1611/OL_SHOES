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
                <nav className={"bg-gray-lighter top-0 bottom-0 lg:top-16 w-7/10 md:w-4/10 lg:w-1/4 xl:w-1/5 min-h-screen fixed z-1000 lg:z-40 transition duration-500 linear transform lg:translate-x-0 " + (this.props.showSidebar ? "translate-x-0" : "-translate-x-full")}>
                    <div className="py-2">
                        <div className="flex justify-between">
                            <button
                                className="self-center transition duration-300 ease-in-out focus:outline-none rounded-full h-8 w-8 hp-one:h-10 hp-one:w-10 md:h-12 md:w-12 bg-gray-lighter-5 hover:bg-gray-lighter-5 active:bg-gray-lighter-3"
                                onClick={this.props.searchOnClick}
                            >
                                <Search
                                    className="inline-block stroke-current stroke-0 black h-4 w-4 hp-one:h-6 hp-one:w-6"
                                /> 
                            </button>
                            {this.props.removeIcon ? 
                            (
                                <button
                                    className="self-center transition duration-300 ease-in-out focus:outline-none rounded-full h-8 w-8 hp-one:h-10 hp-one:w-10 md:h-12 md:w-12 bg-gray-lighter-5 hover:bg-gray-lighter-5 active:bg-gray-lighter-3"
                                    onClick={this.props.removeSidebar}
                                >    
                                    <Clear
                                        className="inline-block stroke-current stroke-0 black h-4 w-4 hp-one:h-6 hp-one:w-6"
                                    />
                                </button>
                            ) : null
                            }
                        </div>
                        <ul className="py-2 text-xs md:text-base">
                            <Link href="/">
                                <li 
                                    className={
                                        "text-red-darker-1 px-1 hp-one:px-4 py-3 uppercase cursor-pointer hover:bg-red-darker-1 hover:bg-opacity-10 transition duration-200 ease-in-out font-normal " + 
                                        (window.location.href.indexOf("/") !==-1 ? "bg-red-darker-1 bg-opacity-10" : "bg-gray-lighter")
                                    }
                                >
                                    Beranda
                                </li>
                            </Link>
                            <Link href="/about">
                                <li className={
                                        "text-red-darker-1 px-1 hp-one:px-4 py-3 uppercase cursor-pointer hover:bg-red-darker-1 hover:bg-opacity-10 transition duration-200 ease-in-out font-normal " +
                                        (window.location.href.indexOf("/about") !==-1 ? "bg-red-darker-1 bg-opacity-10" : "bg-gray-lighter")
                                    }    
                                >
                                    Tentang OL Shoes
                                </li>
                            </Link>
                            <li className={
                                "px-1 hp-one:px-4 py-3 uppercase cursor-pointer hover:bg-red-darker-1 hover:bg-opacity-10 transition duration-200 ease-in-out font-normal " 
                                + (this.state.clickButton ? "bg-red-darker-1 bg-opacity-10 text-red-darker-1" : "text-black-darker ")
                                }
                            >
                                <button className="flex flex-nowrap flex-auto w-full uppercase text-left focus:outline-none" onClick={() => this.setState({ clickButton : !this.state.clickButton })}>
                                    <p className="flex-auto self-center">Panduan Ukuran</p>
                                    <ArrowDown 
                                        className={"self-center float-right mx-1 hp-one:mx-2 transform scale-75 md:scale-100 transition duration-500 ease-in-out " + (this.state.clickButton ? "transform -rotate-180" : '')}
                                        width={24}
                                        height={24}
                                    />
                                </button>
                            </li>
                            <Link href="">
                                <li className="text-red-darker-1 px-1 hp-one:px-4 py-3 uppercase cursor-pointer hover:bg-red-darker-1 hover:bg-opacity-10 transition duration-200 ease-in-out font-normal ">
                                    Pria
                                </li>
                            </Link>
                            <Link href="">
                                <li className="text-red-darker-1 px-1 hp-one:px-4 py-3 uppercase cursor-pointer hover:bg-red-darker-1 hover:bg-opacity-10 transition duration-200 ease-in-out font-normal ">
                                    Wanita
                                </li>
                            </Link>
                            <Link href="">
                                <li className="text-red-darker-1 px-1 hp-one:px-4 py-3 uppercase cursor-pointer hover:bg-red-darker-1 hover:bg-opacity-10 transition duration-200 ease-in-out font-normal ">
                                    Anak
                                </li>
                            </Link>
                            <Link href="">
                                <li className="text-red-darker-1 px-1 hp-one:px-4 py-3 uppercase cursor-pointer hover:bg-red-darker-1 hover:bg-opacity-10 transition duration-200 ease-in-out font-normal ">
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