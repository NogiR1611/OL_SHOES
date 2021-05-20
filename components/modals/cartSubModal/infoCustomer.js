import React from 'react';
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import Exit from './../../../assets/images/icons/exit.svg';
import Link from 'next/link';
import address from './../../../address.js';
import RightArrow from './../../../assets/images/icons/rightArrow.svg';
import Search from './../../../assets/images/icons/search.svg';
import Clear from './../../../assets/images/icons/clear.svg';

export default class InfoCustomer extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            province: false,
            city: false,
            district: false,
            provinceData: [],
            cityData: [],
            districtData: [],
            provinceName: '',
            cityName: '',
            districtName: null,
            provinceAndCity: '',
            searchProvince: '',
            searchCity: '',
            searchDistrict: ''
        }
    }

    onCloseModalProvince = () => {
        this.setState({ province: false })
    }

    onCloseModalCity = () => {
        this.setState({ city: false })
    }

    onCloseModalDistrict = () => {
        this.setState({ district: false })
    }

    clickAddress = () => {
        this.setState({ province: true })

        address.get('/provinces')
        .then(res => {
            const {data} = res.data
            this.setState({ provinceData: data })
        })
        .catch(err => {
            console.log(err)
        })
    }
    
    clickCity = id => {
        address.get(`/cities/${id}`)
        .then(res => {
            const {data} = res.data;
            this.setState({ cityData: data })
        })
        .catch(err => {
            console.log(err)
        })
    }

    clickDistrict = id => {
        address.get(`/areas/${id}`)
        .then(res => {
            const {data} = res.data;
            this.setState({ districtData: data })
        })
        .catch(err => {
            console.log(err)
        })
    }

    render(){
        return (
            <>
                <Modal
                    styles={{modal: { maxWidth : '100%',borderRadius : '5%',padding: '0' }}} 
                    open={this.props.modalInfoCustomer}
                    onClose={this.props.onCloseModalInfoCustomer}
                    closeIcon={<Exit width={28} height={28} className="hover:bg-gray-200 rounded-full h-8 w-8 flex justify-center transition duration-300 ease-in-out" />}
                >
                    <div className="w-full max-w-2xl py-4 px-4 items-center">
                        <div className="w-full px-2">
                            <p className="text-lg font-bold text-gray-800">Informasi Pengiriman</p>
                        </div>
                        <div className="w-full py-2 px-4">
                            <label className="text-gray-600 font-semibold focus:text-red-600 my-2" htmlFor="name">Nama Lengkap Penerima</label>
                            <input
                                className="block w-full duration-400 my-2 rounded-md bg-gray-100 border-b-2 border-gray-400 px-2 mr-4 outline-none focus:border-2 border-red-600"
                                type="text"
                                name="name"
                                id="name"
                                placeholder=""
                            />
                            <label className="text-gray-600 font-semibold focus:text-red-600 my-2" htmlFor="numberPhone">Nomor HP Penerima</label>
                            <input
                                className="block w-full duration-400 my-2 rounded-md bg-gray-100 border-b-2 border-gray-400 px-2 mr-4 outline-none focus:border-2 border-red-600"
                                type="text"
                                name="numberPhone"
                                id="numberPhone"
                                placeholder=""
                            />
                            <label className="text-gray-600 font-semibold focus:text-red-600 my-4" htmlFor="address">Alamat Penerima</label>
                            <input
                                className="block w-full cursor-default duration-400 my-4 rounded-md bg-gray-100 border-b-2 border-gray-400 px-2 mr-4 outline-none focus:border-2 border-red-600"
                                type="text"
                                name="address"
                                id="address"
                                value={`${this.state.provinceAndCity}`}
                                placeholder=""
                                onClick={this.clickAddress}
                            />
                            <label className="text-gray-600 font-semibold focus:text-red-600 my-4" htmlFor="detailAddress">Alamat Lengkap Penerima</label>
                            <input
                                className={"block w-full duration-400 my-4 rounded-md bg-gray-100 border-b-2 border-gray-400 px-2 mr-4 outline-none focus:border-2 border-red-600"}
                                type="text"
                                name="detailAddress"
                                id="detailAddress"
                                placeholder=""
                            />
                        </div>
                        <p className="py-4">
                            Saya sudah membaca dan menyetujui<span> </span>
                            <Link href="">
                                <span className="text-red-600 underline">Syarat & Ketentuan</span>
                            </Link>
                        </p>
                        <button
                            onClick={this.inputText}
                            className="w-full p-4 text-center font-bold bg-red-600 text-gray-100 rounded-md hover:bg-red-700 active:bg-red-800 focus:outline-none transition duration-300 ease-in-out"
                        >
                            Setuju & Lanjutkan
                        </button>
                    </div>
                </Modal>
                <Modal
                    styles={{modal: { maxWidth : '100%',borderRadius : '5%',padding: '0' }}} 
                    open={this.state.province}
                    onClose={this.onCloseModalProvince}
                    closeIcon={<Exit width={28} height={28} className="hover:bg-gray-200 rounded-full h-8 w-8 flex justify-center transition duration-300 ease-in-out" />}
                >
                    <div className="w-full max-w-2xl py-4 px-4 items-center">
                        <div className="py-4">
                            <p className="text-xl text-gray-800 font-semibold py-1">1.Pilih Provinsi</p>
                            <p className="text-gray-800 py-1">Kemana kamu mau mengirimkan paket?</p>
                            <div className="bg-gray-100 focus:bg-gray-400 w-full py-1 rounded-lg">
                                <input
                                    className="inline-block transition duration-400 ease-in-out bg-gray-100 border-b-2 border-gray-400 xl:w-11/12 md:3/12 px-2 outline-none focus:border-red-600"
                                    type="text"
                                    name="product"
                                    id="product" 
                                    value={this.state.searchProvince}
                                    onChange={ (e) => this.setState({ searchProvince : e.target.value }) }
                                />
                                {this.state.searchProvince !== '' ?
                                    <button className="focus:outline-none pl-1" onClick={() => this.setState({ searchProvince : '' }) }>
                                        <Clear className="inline-block " width={15} height={15} />
                                    </button> : 
                                    <Search className="inline-block pl-1" width={22} height={22} />
                                }
                            </div>
                        </div>
                        <div className="w-full max-h-96 overflow-y-auto">
                            {this.state.provinceData
                            .filter(element => {
                                return (
                                    element.name.toLowerCase().includes(this.state.searchProvince.toString().toLowerCase())    
                                )
                            })
                            .map( (element,index) => {
                                return (
                                    <div className="w-full font-bold text-gray-800" key={index}>
                                        <button
                                            className="w-full text-left font-bold text-gray-800 p-1 focus:outline-none hover:bg-gray-100 transition duration-300 ease-in-out rounded-md"
                                            onClick={() => {
                                                this.clickCity(element.id)
                                                this.setState({
                                                    provinceName: element.name,
                                                    province: false,
                                                    city: true
                                                });
                                            }}
                                        >
                                            {element.name}
                                            <RightArrow className="inline-block float-right mx-2 my-2 stroke-current stroke-2 text-black" width={12} height={12} />
                                        </button>
                                        <hr className="border-b-1 border-gray-200 py-1" />
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </Modal>
                <Modal
                    styles={{modal: { maxWidth : '100%',borderRadius : '5%',padding: '0' }}} 
                    open={this.state.city}
                    onClose={this.onCloseModalCity}
                    closeIcon={<Exit width={28} height={28} className="hover:bg-gray-200 rounded-full h-8 w-8 flex justify-center transition duration-300 ease-in-out" />}
                >
                    <div className="w-full max-w-2xl py-4 px-4 items-center">
                        <div className="py-4">
                            <p className="text-xl text-gray-800 font-semibold py-1">2.Pilih Kota</p>
                            <p className="text-gray-800 py-1">{this.state.provinceName} : </p>
                        </div>
                        <div className="bg-gray-100 focus:bg-gray-400 w-full py-1 rounded-lg">
                            <input
                                className="inline-block transition duration-400 ease-in-out bg-gray-100 border-b-2 border-gray-400 xl:w-11/12 md:3/12 px-2 outline-none focus:border-red-600"
                                type="text"
                                name="product"
                                id="product" 
                                value={this.state.searchCity}
                                onChange={ (e) => this.setState({ searchCity : e.target.value }) }
                            />
                            {this.state.searchCity !== '' ?
                                <button className="focus:outline-none pl-1" onClick={() => this.setState({ searchCity : '' }) }>
                                    <Clear className="inline-block " width={15} height={15} />
                                </button> : 
                                <Search className="inline-block pl-1" width={22} height={22} />
                            }
                        </div>
                        <div className="max-h-96 overflow-y-auto">
                            {this.state.cityData
                            .filter(element => {
                                return (
                                    element.name.toLowerCase().includes(this.state.searchCity.toString().toLowerCase())    
                                )
                            })
                            .map( (element,index) => {
                                return (
                                    <div className="w-full font-bold text-gray-800" key={index}>
                                        <button
                                            className="w-full text-left font-bold text-gray-800 p-1 focus:outline-none hover:bg-gray-100 transition duration-300 ease-in-out rounded-md"
                                            onClick={() => {
                                                this.clickDistrict(element.id)
                                                this.setState({ 
                                                    cityName: element.name,
                                                    city: false,
                                                    district: true
                                                })
                                            }}
                                        >
                                            {element.name}
                                            <RightArrow className="inline-block float-right mx-2 my-2 stroke-current stroke-2 text-black" width={12} height={12} />
                                        </button>
                                        <hr className="border-b-1 border-gray-200 py-1" />
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </Modal>
                <Modal
                    styles={{modal: { maxWidth : '100%',borderRadius : '5%',padding: '0' }}} 
                    open={this.state.district}
                    onClose={this.onCloseModalDistrict}
                    closeIcon={<Exit width={28} height={28} className="hover:bg-gray-200 rounded-full h-8 w-8 flex justify-center transition duration-300 ease-in-out" />}
                >
                    <div className="w-full max-w-2xl py-4 px-4 items-center">
                        <div className="py-4">
                            <p className="text-xl text-gray-800 font-semibold py-1">3.Pilih Kecamatan</p>
                            <p className="text-gray-800 py-1">{this.state.provinceName},{this.state.cityName} : </p>
                        </div>
                        <div className="bg-gray-100 focus:bg-gray-400 w-full py-1 rounded-lg">
                            <input
                                className="inline-block transition duration-400 ease-in-out bg-gray-100 border-b-2 border-gray-400 xl:w-11/12 md:3/12 px-2 outline-none focus:border-red-600"
                                type="text"
                                name="product"
                                id="product" 
                                value={this.state.searchDistrict}
                                onChange={ (e) => this.setState({ searchDistrict : e.target.value }) }
                            />
                            {this.state.searchDistrict !== '' ?
                                <button className="focus:outline-none pl-1" onClick={() => this.setState({ searchDistrict : '' }) }>
                                    <Clear className="inline-block " width={15} height={15} />
                                </button> : 
                                <Search className="inline-block pl-1" width={22} height={22} />
                            }
                        </div>
                        <div className="max-h-96 overflow-y-auto">
                            {this.state.districtData
                            .filter(element => {
                                return (
                                    element.subdistrict_name.toLowerCase().includes(this.state.searchDistrict.toString().toLowerCase())    
                                )
                            })
                            .map( (element,index) => {
                                return (
                                    <div className="w-full font-bold text-gray-800" key={index}>
                                        <button
                                            className="w-full text-left font-bold text-gray-800 p-1 focus:outline-none hover:bg-gray-100 transition duration-300 ease-in-out rounded-md"
                                            onClick={() => {
                                                this.setState({
                                                    districtName: element.districtName,
                                                    district: false,
                                                    provinceAndCity:this.state.cityName + ',' + this.state.provinceName
                                                })
                                            }}
                                        >
                                            {element.subdistrict_name}
                                            <RightArrow className="inline-block float-right mx-2 my-2 stroke-current stroke-2 text-black" width={12} height={12} />
                                        </button>
                                        <hr className="border-b-1 border-gray-200 py-1" />
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </Modal>
            </>
        )
    }
}