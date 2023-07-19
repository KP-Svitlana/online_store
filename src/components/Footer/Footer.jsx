import React from 'react';
import { NavLink } from 'react-router-dom';
import { StyledFooter } from "./Footer.styled";
import logoImage from './icons/Logo.png';

export const Footer = ({}) => {
  return (
    <StyledFooter>
    <footer className="footer">
      <div className="footer_menu">
        <a href="#" className="footer_logo">
          <img src={logoImage} alt="Logo" />
        </a>
        <div className="footer_contacts">
          <div className="footer_adress">
            <p className="footer_adress_text">Київ, вул. Шевченка, 21</p>
          </div>
          <div className="footer_phone">
            <p className="footer_phone_number">+38 (800) 000-000</p>
          </div>
          <div className="footer_email">
            <p className="footer_email_example">example@gmail.com</p>
          </div>
          <div className="footer_time">
            пн-пт: з 9:00 до 18:00 <br />сб-нд: з 10:00 до 17:00
          </div>
        </div>
      </div>
      <div className="footer_navigation">
        <div className="footer_shop">
          <h1 className="footer_menu-title">МАГАЗИН</h1>
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
          <h1 className="footer_menu-title">КОМПАНІЯ</h1>
          <ul className="menu-footer_item">
            <li className="menu_item-footer">
              <NavLink to="#" activeClassName="active">Про нас</NavLink>
            </li>
            <li className="menu_item-footer">
              <NavLink to="#" activeClassName="active">Контакти</NavLink>
            </li>
            <li className="menu_item-footer">
              <NavLink to="#" activeClassName="active">Відгуки</NavLink>
            </li>
            <li className="menu_item-footer">
              <NavLink to="#" activeClassName="active">Оферта</NavLink>
            </li>
            <li className="menu_item-footer">
              <NavLink to="#" activeClassName="active">Блог</NavLink>
            </li>
          </ul>
        </div>
        <div className="footer_help">
          <h1 className="footer_menu-title">ДОПОМОГА</h1>
          <ul className="menu-footer_item">
            <li className="menu_item-footer">
              <NavLink to="#" activeClassName="active">Оформлення замовлень</NavLink>
            </li>
            <li className="menu_item-footer">
              <NavLink to="#" activeClassName="active">Доставка і оплата</NavLink>
            </li>
            <li className="menu_item-footer">
              <NavLink to="#" activeClassName="active">Гарантія та повернення</NavLink>
            </li>
            <li className="menu_item-footer">
              <NavLink to="#" activeClassName="active">Умови акцій</NavLink>
            </li>
            <li className="menu_item-footer">
              <NavLink to="#" activeClassName="active">FAQ</NavLink>
            </li>
            <li className="menu_item-footer">
              <NavLink to="#" activeClassName="active">Terms&amp;Conditions</NavLink>
            </li>
            <li className="menu_item-footer">
              <NavLink to="#" activeClassName="active">Політика конфіденційності</NavLink>
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
    </StyledFooter>
  );
};

