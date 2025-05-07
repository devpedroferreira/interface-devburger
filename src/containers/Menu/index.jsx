import { Container, BannerMenu, CategoryMenu, ProductsContainer } from './styles';
import { useEffect, useState } from 'react';
import api from '../../services/api';
import ProductCard from '../../components/ProductCard'; // We'll create this next

export function Menu() {
    const [categories, setCategories] = useState([]);
    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState(0);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        async function loadCategories() {
            try {

                setIsLoading(true);
                const { data } = await api.get('/categories');
                
                const newCategories = [
                    { 
                        id: 0, 
                        name: 'Todos' 
                    }, 
                    ...data
                ];
                setCategories(newCategories);

            } catch (error) {
                console.error('API Error:', error.response || error);
            } finally {
                setIsLoading(false);
            }
        }

        async function loadProducts() {

            try {
                setIsLoading(true);
                const { data } = await api.get('/products');
                
                const newProducts = data.map((product) => ({
                    currencyValue: new Intl.NumberFormat('pt-BR', {
                        style: 'currency',
                        currency: 'BRL'
                    }).format(product.price),
                    ...product,
                }));

                setProducts(newProducts);

            } catch (error) {
                console.error('API Error:', error.response || error);
            } finally {
                setIsLoading(false);
            }
        }

        loadCategories();
        loadProducts();
    }, []);

    useEffect(() => {
        if (selectedCategory === 0) {
            setFilteredProducts(products);
        } else {
            const filtered = products.filter(product => 
                product.category_id === selectedCategory
            );
            setFilteredProducts(filtered);
        }
    }, [selectedCategory, products]);

    const handleCategoryClick = (categoryId) => {
        setSelectedCategory(categoryId);
    };

    return (
        <Container>
            <BannerMenu>
                <div className="banner-text">
                    <h1>O melhor<br/><span>Burger</span></h1>
                    <h2>está aqui!</h2>
                </div>
            </BannerMenu>

            <CategoryMenu>
                {categories.map(category => (
                    <button
                        key={category.id}
                        onClick={() => handleCategoryClick(category.id)}
                        className={selectedCategory === category.id ? 'active' : ''}
                    >
                        {category.name}
                    </button>
                ))}
            </CategoryMenu>
            
            <ProductsContainer>
                {!isLoading && filteredProducts.map(product => (
                    <ProductCard 
                        key={product.id}
                        product={product}
                    />
                ))}
            </ProductsContainer>
        </Container>
    );
}