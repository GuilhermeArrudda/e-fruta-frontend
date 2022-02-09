import { Link, useNavigate } from "react-router-dom";
import { useState } from 'react';
import axios from 'axios';
//import logo from '../../assets/logo.png'
import Container from '../../components/FormComponents/Container.js';
import Button from "../../components/FormComponents/Button.js";
import Input from "../../components/FormComponents/Input.js"
import { useContext } from "react";
import UserContext from '../../context/UserContext';

export default function Login(){
    const { setToken, setUser} = useContext(UserContext);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    function signIn(e){
        e.preventDefault();

        const promise = axios.post('http://localhost:5000/sign-in', {
            email,
            password
        });

        promise.then (response => {
            console.log(response);
            setToken(response.data.token);
            setUser(response.data.name)
            navigate('/');
        });
        promise.catch (error => {
            console.log(error)
            setEmail('');
            setPassword('');
            alert('Credenciais incorretas')
        });
    }

    return(
        <Container onSubmit={signIn} >
            {/* <img src= {logo} alt="logo" /> */}
            <Input placeholder='E-mail' type="email" onChange={(e) => setEmail(e.target.value)} value={email} />
            <Input placeholder='Senha' type="password" onChange={(e) => setPassword(e.target.value)} value={password}/>
            <Button>Entrar</Button>
            <Link to={'/register'}> Primeira vez? Cadastre-se!</Link>
        </Container>
    );
}
