import React from 'react';
import Footer from './../../components/footer/footer.js';
import Sorting from './../../assets/images/icons/sort.svg';
import SearchModal from './../../components/modals/searchModal.js';
import FilterModal from './../../components/modals/filterModal.js';
import CategoryModal from './../../components/modals/categoryModal.js';
import ProductCards from './../../components/cards/ProductCards.js';
import {Router} from './../../routes.js';
import dynamic from 'next/dynamic';
import FilterCard from './../../components/cards/FilterCard.js';

export const Sidebar = dynamic(() => {
    return import('./../../components/sidebar/sidebar.js')
},{ ssr:false });

export const Header = dynamic(() => {
    return import('./../../components/header/header.js')
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
        nameCategory: ['vans','saba','converse','ventela','local brand','kaos gabut','puma','kids'],
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
        Router.pushRoute('/orders');
    }

    render(){
        return (
            <>
                <div className="bg-gray-lighter flex flex-col w-full min-h-screen max-h-full">  
                    <Header
                        clickMenu={() => this.setState({ showSidebar:!this.state.showSidebar })}
                        changeIcon={this.state.showSidebar}
                        searchOnClick={this.onOpenSearch}  
                        filterOnClick={this.onOpenFilter}
                        displayProfile={true}
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
                    <div className="flex-auto bg-gray-lighter lg:ml-auto xl:w-8/10 lg:w-3/4">
                        <div 
                            style={{
                                backgroundImage: `url(/images/products/converse_category.jpg)`,
                                width: "100%",
                                height: "240px",
                                backgroundRepeat: "no-repeat",
                            }} 
                            className="w-full flex-grow bg-cover bg-center relative p-1 bg-black bg-opacity-50"
                        >
                            <div className="absolute inset-0 bg-gray-900 bg-opacity-30"></div>
                            <div className="absolute uppercase text-white text-lg md:text-3xl lg:text-4xl xl:text-5xl font-medium bottom-5 left-5">
                                VANS
                            </div>
                        </div>
                        <div className="xl:hidden py-4 w-full flex flex-wrap">
                            <button
                                onClick={() => this.setState({ openCategory:true })}
                                className="flex-1 block bg-gray-200 mx-2 rounded-md text-gray-900 py-4 font-semibold focus:outline-none hover:bg-gray-300 active:bg-gray-400"
                            >
                                Urutan
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
                                                    "w-full flex flex-grow flex-shrink-0 justify-start h-8 leading-none text-left text-black-darker px-3 font-medium font-avenirProBlack text-sm rounded-lg focus:outline-none hover:bg-gray-300 active:bg-gray-400 transition duration-200 ease-in-out " +
                                                    (this.state.clickType === element ? "bg-gray-300" : "")
                                                }
                                            >
                                                <span className="self-center">{element}</span>
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
                                                    "w-full flex flex-grow flex-shrink-0 justify-start h-8 leading-none text-left text-black-darker px-3 font-medium font-avenirProBook text-sm uppercase rounded-lg focus:outline-none hover:bg-gray-300 active:bg-gray-400 transition duration-200 ease-in-out " +
                                                    (this.state.clickCategory === element ? "bg-gray-300" : "")
                                                }
                                            >
                                                <span className="self-center">{element}</span>
                                            </button>
                                        )
                                    })
                                }
                            />
                        </div>
                        <div className="bg-gray-lighter flex flex-nowrap">
                            <FilterCard searchOnClick={this.onOpenSearch} />
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