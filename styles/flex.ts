import styled from "styled-components";

interface FlexProps {
  gap?: string;
  alignItems?: string;
  wrap?: boolean;
  width?: string;
}

export const Flex = styled.div<FlexProps>`
  display: flex;
  flex-direction: columns;
  justify-content: space-between;
  gap: ${(props) => props.gap || "0"};
  align-items: ${(props) => props.alignItems || "flex-start"};
  flex-wrap: ${(props) => (props.wrap ? "wrap" : "nowrap")};
  width: ${(props) => props.width || "auto"};
`;
