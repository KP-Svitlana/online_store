import styled from "@emotion/styled";
import { paletteGray } from "../../styles/variables";

export const StyledTitle = styled.h2`
  font-size: 28px;
  font-style: normal;
  font-weight: 500;
  line-height: 28px;
  letter-spacing: 2px;
  color: ${paletteGray.text};
  margin: 0 auto;
  margin-top: 49px;
`;

export const StyledAfterTitle = styled.p`
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  color: ${paletteGray.text};
  margin: 0 auto;
  margin-top: 16px;
`;

export const StyledWrap = styled.div`
  display: flex;
  flex-direction: column;
  padding: 80px;
`;
