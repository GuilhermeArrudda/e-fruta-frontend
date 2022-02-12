import { Link, useNavigate } from "react-router-dom";
import { useState } from 'react';
//import logo from '../../assets/logo.png'
import Container from '../../components/FormComponents/Container.js';
import Button from "../../components/FormComponents/Button.js";
import Input from "../../components/FormComponents/Input.js"
import { useContext } from "react";
import UserContext from '../../context/UserContext';
import { sendSignInRequest } from "../../services/E-FrutaServer.js";

export default function Login(){
    const { setUserData } = useContext(UserContext);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    function signIn(e){
        setIsLoading(true);
        e.preventDefault();
        const body = {
            email,
            password
        };
        sendSignInRequest(body)
            .then (response => {
                setIsLoading(false);
                setUserData(response.data);
                localStorage.setItem("userData", JSON.stringify(response.data));
                navigate('/products');
            })
            .catch (error => {
                setIsLoading(false);
                if(!error.response){
                alert('Servidor offline')
                return;
            };
            if(error.response === 401) {
                alert("Credenciais inválidas")
                return;
            };
            if(error.response === 500) {
                alert("Error do servidor")
            };
            alert('Ocorreu um erro inesperado')
            });
    }

    return(
        <Container onSubmit={signIn} >
            {/* <img src= {logo} alt="logo" /> */}
            <Input 
                placeholder='E-mail' 
                type="email" 
                onChange={(e) => setEmail(e.target.value)} 
                value={email}
                required
                disabled={isLoading} 
            />
            <Input 
                placeholder='Senha' 
                type="password" 
                onChange={(e) => setPassword(e.target.value)} 
                value={password}
                required
                disabled={isLoading} 
            />
            <Button>Entrar</Button>
            <Link to={'/sign-up'}> Primeira vez? Cadastre-se!</Link>
        </Container>
    );
}
