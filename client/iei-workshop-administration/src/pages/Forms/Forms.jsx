import React from 'react';
import Layout from '../../Layout';
import {useForm} from 'react-hook-form';
import {TextField,Button, Box, Radio,RadioGroup,FormControlLabel,FormLabel,FormControl} from '@mui/material';
import { makeStyles } from '@mui/styles';
import { useLocation } from 'react-router-dom';
import './Forms.css'
import axios from 'axios'

const useStyles = makeStyles({
    center: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '120vh',
    },
  });

export function Forms() {
    const {state} = useLocation(),
    userLogged = state.user,
    sendingUser = {state:{user:userLogged}}
    const classes = useStyles();
    const {register,handleSubmit} = useForm();

    const onSubmit = async(data)=>{
        //const response = await axios.post('http://localhost:3001/forms/login', data);
        console.log(data);
    }
    return (
        <Layout>
            <br/>
            <h1>Registro para Supervisión de Talleres Vocacionales</h1>
            <br/>
            <br/>
            <br/>
            
            <center>
                
                <div >
                    <Box
                        sx={{
                            '& > :not(style)': { m: 1, width: '100ch' },
                            top:'50%',
                            
                            

                        }}
                        noValidate
                        autoComplete="off"
                    >
                        <form onSubmit={handleSubmit(onSubmit)} className='workshop-form'>
                            <div className="form-grid">                                
                                <TextField sx={{width:{md: "49%"}}} id="formDate" variant="outlined"
                                    label="Fecha de Evaluación" 
                                    type = "date"
                                    required
                                    inputProps={{ maxLength: 100 }}
                                    {...register('formDate',{required : false})}
                                />

                                <TextField sx={{width:{md: "49%"}}} id="teacher" variant="outlined"
                                    label="Profesor a cargo" 
                                    type = "text"
                                    required
                                    inputProps={{ maxLength: 100 }}
                                    {...register('teacher',{required : false})}
                                />

                                <TextField sx={{width:{md: "49%"}}} id="partner" variant="outlined"
                                    label="Persona encargada que acompaña" 
                                    type = "text"
                                    required
                                    inputProps={{ maxLength: 100 }}
                                    {...register('partner',{required : false})}
                                />

                                <TextField sx={{width:{md: "49%"}}} id="participants" variant="outlined"
                                    label="Cantidad de Participantes" 
                                    type = "number"
                                    required
                                    inputProps={{ maxLength: 100 }}
                                    {...register('participantsAmount',{required : false})}
                                />
                                <TextField sx={{width:{md: "100%"}}} id="participantsNames"  variant="outlined" 
                                    required 
                                    multiline 
                                    rows={6}
                                    label="Nombre de los participantes"
                                    {...register('participantsList',{required : false})}
                                />                                            
                                <h5>1-Evaluación sobre el desempeño del profesor:</h5>            
                                <FormControl>
                                    <FormLabel id="demo-row-radio-buttons-group-label">Brinda indicaciones claras.</FormLabel>
                                    <RadioGroup
                                        row
                                        aria-labelledby="demo-row-radio-buttons-group-label"
                                        name="row-radio-buttons-group"
                                        {...register('clearInstructions',{required : false})}
                                    >
                                        <FormControlLabel value='1' control={<Radio />} label="1" />
                                        <FormControlLabel value='2' control={<Radio />} label="2" />
                                        <FormControlLabel value='3' control={<Radio />} label="3" />
                                        
                                    </RadioGroup>
                                    
                                </FormControl>
                                
                                {/*
                                <FormControl>
                                <FormLabel id="demo-row-radio-buttons-group-label">Relación de respeto y autoridad con los estudiantes.</FormLabel>
                                    <RadioGroup
                                        row
                                        aria-labelledby="demo-row-radio-buttons-group-label"
                                        name="row-radio-buttons-group"
                                        {...register('respectAuthority',{required : false})}
                                    >
                                        <FormControlLabel value="1" control={<Radio />} label="1" />
                                        <FormControlLabel value="2" control={<Radio />} label="2" />
                                        <FormControlLabel value="3" control={<Radio />} label="3" />
                                        
                                    </RadioGroup> 
                                </FormControl>
                                <FormControl> 
                                <FormLabel id="demo-row-radio-buttons-group-label">Establecimiento de normas y límites claros dentro del taller</FormLabel>
                                    <RadioGroup
                                        row
                                        aria-labelledby="demo-row-radio-buttons-group-label"
                                        name="row-radio-buttons-group"
                                        {...register('rulesLimits',{required : false})}
                                    >
                                        <FormControlLabel value="1" control={<Radio />} label="1" />
                                        <FormControlLabel value="2" control={<Radio />} label="2" />
                                        <FormControlLabel value="3" control={<Radio />} label="3" />
                                        
                                    </RadioGroup> 
                                </FormControl>
                                <FormControl> 
                                <FormLabel id="demo-row-radio-buttons-group-label">Promueve la participación activa y el uso adecuado del equipo de los estudiantes.</FormLabel>
                                    <RadioGroup
                                        row
                                        aria-labelledby="demo-row-radio-buttons-group-label"
                                        name="row-radio-buttons-group"
                                        {...register('activeParticipation',{required : false})}
                                    >
                                        <FormControlLabel value="1" control={<Radio />} label="1" />
                                        <FormControlLabel value="2" control={<Radio />} label="2" />
                                        <FormControlLabel value="3" control={<Radio />} label="3" />
                                        
                                    </RadioGroup>
                                </FormControl>  
                                <FormControl>
                                <FormLabel id="demo-row-radio-buttons-group-label">Promueve un ambiente positivo para el aprendizaje.</FormLabel>
                                    <RadioGroup
                                        row
                                        aria-labelledby="demo-row-radio-buttons-group-label"
                                        name="row-radio-buttons-group"
                                        {...register('positiveEnvironment',{required : false})}
                                    >
                                        <FormControlLabel value="1" control={<Radio />} label="1" />
                                        <FormControlLabel value="2" control={<Radio />} label="2" />
                                        <FormControlLabel value="3" control={<Radio />} label="3" />
                                        
                                    </RadioGroup>
                                </FormControl>
                                
                                <FormControl>
                                <FormLabel id="demo-row-radio-buttons-group-label">Explica, acompaña y guía de manera positiva durante el taller.</FormLabel>
                                    <RadioGroup
                                        row
                                        aria-labelledby="demo-row-radio-buttons-group-label"
                                        name="row-radio-buttons-group"
                                        {...register('positiveGuidance',{required : false})}
                                    >
                                        <FormControlLabel value="1" control={<Radio />} label="1" />
                                        <FormControlLabel value="2" control={<Radio />} label="2" />
                                        <FormControlLabel value="3" control={<Radio />} label="3" />
                                        
                                    </RadioGroup>                                       
                                </FormControl>
                                <TextField sx={{width:{md: "100%"}}} id="firstObservations"  variant="outlined" 
                                    required 
                                    multiline 
                                    rows={6}
                                    label="Observaciones"
                                    {...register('performanceNotes',{required : false})}
                                /> 
                                <h5>2-Evaluación del desempeño conductual de los estudiantes:</h5>
                                <FormControl>                                
                                    <FormLabel id="demo-row-radio-buttons-group-label">Seguimiento de indicaciones y cumplimiento de normas del taller.</FormLabel>
                                    <RadioGroup
                                        row
                                        aria-labelledby="demo-row-radio-buttons-group-label"
                                        name="row-radio-buttons-group"
                                        {...register('followInstructions',{required : false})}
                                    >
                                        <FormControlLabel value="1" control={<Radio />} label="1" />
                                        <FormControlLabel value="2" control={<Radio />} label="2" />
                                        <FormControlLabel value="3" control={<Radio />} label="3" />
                                        
                                    </RadioGroup>
                                </FormControl>
                                <FormControl>
                                <FormLabel id="demo-row-radio-buttons-group-label">Trato respetuoso con el docente y compañeros.</FormLabel>
                                    <RadioGroup
                                        row
                                        aria-labelledby="demo-row-radio-buttons-group-label"
                                        name="row-radio-buttons-group"
                                        {...register('respectfulTreat',{required : false})}
                                    >
                                        <FormControlLabel value="1" control={<Radio />} label="1" />
                                        <FormControlLabel value="2" control={<Radio />} label="2" />
                                        <FormControlLabel value="3" control={<Radio />} label="3" />
                                        
                                    </RadioGroup> 
                                </FormControl>
                                <FormControl> 
                                <FormLabel id="demo-row-radio-buttons-group-label">Convivencia positiva.</FormLabel>
                                    <RadioGroup
                                        row
                                        aria-labelledby="demo-row-radio-buttons-group-label"
                                        name="row-radio-buttons-group"
                                        {...register('positiveCoexistence',{required : false})}
                                    >
                                        <FormControlLabel value="1" control={<Radio />} label="1" />
                                        <FormControlLabel value="2" control={<Radio />} label="2" />
                                        <FormControlLabel value="3" control={<Radio />} label="3" />
                                        
                                    </RadioGroup> 
                                </FormControl>
                                <FormControl> 
                                <FormLabel id="demo-row-radio-buttons-group-label">Interés y participación activa.</FormLabel>
                                    <RadioGroup
                                        row
                                        aria-labelledby="demo-row-radio-buttons-group-label"
                                        name="row-radio-buttons-group"
                                        {...register('interestParticipation',{required : false})}
                                    >
                                        <FormControlLabel value="1" control={<Radio />} label="1" />
                                        <FormControlLabel value="2" control={<Radio />} label="2" />
                                        <FormControlLabel value="3" control={<Radio />} label="3" />
                                        
                                    </RadioGroup>
                                </FormControl>  
                                <FormControl>
                                <FormLabel id="demo-row-radio-buttons-group-label">Presentacion y aseo personal.</FormLabel>
                                    <RadioGroup
                                        row
                                        aria-labelledby="demo-row-radio-buttons-group-label"
                                        name="row-radio-buttons-group"
                                        {...register('cleanPresentation',{required : false})}
                                    >
                                        <FormControlLabel value="1" control={<Radio />} label="1" />
                                        <FormControlLabel value="2" control={<Radio />} label="2" />
                                        <FormControlLabel value="3" control={<Radio />} label="3" />
                                        
                                    </RadioGroup>
                                </FormControl>
                                
                                <FormControl>
                                <FormLabel id="demo-row-radio-buttons-group-label">Uso adecuado y cuido de equipo, herramientas y materiales.</FormLabel>
                                    <RadioGroup
                                        row
                                        aria-labelledby="demo-row-radio-buttons-group-label"
                                        name="row-radio-buttons-group"
                                        {...register('toolCorrectUsage',{required : false})}
                                    >
                                        <FormControlLabel value="1" control={<Radio />} label="1" />
                                        <FormControlLabel value="2" control={<Radio />} label="2" />
                                        <FormControlLabel value="3" control={<Radio />} label="3" />
                                        
                                    </RadioGroup>                                       
                                </FormControl>
                                <TextField sx={{width:{md: "100%"}}} id="secondObservations"  variant="outlined" 
                                    required 
                                    multiline 
                                    rows={6}
                                    label="Observaciones"
                                    {...register('behavioralNotes',{required : false})}
                                />
                                <h5>3-Evaluación del rendimiento ocupacional de los estudiantes:</h5>

                                <FormControl>
                                <FormLabel id="demo-row-radio-buttons-group-label">Los temas vistos en el taller contribuyen a la formación técnica de los estudiantes.</FormLabel>
                                    <RadioGroup
                                        row
                                        aria-labelledby="demo-row-radio-buttons-group-label"
                                        name="row-radio-buttons-group"
                                        {...register('technicalFormation',{required : false})}
                                    >
                                        <FormControlLabel value="1" control={<Radio />} label="1" />
                                        <FormControlLabel value="2" control={<Radio />} label="2" />
                                        <FormControlLabel value="3" control={<Radio />} label="3" />
                                        
                                    </RadioGroup>
                                </FormControl>
                                <FormControl>
                                <FormLabel id="demo-row-radio-buttons-group-label">Los temas vistos coinciden con los objetivos del taller.</FormLabel>
                                    <RadioGroup
                                        row
                                        aria-labelledby="demo-row-radio-buttons-group-label"
                                        name="row-radio-buttons-group"
                                        {...register('topicsMatch',{required : false})}
                                    >
                                        <FormControlLabel value="1" control={<Radio />} label="1" />
                                        <FormControlLabel value="2" control={<Radio />} label="2" />
                                        <FormControlLabel value="3" control={<Radio />} label="3" />
                                        
                                    </RadioGroup>                                       
                                </FormControl>
                                <TextField sx={{width:{md: "100%"}}} id="topics"  variant="outlined" 
                                    required 
                                    multiline 
                                    rows={6}
                                    label="Escriba los temas y las habilidades técnicas vistas en el taller (consultar al profesor)"
                                    {...register('ocupationNotes',{required : false})}
                                />
                                <h5>4-Evaluación de habilidades blandas y sociales de los estudiantes durante el taller.</h5>
                                <FormControl>
                                <FormLabel id="demo-row-radio-buttons-group-label">Perseverancia: trata de hacer las cosas bien, no se rinde ante los obstaculos</FormLabel>
                                    <RadioGroup
                                        row
                                        aria-labelledby="demo-row-radio-buttons-group-label"
                                        name="row-radio-buttons-group"
                                        {...register('perseverance',{required : false})}
                                    >
                                        <FormControlLabel value="0" control={<Radio />} label="0" />
                                        <FormControlLabel value="1" control={<Radio />} label="1" />
                                        <FormControlLabel value="2" control={<Radio />} label="2" />
                                        <FormControlLabel value="3" control={<Radio />} label="3" />
                                    </RadioGroup>                                       
                                </FormControl>
                                <FormControl>
                                <FormLabel id="demo-row-radio-buttons-group-label">Comunicacion asertiva</FormLabel>
                                    <RadioGroup
                                        row
                                        aria-labelledby="demo-row-radio-buttons-group-label"
                                        name="row-radio-buttons-group"
                                        {...register('asertiveCommunication',{required : false})}
                                    >
                                        <FormControlLabel value="0" control={<Radio />} label="0" />
                                        <FormControlLabel value="1" control={<Radio />} label="1" />
                                        <FormControlLabel value="2" control={<Radio />} label="2" />
                                        <FormControlLabel value="3" control={<Radio />} label="3" />
                                    </RadioGroup>                                       
                                </FormControl>
                                <FormControl>
                                <FormLabel id="demo-row-radio-buttons-group-label">Responsabilidad</FormLabel>
                                    <RadioGroup
                                        row
                                        aria-labelledby="demo-row-radio-buttons-group-label"
                                        name="row-radio-buttons-group"
                                        {...register('responsability',{required : false})}
                                    >
                                        <FormControlLabel value="0" control={<Radio />} label="0" />
                                        <FormControlLabel value="1" control={<Radio />} label="1" />
                                        <FormControlLabel value="2" control={<Radio />} label="2" />
                                        <FormControlLabel value="3" control={<Radio />} label="3" />
                                    </RadioGroup>                                       
                                </FormControl>
                                <FormControl>
                                <FormLabel id="demo-row-radio-buttons-group-label">Actitud positiva hacia el aprendizaje</FormLabel>
                                    <RadioGroup
                                        row
                                        aria-labelledby="demo-row-radio-buttons-group-label"
                                        name="row-radio-buttons-group"
                                        {...register('positiveActitude',{required : false})}
                                    >
                                        <FormControlLabel value="0" control={<Radio />} label="0" />
                                        <FormControlLabel value="1" control={<Radio />} label="1" />
                                        <FormControlLabel value="2" control={<Radio />} label="2" />
                                        <FormControlLabel value="3" control={<Radio />} label="3" />
                                    </RadioGroup>                                       
                                </FormControl>
                                <FormControl>
                                <FormLabel id="demo-row-radio-buttons-group-label">Manejo de frustracion y estres</FormLabel>
                                    <RadioGroup
                                        row
                                        aria-labelledby="demo-row-radio-buttons-group-label"
                                        name="row-radio-buttons-group"
                                        {...register('managesFrustration',{required : false})}
                                    >
                                        <FormControlLabel value="0" control={<Radio />} label="0" />
                                        <FormControlLabel value="1" control={<Radio />} label="1" />
                                        <FormControlLabel value="2" control={<Radio />} label="2" />
                                        <FormControlLabel value="3" control={<Radio />} label="3" />
                                    </RadioGroup>                                       
                                </FormControl>           
                                <FormControl>
                                <FormLabel id="demo-row-radio-buttons-group-label">Iniciativa y proactividad</FormLabel>
                                    <RadioGroup
                                        row
                                        aria-labelledby="demo-row-radio-buttons-group-label"
                                        name="row-radio-buttons-group"
                                        {...register('proactivity',{required : false})}
                                    >
                                        <FormControlLabel value="0" control={<Radio />} label="0" />
                                        <FormControlLabel value="1" control={<Radio />} label="1" />
                                        <FormControlLabel value="2" control={<Radio />} label="2" />
                                        <FormControlLabel value="3" control={<Radio />} label="3" />
                                    </RadioGroup>                                       
                                </FormControl>        
                                <FormControl>
                                <FormLabel id="demo-row-radio-buttons-group-label">Valora su trabajo</FormLabel>
                                    <RadioGroup
                                        row
                                        aria-labelledby="demo-row-radio-buttons-group-label"
                                        name="row-radio-buttons-group"
                                        {...register('valuesWork',{required : false})}
                                    >
                                        <FormControlLabel value="0" control={<Radio />} label="0" />
                                        <FormControlLabel value="1" control={<Radio />} label="1" />
                                        <FormControlLabel value="2" control={<Radio />} label="2" />
                                        <FormControlLabel value="3" control={<Radio />} label="3" />
                                    </RadioGroup>                                       
                                </FormControl> 
                                <FormControl>
                                <FormLabel id="demo-row-radio-buttons-group-label">Manifiesta autonomia</FormLabel>
                                    <RadioGroup
                                        row
                                        aria-labelledby="demo-row-radio-buttons-group-label"
                                        name="row-radio-buttons-group"
                                        {...register('manifestsAutonomy',{required : false})}
                                    >
                                        <FormControlLabel value="0" control={<Radio />} label="0" />
                                        <FormControlLabel value="1" control={<Radio />} label="1" />
                                        <FormControlLabel value="2" control={<Radio />} label="2" />
                                        <FormControlLabel value="3" control={<Radio />} label="3" />
                                    </RadioGroup>                                       
                                </FormControl> 
                                <FormControl>
                                <FormLabel id="demo-row-radio-buttons-group-label">Manifiesta seguridad en el trabajo</FormLabel>
                                    <RadioGroup
                                        row
                                        aria-labelledby="demo-row-radio-buttons-group-label"
                                        name="row-radio-buttons-group"
                                        {...register('workSecurity',{required : false})}
                                    >
                                        <FormControlLabel value="0" control={<Radio />} label="0" />
                                        <FormControlLabel value="1" control={<Radio />} label="1" />
                                        <FormControlLabel value="2" control={<Radio />} label="2" />
                                        <FormControlLabel value="3" control={<Radio />} label="3" />
                                    </RadioGroup>                                       
                                </FormControl> 
                                <FormControl>
                                <FormLabel id="demo-row-radio-buttons-group-label">Manifiesta interes por el trabajo</FormLabel>
                                    <RadioGroup
                                        row
                                        aria-labelledby="demo-row-radio-buttons-group-label"
                                        name="row-radio-buttons-group"
                                        {...register('manifestInterest',{required : false})}
                                    >
                                        <FormControlLabel value="0" control={<Radio />} label="0" />
                                        <FormControlLabel value="1" control={<Radio />} label="1" />
                                        <FormControlLabel value="2" control={<Radio />} label="2" />
                                        <FormControlLabel value="3" control={<Radio />} label="3" />
                                    </RadioGroup>                                       
                                </FormControl> 
                                <FormControl>
                                <FormLabel id="demo-row-radio-buttons-group-label">Respeto, cortesia y convivencia</FormLabel>
                                    <RadioGroup
                                        row
                                        aria-labelledby="demo-row-radio-buttons-group-label"
                                        name="row-radio-buttons-group"
                                        {...register('convivence',{required : false})}
                                    >
                                        <FormControlLabel value="0" control={<Radio />} label="0" />
                                        <FormControlLabel value="1" control={<Radio />} label="1" />
                                        <FormControlLabel value="2" control={<Radio />} label="2" />
                                        <FormControlLabel value="3" control={<Radio />} label="3" />
                                    </RadioGroup>                                       
                                </FormControl> 
                                <FormControl>
                                <FormLabel id="demo-row-radio-buttons-group-label">Trabajo en equipo y cooperacion</FormLabel>
                                    <RadioGroup
                                        row
                                        aria-labelledby="demo-row-radio-buttons-group-label"
                                        name="row-radio-buttons-group"
                                        {...register('teamwork',{required : false})}
                                    >
                                        <FormControlLabel value="0" control={<Radio />} label="0" />
                                        <FormControlLabel value="1" control={<Radio />} label="1" />
                                        <FormControlLabel value="2" control={<Radio />} label="2" />
                                        <FormControlLabel value="3" control={<Radio />} label="3" />
                                    </RadioGroup>                                       
                                </FormControl> 
                                <FormControl>
                                <FormLabel id="demo-row-radio-buttons-group-label">Creatividad e innovacion</FormLabel>
                                    <RadioGroup
                                        row
                                        aria-labelledby="demo-row-radio-buttons-group-label"
                                        name="row-radio-buttons-group"
                                        {...register('creativity',{required : false})}
                                    >
                                        <FormControlLabel value="0" control={<Radio />} label="0" />
                                        <FormControlLabel value="1" control={<Radio />} label="1" />
                                        <FormControlLabel value="2" control={<Radio />} label="2" />
                                        <FormControlLabel value="3" control={<Radio />} label="3" />
                                    </RadioGroup>                                       
                                </FormControl> 
                                <TextField sx={{width:{md: "100%"}}} id="thirdObservations"  variant="outlined" 
                                    required 
                                    multiline 
                                    rows={6}
                                    label="Observaciones"
                                    {...register('softSkillsNotes',{required : false})}
                                />
                            */}
                            </div>

                        <Button
                            type="submit" 
                            size="large"
                            color="success"
                            variant="outlined"
                            >
                                Enviar Evaluación    
                        </Button>
                        </form>
                        
                    </Box>
                    
                </div>
            </center>
            
            </Layout>
        
    );
}
