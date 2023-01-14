import React,{useState} from 'react'

function Form3(){
    const [data,setData] = useState({
        username:"",
        password:""
    })

    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log("Username:"+data.username+"And Password:"+data.password);
    }
    return(<>
        <form onSubmit={handleSubmit}>
            <label>Username:</label><br/>
            <input type="text" name="username" onChange={(event)=>{setData({...data,username:event.target.value})}}/><br/>
            <label>Password:</label><br/>
            <input type="text" name="password" onChange={(event)=>{setData({...data,password:event.target.value})}}/><br/>
            <input type="submit"/>
        </form>
    </>)
}

export default Form3;