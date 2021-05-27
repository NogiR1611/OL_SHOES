import React from 'react';
import Link from 'next/link';
import Download from './../../assets/images/icons/download.svg';
import List from './../../assets/images/icons/list.svg';
import ArrowLeft from './../../assets/images/icons/ArrowLeft.svg';
import Share from './../../assets/images/icons/share.svg';
import Filter from './../../assets/images/icons/filter.svg';
import Search from './../../assets/images/icons/search.svg';
import Profile from './../../assets/images/icons/userprofile.svg';

export default class Header extends React.Component{
    constructor(props){
        super(props)
        this.state = {}
    }

    render(){
        return (
            <>
                <header className="w-full sticky top-0 z-50"> 
                    <div className="flex flex-nowrap flex-auto justify-between items-center bg-gray-lighter text-gray-800 px-2 py-8 md:p-2">
                        <div className="flex justify-start inline-block items-center mr-1">
                            <button
                                className={"lg:hidden focus:outline-none transition duration-300 ease-in-out bg-gray-lighter-4 hover:bg-gray-300 rounded-full h-10 w-10 md:h-12 md:w-12"}
                                onClick={this.props.clickMenu}
                            >
                                <ArrowLeft className={"lg:hidden " + (window.location.href.indexOf("/orders") !== -1 ? "inline-block" : "hidden")} width={24} height={24} />
                                <List className={"lg:hidden " + (window.location.href.indexOf("/orders") !== -1 ? "hidden" : "inline-block")} width={24} height={24} />
                            </button>
                            <Link href="/home">
                                <span className="mx-2 cursor-pointer leading-4 align-middle font-medium">OL Shoes</span>
                            </Link>
                        </div> 
                        <div className="flex items-center justify-end flex-nowrap inline-block">
                            {this.props.displayDownload ?
                                (
                                    <button
                                        className="transition duration-300 ease-in-out focus:outline-none hover:bg-gray-300 rounded-full h-10 w-10 md:h-12 md:w-12"
                                        onClick={this.props.shareOnClick}
                                    >
                                        <Download className="inline-block stroke-current stroke-0 black" width={24} height={24} />
                                    </button>
                                ) : null
                            }
                            {this.props.displayShare ? 
                                (
                                    <button
                                        className="transition duration-300 ease-in-out focus:outline-none hover:bg-gray-300 rounded-full h-10 w-10 md:h-12 md:w-12"
                                        onClick={this.props.shareOnClick}
                                    >
                                        <Share className="inline-block stroke-current stroke-2 black" width={24} height={24} />
                                    </button> 
                                ) 
                                : null
                            }
                            {this.props.displayFilter ? 
                                (
                                    <button
                                        className="transition duration-300 ease-in-out focus:outline-none hover:bg-gray-300 rounded-full h-10 w-10 md:h-12 md:w-12"
                                        onClick={this.props.filterOnClick}
                                    >
                                        <Filter className="inline-block stroke-current stroke-0 black" width={24} height={24} />
                                    </button> 
                                ) : null
                            }
                            <button
                                className="transition duration-300 ease-in-out focus:outline-none hover:bg-gray-300 rounded-full h-10 w-10 md:h-12 md:w-12"
                                onClick={this.props.searchOnClick}
                            >
                                <Search className="inline-block stroke-current stroke-0 black" width={24} height={24} />
                            </button>
                            {this.props.displayProfile ?
                                (
                                    <button
                                        className={
                                            "transition duration-300 ease-in-out focus:outline-none hover:bg-gray-300 rounded-full h-10 w-10 md:h-12 md:w-12 " + 
                                            (window.location.href.indexOf("/orders") !== -1 ? "bg-gray-300" : "bg-gray-lighter")
                                        }
                                        onClick={this.props.profileOnClick}
                                    >
                                        <Profile className="inline-block stroke-current stroke-0 black" width={24} height={24} />
                                    </button>
                                ) : null
                            }
                        </div>
                    </div>
                </header>
            </>
        );
    }
}