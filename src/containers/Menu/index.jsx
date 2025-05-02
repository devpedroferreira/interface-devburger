import { Container, BannerMenu, CategoryMenu, ProductsContainer } from './styles';

export function Menu() {
    return (
        <Container>
            <BannerMenu>
            <div className="banner-text">
                <h1> O melhor
                <br/> 
                <span> Burger </span></h1>
                <h2> está aqui!</h2>
            </div>
            </BannerMenu>

                <CategoryMenu>

                        
                </CategoryMenu>
            
            <ProductsContainer>


            </ProductsContainer>
        </Container>
    );
}