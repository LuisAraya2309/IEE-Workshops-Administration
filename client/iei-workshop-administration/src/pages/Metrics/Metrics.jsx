import Layout from '../../Layout';
import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { useLocation, useNavigate } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Box, Container } from '@mui/material'
import AddBoxIcon from '@mui/icons-material/AddBox';
import LeaderboardIcon from '@mui/icons-material/Leaderboard';
import EditIcon from '@mui/icons-material/Edit';
import PersonAddIcon from '@mui/icons-material/PersonAdd';

export function Metrics() {

  const {state} = useLocation(),
  userLogged = state.user,
  sendingUser = {state:{user:userLogged}}
  let navigate = useNavigate();
  
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
        <h1>Metricas</h1>
          <br /> <br /> <br />
          
        </Box>
      </Stack>
    </Stack>
    </Layout>
  );
}
