import React from "react";
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
import { Notification } from "../styles/notification";

const Register: NextPage = () => {
  const [firstname, setFirstName] = React.useState();
  const [lastname, setLastName] = React.useState();
  const [email, setEmail] = React.useState();
  const [phone, setPhone] = React.useState<any>();
  const [password, setPassword] = React.useState();
  const [confirmPass, setConfirmPass] = React.useState();
  const [isNotification, setIsNotification] = React.useState(false);
  const [NotificationMessage, setNotificationMessage] = React.useState("");
  let error = false;
  const register = async (e: any) => {
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
    if (!error)
      if (password != confirmPass) {
        //if the password does not match append a span to the password field and focus on it
        e.target[6].focus();

        e.target[5].classList.add("invalid");
        e.target[6].classList.add("invalid");

        alert("Password does not match");

        return;
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
        <title>Registration Page</title>
        <meta name="description" content="Esdiac interview " />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Wrapper>
        <ContainerRegister>
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
          </DivImage>
          <FormContainer mt="50px">
            {/* <Heading mb="36px" size="48px">
              Login
            </Heading> */}
            <FormColumn onSubmit={register}>
              {isNotification && (
                <Notification>{NotificationMessage}</Notification>
              )}
              <FormRows>
                <FormGroup>
                  <Label>First Name</Label>
                  <Input
                    type="text"
                    placeholder="Enter your first name"
                    value={firstname}
                    onChange={(e: any) => setFirstName(e.target.value)}
                  />
                </FormGroup>
                <FormGroup>
                  <Label>Last name</Label>
                  <Input
                    type="text"
                    placeholder="Enter your last name"
                    value={lastname}
                    onChange={(e: any) => setLastName(e.target.value)}
                  />
                </FormGroup>
              </FormRows>
              <FormRows>
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
                  <Label>Email</Label>
                  <Input
                    type="text"
                    placeholder="Enter your email address"
                    value={email}
                    onChange={(e: any) => setEmail(e.target.value)}
                  />
                </FormGroup>
              </FormRows>
              <FormRows>
                <FormGroup>
                  <Label>Password</Label>
                  <Input
                    placeholder="********"
                    value={password}
                    type="password"
                    onChange={(e: any) => setPassword(e.target.value)}
                  />
                </FormGroup>
                <FormGroup>
                  <Label>Confirm Password</Label>
                  <Input
                    type="password"
                    placeholder="********"
                    value={confirmPass}
                    onChange={(e: any) => setConfirmPass(e.target.value)}
                  />
                </FormGroup>
              </FormRows>
              <FormRows>
                <Empty className="textDesktop">
                  {" "}
                  <Text size="23px" lineHeight="27.9px" width="290px">
                    If you have an account you can{" "}
                    <Link href="/">Login here!</Link>
                  </Text>
                </Empty>
                <FormGroup>
                  <Button type="submit" name="button">
                    Register
                  </Button>
                </FormGroup>
                <Empty className="textMobile">
                  {" "}
                  <Text size="23px" lineHeight="27.9px" width="290px">
                    If you have an account you can{" "}
                    <Link href="/">Login here!</Link>
                  </Text>
                </Empty>
              </FormRows>
            </FormColumn>
          </FormContainer>
        </ContainerRegister>
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
export default Register;
