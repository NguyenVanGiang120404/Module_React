import React from "react";
function ShowMessage(props){
 return(
    <>
    <h1> TÊN: {props.menuInfomation.title}</h1>
    <h1> TUỔI: {props.menuInfomation.age}</h1>
    <h1> GIÁ: {props.menuInfomation.price} VNĐ</h1>
    <ul>
        {props.menuItem.map((item , index)=>(
            <li key={index}>{item}</li>
        ))}
    </ul>
    </>
 )
}
export default ShowMessage