import React from 'react';
import Header from './../components/header/header.js';
import Footer from './../components/footer/footer.js';
import SearchModal from './../components/modals/searchModal.js';
import FilterModal from './../components/modals/filterModal.js';
import ProductCards from './../components/cards/ProductCards.js';
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
        openFilter : false
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

    render(){
        return (
            <>
                <div className="flex flex-col w-full min-h-screen mb-auto">  
                    <Header
                        searchOnClick={this.onOpenSearch}  
                        filterOnClick={this.onOpenFilter}
                    />
                    <SearchModal onOpenSearch={this.state.openSearch} onCloseSearch={this.onCloseSearch} />
                    <FilterModal onOpenFilter={this.state.openFilter} onCloseFilter={this.onCloseFilter} />
                    <Sidebar searchOnClick={this.onOpenSearch} />
                    <div className="flex flex-nowrap flex-auto min-h-full ml-64 lg:w-3/4 xl:ml-72 2xl:ml-80">
                        <CategoryCard searchOnClick={this.onOpenSearch} />
                        <SearchModal onOpenSearch={this.openSearch} onCloseSearch={this.onCloseSearch} />
                        <div className="flex flex-wrap flex-auto px-2">
                            <ProductCards />
                            <ProductCards />
                            <ProductCards />
                            <ProductCards />
                        </div>
                        <div className="h-5"></div>
                    </div>
                    <Footer />
                </div>
            </>
        );
    }
}

export default Categories;