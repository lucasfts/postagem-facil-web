import React, { useState } from 'react';
import Alert from '@mui/material/Alert';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Title from './Title';
import { useNavigate } from 'react-router-dom';
import { registrarColeta } from '../../services/operacoes.service';

const style = {
    position: 'absolute',
    top: '25vh',
    left: '25vw',
    width: '50vw',
    padding: '20px',
    backgroundColor: 'white',
    border: 'none',
    boxShadow: 24
};


const ModalColeta = ({ solicitacao, onClose }) => {
    const navigate = useNavigate();
    const [alerta, setAlerta] = useState(null);
    const [open, setOpen] = useState(true);
    const [coleta, setColeta] = useState({ solicitacaoId: solicitacao.id });

    const handleClose = () => {
        setOpen(false);
        onClose();
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(coleta);

        registrarColeta(coleta)
            .then(() => {
                navigate('/coletas', { state: { alerta: { severity: "success", text: "Coleta registrada com sucesso!" } } });
            })
            .catch((err) => {
                setAlerta(<Alert variant="filled" severity="error" onClose={() => setAlerta(null)}>
                    Ocorreu um erro ao registrar a coleta! Tente novamente mais tarde!
                </Alert>);
                console.log(err);
            });
    };

    return (
        <Modal open={open} onClose={handleClose} >
            <Box style={style}>
                <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
                    {alerta && <Stack my={3} >{alerta}</Stack>}
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <Title>Id Solicitação: {solicitacao.id}</Title>
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                required
                                fullWidth
                                id="responsavelId"
                                label="Id Responsavel"
                                name="responsavelId"
                                type='number'
                                onChange={e => setColeta({ ...coleta, responsavelId: e.target.value })}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                required
                                fullWidth
                                multiline
                                minRows={3}
                                maxRows={10}
                                name="observacao"
                                label="Observação"
                                id="observacao"
                                onChange={e => setColeta({ ...coleta, observacao: e.target.value })}
                            />
                        </Grid>
                    </Grid>
                    <Button disabled={!coleta.responsavelId} type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
                        Registrar Coleta
                    </Button>
                </Box>
            </Box>
        </Modal >
    );
}

export default ModalColeta;