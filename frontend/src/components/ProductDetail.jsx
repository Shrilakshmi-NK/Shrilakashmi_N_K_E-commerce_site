import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { productAPI } from '../services/api';
import { useCart } from '../context/CartContext';

const ProductDetail = () => {
  const { id } = useParams();
  const { addToCart } = useCart();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await productAPI.getProductById(id);
        setProduct(response.data);
      } catch (err) {
        setError('Failed to load product');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  if (loading) return <div style={{ textAlign: 'center', padding: '2rem' }}>Loading product...</div>;
  if (error) return <div style={{ textAlign: 'center', padding: '2rem', color: 'red' }}>{error}</div>;
  if (!product) return <div style={{ textAlign: 'center', padding: '2rem' }}>Product not found</div>;

  return (
    <div style={{ padding: '2rem', width: '100%' }}>
      <Link to="/" style={{ color: '#007bff', textDecoration: 'none', marginBottom: '1rem', display: 'inline-block' }}>
        ← Back to Products
      </Link>
      
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', alignItems: 'start' }}>
        <div>
          <img 
            src={product.images[0]} 
            alt={product.name}
            style={{
              width: '100%',
              maxWidth: '500px',
              height: 'auto',
              borderRadius: '8px',
              boxShadow: '0 4px 8px rgba(0,0,0,0.1)'
            }}
          />
        </div>
        
        <div>
          <h1 style={{ margin: '0 0 1rem 0' }}>{product.name}</h1>
          <p style={{ 
            fontSize: '1.5rem', 
            fontWeight: 'bold', 
            color: '#2c5aa0',
            margin: '0 0 1rem 0'
          }}>
            ${product.price}
          </p>
          <p style={{ 
            color: '#666', 
            lineHeight: '1.6',
            margin: '0 0 2rem 0'
          }}>
            {product.description}
          </p>
          
          <div style={{ marginBottom: '2rem' }}>
            <p><strong>Category:</strong> {product.category}</p>
            <p><strong>In Stock:</strong> {product.inStock ? 'Yes' : 'No'}</p>
            <p><strong>Available:</strong> {product.stockQuantity} units</p>
          </div>
          
          <button
            onClick={() => addToCart(product)}
            disabled={!product.inStock}
            style={{
              padding: '1rem 2rem',
              backgroundColor: product.inStock ? '#007bff' : '#ccc',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: product.inStock ? 'pointer' : 'not-allowed',
              fontSize: '1.1rem',
              fontWeight: 'bold'
            }}
          >
            {product.inStock ? 'Add to Cart' : 'Out of Stock'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;