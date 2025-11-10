import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const Cart = () => {
  const { items, totalItems, totalPrice, updateQuantity, removeFromCart, clearCart } = useCart();

  if (items.length === 0) {
    return (
      <div style={{ padding: '2rem', textAlign: 'center' }}>
        <h2>Your Cart is Empty</h2>
        <p>Add some products to get started!</p>
        <Link to="/" style={{
          display: 'inline-block',
          padding: '1rem 2rem',
          backgroundColor: '#007bff',
          color: 'white',
          textDecoration: 'none',
          borderRadius: '4px',
          marginTop: '1rem'
        }}>
          Continue Shopping
        </Link>
      </div>
    );
  }

  return (
    <div style={{ padding: '2rem', maxWidth: '800px', margin: '0 auto' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
        <h2>Shopping Cart ({totalItems} items)</h2>
        <button
          onClick={clearCart}
          style={{
            padding: '0.5rem 1rem',
            backgroundColor: '#dc3545',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer'
          }}
        >
          Clear Cart
        </button>
      </div>

      <div style={{ marginBottom: '2rem' }}>
        {items.map(item => (
          <div key={item.product._id} style={{
            display: 'flex',
            alignItems: 'center',
            padding: '1rem',
            border: '1px solid #ddd',
            borderRadius: '8px',
            marginBottom: '1rem',
            backgroundColor: 'white'
          }}>
            <img 
              src={item.product.images[0]} 
              alt={item.product.name}
              style={{
                width: '80px',
                height: '80px',
                objectFit: 'cover',
                borderRadius: '4px',
                marginRight: '1rem'
              }}
            />
            
            <div style={{ flex: 1 }}>
              <h4 style={{ margin: '0 0 0.5rem 0' }}>{item.product.name}</h4>
              <p style={{ color: '#666', margin: '0' }}>${item.product.price}</p>
            </div>
            
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <button
                  onClick={() => updateQuantity(item.product._id, item.quantity - 1)}
                  style={{
                    width: '30px',
                    height: '30px',
                    border: '1px solid #ddd',
                    backgroundColor: 'white',
                    cursor: 'pointer',
                    borderRadius: '4px'
                  }}
                >
                  -
                </button>
                <span style={{ minWidth: '20px', textAlign: 'center' }}>{item.quantity}</span>
                <button
                  onClick={() => updateQuantity(item.product._id, item.quantity + 1)}
                  style={{
                    width: '30px',
                    height: '30px',
                    border: '1px solid #ddd',
                    backgroundColor: 'white',
                    cursor: 'pointer',
                    borderRadius: '4px'
                  }}
                >
                  +
                </button>
              </div>
              
              <div style={{ minWidth: '80px', textAlign: 'right' }}>
                <strong>${(item.product.price * item.quantity).toFixed(2)}</strong>
              </div>
              
              <button
                onClick={() => removeFromCart(item.product._id)}
                style={{
                  padding: '0.5rem',
                  backgroundColor: '#dc3545',
                  color: 'white',
                  border: 'none',
                  borderRadius: '4px',
                  cursor: 'pointer'
                }}
              >
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>

      <div style={{
        padding: '1rem',
        backgroundColor: '#f8f9fa',
        borderRadius: '8px',
        textAlign: 'right'
      }}>
        <h3 style={{ margin: '0 0 1rem 0' }}>
          Total: ${totalPrice.toFixed(2)}
        </h3>
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'flex-end' }}>
          <Link to="/" style={{
            padding: '1rem 2rem',
            backgroundColor: '#6c757d',
            color: 'white',
            textDecoration: 'none',
            borderRadius: '4px'
          }}>
            Continue Shopping
          </Link>
          <button style={{
            padding: '1rem 2rem',
            backgroundColor: '#28a745',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
            fontSize: '1rem'
          }}>
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;