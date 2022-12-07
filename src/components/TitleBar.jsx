import "./style/titleBar.css";
import {Link,Navigate,useNavigate,useLocation} from "react-router-dom"
function TitleBar()
{
    const location=useLocation();
    const navigate = useNavigate(); 
    return(
        <div className="title-bar">
        <a href="#default" class="logo">FindHostel</a>
        <div className="login-button-container">
          <button className="login-button" onClick={(e)=>{
              navigate("/login");
            }}>Login</button>
        </div>
      </div>
      )
}

export default TitleBar;