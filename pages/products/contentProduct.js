import React from 'react';
import Footer from './../../components/footer/footer.js';
import SearchModal from './../../components/modals/searchModal.js';
import CarouselCard from './../../components/cards/CarouselCard.js';
import DescriptionProductCard from './../../components/cards/DescriptionProductCard.js';
import CarouselProductCard from './../../components/cards/CarouselProductCard.js';
import ProductCards from './../../components/cards/ProductCards.js';
import {Router} from './../../routes.js';
import dynamic from 'next/dynamic';

export const Header = dynamic(() => {
    return import('./../../components/header/header.js')
},{ ssr:false });

export const Sidebar = dynamic(() => {
    return import('./../../components/sidebar/sidebar.js')
},{ ssr:false });

export default class ContentProduct extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            openSearch : false,
            openFilter : false,
            showSidebar : false,
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
            <>
                <Header 
                    displayShare={true}
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
                <div className="bg-gray-lighter flex flex-auto relative min-h-screen w-full lg:ml-auto lg:w-3/4">
                    <div className="w-11/12 mx-auto">
                        <div className="flex flex-wrap flex-auto">
                            <div className="flex-auto w-1/2">
                                <CarouselCard />
                            </div>
                            <div className="flex-auto w-1/2">
                                <DescriptionProductCard 
                                    titleProduct="VANS SK8 HI BLACK WHITE"
                                    realPrice="Rp320,000"
                                    discountPrice="Rp290,000"
                                />
                            </div>
                        </div>
                        <div className="my-4">
                            <p className="text-black-darker font-medium">Kamu mungkin juga suka</p>
                            <CarouselProductCard />
                        </div>
                        <div className="my-4">
                            <p className="text-black-darker font-medium">Produk lain dari toko ini</p>
                            <CarouselProductCard />
                        </div>
                    </div>
                </div>
                <Footer />
            </>
        );
    }
}