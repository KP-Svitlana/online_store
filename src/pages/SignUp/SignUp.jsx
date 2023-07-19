import { NavLink } from "react-router-dom";
import { SignUpForm } from "../../components/SignUpForm";
import { StyledTitle, StyledAfterTitle, StyledWrap } from "./SignUp.Styled";

const SignUp = () => {
  return (
    <>
      <StyledWrap>
        <StyledTitle>Створити акаунт</StyledTitle>
        <StyledAfterTitle>
          Lorem ipsum dolor sit amet consectetur
        </StyledAfterTitle>

        <SignUpForm />
        <NavLink to="/" style={{ marginRight: "10px" }}>
          Main
        </NavLink>
        <NavLink to="/login">Увійти</NavLink>
      </StyledWrap>
    </>
  );
};

export default SignUp;
