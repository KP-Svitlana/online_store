import React from 'react';
import { NavLink } from 'react-router-dom';
import { StyledFooter, StyledFooterMenu, StyledFooterLinks, StyledFooterImage, StyledFooterContacts, StyledFooterAddress, StyledFooterAddressText,StyledFooterPhone,StyledFooterPhoneNum,StyledFooterEmail,StyledFooterEmailExa,StyledFooterTime,StyledFooterNav,StyledFooterShop,StyledFooterShopTitle,StyledFooterMenuItem,StyledFooterItemMenu,StyledFooterCompany,StyledFooterHelp,StyledFooterLine,StyledLineFooter,StyledFooterCopy,StyledFooterLink,StyledFooterPrivacy,StyledFooterTerms  } from "./Footer.styled";
import logoImage from './icons/Logo.png';

export const Footer = () => {
  return (
    <StyledFooter>
      <StyledFooterMenu>
        <StyledFooterLinks>
          <StyledFooterImage src={logoImage} alt="Logo"/>
        </StyledFooterLinks>
        <StyledFooterContacts>
          <StyledFooterAddress>
            <StyledFooterAddressText>Київ, вул. Шевченка, 21</StyledFooterAddressText>
          </StyledFooterAddress>
          <StyledFooterPhone>
            <StyledFooterPhoneNum>+38 (800) 000-000</StyledFooterPhoneNum>
          </StyledFooterPhone>
          <StyledFooterEmail>
            <StyledFooterEmailExa>example@gmail.com</StyledFooterEmailExa>
          </StyledFooterEmail>
          <StyledFooterTime>пн-пт: з 9:00 до 18:00 <br />сб-нд: з 10:00 до 17:00</StyledFooterTime>
        </StyledFooterContacts>
      </StyledFooterMenu>
      <StyledFooterNav>
        <StyledFooterShop>
          <StyledFooterShopTitle>МАГАЗИН</StyledFooterShopTitle>
          <StyledFooterMenuItem>
            <StyledFooterItemMenu>
              <NavLink to="#" activeClassName="active">Новинки</NavLink>
            </StyledFooterItemMenu>
            <StyledFooterItemMenu>
              <NavLink to="#" activeClassName="active">Каталог</NavLink>
            </StyledFooterItemMenu>
            <StyledFooterItemMenu>
              <NavLink to="#" activeClassName="active">Колекції</NavLink>
            </StyledFooterItemMenu>
            <StyledFooterItemMenu>
              <NavLink to="#" activeClassName="active">Взуття</NavLink>
            </StyledFooterItemMenu>
            <StyledFooterItemMenu>
              <NavLink to="#" activeClassName="active">Аксесуари</NavLink>
            </StyledFooterItemMenu>
            <StyledFooterItemMenu>
              <NavLink to="#" activeClassName="active">Розпродаж</NavLink>
            </StyledFooterItemMenu>
          </StyledFooterMenuItem>
        </StyledFooterShop>
        <StyledFooterCompany>
          <StyledFooterShopTitle>КОМПАНІЯ</StyledFooterShopTitle>
          <StyledFooterMenuItem>
            <StyledFooterItemMenu>
              <NavLink to="#" activeClassName="active">Про нас</NavLink>
            </StyledFooterItemMenu>
            <StyledFooterItemMenu>
              <NavLink to="#" activeClassName="active">Контакти</NavLink>
            </StyledFooterItemMenu>
            <StyledFooterItemMenu>
              <NavLink to="#" activeClassName="active">Відгуки</NavLink>
            </StyledFooterItemMenu>
            <StyledFooterItemMenu>
              <NavLink to="#" activeClassName="active">Оферта</NavLink>
            </StyledFooterItemMenu>
            <StyledFooterItemMenu>
              <NavLink to="#" activeClassName="active">Блог</NavLink>
            </StyledFooterItemMenu>
          </StyledFooterMenuItem>
        </StyledFooterCompany>
        <StyledFooterHelp>
          <StyledFooterShopTitle>ДОПОМОГА</StyledFooterShopTitle>
          <StyledFooterMenuItem>
            <StyledFooterItemMenu>
              <NavLink to="#" activeClassName="active">Оформлення замовлень</NavLink>
            </StyledFooterItemMenu>
            <StyledFooterItemMenu>
              <NavLink to="#" activeClassName="active">Доставка і оплата</NavLink>
            </StyledFooterItemMenu>
            <StyledFooterItemMenu>
              <NavLink to="#" activeClassName="active">Гарантія та повернення</NavLink>
            </StyledFooterItemMenu>
            <StyledFooterItemMenu>
              <NavLink to="#" activeClassName="active">Умови акцій</NavLink>
            </StyledFooterItemMenu>
            <StyledFooterItemMenu>
              <NavLink to="#" activeClassName="active">FAQ</NavLink>
            </StyledFooterItemMenu>
            <StyledFooterItemMenu>
              <NavLink to="#" activeClassName="active">Terms&amp;Conditions</NavLink>
            </StyledFooterItemMenu>
            <StyledFooterItemMenu>
              <NavLink to="#" activeClassName="active">Політика конфіденційності</NavLink>
            </StyledFooterItemMenu>
          </StyledFooterMenuItem>
        </StyledFooterHelp>
      </StyledFooterNav>
      <StyledFooterLine>
        <StyledLineFooter></StyledLineFooter>
        <StyledFooterCopy>©2023 Logo All right reserved</StyledFooterCopy>
        <StyledFooterLink>
          <StyledFooterPrivacy>Privacy Policy</StyledFooterPrivacy>
          <StyledFooterTerms>Terms of Service</StyledFooterTerms>
        </StyledFooterLink>
      </StyledFooterLine>
    </StyledFooter>
  );
};
