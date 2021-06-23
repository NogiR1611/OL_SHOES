import React from 'react';
import 'tailwindcss/tailwind.css';
import './../assets/styles/global.css';
import Router from 'next/router';
import NProgress from 'nprogress';
import Head from 'next/head';
import './../assets/styles/modal.css';
import './../assets/styles/carousel/carousel.css';
import Spinner from './../assets/images/components/spinner.svg';

export default class MyApp extends React.Component{
    constructor(props){
      super(props)
      this.state = {
        loaded : false
      }
    }

    componentDidMount(){
      this.setState({ loaded:false })
      Router.events.on('routeChangeStart', () => {
        NProgress.start()
        this.setState({ loaded:true })
        console.log("onRouteChangeStart " + this.state.loaded)
      });

      Router.events.on('routeChangeComplete', () => {
        NProgress.done()
        this.setState({ loaded:false })
        console.log("onRouteChangeComplete " + this.state.loaded)
      });

      Router.events.on('routeChangeError', () => {
        NProgress.done()
        console.log("onRouteChangeError")
      });
    }

    render(){
      const {Component,pageProps} = this.props;
      return (
        <>
          <Head>
            <title>NextJS + ReactJS</title>
          </Head>
          {this.state.loaded ? (
            <div className="flex justify-center pt-4">
              <Spinner className="h-16 w-16 hp-one:h-24 hp-one:w-24" />
            </div>
          ) : 
          (
            <Component {...pageProps} />
          )}
        </>
      )
    }
  }