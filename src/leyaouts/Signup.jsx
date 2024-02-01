import { useState } from "react"

function Signup() {
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
  return (
    <div className=" mx-10 max-w-screen-lg">
      <h2>Registration</h2>
      <div className=" flex flex-col gap-y-5">
        <input onChange={handleEmail} className="border py-2 px-4" type="text" placeholder="email" /> 

        <input onChange={handleName} className="border py-2 px-4" type="text" placeholder="name" />

        <input   onChange={handlePass}  className="border py-2 px-4" type="text" placeholder="password" />
      </div>
    </div>
  )
}

export default Signup
