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
                        <AppleIcon 
                        style={{
                            width: "60px",
                            height: "30px",
                          }}
                        />
                        </a>
                    </StyledFooterPaymentMenu>
                    <StyledFooterPaymentMenu>
                        <a href="#" target="_blank" rel="icon">
                        <GooglePayIcon 
                        style={{
                            width: "60px",
                            height: "30px",
                          }}
                        />
                        </a>
                    </StyledFooterPaymentMenu>
                    <StyledFooterPaymentMenu>
                        <a href="#" target="_blank" rel="icon">
                        <MasterIcon 
                        style={{
                            width: "60px",
                            height: "30px",
                          }}
                        />
                        </a>
                    </StyledFooterPaymentMenu>
                    <StyledFooterPaymentMenu>
                        <a href="#" target="_blank" rel="icon">
                        <VisaIcon 
                        style={{
                            width: "60px",
                            height: "30px",
                          }}
                        />
                        </a>
                    </StyledFooterPaymentMenu>
                </StyledFooterPaymentIcons>
            </StyledFooterPayment>
        </>
  );
};
