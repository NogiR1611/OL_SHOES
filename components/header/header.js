import React from 'react';
import Link from 'next/link';
import Download from './../../assets/images/icons/download.svg';
import List from './../../assets/images/icons/list.svg';
import ArrowLeft from './../../assets/images/icons/arrowLeft.svg';
import Share from './../../assets/images/icons/share.svg';
import Filter from './../../assets/images/icons/filter.svg';
import Search from './../../assets/images/icons/search.svg';
import Profile from './../../assets/images/icons/userprofile.svg';
import Logo from './../../assets/images/icons/logo-bg-black.svg';

export default class Header extends React.Component{
    constructor(props){
        super(props)
        this.state = {}
    }

    render(){
        return (
            <>
                <header className="w-full sticky top-0 z-90"> 
                    <div className="flex flex-nowrap flex-auto justify-between items-center bg-gray-lighter text-gray-800 px-2 py-8 md:p-2">
                        <div className="flex justify-start inline-block items-center mr-1">
                            <button
                                className={"lg:hidden focus:outline-none transition duration-300 ease-in-out bg-gray-lighter-4 hover:bg-gray-lighter-5 rounded-full h-8 w-8 hp-one:h-10 hp-one:w-10 md:h-12 md:w-12"}
                                onClick={this.props.clickMenu}
                            >
                                {/*<ArrowLeft className={"lg:hidden " + (window.location.href.indexOf("/orders") !== -1 ? "inline-block" : "hidden")} width={24} height={24} /> */}
                                <List className="inline-block lg:hidden h-4 w-4 hp-one:h-6 hp-one:w-6 flex-shrink-0"/>
                            </button>
                            <Link href="/">
                                <div className="flex flex-nowrap flex-auto flex-shrink-0">
                                    <Logo className="h-8 w-8 hp-one:h-10 hp-one:w-10 rounded-full" />
                                    <span className="mx-0 hp-one:mx-2 self-center cursor-pointer text-sm hp-one:text-base leading-4 align-middle font-medium">OL Shoes</span>
                                </div>
                            </Link>
                        </div> 
                        <div className="flex items-center justify-end flex-nowrap inline-block">
                            {this.props.displayDownload ?
                                (
                                    <button
                                        className="transition duration-300 ease-in-out focus:outline-none hover:bg-gray-300 rounded-full h-6 w-6 hp-one:h-10 hp-one:w-10 md:h-12 md:w-12"
                                        onClick={this.props.downloadOnClick}
                                    >
                                        <Download className="inline-block stroke-current stroke-0 black h-4 w-4 hp-one:h-6 hp-one:w-6" />
                                    </button>
                                ) : null
                            }
                            {this.props.displayShare ? 
                                (
                                    <button
                                        className="transition duration-300 ease-in-out focus:outline-none hover:bg-gray-300 rounded-full h-6 w-6 hp-one:h-10 hp-one:w-10 md:h-12 md:w-12"
                                        onClick={this.props.shareOnClick}
                                    >
                                        <Share className="inline-block stroke-current stroke-2 black h-4 w-4 hp-one:h-6 hp-one:w-6" />
                                    </button> 
                                ) 
                                : null
                            }
                            {this.props.displayFilter ? 
                                (
                                    <button
                                        className="transition duration-300 ease-in-out focus:outline-none hover:bg-gray-300 rounded-full h-6 w-6 hp-one:h-10 hp-one:w-10 md:h-12 md:w-12"
                                        onClick={this.props.filterOnClick}
                                    >
                                        <Filter className="inline-block stroke-current stroke-0 black h-4 w-4 hp-one:h-6 hp-one:w-6" />
                                    </button> 
                                ) : null
                            }
                            <button
                                className="transition duration-300 ease-in-out focus:outline-none hover:bg-gray-300 rounded-full h-6 w-6 hp-one:h-10 hp-one:w-10 md:h-12 md:w-12"
                                onClick={this.props.searchOnClick}
                            >
                                <Search className="inline-block stroke-current stroke-0 black h-4 w-4 hp-one:h-6 hp-one:w-6" />
                            </button>
                            {this.props.displayProfile ?
                                (
                                    <button
                                        className={
                                            "transition duration-300 ease-in-out focus:outline-none hover:bg-gray-300 rounded-full h-6 w-6 hp-one:h-10 hp-one:w-10 md:h-12 md:w-12 " + 
                                            (window.location.href.indexOf("/orders") !== -1 ? "bg-gray-300" : "bg-gray-lighter")
                                        }
                                        onClick={this.props.profileOnClick}
                                    >
                                        <Profile className="inline-block stroke-current stroke-0 black h-4 w-4 hp-one:h-6 hp-one:w-6" />
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