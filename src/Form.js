import React from 'react'

class Form extends React.Component{
    constructor(){
        super();
        this.state = {
            username:"",
            password:"",
            userError:"",
            passError:"",
        }
    }

    validate(){
        if(this.state.username == "" && this.state.password == ""){
            this.setState({userError:"Username Required!"});
            this.setState({passError:"Password Required!"});
        }else if(this.state.username == ""){
            this.setState({userError:"Username Required!"});
        }else if(this.state.password == ""){
            this.setState({passError:"Password Required!"});
        }else{
            this.setState({userError:""});
            this.setState({passError:""});
            return true;
        }
    }

    changeHandle = (event) => {
        let key = event.target.name;
        let val = event.target.value;
        this.setState({[key]:val});
    }

    submitHandle = (e) =>{
        e.preventDefault();
        if(this.validate()){
            console.log(2);
        }
    }

    render(){
        return (<>
            <div style={{margin:'auto'}}>
                <form onSubmit={this.submitHandle}>
                    <small>User={this.state.username}</small>
                    <small>Pass={this.state.password}</small>
                    <h2>Login</h2>
                    <lable>Username:</lable><br/>
                    <input type="text" name="username" onChange={(event)=>{this.setState({username:event.target.value})}}/><br/>
                    <strong style={{color:'red'}}>{this.state.userError}</strong><br/>
                    <lable>Password:</lable><br/>
                    <input type="password" name="password" onChange={(event)=>{this.setState({password:event.target.value})}}/><br/>
                    <strong style={{color:'red'}}>{this.state.passError}</strong><br/>
                    <input type="submit" value="submit"/>
                </form>
            </div>
        </>)
    }
}

export default Form;