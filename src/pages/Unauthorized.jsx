import { useNavigate } from "react-router-dom";

function Unauthorized(){
    const navigate=useNavigate();
    const goBack=()=>navigate(-1);
    return(
        <div>
        <h1>Unauthorized</h1>
        <br/>
        <p>You do not have access to the requested page</p>
        <div>
            <button onClick={goBack}>Back</button>
        </div>
        </div>
        
        )
}
export default Unauthorized;