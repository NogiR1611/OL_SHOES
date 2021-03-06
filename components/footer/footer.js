import React from 'react';

export default class Footer extends React.Component{
    render(){
        return (
            <>
                <div className="bg-gray-lighter flex-shrink-0 text-black-darker">
                    <div className="text-center font-bold p-1 hp-one:p-5">
                        <p className="text-super-tiny hp-one:text-xs md:text-base">Copyright&copy;2021 - Powered by Kreapick Teams</p>
                    </div>
                </div>
            </>
        );
    }
}