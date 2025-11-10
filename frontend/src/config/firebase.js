import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';

// For demo purposes - in production, use environment variables
const firebaseConfig = {
  apiKey: "demo-api-key",
  authDomain: "ecommerce-demo.firebaseapp.com",
  projectId: "ecommerce-demo",
  storageBucket: "ecommerce-demo.appspot.com",
  messagingSenderId: "123456789",
  appId: "demo-app-id"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();

export default app;