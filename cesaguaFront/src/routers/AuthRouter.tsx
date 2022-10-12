import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import { ProtectedRoute } from "../utils/ProtectedRoute";
import IndexPage from "../pages/general/IndexPage/Index";
import PageTemplate from "../shared/Template/PageTemplate";
import SitemapPage from "../pages/general/SitemapPage/Index";
import IconsPage from "../pages/general/IconsPage/Index";

import MilestonesListPage from "../pages/milestones/MilestonesListPage/Index";
import MilestonesTablePage from "../pages/milestones/MilestonesTablePage";
import PinsListPage from "../pages/pins/PinsListPage/PinsListPage";
import ServicesListPage from "../pages/services/ServicesListPage";
import ServiceDetailPage from "../pages/services/ServicesDetailPage";
import LoginPage from "../pages/login/LoginPage";
import RequestRecoverPage from "../pages/login/RequestRecoverPage";
import ResetPasswordPage from "../pages/login/ResetPasswordPage";
import AnimatedWaves from "../shared/AnimatedWaves/AnimatedWaves";
import ServicesTablePage from "../pages/services/ServicesTablePage";
import Error404Page from "../pages/general/Error404Page";
import MilestonesCreatePage from "../pages/milestones/MilestonesCreatePage";
import PinsCreatePage from "../pages/pins/PinsCreatePage";

const AuthRouter = () => {
  /**
   * This mehod contains the public routes of the app
   * @returns Public routes of the app
   */
  const PublicRoutes = () => (
    <>
      <Route path="/" element={<IndexPage></IndexPage>}></Route>
      <Route path="/sitemap" element={<SitemapPage></SitemapPage>}></Route>

      <Route path="/milestones" element={<MilestonesListPage />}></Route>
      <Route path="/pins" element={<PinsListPage />}></Route>
      <Route path="/services" element={<ServicesListPage />}></Route>
      
      <Route path="/services/*" element={<ServiceDetailPage />}></Route>
      
      <Route path="/" element={<AnimatedWaves />}>
        <Route path="/login" element={<LoginPage />}></Route>
        <Route path="/recover" element={<RequestRecoverPage />}></Route>
        <Route path="/reset" element={<ResetPasswordPage />}></Route>
      </Route>

      // TODO: Eliminar en produccion
      <Route path="/icons" element={<IconsPage></IconsPage>}></Route>
    </>
  );

  /**
   * This mehod contains the private routes of the app
   * @returns Private routes of the app
   */
  const PrivateRoutes = () => (
    <>
      <Route path="/auth" element={<h1>Privado</h1>}></Route>
      <Route path="/milestones/crud" element={<MilestonesTablePage />}></Route>
      <Route path="/milestones/create" element={<MilestonesCreatePage />}></Route>
      <Route path="/milestones/edit/:id" element={<MilestonesCreatePage />}></Route>

      <Route path="/services/crud" element={<ServicesTablePage />}></Route>

      <Route path="/pins/create" element={<PinsCreatePage />}></Route>
    </>
  );

  return (
    <Router>
      <Routes>
        <Route path="/" element={<PageTemplate />}>
          {PublicRoutes()}

          <Route path="/" element={<ProtectedRoute />}>
            {PrivateRoutes()}
          </Route>

          <Route path="*" element={<Error404Page />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default AuthRouter;
