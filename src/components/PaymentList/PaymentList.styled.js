import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import { paletteGray } from "../../styles/variables";
import { device } from "../../styles/mediaVeriables";

export const StyledFooterPayment = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;
export const StyledFooterPaymentText = styled.p`
  font-size: 14px;
  font-weight: 700;
  line-height: 1.3;
  text-transform: uppercase;

  @media ${device.tablet} {
    font-weight: 600;
    line-height: 1.25;
  }
`;
export const StyledFooterPaymentList = styled.ul`
  display: flex;
  flex-direction: row;
  gap: 12px;
  list-style: none;
`;
export const StyledFooterPaymentItem = styled.li`
  border-radius: 4px;
  border: 0.5px solid ${paletteGray.Gray_60};
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StyledPaymentLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 6px 11px;
`;