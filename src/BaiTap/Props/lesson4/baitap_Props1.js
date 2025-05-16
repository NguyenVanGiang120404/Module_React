import React from "react"

function Show(props){
    return(
       <div>
         <h1>
            Xin Chào React
        </h1>
        <h1>Xin Chào: {props.nameItem}</h1>
       </div>
       
   
    )
}
export default Show