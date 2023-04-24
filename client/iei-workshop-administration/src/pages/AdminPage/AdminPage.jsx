import Layout from '../../Layout';
import * as React from 'react';
import { useLocation } from 'react-router-dom';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { AppBar, Toolbar, Typography, Box, Container } from '@mui/material'
import { useNavigate } from 'react-router-dom';
import AddBoxIcon from '@mui/icons-material/AddBox';
import LeaderboardIcon from '@mui/icons-material/Leaderboard';
import EditIcon from '@mui/icons-material/Edit';
import PersonAddIcon from '@mui/icons-material/PersonAdd';

export  function AdminPage() {
  //const {state} = useLocation();
  const userLogged = "" //state.user

  let navigate = useNavigate()
  const salirALogIn = () =>{
    let logInPath = "/"
    navigate(logInPath)
  }

  const irAFormularios = () =>{
    /*let formsPath = "/"
    navigate(formsPath, {state:{user:userLogged}}) // acá se pasa el email*/
    alert("Va a crear formularios")
  }

  const irAMetricas = () =>{
    /*let metricasPath = "/"
    navigate(metricasPath, {state:{user:userLogged}}) // acá se pasa el email*/
    alert("Va a ver las metricas")
  }

  const irAEditarTalleres = () =>{
    /*let talleresPath = "/"
    navigate(talleresPath, {state:{user:userLogged}}) // acá se pasa el email*/
    alert("Va a editar los talleres")
  }

  const irAagregarUsuarios = () =>{
    /*let talleresPath = "/"
    navigate(talleresPath, {state:{user:userLogged}}) // acá se pasa el email*/
    alert("Va a agregar usuarios")
  }

  return (
    <Layout>
    <Stack spacing={4}>
      <Stack
        sx={{ pt: 4 }}
        direction="row"
        spacing={4}
        justifyContent="center"
      >
        <Box sx={{ '& button': { m: 1 } }}>
          <br /> <br /> <br />
          <div>
            <Button
              startIcon={<AddBoxIcon />}
              size="large"
              color="success"
              variant="contained" 
              onClick={irAFormularios}>
                Nuevo Formulario
            </Button>
          </div>
          <br />
          <div>
            <Button 
              size="large"
              startIcon={<LeaderboardIcon />}
              color="success"
              variant="outlined"
              onClick={irAMetricas}>
                Análisis de información
            </Button>
          </div>
          <br />
          <div>
            <Button 
              size="large"
              startIcon={<EditIcon />}
              color="success"
              variant="contained"
              onClick={irAEditarTalleres}>
                Modulo de gestión
            </Button>
          </div>
          <br />
          <div>
            <Button 
              size="large"
              startIcon={<PersonAddIcon />}
              color="success"
              variant="outlined"
              onClick={irAagregarUsuarios}>
                Registrar un usuario    
            </Button>
          </div>
        </Box>
      </Stack>
    </Stack>
    </Layout>
  );
}
