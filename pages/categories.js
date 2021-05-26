import React from 'react';
import Image from 'next/image';
import Header from './../components/header/header.js';
import Footer from './../components/footer/footer.js';
import Sorting from './../assets/images/icons/sort.svg';
import SearchModal from './../components/modals/searchModal.js';
import FilterModal from './../components/modals/filterModal.js';
import CategoryModal from './../components/modals/categoryModal.js';
import ProductCards from './../components/cards/ProductCards.js';
import {Router} from '../routes.js';
import dynamic from 'next/dynamic';
import CategoryCard from './../components/cards/CategoryCard.js';

export const Sidebar = dynamic(() => {
    return import('./../components/sidebar/sidebar.js')
},{ ssr:false });


class Categories extends React.Component{
    constructor(props){
        super(props)
        this.state = {
        openSearch : false,
        openFilter : false,
        openCategory : false,
        openSortir  : false,
        showSidebar : false,
        nameType: ['Semua Produk','Produk Unggulan','Diskon'],
        nameCategory: ['vans','saba','converse','ventela','local brand','kaos gabut','puma','kids','apparel ganteng','nike','adidas','new balance'],
        clickType: '',
        clickCategory: ''
        }
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

    onCloseCategory = () => {
        this.setState({ openCategory : false });
    }
    
    pushProfileRoute = () => {
        Router.pushRoute('/users');
    }

    render(){
        return (
            <>
                <div className="flex flex-col w-full min-h-screen max-h-full">  
                    <Header
                        clickMenu={() => this.setState({ showSidebar:!this.state.showSidebar })}
                        changeIcon={this.state.showSidebar}
                        searchOnClick={this.onOpenSearch}  
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
                    <div className="flex-auto lg:ml-auto lg:w-3/4">
                        <div 
                            style={{
                                backgroundImage: `url(/images/products/converse_category.jpg)`,
                                width: "100%",
                                height: "240px",
                                backgroundRepeat: "no-repeat",
                            }} 
                            className="w-full flex-grow bg-cover bg-center relative p-1"
                        >
                            <div className="absolute uppercase text-gray-300 text-xl md:text-3xl lg:text-5xl font-bold bottom-5 left-5">
                                VANS
                            </div>
                        </div>
                        <div className="xl:hidden py-4 w-full flex flex-wrap">
                            <button
                                onClick={() => this.setState({ openCategory:true })}
                                className="flex-1 block bg-gray-200 mx-2 rounded-md text-gray-900 py-4 font-semibold focus:outline-none hover:bg-gray-300 active:bg-gray-400"
                            >
                                Kategori
                            </button>
                            <button
                                onClick={() => this.setState({ openFilter:true })}
                                className="flex-1 block bg-gray-200 mx-2 rounded-md text-gray-900 py-4 font-semibold focus:outline-none hover:bg-gray-300 active:bg-gray-400"
                            >
                                <Sorting 
                                    className="float-left ml-4"
                                    width={20}
                                    height={20}
                                />
                                Urutan
                            </button>
                            <CategoryModal 
                                openCategoryModal={this.state.openCategory}
                                onCloseCategoryModal={this.onCloseCategory}
                                renderType={
                                    this.state.nameType.map((element,index) => {
                                        return (
                                            <button
                                                key={index}
                                                type="button"
                                                onClick={() => this.setState({ clickType:element })}
                                                className={
                                                    "w-full px-2 text-left text-gray-700 rounded-lg focus:outline-none hover:bg-gray-300 active:bg-gray-400 transition duration-200 ease-in-out py-1 " +
                                                    (this.state.clickType === element ? "bg-gray-300" : "")
                                                }
                                            >
                                                {element}
                                            </button>
                                        );
                                    })
                                }
                                renderCategory={
                                    this.state.nameCategory.map((element,index) => {
                                        return (
                                            <button
                                                key={index}
                                                onClick={() => this.setState({ clickCategory:element })}
                                                className={
                                                    "w-full text-left block py-1 px-2 text-gray-700 uppercase rounded-lg focus:outline-none hover:bg-gray-300 active:bg-gray-400 transition duration-200 ease-in-out " +
                                                    (this.state.clickCategory === element ? "bg-gray-300" : "")
                                                }
                                            >
                                                {element}
                                            </button>
                                        )
                                    })
                                }
                            />
                        </div>
                        <div className="flex flex-nowrap">
                            <CategoryCard searchOnClick={this.onOpenSearch} />
                            <SearchModal onOpenSearch={this.openSearch} onCloseSearch={this.onCloseSearch} />
                            <div className="flex 1 flex-wrap px-2 mb-16">
                                <ProductCards />
                                <ProductCards />
                                <ProductCards /> 
                                <ProductCards /> 
                                <ProductCards /> 
                                <ProductCards /> 
                                <ProductCards /> 
                            </div>
                        </div>
                    </div>
                    <Footer />
                </div>
            </>
        );
    }
}

export default Categories;