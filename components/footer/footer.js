import React from 'react';

export default class Footer extends React.Component{
    render(){
        return (
            <>
                <div className="bg-gray-lighter flex-shrink-0">
                    <div className="text-center font-bold p-5">
                        <p className="text-xs md:text-base">Copyright&copy;2020 - Design by OL Shoes</p>
                    </div>
                </div>
            </>
        );
    }
}