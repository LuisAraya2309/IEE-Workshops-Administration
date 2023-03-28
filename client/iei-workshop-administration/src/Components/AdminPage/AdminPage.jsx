import * as React from 'react';
import { useLocation } from 'react-router-dom';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { AppBar, Toolbar, Typography, Box, Container } from '@mui/material'
import { useNavigate } from 'react-router-dom';


export  function AdminPage() {
  const {state} = useLocation();
  const userLogged = state.user

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
    <Stack spacing={4}>
      <AppBar>
        <Toolbar>
          <Typography 
            variant="h6" 
            component="div" 
            sx={{ flexGrow: 1 }}
            align="left">
              { userLogged }
          </Typography>
          <Button color="inherit" onClick={salirALogIn}>Salir</Button>
        </Toolbar>
      </AppBar>
      <main>
        <Box
          sx={{
            bgcolor: 'background.paper',
            pt: 8,
            pb: 6,
          }}
        >
          <Container >
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="text.primary"
              gutterBottom
            >
              Administrador
            </Typography>
            <Stack
              sx={{ pt: 4 }}
              direction="row"
              spacing={4}
              justifyContent="center"
            >
              <Button 
                variant="contained" 
                onClick={irAFormularios}>
                  Nuevo Formulario
              </Button>

              <Button 
                variant="outlined"
                onClick={irAMetricas}>
                  Métricas
              </Button>

              <Button 
                variant="contained"
                onClick={irAEditarTalleres}>
                  Editar Talleres
              </Button>

              <Button 
                variant="outlined"
                onClick={irAagregarUsuarios}>
                  Agregar usuarios
              </Button>
            </Stack>
          </Container>
        </Box>
      </main>
    </Stack>
  );
}