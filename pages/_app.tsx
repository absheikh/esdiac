import type { AppProps } from "next/app";
import React, { createContext, useContext, useState } from "react";
import { ThemeProvider } from "styled-components";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import GlobalStyle from "../styles/globals";
import axios from "axios";
import { AuthProvider } from "../shared/authContext";
const theme = {
  colors: {
    primary: "#4461F2",
    secondary: "#000000;",
    white: "#ffffff",
    lightBlack: "#4D5959",
    gray: "#DCDCDC",
  },
  screens: {
    mobile: "600px",
    tablet: "900px",
  },
};

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <AuthProvider>
        <GlobalStyle />
        <ThemeProvider theme={theme}>
          <Component {...pageProps} />
        </ThemeProvider>
      </AuthProvider>
    </>
  );
}

export default MyApp;
