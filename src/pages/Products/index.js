import { useContext, useEffect, useState } from "react";
import { getProductsRequest } from "../../services/E-FrutaServer";
import CartContext from "../../context/CartContext";
import Footer from "../../components/productsComponents/Footer";
import Card from "../../components/productsComponents/Card";
import Loader from "../../components/Loader";
import styled from "styled-components";
import Menu from "../../components/productsComponents/Menu";

export default function Products() {
    const [products, setProducts] = useState(null);
    const { cart } = useContext(CartContext);
    console.log(cart)

    useEffect (() => {
        renderProducts()
    }, [cart]);

    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cart));
    }, [cart]);

    function renderProducts() {
        getProductsRequest()
            .then(response => setProducts(response.data))
            .catch(error => console.log(error));
    };

    if(!products) {
        return <Loader/>;
    };

    return (
        <Container>
            <Menu/>
            <Page>
                {products.map((e) => <Card data={e} key={e._id}/>)}
            </Page> 
            <Footer/>
        </Container>
    );
};

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: end;
`;

const Page = styled.article`
    margin-top: 85px;
    margin-bottom: 180px;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 20px;
`;