import { Fragment, useState } from "react";
import bkimg from "../../assets/bk.jpg";
import "../../styles/Login.css";

function Login() {
  const [show, setShow] = useState(false);
  const handleNewAccount = (e) => {
    e.preventDefault();
    let formData = new FormData(e.currentTarget);
    let account = formData.get("account");
    let username = formData.get("username");
    let password = formData.get("password");
    let check = formData.get("check");

    console.log(account, username, password);
    if (account && username && password && check) {
      window.localStorage.setItem("Token", 111);
      window.location.reload();
    }
  };
  const handleLogin = (e) => {
    e.preventDefault();
    let formData = new FormData(e.currentTarget);
    let account = formData.get("account");
    let password = formData.get("password");
    let remember = formData.get("remember");

    console.log(account,password,remember);
    if (account && password && password && remember) {
      window.localStorage.setItem("Token", 111);
      window.location.reload();
    }
  }
  return (
    <div className="layout">
      <div className="header">
        <div>
          <div style={{ fontSize: "40px", fontWeight: "bold" }}>FOLOWA</div>
          <div>Music Streaming Platform</div>
        </div>
        <div>
          <span
            onClick={() => setShow((v) => !v)}
            style={{ fontSize: "34px", fontWeight: "bold",cursor: "pointer" }}
          >
            {show?"Log In":"Create New Account"}
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
                  <div>Email Address or Phone Number</div>
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
                  <input type="checkbox" name="check" />
                  <span
                    style={{
                      textDecoration: "underline",
                      fontSize: "8px",
                    }}
                  >
                    I agrree to Folowa’s Terms and Conditions of Us and Privacy
                    Policy.
                  </span>
                </div>
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
