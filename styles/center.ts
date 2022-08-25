import styled from "styled-components";

interface CenterProps {
  gap?: string;
  mt?: string;
  mb?: string;
}
export const Center = styled.div<CenterProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: ${(props) => props.mt || "0"};
  margin-bottom: ${(props) => props.mb || "0"};
  gap: ${(props) => props.gap || "0"};
  width: 100%;
`;
