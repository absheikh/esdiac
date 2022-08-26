import styled from "styled-components";

interface HeadingProps {
  size?: string;
  lineHeight?: string;
  width?: string;
  mb?: string;
  mt?: string;
  align?: string;
  color?: string;
}
export const Heading = styled.h1<HeadingProps>`
  font-size: ${(props) => props.size || "48px"};
  line-height: ${(props) => props.lineHeight || "56px"};
  color: ${(props) => props.color || "#1B1C20"};
  max-width: ${(props) => props?.width || "auto"};
  margin-bottom: ${(props) => props.mb || "0"};
  margin-top: ${(props) => props.mt || "0"};
  text-align: ${(props) => props.align || "left"};
  font-weight: 700;
  @media screen and (max-width: 900px) {
    text-align: center !important;
    font-size: 40px;
    margin-bottom: 15px;
    margin-top: 15px;
  }
  @media screen and (max-width: 600px) {
    text-align: center !important;
    font-size: 30px;
    margin-bottom: 10px;
    margin-top: 10px;
  }
`;
