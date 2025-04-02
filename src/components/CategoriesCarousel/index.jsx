import { api } from '../../services/api';
import { useEffect, useState } from 'react';


export function CategoriesCarousel() {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        async function fetchCategories() {
            try {
                const response = await api.get('/categories');
                setCategories(response.data);
                console.log(response.data);
            } catch (error) {
                console.error('Error fetching categories:', error);
            }
        }

        fetchCategories(); //load categories when component mounts
    }, []);

    return (
        <div className="categories-carousel">
            {categories.map((category) => (
                <div key={category.id} className="category-card">
                    <img src={category.imageUrl} alt={category.name} />
                    <h3>{category.name}</h3>
                </div>
            ))}
        </div>
    );
}