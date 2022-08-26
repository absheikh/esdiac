import React, { createContext, useContext, useState, useEffect } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import { toast } from "react-toastify";
const AuthContext = createContext();
import { API_URI, API_URL } from "../const";

function AuthProvider({ children }) {
  const router = useRouter();
  const [user, setUser] = useState({
    error: "you are logged out, and there is no user object, and no token",
  });
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("token");
    console.log("token: ", token);
    if (!(token === null || token === undefined)) {
      login(token);
    }
    setIsLoading(false);
  }, []);

  function login(data) {
    setIsLoading(true);

    fetch(`${API_URI}/authenticate `, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("data: ", data);
        if (data) {
          setUser(data.data);
          console.log(data.data.firstname);
          setIsAuthenticated(true);
          localStorage.setItem("token", data.data.token);
          toast.success("Welcome to you dashboard", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
          router.push("/main");
        } else {
          toast.error(data.message + "  Don't forget to add +", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
          // setUser(data);
          setIsAuthenticated(false);
        }
        setIsLoading(false);
      })
      .catch((err) => {
        console.log("err: ", err);
        setIsLoading(false);
      });
  }

  function logout() {
    setIsAuthenticated(false);
    setUser("");
    localStorage.removeItem("token");
    toast.info("Logout successfull", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
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
