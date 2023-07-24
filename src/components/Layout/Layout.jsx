import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { Header } from "../Header";
import { Footer } from "../Footer";
import { Container } from "../Container";
import Slider from "../Slider/SLider";

const Layout = () => {
  return (
    <>
      <Container>
        <Header />
        <Slider />
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
        <Footer />
      </Container>
    </>
  );
};

export default Layout;
