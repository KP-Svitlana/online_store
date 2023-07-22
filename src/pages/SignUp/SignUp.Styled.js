import styled from "@emotion/styled";
import { Link } from "react-router-dom";

import { colors, paletteGray } from "../../styles/variables";
import { device, size } from "../../styles/mediaVeriables";

export const StyledPageWrap = styled.div`
  display: flex;
  flex-direction: column-reverse;
  gap: 64px;
  padding: 16px;

  @media ${device.tabletOnly} {
    padding: 32px;
  }

  @media ${device.desktop} {
    flex-direction: row;
    gap: 100px;
    padding: 80px;
  }
`;

export const StyledTitle = styled.h2`
  font-size: 28px;
  font-style: normal;
  font-weight: 500;
  line-height: 28px;
  letter-spacing: 2px;
  color: ${paletteGray.text};
  margin: 0 auto;
  margin-top: 27px;
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

export const StyledImg = styled.picture`
  width: 100%;
  height: auto;
`;

export const StyledImgWrap = styled.div``;
