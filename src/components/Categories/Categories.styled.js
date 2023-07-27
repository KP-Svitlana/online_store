import styled from "@emotion/styled";
import { paletteGray } from "../../styles/variables";
import { device } from "../../styles/mediaVeriables";
import { Link } from "react-router-dom";

export const StyledCategories = styled.div`
  padding: 80px 0;

  @media ${device.tabletBefore} {
    padding: 32px 0;
  }
  @media ${device.desktop} {
    padding: 80px 0;
  }
`; 

export const CategoriesLink = styled(Link)`
`;
export const CategoriesText = styled.p`
  color: ${paletteGray.text};
  font-family: "Gothic A1", sans-serif;
  font-size: 24px;
  font-weight: 500;
  line-height: 1.3;
  letter-spacing: 2px;
  text-transform: uppercase;
  margin-bottom: 32px;
`;
export const CategoriesWrap = styled.div`
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
  position: relative;
  justify-content: center;
  align-items: flex-start;
  @media ${device.tablet} {

  }
`;

export const CategoriesPhotoLeft = styled.img`
  display: flex; 
  flex-direction: row;
  width: 343px;
  @media ${device.tablet} {
    
  }
`;
export const CategoriesPhotoDown = styled.img`
  display: flex; 
  flex-direction: row;
  width: 700px;
`;
export const CategoriesPhotoUpContainer= styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
  @media ${device.tablet} {

  }
`;
export const CategoriesPhotoRightWrap = styled.div`
  display: flex; 
  flex-direction: column;
  gap: 20px;
  width: 700px;
`;
export const CategoriesPhotoUpLeft = styled.img`
  width: 413px;
`;
export const CategoriesPhotoUpRight = styled.img`
  width: 413px;
`;
