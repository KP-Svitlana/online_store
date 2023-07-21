import React from 'react';
import { StyledFooterPayment,StyledFooterPaymentText,StyledFooterPaymentIcons,StyledFooterPaymentMenu,StyledFooterIconsPayment  } from "./PaymentList.styled";
import { ReactComponent as AppleIcon } from "../../assets/svg/apple.svg";
import { ReactComponent as GooglePayIcon } from "../../assets/svg/googlepay.svg";
import { ReactComponent as MasterIcon } from "../../assets/svg/mastercard.svg";
import { ReactComponent as VisaIcon } from "../../assets/svg/visa.svg";

export const PaymentList = () => {
    return (
        <>
            <StyledFooterPayment>
                <StyledFooterPaymentText>СПОСОБИ ОПЛАТИ</StyledFooterPaymentText>
                <StyledFooterPaymentIcons>
                    <StyledFooterPaymentMenu>
                        <a href="#" target="_blank" rel="icon">
                        <AppleIcon />
                        </a>
                    </StyledFooterPaymentMenu>
                    <StyledFooterPaymentMenu>
                        <a href="#" target="_blank" rel="icon">
                        <GooglePayIcon />
                        </a>
                    </StyledFooterPaymentMenu>
                    <StyledFooterPaymentMenu>
                        <a href="#" target="_blank" rel="icon">
                        <MasterIcon />
                        </a>
                    </StyledFooterPaymentMenu>
                    <StyledFooterPaymentMenu>
                        <a href="#" target="_blank" rel="icon">
                        <VisaIcon />
                        </a>
                    </StyledFooterPaymentMenu>
                </StyledFooterPaymentIcons>
            </StyledFooterPayment>
        </>
  );
};
