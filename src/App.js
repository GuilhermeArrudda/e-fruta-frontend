import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Login, Cart, OrderCompletion, Products, SignUpPage  } from './pages/index'
import { useEffect, useState } from 'react';
import UserContext from './context/UserContext';
import CartContext from './context/CartContext';

export default function App(){

  const [userData, setUserData] = useState('');
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const localUserData = localStorage.getItem("userData");
    if(localUserData) {
        setUserData(JSON.parse(localUserData));
    } else {
        setUserData('');
    }
    // eslint-disable-next-line
}, [])

useEffect(() => {
  const localCartData = localStorage.getItem("cart");
  if(localCartData) {
    setCart(JSON.parse(localCartData));
  } else {
    setCart('');
  }
  // eslint-disable-next-line
}, [])
  

  return (
    <UserContext.Provider value={{ userData, setUserData }}>
      <CartContext.Provider value={{cart, setCart}}>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Products />}></Route>
                <Route path="/login" element={<Login />}></Route>
                <Route path="/sign-up" element={<SignUpPage />}></Route>
                <Route path="/cart" element={<Cart />}></Route>
                <Route path="/ordercompletion" element={<OrderCompletion />}></Route>
            </Routes>
        </BrowserRouter>
      </CartContext.Provider>
    </UserContext.Provider>
  );
}
