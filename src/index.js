import React from 'react';
import ReactDOM from 'react-dom';
import css from "./index.css"


const ju = <div className = "yee">
  <div className = "boss">
    <input className = "name" placeholder = "Введите имя"></input>
    <button className = "enter">Войти в навигатор</button>
    
    
  </div>
</div>
  








ReactDOM.render(
  
    <div>{ju}</div>
  ,
  document.getElementById('root')
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

