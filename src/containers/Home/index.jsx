import{ Banner, Container, Content } from './styles';


export function Home() {
  return (
    <main>
        <Banner>
            <h1> Bem vindo ao <span> Burger Boss!</span></h1>t
        </Banner>
        <Container>
            <Content>
                <div><strong>Categorias</strong></div>
                <div><strong>Produtos</strong></div>
            </Content>
        </Container>
    </main>
  );
}