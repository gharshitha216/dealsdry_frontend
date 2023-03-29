import { Link } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
const Login = () => {
    let [email, setEmail] = useState();
    let [password, setPassword] = useState();
    let navigate = useNavigate()
    let handleSubmit = (e) =>{
        e.preventDefault();
        let data = {email,password};
        axios.post('http://localhost:4000/login',data)
        .then((res)=>{
            if (res.data.message == 'login successfully') {
                navigate('/home')
            }else{
                alert(res.data.message)
            }
        })
        // console.log(data);
    }
    return (
        <div className="login">
            <h1 class="text-center mt-5">Login Page</h1>
            <div className="form w-50 mx-auto " onSubmit={handleSubmit}>
                <form action="">
                    <div className="email ">
                        <input type="email"
                            className="form-control text-center p-2 m-3"
                            placeholder="email address"
                            name="email"
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="password">
                        <input type="password"
                           className="form-control text-center p-2 m-3"
                            placeholder="Enter password" name="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <div className="login_button w-25  mx-auto">
                        <button className="btn btn-primary mx-5 w-50">Login</button>
                    </div>
                    <div className="signup_button w-25  mx-auto" >
                        <p class="mx-3 mt-2">Are you a new user ?</p>
                        <Link to="/signup" className="btn btn-outline-primary mx-5 w-50 ">Sign Up</Link>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Login;