import React from 'react';
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import ArrowLeft from './../../../assets/images/icons/arrowLeft.svg';
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
            detailAddress: '',
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
                    closeIcon={<ArrowLeft className="bg-gray-lighter-4 hover:bg-gray-lighter-5 transition duration-300 ease-in-out rounded-full stroke-current stroke-0 focus:outline-none text-black transform scale-100 h-8 w-8 p-1 flex justify-center" />}
                    center
                >
                    <div className="bg-gray-lighter w-full h-9/10 md:w-480 items-center">
                        <div className="md:h-9 md:w-480" />
                        <div className="flex justify-center md:hidden">
                            <div className="bg-gray-lighter-6 mx-auto h-1 w-20 absolute top-1 rounded-sm" />
                        </div>
                        <div className="w-full px-6 pt-4 pb-2">
                            <p className="text-lg font-bold text-gray-800">Informasi Pengiriman</p>
                        </div>
                        <div className="w-full px-6">
                            <div className="flex flex-col">
                                <div className="flex flex-auto">
                                    <div className="block relative bg-gray-lighter-7 border-b-2 w-full border-gray-lighter-9 focus-within:border-red-darker-1 rounded-t-lg">
                                        <input
                                            type="text" 
                                            id="name" 
                                            name="name" 
                                            placeholder=" " 
                                            className="block w-full appearance-none focus:outline-none pt-4 pl-4 bg-transparent" 
                                        />
                                        <label for="name" class="absolute top-3 transition duration-300 ease-in-out text-gray-lighter-3 font-medium">Nama Lengkap Penerima*</label>
                                    </div>
                                </div>
                                <div className="flex flex-grow px-3 pb-2 mt-2">
                                </div>
                            </div>
                            <div className="flex flex-col">
                                <div className="flex flex-auto">
                                    <div className="block relative bg-gray-lighter-7 border-b-2 w-full border-gray-lighter-9 focus-within:border-red-darker-1 rounded-t-lg">
                                        <input
                                            type="text" 
                                            id="number" 
                                            name="number" 
                                            placeholder=" " 
                                            className="block w-full appearance-none focus:outline-none pt-4 pl-4 bg-transparent" 
                                        />
                                        <label for="number" class="absolute top-3 transition duration-300 ease-in-out text-gray-lighter-3 font-medium">Nomor HP Penerima*</label>
                                    </div>
                                </div>
                                <div className="flex flex-grow px-3 pb-2 mt-2">
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
                                            onChange={this.clickAddress}
                                            placeholder=" " 
                                            className="block w-full appearance-none focus:outline-none pt-4 pl-4 bg-transparent" 
                                        />
                                        <label for="address" class="absolute top-3 transition duration-300 ease-in-out text-gray-lighter-3 font-medium">Alamat Penerima*</label>
                                    </div>
                                </div>
                                <div className="flex flex-grow px-3 pb-2 mt-2">
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
                                                placeholder=" " 
                                                className="block w-full appearance-none focus:outline-none bg-transparent pt-4 pl-4"
                                            />
                                            <label for="detailAddress" class="absolute top-3 transition duration-300 ease-in-out text-gray-lighter-3 font-medium">Alamat Lengkap Penerima*</label>
                                        </div>
                                    </div>
                                    <div className="flex flex-grow px-3 pb-2 mt-2">
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
                                            className="block w-full appearance-none focus:outline-none pt-4 pl-4 bg-transparent" 
                                        />
                                        <label for="email" class="absolute top-3 transition duration-300 ease-in-out text-gray-lighter-3 font-medium">Email Penerima(Opsional)</label>
                                    </div>
                                </div>
                                <div className="flex flex-grow px-3 pb-2 mt-2">
                                </div>
                            </div> 
                        <p className="mt-6 text-black-darker text-sm md:text-base">
                            Saya sudah membaca dan menyetujui<span> </span>
                            <a target="_blank"  href='/terms-and-conditions'>
                                <span className="text-red-darker-1 underline mx-auto">Syarat & Ketentuan</span>
                            </a>
                        </p>
                    </div>
                    <div className="py-2 px-4">
                        <button
                            onClick={this.props.shipmentModal}
                            className="w-full text-center h-12 font-bold bg-red-darker-1 text-white rounded-md hover:opacity-90 active:bg-opacity-50 active:bg-red-darker-1 text-medium text-sm focus:outline-none transition duration-300 ease-in-out"
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
                closeIcon={<ArrowLeft className="bg-gray-lighter-4 hover:bg-gray-lighter-5 transition duration-300 ease-in-out rounded-full stroke-current stroke-0 focus:outline-none text-black transform scale-100 h-8 w-8 p-1 flex justify-center" />}
                center
            >
                <div className="bg-gray-lighter w-full md:w-480 items-center">
                    <div className="flex justify-center md:hidden">
                        <div className="bg-gray-lighter-6 mx-auto h-1 w-20 absolute top-1 rounded-sm" />
                    </div>
                    <div className="md:h-9 md:w-480" />
                    <div className="py-4 px-6">  
                        <p className="text-xl text-gray-800 font-semibold py-1">1.Pilih Provinsi</p>
                        <p className="text-gray-800 py-1 mb-4">Kemana kamu mau mengirimkan paket?</p>
                        <div className="bg-gray-100 focus:bg-gray-400 w-full px-6 rounded-lg">
                            <input
                                className="inline-block transition duration-400 ease-in-out bg-gray-100 border-b-2 border-gray-400 xl:w-11/12 md:3/12 px-2 outline-none focus:border-red-darker-1"
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
                                <div className="w-full pl-6 font-bold text-gray-800" key={index}>
                                    <button
                                        className="w-full text-left font-bold text-gray-800 py-3 pr-3 focus:outline-none hover:bg-gray-100 transition duration-300 ease-in-out rounded-md"
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
                                        <RightArrow className="inline-block float-right stroke-current stroke-0 text-black" width={24} height={24} />
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
                closeIcon={<ArrowLeft className="bg-gray-lighter-4 hover:bg-gray-lighter-5 transition duration-300 ease-in-out rounded-full stroke-current stroke-0 focus:outline-none text-black transform scale-100 h-8 w-8 p-1 flex justify-center" />}
                center
            >
                <div className="bg-gray-lighter w-full md:w-480 items-center">
                    <div className="flex justify-center md:hidden">
                        <div className="bg-gray-lighter-6 mx-auto h-1 w-20 absolute top-1 rounded-sm" />
                    </div>
                    <div className="w-full md:h-9 md:w-480" />
                    <div className="w-full py-4 px-6">
                        <p className="text-xl text-gray-800 font-semibold py-1">2.Pilih Kota</p>
                        <p className="text-gray-800 py-1">{this.state.provinceName} : </p>
                    </div>
                    <div className="w-full bg-gray-100 focus:bg-gray-400 py-1 rounded-lg">
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
                                <Clear className="inline-block mx-1 float-right" width={15} height={15} />
                            </button> : 
                            <Search className="inline-block mx-2 float-right" width={22} height={22} />
                        }
                    </div>
                        <div className="w-full max-h-96 overflow-y-auto">
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
                                            className="w-full text-left font-bold text-gray-800 py-3 pr-3 focus:outline-none hover:bg-gray-100 transition duration-300 ease-in-out rounded-md"
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
                                            <RightArrow className="inline-block float-right mx-2 my-2 stroke-current stroke-0 text-black" width={24} height={24} />
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
                    closeIcon={<ArrowLeft className="bg-gray-lighter-4 hover:bg-gray-lighter-5 transition duration-300 ease-in-out rounded-full stroke-current stroke-0 focus:outline-none text-black transform scale-100 h-8 w-8 p-1 flex justify-center" />}
                    center
                >
                    <div className="bg-gray-lighter md:w-480 w-full items-center">
                        <div className="flex justify-center md:hidden">
                            <div className="bg-gray-lighter-6 mx-auto h-1 w-20 absolute top-1 rounded-sm" />
                        </div>
                        <div className="md:h-9 md:w-480" />
                        <div className="py-4 px-6">
                            <p className="text-xl text-gray-800 font-semibold py-1">3.Pilih Kecamatan</p>
                            <p className="text-gray-800 py-1">{this.state.provinceName},{this.state.cityName} : </p>
                        </div>
                        <div className="bg-gray-100 focus:bg-gray-400 w-full py-1 rounded-lg">
                            <input
                                className="inline-block transition duration-400 ease-in-out bg-gray-100 border-b-2 border-gray-400 xl:w-10/12 md:3/12 px-2 outline-none focus:border-red-600"
                                type="text"
                                name="product"
                                id="product" 
                                value={this.state.searchDistrict}
                                onChange={ (e) => this.setState({ searchDistrict : e.target.value }) }
                            />
                            {this.state.searchDistrict !== '' ?
                                <button className="focus:outline-none pl-1" onClick={() => this.setState({ searchDistrict : '' }) }>
                                    <Clear className="inline-block float-right mx-1" width={15} height={15} />
                                </button> : 
                                <Search className="inline-block float-right mx-2" width={22} height={22} />
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
                                    <div className="w-full font-bold text-gray-800 pl-6" key={index}>
                                        <button
                                            className="w-full text-left font-bold text-gray-800 py-3 pr-3 focus:outline-none hover:bg-gray-100 transition duration-300 ease-in-out rounded-md"
                                            onClick={() => {
                                                this.setState({
                                                    districtName: element.districtName,
                                                    district: false,
                                                    provinceAndCity:this.state.cityName + ',' + this.state.provinceName
                                                })
                                            }}
                                        >
                                            {element.subdistrict_name}
                                            <RightArrow className="inline-block float-right mx-2 my-2 stroke-current stroke-0 text-black" width={24} height={24} />
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