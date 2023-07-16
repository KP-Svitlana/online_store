import { NavLink } from "react-router-dom";

const Main = () => {
  return (
    <>
      <h1>Main Page</h1>
      <NavLink to="/login" style={{ marginRight: "10px" }}>
        Login
      </NavLink>
      <NavLink to="/signup">Signup</NavLink>
    </>
  );
};

export default Main;
