import { Formik, Field } from "formik";
import { Button } from "../Button";
import { AuthField } from "../AuthField/AuthField";
import {
  StyledForm,
  StyledInputWrap,
  StyledBtnWrap,
  StyledLabel,
  StyledChekboxWrap,
  StyledChekbox,
} from "./SignUpForm.styled";

export const SignUpForm = () => {
  return (
    <>
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
          tel: "",
          password: "",
          toggle: false,
        }}
      >
        <StyledForm>
          <StyledInputWrap>
            <AuthField
              name={"firstName"}
              type={"text"}
              placeholder={"Ім'я"}
              labelName={"Ім'я"}
            />
            <AuthField
              name={"lastName"}
              type={"text"}
              placeholder={"Прізвище"}
              labelName={"Прізвище"}
            />
          </StyledInputWrap>
          <AuthField
            name={"email"}
            type={"email"}
            placeholder={"Email"}
            labelName={"Email"}
          />
          <AuthField
            name={"tel"}
            type={"number"}
            placeholder={"+380"}
            labelName={"Телефон"}
          />
          <AuthField
            name={"password"}
            type={"password"}
            placeholder={"Пароль"}
            labelName={"Пароль"}
          />
          <StyledChekboxWrap>
            <StyledChekbox
              id={"checkbox"}
              name={"checkbox"}
              type={"checkbox"}
            />
            <StyledLabel htmlFor={"checkbox"}>
              Я погоджуюсь з Privacy policy
            </StyledLabel>
          </StyledChekboxWrap>
          <StyledBtnWrap>
            <Button text={"Зареєструватись"} />
          </StyledBtnWrap>
        </StyledForm>
      </Formik>
    </>
  );
};
