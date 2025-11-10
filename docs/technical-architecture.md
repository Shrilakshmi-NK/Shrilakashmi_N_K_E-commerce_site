# Technical Architecture Documentation

## E-Commerce Website Architecture

### Overview
This document outlines the technical architecture of the E-Commerce Website, a modern web application built with React.js frontend and Node.js backend, featuring Google authentication and shopping cart functionality.

### System Architecture

#### High-Level Architecture
```
┌─────────────────┐    ┌─────────────────┐    ┌─────────────────┐
│   Frontend      │    │   Backend       │    │   Database      │
│   React.js      │◄──►│   Node.js       │◄──►│   MongoDB       │
│   Port: 5173    │    │   Express.js    │    │   Atlas         │
│                 │    │   Port: 5000    │    │                 │
└─────────────────┘    └─────────────────┘    └─────────────────┘
```

#### Technology Stack

**Frontend:**
- React.js 18+ with Vite build tool
- React Router for client-side routing
- Context API for state management
- Axios for HTTP requests
- Firebase for authentication
- CSS3 with CSS Variables for theming

**Backend:**
- Node.js with Express.js framework
- CORS middleware for cross-origin requests
- dotenv for environment configuration
- Sample data storage (JSON files)

**Database:**
- MongoDB Atlas (configured but using sample data for demo)

**Authentication:**
- Firebase Authentication with Google OAuth
- Mock authentication for demo purposes

### Frontend Architecture

#### Component Structure
```
src/
├── components/
│   ├── Header.jsx           # Navigation and user profile
│   ├── ProductGrid.jsx      # Product listing page
│   ├── ProductCard.jsx      # Individual product display
│   ├── ProductDetail.jsx    # Product detail page
│   ├── Cart.jsx            # Shopping cart page
│   ├── Login.jsx           # Authentication page
│   └── ProtectedRoute.jsx  # Route protection
├── context/
│   ├── AuthContext.jsx     # Authentication state
│   └── CartContext.jsx     # Shopping cart state
├── services/
│   └── api.js              # API service layer
├── config/
│   └── firebase.js         # Firebase configuration
└── App.jsx                 # Main application component
```

#### State Management
- **Authentication State**: Managed by AuthContext using React Context API
- **Cart State**: Managed by CartContext with useReducer hook
- **Local Storage**: Used for cart persistence across sessions

#### Routing Structure
```
/login          - Authentication page
/               - Product grid (protected)
/product/:id    - Product detail (protected)
/cart           - Shopping cart (protected)
```

### Backend Architecture

#### API Structure
```
backend/
├── src/
│   ├── data/
│   │   └── products.js     # Sample product data
│   └── routes/
│       └── products.js     # Product API routes
├── server.js               # Main server file
├── .env                    # Environment variables
└── package.json            # Dependencies
```

#### API Endpoints
- `GET /api/health` - Health check endpoint
- `GET /api/products` - Retrieve all products
- `GET /api/products/:id` - Retrieve specific product
- `GET /api` - Welcome message

#### Middleware Stack
1. CORS - Cross-origin resource sharing
2. Express.json() - JSON body parsing
3. Custom error handling middleware
4. 404 handler for undefined routes

### Data Models

#### Product Model
```javascript
{
  _id: String,
  name: String,
  description: String,
  price: Number,
  images: [String],
  category: String,
  inStock: Boolean,
  stockQuantity: Number
}
```

#### User Model (Authentication)
```javascript
{
  uid: String,
  displayName: String,
  email: String,
  photoURL: String
}
```

#### Cart Item Model
```javascript
{
  product: Product,
  quantity: Number
}
```

### Security Considerations

#### Authentication
- Firebase Authentication with Google OAuth
- Protected routes requiring authentication
- Session persistence with localStorage
- Mock authentication for demo purposes

#### API Security
- CORS configuration for specific origins
- Environment variables for sensitive data
- Error handling without exposing internal details

### Performance Optimizations

#### Frontend
- React.memo for component optimization
- Lazy loading for images
- Efficient re-rendering with proper dependency arrays
- CSS variables for consistent theming

#### Backend
- Lightweight Express.js server
- Efficient JSON data serving
- Proper error handling and timeouts

### Deployment Architecture

#### Development Environment
- Frontend: Vite dev server (localhost:5173)
- Backend: Nodemon for auto-restart (localhost:5000)
- Hot module replacement for development

#### Production Considerations
- Frontend: Static build deployment (Vercel/Netlify)
- Backend: Node.js server deployment (Heroku/Railway)
- Database: MongoDB Atlas cloud hosting
- Environment variable management

### Scalability Considerations

#### Current Limitations
- In-memory sample data (not persistent)
- No user-specific cart persistence
- Mock authentication system

#### Future Enhancements
- Real MongoDB integration
- User-specific data storage
- Real Firebase authentication
- CDN for image assets
- Caching strategies
- Load balancing for high traffic

### Monitoring and Logging

#### Current Implementation
- Console logging for development
- Basic error handling
- Health check endpoint

#### Production Recommendations
- Structured logging (Winston)
- Error tracking (Sentry)
- Performance monitoring
- API analytics

### Development Workflow

#### Setup Process
1. Clone repository
2. Install dependencies (npm install)
3. Configure environment variables
4. Start backend server (npm run dev)
5. Start frontend server (npm run dev)

#### Testing Strategy
- Unit tests for components
- Integration tests for API endpoints
- End-to-end testing for user workflows
- Responsive design testing

### Conclusion

This architecture provides a solid foundation for an e-commerce application with modern web technologies, proper separation of concerns, and scalability considerations. The modular design allows for easy maintenance and future enhancements.