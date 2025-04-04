import axios from 'axios';

// Arquivo responsável pela comunicação com o backend através do axios
export const api = axios.create({
    baseURL: 'http://localhost:5433' 
})

api.interceptors.request.use((config) => {
    const token = localStorage.getItem('@devburger:token'); // Recupera o token do localStorage

    config.headers.authorization = `Bearer ${token}`; // Adiciona o token no cabeçalho da requisição
    return config; // Retorna a configuração da requisição
}, (error) => {
    return Promise.reject(error);
});
