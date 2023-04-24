import React,{Fragment} from 'react'
import {useForm} from 'react-hook-form';
import "./LoginPage.css"
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import Layout from '../../Layout';

export function LoginPage () {
  const {register,handleSubmit} = useForm();

  let navigate = useNavigate()

  const loggedIn = (userLogged) =>{
    // Loged and navigate to component main Menu
    let adminPath = '/AdminPage'
    navigate(adminPath,{state:{user:userLogged}})
  }

  const onSubmit = async (data) => {
      try{
        const response = await axios.post('http://localhost:3001/users/login', data);
        console.log(response);
        const userLogged = response.data.email;
        loggedIn(userLogged)
      } catch(err){
        alert('Usuario invalido')
      }
  }
 

  return (
    <Fragment>
      <Layout>
        <div className='container'>
          <form onSubmit={handleSubmit(onSubmit)}>
            <h1>Iniciar Sesion</h1>

            <div className="inputBox">
              <input type="email" 
                placeholder="Correo"
                id="email"
                {...register('email',{required:true})}/>
              <span>Correo</span>
              <i></i>
            </div>

            <div className="inputBox">
              <input type="password" 
                placeholder="Contraseña"
                id="password"
                {...register('password',{required:true})} />
              <span>Contraseña</span>
              <i></i>
            </div>

            <input type="submit" value="Ingresar"/>  
          </form>
        </div>
      </Layout>
    </Fragment>
  )
}
