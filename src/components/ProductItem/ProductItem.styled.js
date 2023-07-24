import styled from "@emotion/styled";

export const ProductItemSt = styled.li`
  width: calc((100% - 90px) / 2);
  margin: 15px;
  
  @media (min-width: 1200px) {
    width: calc(100% / 5);
    margin: 8px;
  }
`;

export const ProductImgSt = styled.img`
  width: 175px;
  height: 240px;

  @media (min-width: 760px) {
    width: 324px;
    height: 450px;
  }

  @media (min-width: 1200px) {
    width: 304px;
    height: 400px;
  }
`;

export const ProductTitleSt = styled.h3`
  font-size: 14px;
  font-weight: 500;
  line-height: 1.3;
  letter-spacing: 1px;

  @media (min-width: 760px) {
    font-size: 16px;
    font-weight: 600;
    line-height: 1.25;
  }
`;

export const ProductPriceSt = styled.p`
  font-size: 20px;
  font-weight: 600;
  line-height: 1.3;
  letter-spacing: 2px;
  
  @media (min-width: 760px) {
    font-size: 24px;
    line-height: 1.25;
    letter-spacing: 1px;
  }
`;

export const OldProductPriceSt = styled.p`
  font-size: 12px;
  font-weight: 400;
  line-height: 1.5;
  letter-spacing: 2px;
  text-decoration: line-through;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const SpanPriceSt = styled.span`
  font-size: 16px;
  font-weight: 600;
  line-height: 1.25;
  letter-spacing: 1px;
`;

