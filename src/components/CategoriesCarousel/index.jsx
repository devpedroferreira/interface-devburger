import { api } from '../../services/api';
import { useEffect, useState } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Container, CategoryCard, Title, Description, CategoryWrapper, CategoryName } from './styles';

export function CategoriesCarousel() {
    const [categories, setCategories] = useState([]);
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
        async function loadCategories() {
            try {
                setIsLoading(true);
                const { data } = await api.get('/categories');
                
                // Add URL without token since we're handling auth in headers
                const categoriesWithUrls = data.map(category => ({
                    ...category,
                    imageUrl: category.url // Remove token from URL
                }));
                
                //console.log('Categories loaded:', categoriesWithUrls);
                setCategories(categoriesWithUrls);
            } catch (error) {
                console.error('API Error:', error.response || error);
            } finally {
                setIsLoading(false);
            }
        }

        if (token) {
            loadCategories();
        } else {
            console.warn('No token found in localStorage');
        }
    }, [token]);

    if (isLoading) {
        return <Container><Title>Carregando categorias...</Title></Container>;
    }

    return (
        <Container>
            <Title>Categorias</Title>
            <Carousel 
                itemClass='carousel-item'
                responsive={responsive}
                infinite={true}
                keyBoardControl={true}
                removeArrowOnDeviceType={["tablet", "mobile"]}
                autoPlay={true}
                autoPlaySpeed={8000}
                swipeable={true}
                draggable={true}
                containerClass="carousel-container"
                pauseOnHover={true}
                customTransition="transform 500ms linear"
                transitionDuration={500}
                arrows={false}
                showDots={false}
                rewind={false}  // Added to prevent rewind
                rewindWithAnimation={false}  // Added to prevent rewind animation
                ssr={true}  // Added for better SSR support
                
            >
                {categories.map(category => (
                    <CategoryWrapper key={category.id}>
                        <CategoryName>{category.name}</CategoryName>
                        <CategoryCard $imageUrl={category.url} />
                        <Description>{category.description}</Description>
                    </CategoryWrapper>
                                            ))}
            </Carousel>
        </Container>
    );
}