import styled from "@emotion/styled";

export const StyledFooterPayment = styled.div`
    display: flex;
    flex-direction: column;
    gap: 24px;
    align-items: flex-start;
    justify-content: center;
    align-self: stretch;
    flex-shrink: 0;
    position: relative;
`;
export const StyledFooterPaymentText = styled.p`
    text-align: left;
    font-size: 14px;
    font-weight: 700;
    line-height: 1.3;
    letter-spacing: 1px;
    position: relative;
`;
export const StyledFooterPaymentIcons = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    flex-shrink: 0;
    position: relative;
`;
export const StyledFooterPaymentMenu = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    position: relative;
`;
export const StyledFooterIconsPayment = styled.img`
    width: 60px;
    height: 30px;
    @media (max-width: 768px) {
        width: 48px;
        height: 30px;
    }
`;

