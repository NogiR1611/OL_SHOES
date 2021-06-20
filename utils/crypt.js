const encryption = require('laravel-encryption');

const crypt = new encryption.Encrypter(process.env.REACT_APP_KEY, 'AES-256-CBC');

export default crypt;