import React from "react";
import "./style.css";

export default function App() {

  const name = React.useRef();
  const[naam,setNaam]=React.useState();

  const submit =(e)=>{

setNaam(name.current.value)
  }

  return (
    <div>
      <h1>Hello {naam} </h1>
     
      <input type="text" placeholder='type your name' ref={name}  / ><br/>
     <button onClick={submit}>submit</button>
      
    
    </div>
  );
}
