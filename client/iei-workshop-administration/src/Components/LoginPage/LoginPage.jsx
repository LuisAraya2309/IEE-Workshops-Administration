import React,{Fragment, useState} from 'react'
import "./LoginPage.css"

export function LoginPage () {
  const [email, setEmail]=useState('')
  const [password, setPassword]=useState('')

  async function submit(e){
    e.preventDefault();
    try {
      console.log(e)
    } catch (e) {
      console.log(e)
    }
  }

  return (
    <Fragment>
    <div className='container'>
      <form onSubmit={submit}>
        <h1>Iniciar Sesion</h1>

        <div class="inputBox">
          <input type="text" 
            placeholder="Correo"
            onChange={(e)=>{setEmail(e.target.value)}}/>
          <span>Correo</span>
          <i></i>
        </div>

        <div class="inputBox">
          <input type="password" 
            placeholder="Contraseña"
            onChange={(e)=>{setPassword(e.target.value)}} 
          />
          <span>Contraseña</span>
          <i></i>
        </div>

        <input type="submit" value="Ingresar"/>  
      </form>
    </div>
    </Fragment>
  )
}
