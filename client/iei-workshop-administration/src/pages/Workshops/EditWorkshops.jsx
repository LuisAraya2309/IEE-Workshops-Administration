import React, { Fragment, useState,useEffect } from 'react'
import Box from '@mui/material/Box';
import { makeStyles } from '@mui/styles';
import { InputLabel, MenuItem, Select, FormControl,Button,TextField ,Dialog,DialogTitle,DialogActions } from '@mui/material';


import axios from 'axios';
import {useForm} from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
const useStyles = makeStyles({
    center: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
    },
  });



export function EditWorkshops() {

  const classes = useStyles(),
  [workshops, setWorkshops] = useState([]),
  {register,handleSubmit} = useForm(),
  [open,setOpen] = useState(false),
  navigate = useNavigate(),
  [notificationText,setNotificationText] = useState(""),
  onSubmit = async(data)=>{
    try{
      
      const result = await axios.post('http://localhost:3001/workshops/editWorkshop', data);               
      setNotificationText(result.data.message)
      setOpen(true);                
      
      
  }catch(err){
      alert(err)
  }
  },
  handleClose = () => {
    setOpen(false);
    console.log(typeof(notificationText))
    if(notificationText === "Taller actualizado con éxito"){
      navigate('/Workshops')
    }
  };
  useEffect(()=>{
    const workshopOptions = async() => {
      try {
        const response = await axios.get('http://localhost:3001/workshops/getWorkshop')
        
        
        setWorkshops(response.data);
        
      } catch (err) {
        console.error(err);
      }
    };
    workshopOptions();
  },[]);
  return (
    <Fragment>
        
        <h1>Editar Taller Existente</h1>

        <div className={classes.center}>
            <Box

            sx={{
                '& > :not(style)': { m: 1, width: '80ch' },
                top:'50%',
                transform : 'translateY(-50%)'

            }}
            noValidate
            autoComplete="off"
            >
                <form onSubmit={handleSubmit(onSubmit)}>
                    <h2> Seleccione el taller a editar</h2>
                    <FormControl sx={{minWidth: "50%" }}>
                <InputLabel id="discount-client">Taller</InputLabel>
                <Select 
                    labelId="select-client"
                    id="discount-client"
                    label="Taller"
                    
                    {...register('oldWorkshop',{required : true})}
                  >
                    {workshops.map((option)=> (
                      <MenuItem value={option.name} >{option.name}</MenuItem>
                    ))}
                    
                </Select>
                <br />
                <h2> Ingrese el nuevo nombre del taller</h2>
                <TextField required id="name" label="Nombre" variant="filled" {...register('newWorkshop',{required : true})} />
                <br/>
                <Button type="submit"  color="primary" variant="contained" >
                        Editar
                </Button>
              </FormControl> 
                    
                    
                </form>
            </Box>
        </div>
        <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
        >
            <DialogTitle id="alert-dialog-title">
                {notificationText}
            </DialogTitle>

            <DialogActions>
                <Button onClick={handleClose} autoFocus>Entendido</Button>
            </DialogActions>

        </Dialog>
        
    </Fragment>
    
  )
}
