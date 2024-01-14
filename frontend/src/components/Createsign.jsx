import { useState } from "react";
import  "./css/Createsign.css";
export function Createsign(){

    const [email,setEmail] = useState("")
    const [username,setUsername] = useState("")
    const [password,setPassword] = useState("")

    return <div className="signup-card">
        <img
        src="./src/components/artificial_intelligence-2.jpg"
        alt="Signup Image"
        className="signup-image"
      />

        <div className="signup-form">
        <h2>Sign Up</h2>

        {/* <form > */}
        <input placeholder='username' id="username" type='text' onChange={(e)=>{
        setUsername(e.target.value)
      }}></input><br /><br />

      <input placeholder='email' id="username" type='text' onChange={(e)=>{
        setEmail(e.target.value)
      }}></input><br /><br />


      <input type="text" id="password" placeholder='password' onChange={(e)=>{
        setPassword(e.target.value)
      }}></input><br /><br />


      <button onClick={()=>{
        fetch("http://localhost:3000/signup",{
            method:"POST",
            body: JSON.stringify({
                username:username,
                email :email,
                password :password
            }),
            headers:{
                "authorizationn" : "",
                "Content-type":"application/json"
            }
        })
        .then(async function(res){
            const json = await res.json();
            alert("Todo added")
        })
      }}>SIGN UP
      
      </button>



      {/* </form> */}
      </div>
    </div>
  }
