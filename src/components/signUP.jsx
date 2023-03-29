import { Link } from "react-router-dom";
import { useState } from "react";
import  Axios from "axios";
import { useNavigate } from "react-router-dom";
const SignUP = () => {
    let [name, setName] = useState();
    let [number, setNumber] = useState();
    let [email, setEmail] = useState();
    let [password, setPassword] = useState();
    let [confirmpassword, setConfirmpassword] = useState()
    
    let navigate = useNavigate()

    let handleSubmit = (e) => {
        e.preventDefault();
        let data = { name, number, email, password, confirmpassword };
        if (name && number && email && (password == confirmpassword)) {
            Axios.post('http://localhost:4000/signup',data)
            .then((res)=>{
               alert(res.data.message)
               navigate('/')
               console.log(data);
            })
        } else {
              alert("invalid credentials")
        }
    }

        return (
            <div className="signup">
                <h1 class="text-center mt-5">Sign Up Page</h1>
                <div className="signUP_form w-50 mx-auto">
                    <form action="" onSubmit={handleSubmit}>
                        <div className="name">
                            <input type="name"
                                placeholder="Enter Your Name"
                                className="form-control  text-center p-2 m-3"
                                name="name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                        </div>
                        <div className="mobile_number">
                            <input type="tel"
                                placeholder="Enter Mobile Number"
                                className="form-control  text-center p-2 m-3"
                                name="mobile"
                                value={number}
                                onChange={(e) => setNumber(e.target.value)}
                            />
                        </div>
                        <div className="email">
                            <input type="email"
                                className="form-control  text-center p-2 m-3 "
                                placeholder="email address"
                                name="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div className="password">
                            <input type="password"
                                className="form-control text-center p-2 m-3"
                                placeholder="Enter password"
                                name="password"
                                value={confirmpassword}
                                onChange={(e) => setConfirmpassword(e.target.value)}
                            />
                        </div>
                        <div className="confirm_password">
                            <input type="password"
                                className="form-control text-center p-2 m-3"
                                placeholder="Enter password"
                                name="confirm_password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                        <div className="signUP_button w-25 mx-auto">
                            <button className="btn btn-primary mx-5 w-50">Sign Up</button>
                        </div>
                        <div className="login_button w-25 mx-auto">
                            <p class="text-center mt-2">Already a user?</p>
                            <Link to="/" className="btn btn-outline-primary mx-5 w-50">Login</Link>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
    export default SignUP;