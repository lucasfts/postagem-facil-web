import React, { useState, useEffect }  from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Title from './components/Title';
import { Button } from '@mui/material';
import { obterSolicitacoes } from '../services/solicitacoes.service';

const Solicitaoes = () => {
  const [solicitacoes, setSolicitacoes] = useState([]);

  useEffect(() => {
    obterSolicitacoes(1, 100).then(setSolicitacoes);
  }, []);

  return (
    <React.Fragment>
      <Title>Solicitações de Postagem</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Id</TableCell>
            <TableCell>Transportadora</TableCell>
            <TableCell>Peso</TableCell>
            <TableCell>Dimensoes</TableCell>
            <TableCell>Valor Cobrado</TableCell>
            <TableCell>Endereço Coleta</TableCell>
            <TableCell>Status</TableCell>
            <TableCell>Ações</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {solicitacoes.map(solicitacao => (
            <TableRow key={solicitacao.id}>
              <TableCell>{solicitacao.id}</TableCell>
              <TableCell>{solicitacao.transportadora.nome}</TableCell>
              <TableCell>{solicitacao.pesoLimite.descricao}</TableCell>
              <TableCell>{solicitacao.tipoCaixa.descricao}</TableCell>
              <TableCell>R$ {solicitacao.custo.toFixed(2)}</TableCell>
              <TableCell>{solicitacao.endereco}</TableCell>
              <TableCell>{solicitacao.status.descricao}</TableCell>
              <TableCell>
                <Button>Alterar</Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </React.Fragment>
  );
}

export default Solicitaoes;