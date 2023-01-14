import React, { useState } from 'react'

function App(props){
  const [color,setColor] = useState({
    info:"hello",
  })
  const handleClick = (...id) =>{
    console.log(id);
    setColor({
      info:"Hi",
    })
  }
  return <>
    <h1>{props.data} Function, {color.info}</h1>
    <button onClick={() => handleClick("Id=1","2")}>Btn</button>
  </>;
}

const App2 = (props) =>{
  return <h2>{props.data} Function</h2>
}

class App3 extends React.Component{
  constructor(){
    super();
    this.state = {
      username:"",
      password:"",
      userError:"",
      passError:"",
      info:[
        {name:"Mahdi"}
      ]
    }
  }

  // state = {
  //   info:[
  //     {name:"Mahdi"}
  //   ]
  // }

  clickHandle = (d) =>{
    console.log(d);
    this.setState({
      info:[
        {name:"Md. Mahdi Hasan"}
      ]
    })
  }

  changeHandle = (event) => {
    let key = event.target.name;
    let val = event.target.value;
    this.setState({[key]:val});
  }

  validate = () =>{
    if(this.state.username ==""){
      this.setState({userError:"Enter email address"});
    }else{
      this.setState({userError:""});
      return true;
    }
  }

  submitHandle = (event) => {
    event.preventDefault();
    console.log(this.state);
    if(this.validate()){
      //alert(1);
    }
  }

  render(){
    return <>
      <h3>{this.props.data} Component, {this.state.info[0].name}, username={this.state.username} and password={this.state.password}</h3>
      <button onClick={() => this.clickHandle("1")}>BTN</button>

      <form onSubmit={this.submitHandle}>
        <label>Username:</label>
        <input type="text" name="username" onChange={this.changeHandle}/><br/>
        <strong style={{color:'red'}}>{this.state.userError}</strong><br/>
        <label>Password:</label>
        <input type="text" name="password" onChange={this.changeHandle}/><br/>
        <input type="text" onChange={(event)=>{this.setState({userError:event.target.value})}}/>
        <input type="submit"/>
      </form>
    </>;
  }
}

export default App;
export {App2,App3};