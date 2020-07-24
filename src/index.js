import React from "react";
import { render } from 'react-dom';

import App from './components/app';

import './assets/css/app.css';

let root = document.createElement('div')

root.id = 'root'
document.body.appendChild(root)

render(
    <App />
, document.getElementById('root'))