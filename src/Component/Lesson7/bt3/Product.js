import { useState } from "react";

export default function Products(){
    const [products , setProduct] = useState([
        {id:1, name:'giang1' , category:'sp1'},
        {id:1, name:'giang2' , category:'sp2'},
        {id:1, name:'giang3' , category:'sp3'},
        {id:1, name:'giang4' , category:'sp4'},
        {id:1, name:'giang5' , category:'sp5'},
    ])
    return(
        <>
        <div>
            <ul>
            {products.map((product , index)=>(
                <li key={index}>{product.name} = Danh Muc: {product.category} </li>
            ))}
            </ul>
        </div>
        </>
    )
}