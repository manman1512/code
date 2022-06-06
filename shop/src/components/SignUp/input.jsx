import React from 'react'

export default function Input(props) {
  const {name, id, ...props1} = props;
  return (
    <div className="p-2 border-black border-2 rounded-xl mb-4">
        <label htmlFor={id} className="pr-2">{name}:</label>
        <input className="outline-none" {...props1} id={id}  type={ id==='password' || id==='passwordConfirm'? 'password' : 'text' } />
    </div>
  )
}
