import { Fragment, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import bkimg from "../../assets/bk.jpg";
import "../../styles/Login.css";
import Axios from "axios";

function Login() {
  const [show, setShow] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  const navigate = useNavigate();
  const eformat = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;

  const handleNewAccount = (e) => {
    e.preventDefault();
    let formData = new FormData(e.currentTarget);
    let account = formData.get("account");
    let password = formData.get("password");
    let username = formData.get("username");
    let usertype = formData.get("usertype")
    let check = formData.get("check");

    if (account === "" || account === null) {
      setErrorMessage('Account cannot be empty')
    }

    else if (!eformat.test(account)) {
      setErrorMessage('Account format is incorrect')
    }

    else if (password === "" || password === null) {
      setErrorMessage('Password cannot be empty')
    }

    else if (username === "" || username === null) {
      setErrorMessage('Username cannot be empty')
    }

    else if (usertype === "" || usertype === null) {
      setErrorMessage('Please select the type of user you are registering')
    }

    else if (!check) {
      setErrorMessage('Please check the Agree to Terms and Conditions and Privacy Policy.')
    }

    else {
      Axios.post("http://localhost:3001/signup", {
        account,
        password,
        username,
        usertype,
      });
      alert('Congratulations, you have sign up successfully!');
      window.location.reload();
    }

    /*
    if (account && username && password && usertype && check) {
      window.localStorage.setItem("Token", 111);
      window.location.reload();
    }
    */
  };

  const handleLogin = (e) => {
    e.preventDefault();
    let formData = new FormData(e.currentTarget);
    let account = formData.get("account");
    let password = formData.get("password");

    if (account === "" || account == null) {
      setErrorMessage('Email cannot be empty')
    }

    else if (!eformat.test(account)) {
      setErrorMessage('Email format is incorrect')
    }

    else if (password === "" || password === null) {
      setErrorMessage('Password cannot be empty')
    }

    else {
      Axios.post("http://localhost:3001/signin", {
        account,
        password,
      }).then((response) => {
        if (response.data.message) {
          setErrorMessage(response.data.message);
        } else {
          alert('Congratulations, you have log in successfully!');
          localStorage.setItem("loggedin", true);
          localStorage.setItem("account", account);
          navigate("/");
        }
      });
    }
  }

  return (
    <div className="layout">
      <div className="header">
        <div>
          <div style={{ fontSize: "40px", fontWeight: "bold" }}><Link to="/">FOLOWA</Link></div>
          <div>Music Streaming Platform</div>
        </div>

        <div>
          <span
            onClick={() => setShow((v) => !v)}
            style={{ fontSize: "34px", fontWeight: "bold", cursor: "pointer" }}
          >
            {show ? "Log In" : "Create New Account"}
          </span>
        </div>
      </div>
      <div
        style={{
          backgroundImage: `url(${bkimg})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center center",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          style={{
            background: "#E4E4E4",
            textAlign: "center",
            width: "25rem",
            padding: "1rem 5rem",
          }}
        >
          {show ? (
            <Fragment>
              <div style={{ fontSize: "30px", fontWeight: "bold" }}>
                Join us NOW!!!!!
              </div>
              <form onSubmit={handleNewAccount}>
                <div
                  style={{
                    margin: "1rem 1rem",
                  }}
                >
                  <div>Email Address</div>
                  <input
                    type="text"
                    name="account"
                    placeholder="john@example.com"
                    style={{
                      width: "20rem",
                      height: "2rem",
                      border: "1px solid #fff",
                      borderRadius: "0.5rem",
                    }}
                  />
                </div>
                <div
                  style={{
                    margin: "1rem 1rem",
                  }}
                >
                  <div>Create a Password</div>
                  <input
                    type="password"
                    name="password"
                    style={{
                      width: "20rem",
                      height: "2rem",
                      border: "1px solid #fff",
                      borderRadius: "0.5rem",
                    }}
                  />
                </div>
                <div
                  style={{
                    margin: "1rem 1rem",
                  }}
                >
                  <div>How would you like call yourself from us?</div>
                  <input
                    type="text"
                    name="username"
                    style={{
                      width: "20rem",
                      height: "2rem",
                      border: "1px solid #fff",
                      borderRadius: "0.5rem",
                    }}
                  />
                </div>
                <div>
                  <input type="radio" id="user" name="usertype" value="User" />
                  <label for="user">User</label>

                  <input type="radio" id="creator" name="usertype" value="Creator" />
                  <label for="creator">Creator</label>
                </div>
                <div>
                  <input
                    type="checkbox"
                    name="check"
                  />
                  <span
                    style={{
                      textDecoration: "underline",
                      fontSize: "8px",
                    }}
                  >
                    I agrree to Folowa's Terms and Conditions of Us and Privacy
                    Policy.
                  </span>
                </div>
                {errorMessage !== null &&
                  <div>
                    <span style={{ fontSize: "15px", color: "red" }}>{errorMessage}</span>
                  </div>}
                <input
                  type="submit"
                  value="Create a New Account"
                  style={{
                    backgroundColor: "#062D37",
                    color: "#ffffff",
                    padding: "0.5rem 1rem",
                    borderRadius: "1rem",
                    marginTop: "1rem",
                    cursor: "pointer"
                  }}
                />
              </form>
            </Fragment>
          ) : (
            <Fragment>
              <div style={{ fontSize: "30px", fontWeight: "bold" }}>LOG IN</div>
              <form onSubmit={handleLogin}>
                <div
                  style={{
                    margin: "1rem 1rem",
                  }}
                >
                  <div>Email Address</div>
                  <input
                    type="text"
                    name="account"
                    style={{
                      width: "20rem",
                      height: "2rem",
                      border: "1px solid #fff",
                      borderRadius: "0.5rem",
                    }}
                  />
                </div>
                <div
                  style={{
                    margin: "1rem 1rem",
                  }}
                >
                  <div>Password</div>
                  <input
                    type="password"
                    name="password"
                    style={{
                      width: "20rem",
                      height: "2rem",
                      border: "1px solid #fff",
                      borderRadius: "0.5rem",
                    }}
                  />
                </div>
                <div>Forgot Your Password?</div>
                <div>
                  <input type="checkbox" name="remember" />
                  <span
                    style={{
                      textDecoration: "underline",
                      fontSize: "8px",
                    }}
                  >
                    Remember Me
                  </span>
                </div>
                {errorMessage !== null &&
                  <div>
                    <span style={{ fontSize: "15px", color: "red" }}>{errorMessage}</span>
                  </div>}
                <input
                  type="submit"
                  value="Log in"
                  style={{
                    backgroundColor: "#062D37",
                    color: "#ffffff",
                    padding: "0.5rem 1rem",
                    borderRadius: "1rem",
                    marginTop: "1rem",
                    cursor: "pointer"
                  }}
                />
              </form>
            </Fragment>
          )}
        </div>
      </div>
      <div className="footer">
        <div>CONTACT US</div>
        <div>ABOUT US</div>
      </div>
    </div>
  );
}
export default Login;
