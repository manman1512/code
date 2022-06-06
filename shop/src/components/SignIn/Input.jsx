import React from 'react'

export default function Input(props) {
    const {id, name} = props;
    return (
    <div className="border-2 border-black my-4 px-2 rounded-xl">
        <label htmlFor={id}>{name}: </label>
        <input name={id} className="outline-none p-2"  id={id} type={id === "password"? "password": "text"}/>
    </div>
  )
}
