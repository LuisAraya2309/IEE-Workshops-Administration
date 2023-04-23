import React, { Fragment , useState} from 'react'
import { TextField ,Dialog,DialogTitle,DialogActions} from '@mui/material'
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { makeStyles } from '@mui/styles';
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

export function AddWorkshops() {

 
  const classes = useStyles(),
        [open,setOpen] = useState(false),
        {register,handleSubmit} = useForm(),
        [notificationText,setNotificationText] = useState(""),
        navigate = useNavigate(),

        onSubmit = async(data) =>{
            try{
                const result = await axios.post('http://localhost:3001/workshops/addWorkshop', data);               
                setNotificationText(result.data.message)
                setOpen(true);                
                if(notificationText === "Taller ingresado con éxito"){
                    navigate('/Workshops')
                }
            }catch(err){
                alert(err)
            }
    }

    const handleClose = () => {
        setOpen(false);
    };
  return (
    <Fragment>
        
        <h1>Agregar Nuevo Taller</h1>

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
                    <h2> Ingrese el nombre del nuevo taller </h2>

                    <TextField required id="name" label="Nombre" variant="filled" {...register('workshop',{required : true})} />
                    <br/>
                    <br/>
                    <Button type = "submit" color="primary" variant="contained">
                        CREAR
                    </Button>
                    
                    
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

/*
        const workshopStatus = await axios.post('https://localhost:3001/workshops/createWorshops', {workshop:workshop});
        if(workshopStatus === "inserted"){

        }
        else{

        }*/