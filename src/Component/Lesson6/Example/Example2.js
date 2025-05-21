import { useState } from "react";

export default function Example2(){
    const [color , setColor] = useState("red")
    return(
        <>
        <p style={{color:`${color}`}}>Color is : {color}</p>
        <button onClick={()=>setColor("Blue")} style={{color:"blue"}}>Change color Blue</button>
        <button onClick={()=>setColor("red")} style={{color:"red"}}>Change color Red</button>
        </>
    )
}