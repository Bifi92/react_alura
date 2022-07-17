import React, {useState} from 'react';
import {Button, TextField, Switch, FormControlLabel} from "@mui/material"

function FormularioCadastro({aoEnviar, validarCPF}){
    const [nome, setNome] = useState("");
    const [sobrenome, setSobrenome] = useState("");
    const [cpf, setCpf] = useState("");
    const [promocoes, setPromocoes] = useState(true);
    const [novidades, setNovidades] = useState(true);
    const [erros, setErros] = useState({cpf:{valido:true, texto:""}});

    return (
        <form
            onSubmit={(event)=>{
                event.preventDefault();
                aoEnviar({nome, sobrenome, cpf, novidades, promocoes});
            }}>
            <TextField 
                value = {nome}
                onChange={(event) => setNome(event.target.value) }
                id='nome' 
                label='Nome'
                variant='outlined' 
                margin='normal' 
                fullWidth
            />
            
            <TextField 
                value={sobrenome}
                onChange={(event) => setSobrenome(event.target.value) }
                id='sobrenome' 
                label='Sobrenome' 
                variant='outlined' 
                margin='normal'
                fullWidth
            />

            <TextField 
                
                value={cpf}
                onChange={
                    (event) => {
                        setCpf(event.target.value);
                    }
                }
                onBlur={
                    (event) =>{
                        const ehValido = validarCPF(cpf);
                        console.log(ehValido);
                        setErros(
                            {
                                cpf:ehValido
                            }
                        );
                    }
                }
                helperText={erros.cpf.texto}
                error={!erros.cpf.valido}
                id='cpf' 
                label='CPF' 
                variant='outlined' 
                margin='normal' 
                fullWidth
            />
            <FormControlLabel
                control={
                            <Switch 
                                checked={promocoes}
                                onChange={(event) => setPromocoes(event.target.checked) }
                                name='promoções'
                                color='primary'
                            />
                        }
                label='Promoções'
            />

            <FormControlLabel 
                control={
                            <Switch
                                checked={novidades}
                                onChange={(event) => setNovidades(event.target.checked) }
                                name='novidades'
                                color='primary'
                            />
                        }
                label='Novidades'
            />
           
            <Button type='submit' variant='contained' color='primary' disabled={!erros.cpf.valido}>Cadastrar</Button>
        </form>
    );
}

export default FormularioCadastro ;