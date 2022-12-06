import "./style/hostelBar.css";
import { BsFillPencilFill,BsFillTrashFill } from "react-icons/bs"
import axios from "axios";
import {hostelDeleteUrl} from "../url/url";
import { Link, useNavigate, useLocation } from "react-router-dom";

function HostelBar(props) {
     console.log(props);
     const navigate = useNavigate();
     const location = useLocation();
    
    return(<>

        <div className="hostel-bar">
             <p className="hostel-bar-text">{props.data.name}</p>
             <div className="icon-container">
             <div className="edit-pencil" 
             onClick={()=>{
                    console.log("props.data.",props.data);
                    navigate("/owner/hostel-dashboard",{state:props.data});
             }}><BsFillPencilFill/></div>
             <div className="delete-bin"
               onClick={async () => {
                    try {
                      const response = await axios.delete(
                        hostelDeleteUrl + `/${props.data._id}`,
                        {
                          headers: {
                            "Content-Type": "application/json",
                            Accept: "*/*",
                          },
                          withCredentials: true,
                        }
                      );
                      console.log(response.data);
                      console.log("Deleted Successfully!");
                      setAuth(null);
                      setUserData(null);

                      navigate(from, { replace: true });
                    } catch (err) {
                      console.log(err);
                      if (err.response?.status == 409) {
                        console.log("Username not deleted");
                      } else if (err?.response) {
                        console.log(!err?.response);
                        console.log("no server response");
                      } else {
                        console.log("Failed to delete");
                        setError("Failed to delete");
                        console.error(err);
                      }
                    }
                  }}><BsFillTrashFill/></div>
             </div>
             
        </div>
        
    </>
        )


}

export default HostelBar;