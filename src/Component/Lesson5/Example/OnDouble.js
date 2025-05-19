import React from "react";
function EventOndouble(){
    const hanldButton = (e)=>{
        e.preventDefault();
        console.log("ClickEventOndouble clicl");
        

    }
    return(
        <>
        <button onDoubleClick={hanldButton}>ClickEventOndouble</button>
        </>
    )
}
export default EventOndouble