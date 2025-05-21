import { React, useState } from 'react';
export default function Example1(){
    const [header , setHeader] = useState("This is Header ... ")
    const [content  , setContent] = useState("This is Content ... ")
    return(
        <>
        <h1>{header}</h1>
        <button onClick={()=>setHeader("Header Change")}>Click Header</button>
        <p>{content}</p>
        <button onClick={()=>setContent("Content Change")}>Click Content</button>
        </>
    )
}