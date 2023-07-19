import { NavLink } from "react-router-dom";
import { SignUpForm } from "../../components/SignUpForm";

const SignUp = () => {
  return (
    <>
      <h1>SignUp Page</h1>
      <SignUpForm />
      <NavLink to="/" style={{ marginRight: "10px" }}>
        Main
      </NavLink>
      <NavLink to="/login">Login</NavLink>
    </>
  );
};

export default SignUp;
