
import axios from 'axios'
import { useEffect,useState } from 'react';
import {fetchHomeUrl} from "../url/url";
import NavBar from "../components/NavBar";
import TitleBar from "../components/TitleBar";
import Cards from  "../components/Cards"
import {Link,Navigate,useNavigate,useLocation} from "react-router-dom"

function HostelCard({hostels}){
    const location=useLocation();
    const navigate = useNavigate(); 
    return hostels.map((hostel, index) =>{
       return(
       <div key={index} className="col-sm">
    <div onClick={()=>{
        console.log("click");
        navigate("/hostel" ,{state:hostel});
    }}>
    <Cards data={hostel}/>
    </div> 
    </div>
       )
    });
   
}

function Home(){
const [hostels,setHostels]=useState([]);

useEffect(()=>{
    axios.get(fetchHomeUrl)
    .then(res=>{
        setHostels(res.data.hostels)
        console.log(res.data.hostels);
    }).catch(err=>{
        console.log(err)
    
    })
    },[])

console.log(hostels.length);

    return(<>
        <TitleBar/>
        <NavBar/>
        <br></br>
        <div class="container">
        <div class="row">
        {hostels.length > 0 ? <HostelCard hostels={hostels}/> : <p className="m-4 text-center w-100">No hostel data!</p>}
        </div>
        </div>

   {/* <div class="col-sm">
   <Cards/>
   </div>
   <div class="col-sm">
   <Cards/>
   </div> */}

      

    </>)
}

export default Home;
