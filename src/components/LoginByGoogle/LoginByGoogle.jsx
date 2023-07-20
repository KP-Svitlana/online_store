import {
  StyledText,
  StyledLink,
  StyledWrap,
  StyledGoogleImg,
  StyledLinkWrap,
} from "./LoginByGoogle.styled";
import { ReactComponent as GoogleIcon } from "../../assets/svg/google.svg";
import { ReactComponent as FacebookIcon } from "../../assets/svg/facebook.svg";

export const LoginByGoogle = () => {
  return (
    <>
      <StyledWrap>
        <StyledText>Увійти за допомогою:</StyledText>
        <StyledLinkWrap>
          <StyledLink>
            <StyledGoogleImg>
              <GoogleIcon />
            </StyledGoogleImg>
          </StyledLink>
          <StyledLink>
            <StyledGoogleImg>
              <FacebookIcon />
            </StyledGoogleImg>
          </StyledLink>
        </StyledLinkWrap>
      </StyledWrap>
    </>
  );
};
