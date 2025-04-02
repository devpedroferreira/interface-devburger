import { CategoriesCarousel } from '../../components/CategoriesCarousel';
import{ Banner, Container, Content } from './styles';

export function Home() {
  return (
    <main>
        <Banner>
            <h1> Bem vindo ao <span> Burger Boss!</span></h1>t
        </Banner>
        <Container>
            <Content>
                <CategoriesCarousel />

                <div><strong>Produtos</strong></div>
            </Content>
        </Container>
    </main>
  );
}