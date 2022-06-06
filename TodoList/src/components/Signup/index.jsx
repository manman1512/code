import React, { useRef } from "react";
import { useForm } from "react-hook-form";

export function Input(props){
    const {onChange, name, id, register} = props;

    return (
        <div className="m-4 border-red-300 rounded-2xl border-2 p-3">
            <label htmlFor={id} >{name}</label>
            <input {...register(id, { required: true })} onChange={onChange} type={id==="password" || id==="passwordConf" ? "password" : "text"} id = {id} className="outline-none"/>
        </div>
    )
}

export default function Signup(){

    const refSmall = useRef();
    
    const { register, handleSubmit, formState: { errors } } = useForm();
    

    const handleChange = event =>{
        const value = event.target.value;
        if(value === document.getElementById("password").value)
            refSmall.current.innerText = "";
        else 
            refSmall.current.innerText = "MK nhap lai khong dung";
    }

    const onSubmit = data => console.log(data);
    
    return(
        <form onSubmit={handleSubmit(onSubmit)} className="absolute border-red-600 border-2 rounded-2xl left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 p-2">
            <h1 className="text-center text-3xl font-bold pb-3">Signup</h1>
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
            <Input 
                register={register}
                onChange={handleChange}
                id="passwordConf"
                name = "Confirm Password: "
            />
            <small  ref={refSmall} className="text-red-600 text-center block"></small>
            {errors.password && "Ban chua nhap mat khau!"}
            <div className="text-center" >
                <button type="submit" className="border-red-600 border-2 rounded-2xl px-2">Send</button>
            </div>
        </form>
    )
}