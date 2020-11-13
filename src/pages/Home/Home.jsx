import React from 'react';
import { Redirect } from 'react-router-dom';

const Home = () => (
  <>
    <h1>Hola</h1>
    <Redirect to="/login" />
  </>
);

export default Home;
