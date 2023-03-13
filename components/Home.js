import React,{useEffect,useState} from 'react';
import {Link,useNavigate} from 'react-router-dom';
import { TailSpin } from  'react-loader-spinner';
import axios from 'axios';

const Home = () => {
	const [data,setData] = useState([]);
	const navigate = useNavigate();

	useEffect(()=>{
		const token = sessionStorage.getItem("_token");

		if (token ==="" || token === null) {
			navigate("/login");
		}

		getData();
	},[]);

	const Logout = () => {
		sessionStorage.removeItem('_token');
		navigate("/login");
	}

	const getData = () =>{
		axios.get('http://127.0.0.1:8000/Read',{ headers: {'token': sessionStorage.getItem('_token') }})
		.then((res)=>{
			setData(res.data);
			console.log(res);
		})
		.catch((err)=>{
			console.log(err);
			sessionStorage.removeItem('_token');
			navigate("/login");
		})
	}
	

	return(<>
		<Link to='/login'>Login</Link>
		<button onClick={Logout}>Logout</button>
		<h3>This is home component.</h3>

		<TailSpin
		  height="80"
		  width="80"
		  color="#4fa94d"
		  ariaLabel="tail-spin-loading"
		  radius="1"
		  wrapperStyle={{}}
		  wrapperClass=""
		  visible={true}
		/>

	</>);
}

export default Home;