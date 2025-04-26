import { api } from '../../services/api';
import { useEffect, useState } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { CartButton } from '../../components/CartButton';
import { Container, ProductCard, Title, Description, ProductWrapper, ProductName } from './styles';

export function OfferCarousel() {
    const [offerProducts, setOfferProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const token = localStorage.getItem('@devburger:token');
    

    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 1536 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 1536, min: 1024 },
            items: 4
        },
        tablet: {
            breakpoint: { max: 1024, min: 640 },
            items: 3
        },
        mobile: {
            breakpoint: { max: 640, min: 0 },
            items: 2
        }
    };

   
    useEffect(() => {
        async function loadOfferProducts() {
            try {
                setIsLoading(true);
                // First, get all products
                const { data } = await api.get('/products');
                
                // Filter only products with offer=true
                const productsWithOffers = data.filter(product => product.offer).map(product => ({
                    ...product,
                    imageUrl: product.url // Use the URL from the product model
                }));
                
                //console.log('Offer Products:', productsWithOffers); // For debugging
                setOfferProducts(productsWithOffers);
            } catch (error) {
                console.error('API Error:', error.response || error);
            } finally {
                setIsLoading(false);
            }
        }
    
        if (token) {
            loadOfferProducts();
        } else {
            console.warn('No token found in localStorage');
        }
    }, [token]);

    if (isLoading) {
        return <Container><Title>Carregando Promoções...</Title></Container>;
    }

    return (
        <Container>
            <Title>Promoções</Title>
            <Carousel 
                itemClass='carousel-item'
                responsive={responsive}
                infinite={true}
                keyBoardControl={true}
                removeArrowOnDeviceType={["tablet", "mobile"]}
                autoPlay={true}
                autoPlaySpeed={3500}
                customTransition="transform 2000ms linear"
                transitionDuration={2000}
                containerClass="carousel-container"
                pauseOnHover={true}
                swipeable={true}
                draggable={true}
                arrows={false}
                showDots={false}  // Changed to false
                renderDotsOutside={false}  // Changed to false
                rewind={false}
                rewindWithAnimation={false}
                ssr={true} // means to render on server-side.
                >
                    {offerProducts.map(product => (
                    <ProductWrapper key={product.id}>
                        <ProductName>{product.name}</ProductName>
                        <ProductCard $imageUrl={product.imageUrl}>
                            <p className="price">
                                {new Intl.NumberFormat('pt-BR', {
                                    style: 'currency',
                                    currency: 'BRL'
                                }).format(product.price)}
                            </p>
                        </ProductCard>
                        <CartButton  />
                        <Description>
                            {product.description || `${product.categoryName} em Promoção!`}
                        </Description>
                    </ProductWrapper>
                ))}
            </Carousel>
        </Container>
    );
}