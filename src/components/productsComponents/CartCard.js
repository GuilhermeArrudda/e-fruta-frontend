import styled from "styled-components";
import CardCounter from "./CardCounter";
import { useState } from "react";

export default function CartCard({data}) {
    const { name, qtd, price, stock, image, _id} = data;
    const [counterValue, setCounterValue] = useState(qtd);
    const productPrice = (price/100*qtd).toFixed(2);
    return(
        <CartItem>
            <CardImg src={image} />
            <div>
                <p>{name}</p>
                <p>{productPrice}</p>
                <CardCounter 
                    value={counterValue} 
                    setValue={setCounterValue}
                    isDisabled={stock <= 0} 
                    stock={stock}
                    id = {_id} 
                />
            </div>
        </CartItem>
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