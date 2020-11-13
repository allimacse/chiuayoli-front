/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './Routes';

function App() {
  return (
    <>
      <Router>
        <div className="container" />
        {Routes}
      </Router>
    </>
  );
}

export default App;
