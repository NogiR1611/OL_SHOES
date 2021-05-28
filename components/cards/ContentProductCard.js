import React from 'react';
import CarouselCard from './CarouselCard.js';
import DescriptionProductCard from './DescriptionProductCard.js';

export default class ContentProductCard extends React.Component{
    constructor(props){
        super(props)
        this.state = {

        }
    }

    render(){
        return (
            <div className="flex flex-wrap flex-auto w-full">
                <div className="flex-auto w-1/2">
                    <CarouselCard />
                </div>
                <div className="flex-auto w-1/2">
                    <DescriptionProductCard />
                </div>
            </div>
        );
    }
}