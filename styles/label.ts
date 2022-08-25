import styled from "styled-components";

export const Label = styled.p`
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 30px;
  color: ${(props) => props.theme.colors.secondary};
`;
