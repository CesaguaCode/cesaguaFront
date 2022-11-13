import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import { ProtectedRoute } from "../utils/ProtectedRoute";
import { UnprotectedRoute } from "../utils/UnprotectedRoute";

import IconsPage from "../pages/general/IconsPage/Index";

import PageTemplate from "../shared/Template/PageTemplate";
import AnimatedWaves from "../shared/AnimatedWaves/AnimatedWaves";
import IndexPage from "../pages/general/IndexPage/Index";
import SitemapPage from "../pages/general/SitemapPage/Index";
import Error404Page from "../pages/general/Error404Page";
import LoginPage from "../pages/login/LoginPage";
import RequestRecoverPage from "../pages/login/RequestRecoverPage";
import ResetPasswordPage from "../pages/login/ResetPasswordPage";

import MilestonesListPage from "../pages/milestones/MilestonesListPage/Index";
import MilestonesTablePage from "../pages/milestones/MilestonesTablePage";
import MilestonesCreatePage from "../pages/milestones/MilestonesCreatePage";

import ServicesListPage from "../pages/services/ServicesListPage";
import ServiceDetailPage from "../pages/services/ServicesDetailPage";
import ServicesTablePage from "../pages/services/ServicesTablePage";

import PinsListPage from "../pages/pins/PinsListPage/PinsListPage";
import PinsCreatePage from "../pages/pins/PinsCreatePage";
import PinsTablePage from "../pages/pins/PinsTablePage";
import ServiceCreatePage from "../pages/services/ServicesCreatePage";

const AuthRouter = () => {

  /**
   * This mehod contains the public routes of the app
   * @returns Public routes of the app
   */
  const PublicRoutes = () => <>
      <Route path="/" element={<IndexPage></IndexPage>}></Route>
      <Route path="/sitemap" element={<SitemapPage></SitemapPage>}></Route>
      <Route path="/milestones" element={<MilestonesListPage />}></Route>
      <Route path="/pins" element={<PinsListPage />}></Route>
      <Route path="/services" element={<ServicesListPage />}></Route>
      <Route path="/services/*" element={<ServiceDetailPage />}></Route>
      // TODO: Eliminar en produccion
      <Route path="/icons" element={<IconsPage></IconsPage>}></Route>
    </>

  /**
   * This mehod contains the private routes of the app
   * @returns Private routes of the app
   */
  const PrivateRoutes = () => <>
      <Route path="/milestones/crud" element={<MilestonesTablePage />}/>
      <Route path="/milestones/create" element={<MilestonesCreatePage />}/>
      <Route path="/milestones/edit/:id" element={<MilestonesCreatePage />}/>

      <Route path="/services/crud" element={<ServicesTablePage />}/>
      <Route path="/services/create" element={<ServiceCreatePage />}/>

      <Route path="/pins/crud" element={<PinsTablePage />}/>
      <Route path="/pins/create" element={<PinsCreatePage />}/>
      <Route path="/pins/edit/:id" element={<PinsCreatePage />}/>
    </>

  const LoginRoutes = () => <>
        <Route path="/" element={<AnimatedWaves />}>
          <Route path="/login" element={<LoginPage />}></Route>
          <Route path="/recover" element={<RequestRecoverPage />}></Route>
          <Route path="/reset/:token" element={<ResetPasswordPage />}></Route>
        </Route>
      </>

  return (
    <Router>
      <Routes>
        <Route path="/" element={<PageTemplate />}>
          {PublicRoutes()}
          <Route path="/" element={<ProtectedRoute />}>
            {PrivateRoutes()}
          </Route>

          
          <Route path="/" element={<UnprotectedRoute />}>
            {LoginRoutes()}
          </Route>

          <Route path="/" element={<AnimatedWaves />}>
            <Route path="*" element={<Error404Page />} />
          </Route>
          
        </Route>
      </Routes>
    </Router>
  );
};

export default AuthRouter;
