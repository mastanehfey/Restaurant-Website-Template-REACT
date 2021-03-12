import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom'
import {ContextProvider} from './context'
import './index.css'; 
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
    <ContextProvider>
      <Router>
        <App />
      </Router>
    </ContextProvider>,
  document.getElementById('root')
);
reportWebVitals();
