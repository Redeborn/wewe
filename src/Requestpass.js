import {
    Switch,
    Route,
    Link,
    BrowserRouter as Router,
    useRouteMatch
  } from "react-router-dom";
  import {useState} from "react";
  import { ProSidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
  import 'react-pro-sidebar/dist/css/styles.css';
  
  
  import "./requestpass.css"
  export const Requestpass = () =>{
    const [count, setCount] = useState(0);
return <Router>
    <Switch>
        <Route path = "/Request">
            <div className = "frame">
                <div className = "req"> Заявка на пропуск</div>

                <div className = "op">
                    <button className = {"op2 " + (count == 1 ? "additionalClass" : "") } onClick = {() => {setCount(1)}}>Временный</button>
                    <button className =  {"op2 " + (count == 0? "matl":"")} onClick = {() => {setCount(0)}}>Одноразовый</button>
                    <button className =  {"op2 " + (count == 2? "matl":"")} onClick = {() => {setCount(2)}}>Персонал</button>
                </div>
                <input placeholder = "Оставьте комментарий" className = "kom"></input>
           
            </div>
        </Route>
    </Switch>
</Router>
}