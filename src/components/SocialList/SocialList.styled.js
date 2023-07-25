import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import { device } from "../../styles/mediaVeriables";

export const StyledFooterSocial = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;
export const StyledFooterSocialText = styled.p`
  font-size: 14px;
  font-weight: 700;
  line-height: 1.3;
  text-transform: uppercase;

  @media ${device.tablet} {
    font-weight: 600;
    line-height: 1.25;
  }
`;
export const StyledFooterSocialIcons = styled.div`
  display: flex;
  flex-direction: row;
  gap: 16px;
  list-style: none;
`;
export const StyledFooterSocialMenu = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const StyledFooterSocialLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
`;
