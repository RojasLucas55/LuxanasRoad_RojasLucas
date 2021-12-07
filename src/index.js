//1) Necesitamos a React
import React from "react";

//2) Necesitamos a ReactDom

import ReactDOM from "react-dom";

//Importamos nuestra Hoja de estilos

import 'bootstrap/dist/css/bootstrap.min.css';
import './CSS/estilos.css'

//3) Necesitamos un componente para mostrar

import App from './App';

//4) Necesitamos mostrar el componente

ReactDOM.render(<App/>, document.getElementById('root'));