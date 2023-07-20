import styled from "@emotion/styled";
import { colors, paletteGray } from "../../styles/variables";
import { Link } from "react-router-dom";

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

export const StyledText = styled.p`
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.5;
  color: ${paletteGray.Gray_80};
`;
export const StyledLink = styled(Link)`
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 1.25;
  text-decoration: underline;
  color: ${colors.secondary_dark};
`;

export const StyledLinkWrap = styled.div`
  display: flex;
  gap: 16px;
  margin: 0 auto;
  margin-top: 20px;
  align-items: center;
  justifu-content: center;
`;
