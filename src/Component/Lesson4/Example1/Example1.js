import React from "react";
import ShowMessage from "./ShowMessage";
function Example1(){
    const title = "Nguyễn Văn Giang"
    const age = 21;
    const menuInfo = {
        title : "Nguyễn Văn Giang",
        age : 21,
        price : 3000
    }
    const menuItem = [
        "home", "Product" , "Contacst" , "About"
    ]
    return(
        <ShowMessage menuInfomation={menuInfo} menuItem={menuItem}/>
    )
}
export default Example1