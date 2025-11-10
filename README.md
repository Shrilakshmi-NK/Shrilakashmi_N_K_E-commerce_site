# E-commerce Website

A modern e-commerce website built with React.js frontend and Node.js/Express.js backend.

## Project Structure

```
├── frontend/          # React.js frontend application
├── backend/           # Node.js/Express.js backend API
├── .kiro/            # Kiro specifications and configuration
└── README.md         # Project documentation
```

## Getting Started

### Prerequisites
- Node.js (v20.19+ or v22.12+)
- npm or yarn
- MongoDB Atlas account

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd E-commerce_site
```

2. Install frontend dependencies:
```bash
cd frontend
npm install
```

3. Install backend dependencies:
```bash
cd ../backend
npm install
```

4. Set up environment variables:
```bash
# Copy example files and update with your values
cp backend/.env.example backend/.env
cp frontend/.env.example frontend/.env
```

5. Update the MongoDB connection string in `backend/.env`

### Development

1. Start the backend server:
```bash
cd backend
npm run dev
```

2. Start the frontend development server:
```bash
cd frontend
npm run dev
```

The frontend will be available at `http://localhost:5173` and the backend API at `http://localhost:5000`.

## Features

- Product browsing and search
- Product detail views
- Shopping cart functionality
- Responsive design for all devices
- RESTful API backend
- MongoDB Atlas integration

## Tech Stack

**Frontend:**
- React.js 18+
- Vite
- React Router
- Axios
- CSS Modules

**Backend:**
- Node.js
- Express.js
- MongoDB Atlas
- CORS middleware

## API Endpoints

- `GET /api/health` - Health check
- `GET /api/products` - Get all products
- `GET /api/products/:id` - Get product by ID

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test your changes
5. Submit a pull request