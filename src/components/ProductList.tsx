import ProductCard from './ProductCard'
interface ProductListProps {
    onAddToCart: () => void;
    onRemoveToCart: () => void;
}

export default function ProductList({onAddToCart , onRemoveToCart}:ProductListProps){
    interface Product{
        id: number
        name: string
        price: number
        category: string
        inStock: boolean
    }
const products: Product[] = [
  {
    id: 1,
    name: "Laptop",
    price: 80000,
    category: "Electronics",
    inStock: true
  },
  {
    id: 2,
    name: "Mobile",
    price: 30000,
    category: "Electronics",
    inStock: false
  },
  {
    id: 3,
    name: "Book",
    price: 500,
    category: "Education",
    inStock: true
  }
];

    return(
        <div>
            <h3>
                Products
            </h3>
            {
                products.map(product => <ProductCard product= {product} onAddToCart={onAddToCart} onRemoveToCart={onRemoveToCart}></ProductCard> )
            }
        </div>
    )
}