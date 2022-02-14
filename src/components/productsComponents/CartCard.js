import CartContext from "../../context/CartContext";
import styled from "styled-components";
import CardCounter from "./CardCounter";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useContext} from "react";
import UserContext from "../../context/UserContext";

export default function CartCard({data}) {
    const { name, qtd, price, stock, image} = data;
    const [counterValue, setCounterValue] = useState(qtd);
    const navigate = useNavigate();
    const productPrice = (price/100*counterValue).toFixed(2);
    const {cart, setCart} = useContext(CartContext)
    
    return(
        <>
                <CartItem>
                    <CardImg src={image} />
                    <div>
                        <p>{name}</p>
                        <p>{productPrice}</p>
                        <CardCounter 
                            value={counterValue} 
                            setValue={setCounterValue} 
                        />
                    </div>
                </CartItem>
        </>
    )
}

const CartItem = styled.div`
    width: 100%;
    background-color: #F6F6F6;
    display: flex;
    padding: 10px;
    justify-content: space-between;
    align-items: center;
    border-radius: 20px;
    p{
        font-weight: bold;
        font-size: 24px;
        line-height: 36px;
        letter-spacing: 0.01em;
        color: #333333;
    }
`

const CardImg = styled.img`
    width: 150px;
    height: 150px;
    object-fit: cover;
    cursor: pointer;
`;