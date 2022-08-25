import styled from "styled-components";

export const Input = styled.input`
  background: #eaf0f7;
  border-radius: 5px;
  padding: 17px 29px;
  font-weight: 400;
  font-size: 20px;
  height: 60px;
  line-height: 30px;
  color: ${(props) => props.theme.colors.black};
  width: 100%;
`;
