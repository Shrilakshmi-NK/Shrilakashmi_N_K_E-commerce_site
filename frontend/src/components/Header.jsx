import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';

const Header = () => {
  const { totalItems } = useCart();
  const { user, logout } = useAuth();
  const location = useLocation();

  const handleLogout = async () => {
    try {
      await logout();
    } catch (error) {
      console.error('Failed to log out:', error);
    }
  };

  return (
    <header style={{ 
      padding: '1rem 2rem', 
      backgroundColor: 'var(--dark-bg)', 
      color: 'white',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      boxShadow: 'var(--shadow)'
    }}>
      <Link to="/" style={{ color: 'white', textDecoration: 'none' }}>
        <h1 style={{ fontSize: '1.8rem' }}>E-Commerce Store</h1>
      </Link>
      
      {user && location.pathname !== '/login' && (
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <img 
              src={user.photoURL} 
              alt={user.displayName}
              style={{ 
                width: '32px', 
                height: '32px', 
                borderRadius: '50%',
                border: '2px solid white'
              }}
            />
            <span style={{ fontSize: '0.9rem' }}>Hi, {user.displayName}</span>
          </div>
          
          <Link to="/cart" className="btn-primary" style={{ 
            color: 'white', 
            textDecoration: 'none',
            padding: '0.5rem 1rem',
            borderRadius: '6px',
            fontWeight: '500'
          }}>
            Cart ({totalItems})
          </Link>
          
          <button
            onClick={handleLogout}
            className="btn-danger"
          >
            Logout
          </button>
        </div>
      )}
    </header>
  );
};

export default Header;