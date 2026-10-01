import { useState } from 'react';
import './Header.css'
interface HeaderProps {
    cartCount: number;
}

export default function Header({ cartCount }:HeaderProps){
const user = {
  name: "Tanvir",
  isLoggedIn: false
};
const [isLoggedIn, setIsLoggedIn] = useState(false);

    const login = () => {
        setIsLoggedIn(true);
    };

    const logout = () => {
        setIsLoggedIn(false);
    };
if(isLoggedIn === true){
    return(
        <div className="header">
            <h1>Mini Shop</h1>
            <div>
                <p>Cart: {cartCount} </p>
            </div>
            <div>
                <p>Welcome, {user.name}</p>
                <button onClick={logout}>Logout</button>
            </div>
        </div>
    )
}else{
    return(
        <div className="header">
            <h1>Mini Shop</h1>
            <div>
                <p>Please login to <br />add products to cart. </p>
            </div>
            <div>
                <p>Please Login</p>
                <button onClick={login} >Login</button>
            </div>
        </div>
    )
}
    
}