import { Formik } from "formik";
import { Button } from "../Button";
import { AuthField } from "../AuthField/AuthField";
import {
  StyledForm,
  StyledInputWrap,
  StyledBtnWrap,
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
          <StyledBtnWrap>
            <Button text={"Зареєструватись"} />
          </StyledBtnWrap>
        </StyledForm>
      </Formik>
    </>
  );
};
