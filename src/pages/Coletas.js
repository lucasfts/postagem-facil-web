import React, { useState, useEffect } from 'react';
import Alert from '@mui/material/Alert';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Stack from '@mui/material/Stack';
import Title from './components/Title';
import { useLocation } from 'react-router-dom';
import { obterColetas } from '../services/operacoes.service';
import dateFormat from 'dateformat';
import Loading from './components/Loading';

const Coletas = () => {
  const { state } = useLocation();
  const [alerta, setAlerta] = useState(state?.alerta);
  const [coletas, setColetas] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    obterColetas(1, 100)
      .then(setColetas)
      .finally(() => setIsLoading(false));
  }, []);

  return isLoading ? <Loading /> : <React.Fragment>
    {alerta && <Stack my={3} >
      <Alert variant="filled" severity={alerta.severity} onClose={() => setAlerta(null)}>
        {alerta.text}
      </Alert>
    </Stack>}
    <Title>Solicitações Coletadas</Title>
    <Table size="md">
      <TableHead>
        <TableRow>
          <TableCell>Id</TableCell>
          <TableCell>Id Solicitação</TableCell>
          <TableCell>Id Responsável</TableCell>
          <TableCell>Coletado Em</TableCell>
          <TableCell>Obervação</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {coletas.map(coleta => (
          <TableRow key={coleta.id}>
            <TableCell>{coleta.id}</TableCell>
            <TableCell>{coleta.solicitacaoId}</TableCell>
            <TableCell>{coleta.responsavelId}</TableCell>
            <TableCell>{dateFormat(coleta.dataColeta, "dd/mm/yyyy HH:MM:ss")}</TableCell>
            <TableCell>{coleta.observacao}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </React.Fragment>
}

export default Coletas;