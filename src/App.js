import React, { Suspense } from "react";
import { lazy } from "react";
import { Route, Routes } from "react-router-dom";
import DashBoardPage from "./pages/DashBoardPage.js";

const SignUpPage = lazy(() => import("./pages/SignUpPage.js"));
const SignInPage = lazy(() => import("./pages/SignInPage.js"));

function App() {
  return (
    <Suspense>
      <Routes>
        <Route path="/" element={<DashBoardPage></DashBoardPage>}></Route>
        <Route path="/sign-up" element={<SignUpPage></SignUpPage>}></Route>
        <Route path="/sign-in" element={<SignInPage></SignInPage>}></Route>

      </Routes>
    </Suspense>
  );
}

export default App;
