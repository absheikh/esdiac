import styled from "styled-components";

export const Button = styled.button`
  background: ${(props) => props.theme.colors.primary};
  color: ${(props) => props.theme.colors.white};
  border-radius: 5px;
  padding: 11px 47px;
  font-style: normal;
  font-weight: 500;
  font-size: 26px;
  line-height: 39px;
  width: 100%;

  &:hover {
    background: ${(props) => props.theme.colors.secondary};
    transition: all 0.3s ease-in-out;
  }
`;
