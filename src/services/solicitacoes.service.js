import axios from 'axios';

const axiosInstance = axios.create({ baseURL: process.env.REACT_APP_SOLICITACOES_API });

const obterSolicitacoes = async (pagina, itensPorPagina) =>
    axiosInstance.get(`solicitacoes?pagina=${pagina}&itensPorPagina=${itensPorPagina}`)
        .then(response => response.data);


export { obterSolicitacoes };