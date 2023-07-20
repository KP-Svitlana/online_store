import React from 'react';
import { NavLink } from 'react-router-dom';
import { StyledFooter, StyledFooterMenu, StyledFooterLinks, StyledFooterImage, StyledFooterContacts, StyledFooterAddress, StyledFooterAddressText,StyledFooterPhone,StyledFooterPhoneNum,StyledFooterEmail,StyledFooterEmailExa,StyledFooterTime,StyledFooterNav,StyledFooterShop,StyledFooterShopTitle,StyledFooterMenuItem,StyledFooterItemMenu,StyledFooterCompany,StyledFooterHelp,StyledFooterLine,StyledLineFooter,StyledFooterCopy,StyledFooterLink,StyledFooterPrivacy,StyledFooterTerms  } from "./Footer.styled";
import logoImage from '/src/assets/img/logo.png';

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
              <NavLink to="#" activeclassname="active">Новинки</NavLink>
            </StyledFooterItemMenu>
            <StyledFooterItemMenu>
              <NavLink to="#" activeclassname="active">Каталог</NavLink>
            </StyledFooterItemMenu>
            <StyledFooterItemMenu>
              <NavLink to="#" activeclassname="active">Колекції</NavLink>
            </StyledFooterItemMenu>
            <StyledFooterItemMenu>
              <NavLink to="#" activeclassname="active">Взуття</NavLink>
            </StyledFooterItemMenu>
            <StyledFooterItemMenu>
              <NavLink to="#" activeclassname="active">Аксесуари</NavLink>
            </StyledFooterItemMenu>
            <StyledFooterItemMenu>
              <NavLink to="#" activeclassname="active">Розпродаж</NavLink>
            </StyledFooterItemMenu>
          </StyledFooterMenuItem>
        </StyledFooterShop>
        <StyledFooterCompany>
          <StyledFooterShopTitle>КОМПАНІЯ</StyledFooterShopTitle>
          <StyledFooterMenuItem>
            <StyledFooterItemMenu>
              <NavLink to="#" activeclassname="active">Про нас</NavLink>
            </StyledFooterItemMenu>
            <StyledFooterItemMenu>
              <NavLink to="#" activeclassname="active">Контакти</NavLink>
            </StyledFooterItemMenu>
            <StyledFooterItemMenu>
              <NavLink to="#" activeclassname="active">Відгуки</NavLink>
            </StyledFooterItemMenu>
            <StyledFooterItemMenu>
              <NavLink to="#" activeclassname="active">Оферта</NavLink>
            </StyledFooterItemMenu>
            <StyledFooterItemMenu>
              <NavLink to="#" activeclassname="active">Блог</NavLink>
            </StyledFooterItemMenu>
          </StyledFooterMenuItem>
        </StyledFooterCompany>
        <StyledFooterHelp>
          <StyledFooterShopTitle>ДОПОМОГА</StyledFooterShopTitle>
          <StyledFooterMenuItem>
            <StyledFooterItemMenu>
              <NavLink to="#" activeclassname="active">Оформлення замовлень</NavLink>
            </StyledFooterItemMenu>
            <StyledFooterItemMenu>
              <NavLink to="#" activeclassname="active">Доставка і оплата</NavLink>
            </StyledFooterItemMenu>
            <StyledFooterItemMenu>
              <NavLink to="#" activeclassname="active">Гарантія та повернення</NavLink>
            </StyledFooterItemMenu>
            <StyledFooterItemMenu>
              <NavLink to="#" activeclassname="active">Умови акцій</NavLink>
            </StyledFooterItemMenu>
            <StyledFooterItemMenu>
              <NavLink to="#" activeclassname="active">FAQ</NavLink>
            </StyledFooterItemMenu>
            <StyledFooterItemMenu>
              <NavLink to="#" activeclassname="active">Terms&amp;Conditions</NavLink>
            </StyledFooterItemMenu>
            <StyledFooterItemMenu>
              <NavLink to="#" activeclassname="active">Політика конфіденційності</NavLink>
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
