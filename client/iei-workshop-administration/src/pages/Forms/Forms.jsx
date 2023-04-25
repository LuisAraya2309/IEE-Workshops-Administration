import React from 'react';
import Layout from '../../Layout';
import {useForm} from 'react-hook-form';
import {TextField, Box, InputLabel} from '@mui/material';
import { makeStyles } from '@mui/styles';
import { Carousel, Form, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';

const useStyles = makeStyles({
    center: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '120vh',
    },
  });

export function Forms() {
    const classes = useStyles();
    const {register,handleSubmit} = useForm();
    const onSubmit = async(data)=>{
        console.log("Send form")
    }
    return (
        <Layout>
            <br/>
            <h1>Registro para Supervisión de Talleres Vocacionales</h1>
            <br/>
            <center>
                
                <div className={classes.center}>
                    <Box
                        sx={{
                            '& > :not(style)': { m: 1, width: '100ch' },
                            top:'50%',
                            transform : 'translateY(-50%)'

                        }}
                        noValidate
                        autoComplete="off"
                    >
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="form-grid">                                
                                <TextField sx={{width:{md: "49%"}}} id="formDate" variant="outlined"
                                    label="Fecha de Evaluación" 
                                    type = "date"
                                    required
                                    inputProps={{ maxLength: 100 }}
                                    {...register('formDate',{required : true})}
                                />

                                <TextField sx={{width:{md: "49%"}}} id="teacher" variant="outlined"
                                    label="Profesor a cargo" 
                                    type = "text"
                                    required
                                    inputProps={{ maxLength: 100 }}
                                    {...register('teacher',{required : true})}
                                />

                                <TextField sx={{width:{md: "49%"}}} id="partner" variant="outlined"
                                    label="Persona encargada que acompaña" 
                                    type = "text"
                                    required
                                    inputProps={{ maxLength: 100 }}
                                    {...register('partner',{required : true})}
                                />

                                <TextField sx={{width:{md: "49%"}}} id="participants" variant="outlined"
                                    label="Cantidad de Participantes" 
                                    type = "number"
                                    required
                                    inputProps={{ maxLength: 100 }}
                                    {...register('participants',{required : true})}
                                />
                                <TextField sx={{width:{md: "100%"}}} id="participantsNames"  variant="outlined" 
                                    required 
                                    multiline 
                                    rows={6}
                                    label="Nombre de los participantes"
                                    {...register('participantsNames',{required : true})}
                                />                                            
                                                
                            </div>

                            
                        </form>
                    </Box>
                </div>
            </center>
            
        </Layout>
        
    );
}
