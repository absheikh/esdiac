import React, { createContext, useContext, useState, useEffect } from "react";
import { useRouter } from "next/router";
import axios from "axios";
const AuthContext = createContext();
import { API_URL } from "../const";
function AuthProvider({ children }) {
  const [user, setUser] = useState({
    error: "you are logged out, and there is no user object, and no token",
  });
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("token");
    console.log("token: ", token);
    if (!(token === null || token === undefined)) {
      loginWithToken();
    }
    setIsLoading(false);
  }, []);

  function login(data) {
    setIsLoading(true);
    const { email, password } = data;
    const config = {
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    };
    axios
      .request({
        method: "post",
        url: `${API_URL}/authenticate`,
        data: {
          email,
          password,
        },
        config,
      })
      .then((res) => {
        if (res.status === 200) {
          const { token } = res.data;
          localStorage.setItem("token", token);
          setUser(res.data);
          setIsAuthenticated(true);
          setIsLoading(false);
        } else {
          setIsAuthenticated(false);
          setIsLoading(false);
        }
      })
      .catch((err) => {
        console.log("err: ", err);
        setIsLoading(false);
      });
  }

  function logout() {
    setIsAuthenticated(false);
    setUser({
      error: "you are logged out, and there is no user object, and no token",
    });
    localStorage.removeItem("token");
  }

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        user,
        login,
        logout,
        isLoading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

const useAuth = () => useContext(AuthContext);

export { AuthProvider, useAuth };
