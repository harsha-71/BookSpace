import React, { createContext, useContext, useState } from 'react';

export const AuthContext = createContext();

export default function AuthProvider({  
 children }) {
  const [authUser, setAuthUser] = useState(() => {
  try {
    const initialAuthUser = localStorage.getItem("Users");
    if (initialAuthUser) {
      return JSON.parse(initialAuthUser);
    } else {
      console.warn("No authentication data found in localStorage.");
      return null; // Set a default value
    }
  } catch (error) {
    console.error("Error parsing auth user data from localStorage:", error);
    return null; // Set a default value
  }
});
  return (
    <AuthContext.Provider value={[authUser, setAuthUser]}>
      {children}
    </AuthContext.Provider>
  );
}


export const useAuth = () => useContext(AuthContext);