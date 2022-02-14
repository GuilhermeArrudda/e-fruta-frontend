import { useEffect } from "react";
import styled from "styled-components";
import { useContext} from "react";
import CartContext from "../../context/CartContext";

export default function CardCounter ({value, setValue, isDisabled, stock, vertical, id}) {
    console.log(id);
    const {cart, setCart} = useContext(CartContext)
    useEffect(() => {
        if(value < 0) setValue(0)
        if(value > stock) setValue(stock)
        // eslint-disable-next-line
    }, [value]);

    function count(type){
        const item  = cart.find( item => item._id === id)
        console.log(item);
        if(type === "minus"){
            setValue(value-1);
            item && item.qtd--;
        }
        else{
            setValue(value+1);
            item && item.qtd++;
        }
        setCart([...cart])
    }

    return (
        <CounterBox vertical={vertical}>
            <CounterButton disabled={isDisabled} onClick={() => count("minus")} >-</CounterButton>
            <QntdBox
                type='number'
                value={value} 
                disabled={isDisabled} 
                onChange={e => {setValue(e.target.value)}}
                onBlur={() => {
                    if (value <= 0) setValue(0)
                }}
            />
            <CounterButton disabled={isDisabled} onClick={() => count("plus")} >+</CounterButton>
        </CounterBox>
    )
};

const CounterBox = styled.div`
    display: flex;
    flex-direction: ${props => props.vertical ? 'column-reverse' : 'row'};
    align-items: center;
    gap: ${props => props.vertical ? 0 : '10px'};
`;

const QntdBox = styled.input`
    width: 30px;
    height: 30px;
    font-size: 14px;
    font-weight: 500;
    display: flex;
    text-align: center;
    border-radius: 5px;
    border: none;
    background-color: #fff;
    color: #000;
    &:focus {
        outline: none;
    };
    &:disabled {
        background-color: #fff;
    };
    ::-webkit-outer-spin-button,
    ::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    };
`;

const CounterButton = styled.button`
    color: #6bc06e;
    font-size: 30px;
    font-weight: 700;
    border: none;
    background-color: #fff;
    display: flex;
    text-align: center;
    cursor: pointer;
    &:disabled {
        color: #fff;
        cursor: initial;
    };
`;