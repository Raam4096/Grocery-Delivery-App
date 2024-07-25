import React, { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const register = (name, email, password) => {
    // In a real app, you'd make an API call here
    setUser({ name, email });
  };

  const login = (email, password) => {
    // In a real app, you'd make an API call here
    setUser({ name: "User", email });
  };

  const logout = () => {
    setUser(null);
  };

  const updateAddress = (address) => {
    setUser(prevUser => ({ ...prevUser, address }));
  };

  return (
    <AuthContext.Provider value={{ user, register, login, logout, updateAddress }}>
      {children}
    </AuthContext.Provider>
  );
};