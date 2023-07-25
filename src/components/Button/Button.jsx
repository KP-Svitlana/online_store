import { StyledButton } from "./Button.styled";

export const Button = ({ text, handleLoadMore }) => {
    return(
        <StyledButton onClick={handleLoadMore} type="submit">{text}</StyledButton>

    )
}


