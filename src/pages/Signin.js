import "../styles/Signin.css";

const Signin = () => {
    return (
        <div className="signin">
            <h1 className="signin_title">SIGN IN</h1>
            <form>
                <div>
                    <label className="input_title1">Email Address</label>
                    <input className="input1" name="email" type="text" placeholder="john@example.com" />
                </div>
                <div>
                    <label className="input_title2">Password</label>
                    <input className="input2" name="password" type="text" />
                </div>
                <button className="submit" type="submit">Sign IN</button>
            </form>
        </div>
    )
}

export default Signin;