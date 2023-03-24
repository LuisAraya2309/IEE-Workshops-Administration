import React,{Fragment, useState} from 'react'

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
    <div className='LoginPage'>
      <h1>Iniciar Sesion</h1>

      <form action="POST">
        <input type="text" onChange={(e)=>{setEmail(e.target.value)}} placeholder="Email" name="" id=""/>
        <input type="text" onChange={(e)=>{setPassword(e.target.value)}} placeholder="Password" name="" id=""/>

        <button type="submit" onClick={submit}/>
      </form>
    </div>
    </Fragment>
  )
}
