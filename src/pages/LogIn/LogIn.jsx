import { NavLink } from "react-router-dom";

const LogIn = () => {
  return (
    <>
      <h1>Login Page</h1>
      <NavLink to="/" style={{ marginRight: "10px" }}>
        Home
      </NavLink>
      <NavLink to="/signup">Signup</NavLink>
    </>
  );
};

export default LogIn;
