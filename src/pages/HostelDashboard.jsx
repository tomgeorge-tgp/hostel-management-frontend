
import axios from 'axios';
import { useEffect,useState,useRef } from 'react';
// import {fetchHomeUrl} from "../url/url";
import {Link,Navigate,useNavigate,useLocation} from "react-router-dom"
import avatarDefault from "../assets/avatarDefault.png";
import "./style/hostelDashboard.css";
import { hostelUpdateUrl,hostelFetchUrl} from "../url/url";
function HostelDashboard(){

const location=useLocation();
const navigate = useNavigate();  
const [editMode, setEditMode] = useState(false);
const [image, setImage] = useState(null);
const [imageUrl, setImageUrl] = useState(location?.imageUrl || "");
const [imageList, setImageList] = useState([]);
const [hostel, setHostel] = useState({});
const dataValues = useRef({
    name: "",
    gender: "",
    Address: "",
    City: "",
    no_one_bed: 0,
    no_two_bed: 0,
    no_three_bed: 0,
    imageUrl: "",
  })
useEffect(()=>{
    axios.get(hostelFetchUrl+ `/data/${location?.state?._id}`)
    .then(res=>{
        setHostel(res.data.hostel);
        console.log("res.data",res.data);
        dataValues.current = res.data.hostel;
    }).catch(err=>{
        console.log(err)
    
    })



  },[])
  

  // var dataValues = useRef({
  //   name: hostel?.name || "",
  //   gender: hostel?.gender || "",
  //   Address: hostel?.address||"",
  //   City: hostel?.City || "",
  //   no_one_bed: hostel?.no_one_bed|| 0,
  //   no_two_bed: hostel?.no_two_bed|| 0,
  //   no_three_bed: hostel?.no_three_bed|| 0,
  //   imageUrl: hostel?.imageUrl || "",
  // });

console.log("hostel",hostel);

  console.log("datavalue",dataValues);
return(<>


  <form>
    <div className="container emp-profile">
    <span className='back-arrow' onClick={()=>
    {
        navigate("/owner/dashboard");
    }}>

<svg width="12" height="14" viewBox="0 0 12 14" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M11.5 12.5L3.25 7L11.5 1.5L10.5 0L0 7L10.5 14L11.5 12.5Z" fill="black"/>
</svg>
    </span>
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
              id="name"
              name="name"
              placeholder="Name"
              defaultValue={ hostel?.name }
              onChange={(e) => {
                {
                  console.log("name",e.target.value),
                //   const myArray = text.split(" ");
                  dataValues.current = {
                    ...dataValues.current,
                    name:e.target.value
                  };
                
                }
                console.log(dataValues.current);
              }}
              disableUnderline={true}
              readOnly={!editMode}
            />
            <ul className="nav nav-tab" role="tablist">
              <li className="nav-item"></li>
              <li className="nav-item">{hostel?.category}</li>
            </ul>
          </div>
        </div>

        <div className="col-md-2">
        <input
                onClick={async () => {
                  setEditMode(prevEditMode=>!prevEditMode);
                  if (editMode) {
                     console.log("here");
                    try {
                      
                     //  let dataImgUrl=dataValues.current.imageUrl;
                    // if (image) {
                    //    console.log(image);
                    //   const imageRef = ref(
                    //     storage,
                    //     `images/${image.name + v4()}`
                    //   );
                    //     console.log("imageRef");
                    //     console.log(imageRef);
                    //     const url=await uploadBytes(imageRef,image.current);
                        
                    //    dataImgUrl=await getDownloadURL(url.ref);
                      //  console.log("dataimageUrl");
                      //  console.log(dataimageUrl);
                      // setDataValue(prevDatavalues => ({...prevDatavalues, imageUrl: dataImgUrl }))
                      dataValues.current = {...dataValues.current,name:hostel.name,_id:hostel._id,_id_owner:hostel._id_owner};// imageUrl: dataImgUrl
  
                        // dataValues.imageUrl=dataImgUrl;
                      //  handler.forceUpdate();
                      // setImageUrl(dataImgUrl);
                    
                      const response = await axios.put(
                          hostelUpdateUrl,
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
                        
                      
                    
                    
                   
                     
               
                type="button"
                className="profile-edit-btn"
                defaultValue={editMode ? "Save" : "Edit Profile"}
              />
     
        </div>

        <div className="row">
          {/* left  side data */}
          <div className="profile-work col-md-4 ">
            <h6>DETAILS</h6>
            {/* <div className="col-md-4"> */}
            <div>
              <p className="">
                <i className="px-2 fa-solid fa-envelope" /> {""}
              </p>
            </div>
            <div>
              <p>
                <i className="px-2 fas fa-phone-alt"></i>{" "}
                <input
                  className="address"
                  type="text"
                  id="Address"
                  name="Address"
                  defaultValue={hostel?.Address || ""}
                  placeholder="Address"
                  disableunderline={true}
                  readOnly={!editMode}
                  onChange={(e) => {
                    //  setDataValue(prevDatavalues => ({...prevDatavalues, address: e.target.value }));
                    dataValues.current = {
                      ...dataValues.current,
                      Address: e.target.value,
                    };
                  }}
                />
              </p>
            </div>
            <div>
              <p>
                <i class="px-2 fas fa-home"></i>{" "}
                <input
                  className="place"
                  type="text"
                  id="City"
                  name="City"
                  defaultValue={hostel?.City}
                  placeholder="City"
                  disableunderline={true}
                  readOnly={!editMode}
                  onChange={(e) => {
                    //  setDataValue(prevDatavalues => ({...prevDatavalues, district: e.target.value }));
                    dataValues.current = {
                      ...dataValues.current,
                      City: e.target.value,
                    };
                  }}
                />
                
              </p>
            </div>
            <div>
              <p>
                <i class="px-2 fas fa-map-marker-alt"></i>{" "}
                 {/* <input
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
                /> */}
              </p>
            </div>
            {/* </div> */}
          </div>

          {/* right side skills */}
          
          <div className="col-md-6">
            <div className="tab-content profile-tab" id="myTabContent">
              <div className="beds-header">Number of Beds Left:</div>
              <ul>
                <li>
                <div>
                <svg width="32" height="32" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M38 14H22V28H6V10H2V40H6V34H42V40H46V22C46 19.8783 45.1571 17.8434 43.6569 16.3431C42.1566 14.8429 40.1217 14 38 14ZM14 26C15.5913 26 17.1174 25.3679 18.2426 24.2426C19.3679 23.1174 20 21.5913 20 20C20 18.4087 19.3679 16.8826 18.2426 15.7574C17.1174 14.6321 15.5913 14 14 14C12.4087 14 10.8826 14.6321 9.75736 15.7574C8.63214 16.8826 8 18.4087 8 20C8 21.5913 8.63214 23.1174 9.75736 24.2426C10.8826 25.3679 12.4087 26 14 26V26Z" fill="black"/>
                </svg>
                
                <input
                  className="address"
                  type="number"
                  id="no_one_bed"
                  name="no_one_bed"
                  defaultValue={hostel?.no_one_bed }
                  placeholder="0"
                  disableunderline={true}
                  readOnly={!editMode}
                  onChange={(e) => {
                    //  setDataValue(prevDatavalues => ({...prevDatavalues, district: e.target.value }));
                    dataValues.current = {
                      ...dataValues.current,
                      no_one_bed: e.target.value,
                    };
                  }}
                />
                </div>
                </li>
                <li>
                <div>
                <svg width="32" height="32" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M38 14H22V28H6V10H2V40H6V34H42V40H46V22C46 19.8783 45.1571 17.8434 43.6569 16.3431C42.1566 14.8429 40.1217 14 38 14ZM14 26C15.5913 26 17.1174 25.3679 18.2426 24.2426C19.3679 23.1174 20 21.5913 20 20C20 18.4087 19.3679 16.8826 18.2426 15.7574C17.1174 14.6321 15.5913 14 14 14C12.4087 14 10.8826 14.6321 9.75736 15.7574C8.63214 16.8826 8 18.4087 8 20C8 21.5913 8.63214 23.1174 9.75736 24.2426C10.8826 25.3679 12.4087 26 14 26V26Z" fill="black"/>
                </svg>
                <svg width="32" height="32" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M38 14H22V28H6V10H2V40H6V34H42V40H46V22C46 19.8783 45.1571 17.8434 43.6569 16.3431C42.1566 14.8429 40.1217 14 38 14ZM14 26C15.5913 26 17.1174 25.3679 18.2426 24.2426C19.3679 23.1174 20 21.5913 20 20C20 18.4087 19.3679 16.8826 18.2426 15.7574C17.1174 14.6321 15.5913 14 14 14C12.4087 14 10.8826 14.6321 9.75736 15.7574C8.63214 16.8826 8 18.4087 8 20C8 21.5913 8.63214 23.1174 9.75736 24.2426C10.8826 25.3679 12.4087 26 14 26V26Z" fill="black"/>
                </svg>
                
                <input
                  className="address"
                  type="number"
                  id="no_two_bed"
                  name="no_two_bed"
                  defaultValue={hostel?.no_two_bed}
                  placeholder="0"
                  disableunderline={true}
                  readOnly={!editMode}
                  onChange={(e) => {
                    //  setDataValue(prevDatavalues => ({...prevDatavalues, district: e.target.value }));
                    dataValues.current = {
                      ...dataValues.current,
                      no_two_bed: e.target.value,
                    };
                  }}
                />
                </div>
                </li>
                <li>

                <div className="no_three_bed">
                <svg width="32" height="32" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M38 14H22V28H6V10H2V40H6V34H42V40H46V22C46 19.8783 45.1571 17.8434 43.6569 16.3431C42.1566 14.8429 40.1217 14 38 14ZM14 26C15.5913 26 17.1174 25.3679 18.2426 24.2426C19.3679 23.1174 20 21.5913 20 20C20 18.4087 19.3679 16.8826 18.2426 15.7574C17.1174 14.6321 15.5913 14 14 14C12.4087 14 10.8826 14.6321 9.75736 15.7574C8.63214 16.8826 8 18.4087 8 20C8 21.5913 8.63214 23.1174 9.75736 24.2426C10.8826 25.3679 12.4087 26 14 26V26Z" fill="black"/>
                </svg>
                <svg width="32" height="32" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M38 14H22V28H6V10H2V40H6V34H42V40H46V22C46 19.8783 45.1571 17.8434 43.6569 16.3431C42.1566 14.8429 40.1217 14 38 14ZM14 26C15.5913 26 17.1174 25.3679 18.2426 24.2426C19.3679 23.1174 20 21.5913 20 20C20 18.4087 19.3679 16.8826 18.2426 15.7574C17.1174 14.6321 15.5913 14 14 14C12.4087 14 10.8826 14.6321 9.75736 15.7574C8.63214 16.8826 8 18.4087 8 20C8 21.5913 8.63214 23.1174 9.75736 24.2426C10.8826 25.3679 12.4087 26 14 26V26Z" fill="black"/>
                </svg>
                <svg width="32" height="32" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M38 14H22V28H6V10H2V40H6V34H42V40H46V22C46 19.8783 45.1571 17.8434 43.6569 16.3431C42.1566 14.8429 40.1217 14 38 14ZM14 26C15.5913 26 17.1174 25.3679 18.2426 24.2426C19.3679 23.1174 20 21.5913 20 20C20 18.4087 19.3679 16.8826 18.2426 15.7574C17.1174 14.6321 15.5913 14 14 14C12.4087 14 10.8826 14.6321 9.75736 15.7574C8.63214 16.8826 8 18.4087 8 20C8 21.5913 8.63214 23.1174 9.75736 24.2426C10.8826 25.3679 12.4087 26 14 26V26Z" fill="black"/>
                </svg>
               
                <input
                  className="address"
                  type="number"
                  id="no_three_bed"
                  name="no_three_bed"
                  defaultValue={hostel?.no_three_bed}
                  placeholder="0"
                  disableunderline={true}
                  readOnly={!editMode}
                  onChange={(e) => {
                    //  setDataValue(prevDatavalues => ({...prevDatavalues, district: e.target.value }));
                    dataValues.current = {
                      ...dataValues.current,
                      no_three_bed: e.target.value,
                    };
                  }}
                />
                
                </div>
                </li>

              </ul>

           
            </div>
          </div>
        </div>
      </div>
    </div>
  </form>
</>
)
}

export default HostelDashboard;


