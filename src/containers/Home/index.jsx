import { CartButton } from '../../components/CartButton';
import { CategoriesCarousel } from '../../components/CategoriesCarousel';
import { OfferCarousel } from '../../components/OfferCarousel';
import{ Banner, Container, Content } from './styles';

export function Home() {
  return (
    <main>
        <Banner>
            <h1> Bem vindo ao <span> Burger Boss!</span></h1>
        </Banner>
        
        <Container>
            <Content>
                <CategoriesCarousel />

                <OfferCarousel />
                <CartButton />
            </Content>
        </Container>
    </main>
  );
}