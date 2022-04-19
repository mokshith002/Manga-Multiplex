// require("dotenv").config();
import axios from 'axios';
import React, {useState} from 'react';
import { useNavigate, Link } from 'react-router-dom';

export default function LoginForm() {

    const URL = `http://localhost:${3005}`;

    const [formData, setFormData] = useState({
        email: '', 
        password: ''
    });

    const navigate = useNavigate();

    const submitLogin = () => {
        axios.get(`${URL}/employee/authenticate/details`, formData)
            .then(res => {
                if (res.data.success) {
                    localStorage.setItem("userId", res.data.empId);
                    navigate('/');
                }
                else {
                    alert("Invalid credentials!");
                }
            })
            .catch(
                err => console.log(err.message)
            );
    }

    function handleSubmit(event){
        event.preventDefault();
        console.log(formData);
    }

    function handleChange(event){
        const {name, value} = event.target;
        setFormData(oldData => ({
            ...oldData,
            [name]: value
        }))
        console.log(formData);
    }

    return (

            <form onSubmit={handleSubmit}> 
                <div class="row"> <h2>Login</h2> </div>
                <div class="mb-3">
                    <label for="inputEmail1" class="form-label">Email address</label>
                    <input type="text" class="form-control" id="logMail" aria-describedby="emailHelp" value={formData.email} onChange={handleChange} name="email"/>
                        <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">Password</label>
                    <input type="password" class="form-control" id="logPass" value={formData.password} onChange={handleChange} name="password"/>
                </div>
              
                <button type="submit" class="btn btn-primary">Submit</button>
                <div id="emailHelp" class="form-text">Don't have an account? Register <Link to='/register'>here</Link>.</div>
            </form> 

    );
};
