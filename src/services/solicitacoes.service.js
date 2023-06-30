import axios from 'axios';

const axiosInstance = axios.create({ baseURL: "https://localhost:7071/api/" });

const obterSolicitacoes = async (pagina, itensPorPagina) =>
    axiosInstance.get(`solicitacoes?pagina=${pagina}&itensPorPagina=${itensPorPagina}`)
        .then(response => response.data);


export { obterSolicitacoes };