import React, { useEffect, useRef, useState } from "react";
import { Form, Button, Card, Alert } from "react-bootstrap";
// import tool from "../assest/tool.png";
import axios from "../api/axios";
import Forms from "../components/SignUpForm";
import {Link,Navigate,useNavigate,useLocation} from "react-router-dom"
import {signupUrl} from "../url/url";
// import axios from "axios";
import useAuth from "../hooks/useAuth";
import useLocalStorageRef from "../hooks/LocalStorage"

function OwnerSignUp() {
  
  
  const [error, setError] = useState("");
  const location=useLocation();
  const navigate = useNavigate(); 
  const {auth,setAuth}=useAuth();
  const [userData, setUserData, removeUserData] = useLocalStorageRef("user")
  const from ="/owner/dashboard" || "/";
  // useEffect(() => {
  //   if(auth)
  //   navigate("/owner/dashboard");
  // }, [auth]);
 
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-5">
          <h1 className="my-4 font-weight-bold-display-4">Owner SignUp</h1>
          {error !== "" && <Alert variant="danger">{error}</Alert>}
          <Forms
            onSubmit={async (values, { _setSubmitting }) => {
              ///contain values from the sign up form
              // console.log(values);
                if (check(values.password, values.confirmPassword)) {   //to check the password is matching
                  //e.preventDefault();
                

                  try {
                    setError("");
                    // console.log(values);
                //    const {user}=await signupWorker(values.email, values.password);        //to auth and create a userId
                    // console.log(user);
                    
                      
                       const userInfo = {
                         firstName: values.firstName ,
                         lastName: values.lastName,
                         phoneNumber: values.phoneNo,
                         email: values.email,
                         password: values.password,
                         locality:"",
                         district:"",
                         imageUrl:"",

                       }
                       console.log(userInfo);
                      const response=await axios.post(signupUrl,
                      JSON.stringify(userInfo),
                      {
                        headers:{
                       'Content-Type': 'application/json',
                        "Accept": "*/*",
                        },
                        withCredentials:true
                      }
                      )
                      console.log(response.data);
                      setAuth(response.data.user);
                      setUserData(response.data.user);
                      navigate(from,{replace:true});
                      console.log("Registered Successfully!");
                      
                    }
                  
                   catch(err) {
                    console.log(err);
                     if(err.response?.status==409)
                    {
                      console.log('Username Taken');
                    }
                    else if(err?.response)
                    { console.log(!err?.response);
                      console.log('no server response');
                    }
                    else
                    {
                      console.log("Failed to create an account");
                      setError("Failed to create an account");
                      console.error(err);
                    }
                  }
                  
                }
                else 
                  {
                    console.log("Passwords Not Same!");
                    // setError(true);
                  }

        
            }}
          />
        </div>
        <div className="w-100 text-left mt-2 ">
          Already have an account? <Link to="/login" className="text-decoration-none" >Log In</Link>
        </div>
        <div className="col-sm-7 d-flex justify-content-center align-items-center">
         {/* <img
            className="img-fluid  w-50  "
            style={{ JustifyContent: "Right" }}
            src={""}
            alt="not found"
          /> */}
         
        </div>
      </div>
    </div>
  );
}

function check(password, confirmPassword) {
  if (password === confirmPassword)
    return true;
  return false;
}

export default OwnerSignUp;
