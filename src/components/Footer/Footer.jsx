import React from "react";

import {
  StyledFooter,
  StyledAddressWrap,
  StyledAddressMenu,
  StyledAddressText,
  StyledFooterNav,
  StyledNavList,
  StyledNavListItem,
  StyledList,
  StyledItem,
  StyledLink,
  StyledFooterIconWrap,
  StyledFooterLine,
  StyledFooterCopy,
  StyledFooterLink,
  StyledFooterNavMobile,
  StyledDropDown,
  StyledDropDownOption,
} from "./Footer.styled";
import logoImage from "/src/assets/img/logo.png";
import { SocialList } from "../SocialList/SocialList";
import { PaymentList } from "../PaymentList/PaymentList";
import { Logo } from "../Logo/Logo";

export const Footer = () => {
  return (
    <StyledFooter>
      <StyledAddressWrap>
        <Logo />

        <StyledAddressMenu>
          <StyledAddressText>Київ, вул. Шевченка, 21</StyledAddressText>
          <StyledAddressText>+38 (800) 000-000</StyledAddressText>
          <StyledAddressText>example@gmail.com</StyledAddressText>
          <StyledAddressText time>
            пн-пт: з 9:00 до 18:00 <br />
            сб-нд: з 10:00 до 17:00
          </StyledAddressText>
        </StyledAddressMenu>
      </StyledAddressWrap>

      <StyledFooterNav>
        <StyledNavList>
          <StyledNavListItem>
            Магазин
            <StyledList>
              <StyledItem>
                <StyledLink to="#">Новинки</StyledLink>
              </StyledItem>

              <StyledItem>
                <StyledLink to="#">Каталог</StyledLink>
              </StyledItem>

              <StyledItem>
                <StyledLink to="#">Колекції</StyledLink>
              </StyledItem>

              <StyledItem>
                <StyledLink to="#">Взуття</StyledLink>
              </StyledItem>

              <StyledItem>
                <StyledLink to="#">Аксесуари</StyledLink>
              </StyledItem>

              <StyledItem>
                <StyledLink to="#">Розпродаж</StyledLink>
              </StyledItem>
            </StyledList>
          </StyledNavListItem>

          <StyledNavListItem>
            Компанія
            <StyledList>
              <StyledItem>
                <StyledLink to="#">Про нас</StyledLink>
              </StyledItem>

              <StyledItem>
                <StyledLink to="#">Контакти</StyledLink>
              </StyledItem>

              <StyledItem>
                <StyledLink to="#">Відгуки</StyledLink>
              </StyledItem>

              <StyledItem>
                <StyledLink to="#">Оферта</StyledLink>
              </StyledItem>

              <StyledItem>
                <StyledLink to="#">Блог</StyledLink>
              </StyledItem>
            </StyledList>
          </StyledNavListItem>

          <StyledNavListItem>
            Допомога
            <StyledList>
              <StyledItem>
                <StyledLink to="#">Оформлення замовлень</StyledLink>
              </StyledItem>

              <StyledItem>
                <StyledLink to="#">Доставка і оплата</StyledLink>
              </StyledItem>

              <StyledItem>
                <StyledLink to="#">Гарантія та повернення</StyledLink>
              </StyledItem>

              <StyledItem>
                <StyledLink to="#">Умови акцій</StyledLink>
              </StyledItem>

              <StyledItem>
                <StyledLink to="#">FAQ</StyledLink>
              </StyledItem>

              <StyledItem>
                <StyledLink to="#">Terms&Conditions</StyledLink>
              </StyledItem>

              <StyledItem>
                <StyledLink to="#">Політика конфеденційності</StyledLink>
              </StyledItem>
            </StyledList>
          </StyledNavListItem>
        </StyledNavList>
      </StyledFooterNav>

      <StyledFooterNavMobile>
        <StyledDropDown>
          <StyledDropDownOption value="help" autoFocus>
            ДОПОМОГА
          </StyledDropDownOption>
          <StyledDropDownOption value="order">
            Оформлення замовлень
          </StyledDropDownOption>
          <StyledDropDownOption value="delivery">
            Доставка і оплата
          </StyledDropDownOption>
          <StyledDropDownOption value="return">
            Гарантія та повернення
          </StyledDropDownOption>
          <StyledDropDownOption value="conditions">
            Умови акцій
          </StyledDropDownOption>
          <StyledDropDownOption value="question">FAQ</StyledDropDownOption>
          <StyledDropDownOption value="terms">
            Terms&Conditions
          </StyledDropDownOption>
          <StyledDropDownOption value="policy">
            Політика конфеденційності
          </StyledDropDownOption>
        </StyledDropDown>
        <StyledDropDown>
          <StyledDropDownOption value="help" autoFocus>
            МАГАЗИН
          </StyledDropDownOption>
          <StyledDropDownOption value="new">Новинки</StyledDropDownOption>
          <StyledDropDownOption value="catalogue">Каталог</StyledDropDownOption>
          <StyledDropDownOption value="collections">
            Колекції
          </StyledDropDownOption>
          <StyledDropDownOption value="footwear">Взуття</StyledDropDownOption>
          <StyledDropDownOption value="accessories">
            Аксесуари
          </StyledDropDownOption>
          <StyledDropDownOption value="sale">Розпродаж</StyledDropDownOption>
        </StyledDropDown>
        <StyledDropDown>
          <StyledDropDownOption value="help" autoFocus>
            КОМПАНІЯ
          </StyledDropDownOption>
          <StyledDropDownOption value="about us">Про нас</StyledDropDownOption>
          <StyledDropDownOption value="contscts">Контакти</StyledDropDownOption>
          <StyledDropDownOption value="reviews">Відгуки</StyledDropDownOption>
          <StyledDropDownOption value="offer">Оферта</StyledDropDownOption>
          <StyledDropDownOption value="blog">Блог</StyledDropDownOption>
        </StyledDropDown>
      </StyledFooterNavMobile>

      <StyledFooterIconWrap>
        <SocialList />
        <PaymentList />
      </StyledFooterIconWrap>

      <StyledFooterLine>
        <StyledFooterCopy>©2023 Logo All right reserved</StyledFooterCopy>
        <StyledFooterLink>
          <StyledItem>
            <StyledLink color="true">Privacy Policy</StyledLink>
          </StyledItem>
          <StyledItem>
            <StyledLink color="true">Terms of Service</StyledLink>
          </StyledItem>
        </StyledFooterLink>
      </StyledFooterLine>
    </StyledFooter>
  );
};
