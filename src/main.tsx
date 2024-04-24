import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Layout from "./Layout";
import PNF from "./components/layout/PNF";
import Search from "./pages/Search";
import Results from "./pages/Results";
import Display from "./pages/Display";
import DisplayAll from "./pages/DisplayAll";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="/" element={<Search />}>
        <Route path="searchResults/:kpTitle" element={<Results />}>
          <Route path=":kpId" element={<Display />} errorElement={<PNF />} />
        </Route>
      </Route>
      <Route path="/displayAll" element={<DisplayAll />}>
        <Route
          path="display/:kpId"
          element={<Display />}
          errorElement={<PNF />}
        />
      </Route>
      <Route path="*" element={<PNF />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
