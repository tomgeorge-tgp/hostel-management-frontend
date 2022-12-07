import "./style/popUp.css";
import {useState} from "react";
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import {hostelAddUrl} from "../url/url";
import axios from 'axios' ;
import useAuth from "../hooks/useAuth";
import useLocalStorageRef from "../hooks/LocalStorage"

function PopUp(props)
{
    const [name,setName]=useState("");
    const [category,setCategory]=useState("");
    const [singleBed,setSingleBed]=useState(0);
    const [doubleBed,setDoubleBed]=useState(0);
    const [tripleBed,setTripleBed]=useState(0);
    const [address,setAddress]=useState("");
    const [city,setCity]=useState("");
    const [imageUrl,setImageUrl]=useState("");
    const [users,setUsers] = useState([]);
    const {auth,setAuth}=useAuth();
    const [userData, setUserData, removeUserData] = useLocalStorageRef("user");

    console.log("auth",auth);
    console.log("userData",userData);

    async function handleSubmit(e)
    {
      e.preventDefault();
      try{  
      const data={
         _id_owner:userData.current._id,
         name,
         category,
         singleBed,
         doubleBed,
         tripleBed,
         imageUrl,
         address,
         city,
      };
      console.log("data here",data);
      const response=await axios.post(hostelAddUrl,
        JSON.stringify(data),
        {
          headers:{
         'Content-Type': 'application/json',
          "Accept": "*/*",
          },
          withCredentials:true
        }
        )
        console.log(response.data);
        console.log("Hostel Registered Successfully!");
        props?.onAdd(response?.data?.hostel);
        props.setTrigger(false);
      }
    
     catch(err) {
      console.log(err);
       if(err.response?.status==409)
      {
        console.log('Hostel Not registered successfully');
      }
      else if(err?.response)
      { console.log(!err?.response);
        console.log('no server response');
      }
      else
      {
        console.log("Failed to register");
        setError("Failed to register");
        console.error(err);
      }
    }
  }


   return((props.trigger)?(<>
   <div className="popup">
   <div className="popup-inner">
    <button className="close-btn" onClick={() => props.setTrigger(false)}>close</button>
    <h3> Hostel Details</h3>
    <Form onSubmit={handleSubmit}>
    <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
    <Form.Label column sm="2"> Name </Form.Label>

    <Form.Control type="text" placeholder="Hostel Name" 
         onChange={(e) => {
                setName(e.target.value);
                console.log(name);
            }}
    />
    <br></br>
    <h4 className="mt-4">Category</h4>
        <div key="radio" className="mb-3">
          <Form.Check
            inline
            label="Gents"
            name="group1"
            type="radio"
            id={"male"}
            onChange={(e)=>{
                setCategory("male");
                console.log(category);
            }}
          />
          <Form.Check
            inline
            label="Ladies"
            name="group1"
            type="radio"
            id={"female"}
            onChange={(e)=>{
                setCategory("female");
                console.log(category);
            }}
          />
          <Form.Check
            inline
            label="Co"
            name="group1"
            type="radio"
            id={"co"}
            onChange={(e)=>{
                setCategory("co");
                console.log(category);
            }}
          />
        </div>
      
     </Form.Group>
     <Row className="mb-3">
        <Form.Group as={Col} md="4" controlId="validationCustom01">
          <Form.Label>1 Bed</Form.Label>
          <Form.Control
            required
            type="number"
            placeholder="0"
            defaultValue=""
            onChange={(e)=>{
                setSingleBed(e.target.value);
                console.log(category);
            }}
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="4" controlId="validationCustom02">
          <Form.Label>2 Bed</Form.Label>
          <Form.Control
            required
            type="number"
            placeholder="0"
            defaultValue=""
            onChange={(e)=>{
                setDoubleBed(e.target.value);
                console.log(category);
            }}
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="4" controlId="validationCustom02">
          <Form.Label>3 Bed</Form.Label>
          <Form.Control
            required
            type="number"
            placeholder="0"
            defaultValue=""
            onChange={(e)=>{
                setTripleBed(e.target.value);
                console.log(category);
            }}
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
        </Row>
        <Button type="submit"  onClick={(e)=>{
                handleSubmit(e);
            }}>Submit form</Button>

     </Form>
     <br />
    {props.children}
    </div>
   </div>
   </>):""
   ) 
}
export default PopUp;