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
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 4
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 3
        },
        mobile: {
            breakpoint: { max: 560, min: 0 },
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
                autoPlaySpeed={3500}
                customTransition="transform 2000ms linear"
                transitionDuration={2000}
                containerClass="carousel-container"
                pauseOnHover={true}
                swipeable={true}
                draggable={false}
                arrows={false}
                showDots={false}  // Changed to false
                renderDotsOutside={false}  // Changed to false
                rewind={false}
                rewindWithAnimation={false}
            >
                {categories.map(category => (
                    <CategoryWrapper key={category.id}>
                        <CategoryName>{category.name}</CategoryName>
                        <CategoryCard $imageUrl={category.url}>
                            {/* Removed name from here */}
                        </CategoryCard>
                        <Description>
                            {category.description || 'Sem descrição disponível'}
                        </Description>
                    </CategoryWrapper>
                ))}
            </Carousel>
        </Container>
    );
}