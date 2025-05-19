import React from "react";
function EventOnMouseEnter(){
    const hanldButton = ()=>{
        console.log("EventOnMouseEnter");
    }
    const onMouselever = () =>{
        console.log("Mouse Lever");
        
    }
    return(
        <>
         <div onMouseEnter={hanldButton} onMouseLeave={onMouselever}>Hover over me</div>
        </>
    )
}
export default EventOnMouseEnter