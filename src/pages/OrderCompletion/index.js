import styled from "styled-components";
import Footer from "../../components/productsComponents/Footer";
import Menu from "../../components/productsComponents/Menu";

export default function OrderCompletion() {


    return(
        <>
            <Menu/>
            <PageStyle>
                <SuccessMsg>
                    Obrigado por comprar conosco! Faremos o possível para entregar seus produtos o quanto antes.
                </SuccessMsg>
                <SuccessMsg>
                    Enquanto isso, você pode visualizar nossas lojas fisicas em nossas redes sociais.
                </SuccessMsg>
            </PageStyle>
            <Footer/>
        </>
    );
};

const PageStyle = styled.article`
    margin: 85px 0;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 20px;
    flex-direction: column;
    min-height: calc(100vh - 320px);
`;

const SuccessMsg = styled.p`
    font-weight: 700;
    text-align: center;
    line-height: 30px;
    width: 280px;
    & a {
        color: #6bc06e;
    };
`;