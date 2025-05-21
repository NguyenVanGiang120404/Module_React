import { useState } from "react";
import ProductItem from "./ProductItem";

export default function ProductList() {
    const [products, setProducts] = useState([
        { id: 1, name: "giang1", votes: 0 },
        { id: 2, name: "giang2", votes: 0 },
        { id: 3, name: "giang3", votes: 0 },
        { id: 4, name: "giang4", votes: 0 },
        { id: 5, name: "giang5", votes: 0 },
    ]);

    const handleVote = (id) => {
        setProducts(prev =>
            prev.map(product =>
                product.id === id
                    ? { ...product, votes: product.votes + 1 }
                    : product
            )
        );
    };

    return (
        <>
            <h1>Bình chọn sản phẩm:</h1>
            <ProductItem onVote={handleVote} products={products} />
        </>
    );
}
