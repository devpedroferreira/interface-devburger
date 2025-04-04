import { api } from '../../services/api';
import { useEffect, useState } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Container, CategoryCard, Title } from './styles';

export function CategoriesCarousel() {
    const [categories, setCategories] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

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
        async function fetchCategories() {
            try {
                setIsLoading(true);
                const response = await api.get('/categories');
                console.log('Categories data:', response.data);
                setCategories(response.data);
            } catch (error) {
                console.error('Error fetching categories:', error.response || error);
            } finally {
                setIsLoading(false);
            }
        }

        fetchCategories();
    }, []);

    if (isLoading) {
        return <Container><Title>Carregando categorias...</Title></Container>;
    }

    if (categories.length === 0) {
        return <Container><Title>Faça login</Title></Container>;
    }

    const token = localStorage.getItem('@devburger:token');

    const getImageUrl = (imageUrl) => {
        return `${imageUrl}?token=${token}`;
    };

    return (
        <Container>
            <Title>Categorias</Title>
            <Carousel 
                itemClass='carousel-item'
                responsive={responsive}
                infinite={true}
                autoPlay={true}
                autoPlaySpeed={3000}
                keyBoardControl={true}
                showDots={false}
                removeArrowOnDeviceType={["tablet", "mobile"]}
            >
                 {categories.map(category => (
                    <CategoryCard key={category.id}>
                        <img 
                            src={getImageUrl(category.url)}
                            alt={category.name}
                            onError={(e) => {
                                console.error(`Error loading image for ${category.name}`);
                                e.target.src = '/placeholder-burger.png';
                            }}
                        />
                        <h3>{category.name}</h3>
                    </CategoryCard>
                ))}
            </Carousel>
        </Container>
    );
}