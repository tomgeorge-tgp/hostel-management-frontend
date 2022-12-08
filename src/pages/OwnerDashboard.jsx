import axios from "axios";
// import {fetchHomeUrl} from "../url/url";
import React, { useEffect, useState, useRef } from "react";
import { v4 } from "uuid";
import avatarDefault from "../assets/avatarDefault.png";
import { Route } from "react-router-dom";
import "./style/OwnerDashboard.css";
import {
  Form,
  Button,
  Card,
  Alert,
  Tabs,
  Tab,
  Dropdown,
  DropdownButton,
} from "react-bootstrap";
import FormData from 'form-data';
import "bootstrap/dist/css/bootstrap.min.css";
import useAuth from "../hooks/useAuth";
import HostelBar from "../components/HostelBar";
import { BsPlusLg } from "react-icons/bs";
// import tool from "../assest/tool.png";
import useLocalStorageRef from "../hooks/LocalStorage";
import { usersDashboardUrl, usersUpdateUrl, usersDeleteUrl,hostelFetchUrl } from "../url/url";
import { Link, useNavigate, useLocation } from "react-router-dom";
import PopUp from "../components/PopUp";

function OwnerDashboard() {
  const { auth, setAuth } = useAuth();
  const navigate = useNavigate();
  const [userData, setUserData, removeUserData] = useLocalStorageRef("user");
  const [editMode, setEditMode] = useState(false);
  const [users, setUsers] = useState({});
  const [hostels, setHostels] = useState([]);
  const [buttonPopUp, setButtonPopUp] = useState(false);

  const image =useRef(null);
  const [imageUrl, setImageUrl] = useState(users?.imageUrl || "");
  const [imageList, setImageList] = useState([]);
  const location = useLocation();

  const from = "/";
  const allInputs = { imgUrl: "" };
  //console.log("id",userData.current)
  console.log("hostel data", hostels);
  let data = new FormData();

  var dataValues = useRef({
    firstName:  "",
    lastName: "",
    email: "",
    phoneNumber:"",
    locality: "",
    district: "",
    imageUrl: "",
  });

  let endpoints = [

    {
      url: usersDashboardUrl + `/${userData.current._id}`,
      onSuccess: (res) => {
        console.log("res.user", res.data.user);
        dataValues.current = res.data.user;
        setUsers(res.data.user);
      },
      onError: (err) => console.log(err.message),
    },
    {
      url: hostelFetchUrl+`/${userData.current._id}`,
      onSuccess: (res) => {
        console.log("res.hostels", res.data.hostels);
        setHostels(res.data.hostels);
        
      },
      onError: () => console.log(err.message),
    },
  ];


  useEffect(() => {
    // axios
    //   .get(usersDashboardUrl + `/${userData.current._id}`)
    //   .then((res) => {
    //     console.log("res.user", res.data.user);
    //     setUsers(res.data.user);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
    axios.all(
      endpoints.map(({ url, onSuccess, onError }) =>
        axios.get(url)
        .then(onSuccess)
        .catch(onError)
      )
    );
  }, []);

  //const [userUpdate, setUserUpdate] = useState({ user });

  //console.log("users.f",users);
  // console.log("users.img",users.imageUrl);


 
  return (
    <>
      <form>
        <div className="container emp-profile">
          <div className="row">
            <div className="col-md-4">
              <div className="profile-img " style={{ position: "relative" }}>
                {console.log("image")}
                {/* {  console.log(dataValues.current.imageUrl)} */}
                <img src={imageUrl || avatarDefault} alt="img" />
              
                {editMode && (
                  <>
                    <input
                      type="file"
                      id="actual-btn"
                      accept="img"
                      hidden
                      onChange={(e) => {
                        {
                          console.log("image",e.target.files[0].name);
                          image.current = e.target.files[0].name;
                          data.append('image',e.target.files[0])
                          //console.log(dataValues.image);

                          //e.target.files=null;
                        }
                      }}
                    />
                    <label
                      for="actual-btn"
                      style={{
                        backgroundColor: "transparent",

                        padding: "0.5rem",

                        // fontFamily: "sans-serif",
                        borderRadius: "1.5rem",
                        cursor: "pointer",
                        margin: "0",
                        position: "absolute",
                        top: "120px",
                        right: "180px",
                        color: "#666666",
                        transition:
                          " all .3s cubic-bezier(.175, .885, .32, 1.275)",
                      }}
                    >
                   
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 17.5C13.25 17.5 14.3127 17.0627 15.188 16.188C16.0627 15.3127 16.5 14.25 16.5 13C16.5 11.75 16.0627 10.6873 15.188 9.812C14.3127 8.93733 13.25 8.5 12 8.5C10.75 8.5 9.68733 8.93733 8.812 9.812C7.93733 10.6873 7.5 11.75 7.5 13C7.5 14.25 7.93733 15.3127 8.812 16.188C9.68733 17.0627 10.75 17.5 12 17.5ZM12 16.5L10.9 14.1L8.5 13L10.9 11.9L12 9.5L13.1 11.9L15.5 13L13.1 14.1L12 16.5ZM4 21C3.45 21 2.97933 20.8043 2.588 20.413C2.196 20.021 2 19.55 2 19V7C2 6.45 2.196 5.97933 2.588 5.588C2.97933 5.196 3.45 5 4 5H7.15L9 3H15L16.85 5H20C20.55 5 21.021 5.196 21.413 5.588C21.8043 5.97933 22 6.45 22 7V19C22 19.55 21.8043 20.021 21.413 20.413C21.021 20.8043 20.55 21 20 21H4Z" fill="black"/>
                      </svg>
                      </label>
                  </>
                )}
              </div>
            </div>
            <div className="col-md-6">
              <div className="profile-head">
                <input
                  className="name"
                  type="text"
                  id="fname"
                  name="name"
                  placeholder="name"
                  defaultValue={users.firstName  }
                  onChange={(e) => {
                    {
                      let text = e.target.value;
                      const myArray = text.split(" ");
                      dataValues.current = {
                        ...dataValues.current,
                        firstName: myArray[0],
                      };
                      dataValues.current = {
                        ...dataValues.current,
                        lastName: myArray[1],
                      };
                    }
                    console.log(dataValues.current.name);
                  }}
                  disableUnderline={true}
                  readOnly={!editMode}
                />
                <ul className="nav nav-tab" role="tablist">
                  <li className="nav-item"></li>
                  <li className="nav-item"></li>
                </ul>
              </div>
            </div>

            <div className="col-md-2">
              <DropdownButton id="dropdown-item-button" title="Settings">
                <Dropdown.Item
                  onClick={async () => {
                    console.log("click");
                    navigate(from, { replace: true });
                    setAuth(null);
                  }}
                >
                  LogOut
                </Dropdown.Item>
                <Dropdown.Item
                  onClick={async () => {
                    console.log("click");
                    if(hostels.length ==0){
                      try {
                      const response = await axios.delete(
                        usersDeleteUrl + `/${userData.current._id}`,
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
                  }
                  else{
                    alert("You have still hostel registered!")
                  }
                  }
                    }
                    
                >
                  Delete Acc
                </Dropdown.Item>

                <Dropdown.Item
                  onClick={async () => {
                    console.log("click");
                    setEditMode((prevEditMode) => !prevEditMode);
                    if (editMode) {
                      try {
                          let dataImgUrl=dataValues.current.imageUrl;
                        if (image) {
                          console.log("imageh",image);
                       
                         
                       

                       
                        dataValues.current = {
                          ...dataValues.current,
                          email: users.email,
                        };

                        
                        }
                        //data.append('data',dataValues.current)
                        //console.log("data",data); 
                        const response = await axios.post(
                          usersUpdateUrl,
                          dataValues.current,
                          {
                            headers: {
                               "Content-Type": "application/json",
                              Accept: "*/*",
                              //"Content-Type": `multipart/form-data; boundary=${data._boundary}`,
                            },
                            withCredentials: true,
                          }
                        );
                        console.log(response.data);
                        // setAuth(response.data.user);
                        // setUserData(response.data.user);

                        console.log("Updated Successfully!");
                        dataValues.current = {
                          ...dataValues.current,
                          imageUrl: response.data.img
                          
                        };
                        

                      } catch (err) {
                        console.log(err);
                        if (err.response?.status == 409) {
                          console.log("Username not updated successfully");
                        } else if (err?.response) {
                          console.log(!err?.response);
                          console.log("no server response");
                        } else {
                          console.log("Failed to update");
                          setError("Failed to update");
                          console.error(err);
                        }
                      }
                    } else {
                      console.log("Not in Edit mode!");
                      // setError(true);
                    }
                  }}
                >
                  {editMode ? "Save" : "Edit Profile"}
                </Dropdown.Item>
              </DropdownButton>
            </div>

            <div className="row">
              {/* left  side data */}
              <div className="profile-work col-md-4 ">
                <h6>DETAILS</h6>
                {/* <div className="col-md-4"> */}
                <div>
                  <p className="">
                    <i className="px-2 fa-solid fa-envelope" /> {users?.email || ""}
                  </p>
                </div>
                <div>
                  <p>
                    <i className="px-2 fas fa-phone-alt"></i>{" "}
                    <input
                      className="address"
                      type="text"
                      id="phoneNumber"
                      name="phoneNumber"
                      defaultValue={users?.phoneNumber || ""}
                      placeholder="phone Number"
                      disableunderline={true}
                      readOnly={!editMode}
                      onChange={(e) => {
                        //  setDataValue(prevDatavalues => ({...prevDatavalues, address: e.target.value }));
                        dataValues.current = {
                          ...dataValues.current,
                          phoneNumber: e.target.value,
                        };
                      }}
                    />
                  </p>
                </div>
                <div>
                  <p>
                    <i class="px-2 fas fa-home"></i>{" "}
                    <input
                      className="address"
                      type="text"
                      id="address"
                      name="address"
                      defaultValue={users?.locality || ""}
                      placeholder="locality"
                      disableunderline={true}
                      readOnly={!editMode}
                      onChange={(e) => {
                        //  setDataValue(prevDatavalues => ({...prevDatavalues, address: e.target.value }));
                        dataValues.current = {
                          ...dataValues.current,
                          locality: e.target.value,
                        };
                      }}
                    />
                  </p>
                </div>
                <div>
                  <p>
                    <i class="px-2 fas fa-map-marker-alt"></i>{" "}
                    <input
                      className="place"
                      type="text"
                      id="place"
                      name="place"
                      defaultValue={users?.district || ""}
                      placeholder="district"
                      disableunderline={true}
                      readOnly={!editMode}
                      onChange={(e) => {
                        //  setDataValue(prevDatavalues => ({...prevDatavalues, district: e.target.value }));
                        dataValues.current = {
                          ...dataValues.current,
                          district: e.target.value,
                        };
                      }}
                    />
                  </p>
                </div>
                {/* </div> */}
              </div>

              {/* right side skills */}
              <PopUp trigger={buttonPopUp} setTrigger={setButtonPopUp} onAdd={(data) => setHostels(curr_data => [...curr_data, data])} />
              <div className="col-md-6">
                <div className="tab-content profile-tab" id="myTabContent">
                  <div className="hostel-box-header">
                    <h4>Hostels</h4>
                    <div
                      className="hostel-add-plus"
                      onClick={() => {
                        console.log("here");
                        setButtonPopUp(true);
                      }}
                    >
                      <BsPlusLg />
                    </div>
                  </div>
                  <div className="hostel-box-container">         
                   {
                     hostels.map((hostel, index) => (
                      <HostelBar key={index} data={hostel} onDelete={() => setHostels(curr_data => curr_data.filter((data, idx) => idx !== index)) } />
                     ))
                   }
                  </div>

                  {/* <Tabs defaultActiveKey="skills" className="">
                    <Tab eventKey="skills" title="Hostels">
                      <div className="tab-item-wrapper ">
                        <ul
                          onInput={(e) => {
                            const skillSet = [];
                            const skills = e.target.getElementsByTagName("li");
                            for (let i = 0; i <= skills.length - 1; i++)
                              {
                                 skillSet.push(skills[i].innerText)
                              }
                              console.log(skillSet)
                              dataValues.current = {...dataValues.current, skillList: [...skillSet] };

                          }}
                          className="list-unstyled py-2"
                          contentEditable={true}
                        >
                          <li className="py-1"></li>
                          <li className="py-1">Flowers Hostel</li>
                        </ul>
                      </div>
                    </Tab>
                   
                  </Tabs> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </>
  );
}

export default OwnerDashboard;
