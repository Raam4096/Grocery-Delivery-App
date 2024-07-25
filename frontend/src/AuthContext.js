import React, { createContext, useEffect,useState } from 'react';
import { login, getCurrentUser, logout } from './services/auth.service';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  // Check if user is logged in on mount
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const userData = await getCurrentUser();
        setUser(userData);
      } catch (error) {
        console.error('Error fetching current user:', error);
      }
    };

    fetchUser();
  }, []);

  const handleLogin = async (username, password) => {
    try {
      const userData = await login(username, password);
      setUser(userData);
      localStorage.setItem('user', JSON.stringify(userData));
    } catch (error) {
      console.error('Login error:', error);
      throw error;
    }
  };

  const handleLogout = () => {
    logout();
    setUser(null);
    localStorage.removeItem('user');
  };

  return (
    <AuthContext.Provider value={{ user, login: handleLogin, logout: handleLogout }}>
      {children}
    </AuthContext.Provider>
  );
};