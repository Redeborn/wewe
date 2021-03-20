import {
    Switch,
    Route,
    Link,
    BrowserRouter as Router,
    useRouteMatch
  } from "react-router-dom";
  
  import "./personaldata.css"

  

export const Personaldata = () =>{
  return <Router>
    <Switch>
        <Route path = "/Personal"> 
            <div className = "frame">   
                <p className = "txt">Персональные данные</p>
                <div className = "sps">
                    <input className = "logform" placeholder = "Имя"></input>
                    <input className = "logform" placeholder = "Фамилия"></input>
                    <button className = "add">Загрузить скан паспорта</button>
                    <button className = "add">Сохранить</button>
                    
                </div>
            
            </div>
      </Route> 
    </Switch>
  </Router>
}