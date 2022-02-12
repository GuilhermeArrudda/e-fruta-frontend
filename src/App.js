import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Login, Cart, OrderCompletion, Products, SignUpPage  } from './pages/index'
import { useState } from 'react';
import UserContext from './context/UserContext';
import CartContext from './context/CartContext';

export default function App(){

  const [userData, setUserData] = useState('');
  const [cart, setCart] = useState([]);

  return (
    <UserContext.Provider value={{ userData, setUserData }}>
      <CartContext.Provider value={{cart, setCart}}>
        <BrowserRouter>
            <Routes>
                <Route path="/products" element={<Products />}></Route>
                <Route path="/login" element={<Login />}></Route>
                <Route path="/sign-up" element={<SignUpPage />}></Route>
                <Route path="/cart" element={<Cart />}></Route>
                {/* <Route path="/ordercompletion" element={<OrderCompletion />}></Route> */}
            </Routes>
        </BrowserRouter>
      </CartContext.Provider>
    </UserContext.Provider>
  );
}
