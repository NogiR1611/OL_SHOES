import React from 'react';
import Footer from './../components/footer/footer.js';
import SearchModal from './../components/modals/searchModal.js';
import {Router} from '../routes.js';
import dynamic from 'next/dynamic';

export const Sidebar = dynamic(() => {
    return import('./../components/sidebar/sidebar.js')
},{ ssr:false });

export const Header = dynamic(() => {
    return import('./../components/header/header.js')
},{ ssr:false });

export default class About extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            openSearch: false,
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
        Router.pushRoute('/orders');
    }

    render(){
        return (
            <>
                <Sidebar
                    clickMenu={() => this.setState({ showSidebar:!this.state.showSidebar })}
                    showSidebar={this.state.showSidebar}
                    removeIcon={this.state.showSidebar}
                    searchOnClick={this.onOpenSearch} 
                    removeSidebar={() => this.setState({ showSidebar:!this.state.showSidebar })}
                />
                <div>
                    {this.state.showSidebar ? (
                        <div className="bg-black bg-opacity-50 h-full w-full fixed z-500 top-0 bottom-0 left-0 right-0" onClick={() => this.setState({ showSidebar:!this.state.showSidebar })} />
                    ) : null}
                    <div className="bg-gray-lighter flex flex-col min-h-screen mb-auto">  
                        <Header 
                            clickMenu={() => this.setState({ showSidebar:!this.state.showSidebar })}
                            changeIcon={this.state.showSidebar}
                            searchOnClick={this.onOpenSearch} 
                            displayFilter={false}
                            profileOnClick={this.pushProfileRoute}
                            displayProfile={true}
                        />
                        <SearchModal onOpenSearch={this.state.openSearch} onCloseSearch={this.onCloseSearch} />
                        <div className="flex flex-col bg-gray-lighter min-h-screen relative w-full lg:w-3/4 xl:w-8/10 lg:ml-auto">
                        </div>
                        <Footer />
                    </div>
                </div>
            </>
        );
    }
}