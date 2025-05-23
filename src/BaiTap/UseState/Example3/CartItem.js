export default function Cart_Item({item,onchangQuantity }){
    return(
        <>
        <p>{item.name}</p>
        <p>{item.price}</p>
        <input type="number" value={item.quantity}
        min={0}
        onChange={(e)=>onchangQuantity(item.id , parseInt(e.target.value))}
        />
        </>
    )
}