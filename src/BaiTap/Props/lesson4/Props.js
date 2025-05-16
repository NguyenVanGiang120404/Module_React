import React from "react";
import Show from "./baitap_Props1";
import AgeDisplay from "./AgeDiapaly";
import Greeting from "./Default_Props";

function ProductItem(){
const name = "Nguyen Van Giang"
const Age = 21

    return(
        <Show nameItem={name}/>,
        <AgeDisplay age={Age}/>,
        <Greeting/>
    )
}
export default ProductItem