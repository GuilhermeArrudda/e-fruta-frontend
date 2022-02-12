import { CardName, CardPrice } from "../productsComponents/Card";
import styled from "styled-components";
import { CardButtom } from "./CardButton";
import CardCounter from "./CardCounter";
import { useContext, useState } from "react";

export default function CartCard({data}) {
    const stock = 1;
    const [counterValue, setCounterValue] = useState(stock <= 0 ? 0 : 1);
    return(
        <>
            <CartItens>
                <CartItem>
                    <CardImg src="https://superprix.vteximg.com.br/arquivos/ids/175200-292-292/Banana-D-agua--6-unidades-aprox.-850g-.png?v=636294199116870000" />
                    <div>
                        <p>Banana</p>
                        <p>R$10,00</p>
                        <CardCounter 
                            value={counterValue} 
                            setValue={setCounterValue} 
                        />
                    </div>
                </CartItem>

                <CartItem>
                    <CardImg src="https://superprix.vteximg.com.br/arquivos/ids/175200-292-292/Banana-D-agua--6-unidades-aprox.-850g-.png?v=636294199116870000" />
                    <div>
                        <p>Banana</p>
                        <p>R$10,00</p>
                        <CardCounter 
                            value={counterValue} 
                            setValue={setCounterValue} 
                        />
                    </div>
                </CartItem>


                <CartItem>
                    <CardImg src="https://superprix.vteximg.com.br/arquivos/ids/175200-292-292/Banana-D-agua--6-unidades-aprox.-850g-.png?v=636294199116870000" />
                    <div>
                        <p>Banana</p>
                        <p>R$10,00</p>
                        <CardCounter 
                            value={counterValue} 
                            setValue={setCounterValue} 
                        />
                    </div>
                </CartItem>


                <CartItem>
                    <CardImg src="https://superprix.vteximg.com.br/arquivos/ids/175200-292-292/Banana-D-agua--6-unidades-aprox.-850g-.png?v=636294199116870000" />
                    <div>
                        <p>Banana</p>
                        <p>R$10,00</p>
                        <CardCounter 
                            value={counterValue} 
                            setValue={setCounterValue} 
                        />
                    </div>
                </CartItem>


                <CartItem>
                    <CardImg src="https://superprix.vteximg.com.br/arquivos/ids/175200-292-292/Banana-D-agua--6-unidades-aprox.-850g-.png?v=636294199116870000" />
                    <div>
                        <p>Banana</p>
                        <p>R$10,00</p>
                        <CardCounter 
                            value={counterValue} 
                            setValue={setCounterValue} 
                        />
                    </div>
                </CartItem>


                <CartItem>
                    <CardImg src="https://superprix.vteximg.com.br/arquivos/ids/175200-292-292/Banana-D-agua--6-unidades-aprox.-850g-.png?v=636294199116870000" />
                    <div>
                        <p>Banana</p>
                        <p>R$10,00</p>
                        <CardCounter 
                            value={counterValue} 
                            setValue={setCounterValue} 
                        />
                    </div>
                </CartItem>
            </CartItens>
            <TotalValue>
                <p>valor total:</p>
                <p>30,00R$</p>
            </TotalValue>
            <CardButtom>Finalizar pedido</CardButtom>
        </>
    )
}

const TotalValue = styled.div`
    display: flex;
    justify-content: space-between;

    width: 100%;
    margin: 10px;

    p{
        font-weight: bold;
        font-size: 24px;
        line-height: 36px;
        letter-spacing: 0.01em;
        color: #333333;
    }
`

const CartItens = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 10px;
    scroll-behavior: auto;
    height: 500px;
    overflow: scroll;
`

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