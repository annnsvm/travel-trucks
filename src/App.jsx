import { Route, Routes } from "react-router-dom";
import { Suspense } from "react";
import { lazy } from "react";
import Layout from "./components/Layout/Layout";

const HomePage = lazy(() => import("./pages/HomePage/HomePage"));
const CataloguePage = lazy(() => import("./pages/CataloguePage/CataloguePage"));
const TruckPage = lazy(() => import("./pages/TruckPage/TruckPage"));
const FavoritesPage = lazy(() => import("./pages/FavoritesPage/FavoritesPage"));
const NotFoundPage = lazy(() => import("./pages/NotFoundPage/NotFoundPage"));

function App() {
  return (
    <Layout>
      <Suspense>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/catalog" element={<CataloguePage />} />
          <Route path="/catalog/:id" element={<TruckPage />} />
          <Route path="/favorites" element={<FavoritesPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </Layout>
  );
}

export default App;
