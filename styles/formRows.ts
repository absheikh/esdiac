import styled from "styled-components";

export const FormRows = styled.div`
  display: flex;
  flex-direction: row;
  gap: 36px;

  @media screen and (max-width: 600px) {
    flex-direction: column;
    gap: 16px;
  }
`;
