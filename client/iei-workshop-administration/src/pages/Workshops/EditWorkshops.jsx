import React, { Fragment } from 'react'
import Box from '@mui/material/Box';
import { makeStyles } from '@mui/styles';
import { InputLabel, MenuItem, Select, FormControl,Button,TextField } from '@mui/material';

const useStyles = makeStyles({
    center: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
    },
  });



export function EditWorkshops() {

  const classes = useStyles()
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
                <form >
                    <h2> Seleccione el taller a editar</h2>
                    <FormControl sx={{minWidth: "50%" }}>
                <InputLabel id="discount-client">Taller</InputLabel>
                <Select 
                    labelId="select-client"
                    id="discount-client"
                    label="Taller"
                  >
                    
                </Select>
                <br />
                <h2> Ingrese el nuevo nombre del taller</h2>
                <TextField required id="name" label="Nombre" variant="filled" />
                <br/>
                <Button type="submit"  color="primary" variant="contained" >
                        Editar
                </Button>
              </FormControl> 
                    
                    
                </form>
            </Box>
        </div>
        
    </Fragment>
    
  )
}
