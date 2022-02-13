import styled from "styled-components";
import {AiOutlineInstagram} from 'react-icons/ai';
import {SiGmail} from 'react-icons/si';
import {FaWhatsapp} from 'react-icons/fa';
import {AiOutlineFacebook} from 'react-icons/ai';
import {FaTelegramPlane} from 'react-icons/fa';
import cat from "../../assets/cat.png"


export default function Footer() {
    return (
        <Container>
            <PaymentMethods>
                <p>Formas de Pagamento</p>
                <PaymentIcons>
                    <PaymentImg src="https://xda.com.br/wp-content/uploads/boleto-icone.png"/>
                    <PaymentImg src="https://logospng.org/download/pix/logo-pix-icone-1024.png"/>
                    <PaymentImg src="https://www.freeiconspng.com/thumbs/credit-card-icon-png/credit-card-black-png-0.png"/>
                </PaymentIcons>
            </PaymentMethods>
            <ContactUs>
                <p>Fale conosco!</p>
                <Icons>
                    <AiOutlineInstagram/>
                    <SiGmail/>
                    <FaWhatsapp/>
                    <AiOutlineFacebook/>
                    <FaTelegramPlane/>
                </Icons>
            </ContactUs>
            <Logo>
                <LogoImg src={cat} alt="E-Fruta"/>
            </Logo>
        </Container>
    );
};

const Container = styled.div`
    width: 100%;
    height: 150px;
    background: #fff;
    box-shadow: 0px 0px 10px 5px rgba(0, 0, 0, 0.15);
    display: flex;
    justify-content: space-between;
    color: black;
    align-items: center;
    position: fixed;
    bottom: 0;
    @media (max-width: 580px) {
        flex-direction: column-reverse;
        height: 100%;
        gap: 20px;
        padding-bottom: 20px;
        position: static;
    };
`;

const PaymentMethods = styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 15px;
    margin-left: 25px;
    width: 220px;
    & p {
        font-size: 18px;
        text-align: center;
    };
    @media (max-width: 580px) {
        margin-left: 0px;
    };
`;

const PaymentImg = styled.img `
    width: 35px;
`;

const PaymentIcons = styled.div`
    display: flex;
    width: 100%;
    justify-content: center;
    gap: 15px;
`;

const Icons = styled.div `
    font-size: 35px;
    display: flex;
    gap: 15px;
    & svg {
        cursor: pointer;
    };
`;

const ContactUs = styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 40px;
    font-weight: 500;
    gap: 15px;
    & p {
        text-align: center;
    };
`;

const Logo = styled.div`
    width: 220px;
    display: flex;
    justify-content: right;
    @media (max-width: 580px) {
        justify-content: center;
    };
`;

const LogoImg = styled.img`
    width: 140px;
    padding-right: 30px;
    @media (max-width: 580px) {
        padding-right: 0px;
    };
`;

