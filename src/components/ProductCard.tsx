
import './ProductCard.css'
interface Product {
    id: number;
    name: string;
    price: number;
    category: string;
    inStock: boolean;
}

interface ProductCardProps {
    product: Product;
    onAddToCart: () => void;
    onRemoveToCart: () => void;
}
export default function ProductCard({product,onAddToCart,onRemoveToCart}:ProductCardProps){
    if(product.inStock === true){
        return (
        <div className="productCard">
            <p>Name : {product.name}</p>
            <p>Price : {product.price}</p>
            <p>Category : {product.category}</p>
            <p>Available</p>
           <button onClick={onAddToCart}>
                Add to Cart
            </button>
           <button onClick={onRemoveToCart}>
                Remove to Cart
            </button>
        </div>
    )
    }else{
        return (
        <div className="productCard">
            <p>Name : {product.name}</p>
            <p>Price : {product.price}</p>
            <p>Category : {product.category}</p>
            <p>Out of Stock</p>
        </div>
    )
    }

    
    
}