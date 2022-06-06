import React from "react";
import { useState } from "react";

export function Todo(){

    const [job, setJob] = useState("");
    const [todoList, setTodoList] = useState([])

    const handleClick = event =>{
        setTodoList([...todoList, 
            {id: todoList.length, 
            content: job}
        ]);
        setJob("");
    }

    const handletick = id =>{
        // console.log(id)
        if(document.getElementById(id).classList.contains("line-through"))
            document.getElementById(id).classList.remove("line-through");
        else 
            document.getElementById(id).classList.add("line-through");
    }

    return (
        <div className="w-1/3 border-red-600 border-4 rounded-xl 
        absolute p-3 left-1/2 top-1/4 -translate-x-1/2 -translate-r-1/2 ">
            <h1 className="text-center text-3xl font-bold mb-6 mt-2">ToDo List</h1>
            <div className="text-center">
                <input value={job} 
                        onKeyDown={event =>{event.key === 'Enter' && handleClick()}} 
                        onChange={(event=>{setJob(event.target.value)})} 
                        className="w-1/2 border-2 border-red-400 rounded-lg outline-none" 
                        type="text" id="data"/>
                <button onClick={handleClick} 
                        className="ml-2 border-2 border-red-400 rounded-lg px-2" >Add</button>
            </div>
            <ul className="ml-2 overflow-y-auto h-28">
                {todoList.map((job, index)=> 
                <li key={index} 
                    id={job.id}
                    className=""> 
                    <input 
                        onChange={()=>{handletick(job.id)}} 
                        type="checkbox" 
                        className="mr-2"
                        name={job.id}
                    />{job.content}
                </li>)}
            </ul>
        </div>
    )
}