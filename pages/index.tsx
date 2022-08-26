import React, { useState, useEffect, SyntheticEvent } from "react";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";
import { Button } from "../styles/button";
import { Center } from "../styles/center";
import { Container } from "../styles/container";
import { Div } from "../styles/div";
import { FormContainer } from "../styles/formContainer";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import { API_URI } from "../const";
import { FormGroup } from "../styles/formGroup";
import { FormColumn } from "../styles/formRow";
import { Heading } from "../styles/heading";
import styles from "../styles/Home.module.css";
import { Input } from "../styles/input";
import { Label } from "../styles/label";
import { Text } from "../styles/text";
import { Wrapper } from "../styles/wrapper";

const Home: NextPage = () => {
  const [phone, setPhone] = React.useState<any>();
  const [password, setPassword] = React.useState<any>();
  const [isLoading, setIsLoading] = React.useState(false);
  const login = async () => {
    setIsLoading(true);
    await fetch(`${API_URI}/authenticate`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        phone,
        password,
      }),
    })
      .then((res: any) => {
        if (res.status == "success") {
          setIsLoading(false);

          console.log(res.data);
        } else {
          console.log(res.data.message);
          setIsLoading(false);
        }
      })
      .catch((err: any) => {
        setIsLoading(false);

        console.log(err);
      });
  };

  return (
    <>
      <Head>
        <title>Login Page</title>
        <meta name="description" content="Esdiac interview " />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Wrapper>
        <Container>
          <DivImage>
            <Heading
              mt="100px"
              size="58px"
              lineHeight="77px"
              width="607px"
              mb="77px"
            >
              Esdiac Test Project
            </Heading>
            <Text size="23px" lineHeight="27.9px" width="290px">
              If you don’t have an account you can{" "}
              <Link href="/register">Register here!</Link>
            </Text>
          </DivImage>
          <FormContainer mt="112px">
            {/* <Heading mb="36px" size="48px">
              Login
            </Heading> */}
            <FormColumn>
              <FormGroup>
                <Label>Phone Number</Label>
                <PhoneInput
                  placeholder="Enter phone number"
                  value={phone}
                  onChange={(value: string) => {
                    setPhone(value);
                  }}
                  className="input"
                />
              </FormGroup>
              <FormGroup>
                <Label>Password</Label>
                <Input
                  type="password"
                  placeholder="*****"
                  value={password}
                  onChange={(e: any) => {
                    setPassword(e.target.value);
                  }}
                />
              </FormGroup>
            </FormColumn>
            <Center mt="50px">
              <Button onClick={login}>
                {isLoading ? "Loading..." : "Login"}
              </Button>
            </Center>
          </FormContainer>
        </Container>
      </Wrapper>
    </>
  );
};

const DivImage = styled.div`
  background-image: url("/assets/images/icon.png");
  background-repeat: no-repeat;
  background-size: 449px;
  background-position: center right;
  @media screen and (max-width: 900px) {
    background-image: none;
  }
`;

export default Home;
