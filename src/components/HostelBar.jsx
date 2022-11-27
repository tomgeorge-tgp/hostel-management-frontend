import "./style/hostelBar.css";
import { BsFillPencilFill,BsFillTrashFill } from "react-icons/bs"
function HostelBar() {

    return(<>

        <div className="hostel-bar">
             <p className="hostel-bar-text">Blue Hostel</p>
             <div className="icon-container">
             <div className="edit-pencil"><BsFillPencilFill/></div>
             <div className="delete-bin"><BsFillTrashFill/></div>
             </div>
             
        </div>
        
    </>
        )


}

export default HostelBar;