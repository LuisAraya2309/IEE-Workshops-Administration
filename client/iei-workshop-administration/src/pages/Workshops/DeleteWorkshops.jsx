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



export function DeleteWorkshops() {

  const classes = useStyles()
  return (
    <Fragment>
        
        <h1>Eliminar Taller</h1>

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
                    <h2> Seleccione el taller a eliminar</h2>
                    <FormControl sx={{minWidth: "50%" }}>
                <InputLabel id="discount-client">Taller</InputLabel>
                <Select 
                    labelId="select-client"
                    id="discount-client"
                    label="Taller"
                  >
                    
                </Select>
                <br />
                <Button type="submit"  color="primary" variant="contained" >
                        Eliminar
                </Button>
              </FormControl> 
                    
                    
                </form>
            </Box>
        </div>
        
    </Fragment>
    
  )
}
