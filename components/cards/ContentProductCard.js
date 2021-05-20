import React from 'react';
import Checklist from './../../assets/images/icons/checklist.svg';
import CartModal from './../../components/modals/cartModal.js';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

export default class ContentProductCard extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            amount_product : 0,
            arraySize: [
                {id:1,size:39},
                {id:2,size:40},
                {id:3,size:41},
                {id:4,size:42},
                {id:5,size:43},
            ],
            arrayColor: [
                {id:1,color:"bg-white"},
                {id:2,color:"bg-black"},
                {id:3,color:"bg-yellow-500"},
            ],
            sizeOfBuyer: null,
            colorOfBuyer: null,
            openCart: false,
            productOnCart: {}
        }
    }

    onOpenCart = () => {
        this.setState({ openCart:true });
    }

    onCloseCart = () => {
        this.setState({ openCart:false });
    }

    handleColor = button => {
        this.setState({
            colorOfBuyer: this.state.arrayColor[button-1].color
        })
    }

    handleSize = button => {
        this.setState({
            sizeOfBuyer: this.state.arraySize[button-1].size
        });
    }

    render(){
        const {amount_product} = this.state;
        
        if(this.state.amount_product < 0){
            this.setState({ amount_product : 0 })
        }
        return (
            <>
                <div className="flex flex-wrap">
                    <CartModal
                        onOpenCart={this.state.openCart}
                        onCloseCart={this.onCloseCart}
                        continueToShop={this.onCloseCart} 
                    />
                    <div className="w-7/12 p-10 flex justify-center">
                        <Carousel
                            additionalTransfrom={0}
                            arrows
                            autoPlaySpeed={3000}
                            centerMode={false}
                            className="w-3/3"
                            containerClass="container rounded-lg"
                            dotListClass=""
                            draggable
                            focusOnSelect={false}
                            infinite
                            itemClass=""
                            keyBoardControl
                            minimumTouchDrag={80}
                            renderButtonGroupOutside={false}
                            renderDotsOutside={false}
                            responsive={{
                                desktop: {
                                breakpoint: {
                                    max: 3000,
                                    min: 1024
                                },
                                items: 1
                                },
                                mobile: {
                                breakpoint: {
                                    max: 464,
                                    min: 0
                                },
                                items: 1
                                },
                                tablet: {
                                breakpoint: {
                                    max: 1024,
                                    min: 464
                                },
                                items: 1
                                }
                            }}
                            showDots
                            sliderClass=""
                            slidesToSlide={1}
                            swipeable
                        >
                            <img
                                src="https://images.unsplash.com/photo-1549989476-69a92fa57c36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
                                style={{
                                display: 'block',
                                height: '100%',
                                margin: 'auto',
                                width: '100%'
                                }}
                            />
                            <img
                                src="https://images.unsplash.com/photo-1549396535-c11d5c55b9df?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
                                style={{
                                display: 'block',
                                height: '100%',
                                margin: 'auto',
                                width: '100%'
                                }}
                            />
                            <img
                                src="https://images.unsplash.com/photo-1550133730-695473e544be?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
                                style={{
                                display: 'block',
                                height: '100%',
                                margin: 'auto',
                                width: '100%'
                                }}
                            />
                            <img
                                src="https://images.unsplash.com/photo-1550167164-1b67c2be3973?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
                                style={{
                                display: 'block',
                                height: '100%',
                                margin: 'auto',
                                width: '100%'
                                }}
                            />
                            <img
                                src="https://images.unsplash.com/photo-1550338861-b7cfeaf8ffd8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
                                style={{
                                display: 'block',
                                height: '100%',
                                margin: 'auto',
                                width: '100%'
                                }}
                            />
                        </Carousel>
                    </div>
                    <div className="p-6 w-5/12">
                        <div className="">
                            <p className="py-4 font-bold text-2xl text-gray-800">Converse 70S HI Herbal Black Egret</p>
                            <span className="text-2xl font-semibold py-2 text-red-darker">Rp 300.000</span>
                            <s className="text-red-darker text-sm"><span className="text-md font-semibold py-2 px-6 text-red-darker">Rp 320.000</span></s>
                            <span className="text-base font-semibold py-2 px-6 text-red-darker">Diskon 15%</span>
                        </div>
                        <p className="py-2 font-semibold text-red-darker">Warna</p>
                        <div className="">
                            {this.state.arrayColor.map(button => (
                                <button
                                    key={button.id} 
                                    className={button.color === this.state.colorOfBuyer ?
                                        `${this.state.colorOfBuyer} rounded-full w-10 h-10 mr-4 py-2 focus:outline-none border-2 border-gray-600 bg-opacity-50`:
                                        `${button.color} rounded-full w-10 h-10 mr-4 py-2 focus:outline-none border-2 border-gray-600`
                                    }
                                    onClick={() => this.handleColor(button.id)}
                                >
                                    {button.color === this.state.colorOfBuyer ? 
                                        <Checklist width={20} height={20} className="mx-auto" fill={this.state.colorOfBuyer} /> : 
                                    ''}
                                </button>
                            ))}
                        </div>
                        <p className="py-2 font-semibold text-red-darker">Ukuran</p>
                        <div className="">
                            {this.state.arraySize.map(button => (
                                <button
                                    key={button.id}
                                    type="button"
                                    className={button.size === this.state.sizeOfBuyer ? 
                                        "border-2 border-black focus:outline-none text-gray-600 py-2 px-4 mr-2 my-2 rounded-lg hover:bg-gray-200 bg-gray-200" : 
                                        "border-2 border-gray-600 text-gray-600 py-2 px-4 mr-2 my-2 rounded-lg hover:bg-gray-200"
                                    }
                                    onClick={() => this.handleSize(button.id)}
                                >
                                    {button.size}
                                </button>
                            ))}
                        </div>
                        <hr className="border-gray-300 my-4" />
                        <div className="flex flex-wrap">
                            <div className="text-red-darker py-4 w-6/12">
                                <div className="border-2 my-6 rounded-lg inline-block">
                                    <button 
                                        className="py-1 px-4 focus:outline-none hover:bg-gray-200 transition duration-300 ease-in-out active:text-gray-200 border-r-2 border-gray-200"
                                        onClick={() => this.setState({ amount_product : amount_product - 1 })}
                                    >
                                        -
                                    </button>
                                    <span className="py-1 px-4">{amount_product}</span>
                                    <button
                                        className="py-1 px-4 focus:outline-none hover:bg-gray-200 transition duration-300 ease-in-out active:text-gray-200 border-l-2 border-gray-200"
                                        onClick={() => this.setState({ amount_product : amount_product + 1 })}
                                    >
                                        +
                                    </button>
                                </div>
                            </div>
                            <div className="object-none object-right text-right w-6/12">
                                <p className="py-2 text-red-darker font-semibold">Barang Tersedia!</p>
                                <button
                                    onClick={() => {
                                        this.onOpenCart()
                                    }}
                                    className="bg-orange px-4 py-2 border-2 border-orange rounded-lg focus:outline-none hover:bg-yellow-600 hover:border-yellow-600 duration-300 font-bold text-white  " 
                                    type="button"
                                >
                                    TAMBAH KE KERANJANG
                                </button>
                            </div>
                        </div>
                        <div className="text-red-darker font-semibold">
                            <p>Deskripsi Warna: Hitam/Putih</p>
                            <hr className="border-gray-300 my-2" />
                            <p>Material: Syntethic</p>
                            <hr className="border-gray-300 my-2" />
                            <h2 className="text-lg">Deskripsi Produk</h2>
                            <p className="text-sm my-2">
                                You can push yourself a little more.The Gusto Performance Cross Trainer from can help you get there.
                                It features a breathable,sporty upper laces for good fit.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="p-10">
                    <p className="text-center my-2 text-lg font-bold">PILIHAN LAINNYA</p>
                    <div className="">
                        <Carousel
                            additionalTransfrom={0}
                            arrows
                            autoPlaySpeed={3000}
                            centerMode={false}
                            className=""
                            containerClass="container"
                            dotListClass=""
                            draggable
                            focusOnSelect={false}
                            infinite={false}
                            itemClass=""
                            keyBoardControl
                            minimumTouchDrag={80}
                            renderButtonGroupOutside={false}
                            renderDotsOutside={false}
                            responsive={{
                                desktop: {
                                breakpoint: {
                                    max: 3000,
                                    min: 1024
                                },
                                items: 4,
                                partialVisibilityGutter: 40
                                },
                                mobile: {
                                breakpoint: {
                                    max: 464,
                                    min: 0
                                },
                                items: 1,
                                partialVisibilityGutter: 30
                                },
                                tablet: {
                                breakpoint: {
                                    max: 1024,
                                    min: 464
                                },
                                items: 2,
                                partialVisibilityGutter: 30
                                }
                            }}
                            showDots={false}
                            sliderClass=""
                            slidesToSlide={1}
                            swipeable
                        >
                            <img
                                src="https://images.unsplash.com/photo-1549989476-69a92fa57c36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
                                style={{
                                display: 'block',
                                height: '100%',
                                margin: 'auto',
                                width: '100%'
                                }}
                            />
                            <img
                                src="https://images.unsplash.com/photo-1549396535-c11d5c55b9df?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
                                style={{
                                display: 'block',
                                height: '100%',
                                margin: 'auto',
                                width: '100%'
                                }}
                            />
                            <img
                                src="https://images.unsplash.com/photo-1550133730-695473e544be?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
                                style={{
                                display: 'block',
                                height: '100%',
                                margin: 'auto',
                                width: '100%'
                                }}
                            />
                            <img
                                src="https://images.unsplash.com/photo-1550167164-1b67c2be3973?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
                                style={{
                                display: 'block',
                                height: '100%',
                                margin: 'auto',
                                width: '100%'
                                }}
                            />
                            <img
                                src="https://images.unsplash.com/photo-1550338861-b7cfeaf8ffd8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
                                style={{
                                display: 'block',
                                height: '100%',
                                margin: 'auto',
                                width: '100%'
                                }}
                            />
                        </Carousel>
                    </div>
                </div>
            </>
        );
    }
}