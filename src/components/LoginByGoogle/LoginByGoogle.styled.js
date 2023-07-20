import styled from "@emotion/styled";
import { paletteGray } from "../../styles/variables";

export const StyledText = styled.p`
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.5;
  color: ${paletteGray.text};
  margin-right: 20px;
`;
export const StyledLink = styled.a`
  display: flex;
  width: 100%;
  cursor: pointer;
`;

export const StyledGoogleImg = styled.span`
  display: block;
  width: 32px;
  height: 32px;
`;

export const StyledLinkWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 24px;
`;

export const StyledWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 44px;
`;
