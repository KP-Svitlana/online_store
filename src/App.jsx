import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";

const MainPage = lazy(() => import("./pages/Main/Main"));
const LogInPage = lazy(() => import("./pages/LogIn/LogIn"));
const SingUpPage = lazy(() => import("./pages/SignUp/SignUp"));

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<MainPage />} />
          <Route path="/login" element={<LogInPage />} />
          <Route path="/signup" element={<SingUpPage />} />
          <Route path="*" element={<MainPage />} />
        </Route>
      </Routes>
    </Suspense>
  );
}

export default App;
