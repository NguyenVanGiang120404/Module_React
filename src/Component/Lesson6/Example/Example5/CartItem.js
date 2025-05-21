export default function CartItem({ item, onChangeQuantity }) {
    return (
        <div>
            <h3>{item.name}</h3>
            <p>Giá: {item.price.toLocaleString("vi-VN", { style: "currency", currency: "VND" })}</p>
            <input
                type="number"
                value={item.quantity}
                min={1}
                onChange={(e) => onChangeQuantity(item.id, parseInt(e.target.value))}
            />
        </div>
    );
}
