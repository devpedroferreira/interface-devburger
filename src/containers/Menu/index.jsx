import { Container } from './styles';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setUser } from '../../store/userSlice';
import { useEffect } from 'react';

export function Menu() {
    const [isOpen, setIsOpen] = useState(false);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    
    const handleMenuToggle = () => {
        setIsOpen(!isOpen);
    };
    
    const handleLogout = () => {
        dispatch(setUser(null));
        navigate('/login');
    };
    
    useEffect(() => {
        if (isOpen) {
        document.body.style.overflow = 'hidden';
        } else {
        document.body.style.overflow = 'auto';
        }
    }, [isOpen]);
    
    return (
        
        <Container isOpen={isOpen}>
        <button onClick={handleMenuToggle}>Menu</button>
        {isOpen && (
            <div className="menu-content">
            <button onClick={handleLogout}>Logout</button>
            </div>
        )}
        </Container>
    );
    }