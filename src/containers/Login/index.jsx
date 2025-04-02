import { Container, Form, InputContainer, LeftContainer, Link, RightContainer, Title } from './styles';
import { ContainerButton } from '../../components/Button/styles.js';
import LogoBoss from '../../assets/04_logo_sf.png';
import {toast, ToastContainer} from 'react-toastify';
import { useEffect, useState } from 'react';

// slide burger boss
import BossDouble from '../../assets/imgBurgers/doubleLogo.png';
import BossAbacaxi from '../../assets/imgBurgers/bossAbacaxi.png';
import BossCalabresa from '../../assets/imgBurgers/bossCalabresa.png';
import BossCaramelo from '../../assets/imgBurgers/bossCaramelo.png';
import BossCheddar from '../../assets/imgBurgers/bossCheddar.png';
import BossChurrasco from '../../assets/imgBurgers/bossChurrasco.png';
import BossMussarela from '../../assets/imgBurgers/bossMussarela.png';
import BossOnion from '../../assets/imgBurgers/bossOnion.png';
import BossQuarteirao from '../../assets/imgBurgers/bossQuarteirao.png';


// axios
import {api} from '../../services/api.js'

// Yup e hook form
import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useNavigate } from 'react-router-dom';


export function Login(){
    const navigate =useNavigate(); // navigate page
    const [showPassword, setShowPassword] = useState(false); // show password login
    
    // Estado para controlar o slider de imagens
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    
    // Array com as imagens dos hamburgueres (adicione seus caminhos de imagens aqui)
    const burgerImages = [
        BossDouble,//1
        BossAbacaxi,//2
        BossCalabresa,//3
        BossCaramelo,//4
        BossCheddar,//5
        BossChurrasco,//6
        BossMussarela,//7 
        BossOnion,//8 
        BossQuarteirao //9
    ];
    
    // Efeito para mudar a imagem a cada 4 segundos
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) => 
                prevIndex === burgerImages.length - 1 ? 0 : prevIndex + 1
            );
        }, 4000);
        
        // Limpar o intervalo quando o componente for desmontado
        return () => clearInterval(interval);
    }, []);
    
    // Validação do formulário
    const schema = yup.object().shape({
        email: yup.string().email('exemplo@email.com').required('Email obrigatório'),
        password: yup.string().min(4, 'Mínimo 4 caracteres').required('Senha é obrigatório')
    });

    // Hook form
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema),
        mode: 'onChange'// msg schema validate real-time
    });

    // Faz uma requisição POST para a rota /session da API com email e senha
    const onSubmitFunction = async (data) => {
        try {
            // toast to feedback visual
            const {data: {token},
            } = await toast.promise(
                api.post('/session', {
                    email: data.email,      // Email fornecido no formulário
                    password: data.password  // Senha fornecida no formulário
                }),
                {
                    pending: 'Verificando seus dados... 👨🏽‍💻',
                    success: {
                        render() {
                            setTimeout(() => {
                                navigate('/');
                            }, 2000); // 2000 milliseconds = 2 seconds
                            return 'Bem vindo ao Burger Boss! 🍔';
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
            localStorage.setItem('@devburger:token', token);
            
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
            {/* Lado esquerdo com o slider de imagens de hamburguers */}
            <LeftContainer>
                {/* Adicionando efeito de fade para transição suave entre imagens */}
                <div className="slider-container">
                    {burgerImages.map((image, index) => (
                        <img 
                            key={index} 
                            src={image} 
                            alt={`Hamburger-${index+1}`}
                            className={index === currentImageIndex ? "active" : ""}
                            style={{
                                opacity: index === currentImageIndex ? 1 : 0,
                                transition: 'opacity 0.7s ease-in-out',
                                position: index === currentImageIndex ? 'relative' : 'absolute'
                            }}
                        />
                    ))}
                </div>
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
                <Link href='/cadastro'>Primeira vez aqui? 
                    <span style={{ textDecoration: 'underline' }}> Crie sua conta</span></Link>
            </RightContainer>

        <ToastContainer autoClose={3000} theme="colored" />

        </Container>
        
    </div>
    );
};