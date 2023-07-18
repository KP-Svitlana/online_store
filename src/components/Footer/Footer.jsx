import React from 'react';
import { css } from '@emotion/react';
import { NavLink } from 'react-router-dom';

export const Footer = ({}) => {
  return (
    <footer className="footer" css={footerStyles}>
      <div className="footer_menu">
        <a href="#" className="footer_logo">Logo</a>
        <div className="footer_contacts">
          <div className="footer_adress">
            <div className="footer_adress_text">Київ, вул. Шевченка, 21</div>
          </div>
          <div className="footer_phone">
            <div className="footer_phone_number">+38 (800) 000-000</div>
          </div>
          <div className="footer_email">
            <div className="footer_email_example">example@gmail.com</div>
          </div>
          <div className="footer_time">
            пн-пт: з 9:00 до 18:00 <br />сб-нд: з 10:00 до 17:00
          </div>
        </div>
      </div>
      <div className="footer_navigation">
        <div className="footer_shop">
          <div className="footer_shop_title">МАГАЗИН</div>
          <ul className="menu-footer_item">
            <li className="menu_item-footer">
              <NavLink to="#" activeClassName="active">Новинки</NavLink>
            </li>
            <li className="menu_item-footer">
              <NavLink to="#" activeClassName="active">Каталог</NavLink>
            </li>
            <li className="menu_item-footer">
              <NavLink to="#" activeClassName="active">Колекції</NavLink>
            </li>
            <li className="menu_item-footer">
              <NavLink to="#" activeClassName="active">Взуття</NavLink>
            </li>
            <li className="menu_item-footer">
              <NavLink to="#" activeClassName="active">Аксесуари</NavLink>
            </li>
            <li className="menu_item-footer">
              <NavLink to="#" activeClassName="active">Розпродаж</NavLink>
            </li>
          </ul>
        </div>
        <div className="footer_company">
          <div className="footer_company_title">КОМПАНІЯ</div>
          <ul className="menu-footer_item">
            <li className="menu_item-footer">
              <NavLink to="/about">Про нас</NavLink>
            </li>
            <li className="menu_item-footer">
              <NavLink to="/contact">Контакти</NavLink>
            </li>
            <li className="menu_item-footer">
              <NavLink to="/reviews">Відгуки</NavLink>
            </li>
            <li className="menu_item-footer">
              <NavLink to="/offer">Оферта</NavLink>
            </li>
            <li className="menu_item-footer">
              <NavLink to="/blog">Блог</NavLink>
            </li>
          </ul>
        </div>
        <div className="footer_help">
          <div className="footer_help_title">ДОПОМОГА</div>
          <ul className="menu-footer_item">
            <li className="menu_item-footer">
              <NavLink to="/order">Оформлення замовлень</NavLink>
            </li>
            <li className="menu_item-footer">
              <NavLink to="/delivery">Доставка і оплата</NavLink>
            </li>
            <li className="menu_item-footer">
              <NavLink to="/warranty">Гарантія та повернення</NavLink>
            </li>
            <li className="menu_item-footer">
              <NavLink to="/promotions">Умови акцій</NavLink>
            </li>
            <li className="menu_item-footer">
              <NavLink to="/faq">FAQ</NavLink>
            </li>
            <li className="menu_item-footer">
              <NavLink to="/terms">Terms&amp;Conditions</NavLink>
            </li>
            <li className="menu_item-footer">
              <NavLink to="/privacy-policy">Політика конфіденційності</NavLink>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer-line">
        <div className="line-footer"></div>
        <div className="footer__copy">
          ©2023 Logo All right reserved
        </div>
        <ul className="footer_links">
          <li className="footer_privacy-policy">Privacy Policy</li>
          <li className="footer_terms-of-service">Terms of Service</li>
        </ul>
      </div>
    </footer>
  );
};

const footerStyles = css`
  .footer {
    padding: 120px 80px 0px 80px;
    display: flex;
    flex-direction: row;
    height: 558px;
    align-items: flex-start;
    justify-content: flex-start;
    flex-wrap: wrap;
    font-size: 14px;
    align-self: stretch;
    position: fixed;
    width: 100%;
    margin: 0px auto;
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
    font: 600 40px/130%;
    position: relative;
  }
  .footer_contacts {
    display: flex;
    flex-direction: column;
    gap: 16px;
    align-items: flex-start;
    justify-content: center;
    flex-shrink: 0;
  }
  .footer_adress {
    display: flex;
    flex-direction: row;
    gap: 12px;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
  }
  .footer_adress_text {
    color: #000000;
    text-align: left;
    font: 400 14px/130%;
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
    color: #000000;
    text-align: left;
    font: 400 14px/130%;
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
    color: #000000;
    text-align: left;
    font: 400 14px/130%;
  }
  .footer_time {
    color: #000000;
    text-align: left;
    font: 400 14px/150%;
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
  .footer_shop_title {
    color: #000000;
    text-align: left;
    font: 700 14px/130%;
  }
  .menu-footer_item {
    display: flex;
    flex-direction: column;
    gap: 16px;
    align-items: flex-start;
    justify-content: center;
    flex-shrink: 0;
    position: relative;
    list-style-type: none;
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
    color: #000000;
    text-align: left;
    font: 400 14px/130%;
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
  .footer_company_title {
    color: #000000;
    text-align: left;
    font: 700 14px/130%;
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
  .footer_help_title {
    color: #000000;
    text-align: left;
    font: 700 14px/130%;
    position: relative;
  }
  .faq_text {
    color: #000000;
    text-align: left;
    font: 400 14px/150%;
    position: relative;
  }
  .terms_conditions {
    color: #000000;
    text-align: left;
    font: 400 14px/150%;
    position: relative;
  }
  .footer-line {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between;
    flex-wrap: wrap;
    flex-shrink: 0;
    width: 100%;
    position: relative;
  }
  .line-footer {
    border-style: solid;
    border-color: #515151;
    border-width: 1px 0 0 0;
    flex-shrink: 0;
    width: 100%;
    height: 0px;
    position: relative;
    margin-bottom: 24px;
  }
  .footer__copy {
    color: #515151;
    text-align: left;
    font: 400 14px/130%;
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
    flex-shrink: 0;
    position: relative;
    list-style-type: none;
  }
  .footer_privacy-policy,
  .footer_terms-of-service {
    color: #515151;
    text-align: left;
    font: 400 14px/130%;
    position: relative;
  }
`;

