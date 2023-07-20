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
} from "./SignUp.Styled";

const SignUp = () => {
  return (
    <>
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
      <NavLink to="/" style={{ marginRight: "10px" }}>
        Main
      </NavLink>
    </>
  );
};

export default SignUp;
