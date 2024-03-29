import { useState } from "react"
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { userLoginInfo } from "../slices/userSlice";
function Signup() {
    const dispatch =useDispatch();
    const navigate =useNavigate();
    const [email,setemail] =useState('');
    const [name,setname] =useState('');
    const [password,setpassword] =useState('');
    const handleEmail = (e)=>{
        setemail(e.target.value);
    }
       const handleName = (e)=>{
        setname(e.target.value);
    }
     const handlePass = (e)=>{
        setpassword(e.target.value);
    }

    const handleSubmit = ()=>{
 if(!email){
    toast.error("Email is required")
 }
  if(!name){
    toast.error("Name is required")
 }
  if(!password){
    toast.error("Password is required")
 }
 if(email && password && name){
   dispatch(userLoginInfo({
    name:name,
    email:email,
    password:password
   }))
//    localStorage.setItem("userLoginInfo", JSON.stringify(userLoginInfo({
//     name:name,
//     password:password,
//     email:email
//    })))
   setTimeout(() => {
    
       navigate("/login")
   }, 1000);
 }
    }
  return (
    <div className=" mx-10 max-w-screen-lg">
          <ToastContainer />
      <h2>Registration</h2>
      <div className=" flex flex-col gap-y-5">
        <input onChange={handleEmail} className="border py-2 px-4" type="text" placeholder="email" /> 

        <input onChange={handleName} className="border py-2 px-4" type="text" placeholder="name" />

        <input   onChange={handlePass}  className="border py-2 px-4" type="text" placeholder="password" />
        <button onClick={handleSubmit} type="text">Submit</button>
      </div>
    </div>
  )
}

export default Signup
