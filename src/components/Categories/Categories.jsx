import React from 'react';
import { StyledCategories, CategoriesText, CategoriesPhotoRightWrap, CategoriesWrap, CategoriesPhotoUpContainer, CategoriesLink, CategoriesPhotoLeft, CategoriesPhotoDown, CategoriesPhotoUpLeft, CategoriesPhotoUpRight } from "./Categories.styled";
import imageLeft from "../../assets/img/CategoriesLeft.png";
import imageUpLeft from "../../assets/img/CategoriesUpLeft.png";
import imageUpRight from "../../assets/img/CategoriesUpRight.png";
import imageDown from "../../assets/img/CategoriesRightDown.png";


export const Categories = () => {
  return (
    <StyledCategories>
      <CategoriesText>Категорії</CategoriesText>
      <CategoriesWrap>
        <CategoriesLink href="#">
          <CategoriesPhotoLeft src={imageLeft} alt="Categories_1" />
        </CategoriesLink>
        <CategoriesPhotoRightWrap>

          <CategoriesPhotoUpContainer>
            <CategoriesLink>
              <CategoriesPhotoUpLeft src={imageUpLeft} alt="Categories_2" />
            </CategoriesLink>
            <CategoriesLink href="#">
              <CategoriesPhotoUpRight src={imageUpRight} alt="Categories_3" />
            </CategoriesLink>
          </CategoriesPhotoUpContainer>

          <CategoriesLink href="#">
            <CategoriesPhotoDown src={imageDown} alt="Categories_4" />
          </CategoriesLink>
        </CategoriesPhotoRightWrap>
      </CategoriesWrap>
    </StyledCategories>
  );
};
