import React from 'react';
import Header from './../components/header/header.js';
import Footer from './../components/footer/footer.js';
import SearchModal from './../components/modals/searchModal.js';
import FilterModal from './../components/modals/filterModal.js';
import {Router} from '../routes.js';
import Image from 'next/image';
import dynamic from 'next/dynamic'

export const Sidebar = dynamic(() => {
    return import('./../components/sidebar/sidebar.js')
},{ ssr:false });

/*
export const getStaticProps = async () => {
    //example of API data
    const apiURL = 'https://jsonplaceholder.typicode.com/users';
    const response = await fetch(apiURL);
    const result = await response.json();
    return { 
        props : { categories : result } 
    }
}
*/

class Index extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            data : [],
            openSearch : false,
            openFilter : false
        }
    }

    componentDidMount(){
        this.setState({ data : this.props.categories });
    }

    onOpenSearch = () => {
        this.setState({ openSearch : true });
    }

    onOpenFilter = () => {
        this.setState({ openFilter : true });
    }

    onCloseSearch = () => {
        this.setState({ openSearch : false });
    }

    onCloseFilter = () => {
        this.setState({ openFilter : false });
    }

    pushProfileRoute = () => {
        Router.pushRoute('/users');
    }

    render(){
        return (
            <>
                <div className="flex flex-col w-full min-h-screen mb-auto">  
                    <Header
                        searchOnClick={this.onOpenSearch} 
                        filterOnClick={this.onOpenFilter}
                        profileOnClick={this.pushProfileRoute}
                    />
                    <SearchModal onOpenSearch={this.state.openSearch} onCloseSearch={this.onCloseSearch} />
                    <FilterModal onOpenFilter={this.state.openFilter} onCloseFilter={this.onCloseFilter} />
                    <Sidebar searchOnClick={this.onOpenSearch} />
                    <div className="flex flex-col min-h-screen relative ml-72">
                        <div className="bg-gray-400 my-2 w-full h-full">
                            <p className="text-center">Cover Here</p>
                        </div>
                        <div className="w-11/12 mx-auto">
                            <div className="flex flex-wrap w-full">
                                <div className="w-6/12 h-6/12 p-1">
                                    <Image 
                                        src='/images/products/vans_category.jpg'
                                        layout="responsive"
                                        width={450}
                                        height={450}
                                        className="relative"
                                    />
                                </div>
                                <div className="w-6/12 h-6/12 p-1">
                                    <Image 
                                        src='/images/products/vans_category.jpg'
                                        layout="responsive"
                                        width={450}
                                        height={450}
                                        className="relative"
                                    />
                                </div>
                        </div>
                        </div>
                    </div>
                    <Footer />
                </div>
            </>
        );
    }
}

export default Index;