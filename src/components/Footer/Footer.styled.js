import styled from "@emotion/styled";
import { device } from "../../styles/mediaVeriables";
import { paletteGray } from "../../styles/variables";

export const StyledFooter = styled.footer`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-wrap: wrap;
  font-size: 14px;
  flex-shrink: 0;
  width: 100%;
  gap: 35px;
  padding: 40px 0 20px 0;
  @media ${device.desktop} {
    padding: 0 30px 20px 30px;
  }
  @media ${device.mobile} {
    padding: 80px 16px 20px 16px;
  }
`;
export const StyledFooterContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  min-height: 100vh;
  align-content: flex-end;
  @media ${device.mobileOnly} {
    gap: 30px;
  }
  @media ${device.mobile} {
    gap: 30px;
  }
`;
export const StyledFooterMenu = styled.div`
  display: flex;
  gap: 36px;
  align-items: flex-start;
  flex-shrink: 1;
  position: relative;
  flex-wrap: wrap;
  flex-direction: column;
  @media ${device.mobile} {
    gap: 30px;
    order: -2;
    margin-right: auto;
  }
`;
export const StyledFooterLinks = styled.a`
  text-align: left;
  text-decoration: none;
  color: inherit;
  position: relative;
`;

export const StyledFooterImage = styled.img``;

export const StyledFooterContacts = styled.address`
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: flex-start;
  justify-content: center;
  line-height: 1.3;
  font-size: 14px;
  font-weight: 400;
`;
export const StyledFooterAddress = styled.div`
  display: flex;
  flex-direction: row;
  gap: 12px;
  align-items: center;
  justify-content: center;
`;
export const StyledFooterAddressText = styled.p`
  text-align: left;
`;
export const StyledFooterPhone = styled.div`
  display: flex;
  flex-direction: row;
  gap: 12px;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
`;
export const StyledFooterPhoneNum = styled.p`
  text-align: left;
`;
export const StyledFooterEmail = styled.div`
  display: flex;
  flex-direction: row;
  gap: 12px;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  position: relative;
`;
export const StyledFooterEmailExa = styled.p`
  text-align: left;
`;
export const StyledFooterTime = styled.div`
  text-align: left;
  line-height: 1.5;
`;
export const StyledFooterNav = styled.nav`
  display: flex;
  flex-direction: row;
  gap: 40px;
  align-items: flex-start;
  justify-content: flex-start;
  flex-shrink: 1;
  flex-wrap: wrap;
  margin-right: auto;
  @media ${device.tabletBefore} {
    margin-right: 0;
    gap: 120px;
  }

  @media ${device.tablet} {
    order: 0;
  }
  @media ${device.tabletOnly} {
    
  }
  @media ${device.mobileTablet} {
    order: 0;
  }
  @media ${device.mobile} {
    order: -1;
    gap: 46px;
  }
  @media (max-width: 390px) {
    display: flex;
    flex-direction: column;
    gap: 16px;
    align-items: flex-start;
    position: relative;
    justify-content: flex-start;
  }
`;
export const StyledFooterShop = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  flex-shrink: 0;
  gap: 24px;
  @media ${device.mobileOnly} {
    display: flex;
    align-self: stretch;
    flex-shrink: 0;
    position: relative;
  }
  @media ${device.mobile} {
    display: flex;
    align-self: stretch;
    flex-shrink: 0;
    position: relative;
  }
`;
export const StyledFooterShopTitle = styled.h1`
  text-align: left;
  font-weight: 600;
  line-height: 1.3;
  font-size: 14px;
  letter-spacing: 1px;
  @media ${device.mobileOnly} {
    gap: 30px;
  }
  @media ${device.mobile} {
    gap: 30px;
    
  }
`;
export const StyledFooterMenuItem = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: flex-start;
  justify-content: center;
  flex-shrink: 0;
  position: relative;
  font-weight: 400;
  line-height: 1.5;
  font-size: 14px;
