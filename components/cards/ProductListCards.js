import React from 'react';
import ProductCards from './ProductCards.js';

export default class ProductListCards extends React.Component{
    render(){
        return (
            <div className="flex flex-wrap w-full px-auto">
                <ProductCards />
                <ProductCards />
                <ProductCards />
                <ProductCards />
            </div>
        );
    }
}