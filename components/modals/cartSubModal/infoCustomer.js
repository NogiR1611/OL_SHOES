import React from 'react';
import numeral from 'numeral';
import { Modal } from 'react-responsive-modal';
import ArrowLeft from './../../../assets/images/icons/arrowLeft.svg';
import address from './../../../utils/address.js';
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
            shipmentService: false,
            provinceData: [],
            cityData: [],
            districtData: [],
            provinceName: '',
            cityName: '',
            districtName: null,
            provinceAndCity: '',
            searchProvince: '',
            searchCity: '',
            searchDistrict: '',
            nameCustomer: '',
            numberPhone: '',
            detailAddress: '',
            statusNameCustomer: false,
            statusNumberPhone: false,
            statusAddress: false,
            statusDetailAddress: false,
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
        address.get(`/cities?search=province_id=${id}`)
        .then(res => {
            const {data} = res.data;
            this.setState({ cityData: data })
        })
        .catch(err => {
            console.log(err)
        })
    }

    clickDistrict = id => {
        address.get(`/districts?search=city_id=${id}`)
        .then(res => {
            const {data} = res.data;
            this.setState({ districtData: data })
        })
        .catch(err => {
            console.log(err)
        })
    }

    validationInfoCustomer = () => {
        const {nameCustomer,numberPhone,provinceAndCity,detailAddress} = this.state;
        if(nameCustomer === ''){
            this.setState({ statusNameCustomer:true });
        }
        else{
            this.setState({ statusNameCustomer:false });
        }
        if(numberPhone === ''){
            this.setState({ statusNumberPhone:true });
        }
        else{
            this.setState({ statusNumberPhone:false });
        }
        if(provinceAndCity === ''){
            this.setState({ statusAddress:true });
        }
        else{
            this.setState({ statusAddress:false });
        }
        if(detailAddress === ''){
            this.setState({ statusDetailAddress:true });
        }
        else{
            this.setState({ statusDetailAddress:false });
        }
    }

    render(){
        return (
            <>
                <Modal
                    styles={{modal: { maxWidth : '100%',borderRadius : '5%',padding: '0' }}} 
                    open={this.props.modalInfoCustomer}
                    onClose={this.props.onCloseModalInfoCustomer}
                    closeIcon={<ArrowLeft className="bg-gray-lighter-4 hover:bg-gray-lighter-5 transition duration-300 ease-in-out rounded-full stroke-current stroke-0 focus:outline-none text-black transform scale-100 h-6 w-6 hp-one:h-8 hp-one:w-8 p-1 flex justify-center" />}
                    center
                >
                    <div className="bg-gray-lighter w-full h-9/10 md:w-480 items-center">
                        <div className="h-9 md:w-480" />
                        <div className="flex justify-center md:hidden">
                            <div className="bg-gray-lighter-6 mx-auto h-1 w-20 absolute top-1 rounded-sm" />
                        </div>
                        <div className="w-full px-2 hp-one:px-6 pt-4 pb-2">
                            <p className="text-base hp-one:text-lg font-bold text-gray-800">Informasi Pengiriman</p>
                        </div>  
                        <div className="w-full px-2 hp-one:px-6">
                            <div className="flex flex-col">
                                <div className="flex flex-auto">
                                    <div className="block relative bg-gray-lighter-7 border-b-2 w-full border-gray-lighter-9 focus-within:border-red-darker-1 rounded-t-lg">
                                        <input
                                            type="text" 
                                            id="name" 
                                            name="name" 
                                            value={this.state.nameCustomer}
                                            onChange={e => this.setState({ nameCustomer : e.target.value })}
                                            placeholder=" " 
                                            className="block w-full text-xs hp-one:text-sm lg:text-base appearance-none focus:outline-none pt-4 pl-4 bg-transparent" 
                                        />
                                        <label for="name" class="absolute top-3 transition duration-300 ease-in-out text-gray-lighter-3 text-xs hp-one:text-sm lg:text-base font-medium">Nama Lengkap Penerima*</label>
                                    </div>
                                </div>
                                <div className="flex flex-grow px-3 pb-2 mt-2">
                                    {this.state.statusNameCustomer ? 
                                        <p className="text-xs text-orange-lighter-1">Mohon Isi nama lengkap anda</p>
                                     : null}
                                </div>
                            </div>
                            <div className="flex flex-col">
                                <div className="flex flex-auto">
                                    <div className="block relative bg-gray-lighter-7 border-b-2 w-full border-gray-lighter-9 focus-within:border-red-darker-1 rounded-t-lg">
                                        <input
                                            type="text" 
                                            id="number" 
                                            name="number"
                                            value={this.state.numberPhone} 
                                            onChange={e => this.setState({ numberPhone : e.target.value })}
                                            placeholder=" " 
                                            className="block w-full text-xs hp-one:text-sm lg:text-base appearance-none focus:outline-none pt-4 pl-4 bg-transparent" 
                                        />
                                        <label for="number" class="absolute top-3 transition duration-300 ease-in-out text-gray-lighter-3 text-xs hp-one:text-sm lg:text-base font-medium">Nomor HP Penerima*</label>
                                    </div>
                                </div>
                                <div className="flex flex-grow px-3 pb-2 mt-2">
                                    {this.state.statusNumberPhone ? 
                                        <p className="text-xs text-orange-lighter-1">Mohon isi nomor telepon anda</p>
                                     : null}
                                </div>
                            </div>
                            <div className="flex flex-col">
                                <div className="flex flex-auto">
                                    <div className="block relative bg-gray-lighter-7 border-b-2 w-full border-gray-lighter-9 focus-within:border-red-darker-1 rounded-t-lg">
                                        <input
                                            type="text" 
                                            id="address" 
                                            name="address" 
                                            value={`${this.state.provinceAndCity}`}
                                            onClick={this.clickAddress}
                                            placeholder=" " 
                                            className="block w-full text-xs hp-one:text-sm lg:text-base appearance-none focus:outline-none pt-4 pl-4 bg-transparent" 
                                        />
                                        <label for="address" class="absolute top-3 transition duration-300 ease-in-out text-gray-lighter-3 text-xs hp-one:text-sm lg:text-base font-medium">Alamat Penerima*</label>
                                    </div>
                                </div>
                                <div className="flex flex-grow px-3 pb-2 mt-2">
                                    {this.state.statusAddress ? 
                                        <p className="text-xs text-orange-lighter-1">Mohon isi alamat anda</p>
                                     : null}
                                </div>
                            </div>
                            {this.state.provinceAndCity ? (
                                <div className="flex flex-col">
                                    <div className="flex flex-auto">
                                        <div className="block relative bg-gray-lighter-7 border-b-2 w-full border-gray-lighter-9 focus-within:border-red-darker-1 rounded-t-lg">
                                            <textarea
                                                rows="3"
                                                type="text" 
                                                id="detailAddress" 
                                                name="detailAddress"
                                                value={this.state.detailAddress}
                                                onChange={e => this.setState({ detailAddress : e.target.value })}
                                                placeholder=" " 
                                                className="block w-full text-xs hp-one:text-sm lg:text-base appearance-none focus:outline-none bg-transparent pt-4 pl-4"
                                            />
                                            <label for="detailAddress" class="absolute top-3 transition duration-300 ease-in-out text-gray-lighter-3 text-xs hp-one:text-sm lg:text-base font-medium">Alamat Lengkap Penerima*</label>
                                        </div>
                                    </div>
                                    <div className="flex flex-nowrap flex-auto px-3 pb-2 mt-2">
                                        <p className="flex flex-auto text-xs text-orange-lighter-1">
                                            {this.state.statusDetailAddress ? 
                                                "Mohon isi alamat lengkap anda"
                                            : null}
                                        </p>
                                        <p className="flex-none text-super-tiny hp-one:text-xs text-black-darker">{this.state.detailAddress.length}/255</p>
                                    </div>
                                </div>) : null
                            }
                            <div className="flex flex-col">
                                <div className="flex flex-auto">
                                    <div className="block relative bg-gray-lighter-7 border-b-2 w-full border-gray-lighter-9 focus-within:border-red-darker-1 rounded-t-lg">
                                        <input
                                            type="text" 
                                            id="email" 
                                            name="email" 
                                            placeholder=" " 
                                            className="block w-full text-xs hp-one:text-sm lg:text-base appearance-none focus:outline-none pt-4 pl-4 bg-transparent" 
                                        />
                                        <label for="email" class="absolute top-3 transition duration-300 ease-in-out text-gray-lighter-3 text-xs hp-one:text-sm lg:text-base font-medium">Email Penerima(Opsional)</label>
                                    </div>
                                </div>
                                <div className="flex flex-grow px-3 pb-2 mt-2">
                                </div>
                            </div> 
                        <p className="mt-6 text-black-darker text-tiny hp-one:text-xs lg:text-base">
                            Saya sudah membaca dan menyetujui<span> </span>
                            <a target="_blank"  href='/terms-and-conditions'>
                                <span className="text-red-darker-1 underline mx-auto">Syarat & Ketentuan</span>
                            </a>
                        </p>
                    </div>
                    <div className="py-2 px-4">
                        <button
                            onClick={this.state.nameCustomer !== '' && this.state.numberPhone !== '' && this.state.address !== '' && this.state.detailAddress !== '' ? 
                                this.props.shipmentModal : this.validationInfoCustomer
                            }
                            className="w-full text-center h-8 hp-one:h-12 font-bold bg-red-darker-1 text-white rounded-md hover:opacity-90 active:bg-opacity-50 active:bg-red-darker-1 text-medium text-xs hp-one:text-sm focus:outline-none transition duration-300 ease-in-out"
                        >
                            Setuju & Lanjutkan
                        </button>
                    </div>
                </div>
            </Modal>
            <Modal
                styles={{modal: { maxWidth : '100%',borderRadius : '5%',padding: '0' }}} 
                open={this.state.province}
                onClose={this.onCloseModalProvince}
                closeIcon={<ArrowLeft className="bg-gray-lighter-4 hover:bg-gray-lighter-5 transition duration-300 ease-in-out rounded-full stroke-current stroke-0 focus:outline-none text-black transform scale-100 h-6 w-6 hp-one:h-8 hp-one:w-8 p-1 flex justify-center" />}
                center
            >
                <div className="bg-gray-lighter w-full md:w-480 items-center">
                    <div className="flex justify-center md:hidden">
                        <div className="bg-gray-lighter-6 mx-auto h-1 w-20 absolute top-1 rounded-sm" />
                    </div>
                    <div className="h-9 md:w-480" />
                    <div className="py-4 px-2 hp-one:px-6">  
                        <p className="text-sm hp-one:text-base lg:text-xl text-gray-800 font-semibold py-1">1.Pilih Provinsi</p>
                        <p className="text-xs hp-one:text-sm lg:text-base text-gray-800 py-1 mb-4">Kemana kamu mau mengirimkan paket?</p>
                        <div className="flex flex-nowrap flex-auto text-xs hp-one:text-sm lg:text-base bg-gray-lighter-7 focus:bg-gray-400 w-full rounded-t-lg">
                            <input
                                className="flex-auto inline-block transition duration-400 ease-in-out bg-transparent border-b-2 border-gray-400 px-2 outline-none focus:border-red-darker-1"
                                type="text"
                                name=""
                                id="" 
                                value={this.state.searchProvince}
                                onChange={ (e) => this.setState({ searchProvince : e.target.value }) }
                            />
                            {this.state.searchProvince !== '' ?
                                <button className="bg-transparent flex flex-none focus:outline-none pl-1" onClick={() => this.setState({ searchProvince : '' }) }>
                                    <Clear className="self-center inline-block h-4 w-4 hp-one:h-6 hp-one:w-6 lg:h-8 lg:w-8" />
                                </button> : 
                                <Search className="self-center inline-block pl-1 h-4 w-4 hp-one:h-6 hp-one:w-6 lg:h-8 lg:w-8" />
                            }
                        </div>
                    </div>
                    <div className="w-full max-h-96 text-xs hp-one:text-sm lg:text-base overflow-y-auto">
                        {this.state.provinceData
                        .filter(element => {
                            return (
                                element.name.toLowerCase().includes(this.state.searchProvince.toString().toLowerCase())    
                            )
                        })
                        .map( (element,index) => {
                            return (
                                <div className="w-full pl-6 font-bold text-gray-800" key={index}>
                                    <button
                                        className="flex flex-nowrap flex-auto w-full text-left font-bold text-gray-800 py-3 pr-3 focus:outline-none hover:bg-gray-100 transition duration-300 ease-in-out rounded-md"
                                        onClick={() => {
                                            this.clickCity(element.id)
                                            this.setState({
                                                provinceName: element.name,
                                                province: false,
                                                city: true
                                            });
                                        }}
                                    >
                                        <span className="flex-auto self-center">{element.name}</span>
                                        <RightArrow className="flex-none inline-block float-right stroke-current stroke-0 text-black h-4 w-4 hp-one:h-6 hp-one:w-6" />
                                    </button>
                                    <hr className="border-b-2 border-gray-200" />
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
                closeIcon={<ArrowLeft className="bg-gray-lighter-4 hover:bg-gray-lighter-5 transition duration-300 ease-in-out rounded-full stroke-current stroke-0 focus:outline-none text-black transform scale-100 h-6 w-6 hp-one:h-8 hp-one:w-8 p-1 flex justify-center" />}
                center
            >
                <div className="bg-gray-lighter w-full md:w-480 items-center">
                    <div className="flex justify-center md:hidden">
                        <div className="bg-gray-lighter-6 mx-auto h-1 w-20 absolute top-1 rounded-sm" />
                    </div>
                    <div className="w-full h-9 md:w-480" />
                    <div className="py-4 px-2 hp-one:px-6">
                        <p className="text-sm hp-one:text-base lg:text-xl text-gray-800 font-semibold py-1">2.Pilih Kota</p>
                        <p className="text-xs hp-one:text-sm lg:text-base text-gray-800 py-1">{this.state.provinceName} : </p>
                        <div className="flex flex-nowrap flex-auto w-full text-xs hp-one:text-sm lg:text-base bg-gray-lighter-7 focus:bg-gray-400 py-1 rounded-t-lg">
                            <input
                                className="flex-auto inline-block transition duration-400 ease-in-out bg-transparent border-b-2 border-gray-400 px-2 outline-none focus:border-red-darker-1"
                                type="text"
                                name=""
                                id="" 
                                value={this.state.searchCity}
                                onChange={ (e) => this.setState({ searchCity : e.target.value }) }
                            />
                            {this.state.searchCity !== '' ?
                                <button className="flex flex-none focus:outline-none pl-1" onClick={() => this.setState({ searchCity : '' }) }>
                                    <Clear className="self-center inline-block mx-1 h-4 w-4 hp-one:h-6 hp-one:w-6 lg:h-8 lg:w-8 float-right" />
                                </button> : 
                                <Search className="self-center inline-block mx-2 h-4 w-4 hp-one:h-6 hp-one:w-6 lg:h-8 lg:w-8 float-right" />
                            }
                        </div>
                    </div>
                        <div className="w-full max-h-96 text-xs hp-one:text-sm lg:text-base overflow-y-auto">
                            {this.state.cityData
                            .filter(element => {
                                return (
                                    element.name.toLowerCase().includes(this.state.searchCity.toString().toLowerCase())    
                                )
                            })
                            .map( (element,index) => {
                                return (
                                    <div className="w-full pl-6 font-bold text-gray-800" key={index}>
                                        <button
                                            className="flex flex-nowrap flex-auto w-full text-left font-bold text-gray-800 py-3 pr-3 focus:outline-none hover:bg-gray-100 transition duration-300 ease-in-out rounded-md"
                                            onClick={() => {
                                                this.clickDistrict(element.id)
                                                this.setState({ 
                                                    cityName: element.name,
                                                    city: false,
                                                    district: true
                                                })
                                            }}
                                        >
                                            <span className="flex-auto self-center">{element.name}</span>
                                            <RightArrow className="inline-block float-right mx-2 my-2 stroke-current stroke-0 text-black h-4 w-4 hp-one:h-6 hp-one:w-6" />
                                        </button>
                                        <hr className="border-b-2 border-gray-200" />
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
                closeIcon={<ArrowLeft className="bg-gray-lighter-4 hover:bg-gray-lighter-5 transition duration-300 ease-in-out rounded-full stroke-current stroke-0 focus:outline-none text-black transform scale-100 h-6 w-6 hp-one:h-8 hp-one:w-8 p-1 flex justify-center" />}
                center
            >
                <div className="bg-gray-lighter md:w-480 w-full items-center">
                    <div className="flex justify-center md:hidden">
                        <div className="bg-gray-lighter-6 mx-auto h-1 w-20 absolute top-1 rounded-sm" />
                    </div>
                    <div className="h-9 md:w-480" />
                    <div className="py-4 px-2 hp-one:px-6">
                        <p className="text-sm hp-one:text-base lg:text-xl text-gray-800 font-semibold py-1">3.Pilih Kecamatan</p>
                        <p className="text-xs hp-one:text-sm lg:text-base text-gray-800 py-1">{this.state.provinceName},{this.state.cityName} : </p>
                        <div className="flex flex-nowrap flex-auto text-xs hp-one:text-sm lg:text-base bg-gray-lighter-7 focus:bg-gray-400 w-full py-1 rounded-t-lg">
                            <input
                                className="flex-auto inline-block transition duration-400 ease-in-out bg-transparent border-b-2 border-gray-400 px-2 outline-none focus:border-red-darker-1"
                                type="text"
                                name=""
                                id="" 
                                value={this.state.searchDistrict}
                                onChange={ (e) => this.setState({ searchDistrict : e.target.value }) }
                            />
                            {this.state.searchDistrict !== '' ?
                                <button className="flex flex-none focus:outline-none pl-1" onClick={() => this.setState({ searchDistrict : '' }) }>
                                    <Clear className="self-center inline-block float-right mx-1 h-4 w-4 hp-one:h-6 hp-one:w-6 lg:h-8 lg:w-8" />
                                </button> : 
                                <Search className="self-center inline-block float-right mx-2 h-4 w-4 hp-one:h-6 hp-one:w-6 lg:h-8 lg:w-8" />
                            }
                        </div>
                    </div>
                    <div className="max-h-96 text-xs hp-one:text-sm lg:text-base overflow-y-auto">
                        {this.state.districtData
                            .filter(element => {
                                return (
                                    element.name.toLowerCase().includes(this.state.searchDistrict.toString().toLowerCase())    
                                )
                            })
                            .map( (element,index) => {
                                return (
                                    <div className="w-full font-bold text-gray-800 pl-6" key={index}>
                                        <button
                                            className="flex flex-nowrap flex-auto w-full text-left font-bold text-gray-800 py-3 pr-3 focus:outline-none hover:bg-gray-100 transition duration-300 ease-in-out rounded-md"
                                            onClick={() => {
                                                this.setState({
                                                    districtName: element.name,
                                                    district: false,
                                                    provinceAndCity:this.state.cityName + ',' + this.state.provinceName
                                                })
                                            }}
                                        >
                                            <span className="flex-auto self-center">{element.name}</span>
                                            <RightArrow className="inline-block float-right mx-2 my-2 stroke-current stroke-0 text-black h-4 w-4 hp-one:h-6 hp-one:w-6" />
                                        </button>
                                        <hr className="border-b-2 border-gray-200" />
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