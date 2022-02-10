import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Login, Cart, OrderCompletion, Products, SignUpPage  } from './pages/index'
import { useState } from 'react';
import UserContext from './context/UserContext'

export default function App(){

  const [token, setToken] = useState('');

  return (
    <UserContext.Provider value={{ token, setToken }}>
      <BrowserRouter>
          <Routes>
              <Route path="/" element={<Products />}></Route>
              <Route path="/login" element={<Login />}></Route>
              <Route path="/sign-up" element={<SignUpPage />}></Route>
              <Route path="/cart" element={<Cart />}></Route>
              <Route path="/ordercompletion" element={<OrderCompletion />}></Route>
          </Routes>
      </BrowserRouter>
    </UserContext.Provider>
  );
}
