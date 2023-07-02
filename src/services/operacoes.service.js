import axios from 'axios';

const axiosInstance = axios.create({ baseURL: "https://localhost:7185/api/" });

const obterColetas = async (pagina, itensPorPagina) =>
    axiosInstance.get(`coletas?pagina=${pagina}&itensPorPagina=${itensPorPagina}`)
        .then(response => response.data);

const registrarColeta = async (coleta) =>
    axiosInstance.post(`coletas`, coleta).then(response => response.data);


export { obterColetas, registrarColeta };