
import './static/style/index.css';
import {BrowserRouter as Router} from "react-router-dom";

// import 'react-native-gesture-handler'; // primeiro
import React from 'react';

import { AuthProvider } from './contexts/authContext';
import Routes from './routes';

export default function App() {

  return (
    <Router>
      <AuthProvider>
        <Routes />
      </AuthProvider>
    </Router>
  );
}