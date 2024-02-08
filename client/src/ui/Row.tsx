import styled, { css } from "styled-components";
import React from "react";

interface RowProps {
  type?: "horizontal" | "vertical";
  children?: React.ReactNode;
}

const Row: React.FC<RowProps> = styled.div<RowProps>`
  display: flex;

  ${(props) =>
    props.type === "horizontal" &&
    css`
      justify-content: space-between;
      align-items: center;
    `}

  ${(props) =>
    props.type === "vertical" &&
    css`
      flex-direction: column;
      gap: 1.6rem;
    `}
`;

Row.defaultProps = {
  type: "vertical",
};

export default Row;
