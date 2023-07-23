import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { StyledFooter, StyledFooterContainer, StyledFooterMenu, StyledFooterLinks,StyledFooterIconItem,StyledFooterIconBtn, StyledFooterImage, StyledFooterContacts, StyledFooterNavSpoilerFirst, StyledFooterNavSpoilerSec, StyledFooterNavSpoilerThird, StyledFooterAddress, StyledFooterAddressText,StyledFooterPhone,StyledFooterPhoneNum,StyledFooterEmail,StyledFooterEmailExa,StyledFooterTime,StyledFooterNav,StyledFooterShop,StyledFooterShopTitle,StyledFooterMenuItem,StyledFooterItemMenu,StyledFooterCompany,StyledFooterHelp,StyledFooterLine,StyledLineFooter,StyledFooterCopy,StyledFooterLink,StyledFooterPrivacy,StyledFooterTerms  } from "./Footer.styled";
import logoImage from '/src/assets/img/logo.png';
import { SocialList } from "../SocialList/SocialList";
import { PaymentList } from '../PaymentList/PaymentList';
import { paletteGray } from "../../styles/variables";
import { ReactComponent as DownIcon } from "../../assets/svg/up.svg";
import { ReactComponent as UpIcon } from "../../assets/svg/down.svg";


export const Footer = () => {
  const [isShopOpen, setIsShopOpen] = useState(false);
  const [isCompanyOpen, setIsCompanyOpen] = useState(false);
  const [isHelpOpen, setIsHelpOpen] = useState(false);

  const handleShopClick = () => {
    setIsShopOpen(!isShopOpen);
  };
  
  const handleCompanyClick = () => {
    setIsCompanyOpen(!isCompanyOpen);
  };
  
  const handleHelpClick = () => {
    setIsHelpOpen(!isHelpOpen);
  };     
  
  const onIconBtnCLick = () => {
    setVisible((prevState) => !prevState);
  };

  return (
    <StyledFooter>
      <StyledFooterContainer>
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
            <StyledFooterShopTitle onClick={handleShopClick}>
              МАГАЗИН
              <StyledFooterIconBtn onClick={onIconBtnCLick} type="button">
                {isShopOpen ? (
                  <DownIcon
                    style={{
                      width: "16px",
                      height: "16px",
                      color: `${paletteGray.Gray_80}`,
                    }}
                  />
                ) : (
                  <UpIcon
                    style={{
                      width: "16px",
                      height: "16px",
                      color: `${paletteGray.Gray_80}`,
                      cursor: "pointer",
                    }}
                  />
                )}
              </StyledFooterIconBtn>
            </StyledFooterShopTitle>
            <StyledFooterNavSpoilerFirst isNavOpen1={isShopOpen}>
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
            </StyledFooterNavSpoilerFirst>
          </StyledFooterShop>
          <StyledFooterCompany>
            <StyledFooterShopTitle onClick={handleShopClick}>
              КОМПАНІЯ
              <StyledFooterIconBtn onClick={onIconBtnCLick} type="button">
                {isShopOpen ? (
                  <DownIcon
                    style={{
                      width: "16px",
                      height: "16px",
                      color: `${paletteGray.Gray_80}`,
                    }}
                  />
                ) : (
                  <UpIcon
                    style={{
                      width: "16px",
                      height: "16px",
                      color: `${paletteGray.Gray_80}`,
                      cursor: "pointer",
                    }}
                  />
                )}
              </StyledFooterIconBtn>
            </StyledFooterShopTitle>
            <StyledFooterNavSpoilerSec isNavOpen2={isCompanyOpen}>
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
            </StyledFooterNavSpoilerSec>
          </StyledFooterCompany>
          <StyledFooterHelp>
            <StyledFooterShopTitle onClick={handleShopClick}>
              ДОПОМОГА
              <StyledFooterIconBtn onClick={onIconBtnCLick} type="button">
                {isShopOpen ? (
                  <DownIcon
                    style={{
                      width: "16px",
                      height: "16px",
                      color: `${paletteGray.Gray_80}`,
                    }}
                  />
                ) : (
                  <UpIcon
                    style={{
                      width: "16px",
                      height: "16px",
                      color: `${paletteGray.Gray_80}`,
                      cursor: "pointer",
                    }}
                  />
                )}
              </StyledFooterIconBtn>
            </StyledFooterShopTitle>
            <StyledFooterNavSpoilerThird isNavOpen3={isHelpOpen}>
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
            </StyledFooterNavSpoilerThird>
          </StyledFooterHelp>
        </StyledFooterNav>
        <StyledFooterIconItem>
          <SocialList />
          <PaymentList />
        </StyledFooterIconItem>
        <StyledFooterLine>
          <StyledLineFooter></StyledLineFooter>
          <StyledFooterCopy>©2023 Logo All right reserved</StyledFooterCopy>
          <StyledFooterLink>
            <StyledFooterPrivacy>Privacy Policy</StyledFooterPrivacy>
            <StyledFooterTerms>Terms of Service</StyledFooterTerms>
          </StyledFooterLink>
        </StyledFooterLine>
      </StyledFooterContainer>
    </StyledFooter>
  );
};
