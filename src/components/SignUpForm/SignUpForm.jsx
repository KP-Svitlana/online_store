import { Formik, Field } from "formik";
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
          <label htmlFor="firstName">Ім'я</label>
          <Field
            id="firstName"
            name="firstName"
            placeholder="Ім'я"
            type="text"
          />

          <label htmlFor="lastName">Прізвище</label>
          <Field
            id="lastName"
            name="lastName"
            placeholder="Прізвище"
            type="text"
          />

          <label htmlFor="email">Email</label>
          <Field id="email" name="email" placeholder="Email" type="email" />

          <label htmlFor="tel">Email</label>
          <Field id="tel" name="tel" placeholder="+380" type="text" />

          <label htmlFor="password">Пароль</label>
          <Field
            id="password"
            name="password"
            placeholder="Пароль"
            type="text"
          />

          <button type="submit">Submit</button>
        </StyledForm>
      </Formik>
    </>
  );
};
