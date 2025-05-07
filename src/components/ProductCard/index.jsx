import { CartButton } from '../CartButton';
import { Container, ProductImage, ProductInfo } from './styles';

export default function ProductCard({ product }) {
    return (
        <Container>
            <ProductImage $imageUrl={product.url}>
                <span className="price">{product.currencyValue}</span>
            </ProductImage>
            
            <ProductInfo>
                <h3>{product.name}</h3>
                <p>{product.description}</p>
                <CartButton productId={product.id} />
            </ProductInfo>
        </Container>
    );
}