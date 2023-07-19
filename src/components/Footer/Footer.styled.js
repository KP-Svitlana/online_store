import styled from "@emotion/styled";

export const StyledFooter = styled.div`
  .footer {
    display: flex;
    flex-direction: row;
    height: 558px;
    align-items: flex-start;
    justify-content: flex-start;
    flex-wrap: wrap;
    font-size: 14px;
    align-self: stretch;
    width: 100%;
    min-height: 100vh;
    padding: 120px 0 20px 0;
  }
  .footer_menu {
    display: flex;
    gap: 36px;
    align-items: flex-start;
    justify-content: center;
    flex-shrink: 0;
    position: relative;
    flex-wrap: wrap;
    flex-direction: column;
  }
  .footer_logo {
    text-align: left;
    position: relative;
  }
  .footer_contacts {
    display: flex;
    flex-direction: column;
    gap: 16px;
    align-items: flex-start;
    justify-content: center;
    line-height: 1.3;
  }
  .footer_adress {
    display: flex;
    flex-direction: row;
    gap: 12px;
    align-items: center;
    justify-content: center;
  }
  .footer_adress_text {
    text-align: left;
  }
  .footer_phone {
    display: flex;
    flex-direction: row;
    gap: 12px;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
  }
  .footer_phone_number {
    text-align: left;
  }
  .footer_email {
    display: flex;
    flex-direction: row;
    gap: 12px;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    position: relative;
  }
  .footer_email_example {
    text-align: left;
  }
  .footer_time {
    text-align: left;
  }
  .footer_navigation {
    display: flex;
    flex-direction: row;
    gap: 86px;
    align-items: flex-start;
    justify-content: flex-start;
    flex-shrink: 0;
    flex-wrap: wrap;
    margin-left: auto;
  }
  .footer_shop {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    flex-shrink: 0;
    gap: 24px;
  }
  .footer_menu-title {
    text-align: left;
    font-weight: 600;
    line-height: 1.3;
    font-size: 14px;
  }
  a {
    text-decoration: none;
    color: inherit;
  }
  .menu-footer_item {
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
  }
  .menu_item-footer {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    flex-shrink: 0;
    position: relative;
  }
  .menu_item {
    text-align: left;
    position: relative;
  }
  .footer_company {
    display: flex;
    flex-direction: column;
    gap: 24px;
    align-items: flex-start;
    justify-content: center;
    flex-shrink: 0;
    position: relative;
  }
  .footer_help {
    display: flex;
    flex-direction: column;
    gap: 24px;
    align-items: flex-start;
    justify-content: center;
    flex-shrink: 0;
    position: relative;
  }
  .faq_text {
    text-align: left;
    position: relative;
  }
  .terms_conditions {
    text-align: left;
    position: relative;
  }
  .footer-line {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between;
    flex-wrap: wrap;
    margin-top: auto;
    width: 100%;
    position: relative;
  }
  .line-footer {
    border-style: solid;
    border-color: #515151;
    border-width: 1px 0 0 0;
    flex-shrink: 0;
    width: 100%;
    position: relative;
    margin-bottom: 24px;
  }
  .footer__copy {
    color: #515151;
    text-align: left;
    position: relative;
  }
  .footer-line_text {
    padding: 0px 24px 20px 0px;
  }
  .footer_links {
    display: flex;
    flex-direction: row;
    gap: 32px;
    align-items: flex-start;
    justify-content: flex-start;
    position: relative;
    list-style-type: none;
  }
  .footer_privacy-policy,
  .footer_terms-of-service {
    color: #515151;
    text-align: left;
    position: relative;
  }
  @media (max-width: 768px) {
    .footer_menu {
        flex-direction: row;
        justify-content: flex-start;
        gap: 36px;
    }

    .footer_navigation {
      margin-top: auto;
      margin-left: 0;
    }
  }
`;