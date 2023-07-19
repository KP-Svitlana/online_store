import { Formik, Field } from "formik";
import { Button } from "../Button";
import { StyledForm } from "./SignUpForm.styled";

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
        }}
      >
        <StyledForm>
          <label htmlFor="firstName">
            Ім'я
            <Field
              id="firstName"
              name="firstName"
              placeholder="Ім'я"
              type="text"
            />
          </label>

          <label htmlFor="lastName">
            Прізвище
            <Field
              id="lastName"
              name="lastName"
              placeholder="Прізвище"
              type="text"
            />
          </label>

          <label htmlFor="email">
            Email
            <Field id="email" name="email" placeholder="Email" type="email" />
          </label>
          <label htmlFor="tel">
            Email
            <Field id="tel" name="tel" placeholder="+380" type="text" />
          </label>
          <label htmlFor="password">
            Пароль
            <Field
              id="password"
              name="password"
              placeholder="Пароль"
              type="text"
            />
          </label>

          <Button text={"Зареєструватись"} />
        </StyledForm>
      </Formik>
    </>
  );
};
