import { Navbar } from "react-bootstrap";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import "./ComponentStyles.css";

import { changeBreadcrumsValue } from "../Redux/Layout/Breadcrums/actions";

const NavBar = () => {
  const dispatch = useDispatch();
  // const breadcrumsValue = useSelector(
  //   (state: IAppState) => state.breadcrumsState.breadCrumbValue
  // );
  const handleBreadCrums = (value: string) => {
    dispatch(changeBreadcrumsValue(value));
  };
  return (
    <Navbar className="nav-bar" >
      <Link to="/Home" onClick={() => handleBreadCrums("")}>
        <Navbar.Brand href="#home"  > 
          <h3 className="brand-name" style={{color:"#ff66ff"}} >Grovrr</h3>
        </Navbar.Brand>
      </Link>

      <Navbar.Toggle />

      {/* <Navbar.Collapse className="justify-content-center" style={{color: "wheat"}}>
            hsfjd
        </Navbar.Collapse> */}

      <Navbar.Collapse
        className="justify-content-end"
        style={{ color: "wheat" }}
      >
        <Link to="/Search" onClick={() => handleBreadCrums((localStorage.getItem("JWT-Token")? "Search": ""))}>
          <IconButton aria-label="search" color="inherit" style={{color: "#ff66ff"}}>
            <SearchIcon />
          </IconButton>
        </Link>

        <Link to="/UserProfile" onClick={() => handleBreadCrums((localStorage.getItem("JWT-Token")? "Profile": ""))}>
          <img className="img img-circle "
            src= {localStorage.getItem("JWT-Token")? 
            "http://localhost:1337" + localStorage.getItem("User-Profile-Pic-Url") :
             "https://www.pngkey.com/png/full/114-1149878_setting-user-avatar-in-specific-size-without-breaking.png"}
            alt="Profile Pic"
            width="50em"
            height="50em"
          />
        </Link>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;
