/* eslint-disable max-len */
import './Login.css';
import React/* , { useState, useContext } */ from 'react';
import { ReactComponent as Logo } from '../../images/logo.svg';
import chiuayoliLetters from '../../images/chihuayoli-letters.png';
/* import { Redirect } from 'react-router-dom'; */

const Login = () => (
  <>
    <div className="container-fluid h-100">
      <div className="row">
        <div className="col-sm-12 col-md-5">
          <div className="card">
            <img className="chiuayoli-letters" src={chiuayoliLetters} alt="Logo" />
            <div className="login-form">
              <form>
                <div className="form-group">
                  <label htmlFor="email">
                    Correo
                    <input type="email" className="form-control" placeholder="example@mail.com" id="email" required />
                  </label>
                </div>
                <div className="form-group">
                  <label htmlFor="password">
                    Contraseña
                    <input type="password" className="form-control" placeholder="*********" id="passwordpassword" required />
                  </label>
                  <a className="forgot-password" href="/">Olvide mi contraseña</a>
                </div>
                <button type="submit" className="btn login">INICIAR SESI&Oacute;N</button>
                <a className="signup" href="/">¿A&Uacute;N NO TIENES CUENTA</a>
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
  </>
);

export default Login;
