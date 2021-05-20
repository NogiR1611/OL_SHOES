import React from 'react';
import Header from './../components/header/header.js';
import Footer from './../components/footer/footer.js';
import SearchModal from './../components/modals/searchModal.js';
import FilterModal from './../components/modals/filterModal.js';
import ProductCards from './../components/cards/ProductCards.js';
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
            openFilter : false,
            namePage : 'product'
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
                        displayFilter={true}
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
                                    Product Recommended
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
                            <div className="flex flex-wrap w-full p-1">
                                <div className="text-center w-full bg-gray-400">
                                    Buyer Slider
                                </div>
                            </div>
                            <div className="flex flex-wrap w-full p-1">
                                <div className="w-full border-b-2 border-gray-200">
                                    <button
                                        onClick={() => this.setState({ namePage: 'category' }) }
                                        className={"w-1/3 px-16 py-2 text-gray-600 transition duration-300 ease-in-out hover:bg-red-100 focus:outline-none " + (this.state.namePage === "category" ? "border-b-2 border-red-600 text-red-600" : "")}
                                    >
                                        Kategori
                                    </button>
                                    <button
                                        onClick={() => this.setState({ namePage: 'product' }) }
                                        className={"w-1/3 px-16 py-2 text-gray-600 transition duration-300 ease-in-out hover:bg-red-100 focus:outline-none " + (this.state.namePage === "product" ? "border-b-2 border-red-600 text-red-600" : "")}
                                    >
                                        Semua Produk
                                    </button>
                                    <button
                                        onClick={() => this.setState({ namePage: 'discount' }) }
                                        className={"w-1/3 px-16 py-2 text-gray-600 transition duration-300 ease-in-out hover:bg-red-100 focus:outline-none " + (this.state.namePage === "discount" ? "border-b-2 border-red-600 text-red-600" : "")}
                                    >
                                        Diskon
                                    </button>
                                </div>
                                <div className="w-full">
                                    {this.state.namePage === 'category' ? 
                                        (
                                            <div className="flex flex-wrap">
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
                                        ) : ''}
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