import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { changeBreadcrumsValue } from "../Redux/Layout/Breadcrums/actions";

const MenuBar = () => {
  const dispatch = useDispatch();
  // const breadcrumsValue = useSelector(
  //   (state: IAppState) => state.breadcrumsState.breadCrumbValue
  // );
  const handleBreadCrums = (value: string) => {
    dispatch(changeBreadcrumsValue(value));
  };
  return (
    <>
      <Link to="/Private">
        {" "}
        <Button className="font-style menu-buttons"
          onClick={() => {
            handleBreadCrums((localStorage.getItem("JWT-Token")? "Private": ""));
          }}
          variant="outline-danger"
        >
          Private
        </Button>{" "}
      </Link>
      {"   "}
      <Link to="/Public">
        {" "}
        <Button className="font-style menu-buttons"
          onClick={() => {
            handleBreadCrums((localStorage.getItem("JWT-Token")? "Public": ""));
          }}
          variant="outline-success"
        >
          Public
        </Button>
      </Link>
      {"   "}
      <Link to="/Governoment">
        {" "}
        <Button className="font-style menu-buttons"
          onClick={() => {
            handleBreadCrums((localStorage.getItem("JWT-Token")? "Governoment": ""));
          }}
          variant="outline-secondary"
        >
          Governoment
        </Button>
      </Link>
      {"   "}
      <Link to="/Election">
        {" "}
        <Button className="font-style menu-buttons"
          onClick={() => {
            handleBreadCrums((localStorage.getItem("JWT-Token")? "Election": ""));
          }}
          variant="outline-primary"
        >
          Elections
        </Button>
      </Link>
      {"   "}
      <Link to="/Policy">
        {" "}
        <Button className="font-style menu-buttons"
          onClick={() => {
            handleBreadCrums((localStorage.getItem("JWT-Token")? "Policy": ""));
          }}
          variant="outline-dark"
        >
          Policy
        </Button>
      </Link>
      {"   "}
      <Link to="/About">
        {" "}
        <Button className="font-style menu-buttons"
          onClick={() => {
            handleBreadCrums((localStorage.getItem("JWT-Token")? "About": ""));
          }}
          variant="outline-warning"
        >
          About
        </Button>
      </Link>
      {"   "}
      <br /> <br />
    </>
  );
};

export default MenuBar;
