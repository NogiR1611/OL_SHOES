import React from 'react';
import Link from 'next/link';
import List from './../../assets/images/icons/list.svg';
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
                <header>
                    <div className="flex justify-between items-center bg-gray-100 text-gray-800 p-2">
                        <div className="inline-block">
                            <List className="inline-block lg:hidden" width={24} height={24} />
                            <Link href="/home">
                                <span className="mx-2 cursor-pointer text-xl align-middle font-medium">OL SHOES</span>
                            </Link>
                        </div> 
                        <div className="inline-block">
                            <button
                                className="transition duration-300 ease-in-out focus:outline-none hover:bg-gray-300 rounded-full h-16 w-16"
                                onClick={this.props.filterOnClick}
                            >
                                <Filter className="inline-block stroke-current stroke-0 black" width={24} height={24} />
                            </button>
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