import React from 'react';
import { StyledFooter, StyledFooterCopy, StyledFooterListItem, StyledFooterLink, StyledFooterMenuItem, StyledFooterNav, StyledFooterItemMenu, StyledFooterAddressContainer, StyledFooterList, StyledFooterMenuDown, StyledNavLink, StyledFooterListMobile, StyledFooterAddress, StyledFooterAddressText, StyledFooterDrop, StyledFooterIconItem, StyledFooterLine } from "./Footer.styled";
import { SocialList } from "../SocialList/SocialList";
import { PaymentList } from "../PaymentList/PaymentList";
import { Logo } from "../Logo/Logo";

export const Footer = () => {
  return (
    <StyledFooter>
      <StyledFooterAddressContainer>
        <Logo />
        <StyledFooterAddress>
          <StyledFooterAddressText>Київ, вул. Шевченка, 21</StyledFooterAddressText>
          <StyledFooterAddressText>+38 (800) 000-000</StyledFooterAddressText>
          <StyledFooterAddressText>example@gmail.com</StyledFooterAddressText>
          <StyledFooterAddressText time>пн-пт: з 9:00 до 18:00 <br />сб-нд: з 10:00 до 17:00</StyledFooterAddressText>
        </StyledFooterAddress>
      </StyledFooterAddressContainer>

      <StyledFooterNav>
        <StyledFooterList>
          <StyledFooterMenuItem>Магазин
            <StyledFooterListItem>
              <StyledFooterItemMenu>
                <StyledNavLink to="#">Новинки</StyledNavLink>
              </StyledFooterItemMenu>
              <StyledFooterItemMenu>
                <StyledNavLink to="#">Каталог</StyledNavLink>
              </StyledFooterItemMenu>
              <StyledFooterItemMenu>
                <StyledNavLink to="#">Колекції</StyledNavLink>
              </StyledFooterItemMenu>
              <StyledFooterItemMenu>
                <StyledNavLink to="#">Взуття</StyledNavLink>
              </StyledFooterItemMenu>
              <StyledFooterItemMenu>
                <StyledNavLink to="#">Аксесуари</StyledNavLink>
              </StyledFooterItemMenu>
              <StyledFooterItemMenu>
                <StyledNavLink to="#">Розпродаж</StyledNavLink>
              </StyledFooterItemMenu>
            </StyledFooterListItem>
          </StyledFooterMenuItem>
        
          <StyledFooterMenuItem>Компанія
            <StyledFooterListItem>
              <StyledFooterItemMenu>
                <StyledNavLink to="#">Про нас</StyledNavLink>
              </StyledFooterItemMenu>
              <StyledFooterItemMenu>
                <StyledNavLink to="#">Контакти</StyledNavLink>
              </StyledFooterItemMenu>
              <StyledFooterItemMenu>
                <StyledNavLink to="#">Відгуки</StyledNavLink>
              </StyledFooterItemMenu>
              <StyledFooterItemMenu>
                <StyledNavLink to="#">Оферта</StyledNavLink>
              </StyledFooterItemMenu>
              <StyledFooterItemMenu>
                <StyledNavLink to="#">Блог</StyledNavLink>
              </StyledFooterItemMenu>
            </StyledFooterListItem>
          </StyledFooterMenuItem>

          <StyledFooterMenuItem>Допомога
            <StyledFooterListItem>
              <StyledFooterItemMenu>
                <StyledNavLink to="#">Оформлення замовлень</StyledNavLink>
              </StyledFooterItemMenu>
              <StyledFooterItemMenu>
                <StyledNavLink to="#">Доставка і оплата</StyledNavLink>
              </StyledFooterItemMenu>
              <StyledFooterItemMenu>
                <StyledNavLink to="#">Гарантія та повернення</StyledNavLink>
              </StyledFooterItemMenu>
              <StyledFooterItemMenu>
                <StyledNavLink to="#">Умови акцій</StyledNavLink>
              </StyledFooterItemMenu>
              <StyledFooterItemMenu>
                <StyledNavLink to="#">FAQ</StyledNavLink>
              </StyledFooterItemMenu>
              <StyledFooterItemMenu>
                <StyledNavLink to="#">Terms&Conditions</StyledNavLink>
              </StyledFooterItemMenu>
              <StyledFooterItemMenu>
                <StyledNavLink to="#">Політика конфеденційності</StyledNavLink>
              </StyledFooterItemMenu>
            </StyledFooterListItem>
          </StyledFooterMenuItem>
        </StyledFooterList>
      </StyledFooterNav>

      <StyledFooterListMobile>
        <StyledFooterDrop>
          <StyledFooterMenuDown value="help" autoFocus>ДОПОМОГА</StyledFooterMenuDown>
          <StyledFooterMenuDown value="order">Оформлення замовлень</StyledFooterMenuDown>
          <StyledFooterMenuDown value="delivery">Доставка і оплата</StyledFooterMenuDown>
          <StyledFooterMenuDown value="return">Гарантія та повернення</StyledFooterMenuDown>
          <StyledFooterMenuDown value="conditions">Умови акцій</StyledFooterMenuDown>
          <StyledFooterMenuDown value="question">FAQ</StyledFooterMenuDown>
          <StyledFooterMenuDown value="terms">Terms&amp;Conditions</StyledFooterMenuDown>
          <StyledFooterMenuDown value="policy">Політика конфіденційності</StyledFooterMenuDown>
        </StyledFooterDrop>
        <StyledFooterDrop>
          <StyledFooterMenuDown value="help" autoFocus>МАГАЗИН</StyledFooterMenuDown>
          <StyledFooterMenuDown value="catalogue">Каталог</StyledFooterMenuDown>
          <StyledFooterMenuDown value="collections">Колекції</StyledFooterMenuDown>
          <StyledFooterMenuDown value="footwear">Взуття</StyledFooterMenuDown>
          <StyledFooterMenuDown value="accessories">Аксесуари</StyledFooterMenuDown>
          <StyledFooterMenuDown value="sale">Розпродаж</StyledFooterMenuDown>
        </StyledFooterDrop>

        <StyledFooterDrop>
          <StyledFooterMenuDown value="help" autoFocus>КОМПАНІЯ</StyledFooterMenuDown>
          <StyledFooterMenuDown value="about us">Про нас</StyledFooterMenuDown>
          <StyledFooterMenuDown value="contacts">Контакти</StyledFooterMenuDown>
          <StyledFooterMenuDown value="reviews">Відгуки</StyledFooterMenuDown>
          <StyledFooterMenuDown value="offer">Оферта</StyledFooterMenuDown>
          <StyledFooterMenuDown value="blog">Блог</StyledFooterMenuDown>
        </StyledFooterDrop>
      </StyledFooterListMobile>

      <StyledFooterIconItem>
        <SocialList />
        <PaymentList />
      </StyledFooterIconItem>            

      <StyledFooterLine>
        <StyledFooterCopy>©2023 Logo All right reserved</StyledFooterCopy>
        <StyledFooterLink>
          <StyledFooterItemMenu>
            <StyledNavLink color="true">Privacy Policy</StyledNavLink>
          </StyledFooterItemMenu>
          <StyledFooterItemMenu>
            <StyledNavLink color="true">Terms of Service</StyledNavLink>
          </StyledFooterItemMenu>
        </StyledFooterLink>
      </StyledFooterLine>
    </StyledFooter>
  );
};
