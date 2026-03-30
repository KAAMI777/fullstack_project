import React, { createContext, useEffect, useState } from "react";
import axios from "axios";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(null);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const localToken = localStorage.getItem("token");
    const sessionToken = sessionStorage.getItem("token");
    const restoredToken = localToken || sessionToken;

    if (restoredToken) {
      setToken(restoredToken);
      axios.defaults.headers.common["Authorization"] =
        `Bearer ${restoredToken}`;

      const userJson =
        localStorage.getItem("user") || sessionStorage.getItem("user");
      if (userJson) {
        try {
          setUser(JSON.parse(userJson));
        } catch (e) {
          setUser(null);
        }
      }
    }

    setLoading(false);
  }, []);

  const login = ({ token: newToken, user: newUser } = {}, remember = true) => {
    console.log("Login called with:", { newToken, newUser, remember });
    if (!newToken) return;
    setToken(newToken);
    setUser(newUser || null);
    axios.defaults.headers.common["Authorization"] = `Bearer ${newToken}`;

    const storage = remember ? localStorage : sessionStorage;
    storage.setItem("token", newToken);
    if (newUser) storage.setItem("user", JSON.stringify(newUser));

    // Clean up the other storage
    if (remember) {
      sessionStorage.removeItem("token");
      sessionStorage.removeItem("user");
    } else {
      localStorage.removeItem("token");
      localStorage.removeItem("user");
    }
  };

  const logout = () => {
    setToken(null);
    setUser(null);
    delete axios.defaults.headers.common["Authorization"];
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    sessionStorage.removeItem("token");
    sessionStorage.removeItem("user");
  };

  return (
    <AuthContext.Provider
      value={{ token, user, loading, login, logout, isAuthenticated: !!token }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
