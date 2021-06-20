import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default class CategoryCard extends React.Component{
    render(){
        return (
            <Link href='/categories/1'>
                <div className="flex-auto min-w-1/3 min-h-1/3 max-w-6/12 max-h-6/12 p-1 relative cursor-pointer">
                    <Image 
                        src={this.props.sourceImg}
                        layout="responsive"
                        width={450}
                        height={450}
                        className="relative filter brightness-75"
                    />
                    <div className="absolute uppercase text-gray-100 text-xl md:text-3xl lg:text-5xl font-bold transform -translate-x-1/2 transform -translate-y-1/2 top-1/2 left-1/2">
                        {this.props.name}
                    </div>
                </div>
            </Link>
        );
    }
}