import { StyledButton } from "./Button.styled";

export const Button = ({ text }) => {
  return (
    <>
      <StyledButton type="submit">{text}</StyledButton>
    </>
  );
};
