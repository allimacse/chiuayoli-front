/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './Routes';
import { AuthContextProvider } from './context/AuthContext.js'

function App() {
  return (
    <React.Fragment>
      <Router>
        <AuthContextProvider>
        <div className="container" />
          {Routes}
        </AuthContextProvider>
      </Router>
    </React.Fragment>
  );
}

export default App;
