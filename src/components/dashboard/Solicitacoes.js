import * as React from 'react';
import Link from '@mui/material/Link';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Title from './Title';
import { Button } from '@mui/material';

const rows = [
  {
    id: 1,
    usuario: 'Ze Mane',
    enderecoRetirada: 'Rua abc',
    enderecoEntrega: 'Avenida 123',
    dimensoes: '190x50x30',
    peso: '12kg',
    valorCobrado: '785',
    status: 'Coletado'
  }
];

function preventDefault(event) {
  event.preventDefault();
}

export default function Solicitaoes() {
  return (
    <React.Fragment>
      <Title>Solicitações de Postagem</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Id</TableCell>
            <TableCell>Usuário</TableCell>
            <TableCell>Endereço Retirada</TableCell>
            <TableCell>Endereço Entrega</TableCell>
            <TableCell>Dimensoes</TableCell>
            <TableCell>Peso</TableCell>
            <TableCell>Valor Cobrado</TableCell>
            <TableCell>Status</TableCell>
            <TableCell>Ações</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.id}</TableCell>
              <TableCell>{row.usuario}</TableCell>
              <TableCell>{row.enderecoRetirada}</TableCell>
              <TableCell>{row.enderecoEntrega}</TableCell>
              <TableCell>{row.dimensoes}</TableCell>
              <TableCell>{row.peso}</TableCell>
              <TableCell>{row.valorCobrado}</TableCell>
              <TableCell>{row.status}</TableCell>
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
