import { Button, Container, Form, InputContainer, LeftContainer, Link, RightContainer, Title } from "./styles";
import Logo from "../../assets/Logo 1.svg";

export function Login(){
    return(
    <div>
        <Container>
            <LeftContainer>
                <img src={Logo} alt="Logo-dev-burger" />
            </LeftContainer>

            <RightContainer>
                <Title>Olá, seja bem vindo ao <span>Dev Burguer!</span></Title>
                <Title>Acesse com seu <span>Login e senha.</span></Title>
               
                <Form>                    
                    <InputContainer>
                        <label >Email</label> 
                        <input type="email" placeholder="Usuário" />
                    </InputContainer>

                    <InputContainer>
                        <label>Senha</label>
                        <input type="password" placeholder="Senha" />
                    </InputContainer>

                    <Link>Esqueceu sua senha?</Link>
                    <Button>Entrar</Button>

                </Form>
                <Link>Primeira vez aqui? 
                    <span style={{ textDecoration: 'underline' }}>Crie sua conta</span></Link>
            </RightContainer>
        </Container>
        
    </div>
    );
};