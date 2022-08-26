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
import { Notification } from "../styles/notification";
import { useAuth } from "../shared/authContext";

const Home: NextPage = () => {
  const { isAuthenticated, login, user, logout, isLoading } = useAuth();
  const [phone, setPhone] = React.useState<any>();
  const [password, setPassword] = React.useState<any>();

  const [isNotification, setIsNotification] = React.useState(false);
  const [NotificationMessage, setNotificationMessage] = React.useState("");
  let error = false;
  const handleLogin = async (e: any) => {
    e.preventDefault();
    //Iteare over the form to check empty fields

    for (let i = 0; i < e.target.length; i++) {
      if (e.target[i].value === "") {
        // e.target[i].focus();
        // add class invalid
        error = true;

        if (e.target[i].name != "button") {
          e.target[i].classList.add("invalid");

          return;
        }
        // alert("Please fill all the fields");
      }
      error = false;
    }
    if (!error) {
      console.log(phone, password);
      login({ phone, password });
    }
  };
  // iterate all on typing remove invalid class
  React.useEffect(() => {
    for (let i = 0; i < document.querySelectorAll("input").length; i++) {
      document
        .querySelectorAll("input")
        [i].addEventListener("keyup", function () {
          this.classList.remove("invalid");
        });

      document
        .querySelectorAll("input")
        [i].addEventListener("focus", function () {
          this.classList.remove("invalid");
        });
    }
  }, [error]);

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
            <Text
              size="23px"
              lineHeight="40px"
              width=""
              className="textDesktop2"
            >
              Simple Authentication Web Site Created with Next.js, React,
              Typescript and Postgresql
            </Text>
          </DivImage>
          <FormContainer mt="112px">
            <Heading mb="36px" size="48px">
              Login
            </Heading>
            <FormColumn onSubmit={handleLogin}>
              {isNotification && (
                <Notification>{NotificationMessage}</Notification>
              )}
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

              <Center>
                <Button type="submit" name="button">
                  {isLoading ? "Loading..." : "Login"}
                </Button>
              </Center>
            </FormColumn>

            <Text
              size="23px"
              lineHeight="27.9px"
              className=""
              mt="16px"
              align="center"
            >
              If you don’t have an account you can{" "}
              <Link href="/register">Register here!</Link>
            </Text>
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
