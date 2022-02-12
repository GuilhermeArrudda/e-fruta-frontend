import styled from "styled-components";
import CardCounter from "./CardCounter";
import CartContext from "../../context/CartContext.js"
import { useContext, useState } from "react";
import { CardButtom } from "./CardButton";
import { sendAlert } from "./Alert";

export default function Card({data}) {
    const {_id, name, price, stock, image} = data;
    const [counterValue, setCounterValue] = useState(stock <= 0 ? 0 : 1);
    const stockColor = stock <= 0 ? '#d10000' : stock <= 10 ? '#f7e306' : '#06d526';
    const {cart, setCart} = useContext(CartContext);

    function addToCart () {
        if (counterValue <= 0) return
        const indexOfProduct = cart.map(e => e._id).indexOf(_id)
        if (indexOfProduct < 0){
            setCart([...cart, {_id, qtd: counterValue, price}])
            sendAlert('success', 'É pra já!', `
                O produto foi adicionado ao seu carrinho!
                Clique no ícone de carrinho no menu para ver seus produtos,
                ou continue comprando!
            `)
        } else {
            const newCart = [...cart]
            if (newCart[indexOfProduct].qtd + counterValue > stock){
                newCart[indexOfProduct].qtd = stock;
                sendAlert('success', 'E la se vai o estoque!', `
                Alteramos a quantidade desse item no carrinho!
                Infelizmente não temos em nosso estoque a quantidade desejada desse produto 
                então colocamos apenas a quantidade disponível (${stock} un)! 
                Confira clicando no ícone de carrinho no menu!
            `)
            } else {
                newCart[indexOfProduct].qtd += counterValue;
                sendAlert('success', `Adicionamos + ${counterValue} desse produto no carrinho!`, `
                Alteramos a quantidade desse item no carrinho!
                Você agora tem ${newCart[indexOfProduct].qtd} desses no carrinho!
            `)
            } 
            setCart(newCart)
        }
    }

    return (
        <CardSC>
            <CardStock color={stockColor} />
            <CardImgBox>
                <CardImg src={image} color={stockColor} />
                <ImgCounter color={stockColor} ></ImgCounter>
            </CardImgBox>
            <CardName>{name}</CardName>
            <CardPrice>R${(price/100).toFixed(2)}</CardPrice>
            <CardCounter 
                value={counterValue} 
                setValue={setCounterValue} 
                isDisabled={stock <= 0} 
                stock={stock} 
            />
            <CardButtom onClick={addToCart} disabled={stock <= 0} >Colocar no carrinho</CardButtom>
        </CardSC>
    )
}


const CardSC = styled.div`
    width: 280px;
    background-color: #fafafa;
    box-shadow: 0px 0px 10px 1px rgba(0, 0, 0, 0.15);
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-bottom: 10px;
    min-height: 100%;
    padding-bottom: 50px;
`;

const CardImg = styled.img`
    width: 250px;
    height: 200px;
    border-radius: 30px;
    object-fit: cover;
    border: 5px solid ${props => props.color};
    cursor: pointer;
`;

const CardImgBox = styled.div`
    position: relative;
`;

const ImgCounter = styled.div`
    width: 30px;
    height: 30px;
    font-size: 12px;
    font-weight: 500;
    position: absolute;
    right: 10px;
    top: 10px;
    color: #fff;
    background-color: ${props => props.color};
    opacity: 0.8;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const CardName = styled.p`
    font-weight: bold;
    font-size: 24px;
    line-height: 36px;
    letter-spacing: 0.01em;
    color: #333333;
`;

const CardPrice = styled.div`
    width: 100%;
    font-weight: 600;
    font-size: 24px;
    line-height: 36px;
    display: flex;
    align-items: center;
    justify-content: center;
    letter-spacing: 0.01em;
    color: #333333;
`;

const CardStock = styled.div`
    width: 100%;
    height: 50px;
    background: ${props => props.color};
    border-radius: 20px 20px 0px 0px;
    margin-bottom: -30px;
`;