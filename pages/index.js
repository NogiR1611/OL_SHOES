import React from 'react';
import Footer from './../components/footer/footer.js';
import SearchModal from './../components/modals/searchModal.js';
import FilterModal from './../components/modals/filterModal.js';
import ProductCards from './../components/cards/ProductCards.js';
import CategoryCard from './../components/cards/CategoryCard.js';
import {Router} from '../routes.js';
import Image from 'next/image';
import dynamic from 'next/dynamic';


export const Header = dynamic(() => {
    return import('./../components/header/header.js')
},{ ssr:false });

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
            openFilter : false,
            namePage : 'product',
            showSidebar : false,
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
                <div className={"flex flex-col w-full min-h-screen mb-auto"}>  
                    <Header
                        clickMenu={() => this.setState({ showSidebar:!this.state.showSidebar })}
                        changeIcon={this.state.showSidebar}
                        searchOnClick={this.onOpenSearch} 
                        displayFilter={true}
                        filterOnClick={this.onOpenFilter}
                        profileOnClick={this.pushProfileRoute}
                    />
                    <SearchModal onOpenSearch={this.state.openSearch} onCloseSearch={this.onCloseSearch} />
                    <FilterModal onOpenFilter={this.state.openFilter} onCloseFilter={this.onCloseFilter} />
                    <Sidebar
                        showSidebar={this.state.showSidebar}
                        removeIcon={this.state.showSidebar}
                        searchOnClick={this.onOpenSearch} 
                        removeSidebar={() => this.setState({ showSidebar:!this.state.showSidebar })}
                    />
                    <div
                        className={"flex flex-col flex-auto bg-gray-lighter min-h-screen w-full lg:ml-auto lg:w-3/4 relative p-4 transition duration-100 linear " + (this.state.showSidebar ? "opacity-30" : "")}
                    >
                        <div className="bg-gray-400 my-2 w-full h-full">
                            <p className="text-center">Cover Here</p>
                        </div>
                        <div className="w-11/12 mx-auto">
                            <div className="flex flex-wrap w-full">
                                <CategoryCard 
                                    sourceImg='/images/products/vans_category.jpg'
                                    name='vans'
                                />
                                <CategoryCard 
                                    sourceImg='/images/products/vans_category.jpg'
                                    name='vans'
                                />
                            </div>
                            <div className="flex flex-wrap w-full p-1">
                                <div className="text-center w-full bg-gray-400">
                                    Profile Video Here
                                </div>
                            </div>
                            <div className="flex flex-wrap w-full p-1">
                                <div className="text-center w-full bg-gray-400">
                                    Promotion Slider
                                </div>
                            </div>
                            <div className="flex flex-wrap w-full p-1">
                                <div className="text-center w-full">
                                    <p className="text-gray-700">Product Recommended</p>
                                </div>
                                <ProductCards />
                                <ProductCards />
                                <ProductCards />
                            </div>
                            <div className="flex flex-wrap w-full p-1">
                                <div className="text-center w-full bg-gray-400">
                                    Buyer Slider
                                </div>
                            </div>
                            <div className="flex flex-wrap w-full p-1">
                                <div className="w-full border-b-2 border-gray-200">
                                    <button
                                        onClick={() => this.setState({ namePage: 'category' }) }
                                        className={"w-1/3 md:px-6 py-2 text-sm text-gray-600 transition duration-300 ease-in-out hover:bg-red-100 focus:outline-none " + (this.state.namePage === "category" ? "border-b-2 border-red-600 text-red-600" : "")}
                                    >
                                        Kategori
                                    </button>
                                    <button
                                        onClick={() => this.setState({ namePage: 'product' }) }
                                        className={"w-1/3 md:px-6 py-2 text-sm text-gray-600 transition duration-300 ease-in-out hover:bg-red-100 focus:outline-none " + (this.state.namePage === "product" ? "border-b-2 border-red-600 text-red-600" : "")}
                                    >
                                        Semua Produk
                                    </button>
                                    <button
                                        onClick={() => this.setState({ namePage: 'discount' }) }
                                        className={"w-1/3 md:px-6 py-2 text-sm text-gray-600 transition duration-300 ease-in-out hover:bg-red-100 focus:outline-none " + (this.state.namePage === "discount" ? "border-b-2 border-red-600 text-red-600" : "")}
                                    >
                                        Diskon
                                    </button>
                                </div>
                                <div className="w-full">
                                    {this.state.namePage === 'category' ? 
                                        (
                                            <div className="flex flex-wrap">
                                                <CategoryCard 
                                                    sourceImg='/images/products/vans_category.jpg'
                                                    name='vans'
                                                />
                                                <CategoryCard 
                                                    sourceImg='/images/products/vans_category.jpg'
                                                    name='vans'
                                                />
                                                <CategoryCard 
                                                    sourceImg='/images/products/vans_category.jpg'
                                                    name='vans'
                                                />
                                            </div>
                                        ) : ''
                                    }
                                    {this.state.namePage === 'product' ? 
                                        (
                                            <div className="flex flex-wrap w-full px-auto">
                                                <ProductCards />
                                                <ProductCards />
                                                <ProductCards />
                                                <ProductCards />
                                            </div>
                                        ) : ''
                                    }
                                    {this.state.namePage === 'discount' ? 
                                        (
                                        <div className="flex flex-wrap w-full px-auto">
                                            <ProductCards />
                                            <ProductCards />
                                            <ProductCards />
                                            <ProductCards />
                                            <ProductCards />
                                        </div>
                                        ) : ''
                                    }
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