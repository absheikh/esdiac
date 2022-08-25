import styled from "styled-components";

interface TextProps {
  size?: string;
  lineHeight?: string;
  width?: string;
  color?: string;
  mb?: string;
  mt?: string;
  opacity?: number;
  align?: string;
}

export const Text = styled.p<TextProps>`
  font-size: ${(props) => props.size || "16px"};
  line-height: ${(props) => props.lineHeight || "24px"};
  text-align: ${(props) => props.align || "left"};

  color: ${(props) => props.color || props.theme.colors.lightBlack};
  opacity: ${(props) => props.opacity || 1};
  max-width: ${(props) => props.width || "auto"};
  width: 100%;
  font-weight: 400;
  margin-bottom: ${(props) => props.mb || "0"};
  margin-top: ${(props) => props.mt || "0"};
  @media screen and (max-width: 900px) {
    text-align: center;
    width: 100% !important;
  }
  & a {
    color: ${(props) => props.color || props.theme.colors.primary};
    &:hover {
      color: ${(props) => props.color || props.theme.colors.secondary};
    }
  }
`;
