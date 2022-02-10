import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState, useContext } from 'react';
//import logo from '../../assets/logo.png'
import Container from '../../components/FormComponents/Container.js';
import Button from "../../components/FormComponents/Button.js";
import Input from "../../components/FormComponents/Input.js"
import UserContext from '../../context/UserContext';
import { sendSignUpRequest } from "../../services/E-FrutaServer.js";
import { ThreeDots } from "react-loader-spinner";

export default function SignUpPage(){
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [password2, setPassword2] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const { userData } = useContext(UserContext)
    const navigate = useNavigate();

    useEffect(() => {
        if(userData) {
            navigate("/");
        };
        // eslint-disable-next-line
    }, [userData]);

    function signUp(e){
        setIsLoading(true);
        e.preventDefault();
        const body = {
            name,
            email,
            password
        };

        sendSignUpRequest(body)
            .then(response => {
                setIsLoading(false);
                navigate("/login");
            })
            .catch(error => {
                setIsLoading(false);
                if(!error.response){
                    alert("Servidor offline");
                    return;
                };
                if(error.response.status === 409) {
                    alert("E-mail já está em uso, escolha um diferente.");
                    return;
                };
                if(error.reponse.status === 500) {
                    alert("Erro do servidor, tente novamente em alguns instantes.");
                    return;
                };
                alert("Ocorreu um erro inesperado! Por favor comunique a staff do site.");
            });
    }

    return(
        <Container onSubmit={signUp} >
            {/* <img src= {logo} alt="logo" /> */}
            <Input 
                placeholder='Nome'
                value={name} 
                title="Insira seu nome"
                onChange={(e) => setName(e.target.value)}
                required
                disabled={isLoading} 
            />
            <Input 
                placeholder="E-mail"
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                required
                disabled={isLoading}
            />
            <Input 
                placeholder="Senha"
                type="password"
                value={password}
                pattern="\S[0-9]{5,}"
                title="Minimo 6 caracteres (Apenas números)."
                onChange={e => setPassword(e.target.value)}
                required
                disabled={isLoading}
            />
            <Input 
                placeholder="Confirme a senha"
                type="password"
                value={password2}
                pattern={password}
                title="Senhas devem ser iguais"
                onChange={e => setPassword2(e.target.value)}
                required
                disabled={isLoading}
            />
            <Button type="submit" disabled={isLoading}>
            {!isLoading ? "Cadastrar" : <ThreeDots color="#FFF" height={50} width={80} />}
            </Button>
            <Link to={isLoading ? "/sign-up" : "/login"}> Primeira vez? Cadastre-se!</Link>
        </Container>
    );
};