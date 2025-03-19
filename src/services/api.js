import axios from 'axios';

// Arquivo responsável pela comunicação com o backend através do axios
export const api = axios.create({
    baseURL: 'http://localhost:5433' 
})
