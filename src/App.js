import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Login, Cart, OrderCompletion, Products, SignUpPage  } from './pages/index'
import { useEffect, useState } from 'react';
import UserContext from './context/UserContext';
import CartContext from './context/CartContext';
import { getCart, postCart } from './services/E-FrutaServer';

export default function App(){

  const [userData, setUserData] = useState(JSON.parse(localStorage.getItem("user")) || {});
  const [cart, setCart] = useState(JSON.parse(localStorage.getItem("cart"))||[]);

  useEffect(() => {
    decideCart(userData.token)
  }, [])

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
    if (userData.token) postCart(userData.token, cart)
  }, [cart])

  function decideCart (loginToken) {
    const localCart = JSON.parse(localStorage.getItem("cart"))||[];
    if (localCart.length) return localCart
    if (loginToken) {
        getCart(loginToken)
            .then(response => {
                if(response.data.length) setCart(JSON.parse(response.data[0].cart_text));
            })
    } else{
        return localCart
    }
    
}

  return (
    <UserContext.Provider value={{userData, setUserData}}>
      <CartContext.Provider value={{cart, setCart}}>
        <BrowserRouter>
            <Routes>
                <Route path="/products" element={<Products />}></Route>
                <Route path="/login" element={<Login decideCart = {decideCart} />}></Route>
                <Route path="/sign-up" element={<SignUpPage />}></Route>
                <Route path="/cart" element={<Cart />}></Route>
                <Route path="/ordercompletion" element={<OrderCompletion />}></Route>
            </Routes>
        </BrowserRouter>
      </CartContext.Provider>
    </UserContext.Provider>
  );
}
