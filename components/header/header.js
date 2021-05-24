import React from 'react';
import Link from 'next/link';
import Download from './../../assets/images/icons/download.svg';
import List from './../../assets/images/icons/list.svg';
import Cross from './../../assets/images/icons/exit.svg';
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
                    <div className="flex justify-between items-center bg-gray-100 text-gray-800 p-2">
                        <div className="inline-block">
                            <button
                                className="focus:outline-none"
                                onClick={this.props.clickMenu}
                            >
                                {this.props.changeIcon ?
                                    "" :
                                    (<List className="inline-block lg:hidden" width={24} height={24} />)
                                }
                            </button>
                            <Link href="/home">
                                <span className="mx-2 cursor-pointer text-xl align-middle font-medium">OL SHOES</span>
                            </Link>
                        </div> 
                        <div className="inline-block">
                            {this.props.displayDownload ?
                                (
                                    <button
                                        className="transition duration-300 ease-in-out focus:outline-none hover:bg-gray-300 rounded-full h-16 w-16"
                                        onClick={this.props.shareOnClick}
                                    >
                                        <Download className="inline-block stroke-current stroke-2 black" width={24} height={24} />
                                    </button>
                                ) : null
                            }
                            {this.props.displayShare ? 
                                (
                                    <button
                                        className="transition duration-300 ease-in-out focus:outline-none hover:bg-gray-300 rounded-full h-16 w-16"
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
                                        className="transition duration-300 ease-in-out focus:outline-none hover:bg-gray-300 rounded-full h-16 w-16"
                                        onClick={this.props.filterOnClick}
                                    >
                                        <Filter className="inline-block stroke-current stroke-0 black" width={24} height={24} />
                                    </button> 
                                ) : null
                            }
                            <button
                                className="transition duration-300 ease-in-out focus:outline-none hover:bg-gray-300 rounded-full h-16 w-16"
                                onClick={this.props.searchOnClick}
                            >
                                <Search className="inline-block stroke-current stroke-0 black" width={24} height={24} />
                            </button>
                            <button
                                className="transition duration-300 ease-in-out focus:outline-none hover:bg-gray-300 rounded-full h-16 w-16"
                                onClick={this.props.profileOnClick}
                            >
                                <Profile className="inline-block stroke-current stroke-0 black" width={24} height={24} />
                            </button>
                        </div>
                    </div>
                </header>
            </>
        );
    }
}