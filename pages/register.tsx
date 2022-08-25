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

const Register: NextPage = () => {
  const [value, setValue] = React.useState<any>();
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
            <FormColumn>
              <FormRows>
                <FormGroup>
                  <Label>First Name</Label>
                  <Input type="text" placeholder="Enter your first name" />
                </FormGroup>
                <FormGroup>
                  <Label>Last name</Label>
                  <Input type="text" placeholder="Enter your last name" />
                </FormGroup>
              </FormRows>
              <FormRows>
                <FormGroup>
                  <Label>Phone Number</Label>
                  <PhoneInput
                    placeholder="Enter phone number"
                    value={value}
                    onChange={(value: string) => {
                      setValue(value);
                    }}
                    className="input"
                  />
                </FormGroup>
                <FormGroup>
                  <Label>Email</Label>
                  <Input type="text" placeholder="Enter your email address" />
                </FormGroup>
              </FormRows>
              <FormRows>
                <FormGroup>
                  <Label>Password</Label>
                  <Input type="text" placeholder="********" />
                </FormGroup>
                <FormGroup>
                  <Label>Confirm Password</Label>
                  <Input type="password" placeholder="********" />
                </FormGroup>
              </FormRows>
              <FormRows>
                <Empty>
                  {" "}
                  <Text size="23px" lineHeight="27.9px" width="290px">
                    If you have an account you can{" "}
                    <Link href="/">Login here!</Link>
                  </Text>
                </Empty>
                <FormGroup>
                  <Button>Register</Button>
                </FormGroup>
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
