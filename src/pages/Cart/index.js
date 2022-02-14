import { useState, useEffect, useContext} from "react";
import CartContext from "../../context/CartContext";
import styled from "styled-components";
import CartCard from "../../components/productsComponents/CartCard"
import { CardButtom } from "../../components/productsComponents/CardButton";
import UserContext from "../../context/UserContext";
import { paymentAlert, sendAlert } from "../../components/productsComponents/Alert";
import { useNavigate } from "react-router-dom";
import Menu from "../../components/productsComponents/Menu";
import Footer from "../../components/productsComponents/Footer";

export default function CartProducts(props) {
    const { cart } = useContext(CartContext);
    const {userData} = useContext(UserContext);
    const navigate = useNavigate();
    const [total, setTotal] = useState(0);
    console.log(cart)
    const [quantityArray, setQauntityArray] = useState(cart.map (e => e.qtd))
    console.log(quantityArray);
    useEffect(() => {
        if (cart.length) {
            const reducer = (p, c) => p + c
            setTotal(cart.map(e => e.price * e.qtd).reduce(reducer))
        }
    }, [cart, quantityArray])

    function finish(){
        if(!userData) {
            sendAlert('warning', 'Você precisa estar logado para fazer uma compra');
            navigate('/login');
            return;
        };
        paymentAlert()
            .then((result) => {
                if(result.isConfirmed) {
                    navigate('/ordercompletion');
                } else if (result.isDenied){
                    return;
                }
            })
    };

    return (
        <>
            <Menu/>
            <Page>
                <CartItens>
                    {cart.map((e) => <CartCard  data={e} key={e._id}/>)}
                </CartItens>
            <TotalValue>
                <p>valor total:</p>
                <p>{(total/100).toFixed(2)}R$</p>
            </TotalValue>
            <CardButtom onClick={finish}>Finalizar pedido</CardButtom>
            </Page>
        </>
    );
};

const Page = styled.article`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 20px;
    padding: 8px;
    margin-top: 85px;
`;

const CartItens = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 10px;
    scroll-behavior: auto;
    height: 450px;
    overflow: scroll;
`

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