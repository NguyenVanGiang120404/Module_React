export default function ProductItem({ products, onVote }) {
    return (
        <ul>
            {products.map(product => (
                <li key={product.id}>
                    {product.name} - Votes: {product.votes}
                    <button onClick={() => onVote(product.id)}>Vote</button>
                </li>
            ))}
        </ul>
    );
}
