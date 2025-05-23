import { useState } from "react";

export default function Todo_cha(){
    const [tasks , setTask] = useState([
        "Hoc React",
        "Hoc Js"
    ])
    const [input , setInput] = useState("")
    const handleSubmitForm =(e)=>{
       e.preventDefault();
       if(input.trim() === "") return
       setTask([...tasks , input])
       setInput("")
    }
    return(
        <div>
            <form onSubmit={handleSubmitForm}>
                <input
                type="text"
                value={input}
                placeholder="Nhap vao day..."
                onChange={(e) => setInput(e.target.value)}
                />
                <button type="submit">Them</button>
            </form>
            <ul>
                {tasks.map((tasks,index)=>(
                    <li key={index}>{tasks}</li>
                ))}
            </ul>
        </div>
    )
}