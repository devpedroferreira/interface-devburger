import{ Banner, Container, Content } from './styles';


export function Home() {
  return (
    <main>
        <Banner>
            <h1> Bem vindo ao Burger Boss!</h1>t
        </Banner>
        <Container>
            <Content>
                <div>Categorias</div>
                <div>Produtos</div>
            </Content>
        </Container>
    </main>
  );
}