import React from 'react';
import Footer from './../components/footer/footer.js';
import CategoryCard from './../components/cards/CategoryCard.js';
import SearchModal from './../components/modals/searchModal.js';
import dynamic from 'next/dynamic';
import {Router} from '../routes.js';

export const Sidebar = dynamic(() => {
    return import('./../components/sidebar/sidebar.js')
},{ ssr:false });

export const Header = dynamic(() => {
    return import('./../components/header/header.js')
},{ ssr:false });

export default class Categories extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            openSearch: false,
            showSidebar: false,
            tag: ["#adidas","#nike","#vans","#converse","#allstar","#airforce","#allstar","#authen","#authentic","#chuka",,"#converse60","#era","#macbeth","#revenge","#slip"],
        }
    }

    onOpenSearch = () => {
        this.setState({ openSearch : true });
    }

    onCloseSearch = () => {
        this.setState({ openSearch : false });
    }

    pushProfileRoute = () => {
        Router.pushRoute('/orders');
    }

    render(){
        return (
            <>
                <Sidebar
                    showSidebar={this.state.showSidebar}
                    removeIcon={this.state.showSidebar}
                    searchOnClick={this.onOpenSearch} 
                    removeSidebar={() => this.setState({ showSidebar:!this.state.showSidebar })}
                />
                <div>
                    {this.state.showSidebar ? (
                        <div className="bg-black bg-opacity-50 h-full w-full fixed z-500 top-0 bottom-0 left-0 right-0" onClick={() => this.setState({ showSidebar:!this.state.showSidebar })} />
                    ) : null}
                    <div className="bg-gray-lighter flex flex-col w-full min-h-screen max-h-full">
                        <Header
                            clickMenu={() => this.setState({ showSidebar:!this.state.showSidebar })}
                            changeIcon={this.state.showSidebar}
                            searchOnClick={this.onOpenSearch}  
                            profileOnClick={this.pushProfileRoute}
                            displayProfile={true}
                        />
                        <SearchModal onOpenSearch={this.state.openSearch} onCloseSearch={this.onCloseSearch} />
                        <Sidebar
                            showSidebar={this.state.showSidebar}
                            removeIcon={this.state.showSidebar}
                            searchOnClick={this.onOpenSearch} 
                            removeSidebar={() => this.setState({ showSidebar:!this.state.showSidebar })}
                        />
                        <div className="flex flex-wrap relative bg-gray-lighter p-1 w-full lg:ml-auto lg:w-3/4 xl:w-8/10">
                            <div className="flex-column relative w-11/12 mx-auto">
                                <div className="flex flex-wrap">
                                    <div className="w-1/3">
                                        <CategoryCard 
                                            sourceImg='/images/products/vans_category.jpg'
                                            name='vans'
                                        />
                                    </div>
                                    <div className="w-1/3">
                                        <CategoryCard 
                                            sourceImg='/images/products/vans_category.jpg'
                                            name='vans'
                                        />
                                    </div>
                                    <div className="w-1/3">
                                        <CategoryCard 
                                            sourceImg='/images/products/vans_category.jpg'
                                            name='vans'
                                        />
                                    </div>
                                    <div className="w-1/3">
                                        <CategoryCard 
                                            sourceImg='/images/products/vans_category.jpg'
                                            name='vans'
                                        />
                                    </div>
                                    <div className="w-1/3">
                                        <CategoryCard 
                                            sourceImg='/images/products/vans_category.jpg'
                                            name='vans'
                                        />
                                    </div>
                                    <div className="w-1/3">
                                        <CategoryCard 
                                            sourceImg='/images/products/vans_category.jpg'
                                            name='vans'
                                        />
                                    </div>
                                    <div className="w-1/3">
                                        <CategoryCard 
                                            sourceImg='/images/products/vans_category.jpg'
                                            name='vans'
                                        />
                                    </div>
                                    <div className="w-1/3">
                                        <CategoryCard 
                                            sourceImg='/images/products/vans_category.jpg'
                                            name='vans'
                                        />
                                    </div>
                                </div>
                                <div className="mx-auto mt-6 px-2 w-9/12">
                                    <div className="flex flex-wrap flex-auto">
                                        {this.state.tag.map((element,index) => {
                                            return (
                                                <div 
                                                    key={index}
                                                    className="flex-shrink-0 h-16 py-2 px-1"
                                                >
                                                    <a href="#" className="text-black-darker px-2 py-4">
                                                        {element}
                                                    </a>
                                                </div>
                                            )
                                        })}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <Footer />
                    </div>
                </div>
            </>  
        );
    }
}