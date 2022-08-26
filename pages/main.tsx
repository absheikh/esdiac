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
import { useRouter } from "next/router";
import Router from "next/router";
import { useAuth } from "../shared/authContext";
import FullPageLoader from "../components/FullPageLoader";
const Main: NextPage = () => {
  const { isAuthenticated, user, logout, isLoading } = useAuth();
  const router = useRouter();
  useEffect(() => {
    if (!isLoading && !isAuthenticated) {
      router.push("/");
    }
  }, [isAuthenticated, isLoading]);

  if (isLoading || !isAuthenticated) {
    return <FullPageLoader />;
  }
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
            Hello my first name is {user.firstname} my last name is{" "}
            {user.lastname} my email is {user.email}
          </Text>

          <Text>
            <Logout onClick={logout}>logout</Logout>
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
const Logout = styled.p`
  cursor: pointer;
  font-size: 18px;
  font-weight: 600;
  padding: 20px 0px;
  text-align: right;
  color: blue;
  &:hover {
    color: red;
  }
`;

export default Main;
