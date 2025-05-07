import { Container, BannerMenu, CategoryMenu, ProductsContainer } from './styles';

export function Menu() {
    const [categories, setCategories] = useState([]);

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