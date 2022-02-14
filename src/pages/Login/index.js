import { Link, useNavigate } from "react-router-dom";
import { useState } from 'react';
//import logo from '../../assets/logo.png'
import Container from '../../components/FormComponents/Container.js';
import Button from "../../components/FormComponents/Button.js";
import { GenericForm, Input } from "../../components/FormComponents/Input.js"
import { useContext } from "react";
import UserContext from '../../context/UserContext';
import { sendSignInRequest } from "../../services/E-FrutaServer.js";
import { sendAlert } from "../../components/productsComponents/Alert.js";
import cat from "../../assets/cat.png"
import styled from "styled-components";

export default function Login(){
    const { setUserData } = useContext(UserContext);
    const [data, setData] = useState({ email:"", password:"" })
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    function signIn(e){
        const email = data.email
        const password = data.password
        const body = {
            email,
            password
        };
        if(isLoading) return;
        e.preventDefault();
        if(!email || !password){
            sendAlert('error', 'Opa! :(', 'Os campos devem estar preenchidos!');
            return;
        };
        setIsLoading(true)
        sendSignInRequest(body)
            .then (response => {
                setIsLoading(false);
                setUserData(response.data);
                localStorage.setItem("userData", JSON.stringify(response.data));
                navigate('/');
            })
            .catch (error => {
                setIsLoading(false);
                console.log(error.response)
                setUserData({ ...data, password:"" });
                sendAlert('error', 'Oops! :(', 'Usuario e/ou senha incorreto(s)')
            });
    }

    return(
        <Container>
            <LogoImg alt='logo' src={cat} onClick={()=>isLoading ? '' : navigate('/')} />
            <GenericForm onSubmit={signIn}>
            <Input 
                placeholder='E-mail' 
                type="email" 
                onChange={(e)=>setData({...data, email: e.target.value})} 
                value={data.email}
                required
                disabled={isLoading} 
            />
            <Input 
                placeholder='Senha' 
                type="password" 
                onChange={(e)=>setData({...data, password: e.target.value})}
                value={data.password}
                required
                disabled={isLoading} 
            />
            <Button disabled={isLoading}>Entrar</Button>
            </GenericForm>
            <Link to={'/sign-up'}> Primeira vez? Cadastre-se!</Link>
        </Container>
    );
};

const LogoImg = styled.img`
    width: 70px;
    cursor: pointer;
    margin-bottom: 30px;
`;