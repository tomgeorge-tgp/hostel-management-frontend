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

  const [image, setImage] = useState(null);
  const [imageUrl, setImageUrl] = useState(users?.imageUrl || "");
  const [imageList, setImageList] = useState([]);
  const location = useLocation();

  const from = "/login" || "/";
  const allInputs = { imgUrl: "" };
  //console.log("id",userData.current)

  let endpoints = [
    {
      url: usersDashboardUrl + `/${userData.current._id}`,
      onSuccess: (res) => {
        console.log("res.user", res.data.user);
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

  var dataValues = useRef({
    firstName: users?.firstName || "",
    lastName: users?.lastName || "",
    email: users?.email || "",
    phoneNumber: users?.phoneNumber,
    locality: users?.locality || "",
    district: users?.district || "",
    imageUrl: users?.imageUrl || "",
  });

  //console.log("datavalues",dataValues.current);

  // const imageListRef =ref(storage,"images/");
  //const image=useRef(null);
  // Create a reference to the hidden file input element
  // const hiddenFileInput = React.useRef(null);

  // Programatically click the hidden file input element
  // when the Button component is clicked
  // const handleClick = (event) => {
  //   //hiddenFileInput.current.click();
  // };
  // // Call a function (passed as a prop from the parent component)
  // // to handle the user-selected file
  // const handleChange = (event) => {
  //   const fileUploaded = event.target.files[0];
  //   //props.handleFile(fileUploaded);
  // };

  //dataValues =

  // const handler = this;
  // console.log('this',handler)
  // useEffect(()=>{
  //   listAll(imageListRef).then((responce)=>{
  //     console.log("responce");
  //     console.log(responce);
  //     responce.items.forEach((item)=>{
  //       getDownloadURL(item).then((url)=>{
  //         setImageList((prev)=> [...prev,url]);
  //       });
  //     });
  //   });
  // },[]);
  //   console.log("imageListRef");
  //   console.log(imageListRef);

  //   if (!loggedIn) return <Redirect to="/workerSignIn" />;
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
                {/* <img src={avatarDefault} alt="img" /> */}
                {/* {imageList.map((url)=>{
                   if(url==="https://firebasestorage.googleapis.com/v0/b/auth-development-4cccd.appspot.com/o/images%2Fcustomer.png7d3e244e-3c87-4f38-8c96-2e3d60f3149c?alt=media&token=a633f966-81f0-4557-b133-eb7d7835fbec"){
                    console.log(url);
                     return (<img src={url}/ >);
                   
                   } */}
                {editMode && (
                  <>
                    <input
                      type="file"
                      id="actual-btn"
                      accept="img"
                      hidden
                      onChange={(e) => {
                        {
                          console.log(e.target.files[0]);
                          image.current = e.target.files[0];
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
                      <i className=" fas fa-camera  fa-2x"></i>{" "}
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
                    setAuth(null);
                  }}
                >
                  LogOut
                </Dropdown.Item>
                <Dropdown.Item
                  onClick={async () => {
                    console.log("click");
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
                  }}
                >
                  Delete Acc
                </Dropdown.Item>

                <Dropdown.Item
                  onClick={async () => {
                    console.log("click");
                    setEditMode((prevEditMode) => !prevEditMode);
                    if (editMode) {
                      try {
                        //  let dataImgUrl=dataValues.current.imageUrl;
                        // if (image) {
                        //   console.log(image);
                        // const imageRef = ref(
                        //     storage,
                        //     `images/${image.name + v4()}`
                        //   );
                        //   console.log("imageRef");
                        //     console.log(imageRef);
                        //     const url=await uploadBytes(imageRef,image.current);

                        //    dataImgUrl=await getDownloadURL(url.ref);

                        //setDataValue(prevDatavalues => ({...prevDatavalues, imageUrl: dataImgUrl }))
                        // dataValues.current = {...dataValues.current, imageUrl: dataImgUrl };
                        dataValues.current = {
                          ...dataValues.current,
                          email: users.email,
                        };

                        // dataValues.imageUrl=dataImgUrl;
                        //  handler.forceUpdate();
                        // setImageUrl(dataImgUrl);

                        // console.log("url");
                        // console.log(url);

                        console.log("dataValues");
                        console.log(dataValues.current);
                        // setImageList((prev)=>[...prev,url]);

                        //console.log("imageList");

                        // console.log(imageList);

                        //}

                        // const userRef = doc(db, "users", user.uid);

                        //await updateDoc(userRef, dataValues.current);
                        //console.log("Registered Successfully!");

                        //setImageUrl(dataImgUrl)
                        const response = await axios.post(
                          usersUpdateUrl,
                          JSON.stringify(dataValues.current),
                          {
                            headers: {
                              "Content-Type": "application/json",
                              Accept: "*/*",
                            },
                            withCredentials: true,
                          }
                        );
                        console.log(response.data);
                        // setAuth(response.data.user);
                        // setUserData(response.data.user);

                        console.log("Updated Successfully!");
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
              <PopUp trigger={buttonPopUp} setTrigger={setButtonPopUp} />
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
                     hostels.map((hostel)=>(
                    
                       <HostelBar data={hostel} />

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
