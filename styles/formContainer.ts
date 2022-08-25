import styled from "styled-components";

interface Props {
  mt?: string;
}
export const FormContainer = styled.div`
  margin-top: ${(props: Props) => props.mt || "0"};
  padding: 0px 91px;
  height: 100vh;
  @media (max-width: 900px) {
    padding: 0px;
  }
`;
