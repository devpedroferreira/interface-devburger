import { Container, BannerMenu, CategoryMenu, ProductsContainer } from './styles';

export function Menu() {
    return (
        <Container>
            <BannerMenu>
                <h1>O melhor
                
                está aqui!</h1>
            
            </BannerMenu>

            <CategoryMenu>
                
            </CategoryMenu>
            <ul>
                <li>Hamburguer</li>
                <li>Pizza</li>
                <li>Pastel</li>
                <li>Combos</li>
            </ul>
            <ProductsContainer>


            </ProductsContainer>
                


        </Container>
    );
}