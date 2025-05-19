import React from "react";
function Event(){
    const hanldButton = (e)=>{
        e.preventDefault();
        console.log("hanld clicl");
        

    }
    return(
        <>
        <button onClick={hanldButton}>Click</button>
        </>
    )
}
export default Event