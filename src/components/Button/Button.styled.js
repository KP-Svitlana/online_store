import styled from "@emotion/styled";
import { colors, paletteGray } from "../../styles/variables";

export const StyledButton = styled.button`
  max-width: 276px;
  border: none;
  background-color: ${colors.primary};
  padding: 16px 64px;
  justify-content: center;
  align-items: center;
  color: ${paletteGray.Gray_0};
  font-family: Gothic A1;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 24px;
  letter-spacing: 1px;
  cursor: pointer;

  :hover,
  :focus {
    transform: scale(1.15);
  }
`;
