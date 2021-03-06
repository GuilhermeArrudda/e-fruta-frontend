import styled from "styled-components";
import { RiShoppingCartLine } from "react-icons/ri";
import { IoIosArrowDown } from "react-icons/io";
import { useContext, useState } from "react";
import { useNavigate } from "react-router";
import UserContext from "../../context/UserContext";
import CartContext from "../../context/CartContext";
import cat from "../../assets/cat.png"

export default function Menu() {
    const [showDropDown, setShowDropDown] = useState(false);
    const {cart} = useContext(CartContext);
    const {userData} = useContext(UserContext);
    const navigate = useNavigate();

    function change(whereTo) {
        navigate(whereTo);
        setShowDropDown(false);
    }

    function logout() {
            localStorage.removeItem("userData");
            localStorage.removeItem("cart")
            window.location.reload();
    };

    function cartCounter() {
        let counter = 0;
        cart.forEach(item => {
            counter+= item.qtd;
        });
        return counter;
    };
    return (
        <>
            <Wrapper>
                <Logo onClick={() => change("/")}>
                    <img src={cat} alt="E-Fruta"/>
                    <p>E-Fruta</p>
                </Logo>
                <Buttons>
                    <Cart onClick={() => change("/cart")}>
                        <RiShoppingCartLine />
                        <Counter>
                            {cartCounter()}
                        </Counter>
                    </Cart>
                    <Avatar showDropDown={showDropDown} onClick={() => setShowDropDown(!showDropDown)}>
                        <img src={
                            userData !== ""? 
                            userData.user.image
                            :
                            "https://icon-library.com/images/default-user-icon/default-user-icon-13.jpg"} 
                            alt="Avatar"
                        />
                        <IoIosArrowDown />
                    </Avatar>
                </Buttons>
            </Wrapper>
            <DropDownMenu showDropDown={showDropDown} token={userData.token}>
                {userData.token ? 
                    <>
                        <p onClick={logout}>Sair</p>
                    </>
                    :
                    <>
                        <p onClick={() => change("/login")}>Entrar</p>
                        <p onClick={() => change("/sign-up")}>Cadastrar</p>
                    </>
                }
            </DropDownMenu>
            {showDropDown ? <Blank onClick={() => setShowDropDown(false)}/> : ""}
        </>
    );
}

const Wrapper = styled.header`
    position: fixed;
    z-index: 3;
    top: 0;
    left: 0;
    height: 70px;
    width: 100%;
    background: #FFFFFF;
    display: flex;
    align-items: center;
    justify-content: space-between;
    box-shadow: 0px 0px 10px 1px rgba(0, 0, 0, 0.15);
`;

const Blank = styled.div`
    position: fixed;
    z-index: 1;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    opacity: 100%;
`;

const DropDownMenu = styled.div`
    position: fixed;
    z-index: 2;
    top: ${({showDropDown, userData}) => showDropDown ? `70px` : userData ? `-15px` : `-15px`};    
    right: 0;
    box-shadow: 0px 0px 10px 1px rgba(0, 0, 0, 0.15);
    width: 130px;
    background: #FFFFFF;
    font-size: 16px;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 0 0 0 10px;
    transition: 200ms;
    cursor: pointer;
    & p {
        width: 100%;
        padding: 8px 6px;
        text-align: center;
    }
    p:last-child {
        border-radius: 0 0 0 10px;
    }
    
`;

const Avatar = styled.div`
    display: flex;
    align-items: center;
    gap: 5px;
    height: 70px;
    padding: 0 8px;
    cursor: pointer;
    & img {
        width: 42px;
        height: 42px;
        border-radius: 100px;
        object-fit: cover;
    }
    svg {
        transform: rotate(${({showDropDown}) => showDropDown ? `180deg` : `0deg`});
        transition: 200ms;
    }
    @media (max-width: 330px) {
        & img {
            width: 32px;
            height: 32px;
        }
    }
`;

const Buttons = styled.div`
    display: flex;
    align-items: center;
    gap: 15px;
`;

const Counter = styled.div`
    position: absolute;
    bottom: -5px;
    right: 0;
    background: #c9d3c9;
    border-radius: 30px;
    font-size: 16px;
    max-width: 50px;
    min-width: 17px;
    @media (max-width: 330px) {
        font-size: 12px;
    }
`;

const Cart = styled.button`
    position: relative;
    border: none;
    background: inherit;
    font-size: 30px;
    cursor: pointer;
    @media (max-width: 330px) {
        font-size: 20px;
    }
`;

const Logo = styled.div`
    display: flex;
    padding-left: 8px;
    height: 100%;
    align-items: center;
    gap: 3px;
    cursor: pointer;
    & img {
        width: 60px;
    }
    p {
        margin-top: 8px;
        font-size: 24px;
    }
    @media (max-width: 330px) {
        & img {
            width: 30px;
        }
        p {
            font-size: 20px;
        }
    }
`;
