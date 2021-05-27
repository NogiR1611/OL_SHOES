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
            tag: ["#adidas","#nike","#vans","#converse","#allstar","#allstar","#allstar","#allstar","#allstar","#allstar","#allstar","#allstar","#allstar","#allstar","#allstar"],
        }
    }

    onOpenSearch = () => {
        this.setState({ openSearch : true });
    }

    onCloseSearch = () => {
        this.setState({ openSearch : false });
    }

    pushProfileRoute = () => {
        Router.pushRoute('/users');
    }

    render(){
        return (
            <div className="flex flex-col w-full min-h-screen max-h-full">
                <Header
                    clickMenu={() => this.setState({ showSidebar:!this.state.showSidebar })}
                    changeIcon={this.state.showSidebar}
                    searchOnClick={this.onOpenSearch}  
                    profileOnClick={this.pushProfileRoute}
                />
                <SearchModal onOpenSearch={this.state.openSearch} onCloseSearch={this.onCloseSearch} />
                <Sidebar
                    showSidebar={this.state.showSidebar}
                    removeIcon={this.state.showSidebar}
                    searchOnClick={this.onOpenSearch} 
                    removeSidebar={() => this.setState({ showSidebar:!this.state.showSidebar })}
                />
                <div className="flex flex-wrap relative bg-gray-lighter p-1 w-full lg:ml-auto lg:w-3/4">
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
                        <div className="mx-auto mt-6 px-2 max-w-md w-full">
                            <div className="flex flex-wrap">
                                {this.state.tag.map((element,index) => {
                                    return (
                                        <div 
                                            key={index}
                                            className="flex-shrink-0"
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
        );
    }
}