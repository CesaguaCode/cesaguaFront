import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import { ProtectedRoute } from "../utils/ProtectedRoute";
import IndexPage from "../pages/general/IndexPage/Index";
import PageTemplate from "../shared/Template/PageTemplate";
import SitemapPage from "../pages/general/SitemapPage/Index";
import IconsPage from "../pages/general/IconsPage/Index";
import MilestonesListPage from "../pages/milestones/MilestonesListPage/Index";

const AuthRouter = () => {
  /**
   * This mehod contains the public routes of the app
   * @returns Public routes of the app
   */
  const PublicRoutes = () => (
    <>
    <Route path="/" element={<IndexPage></IndexPage>}></Route>
    <Route path="/sitemap" element={<SitemapPage></SitemapPage>}></Route>
    <Route path="/milestones">
      <Route path="/milestones" element={<MilestonesListPage />}></Route>
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
    <Route
      path="/auth"element={
        <>
          <h1>Esto es privado</h1>
        </>
      }
    ></Route>
  );

  return (
    <Router>
      <Routes>
        <Route path="/" element={<PageTemplate/>}>

          {PublicRoutes()}

          <Route path="/" element={<ProtectedRoute/>}>
            {PrivateRoutes()}
          </Route>

          <Route path="*" element={<p>There's nothing here: 404!</p>} />

        </Route>
      </Routes>
    </Router>
  );
};

export default AuthRouter;
