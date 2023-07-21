import { useState } from "react";
import {
  StyledLabel,
  StyledInputWrap,
  StyledInput,
  StyledIconBtn,
  StyledStar,
} from "./AuthField.styled";
import { paletteGray } from "../../styles/variables";
import { ReactComponent as EyeCloseIcon } from "../../assets/svg/eyeClosed.svg";
import { ReactComponent as EyeOpenIcon } from "../../assets/svg/eyeOpen.svg";

export const AuthField = ({ name, type, placeholder = "", labelName }) => {
  const [visible, setVisible] = useState(false);

  const onIconBtnCLick = () => {
    setVisible((prevState) => !prevState);
  };

  return (
    <StyledInputWrap>
      <StyledLabel htmlFor={name}>
        {labelName} <StyledStar>*</StyledStar>
      </StyledLabel>
      <StyledInput
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
      />
      {type === "password" && (
        <StyledIconBtn onClick={onIconBtnCLick} type="button">
          {visible ? (
            <EyeCloseIcon
              style={{
                width: "24px",
                hieght: "24px",
                color: `${paletteGray.Gray_80}`,
              }}
            />
          ) : (
            <EyeOpenIcon
              style={{
                width: "24px",
                hieght: "24px",
                color: `${paletteGray.Gray_80}`,
                cursor: "pointer",
              }}
            />
          )}
        </StyledIconBtn>
      )}
    </StyledInputWrap>
  );
};
