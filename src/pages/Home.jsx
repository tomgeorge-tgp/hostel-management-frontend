
import axios from 'axios'
import { useEffect,useState } from 'react';
import {fetchHomeUrl} from "../url/url";
function Home(){
const [users,setUsers]=useState([]);

useEffect(()=>{
    axios.get(fetchHomeUrl)
    .then(res=>{
        setUsers(res.data)
        console.log(res.data);
    }).catch(err=>{
        console.log(err)
    
    })
    },[])



    return(<>
        <h1>Home page</h1>
        <h1>{users.name}</h1>
    </>)
}

export default Home;