import type { AppProps } from "next/app";
import React, { createContext, useContext, useState } from "react";
import { ThemeProvider } from "styled-components";

import GlobalStyle from "../styles/globals";
import axios from "axios";

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
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default MyApp;
