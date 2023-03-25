import "../styles/Login.css";

const Login = () => {
    return (
        <div className="login">
            <h1 className="login_title">LOG IN</h1>
            <form>
                <div>
                    <label className="input_title1">Email Address OR Username</label>
                    <input className="input1" name="account" type="text" placeholder="john@example.com/John" />
                </div>
                <div>
                    <label className="input_title2">Password</label>
                    <input className="input2" name="password" type="text" />
                </div>
                <input className="input3" type="checkbox" name="remember" />
                <p className="remember">Remember Me</p>
                <button className="submit" type="submit">LOG IN</button>
            </form>
            <p className="forget"><a></a>Forgot Your Password?</p>
        </div>
    )
}

export default Login;