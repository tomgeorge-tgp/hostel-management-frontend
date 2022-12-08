
import axios from 'axios'
import { useEffect,useState } from 'react';
import {fetchHomeUrl} from "../url/url";
import NavBar from "../components/NavBar";
import TitleBar from "../components/TitleBar";
import Cards from  "../components/Cards"
import "./style/hostelPage.css";
import ownerDefault from "../assets/avatarDefault.png";
import hostelDefault from "../assets/hostelDefault.jpg";
import { Link, useNavigate, useLocation } from "react-router-dom";
import "./style/hostelPage.css"
function HostelPage(){
const [hostel,setHostel]=useState();
const location = useLocation();
const navigate = useNavigate();

// setHostel(location.state);
//console.log(hostel);
console.log(location.state);
    return(<>
        
    <div className="container emp-profile">
    <span className='back-arrow' onClick={()=>
    {
        navigate("/");
    }}>

<svg width="12" height="14" viewBox="0 0 12 14" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M11.5 12.5L3.25 7L11.5 1.5L10.5 0L0 7L10.5 14L11.5 12.5Z" fill="black"/>
</svg>
    </span>
    <p></p>
      <div className="row">
        <div className="col-md-4">
          <div className="hostel-profile-img-left " style={{ position: "relative" }}>
            {console.log("image")}
            {/* {  console.log(dataValues.current.imageUrl)} */}
            <img src={hostelDefault} alt="img" />
            {/* <img src={avatarDefault} alt="img" /> */}
            {/* {imageList.map((url)=>{
               if(url==="https://firebasestorage.googleapis.com/v0/b/auth-development-4cccd.appspot.com/o/images%2Fcustomer.png7d3e244e-3c87-4f38-8c96-2e3d60f3149c?alt=media&token=a633f966-81f0-4557-b133-eb7d7835fbec"){
                console.log(url);
                 return (<img src={url}/ >);
               
               } */}
            
              <>
             
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
            
          </div>
        </div>
        <div className="col-md-6">
          <div className="profile-head">
            <h1 className="hostel-name">{location.state.name}</h1>
            <ul className="nav nav-tab" role="tablist">
              <li className="nav-item"></li>
              <li className={`${location.state.category=="male"? "blue":"pink"}`}>{location.state.category=="male" ? "Gents":"Ladies"}</li>
            </ul>
          </div>
        </div>

        <div className="col-md-2">

        <div className="hostel-profile-img-right " style={{ position: "relative" }}>
       
        <img src={ownerDefault}/>
        </div>
        </div>

        <div className="row">
    
          <div className="profile-work-left col-md-4 ">
            <h6>Hostel Details</h6>
           
              
              <div className="owner-details">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2C8.13 2 5 5.13 5 9C5 14.25 12 22 12 22C12 22 19 14.25 19 9C19 5.13 15.87 2 12 2ZM12 11.5C11.337 11.5 10.7011 11.2366 10.2322 10.7678C9.76339 10.2989 9.5 9.66304 9.5 9C9.5 8.33696 9.76339 7.70107 10.2322 7.23223C10.7011 6.76339 11.337 6.5 12 6.5C12.663 6.5 13.2989 6.76339 13.7678 7.23223C14.2366 7.70107 14.5 8.33696 14.5 9C14.5 9.66304 14.2366 10.2989 13.7678 10.7678C13.2989 11.2366 12.663 11.5 12 11.5V11.5Z" fill="black"/>
                </svg>
                <p className="owner-details-text">{location.state.Address || "Address"}</p>
              </div>
                
                
             
            
            <div className="owner-details">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M15 23H13V21H15V23ZM19 21H17V23H19V21ZM15 17H13V19H15V17ZM7 21H5V23H7V21ZM7 17H5V19H7V17ZM19 17H17V19H19V17ZM15 13H13V15H15V13ZM19 13H17V15H19V13ZM21 9C21.5304 9 22.0391 9.21071 22.4142 9.58579C22.7893 9.96086 23 10.4696 23 11V23H21V11H11V23H9V15H3V23H1V15C1 14.4696 1.21071 13.9609 1.58579 13.5858C1.96086 13.2107 2.46957 13 3 13H9V11C9 10.4696 9.21071 9.96086 9.58579 9.58579C9.96086 9.21071 10.4696 9 11 9V7C11 6.46957 11.2107 5.96086 11.5858 5.58579C11.9609 5.21071 12.4696 5 13 5H15V1H17V5H19C19.5304 5 20.0391 5.21071 20.4142 5.58579C20.7893 5.96086 21 6.46957 21 7V9ZM19 9V7H13V9H19Z" fill="black"/>
              </svg>
              <p className="owner-details-text">{location.state.City || "City"}</p>
            </div>

            <div>
              <p className="">
                <i className="px-2 fa-solid fa-envelope" /> {""}
              </p>
            </div>

            <div>
              <p>
                <i class="px-2 fas fa-map-marker-alt"></i>{" "}
                 
              </p>
            </div>
            {/* </div> */}
          </div>

          {/* right side skills */}
          
          <div className="col-md-4">
            <div className="tab-content profile-tab" id="myTabContent">
              <div className="beds-header">Number of Beds Left:</div>
              <ul>
                <li>
                <div className="no_one_bed">
                <svg width="32" height="32" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M38 14H22V28H6V10H2V40H6V34H42V40H46V22C46 19.8783 45.1571 17.8434 43.6569 16.3431C42.1566 14.8429 40.1217 14 38 14ZM14 26C15.5913 26 17.1174 25.3679 18.2426 24.2426C19.3679 23.1174 20 21.5913 20 20C20 18.4087 19.3679 16.8826 18.2426 15.7574C17.1174 14.6321 15.5913 14 14 14C12.4087 14 10.8826 14.6321 9.75736 15.7574C8.63214 16.8826 8 18.4087 8 20C8 21.5913 8.63214 23.1174 9.75736 24.2426C10.8826 25.3679 12.4087 26 14 26V26Z" fill="black"/>
                </svg>
              <p>{location.state.no_one_bed}</p>
                </div>
                </li>

                <li>
                <div  className="no_two_bed">
                <svg width="32" height="32" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M38 14H22V28H6V10H2V40H6V34H42V40H46V22C46 19.8783 45.1571 17.8434 43.6569 16.3431C42.1566 14.8429 40.1217 14 38 14ZM14 26C15.5913 26 17.1174 25.3679 18.2426 24.2426C19.3679 23.1174 20 21.5913 20 20C20 18.4087 19.3679 16.8826 18.2426 15.7574C17.1174 14.6321 15.5913 14 14 14C12.4087 14 10.8826 14.6321 9.75736 15.7574C8.63214 16.8826 8 18.4087 8 20C8 21.5913 8.63214 23.1174 9.75736 24.2426C10.8826 25.3679 12.4087 26 14 26V26Z" fill="black"/>
                </svg>
                <svg width="32" height="32" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M38 14H22V28H6V10H2V40H6V34H42V40H46V22C46 19.8783 45.1571 17.8434 43.6569 16.3431C42.1566 14.8429 40.1217 14 38 14ZM14 26C15.5913 26 17.1174 25.3679 18.2426 24.2426C19.3679 23.1174 20 21.5913 20 20C20 18.4087 19.3679 16.8826 18.2426 15.7574C17.1174 14.6321 15.5913 14 14 14C12.4087 14 10.8826 14.6321 9.75736 15.7574C8.63214 16.8826 8 18.4087 8 20C8 21.5913 8.63214 23.1174 9.75736 24.2426C10.8826 25.3679 12.4087 26 14 26V26Z" fill="black"/>
                </svg>
                
                <p>{location.state.no_two_bed}</p>
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
               
                <p>{location.state.no_three_bed}</p>
                
                </div>
                </li>

              </ul>

           
            </div>
          </div>
          
          <div className="profile-work-right col-md-4 ">
          <h4>{location.state.first_name+" "+location.state.last_name}</h4>

            <h6>Owner Details</h6>
            
              <div className="details">
              <div className="owner-details">
                <a href="tel:9876543210"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 12C19.7333 12 19.496 11.904 19.288 11.712C19.0793 11.5207 18.9583 11.2833 18.925 11C18.7083 9.45 18.0543 8.129 16.963 7.037C15.871 5.94567 14.55 5.29167 13 5.075C12.7167 5.04167 12.4793 4.925 12.288 4.725C12.096 4.525 12 4.28333 12 4C12 3.71667 12.1 3.479 12.3 3.287C12.5 3.09567 12.7333 3.01667 13 3.05C15.1 3.28333 16.8917 4.14167 18.375 5.625C19.8583 7.10833 20.7167 8.9 20.95 11C20.9833 11.2667 20.904 11.5 20.712 11.7C20.5207 11.9 20.2833 12 20 12ZM15.825 12C15.6083 12 15.4167 11.925 15.25 11.775C15.0833 11.625 14.9583 11.425 14.875 11.175C14.7417 10.6917 14.4877 10.2623 14.113 9.887C13.7377 9.51233 13.3083 9.25833 12.825 9.125C12.575 9.04167 12.375 8.91667 12.225 8.75C12.075 8.58333 12 8.38333 12 8.15C12 7.81667 12.1167 7.54567 12.35 7.337C12.5833 7.129 12.8417 7.05833 13.125 7.125C14.0583 7.34167 14.8627 7.78733 15.538 8.462C16.2127 9.13733 16.6583 9.94167 16.875 10.875C16.9417 11.1583 16.8667 11.4167 16.65 11.65C16.4333 11.8833 16.1583 12 15.825 12V12ZM19.95 21C17.8 21 15.7043 20.5207 13.663 19.562C11.621 18.604 9.81267 17.3373 8.238 15.762C6.66267 14.1873 5.396 12.379 4.438 10.337C3.47933 8.29567 3 6.2 3 4.05C3 3.75 3.1 3.5 3.3 3.3C3.5 3.1 3.75 3 4.05 3H8.1C8.33333 3 8.54167 3.075 8.725 3.225C8.90833 3.375 9.01667 3.56667 9.05 3.8L9.7 7.3C9.73333 7.53333 9.72933 7.74567 9.688 7.937C9.646 8.129 9.55 8.3 9.4 8.45L7 10.9C7.7 12.1 8.575 13.225 9.625 14.275C10.675 15.325 11.8333 16.2333 13.1 17L15.45 14.65C15.6 14.5 15.796 14.3873 16.038 14.312C16.2793 14.2373 16.5167 14.2167 16.75 14.25L20.2 14.95C20.4333 15 20.625 15.1123 20.775 15.287C20.925 15.4623 21 15.6667 21 15.9V19.95C21 20.25 20.9 20.5 20.7 20.7C20.5 20.9 20.25 21 19.95 21Z" fill="black"/>
                </svg>
                </a>
              <p className="owner-details-text">{location.state.phone_number}</p>
              </div>
            
           
          
             
              <div className="owner-details">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 4H4C2.9 4 2.01 4.9 2.01 6L2 18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6C22 4.9 21.1 4 20 4ZM19.6 8.25L12.53 12.67C12.21 12.87 11.79 12.87 11.47 12.67L4.4 8.25C4.29973 8.19371 4.21192 8.11766 4.14189 8.02645C4.07186 7.93525 4.02106 7.83078 3.99258 7.71937C3.96409 7.60796 3.9585 7.49194 3.97616 7.37831C3.99381 7.26468 4.03434 7.15581 4.09528 7.0583C4.15623 6.96079 4.23632 6.87666 4.33073 6.811C4.42513 6.74533 4.53187 6.69951 4.6445 6.6763C4.75712 6.65309 4.87328 6.65297 4.98595 6.67595C5.09863 6.69893 5.20546 6.74453 5.3 6.81L12 11L18.7 6.81C18.7945 6.74453 18.9014 6.69893 19.014 6.67595C19.1267 6.65297 19.2429 6.65309 19.3555 6.6763C19.4681 6.69951 19.5749 6.74533 19.6693 6.811C19.7637 6.87666 19.8438 6.96079 19.9047 7.0583C19.9657 7.15581 20.0062 7.26468 20.0238 7.37831C20.0415 7.49194 20.0359 7.60796 20.0074 7.71937C19.9789 7.83078 19.9281 7.93525 19.8581 8.02645C19.7881 8.11766 19.7003 8.19371 19.6 8.25V8.25Z" fill="black"/>
                </svg>
                <p className="owner-details-text">{location.state.email}</p>
              </div>
              
          
              
              {/* <div className="owner-details">
                 <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                 <path d="M20 4H4C2.9 4 2.01 4.9 2.01 6L2 18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6C22 4.9 21.1 4 20 4ZM19.6 8.25L12.53 12.67C12.21 12.87 11.79 12.87 11.47 12.67L4.4 8.25C4.29973 8.19371 4.21192 8.11766 4.14189 8.02645C4.07186 7.93525 4.02106 7.83078 3.99258 7.71937C3.96409 7.60796 3.9585 7.49194 3.97616 7.37831C3.99381 7.26468 4.03434 7.15581 4.09528 7.0583C4.15623 6.96079 4.23632 6.87666 4.33073 6.811C4.42513 6.74533 4.53187 6.69951 4.6445 6.6763C4.75712 6.65309 4.87328 6.65297 4.98595 6.67595C5.09863 6.69893 5.20546 6.74453 5.3 6.81L12 11L18.7 6.81C18.7945 6.74453 18.9014 6.69893 19.014 6.67595C19.1267 6.65297 19.2429 6.65309 19.3555 6.6763C19.4681 6.69951 19.5749 6.74533 19.6693 6.811C19.7637 6.87666 19.8438 6.96079 19.9047 7.0583C19.9657 7.15581 20.0062 7.26468 20.0238 7.37831C20.0415 7.49194 20.0359 7.60796 20.0074 7.71937C19.9789 7.83078 19.9281 7.93525 19.8581 8.02645C19.7881 8.11766 19.7003 8.19371 19.6 8.25V8.25Z" fill="black"/>
                 </svg>
                 <p className="owner-details-text">City</p>
              </div> 
              */}
            
            <div>
              <p>
                <i class="px-2 fas fa-map-marker-alt"></i>{" "}
                 
              </p>
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  
     
    </>
    )
}

export default HostelPage;
