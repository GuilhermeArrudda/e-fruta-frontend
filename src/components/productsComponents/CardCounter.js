import { useEffect } from "react";
import styled from "styled-components";

export default function CardCounter ({value, setValue, isDisabled, stock, vertical}) {

    useEffect(() => {
        if(value < 0) setValue(0)
        if(value > stock) setValue(stock)
        // eslint-disable-next-line
    }, [value]);
    
    return (
        <CounterBox vertical={vertical}>
            <CounterButton disabled={isDisabled} onClick={() => setValue(value-1)} >-</CounterButton>
            <QntdBox
                type='number'
                value={value} 
                disabled={isDisabled} 
                onChange={e => {setValue(e.target.value)}}
                onBlur={() => {
                    if (value <= 0) setValue(0)
                }}
            />
            <CounterButton disabled={isDisabled} onClick={() => setValue(value+1)}  >+</CounterButton>
        </CounterBox>
    )
};

const CounterBox = styled.div`
    display: flex,
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
    background-color: #c4c4c4;
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
    color: #005103;
    font-size: 30px;
    font-weight: 700;
    border: none;
    background-color: #fff;
    display: flex.
    text-align: center;
    cursor: pointer;
    &:disabled {
        color: #fff;
        cursor: initial;
    };
`;