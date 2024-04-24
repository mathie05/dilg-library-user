import { Outlet, useLocation } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";

function Layout() {
  const location = useLocation();
  const excludeResults = /^\/searchResults\/[^/]+$/;
  const excludeDisplay = /^\/searchResults\/[^/]+\/[^/]+$/;
  const excludeDisplay2 = /^\/displayAll\/display\/[^/]+$/;

  const renderFooter =
    !excludeResults.test(location.pathname) &&
    !excludeDisplay.test(location.pathname) &&
    !excludeDisplay2.test(location.pathname);

  return (
    <>
      <Navbar />
      <Outlet />
      {renderFooter && <Footer />}
    </>
  );
}

export default Layout;
