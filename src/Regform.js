import {
    Switch,
    Route,
    Link,
    BrowserRouter as Router,
    useRouteMatch
  } from "react-router-dom";
  
  import "./regform.css"
import img from "./src2/krug.png"
  

export const Regform = () =>{
  return <Router>
    <Switch>
    <Route path = "/Registration"> 
      <div className = "frame">
            <div className = "ing"><img src = {img}/></div>
            <div className = "reg">
              <input placeholder = "E-mail" className = "log1"></input>
              <input placeholder = "Пароль" className = "log"></input>
              <input placeholder = "Пароль еще раз" className = "log"></input>
            <button className = "regin"><Link to = "">Зарегистрироваться</Link></button>
            <div className = "acc"> Уже есть аккаунт?<Link to = "/login" className = "sr"> Войти?</Link></div>

            </div>
          </div>
      </Route> 
    </Switch>
  </Router>
}