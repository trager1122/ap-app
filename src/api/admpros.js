import axios from 'axios';
const BASE_URL = 'https://mobile.admissionpros.com/api/demo';
import { token } from '../../../ap-app/token';

export default axios.create({
    baseURL: BASE_URL,
    headers: {
        Authorization: `Bearer ${token}`
    }
})