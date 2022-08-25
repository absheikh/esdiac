import type { AppProps } from "next/app";
import React, { useState } from "react";
import { ThemeProvider } from "styled-components";
import { AuthContext } from "../stores/authContext";
import GlobalStyle from "../styles/globals";
import { API_URI } from "../const";
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
  const [isLoading, setIsLoading] = useState(false);
  const [userData, setUserData] = useState<any>(null);

  const [state, dispatch] = React.useReducer(
    (prevState: any, action: any) => {
      switch (action.type) {
        case "RESTORE_TOKEN":
          return {
            ...prevState,
            userToken: action.token,

            isLoading: false,
          };
        case "SIGN_IN":
          if (action.token) {
            localStorage.setItem("userToken", action.token);
          }
          return {
            ...prevState,
            isSignout: false,
            userToken: action.token,
          };
        case "SIGN_OUT":
          localStorage.removeItem("userToken");
          return {
            ...prevState,
            isSignout: true,
            userToken: null,
          };
      }
    },
    {
      isLoading: true,
      isSignout: false,
      userToken: null,
    }
  );

  const authContext = React.useMemo(
    () => ({
      signIn: async (data: any) => {
        setIsLoading(true);
        const { phone, password } = data;
        console.log(data);
        var config = {
          method: "post",
          url: `${API_URI}authenticate`,
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
          },
          data: { phone, password },
        };
        axios(config)
          .then(function (response: any) {
            setIsLoading(false);
            // console.log(response);
            var user = response.data;

            let tokenValue = response.data.token;
            userData(user);
            // usersToken(tokenValue);
            console.log(tokenValue);
            // if (user.data.account_type == 29) {
            dispatch({ type: "SIGN_IN", token: tokenValue });
            // } else if (user.data.account_type == 53) {
            //   dispatch({ type: "SIGN_IN", token: tokenValue });
            // }
          })
          .catch(function (error) {
            console.log(error);
            setIsLoading(false);
            // AlertMsg("Error", error.response.data.message);
          });
      },
      register: async (data: any) => {
        setIsLoading(true);
        var config = {
          method: "post",
          url: `${API_URI}register`,
          headers: {
            "Content-Type": "application/json",
          },
          data: JSON.stringify(data),
        };
        axios(config)
          .then(function (response) {
            setIsLoading(false);
            if (response.status == 200) {
              // AlertMsg("Success", "You account has been created! Login");
            }
          })
          .catch(function (error) {
            console.log(error);
            setIsLoading(false);
            // AlertMsg("Error", error.response.data.message);
            // console.log(data);
          });
      },
      signOut: () => dispatch({ type: "SIGN_OUT" }),
    }),
    []
  );

  return (
    <AuthContext.Provider value={authContext}>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </AuthContext.Provider>
  );
}

export default MyApp;
