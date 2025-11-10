import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const Cart = () => {
  const { items, totalItems, totalPrice, updateQuantity, removeFromCart, clearCart } = useCart();

  const handleCheckout = () => {
    alert(`Thank you for your purchase!\n\nOrder Summary:\n${items.length} items\nTotal: $${totalPrice.toFixed(2)}\n\nThis is a demo - no actual payment processed.`);
    clearCart();
  };

  if (items.length === 0) {
    return (
      <div style={{ 
        padding: '4rem 2rem', 
        textAlign: 'center',
        maxWidth: '600px',
        margin: '0 auto'
      }}>
        <h2 style={{ fontSize: '2rem', marginBottom: '1rem', color: 'var(--text-primary)' }}>
          Your Cart is Empty
        </h2>
        <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', marginBottom: '2rem' }}>
          Add some products to get started!
        </p>
        <Link to="/" className="btn-primary" style={{
          display: 'inline-block',
          textDecoration: 'none',
          fontSize: '1.1rem'
        }}>
          Continue Shopping
        </Link>
      </div>
    );
  }

  return (
    <div style={{ padding: '2rem', maxWidth: '1000px', margin: '0 auto', width: '100%' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
        <h2>Shopping Cart ({totalItems} items)</h2>
        <button
          onClick={clearCart}
          className="btn-danger"
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
                className="btn-danger"
                style={{ padding: '0.5rem' }}
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
            backgroundColor: 'var(--text-secondary)',
            color: 'white',
            textDecoration: 'none',
            borderRadius: '8px',
            fontWeight: '500'
          }}>
            Continue Shopping
          </Link>
          <button 
            onClick={handleCheckout}
            className="btn-secondary"
            style={{
              padding: '1rem 2rem',
              fontSize: '1rem',
              fontWeight: '600'
            }}
          >
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;