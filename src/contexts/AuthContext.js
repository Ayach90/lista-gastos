import { onAuthStateChanged } from 'firebase/auth';
import React, { useState, useContext, useEffect } from 'react';
import { auth } from '../firebase/firebaseConfig';

const AuthContext = React.createContext();

const useAuth = () => {
  return useContext(AuthContext);
};

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState();
  const [loader, setLoader] = useState(true);
  useEffect(() => {
    const cancelSuscription = onAuthStateChanged(auth, (user) => {
      setUser(user);
      setLoader(false);
    });
    return cancelSuscription;
  }, []);
  return (
    <AuthContext.Provider value={{ user }}>
      {loader ? 'Cargando...' : children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider, useAuth };
