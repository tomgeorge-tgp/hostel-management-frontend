import React, { useState,useContext } from "react";
// import tool from "../assest/tool.png";
import Form from "../components/LogInForm";
import useAuth from "../hooks/useAuth";
import axios from "../api/axios";
// import axios from "axios";
import {loginUrl} from "../url/url";
import {
  Link,
  useNavigate,
  useLocation
} from 'react-router-dom';
import useLocalStorageRef from "../hooks/LocalStorage"

function SignIn() {
 const {auth,setAuth}=useAuth();
 const navigate = useNavigate();
 const [userData, setUserData, removeUserData] = useLocalStorageRef("user")
 const location=useLocation();
 const from ="/owner/dashboard" || "/";

//  const from=location.state?.from?.pathname || "/";
  //const from="/owner-dashboard";
  // const [error, setError] = useState("");
  // const history = useHistory();



  
  //
  //const [userData, setUserData] = useState({});

//   if (loggedIn) {
//     return <Redirect to="/app" />;
//   }
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-5">
          <h1 className="my-4 font-weight-bold-display-4">Owner SignIn</h1>
          <Form
            onSubmit={async (values, { _setSubmitting }) => {
              // const { user } = await loginWorker(values.email, values.password);
              // console.log(JSON.stringify(values));
              try {
                const userInfo={
                  email: values.email,
                  password: values.password,
                }
                console.log(userInfo);
                const response = await axios.post(loginUrl, 
                JSON.stringify(userInfo),
                {
                  headers:{ 
                  'Content-Type': 'application/json',
                  "Accept": "*/*",
                  },
                  withCredentials: true,
                }
                );
                console.log(JSON.stringify(response?.data));
                // const accessToken=response?.data?.accessToken;
                // const roles=response?.data?.roles;
                let userdetails={
                    _id:response?.data?.user._id,
                    email:response?.data?.user.email,

                }
                 setAuth(userdetails);
                 setUserData(userdetails);
                 console.log("userData",userData);
                 //console.log(auth);
                 navigate(from,{replace:true});
                // setAuth({user,pwd,roles,accessToken});
                console.log("Logged In Successfully!");
                // navigate(from,{replace:true});
              } 
              catch (err) {
                console.log(err);
                if(!err?.response)
                {
                  console.log('No Server Response');
                }
                else if(err.response?.status==400)
                {
                  console.log('Missing Username or Password');
                }
                else if(err.response?.status==401){
                  console.log('Unauthorized');
                }
                else{
                 console.log('Login Failed');
                 console.log(err);
                }
              }

              // setSubmitting(false);
            }}
          />
          <h6>
            <Link to="/signup">Sign Up</Link>
          </h6>
        </div>
        <div className="col-sm-7 d-flex justify-content-center align-items-center">
          <img
            className="img-fluid  w-50  "
            style={{ JustifyContent: "Right" }}
            src={""}
            alt="not found"
          />
        </div>
      </div>
    </div>
  );
}

export default SignIn;
