import { useState } from "react";
import Cart_Item from "./CartItem";

export default function Cart_todo(){
    const [carts , setCart] = useState([
        {id:1, name:"Giang1",price:200 , quantity:1},
        {id:2, name:"Giang2",price:200, quantity:0},
        {id:3, name:"Giang3",price:200, quantity:9},
        {id:4, name:"Giang4",price:200, quantity:2},
        {id:5, name:"Giang5",price:200, quantity:4},
    ])
    const handleonChangeQuantity = (id , newQuantity)=>{
        setCart(
            (pev) => pev.map(
                (item) =>item.id === id
                ?{...item , quantity: newQuantity}
                :item
            )
        )
    }
    const totalPrice = carts.reduce(
        (sum, item) => sum + item.price + item.quantity,
        0
    )
    return(
        <div>
            <h2>Giõ Hàng:</h2>
           {carts.map((item, index)=>(
                <Cart_Item key={item.id} totalPrice={totalPrice} item={item} onchangQuantity={handleonChangeQuantity}/>
            ))}
            <h1>
                Tổng tiền : {totalPrice}
            </h1>
          
        </div>
    )
}