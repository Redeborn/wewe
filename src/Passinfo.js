
import {
    Switch,
    Route,
    Link,
    BrowserRouter as Router,
    useRouteMatch
  } from "react-router-dom";
  
  import "./passinfo.css"
  import img1 from "./src2/image3.png"
  import img2 from "./src2/image2.png"
  import img3 from "./src2/image4.png"

  export const Passinfo = () =>{
    return <Router>
        <Switch>
            <Route path = "Passinfo">
            <div className = "frame">
                <p className = "pp">Мои пропуски</p> 
                <div className = "passholder">
                    <div className = "pass"><p className = "k">Единоразовый</p> <img src = {img1}></img></div>
                    <div className = "pass"><p className = "k">Персонал</p><img src = {img2}></img></div>
                    <div className = "pass"><p className = "k">Временный</p><img src = {img3}></img></div>
                </div>
                <Link to = "/request"><button className = "x">Подать запрос на пропуск</button></Link>
            </div>
           </Route>
        </Switch>
        
    </Router>
}