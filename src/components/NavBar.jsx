import "./style/navBar.css";

import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

function NavBar()
{
    return(
        <div className="nav-bar">
        <div className="nav-bar-dropdown">
         <DropdownButton
            // as={ButtonGroup}
            key="gender"
            id="gender"
            variant="secondary"
            title="Gender"
          >
            <Dropdown.Item eventKey="1" active>Male</Dropdown.Item>
            <Dropdown.Item eventKey="2">Female</Dropdown.Item>
            <Dropdown.Item eventKey="3" >
              Other
            </Dropdown.Item>
          </DropdownButton>
          </div> 
          <div className="nav-bar-dropdown">
          <DropdownButton
            // as={ButtonGroup}
            key="beds"
            id="beds"
            variant="secondary"
            title="No Of Beds"
          >
            <Dropdown.Item eventKey="1" active>1 Bed</Dropdown.Item>
            <Dropdown.Item eventKey="2">2 Bed</Dropdown.Item>
            <Dropdown.Item eventKey="3" >
              3 Bed
            </Dropdown.Item>
          </DropdownButton>
          </div>
        </div>
        )
}

export default NavBar;