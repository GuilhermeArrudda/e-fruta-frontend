import { useContext} from "react";
import CartContext from "../../context/CartContext";
import styled from "styled-components";
import CartCard from "../../components/productsComponents/CartCard"

export default function CartProducts() {
    const { cart} = useContext(CartContext);
    console.log(cart);
    return (
        <>
            <Page>
                <CartCard/>
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
`;