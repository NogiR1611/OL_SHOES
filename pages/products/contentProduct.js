import React from 'react';
import Header from './../../components/header/header.js';
import Footer from './../../components/footer/footer.js';
import SearchModal from './../../components/modals/searchModal.js';
import ContentProductCard from './../../components/cards/ContentProductCard.js';
import {Router} from './../../routes.js';

export default class ContentProduct extends React.Component{
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
                />
                <SearchModal onOpenSearch={this.state.openSearch} onCloseSearch={this.onCloseSearch} />
                <ContentProductCard />
                <Footer />
            </>
        );
    }
}