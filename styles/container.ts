import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 0.75fr;
  margin-top: 100px;
  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    margin-top: 10px;
  }
`;

export const ContainerRegister = styled.div`
  margin-top: 100px;

  @media (max-width: 900px) {
    margin-top: 10px;
  }
`;
