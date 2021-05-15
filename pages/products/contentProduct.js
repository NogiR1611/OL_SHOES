import React from 'react';
import Header from './../../components/header/header.js';
import Footer from './../../components/footer/footer.js';
import ContentProductCard from './../../components/cards/ContentProductCard.js';

export default class ContentProduct extends React.Component{
    render(){
        return (
            <>
                <Header />
                <ContentProductCard />
                <Footer />
            </>
        );
    }
}