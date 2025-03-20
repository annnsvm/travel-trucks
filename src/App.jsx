import { Route, Routes } from "react-router-dom";
import { Suspense } from "react";
import { lazy } from "react";
import Layout from "./components/Layout/Layout";

const HomePage = lazy(() => import("./pages/HomePage"));

function App() {
  return (
    <Layout>
      <Suspense>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
        </Routes>
      </Suspense>
    </Layout>
  );
}

export default App;
