import styled from "@emotion/styled";
import { paletteGray } from "../../styles/variables";
import { device } from "../../styles/mediaVeriables";
import { Link } from "react-router-dom";

export const StyledCategories = styled.div`
  padding: 80px 0; 
  @media ${device.tablet} {
    display: flex;
    flex-direction: column;
  }
  @media ${device.mobileTablet} {
    padding: 0;
  }
`;
export const CategoriesLink = styled(Link)`
`;
export const CategoriesText = styled.p`
  color: ${paletteGray.text};
  font-size: 24px;
  font-weight: 500;
  line-height: 1.3;
  letter-spacing: 2px;
  text-transform: uppercase;
  margin-bottom: 32px;
  @media ${device.mobileTablet} {
    font-size: 20px;
    font-weight: 600;
    line-height: 1.2;
  }
`;
export const CategoriesWrap = styled.div`
  display: flex;
  gap: 20px;
  justify-content: center;
  align-items: flex-start;
  
  @media ${device.mobileOnly} {
    gap: 12px;
  }
  @media ${device.mobileTablet} {
    gap: 12px;
  }
`;

export const CategoriesPhotoLeft = styled.img`
  display: flex; 
  flex-direction: row;
  width: 343px;
  @media ${device.tablet} {
    width: 344px;
  }
  @media ${device.tabletBefore} {
    width: 344px;
  }
  @media ${device.mobileOnly} {
    width: 173px;
    height: 220px;
  }
`;
export const CategoriesPhotoDown = styled.img`
  display: flex; 
  flex-direction: row;
  width: 700px;
  @media ${device.mobileOnly} {
    width: 358px;
    height: 240px;
  }
  @media ${device.mobileTablet} {
    width: 100%;
  }
`;
export const CategoriesPhotoUpContainer= styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
  @media ${device.tabletBefore} {
    gap: 16px;
  }
  @media ${device.mobileOnly} {
    display: flex; 
    flex-direction: column;
    gap: 12px;
  }
  @media ${device.mobileTablet} {
    gap: 12px;
  }
  
`;
export const CategoriesPhotoRightWrap = styled.div`
  display: flex; 
  flex-direction: column;
  gap: 20px;
  width: 700px;
  @media ${device.tabletBefore} {
    gap: 16px;
  }
  @media ${device.mobileTablet} {
    gap: 12px;
  }
`;
export const CategoriesPhotoUpLeft = styled.img`
  @media ${device.desktopBefore} {
    width: 413px;
  }
  @media ${device.mobileOnly} {
    width: 173px;
    height: 104px;
  }
`;
export const CategoriesPhotoUpRight = styled.img`
  @media ${device.desktopBefore} {
    width: 413px;
  }
  @media ${device.mobileOnly} {
    width: 173px;
    height: 104px;
  }
`;
