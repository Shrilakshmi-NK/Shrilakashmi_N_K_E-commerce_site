import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const Header = () => {
  const { totalItems } = useCart();

  return (
    <header style={{ 
      padding: '1rem', 
      backgroundColor: '#333', 
      color: 'white',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    }}>
      <Link to="/" style={{ color: 'white', textDecoration: 'none' }}>
        <h1>E-Commerce Store</h1>
      </Link>
      <Link to="/cart" style={{ 
        color: 'white', 
        textDecoration: 'none',
        padding: '0.5rem 1rem',
        backgroundColor: '#555',
        borderRadius: '4px'
      }}>
        Cart ({totalItems})
      </Link>
    </header>
  );
};

export default Header;