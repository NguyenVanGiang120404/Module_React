import { useState } from "react";

export default function TodoForm({onAddTask}){
    const [input , setInputs] = useState("")
    const handleSubmit = (e) =>{
        e.preventDefault(); 
        if(input.trim()==="") return
        onAddTask(input) // Truyền dữ liệu lên thằng cha
        setInputs("") //reset input
    }
    return(
        <>
        <form onSubmit={handleSubmit}>
            <input type="text"
                value={input}
                onChange={(e)=>setInputs(e.target.value)}
                placeholder="Nhập công việc..."
            />
            <button type="submit">Thêm</button>
        </form>
        </>
    )
}