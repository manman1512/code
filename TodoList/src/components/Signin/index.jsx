import React from 'react'
import {Input} from '../Signup'
import { useForm } from "react-hook-form";

export default function Signin() {
  const {register} = useForm();

  const handleSubmit = event =>{
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    alert(username + ' ' + password) 
  }

  return (
      <form onSubmit={handleSubmit} className="absolute border-red-600 border-2 rounded-2xl left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 p-2">
        <h1 className="text-center text-3xl font-bold pb-3">Sigin</h1>
          <Input 
            register={register}
            id = "username"
            name = "Username: "
          />
          <Input 
            register={register}
            id = "password"
            name = "Password: "
          />
          <div className="text-center" >
                <button type="submit" className="border-red-600 border-2 rounded-2xl px-2">Send</button>
          </div>
      </form>
  )
}
