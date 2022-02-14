import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState, useContext } from 'react';
//import logo from '../../assets/logo.png'
import Container from '../../components/FormComponents/Container.js';
import Button from "../../components/FormComponents/Button.js";
import { GenericForm, Input } from "../../components/FormComponents/Input.js"
import UserContext from '../../context/UserContext';
import { sendSignUpRequest } from "../../services/E-FrutaServer.js";
import Loader from "../../components/Loader.js";
import { sendAlert } from "../../components/productsComponents/Alert.js";

export default function SignUpPage(){
    const [data, setData] = useState({ name:"", image:"", email:"", password:"" });
    const [confirmPassword, setConfirmPassword] = useState("");
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

        if(!data.name || !data.password || !confirmPassword || !data.email) {
            return sendAlert('error', 'Oops!', 'Preencha os campos obrigatórios!');
        }

        const { password } = data

        if (password !== confirmPassword) {
            setData({ ...data, password:"", });
            setConfirmPassword("");
            return sendAlert('error', '', "As senhas devem ser iguais!");
        }

        sendSignUpRequest({ ...data })
            .then(response => {
                setIsLoading(false);
                sendAlert('success', 'Show!', 'Cadastro concluído.');
                navigate("/login");
            })
            .catch(error => {
                setIsLoading(false);
                console.log(error.response);
                sendAlert('error', 'Opa :(', error.response? error.response.data : 'Erro no servidor!');
                setData({ ...data, password:"", });
                setConfirmPassword("");
            });
    }

    if(isLoading) {
        return <Loader/>
    }

    return(
        <Container>
            {/* <img src= {logo} alt="logo" /> */}
            <GenericForm onSubmit={signUp}>
            <Input 
                placeholder='Nome'
                value={data.name} 
                title="Insira seu nome"
                onChange={(e) => setData({...data, name: e.target.value})}
                required
                disabled={isLoading} 
            />
            <Input 
                placeholder='Imagem de Avatar (Opcional)'
                type="text"
                value={data.image} 
                title="Insira seu nome"
                onChange={(e) => setData({...data, image: e.target.value})}
                required
                disabled={isLoading} 
            />
            <Input 
                placeholder="E-mail"
                type="email"
                value={data.email}
                onChange={e => setData({...data, email: e.target.value})}
                required
                disabled={isLoading}
            />
            <Input 
                placeholder="Senha"
                type="password"
                value={data.password}
                pattern="\S[0-9]{5,}"
                title="Minimo 6 caracteres (Apenas números)."
                onChange={e => setData({...data, password: e.target.value})}
                required
                disabled={isLoading}
            />
            <Input 
                placeholder="Confirme a senha"
                type="password"
                value={confirmPassword}
                pattern={data.password}
                title="Senhas devem ser iguais"
                onChange={e => setConfirmPassword(e.target.value)}
                required
                disabled={isLoading}
            />
            <Button type="submit" disabled={isLoading}>
                Cadastrar
            </Button>
            </GenericForm>
            <Link to={isLoading ? "/sign-up" : "/login"}> Primeira vez? Cadastre-se!</Link>
        </Container>
    );
};