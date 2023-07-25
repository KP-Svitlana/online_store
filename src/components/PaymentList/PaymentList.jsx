import React from "react";
import { StyledFooterPayment, StyledFooterPaymentText, StyledFooterPaymentItem, StyledFooterPaymentList, StyledPaymentLink,
} from "./PaymentList.styled";
import { ReactComponent as AppleIcon } from "../../assets/svg/applePay.svg";
import { ReactComponent as GooglePayIcon } from "../../assets/svg/googlePay.svg";
import { ReactComponent as MasterIcon } from "../../assets/svg/masterCard.svg";
import { ReactComponent as VisaIcon } from "../../assets/svg/visa.svg";

export const PaymentList = () => {
  return (
    <>
      <StyledFooterPayment>
        <StyledFooterPaymentText>Способи оплати</StyledFooterPaymentText>
        <StyledFooterPaymentList>
          <StyledFooterPaymentItem>
            <StyledPaymentLink href="#">
              <AppleIcon styles={{ width: "36px", height: "14px" }} />
            </StyledPaymentLink>
          </StyledFooterPaymentItem>
          <StyledFooterPaymentItem>
            <StyledPaymentLink href="#">
              <GooglePayIcon styles={{ width: "36px", height: "14px" }} />
            </StyledPaymentLink>
          </StyledFooterPaymentItem>
          <StyledFooterPaymentItem>
            <StyledPaymentLink href="#">
              <MasterIcon styles={{ width: "36px", height: "14px" }} />
            </StyledPaymentLink>
          </StyledFooterPaymentItem>
          <StyledFooterPaymentItem>
            <StyledPaymentLink href="#">
              <VisaIcon styles={{ width: "36px", height: "14px" }} />
            </StyledPaymentLink>
          </StyledFooterPaymentItem>
        </StyledFooterPaymentList>
      </StyledFooterPayment>
    </>
  );
};