import styled from "styled-components";
import { useState } from "react";

export default function PaymentMethod() {
    const [option, setOption] = useState("pix");

    function paymentController(method) {
        setOption(method);
    };

    return (
        <Container>
            <Option onClick={() => paymentController('pix')}>
                <OptionImg src="https://logospng.org/download/pix/logo-pix-icone-1024.png"/>
                <Check option={option === 'pix'}/>
            </Option>
            <Option onClick={() => paymentController('ticket')}>
                <OptionImg src="https://xda.com.br/wp-content/uploads/boleto-icone.png"/>
                <Check option={option === 'ticket'}/>
            </Option>
            <Option onClick={() => paymentController('card')}>
                <OptionImg src="https://www.freeiconspng.com/thumbs/credit-card-icon-png/credit-card-black-png-0.png"/>
                <Check option={option === 'card'}/>
            </Option>
        </Container>
    );
};

const Container = styled.div `
    display: flex;
    justify-content: space-between;
    margin-top: 10px;
`;

const Option = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
`;

const OptionImg = styled.img`
    height: 50px;
`;

const Check = styled.div`
    width: 14px;
    height: 14px;
    max-height:14px;
    max-width: 14px;
    border-radius: 50px;
    border: ${({option}) => option ? `none` : `#333 1px solid`};
    background: ${({option}) => option ? `#005103` : `#fff`};
`;
