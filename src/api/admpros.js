import axios from 'axios';

const BASE_URL = 'https://mobile.admissionpros.com';
// const API_KEY="";

export default axios.create({
    baseURL: {BASE_URL},
    // headers: {
    //     Authorization: `Bearer ${}`
    // }
})