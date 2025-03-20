import { Container, Form, InputContainer, LeftContainer, Link, RightContainer, Title } from "./styles";
import { ContainerButton } from "../../components/Button/styles.js";
import BossDouble from "../../assets/doubleLogo.png";
import LogoBoss from "../../assets/04_logo_sf.png";
import {toast, ToastContainer} from 'react-toastify';


// axios
import {api} from '../../services/api.js'

// Yup e hook form
import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useState } from "react";

export function Login(){
    const [showPassword, setShowPassword] = useState(false); // show password login
    // Validação do formulário
    const schema = yup.object().shape({
        email: yup.string().email(' exemplo@email.com').required('Campo obrigatório'),
        password: yup.string().min(4, ' Senha deve ter no mínimo 4 caracteres').required('Campo obrigatório')
    });

    // Hook form
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    });

    // Faz uma requisição POST para a rota /session da API com email e senha
    const onSubmitFunction = async (data) => {
        try {
            // toast to feedback visual
            const response = await toast.promise(
                api.post('/session', {
                    email: data.email,      // Email fornecido no formulário
                    password: data.password  // Senha fornecida no formulário
                }),
                {
                    pending: 'Verificando seus dados... 👨🏽‍💻',
                    success: {
                        render() {
                            return 'Bem vindo ao Dev Burger! 🍔';
                        },
                        style: {
                            background: '#1b1b1b',
                            color: '#fff'
                        }
                    },
                    error: {
                        render() {
                            return 'Email ou senha incorretos 😕';
                        },
                        style: {
                            background: '#1b1b1b',
                            color: '#f27613'
                        }
                    }
                }
            );
            
            // Save token in localStorage
            localStorage.setItem('@devburger:token', response.data.token);
            
            // Armazenar o token JWT retornado pela API no localStorage
            console.log(response); // Exibe a resposta da API no console
            
            // Aqui você pode adicionar navegação para próxima página
            // Por exemplo: navigate('/dashboard');
            
        } catch (err) {
            console.error(err);
            // O toast de erro já será mostrado pelo toast.promise
        }
    };

       
    return(
    <div>
        {/* Container principal que divide a tela em duas partes */}
        <Container>
            {/* Lado esquerdo com a imagem do hamburguer */}
            <LeftContainer>
                <img src={BossDouble} alt="Foto-hamburguer-boss-double" />
            </LeftContainer>

            {/* Lado direito com o formulário de login */}
            <RightContainer>
                <img src={LogoBoss} alt="logo-burger-boss" />
                <Title>Olá, seja bem vindo ao <span>Dev Burger!</span></Title>
                <Title>Acesse com seu <span>Login e senha.</span></Title>
               
                {/* Formulário de login com validação */}   
                <Form onSubmit={handleSubmit(onSubmitFunction)}>
                    
                    {/* Campo de email */}
                    <InputContainer>
                        <label>Email</label>
                        <input type="email" {...register('email')} />
                        <span>{errors.email?.message}</span>                    
                    </InputContainer>
                    
                    {/* Campo de senha */}
                    <InputContainer>
                    <label>Senha</label>
                        <div className="password-container">
                            <input 
                                type={showPassword ? "text" : "password"} 
                                {...register('password')} 
                            />
                            <button
                                type="button"
                                className="eye-button"
                                onClick={() => setShowPassword(!showPassword)}
                            >
                                {showPassword ? "👁️" : "👁️‍🗨️"}
                            </button>
                        </div>
                        <span>{errors.password?.message}</span>
                    </InputContainer>

                    {/* Links e botão de submit */}
                    <a className='RecuperarSenha'>Esqueceu sua senha?</a>

                    <ContainerButton type='submit'>Entrar</ContainerButton>

                </Form>
                <Link>Primeira vez aqui? 
                    <span style={{ textDecoration: 'underline' }}> Crie sua conta</span></Link>
            </RightContainer>

        <ToastContainer autoClose={3000} theme="colored" />

        </Container>
        
    </div>
    );
};