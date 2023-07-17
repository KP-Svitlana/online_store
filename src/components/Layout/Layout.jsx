import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { Header } from "../Header";
import { Footer } from "../Footer";
import { Container } from "../Container";

const Layout = () => {
  return (
    <>
      <Container>
        <Header />
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
        <Footer />
      </Container>
    </>
  );
};

export default Layout;
