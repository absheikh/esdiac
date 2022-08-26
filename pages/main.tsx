import React, { useEffect } from "react";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";
import { Button } from "../styles/button";
import { Center } from "../styles/center";
import { ContainerRegister } from "../styles/container";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import { Div } from "../styles/div";
import { FormContainer } from "../styles/formContainer";
import { FormGroup } from "../styles/formGroup";
import { FormColumn } from "../styles/formRow";
import { FormRows } from "../styles/formRows";
import { Heading } from "../styles/heading";
import styles from "../styles/Home.module.css";
import { Input } from "../styles/input";
import { Label } from "../styles/label";
import { Text } from "../styles/text";
import { Wrapper } from "../styles/wrapper";
import { MainContainer } from "../styles/mainContainer";

import Router from "next/router";
const useUser = () => {
  const [user, setUser] = React.useState(null);
  React.useEffect(() => {
    const user = localStorage.getItem("user");
    if (user) {
      setUser(JSON.parse(user));
    }
  }, []);
  return user;
};

const Main: NextPage = () => {
  const user = useUser();
  useEffect(() => {
    if (!user) {
      Router.push("/");
    }
  });

  return (
    <>
      <Head>
        <title>Main Page</title>
        <meta name="description" content="Esdiac interview " />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Wrapper>
        <MainContainer>
          <Heading mb="50px">Main Page</Heading>
          <Text size="28px" lineHeight="36px">
            {" "}
            Hello my first name is my last name is my email is
          </Text>

          <Text>
            <Link href="/logout">Logout</Link>
          </Text>
        </MainContainer>
      </Wrapper>
    </>
  );
};

const DivImage = styled.div`
  //   background-image: url("/assets/images/icon.png");
  //   background-repeat: no-repeat;
  //   background-size: 449px;
  //   background-position: center right;
`;
const Empty = styled.div`
  width: 100%;
`;
export default Main;
