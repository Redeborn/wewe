import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


const per = <div className = "biba">
  <div className = "group">
    <button className = "buttonact">1</button>
    <button className  ="button">2</button>
    <button className  ="button">3</button>
    <button className  ="button">4</button>
    <button className  ="button">5</button>
  </div>
  
  <div className = "p">
      <div className = "time">35:23</div>
  </div>
  <p className = "bigtask">
    <span className = "task">Выберите правильный вариант ответа</span>
    <span className = "task2">How __ eat without mouth</span>


  </p>
  <div className = "answers">
    <button className = "answ">to</button>
    <button className = "answ">with</button>
    <button className = "answ">from</button>
    <button className = "answ">who</button>


  </div>
  <div className = "useless">
    <button className = "answered">Отвечено</button>
  </div>

</div>
  

ReactDOM.render(
  
    <div>{per}</div>
  ,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

