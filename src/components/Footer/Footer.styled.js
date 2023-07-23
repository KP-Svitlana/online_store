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
    flex-wrap: wrap;
    gap: 0;
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
  justify-content: center;
  margin-right: 220px;
  order: 0;

  @media ${device.tablet} {
    gap: 36px;

    order: 1;
  }

  @media ${device.desktop} {
    order: 0;
  }
`;

export const StyledAddressMenu = styled.address`
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: start;
  justify-content: center;
`;
export const StyledAddressText = styled.p`
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: ${(props) => (props.time ? "1.5" : "1.3")};

  color: ${paletteGray.text};
`;

export const StyledFooterNav = styled.nav`
  //   display: flex;
  //   flex-direction: row;
  //   gap: 66px;
  //   align-items: flex-start;
  //   justify-content: flex-start;
  //   flex-shrink: 0;
  //   flex-wrap: wrap;
  //   margin-left: auto;
  //   @media (max-width: 768px) {
  //     margin-top: auto;
  //     margin-left: 0;
  //   }
  @media ${device.tablet} {
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

  //   @media ${device.tablet} {
  //     order: 3;
  //   }

  //   @media ${device.desktop} {
  //     order: 0;
  //   }
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
  //   ${(props) => (props.time ? "1.5" : "1.3")}
`;

export const StyledFooterIconWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 64px;
  margin-left: 86px;
  order: 0;

  @media ${device.tablet} {
    margin-left: 0;
    order: 2;
  }
  @media ${device.desktop} {
    order: 0;
  }
`;
export const StyledFooterLine = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 100%;
  margin-top: 60px;

  :before {
    content: "";
    width: 100%;
    margin-bottom: 24px;
    height: 1px;
    background: ${paletteGray.Gray_40};
  }

  @media ${device.tablet} {
    order: 4;
    margin-top: 80px;
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
