import React from 'react';
import ReactDOM from 'react-dom/client';
//import App from './components/App';
//import App2 from './components/App2';
//import App3 from './components/App3';
//import App4 from './components/App4';
//import App5 from './components/App5';
//import Lista from './components/Lista';
//import Lista02 from './components/Lista02';
//import { Lista03, Item} from './components/Lista03';
//import FormularioReact from './components/FormularioReact';
//import Hello from './components/helloHooks';
//import AppHooks from './components/useStates';
import AppHooks from './components/useEffects';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AppHooks>
    </AppHooks>
  </React.StrictMode>
);

reportWebVitals();
