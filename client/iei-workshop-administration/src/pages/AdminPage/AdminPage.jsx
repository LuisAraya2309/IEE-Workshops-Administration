import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Layout from '../../Layout';
import { Box } from '@mui/material'
import { useLocation, useNavigate } from 'react-router-dom';
import AddBoxIcon from '@mui/icons-material/AddBox';
import LeaderboardIcon from '@mui/icons-material/Leaderboard';
import EditIcon from '@mui/icons-material/Edit';
import PersonAddIcon from '@mui/icons-material/PersonAdd';

export  function AdminPage() {
  const {state} = useLocation(),
  userLogged = state.user;
  let navigate = useNavigate();

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
    navigate("/Users") // acá se pasa el email
  }

  return (
    <Layout>
      <Stack spacing={2} direction="row">
        <Button variant="text">Text</Button>
        <Button variant="contained">Contained</Button>
        <Button variant="outlined">Outlined</Button>
      </Stack>
    </Layout>
    
  );
}