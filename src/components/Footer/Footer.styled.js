import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import { paletteGray } from "../../styles/variables";
import { device } from "../../styles/mediaVeriables";

export const StyledFooter = styled.footer`
  display: flex;
  flex-direction: column;
  gap: 60px;

  padding-top: 80px;
  padding-bottom: 20px;

  @media ${device.tablet} {
    flex-direction: row;
    flex-wrap: wrap;
    gap: 80px;
  }

  @media ${device.desktop} {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 0;
    padding-top: 120px;
  }
`;
export const StyledAddressWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;

  @media ${device.tablet} {
    gap: 36px;
    order: 1;
  }

  @media ${device.desktop} {
    order: 0;
    margin-right: 220px;
  }
`;

export const StyledAddressMenu = styled.address`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;
export const StyledAddressText = styled.p`
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: ${(props) => (props.time ? "1.5" : "1.3")};

  color: ${paletteGray.text};
`;

export const StyledFooterNav = styled.nav`
  display: none;

  @media ${device.tablet} {
    display: block;
    order: 3;
    margin-top: 80px;
  }
  @media ${device.desktop} {
    order: 0;
    margin-top: 0;
  }
`;
export const StyledNavList = styled.ul`
  display: flex;
  flex-direction: row;
  list-style: none;
  gap: 86px;
  order: 0;

  @media ${device.tablet} {
    gap: 120px;
  }

  @media ${device.desktop} {
    display: flex;
    flex-direction: row;
    list-style: none;
    gap: 86px;
    order: 0;
  }
`;

export const StyledNavListItem = styled.li`
  font-weight: 600;
  line-height: 1.25;
  font-size: 14px;
  letter-spacing: 1px;
  color: ${paletteGray.text};
  text-transform: uppercase;
`;

export const StyledList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-top: 24px;
  text-transform: none;

  list-style: none;
`;
export const StyledItem = styled.li`
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.25;
  color: ${paletteGray.text};
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: ${(props) => (props.color ? `${paletteGray.Gray_80}` : "inherit")};
`;

export const StyledFooterNavMobile = styled.nav`
  display: flex;
  flex-direction: column;

  border-bottom: 1px solid ${paletteGray.Gray_40};

  @media ${device.tablet} {
    display: none;
  }
`;
export const StyledDropDown = styled.select`
  height: 50px;
  padding: 16px;
  border: none;

  border-top: 1px solid ${paletteGray.Gray_40};
  border-right-color: transparent;
  border-left-color: transparent;
  border-bottom-color: transparent;

  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 1.25;

  color: ${paletteGray.text};

  :focus-visible {
    outline: 0px solid transparent;
  }
`;

export const StyledDropDownOption = styled.option`
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.25;
  color: ${paletteGray.text};
`;

export const StyledFooterIconWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 48px;
  order: 0;

  @media ${device.tablet} {
    margin-left: 140px;

    order: 2;
  }
  @media ${device.desktop} {
    order: 0;
    margin-left: 86px;
    margin-right: 0;
    gap: 64px;
  }
`;
export const StyledFooterLine = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  width: 100%;

  :before {
    content: "";
    width: 100%;
    margin-bottom: 24px;
    height: 1px;
    background: ${paletteGray.Gray_40};
  }

  @media ${device.tablet} {
    order: 4;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 0;
    align-items: flex-start;
    justify-content: space-between;
  }

  @media ${device.desktop} {
    margin-top: 100px;
    order: 0;
  }
`;

export const StyledFooterCopy = styled.p`
  color: ${paletteGray.text};
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.3;
`;
export const StyledFooterLink = styled.ul`
  display: flex;
  flex-direction: row;
  gap: 32px;
  list-style: none;
`;
