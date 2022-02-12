import styled from 'styled-components';

const CardButtom = styled.button`
    width: 250px;
    height: 50px;
    margin-top: 20px;
    background-color: #6bc06e;
    color: #fff;
    border-radius: 15px;
    border: none;
    font-weight: bold;
    font-size: 18px;
    line-height: 27px;
    font-family: "Raleway", sans-serif;
    cursor: pointer;
    &:disabled {
        background-color: lightgrey;
        cursor: initial;
    }
`;

export {
    CardButtom
}