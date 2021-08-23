import axios from 'axios';
const BASE_URL = 'https://mobile.admissionpros.com/api/demo';
const token=process.env.TOKEN;

export default axios.create({
    baseURL: {BASE_URL},
    headers: {
        Authorization: `Bearer ${token}`,
        
    }
})