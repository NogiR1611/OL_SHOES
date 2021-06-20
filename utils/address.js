import axios from 'axios';
import moment from 'moment';
import crypt from './crypt';

const client = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
    headers : {
        "Content-Type" : "application/json"
    }
});

['get','post','put','patch','delete','options'].forEach( method => {
    const proto = client[method];
    client[method] = (...args) => {
        
        const url = new URL(`http://localhost/${args[0].replace(/^\/+|\/+$/g, '')}`);
        args[0] = encodeURI(args[0]);

        const params = {
            requested_at: moment().format('YYYY-MM-DD HH:mm:ss')
        };

        url.searchParams.forEach((value,key) => {
            params[key] = value;   
        })

        args[0] = `${url.pathname}?signature=${crypt.encrypt(params)}`

        return proto(...args)
    }
});

export default client; 