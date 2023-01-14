import React, { useEffect, useState } from 'react'

function Form2(){
    const [fdata, setFdata] = useState({
        username:"",
        password:""
    });

    const [error,setError] = useState({
        userError:"",
        passError:""
    })

    const validation = (data) =>{ //validation with json object
        let errors = {};

        if(!data.username){
            errors.userError = "Username Reqired";
        }else if(data.username.length < 5){
            errors.userError = "Username must be more then 5 char";
        }

        if(!data.password){
            errors.passError = "Password Reqired";
        }else if(data.password.length < 6){
            errors.passError = "Password must be more then 6 char";
        }

        return errors;
    }

    useEffect(()=>{
        if(Object.keys(error).length === 0){
            alert("form submited");
        }
    },[error])

    const changeHandle = (event) => { //2nd way handle onchange
        let key = event.target.name;
        let val = event.target.value;
        setFdata({...fdata, [key]:val});
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        setError(validation(fdata));
        console.log(fdata);
    }
    return(<>
        <div>
            {fdata.username} and {fdata.password}
            
            <form onSubmit={handleSubmit}>
                <label>Username:</label><br/>
                <input type="text" name="username" onChange={(event)=>{setFdata({...fdata, username:event.target.value})}} /><br/>{/*oneline handle onchange*/}
                {error.userError && (<p style={{color:'red',margin:0, padding:0}}>{error.userError}</p>)}{/*error handle*/}
                <label>Password:</label><br/>
                <input type="password" name="password" onChange={(event)=>{setFdata({...fdata, password:event.target.value})}} /><br/>
                {error.passError && (<p style={{color:'red',margin:0,padding:0}}>{error.passError}</p>)}
                <input type="submit"/>
            </form>
        </div>
    </>)
}

export default Form2;