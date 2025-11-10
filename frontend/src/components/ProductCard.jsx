import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();

  const handleAddToCart = (e) => {
    e.preventDefault();
    e.stopPropagation();
    console.log('Button clicked, adding product:', product);
    addToCart(product);
    alert(`${product.name} added to cart!`);
  };

  return (
    <div className="card" style={{
      padding: '1rem',
      cursor: 'pointer'
    }}>
      <Link to={`/product/${product._id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
        <img 
          src={product.images[0]} 
          alt={product.name}
          style={{
            width: '100%',
            height: '200px',
            objectFit: 'cover',
            borderRadius: '4px',
            marginBottom: '1rem'
          }}
        />
        <h3 style={{ margin: '0 0 0.5rem 0' }}>{product.name}</h3>
        <p style={{ 
          color: '#666', 
          fontSize: '0.9rem',
          margin: '0 0 1rem 0',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
          whiteSpace: 'nowrap'
        }}>
          {product.description}
        </p>
        <p style={{ 
          fontSize: '1.2rem', 
          fontWeight: 'bold', 
          color: 'var(--primary-color)',
          margin: '0 0 1rem 0'
        }}>
          ${product.price}
        </p>
      </Link>
      <button
        onClick={handleAddToCart}
        className="btn-primary"
        style={{
          width: '100%',
          fontSize: '1rem'
        }}
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;