import styled from "@emotion/styled";
import {device} from '../../styles/mediaVeriables.js';
import { transition } from "../../styles/variables";

export const ProductItemSt = styled.li`
  width: calc((100% - 16px) / 2);
  transition:box-shadow ${transition.transitionDuration} ${transition.cubicBezie};

  @media ${device.tablet} {
    width: 342px;
  }

  @media ${device.desktop} {
    width: 304px;
  }
  
  :hover{
    box-shadow:  0px 1px 1px rgba(0, 0, 0, 0.12), 0px 4px 4px rgba(0, 0, 0, 0.06),
    1px 4px 6px rgba(0, 0, 0, 0.16);
    -webkit-box-shadow: 0px 0px 16px -1px rgba(18,20,18,0.75);
    -moz-box-shadow: 0px 0px 16px -1px rgba(18,20,18,0.75);
  }
`;

export const ProductImgSt = styled.img`
  width: 100%;
  height: auto;
  margin-bottom: 16px;

  @media ${device.tablet} {
    width: 100%;
    height: 450px;
  }

  @media ${device.desktop} {
    width: 100%;
    height: 400px;
  }
`;

export const ItemBoxSt = styled.div`
  padding: 8px;
`;

export const ProductTitleSt = styled.h3`
  font-size: 14px;
  font-weight: 500;
  line-height: 1.3;
  letter-spacing: 1px;
  margin-bottom: 16px;

  @media ${device.tablet} {
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
  margin: 16px 0;

  @media ${device.tablet} {
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

  @media ${device.tabletBefore} {
    display: none;
  }
`;

export const SpanPriceSt = styled.span`
  font-size: 16px;
  font-weight: 600;
  line-height: 1.25;
  letter-spacing: 1px;
`;

export const BtnBoxSt = styled.div`
  margin-bottom: 32px;
  width: 100%;
`;
