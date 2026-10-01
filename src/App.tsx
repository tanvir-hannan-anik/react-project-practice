import { useState } from 'react'
import './App.css'
import Cart from './components/Cart'
import Header from './components/Header'
import ProductList from './components/ProductList'


function App() {
  const [count,setCount] = useState(0)
    const handleCountAdd =()=>{
        setCount(count+1)
    }
    const handleCountRemove =()=>{
        setCount(count-1)
    }
  return (
    <>
      <Header cartCount={count}></Header>
      <ProductList onAddToCart={handleCountAdd} onRemoveToCart={handleCountRemove}></ProductList>
      <Cart></Cart>
    </>
  )
}

export default App
