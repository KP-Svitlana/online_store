import { NavLink } from "react-router-dom";
import { SignUpForm } from "../../components/SignUpForm";
import { LoginByGoogle } from "../../components/LoginByGoogle/LoginByGoogle";
import {
  StyledTitle,
  StyledAfterTitle,
  StyledWrap,
  StyledLink,
  StyledText,
  StyledLinkWrap,
  StyledPageWrap,
  StyledImg,
  StyledImgWrap,
} from "./SignUp.Styled";

import { device } from "../../styles/mediaVeriables";

import photo_1x from "../../assets/img/SignUpPage_desktop_1x.png";
import photo_2x from "../../assets/img/SignUpPage_desktop_2x.png";
import photo_t_1x from "../../assets/img/SignUpPage_tablet_1x.png";
import photo_t_2x from "../../assets/img/SignUpPage_tablet_2x.png";
import photo_m_1x from "../../assets/img/SignUpPage_mobile_1x.png";
import photo_m_2x from "../../assets/img/SignUpPage_mobile_2x.png";

const SignUp = () => {
  return (
    <>
      <StyledPageWrap>
        <StyledWrap>
          <StyledTitle>Створити акаунт</StyledTitle>
          <StyledAfterTitle>
            Lorem ipsum dolor sit amet consectetur
          </StyledAfterTitle>

          <SignUpForm />
          <StyledLinkWrap>
            <StyledText>Уже є аккаунт?</StyledText>
            <StyledLink to="/login">Увійти</StyledLink>
          </StyledLinkWrap>
          <LoginByGoogle />
        </StyledWrap>
        <StyledImgWrap>
          <StyledImg>
            <source
              media={device.tabletBefore}
              srcSet={`${photo_m_1x} 1x, ${photo_m_2x} 2x`}
            />
            <source
              media={device.tabletOnly}
              srcSet={`${photo_t_1x} 1x, ${photo_t_2x} 2x`}
            />
            <source
              media={device.desktop}
              srcSet={`${photo_1x} 1x, ${photo_2x} 2x`}
            />
            <img src={photo_m_1x} alt="Girl with a dress" />
          </StyledImg>
        </StyledImgWrap>
      </StyledPageWrap>
      <NavLink to="/" style={{ marginRight: "10px" }}>
        Main
      </NavLink>
    </>
  );
};

export default SignUp;
