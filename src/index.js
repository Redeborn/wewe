import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import img from "./src2/VK.svg"


const Cum = <div className = "biba">
<div className = "yee">

<div className = "stolb"> 
<div className = "welcum"><b>Добро пожаловать в EvgenApp!</b></div>
<div className = "kostil">
 <div className = "ent"><b>Вход</b></div>
 <div className = "reg"><b>Регистрация</b></div>
</div>
<input className = "fio" placeholder = "ФИО"></input>
<input className = "email" placeholder = "E-mail"></input>
<input className = "password" placeholder = "Password"></input>
<button className = "butt"><b>Зарегистрироваться</b></button>
<div className = "huy">
 <div className = "tut"></div>
 <div>или</div>
 <div className = "tut"></div>
 
</div>

<button className = "VK"><img src = {img}/><p>Войти с помощью VK</p></button>

</div>
 
</div>
</div>



ReactDOM.render(
  
    <div>{Cum}</div>
  ,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

