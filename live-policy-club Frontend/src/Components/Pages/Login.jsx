import React, { useState, useContext } from "react";
import classnames from "classnames";

import "./login.css";
import { Link, Redirect } from "react-router-dom";
import Axios from "axios";
import { Alert, Spinner } from "reactstrap";
import { useDispatch } from "react-redux";
import { setUserValue } from "../../Redux/Functionalities/UserInfo/actions";
import { changeProfilePic } from "../../Redux/Functionalities/ProfilePic/actions";

// import StoreContext from "../../context/Store";

const Login = (props) => {
  // const context = useContext(StoreContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [passError, setPassError] = useState(false);
  let [errors, setErrors] = useState([]);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();


  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setErrors([]);

    if (!email) {
      setEmailError(true);
    } else setEmailError(false);

    if (!password) {
      setPassError(true);
    } else setPassError(false);

    if (!emailError && !passError) {
      let formData = new FormData();
      formData.append("email", email);
      formData.append("password", password);

      Axios.post(
        "http://localhost:1337/auth/local",
        {
          identifier: email,
          password: password,
        },
        {
          headers: {
            Accept: "application/json",
          },
        }
      )
        .then((res) => {
          // localStorage.setItem(
          //   process.env.REACT_APP_ACCESS_TOKEN,
          //   res.data.jwt
          // );
          // context.setUser(res.data.user);
          setLoading(false);
          console.log(res);

            const user = {
              id: res.data.user.id,
              username: res.data.user.username,
              email: res.data.user.email,
              bio: res.data.user.Bio,
              rank: res.data.user.Rank,
              partyline: res.data.user.Partyline,
              category: res.data.user.catagoery 
            };

            localStorage.setItem('JWT-Token', res.data.jwt);
            localStorage.setItem('User-Profile-Pic-Url', res.data.user.Image.formats.thumbnail.url);
            dispatch(setUserValue(user));
            dispatch(changeProfilePic(true));
            

            if(localStorage.getItem('JWT-Token')){
              // <Redirect to="/Home" />
              window.location = "/Home"
            }
              


        })
        .catch((error) => {
          let e = [];
          console.log("Error: " + error.response);
          const arr = error.response.data.messages[0].message;

          for (const m of arr) {
            if (m.message.includes("Identifier"))
              m.message = m.message.replace("Identifier", "Email");
            e.push(m.message);
          }

          setErrors(e);
          setLoading(false);
          dispatch(changeProfilePic(false));
        });
    }

    
  };
  if (localStorage.getItem('JWT-Token')) {
    console.log("Local Storage Token: " + localStorage.getItem('JWT-Token'));
    console.log("Local Storage User: " + localStorage.getItem('User-Profile-Pic-Url'));
    return <Redirect to="/Home" />;
  } else {
    return (
      <>
        <div className="d-flex justify-content-center align-items-center vh-100">
          <div className="card shadow" id="cardLogin">
            <div className="card-header text-primary font-style"><b><i>Login Portal</i></b></div>
            <div className="card-body">
              {errors &&
                errors.map((error, i) => (
                  <Alert color="danger" key={i}>
                    {error}
                  </Alert>
                ))}
              <form onSubmit={handleSubmit}>
                <div>
                  <div className="input-group mb-2">
                    <div className="input-group-prepend">
                      <div className="input-group-text">Email</div>
                    </div>
                    <input
                      type="email"
                      className="form-control"
                      autoFocus={true}
                      value={email}
                      name="email"
                      onChange={(e) => {
                        setEmail(e.target.value);
                        if (e.target.validity.valid) setEmailError(false);
                        else setEmailError(true);
                      }}
                      title="Enter your email address"
                      required
                    />
                    <div
                      className={classnames("invalid-feedback", {
                        "d-block": emailError,
                      })}
                    >
                      Please enter a valid email address
                    </div>
                  </div>
                  <div className="input-group mb-3">
                    <div className="input-group-prepend">
                      <div className="input-group-text">Password</div>
                    </div>
                    <input
                      type="password"
                      className="form-control"
                      value={password}
                      name="password"
                      onChange={(e) => {
                        setPassword(e.target.value);
                        if (e.target.value === "") setPassError(true);
                        else setPassError(false);
                      }}
                      title="Enter your password"
                      required
                    />
                    <div
                      className={classnames("invalid-feedback", {
                        "d-block": passError,
                      })}
                    >
                      Please enter a password
                    </div>
                  </div>
                  <button
                    className="btn btn-success"
                    title="Login"
                    disabled={loading}
                  >
                    {!loading && (
                      <>
                        <i className="fas fa-sign-in-alt" /> Login
                      </>
                    )}
                    {loading && <Spinner color="light" size="sm" />}
                  </button>
                  {/* <Link
                    className="btn btn-outline-primary float-right"
                    to="/register"
                    title="Create a new account"
                  >
                    <i className="fas fa-user-plus" /> Signup
                  </Link> */}
                </div>
              </form>
            </div>
          </div>
        </div>
      </>
    );
  }
};

export default Login;
