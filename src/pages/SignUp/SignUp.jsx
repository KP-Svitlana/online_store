import { NavLink } from "react-router-dom";

const SignUp = () => {
  return (
    <>
      <h1>SignUp Page</h1>
      <NavLink to="/" style={{ marginRight: "10px" }}>
        Main
      </NavLink>
      <NavLink to="/login">Login</NavLink>
    </>
  );
};

export default SignUp;
