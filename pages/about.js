import React from 'react';
import Header from './../components/header/header.js';
import Footer from './../components/footer/footer.js';
import SearchModal from './../components/modals/searchModal.js';
import {Router} from '../routes.js';
import dynamic from 'next/dynamic';

export const Sidebar = dynamic(() => {
    return import('./../components/sidebar/sidebar.js')
},{ ssr:false });

export default class About extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            openSearch: false,
            openFilter : false,
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
                <div className="flex flex-col min-h-screen mb-auto">  
                    <Header 
                        searchOnClick={this.onOpenSearch} 
                        displayFilter={false}
                        profileOnClick={this.pushProfileRoute}
                        displayProfile={true}
                    />
                    <SearchModal onOpenSearch={this.state.openSearch} onCloseSearch={this.onCloseSearch} />
                    <Sidebar /> 
                    <div className="flex flex-col bg-gray-lighter min-h-screen relative w-full lg:w-3/4 lg:ml-auto">
                        
                    </div>
                    <Footer />
                </div>
            </>
        );
    }
}