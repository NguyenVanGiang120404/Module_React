import { useState } from "react";
import CartItem from "./CartItem";

export default function Cart(){
    const [items, setItem] = useState([
        {id:1, name:"ao so 1" , price:100 , quantity:1},
        {id:2, name:"ao so 2" , price:100 , quantity:3},
        {id:3, name:"ao so 3" , price:100 , quantity:4},
        {id:4, name:"ao so 1" , price:100 , quantity:5},
        {id:5, name:"ao so 1" , price:100 , quantity:1},
    ])
    const handleonChangeQuantity =(id, newQuantity)=>{
        setItem(
            (pev) => pev.map(
                (item) =>item.id ===id
                ?{...item , quantity:newQuantity}
                :item
            )
        )
    }
    const totalPrice = items.reduce(
        (sum,item) =>sum + item.price * item.quantity,
        0
    )
    return(
        <>
        <h1>Giõ Hàng:</h1>
        {items.map((item) => (
        <CartItem key={item.id} item={item} onChangeQuantity={handleonChangeQuantity} />
        ))}
         <h1>Tổng tiền: {totalPrice.toLocaleString("vi-VN", { style: "currency", currency: "VND" })}</h1>
        </>
    )
}