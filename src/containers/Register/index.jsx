import { Container, Form, InputContainer, LeftContainer, Link, RightContainer, Title } from './styles';
import { ContainerButton } from '../../components/Button/styles.js';
import LogoBoss from '../../assets/04_logo_sf.png';
import { toast, ToastContainer } from 'react-toastify';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

// Imagens do slider
import BossDouble from '../../assets/imgBurgers/doubleLogo.png';
import BossAbacaxi from '../../assets/imgBurgers/bossAbacaxi.png';
import BossCalabresa from '../../assets/imgBurgers/bossCalabresa.png';
import BossCaramelo from '../../assets/imgBurgers/bossCaramelo.png';
import BossCheddar from '../../assets/imgBurgers/bossCheddar.png';
import BossChurrasco from '../../assets/imgBurgers/bossChurrasco.png';
import BossMussarela from '../../assets/imgBurgers/bossMussarela.png';
import BossOnion from '../../assets/imgBurgers/bossOnion.png';
import BossQuarteirao from '../../assets/imgBurgers/bossQuarteirao.png';

// API e Validação
import { api } from '../../services/api.js';
import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

export function Register() {
    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const burgerImages = [
        BossDouble, BossAbacaxi, BossCalabresa,
        BossCaramelo, BossCheddar, BossChurrasco,
        BossMussarela, BossOnion, BossQuarteirao
    ];

    // Configuração do slider de imagens
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prev) => (prev + 1) % burgerImages.length);
        }, 4000);
        return () => clearInterval(interval);
    }, []);

    // Validação do formulário
    const schema = yup.object().shape({
        name: yup.string().required('Nome obrigatório'),
        email: yup.string().email('exemplo@email.com').required('Email obrigatório'),
        password: yup.string()
            .min(4, 'Mínimo 4 caracteres')
            .required('Senha obrigatória'),
        confirmPassword: yup.string()
            .oneOf([yup.ref('password'), null], 'Senhas não coincidem')
            .required('Confirme a senha')
    });

    const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm({
        resolver: yupResolver(schema)
    });

    // Submit do formulário
    const onSubmitFunction = async (data) => {
        try {
            const response = await toast.promise(
                api.post('/users', {
                    name: data.name,
                    email: data.email,
                    password_hash: data.password,  // Campo corrigido para password_hash
                    admin: false
                }),
                {
                    pending: 'Verificando dados... 👨💻',
                    success: {
                        render() {
                            navigate('/dashboard');
                            return 'Cadastro realizado! 🍔✨';
                        },
                        style: { background: '#1b1b1b', color: '#fff' }
                    },
                    error: {
                        render({ data }) {
                            return data?.response?.data?.error || 'Erro no cadastro! 💥';
                        },
                        style: { background: '#1b1b1b', color: '#f27613' }
                    }
                }
            );
            localStorage.setItem('@devburger:token', response.data.token);
        } catch (err) {
            console.error("Erro detalhado:", err.response?.data || err.message);
            throw err;
        }
    };

    return (
        <Container>
            <LeftContainer>
                <div className="slider-container">
                    {burgerImages.map((image, index) => (
                        <img
                            key={index}
                            src={image}
                            alt={`Hamburger-${index + 1}`}
                            className={index === currentImageIndex ? "active" : ""}
                            style={{
                                opacity: index === currentImageIndex ? 1 : 0,
                                transition: 'opacity 0.7s ease-in-out',
                                position: 'absolute'
                            }}
                        />
                    ))}
                </div>
                <div className="slider-indicators">
                    {burgerImages.map((_, index) => (
                        <span
                            key={index}
                            className={index === currentImageIndex ? "active-indicator" : "indicator"}
                            onClick={() => setCurrentImageIndex(index)}
                        />
                    ))}
                </div>
            </LeftContainer>

            <RightContainer>
                <img src={LogoBoss} alt="Logo DevBurger" />
                <Title>Criar Conta</Title>
                
                <Form onSubmit={handleSubmit(onSubmitFunction)}>
                    {/* Campos do formulário */}
                    <InputContainer>
                        <label>Nome</label>
                        <input type="text" {...register('name')} />
                        <span className="error">{errors.name?.message}</span>
                    </InputContainer>

                    <InputContainer>
                        <label>Email</label>
                        <input type="email" {...register('email')} />
                        <span className="error">{errors.email?.message}</span>
                    </InputContainer>

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
                        <span className="error">{errors.password?.message}</span>
                    </InputContainer>

                    <InputContainer>
                        <label>Confirmar Senha</label>
                        <div className="password-container">
                            <input
                                type={showPassword ? "text" : "password"}
                                {...register('confirmPassword')}
                            />
                            <button
                                type="button"
                                className="eye-button"
                                onClick={() => setShowPassword(!showPassword)}
                            >
                                {showPassword ? "👁️" : "👁️‍🗨️"}
                            </button>
                        </div>
                        <span className="error">{errors.confirmPassword?.message}</span>
                    </InputContainer>

                    
                </Form>

                     {/* Botão dentro do formulário */}
                    <ContainerButton
                        type="submit"
                        disabled={isSubmitting}
                        $isSubmitting={isSubmitting}
                    >
                        {isSubmitting ? 'Cadastrando...' : 'Cadastrar Usuário'}
                    </ContainerButton>

                <Link href="/login">
                    Já tem conta? <span>Faça login</span>
                </Link>
            </RightContainer>

            <ToastContainer
                position="bottom-center"
                autoClose={3000}
                theme="colored"
                progressStyle={{ backgroundColor: '#f27613' }}
            />
        </Container>
    );
}