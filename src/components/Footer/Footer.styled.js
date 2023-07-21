import styled from "@emotion/styled";

export const StyledFooter = styled.footer`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    flex-wrap: wrap;
    font-size: 14px;
    align-content: flex-end;
    width: 100%;
    min-height: 100vh;
    padding: 80px 30px 0 30px;
`;
export const StyledFooterMenu = styled.div`
    display: flex;
    gap: 36px;
    align-items: flex-start;
    justify-content: center;
    flex-shrink: 0;
    position: relative;
    flex-wrap: wrap;
    flex-direction: column;
    @media (max-width: 768px) {
        flex-direction: row;
        justify-content: flex-start;
        gap: 36px;
    }
`;
export const StyledFooterLinks = styled.a`
    text-align: left;
    text-decoration: none;
    color: inherit;
    position: relative;
`;
export const StyledFooterImage = styled.img`
`;
export const StyledFooterContacts = styled.address`
    display: flex;
    flex-direction: column;
    gap: 16px;
    align-items: flex-start;
    justify-content: center;
    line-height: 1.3;
`;
export const StyledFooterAddress = styled.div`
    display: flex;
    flex-direction: row;
    gap: 12px;
    align-items: center;
    justify-content: center;
`;
export const StyledFooterAddressText = styled.p`
    text-align: left;
`;
export const StyledFooterPhone = styled.div`
    display: flex;
    flex-direction: row;
    gap: 12px;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
`;
export const StyledFooterPhoneNum = styled.p`
    text-align: left;
`;
export const StyledFooterEmail = styled.div`
    display: flex;
    flex-direction: row;
    gap: 12px;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    position: relative;
`;
export const StyledFooterEmailExa = styled.p`
    text-align: left;
`;
export const StyledFooterTime = styled.div`
    text-align: left;
`;
export const StyledFooterNav = styled.nav`
    display: flex;
    flex-direction: row;
    gap: 66px;
    align-items: flex-start;
    justify-content: flex-start;
    flex-shrink: 0;
    flex-wrap: wrap;
    margin-left: auto;
    @media (max-width: 768px) { 
        margin-top: auto;
        margin-left: 0;
    }
`;
export const StyledFooterShop = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    flex-shrink: 0;
    gap: 24px;
`;
export const StyledFooterShopTitle = styled.h1`
    text-align: left;
    font-weight: 600;
    line-height: 1.3;
    font-size: 14px;
`;
export const StyledFooterMenuItem = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 16px;
    align-items: flex-start;
    justify-content: center;
    flex-shrink: 0;
    position: relative;
    font-weight: 400;
    line-height: 1.5;
    font-size: 14px;
`;
export const StyledFooterItemMenu = styled.li`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    flex-shrink: 0;
    position: relative;
    a {
        text-decoration: none;
        color: inherit;
    }
`;
export const StyledFooterCompany = styled.div`
    display: flex;
    flex-direction: column;
    gap: 24px;
    align-items: flex-start;
    justify-content: center;
    flex-shrink: 0;
    position: relative;
`;
export const StyledFooterHelp = styled.div`
    display: flex;
    flex-direction: column;
    gap: 24px;
    align-items: flex-start;
    justify-content: center;
    flex-shrink: 0;
    position: relative;
`;
export const StyledFooterLine = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between;
    flex-wrap: wrap;
    width: 100%;
    position: relative;
    margin-top: 80px;
`;
export const StyledLineFooter = styled.div`
    border-style: solid;
    border-color: #515151;
    border-width: 1px 0 0 0;
    flex-shrink: 0;
    width: 100%;
    position: relative;
    margin-bottom: 24px;
`;
export const StyledFooterCopy = styled.div`
    color: #515151;
    text-align: left;
    position: relative;
`;
export const StyledFooterLink = styled.ul`
    display: flex;
    flex-direction: row;
    gap: 32px;
    align-items: flex-start;
    justify-content: flex-start;
    position: relative;
    list-style-type: none;
`;
export const StyledFooterPrivacy = styled.li`
    color: #515151;
    text-align: left;
    position: relative;
`;
export const StyledFooterTerms = styled.li`
    color: #515151;
    text-align: left;
    position: relative;
`;