import { useState } from "react"
import { useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";

function Login() {
    const [Email,setemail] =useState('');
  
    const [Password,setpassword] =useState('');
    const data = useSelector(state =>state.userLoginInfo.userInfo)
    console.log(data.email);
    console.log(data.password);
    const handleEmail = (e)=>{
        setemail(e.target.value);
    }
      
     const handlePass = (e)=>{
        setpassword(e.target.value);
    }
    const handleLogin = ()=>{
        if(!Email){
            toast.error("Email required")
        }
        if(!Password){
            toast.error("Password required")
        }
    
            if(data.email === Email && data.password === Password){
                toast.success("Login succes")
            }
        }
    
  return (
    <div className=" mx-10 max-w-screen-lg">
        <ToastContainer/>
      <h2>Login</h2>
      <div className=" flex flex-col gap-y-5">
        <input onChange={handleEmail} className="border py-2 px-4" type="text" placeholder="email" /> 

        <input   onChange={handlePass}  className="border py-2 px-4" type="text" placeholder="password" />
        <button onClick={handleLogin}>login</button>
      </div>
    </div>
  )
}

export default Login

