import React from 'react';
import {createRoot} from 'react-dom/client';
import './index.css';
import {Arrowfunction} from './arrowfunction';
import Rough from './one';
import {Form} from './form';
import {Usestate} from './usestate';
import {Home} from './home';
import {About} from './about';
import {Contact} from './contact';
import {Myrouter} from './myrouter';
import {Console} from './console';
import Name from './nameextract';
import {Timer} from './timer';
import {Client} from './client';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);
root.render(
  <React.StrictMode>
    <Client />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
