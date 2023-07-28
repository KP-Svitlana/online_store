import React from 'react';
import { useState, useEffect } from 'react';
import {
  StyledCategories,
  CategoriesText,
  CategoriesPhotoRightWrap,
  CategoriesWrap,
  CategoriesPhotoUpContainer,
  CategoriesLink,
  CategoriesPhotoLeft,
  CategoriesPhotoDown,
  CategoriesPhotoUpLeft,
  CategoriesPhotoUpRight
} from "./Categories.styled";
import imageLeft from "../../assets/img/CategoriesLeft.png";
import imageUpLeft from "../../assets/img/CategoriesUpLeft.png";
import imageUpRight from "../../assets/img/CategoriesUpRight.png";
import imageDown from "../../assets/img/CategoriesRightDown.png";

const getNumOfPhotosToDisplay = (windowWidth) => {
  return windowWidth <= 1440 ? 1 : 2;
};

export const Categories = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [numOfPhotosToDisplay, setNumOfPhotosToDisplay] = useState(getNumOfPhotosToDisplay(windowWidth));

  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    setNumOfPhotosToDisplay(getNumOfPhotosToDisplay(windowWidth));
  }, [windowWidth]);

  const renderCategoriesPhotos = () => {
    const photosToDisplay = [imageLeft, imageUpLeft, imageUpRight, imageDown].slice(0, numOfPhotosToDisplay);

    return photosToDisplay.map((photo, index) => (
      <CategoriesLink to="#" key={index}>
        <CategoriesPhotoLeft src={photo} alt={`Categories_${index + 1}`} />
      </CategoriesLink>
    ));
  };

  return (
    <StyledCategories>
      <CategoriesText>Категорії</CategoriesText>
      <CategoriesWrap>
        {renderCategoriesPhotos()}
        <CategoriesPhotoRightWrap>
          <CategoriesPhotoUpContainer>
            <CategoriesLink to="#">
              <CategoriesPhotoUpLeft src={imageUpLeft} alt="Categories_2" />
            </CategoriesLink>
            <CategoriesLink to="#">
              <CategoriesPhotoUpRight src={imageUpRight} alt="Categories_3" />
            </CategoriesLink>
          </CategoriesPhotoUpContainer>
          <CategoriesLink to="#">
            <CategoriesPhotoDown src={imageDown} alt="Categories_4" />
          </CategoriesLink>
        </CategoriesPhotoRightWrap>
      </CategoriesWrap>
    </StyledCategories>
  );
};
