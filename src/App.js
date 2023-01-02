import React, { Suspense } from "react";
import { lazy } from "react";
import { Route, Routes } from "react-router-dom";
import LayoutDashBoard from "./layout/LayoutDashBoard.js";
import CampaignView from "./modules/campaign/CampaignView.js";
import DashBoardPage from "./pages/DashBoardPage.js";

const SignUpPage = lazy(() => import("./pages/SignUpPage.js"));
const SignInPage = lazy(() => import("./pages/SignInPage.js"));
const CampaignPage = lazy(() => import("./pages/CampaignPage.js"));
const StartCampaignPage = lazy(() => import("./pages/StartCampaignPage.js"));

function App() {
  return (
    <Suspense>
      <Routes>
        <Route element={<LayoutDashBoard></LayoutDashBoard>}>

          <Route path="/" element={<DashBoardPage></DashBoardPage>}></Route>

          <Route
            path="/campaign"
            element={<CampaignPage></CampaignPage>}
          ></Route>

          <Route
            path="/start-campaign"
            element={<StartCampaignPage></StartCampaignPage>}
          ></Route>

          <Route
            path="/campaign/:slug"
            element={<CampaignView></CampaignView>}
          ></Route>

        </Route>
        <Route path="/sign-up" element={<SignUpPage></SignUpPage>}></Route>
        <Route path="/sign-in" element={<SignInPage></SignInPage>}></Route>
      </Routes>
    </Suspense>
  );
}

export default App;
