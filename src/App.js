
import {
    Switch,
    Route,
    Link,
    BrowserRouter as Router,
    useRouteMatch
  } from "react-router-dom";
  
  import "./index.css"
import img from "./src2/krug.png"
  

export const App = () =>{
    return <Router>
        <Switch>
            <Route path = "/login">
        
            <div className = "frame">
                <div className = "ing"><img src = {img}/></div>
                <div className = "useless">
                    <input placeholder = "E-mail" className = "log1"></input>
                    <input placeholder = "Пароль" className = "log"></input>
                </div>
                <div className = "acc">Нет аккаунта? <Link to = "/Registration" className = "sr">Зарегистрируйся</Link></div>
                </div>
            </Route>
        </Switch>
    </Router>
}
