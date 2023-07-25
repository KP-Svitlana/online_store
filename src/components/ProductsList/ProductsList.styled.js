import styled from "@emotion/styled";
import {paletteGray} from '../../styles/variables.js';

export const ProductsSectionSt = styled.section`
  padding: 60px 0;

  @media ${device.desktop} {
    padding: 80px 0;
  }
`;


export const ProductsTitleSt = styled.h2`
  color: ${paletteGray.text};
  font-family: "Gothic A1", sans-serif;
  font-size: 24px;
  font-weight: 500;
  line-height: 1.3;
  letter-spacing: 2px;
  text-transform: uppercase;
  margin-bottom: 32px;

  @media (min-width: 760px) {
    font-size: 24px;
    line-height: 1.25;
    letter-spacing: 1px;
  }
`;

export const ProductsWrapperSt = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ProductsListSt = styled.ul`
  color: ${paletteGray.text};
  font-family: "Gothic A1", sans-serif;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-bottom: 32px;
`;