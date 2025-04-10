import { api } from '../../services/api';
import { useEffect, useState } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Container, CategoryCard, Title } from './styles';

export function CategoriesCarousel() {
    const [categories, setCategories] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const token = localStorage.getItem('@devburger:token');
    

    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 4
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
            breakpoint: { max: 464, min: 0 },
            items: 2
        }
    };

    useEffect(() => {
        async function loadCategories() {
            try {
                setIsLoading(true);
                const { data } = await api.get('/categories');
                
                // Log raw data from API
                //console.log('Raw Categories Data:', data);

                // Add token to image URLs
                const categoriesWithUrls = data.map(category => ({
                    ...category,
                    imageUrl: `${category.url}?token=${token}`
                }));

                // Log processed categories with URLs
                //console.log('Categories with URLs:', categoriesWithUrls);
                
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
    }, [token]); // Add token as dependency

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
            >
                {categories.map(category => { // Log each category being rendered
                    // log category
                    //console.log(category);
                    return (
                        <CategoryCard 
                            key={category.id} 
                            $imageUrl={category.imageUrl} // Changed from category.url to category.imageUrl
                        >
                            <p>{category.name}</p>
                        </CategoryCard>
                    );
                })}
            </Carousel>
        </Container>
    );
}