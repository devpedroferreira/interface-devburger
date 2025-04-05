import { api } from '../../services/api';
import { useEffect, useState } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Container, CategoryCard, Title } from './styles';

export function CategoriesCarousel() {
    const [categories, setCategories] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [imageErrors, setImageErrors] = useState({});
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
                console.log('Raw category data:', data);
                
                const categoriesWithUrls = data.map(category => ({
                    ...category,
                    imageUrl: category.url ? `${category.url}?token=${token}` : null
                }));
                
                // Log processed data with URLs
                console.log('Processed categories:', categoriesWithUrls);
                
                setCategories(categoriesWithUrls);
            } catch (error) {
                console.error('Error fetching categories:', error);
            } finally {
                setIsLoading(false);
            }
        }

        if (token) {
            loadCategories();
        }
    }, [token]);

    const handleImageError = (categoryId) => {
        if (!imageErrors[categoryId]) {
            setImageErrors(prev => ({
                ...prev,
                [categoryId]: true
            }));
            console.error(`Failed to load image for category ID: ${categoryId}`);
        }
    };

    if (isLoading) {
        return <Container><Title>Carregando categorias...</Title></Container>;
    }

    if (!categories.length) {
        return <Container><Title>Nenhuma categoria encontrada</Title></Container>;
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
                {categories.map(category => (
                    <CategoryCard 
                        key={category.id} 
                        $imageUrl={category.imageUrl}
                    >
                        <p>{category.name}</p>
                    </CategoryCard>
                ))}
            </Carousel>
        </Container>
    );
}