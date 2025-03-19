import { Container, Form, InputContainer, LeftContainer, Link, RightContainer, Title } from "./styles";
import { ContainerButton } from "../../components/Button/styles.js";
import BossDouble from "../../assets/doubleLogo.png";
import LogoBoss from "../../assets/04_logo_sf.png";

// axios
import {api} from '../../services/api.js'

// Yup e hook form
import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

export function Login(){
    // Validação do formulário
    const schema = yup.object().shape({
        email: yup.string().email(' exemplo@email.com').required('Campo obrigatório'),
        password: yup.string().min(4, ' Senha deve ter no mínimo 4 caracteres').required('Campo obrigatório')
    });

    // Hook form
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    });

    // Função para enviar os dados do formulário quando o usuário faz login
    const onSubmitFunction = async (data) => {
        // Faz uma requisição POST para a rota /session da API com email e senha
        const response = await api.post('/session', {
            email:      data.email,      // Email fornecido no formulário
            password:   data.password    // Senha fornecida no formulário
        });
        
        // TODO: Armazenar o token JWT retornado pela API no localStorage
        console.log(response);           // Exibe a resposta da API no console
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
                        <input type="password" {...register('password')} />
                        <span>{errors.password?.message}</span>
                    </InputContainer>

                    {/* Links e botão de submit */}
                    <a className='RecuperarSenha'>Esqueceu sua senha?</a>

                    <ContainerButton type='submit'>Entrar</ContainerButton>

                </Form>
                <Link>Primeira vez aqui? 
                    <span style={{ textDecoration: 'underline' }}> Crie sua conta</span></Link>
            </RightContainer>
        </Container>
        
    </div>
    );
};