`;
export const StyledFooterItemMenu = styled.li`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  flex-shrink: 0;
  position: relative;
  a {
    text-decoration: none;
    color: inherit;
  }
`;
export const StyledFooterCompany = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  align-items: flex-start;
  justify-content: flex-start;
  flex-shrink: 0;
  align-self: stretch;
  position: relative;
  @media ${device.mobileOnly} {
    display: flex;
    align-self: stretch;
    flex-shrink: 0;
    position: relative;
  }
  @media ${device.mobile} {
    display: flex;
    align-self: stretch;
    flex-shrink: 0;
    position: relative;
  }
`;
export const StyledFooterHelp = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  align-self: stretch;
  align-items: flex-start;
  justify-content: center;
  flex-shrink: 0;
  position: relative;
  @media ${device.mobileOnly} {
    display: flex;
    align-self: stretch;
    flex-shrink: 0;
    position: relative;
  }
  @media ${device.mobile} {
    display: flex;
    align-self: stretch;
    flex-shrink: 0;
    position: relative;
  }
`;
export const StyledFooterIconItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 64px;
  align-items: flex-start;
  justify-content: flex-start;
  flex-shrink: 0;
  position: relative;
  @media ${device.tablet} {
    display: flex;
    flex-direction: column;
    gap: 48px;
    align-items: flex-start;
    justify-content: flex-start;
    flex-shrink: 0;
    position: relative;
  }
  @media ${device.desktopBefore} {
    order: -1;
  }
  @media ${device.desktop} {
    order: -1;
  }
  @media ${device.mobileOnly} {
    gap: 48px;
    order: -2;
    margin-bottom: 40px;
  }
  @media ${device.mobile} {
    gap: 48px;
    margin-bottom: 40px;
  }
  @media ${device.mobileTablet} {
    gap: 48px;
    margin-bottom: 40px;
  }
`;
export const StyledFooterLine = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 100%;
  position: relative;
  margin-top: 20px;
`;
export const StyledLineFooter = styled.div`
    border-style: solid;
    border-color: ${paletteGray.text};
    border-width: 1px 0 0 0;
    flex-shrink: 0;
    width: 100%;
    position: relative;
    margin-bottom: 24px;
`;
export const StyledFooterCopy = styled.div`
    color: ${paletteGray.text};
    text-align: left;
    position: relative;
    @media (max-width: 390px) {
        margin-bottom: 24px;
    }
`;
export const StyledFooterLink = styled.ul`
    display: flex;
    flex-direction: row;
    gap: 24px;
    align-items: flex-start;
    justify-content: flex-start;
    position: relative;
    list-style-type: none;
`;
export const StyledFooterPrivacy = styled.li`
    color: ${paletteGray.text};
    text-align: left;
    position: relative;
`;
export const StyledFooterTerms = styled.li`
    color: ${paletteGray.text};
    text-align: left;
    position: relative;
`;
export const StyledFooterNavSpoilerFirst = styled.div`
  @media (max-width: 390px) {
    max-height: ${props => (props.isNavOpen1 ? "none" : "0")};
    overflow: hidden;
    transition: max-height 0.3s ease;
  }
`;

export const StyledFooterNavSpoilerSec = styled.div`
  @media (max-width: 390px) {
    max-height: ${props => (props.isNavOpen2 ? "none" : "0")};
    overflow: hidden;
    transition: max-height 0.3s ease;
  }
`;

export const StyledFooterNavSpoilerThird = styled.div`
  @media (max-width: 390px) {
    max-height: ${props => (props.isNavOpen3 ? "none" : "0")};
    overflow: hidden;
    transition: max-height 0.3s ease;
  }
`;
export const StyledFooterIconBtn = styled.button`
  width: 16px;
  height: 16px;

  display: flex;
  align-items: center;
  justify-content: center;

  position: absolute;
  bottom: 27px;
  right: -36px;

  :focus-visible {
    outline: 0px solid transparent;
  }
  @media ${device.mobile} {
    display: none;
  }
`;