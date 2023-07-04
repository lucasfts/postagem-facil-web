import axios from 'axios';

const axiosInstance = axios.create({ baseURL: process.env.REACT_APP_OPERACOES_API });

const obterColetas = async (pagina, itensPorPagina) =>
    axiosInstance.get(`coletas?pagina=${pagina}&itensPorPagina=${itensPorPagina}`)
        .then(response => response.data);

const registrarColeta = async (coleta) =>
    axiosInstance.post(`coletas`, coleta).then(response => response.data);


export { obterColetas, registrarColeta };