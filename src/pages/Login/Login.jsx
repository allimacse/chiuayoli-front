/* eslint-disable max-len */
import './Login.css';
import React, { useState, useContext } from 'react';
import { ReactComponent as Logo } from '../../images/logo.svg';
import chiuayoliLetters from '../../images/chihuayoli-letters.png';
import { Redirect } from 'react-router-dom'
import { AuthContext } from '../../context/AuthContext.js'
import { auth } from '../../utils/https.js'


const Login = () => {

  const { logIn, isAuth } = useContext(AuthContext)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleForm = async (e) => {
    e.preventDefault()
    const body = {
      email,
      password,
    }
    const response = await auth.login(body)
    const newToken = response.data.payload

    logIn(newToken)
  }

  return (
    <React.Fragment>
      <div className="container-fluid h-100">
        <div className="row">
          <div className="col-sm-12 col-md-5">
            <div className="card">
              <img className="chiuayoli-letters" src={chiuayoliLetters} alt="Logo" />
              <div className="login-form">
                <form >
                  <div className="form-group">
                    <label htmlFor="email">
                      Correo
                    <input type="email" value={email}
                        onChange={e => setEmail(e.target.value)} 
                        className="form-control" 
                        placeholder="example@mail.com" 
                        id="email" required />
                    </label>
                  </div>
                  <div className="form-group">
                    <label htmlFor="password">
                      Contraseña
                    <input type="password" value={password}
                        onChange={e => setPassword(e.target.value)} 
                        className="form-control" 
                        placeholder="*********" id="passwordpassword"  />
                    </label>
                    <a className="forgot-password" href="/">Olvide mi contraseña</a>
                  </div>
                  <a className="signup" href="/">¿A&Uacute;N NO TIENES CUENTA</a>
                  <button type="submit" className="btn login" 
                  onClick={console.log(email,password)}>INICIAR SESI&Oacute;N</button>
                </form>
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-md-7 chiuayoli-info">
            <Logo className="logo" />
            <p className="slogan-chiuayoli">Cuidamos tus plantas</p>
            <p className="text-chiuayoli">&quot;En Chiuayoli aprenderas todo lo necesario para el cuidado y crecimiento de tus plantas&quot;</p>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default Login;
