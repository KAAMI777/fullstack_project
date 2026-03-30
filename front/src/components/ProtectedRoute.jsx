import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";

export default function ProtectedRoute({ children }) {
  const auth = useAuth();
  const location = useLocation();

  if (auth.loading) return null;

  if (!auth.isAuthenticated) {
    return (
      <Navigate
        to="/fullstack_project/sign-in"
        state={{ from: location }}
        replace
      />
    );
  }

  return children;
}
