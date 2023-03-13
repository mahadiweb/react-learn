import React,{useState} from 'react';
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import axios from 'axios';
import {useNavigate} from 'react-router-dom';

const Login = () => {
	const [username,setUsername] = useState('');
	const [password,setPassword] = useState('');

	const navigate = useNavigate();

	const handleSubmit = (e) =>{
		e.preventDefault();
		
		if (validate()) {
			axios.post('http://127.0.0.1:8000/login',{'username':username,'password':password})
			.then((res)=>{
				//console.log(res.data.status);
				if (res.data.status == "Success") {
					toast.success("Login success!");
					sessionStorage.setItem("_token", res.data.token);
					navigate("/");
				}else{
					toast.error("Wrong username and password!");
				}
				
			})
			.catch(error => {
				//console.log(error.message);
			    toast.error("Somthing wrong!");
	     	});
		}
	};

	const validate = () => {
		let res = true;
		if (username == "" || username == null) {
			res = false;
			toast.warning("Username Require!");
		}
		if (password =="" || password == null) {
			res = false;
			toast.warning("Password Require!");
		}
		return res;
	}

	return(<>
		<ToastContainer />
		<div className="container my-5">
			<div className="row">
				<div className="col-md-12">
					<h2 className="text-center">Login</h2>
					<form onSubmit={handleSubmit}>
					  <div className="form-group">
					    <label>Username</label>
					    <input type="text" className="form-control" name="username" value={username} onChange={(e)=>{setUsername(e.target.value)}} />
					  </div>
					  <div className="form-group">
					    <label>Password</label>
					    <input type="password" className="form-control" name="password" value={password} onChange={(e)=>{setPassword(e.target.value)}} />
					  </div>
					  <button type="submit" className="btn btn-primary w-100">Submit</button>
					</form>
				</div>
			</div>
		</div>
	</>);
};

export default Login;