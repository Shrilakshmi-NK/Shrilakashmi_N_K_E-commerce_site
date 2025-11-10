import React, { createContext, useContext, useState, useEffect } from 'react';
import { auth, googleProvider } from '../config/firebase';
import { signInWithPopup, signOut, onAuthStateChanged } from 'firebase/auth';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Mock authentication for demo purposes
  const [mockUser, setMockUser] = useState(null);

  useEffect(() => {
    // Check for stored user
    const storedUser = localStorage.getItem('mockUser');
    if (storedUser) {
      setMockUser(JSON.parse(storedUser));
    }
    setLoading(false);
  }, []);

  const signInWithGoogle = async () => {
    try {
      // Mock Google sign-in for demo
      const mockGoogleUser = {
        uid: 'demo-user-123',
        displayName: 'Demo User',
        email: 'demo@example.com',
        photoURL: 'https://via.placeholder.com/40'
      };
      
      setMockUser(mockGoogleUser);
      localStorage.setItem('mockUser', JSON.stringify(mockGoogleUser));
      return mockGoogleUser;
    } catch (error) {
      console.error('Error signing in with Google:', error);
      throw error;
    }
  };

  const logout = async () => {
    try {
      setMockUser(null);
      localStorage.removeItem('mockUser');
    } catch (error) {
      console.error('Error signing out:', error);
      throw error;
    }
  };

  const value = {
    user: mockUser,
    loading,
    signInWithGoogle,
    logout
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};