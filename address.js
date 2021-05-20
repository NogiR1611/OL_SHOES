import axios from 'axios';

const address = axios.create({
    baseURL: 'https://api.tokotalk.com/v1/no_auth/ongkir'
});

export default address; 