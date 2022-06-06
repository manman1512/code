import React, { useRef } from 'react'
import Input from './input'

export default function SignUp() {
  const refSmall = useRef();
  const validatepwd = (event)=>{
    // document.getElementsBy
    const value = event.target.value;
    const passwordValue = document.getElementById("password").value;
    if(value !== passwordValue && passwordValue !== "")
    refSmall.current.innerText = "Mat khau nhap lai khong dung"
    else
    refSmall.current.innerText = ""
  }

  const handleFormSubmit = (event) => {
    event.preventDefault();
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    alert("username: " + username +" "+ "password: " + password)
  }

  return (
    <form onSubmit={handleFormSubmit} className="border-2 border-yellow-400 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 ">
      <div className="m-2">
        <h1 className="text-center text-3xl font-bold pb-3 pt-3">SignUp</h1>
        <Input id="username" name="Username"/>
        <Input name="Password" id="password"/>
        <Input name="Password Confirm" id="passwordConfirm" onChange={validatepwd} />
        <small className="text-red-600 text-center block" ref={refSmall}></small>
        <div className="text-center">
          <button className="bg-blue-500 text-lg p-2 pl-4 pr-4 rounded-2xl " type="submit" >Send</button>
        </div>
      </div>
    </form>
  )
}
